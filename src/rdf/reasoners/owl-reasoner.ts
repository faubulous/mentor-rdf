import * as rdfjs from "@rdfjs/types";
import { owl, rdf, rdfs } from "../../ontologies";
import { ShaclReasoner } from "./shacl-reasoner";
import { GraphUriGenerator, DefaultInferenceGraphHandler } from "./reasoner";
import { dataFactory } from "../data-factory";

const { quad } = dataFactory;

/**
 * A restriction in OWL.
 */
interface OwlRestriction {
    onProperty?: rdfjs.NamedNode;
    cardinality?: number;
    minCardinality?: number;
    maxCardinality?: number;
    qualifiedCardinality?: number;
    onClass?: rdfjs.NamedNode;
    onDataRange?: rdfjs.NamedNode;
    allValuesFrom?: rdfjs.Quad_Subject | rdfjs.Quad_Object;
    someValuesFrom?: rdfjs.Quad_Subject | rdfjs.Quad_Object;
}

/**
 * A simple OWL reasoner that expands the graph with inferred triples.
 */
export class OwlReasoner extends ShaclReasoner {
    protected restrictions: { [subject: string]: OwlRestriction };

    constructor(targetUriGenerator: GraphUriGenerator = new DefaultInferenceGraphHandler()) {
        super(targetUriGenerator);

        this.restrictions = {};
    }

    protected afterInference(): void {
        super.afterInference();

        for (let r of Object.values(this.restrictions)) {
            const p = r.onProperty;

            if (!p) continue;

            if (r.onDataRange) {
                this.store.add(quad(p, rdf.type, owl.DatatypeProperty, this.targetGraph));
                this.store.add(quad(p, rdfs.range, r.onDataRange, this.targetGraph));
            } else if (r.onClass) {
                this.store.add(quad(p, rdf.type, owl.ObjectProperty, this.targetGraph));
                this.store.add(quad(p, rdfs.range, r.onClass, this.targetGraph));
            } else if (r.allValuesFrom) {
                this.store.add(quad(p, rdf.type, owl.ObjectProperty, this.targetGraph));
            } else if (r.someValuesFrom) {
                this.store.add(quad(p, rdf.type, owl.ObjectProperty, this.targetGraph));
            }
        }

        this.restrictions = {};
    }

    protected override resetState(): void {
        super.resetState();

        this.restrictions = {};
    }

    protected inferClassAxioms(q: rdfjs.Quad) {
        super.inferClassAxioms(q);

        let s = q.subject;
        let p = q.predicate;
        let o = q.object.termType != "Literal" ? q.object : undefined;

        if (!o) {
            return;
        }

        // See: https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules
        switch (p.value) {
            case rdf.type.value: {
                if (o.value == owl.Restriction.value) {
                    this.restrictions[s.value] = {};
                }

                return;
            }
            case owl.equivalentClass.value: {
                this.assertClass(s);

                if (o && !this.isW3CNode(o)) {
                    this.assertClass(o);
                }

                // The opposite is also true.
                if (o.termType == "NamedNode") {
                    this.store.add(quad(o, owl.equivalentClass, s, this.targetGraph));
                }

                return;
            }
            case owl.complementOf.value:
            case owl.disjointWith.value: {
                this.assertClass(s);

                if (o && !this.isW3CNode(o)) {
                    this.assertClass(o);
                }

                return;
            }
            case owl.intersectionOf.value: {
                let equivalentSubjects = [...this.store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-int
                let classes = this.getListItems(o.value);

                if (!Array.isArray(classes)) {
                    this.errors.push({ quad: q, message: `Expected an array of classes for ${o.value}` });
                    return;
                }

                for (let c of classes) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    this.store.add(quad(s, rdfs.subClassOf, c, this.targetGraph));

                    for (let es of equivalentSubjects) {
                        this.store.add(quad(es, rdfs.subClassOf, c, this.targetGraph));
                    }
                }

                return;
            }
            case owl.unionOf.value: {
                let equivalentSubjects = [...this.store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-uni
                let classes = this.getListItems(o.value);

                if (!Array.isArray(classes)) {
                    this.errors.push({ quad: q, message: `Expected an array of classes for ${o.value}` });
                    return;
                }

                for (let c of classes) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    this.store.add(quad(c, rdfs.subClassOf, s, this.targetGraph));

                    for (let es of equivalentSubjects) {
                        this.store.add(quad(c, rdfs.subClassOf, es, this.targetGraph));
                    }
                }

                return;
            }
            case owl.onClass.value: {
                if (o.termType == "NamedNode") {
                    this.assertClass(o);
                }

                return;
            }
            case owl.onDataRange.value: {
                if (o.termType == "NamedNode") {
                    this.store.add(quad(o, rdf.type, rdfs.Datatype, this.targetGraph));
                }

                return;
            }
            // Note:
            //   e.g. Gist also uses these on xsd:string, so inferring that this is a 
            //   class is technically true, however, it would lead to undesirable results.
            //
            // case owl.allValuesFrom.id: {
            //     if (o.termType == "NamedNode") {
            //         this.store.add(quad(o, rdf.type, rdfs.Class, this.targetGraph));
            //     }
            //
            //     return;
            // }
            // case owl.someValuesFrom.id: {
            //     if (o.termType == "NamedNode") {
            //         this.store.add(quad(o, rdf.type, rdfs.Class, this.targetGraph));
            //     }
            //
            //     break;
            // }
        }
    }

    protected inferPropertyAxioms(q: rdfjs.Quad) {
        super.inferPropertyAxioms(q);

        let s = q.subject;
        let p = q.predicate;
        let o = q.object.termType != "Literal" ? q.object : undefined;

        if (!o) {
            return;
        }

        switch (p.value) {
            case owl.onProperty.value: {
                this.assertProperty(o);

                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onProperty = o;
                }

                return;
            }
            case owl.onClass.value: {
                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onClass = o;
                }

                return;
            }
            case owl.onDataRange.value: {
                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onDataRange = o;
                }

                return;
            }
            case owl.allValuesFrom.value: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].allValuesFrom = o;
                }

                return;
            }
            case owl.someValuesFrom.value: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].someValuesFrom = o;
                }

                return;
            }
            case owl.equivalentProperty.value: {
                this.assertProperty(s);
                this.assertProperty(o);

                // The opposite is also true.
                if (o.termType == "NamedNode") {
                    this.store.add(quad(o, owl.equivalentProperty, s, this.targetGraph));
                }

                return;
            }
            case rdf.type.value: {
                switch (o.value) {
                    case owl.AnnotationProperty.value:
                    case owl.AsymmetricProperty.value:
                    case owl.DatatypeProperty.value:
                    case owl.DeprecatedProperty.value:
                    case owl.FunctionalProperty.value:
                    case owl.InverseFunctionalProperty.value:
                    case owl.IrreflexiveProperty.value:
                    case owl.ObjectProperty.value:
                    case owl.OntologyProperty.value:
                    case owl.ReflexiveProperty.value:
                    case owl.SymmetricProperty.value:
                    case owl.TransitiveProperty.value: {
                        this.assertProperty(s);
                    }
                }

                return;
            }
        }
    }
}