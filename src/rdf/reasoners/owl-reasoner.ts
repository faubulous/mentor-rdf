import * as n3 from "n3";
import { owl, rdf, rdfs } from "../../ontologies";
import { ShaclReasoner } from "./shacl-reasoner";

/**
 * A restriction in OWL.
 */
interface OwlRestriction {
    onProperty?: n3.NamedNode;
    cardinality?: number;
    minCardinality?: number;
    maxCardinality?: number;
    qualifiedCardinality?: number;
    onClass?: n3.NamedNode;
    onDataRange?: n3.NamedNode;
    allValuesFrom?: n3.Term;
    someValuesFrom?: n3.Term;
}

/**
 * A simple OWL reasoner that expands the graph with inferred triples.
 */
export class OwlReasoner extends ShaclReasoner {
    protected restrictions: { [subject: string]: OwlRestriction };

    constructor() {
        super();

        this.restrictions = {};
    }

    protected afterInference(): void {
        super.afterInference();

        for (let r of Object.values(this.restrictions)) {
            const p = r.onProperty;

            if (!p) continue;

            if (r.onDataRange) {
                this.store.addQuad(p, rdf.type, owl.DatatypeProperty, this.targetGraph);
                this.store.addQuad(p, rdfs.range, r.onDataRange, this.targetGraph);
            } else if (r.onClass) {
                this.store.addQuad(p, rdf.type, owl.ObjectProperty, this.targetGraph);
                this.store.addQuad(p, rdfs.range, r.onClass, this.targetGraph);
            } else if (r.allValuesFrom) {
                this.store.addQuad(p, rdf.type, owl.ObjectProperty, this.targetGraph);
            } else if (r.someValuesFrom) {
                this.store.addQuad(p, rdf.type, owl.ObjectProperty, this.targetGraph);
            }
        }

        this.restrictions = {};
    }

    protected override resetState(): void {
        super.resetState();

        this.restrictions = {};
    }

    protected inferClassAxioms(quad: n3.Quad) {
        super.inferClassAxioms(quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        // See: https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules
        switch (p.id) {
            case rdf.type.id: {
                if (o.id == owl.Restriction.id) {
                    this.restrictions[s.value] = {};
                }

                return;
            }
            case owl.equivalentClass.id: {
                this.assertClass(s);

                if (o && !this.isW3CNode(o)) {
                    this.assertClass(o);
                }

                // The opposite is also true.
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, owl.equivalentClass, s, this.targetGraph);
                }

                return;
            }
            case owl.complementOf.id:
            case owl.disjointWith.id: {
                this.assertClass(s);

                if (o && !this.isW3CNode(o)) {
                    this.assertClass(o);
                }

                return;
            }
            case owl.intersectionOf.id: {
                let equivalentSubjects = [...this.store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-int
                let classes = this.getListItems(o.value);

                if (!Array.isArray(classes)) {
                    this.errors.push({ quad: quad, message: `Expected an array of classes for ${o.value}` });
                    return;
                }

                for (let c of classes) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    this.store.addQuad(s, rdfs.subClassOf, c, this.targetGraph);

                    for (let es of equivalentSubjects) {
                        this.store.addQuad(es, rdfs.subClassOf, c, this.targetGraph);
                    }
                }

                return;
            }
            case owl.unionOf.id: {
                let equivalentSubjects = [...this.store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-uni
                let classes = this.getListItems(o.value);

                if (!Array.isArray(classes)) {
                    this.errors.push({ quad: quad, message: `Expected an array of classes for ${o.value}` });
                    return;
                }

                for (let c of classes) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    this.store.addQuad(c, rdfs.subClassOf, s, this.targetGraph);

                    for (let es of equivalentSubjects) {
                        this.store.addQuad(c, rdfs.subClassOf, es, this.targetGraph);
                    }
                }

                return;
            }
            case owl.onClass.id: {
                if (o.termType == "NamedNode") {
                    this.assertClass(o);
                }

                return;
            }
            case owl.onDataRange.id: {
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, rdf.type, rdfs.Datatype, this.targetGraph);
                }

                return;
            }
            // Note:
            //   e.g. Gist also uses these on xsd:string, so inferring that this is a 
            //   class is technically true, however, it would lead to undesirable results.
            //
            // case owl.allValuesFrom.id: {
            //     if (o.termType == "NamedNode") {
            //         this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
            //     }
            //
            //     return;
            // }
            // case owl.someValuesFrom.id: {
            //     if (o.termType == "NamedNode") {
            //         this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
            //     }
            //
            //     break;
            // }
        }
    }

    protected inferPropertyAxioms(quad: n3.Quad) {
        super.inferPropertyAxioms(quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case owl.onProperty.id: {
                this.assertProperty(o);

                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onProperty = o;
                }

                return;
            }
            case owl.onClass.id: {
                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onClass = o;
                }

                return;
            }
            case owl.onDataRange.id: {
                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onDataRange = o;
                }

                return;
            }
            case owl.allValuesFrom.id: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].allValuesFrom = o;
                }

                return;
            }
            case owl.someValuesFrom.id: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].someValuesFrom = o;
                }

                return;
            }
            case owl.equivalentProperty.id: {
                this.assertProperty(s);
                this.assertProperty(o);

                // The opposite is also true.
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, owl.equivalentProperty, s, this.targetGraph);
                }

                return;
            }
            case rdf.type.id: {
                switch (o.id) {
                    case owl.AnnotationProperty.id:
                    case owl.AsymmetricProperty.id:
                    case owl.DatatypeProperty.id:
                    case owl.DeprecatedProperty.id:
                    case owl.FunctionalProperty.id:
                    case owl.InverseFunctionalProperty.id:
                    case owl.IrreflexiveProperty.id:
                    case owl.ObjectProperty.id:
                    case owl.OntologyProperty.id:
                    case owl.ReflexiveProperty.id:
                    case owl.SymmetricProperty.id:
                    case owl.TransitiveProperty.id: {
                        this.assertProperty(s);
                    }
                }

                return;
            }
        }
    }
}