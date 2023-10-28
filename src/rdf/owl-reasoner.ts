import * as n3 from "n3";
import { owl, rdf, rdfs } from "../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A simple OWL reasoner that expands the graph with inferred triples.
 */
export class OwlReasoner extends RdfsReasoner {
    protected inferClassAxioms(store: n3.Store, targetGraph: n3.Quad_Graph, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        super.inferClassAxioms(store, targetGraph, lists, quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        // See: https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules
        switch (p.id) {
            case owl.equivalentClass.id:
            case owl.complementOf.id:
            case owl.disjointWith.id: {
                store.addQuad(s, rdf.type, rdfs.Class, targetGraph);

                if (o && !o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, targetGraph);
                }

                // The opposite is also true.
                if(o.termType == "NamedNode") {
                    store.addQuad(o, owl.equivalentClass, s, targetGraph);
                }

                break;
            }
            case owl.intersectionOf.id: {
                let equivalentSubjects = [...store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-int
                for (let c of lists[o.value]) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    store.addQuad(s, rdfs.subClassOf, c, targetGraph);

                    for (let es of equivalentSubjects) {
                        store.addQuad(es, rdfs.subClassOf, c, targetGraph);
                    }
                }
                break;
            }
            case owl.unionOf.id: {
                let equivalentSubjects = [...store.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-uni
                for (let c of lists[o.value]) {
                    if (c.termType != "NamedNode") {
                        continue;
                    }

                    store.addQuad(c, rdfs.subClassOf, s, targetGraph);

                    for (let es of equivalentSubjects) {
                        store.addQuad(c, rdfs.subClassOf, es, targetGraph);
                    }
                }
                break;
            }
        }
    }

    protected inferPropertyAxioms(store: n3.Store, targetGraph: n3.Quad_Graph, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        super.inferPropertyAxioms(store, targetGraph, lists, quad);
        
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch(p.id) {
            case rdf.type.id: {
                switch(o.id) {
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
                            store.addQuad(s, rdf.type, rdf.Property, targetGraph);
                        break;
                    }
                }
                break;
            }
        }
    }
}