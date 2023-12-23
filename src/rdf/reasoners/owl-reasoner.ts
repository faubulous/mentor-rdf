import * as n3 from "n3";
import { owl, rdf, rdfs } from "../../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A restriction in OWL.
 */
interface OwlRestriction {
    onProperty?: n3.NamedNode;
    cardinality?: number;
    minCardinality?: number;
    maxCardinality?: number;
    qualifiedCardinality?: number;
    onClass?: n3.Term;
    onDataRange?: n3.Term;
    allValuesFrom?: n3.Term;
    someValuesFrom?: n3.Term;
}

/**
 * A simple OWL reasoner that expands the graph with inferred triples.
 */
export class OwlReasoner extends RdfsReasoner {
    protected restrictions: { [subject: string]: OwlRestriction } = {};

    protected beforeInference(): void {
        super.beforeInference();

        this.restrictions = {};
    }

    protected afterInference(): void {
        super.afterInference();

        for (let r of Object.values(this.restrictions)) {
            const p = r.onProperty;

            if (!p) continue;

            if (r.onDataRange) {
                this.store.addQuad(p, rdf.type, owl.DatatypeProperty, this.targetGraph);
            } else if (r.onClass) {
                this.store.addQuad(p, rdf.type, owl.ObjectProperty, this.targetGraph);
            } else if (r.allValuesFrom) {
                this.store.addQuad(p, rdf.type, owl.ObjectProperty, this.targetGraph);
            } else if (r.someValuesFrom) {
                this.store.addQuad(p, rdf.type, owl.ObjectProperty, this.targetGraph);
            }
        }
    }

    protected inferClassAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        super.inferClassAxioms(lists, quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        // See: https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules
        switch (p.id) {
            case rdf.type.id: {
                switch (o.id) {
                    case owl.Restriction.id: {
                        this.restrictions[s.value] = {};
                        break;
                    }
                }

                break;
            }
            case owl.equivalentClass.id:
            case owl.complementOf.id:
            case owl.disjointWith.id: {
                this.store.addQuad(s, rdf.type, rdfs.Class, this.targetGraph);

                if (o && !o.value.startsWith("http://www.w3.org")) {
                    this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
                }

                // The opposite is also true.
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, owl.equivalentClass, s, this.targetGraph);
                }

                break;
            }
            case owl.intersectionOf.id: {
                let equivalentSubjects = [...this.store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-int
                for (let c of lists[o.value]) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    this.store.addQuad(s, rdfs.subClassOf, c, this.targetGraph);

                    for (let es of equivalentSubjects) {
                        this.store.addQuad(es, rdfs.subClassOf, c, this.targetGraph);
                    }
                }

                break;
            }
            case owl.unionOf.id: {
                let equivalentSubjects = [...this.store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-uni
                for (let c of lists[o.value]) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    this.store.addQuad(c, rdfs.subClassOf, s, this.targetGraph);

                    for (let es of equivalentSubjects) {
                        this.store.addQuad(c, rdfs.subClassOf, es, this.targetGraph);
                    }
                }

                break;
            }
            case owl.onClass.id: {
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
                }
                break;
            }
            case owl.onDataRange.id: {
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, rdf.type, rdfs.Datatype, this.targetGraph);
                }
                break;
            }
            // Note:
            //   e.g. Gist also uses these on xsd:string, so inferring that this is a 
            //   class is technically true, however, it would lead to undesirable results.
            //
            // case owl.allValuesFrom.id: {
            //     if (o.termType == "NamedNode") {
            //         this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
            //     }
            //     break;
            // }
            // case owl.someValuesFrom.id: {
            //     if (o.termType == "NamedNode") {
            //         this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
            //     }
            //     break;
            // }
        }
    }

    protected inferPropertyAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        super.inferPropertyAxioms(lists, quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case owl.onProperty.id: {
                this.store.addQuad(o, rdf.type, rdf.Property, this.targetGraph);

                if (this.restrictions[s.value] && o.termType == "NamedNode") {
                    this.restrictions[s.value].onProperty = o;
                }

                break;
            }
            case owl.onClass.id: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].onClass = o;
                }

                break;
            }
            case owl.onDataRange.id: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].onDataRange = o;
                }

                break;
            }
            case owl.allValuesFrom.id: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].allValuesFrom = o;
                }

                break;
            }
            case owl.someValuesFrom.id: {
                if (this.restrictions[s.value]) {
                    this.restrictions[s.value].someValuesFrom = o;
                }

                break;
            }
            case owl.equivalentProperty.id: {
                this.store.addQuad(s, rdf.type, rdf.Property, this.targetGraph);
                this.store.addQuad(o, rdf.type, rdf.Property, this.targetGraph);

                // The opposite is also true.
                if (o.termType == "NamedNode") {
                    this.store.addQuad(o, owl.equivalentProperty, s, this.targetGraph);
                }
                break;
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
                        this.store.addQuad(s, rdf.type, rdf.Property, this.targetGraph);
                        break;
                    }
                }
                break;
            }
        }
    }
}