import * as n3 from "n3";
import { owl, rdf, rdfs } from "../ontologies";

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner {
    public expand(store: n3.Store, graph: n3.NamedNode): n3.Store {
        const lists = store.extractLists() as Record<string, n3.Term[]>;

        // Todo: Add the inferred triples to a new subgraph.
        for (let q of store.match(null, null, null)) {
            this.inferClassAxioms(store, graph, lists, q as n3.Quad);
        }

        return store;
    }

    protected getInferenceGraphNode(graph?: n3.NamedNode): n3.Quad_Graph {
        return graph ? new n3.NamedNode(graph.id + '#inference') : n3.DataFactory.defaultGraph();
    }

    protected inferClassAxioms(store: n3.Store, graph: n3.NamedNode, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        let g = this.getInferenceGraphNode(graph);

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(owl.Class)) {
                    store.addQuad(s, rdf.type, rdfs.Class, g);
                } else if (!o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, g);
                }
                break;
            }
            case rdfs.subClassOf.id: {
                store.addQuad(s, rdf.type, rdfs.Class, g);

                if (!o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, g);
                } else if (o.equals(rdfs.Resource)) {
                    store.addQuad(rdfs.Resource, rdf.type, rdfs.Class, g);
                } else if (o.equals(rdfs.Class)) {
                    store.addQuad(rdfs.Class, rdf.type, rdfs.Class, g);
                    store.addQuad(rdfs.Class, rdfs.subClassOf, rdfs.Resource, g);
                } else if(o.equals(rdfs.Datatype)) {
                    store.addQuad(rdfs.Datatype, rdf.type, rdfs.Class, g);
                    store.addQuad(rdfs.Datatype, rdfs.subClassOf, rdfs.Class, g);
                } else if(o.equals(owl.Class)) {
                    store.addQuad(owl.Class, rdf.type, rdfs.Class, g);
                    store.addQuad(owl.Class, rdfs.subClassOf, rdfs.Class, g);
                }
                break;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                if (!o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, g);
                }
                break;
            }
        }
    }
}