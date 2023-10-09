import * as n3 from "n3";
import { owl, rdf, rdfs } from "../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A simple OWL reasoner that expands the graph with inferred triples.
 */
export class OwlReasoner extends RdfsReasoner {

    protected inferClassAxioms(store: n3.Store, graph: n3.NamedNode, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        super.inferClassAxioms(store, graph, lists, quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }
        
        let g = this.getInferenceGraphNode(graph);

        // See: https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules
        switch (p.id) {
            case owl.equivalentClass.id:
            case owl.complementOf.id:
            case owl.disjointWith.id: {
                store.addQuad(s, rdf.type, rdfs.Class, g);

                if (o && !o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, g);
                }

                // The opposite is also true.
                if(o.termType == "NamedNode") {
                    store.addQuad(o, owl.equivalentClass, s, g);
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

                    store.addQuad(s, rdfs.subClassOf, c, g);

                    for (let es of equivalentSubjects) {
                        store.addQuad(es, rdfs.subClassOf, c, g);
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

                    store.addQuad(c, rdfs.subClassOf, s, g);

                    for (let es of equivalentSubjects) {
                        store.addQuad(c, rdfs.subClassOf, es, g);
                    }
                }
                break;
            }
        }
    }
}