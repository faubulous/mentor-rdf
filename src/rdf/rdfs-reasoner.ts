import * as n3 from "n3";
import { owl, rdf, rdfs } from "../ontologies";

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner {
    public expand(store: n3.Store): n3.Store {
        const lists = store.extractLists() as Record<string, n3.Term[]>;

        // Todo: Add the inferred triples to a new subgraph.
        for (let q of store.match(null, null, null)) {
            this.inferClassAxioms(store, lists, q as n3.Quad);
        }

        return store;
    }

    protected inferClassAxioms(graph: n3.Store, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(owl.Class)) {
                    graph.addQuad(s, rdf.type, rdfs.Class);
                } else if (o) {
                    graph.addQuad(o, rdf.type, rdfs.Class);
                }
                break;
            }
            case rdfs.subClassOf.id:
            case owl.equivalentClass.id:
            case owl.complementOf.id:
            case owl.disjointWith.id: {
                graph.addQuad(s, rdf.type, rdfs.Class);

                if (o) {
                    graph.addQuad(o, rdf.type, rdfs.Class);
                }
                break;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                if (o) {
                    graph.addQuad(o, rdf.type, rdfs.Class);
                }
                break;
            }
        }

        // Source: https://github.com/RDFLib/OWL-RL/blob/master/owlrl/OWLRL.py

        // # RULE scm-int
        // elif p == OWL.intersectionOf:
        //     c, x = s, o
        //     for ci in self._list(x):
        //         self.store_triple((c, RDFS.subClassOf, ci))

        // # RULE scm-uni
        // elif p == OWL.unionOf:
        //     c, x = s, o
        //     for ci in self._list(x):
        //         self.store_triple((ci, RDFS.subClassOf, c))
    }
}