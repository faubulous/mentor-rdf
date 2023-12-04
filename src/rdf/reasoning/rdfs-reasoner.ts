import * as n3 from "n3";
import { owl, rdf, rdfs } from "../../ontologies";
import { IReasoner } from "./reasoner";

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner implements IReasoner {
    public expand(store: n3.Store, sourceGraph: string | n3.Quad_Graph, targetGraph: string | n3.Quad_Graph): n3.Store {
        let s = this.getGraphNode(sourceGraph);
        let t = this.getGraphNode(targetGraph);

        const lists = store.extractLists() as Record<string, n3.Term[]>;

        // Todo: Add the inferred triples to a new subgraph.
        for (let q of store.match(null, null, null, s)) {
            this.inferClassAxioms(store, t, lists, q as n3.Quad);
            this.inferPropertyAxioms(store, t, lists, q as n3.Quad);
            this.inferNamedIndividualAxioms(store, t, lists, q as n3.Quad);
        }

        return store;
    }

    protected getGraphNode(graph: string | n3.Quad_Graph): n3.Quad_Graph {
        if (typeof graph == "string") {
            return new n3.NamedNode(graph);
        } else {
            return graph;
        }
    }

    protected inferClassAxioms(store: n3.Store, graph: n3.Quad_Graph, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(owl.Class)) {
                    store.addQuad(s, rdf.type, rdfs.Class, graph);
                } else if (!o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, graph);
                }
                break;
            }
            case rdfs.subClassOf.id: {
                store.addQuad(s, rdf.type, rdfs.Class, graph);

                if (!o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, graph);
                } else if (o.equals(rdfs.Resource)) {
                    store.addQuad(rdfs.Resource, rdf.type, rdfs.Class, graph);
                } else if (o.equals(rdfs.Class)) {
                    store.addQuad(rdfs.Class, rdf.type, rdfs.Class, graph);
                    store.addQuad(rdfs.Class, rdfs.subClassOf, rdfs.Resource, graph);
                } else if (o.equals(rdfs.Datatype)) {
                    store.addQuad(rdfs.Datatype, rdf.type, rdfs.Class, graph);
                    store.addQuad(rdfs.Datatype, rdfs.subClassOf, rdfs.Class, graph);
                } else if (o.equals(owl.Class)) {
                    store.addQuad(owl.Class, rdf.type, rdfs.Class, graph);
                    store.addQuad(owl.Class, rdfs.subClassOf, rdfs.Class, graph);
                }
                break;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                if (!o.value.startsWith("http://www.w3.org")) {
                    store.addQuad(o, rdf.type, rdfs.Class, graph);
                }
                break;
            }
        }
    }

    protected inferPropertyAxioms(store: n3.Store, targetGraph: n3.Quad_Graph, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch(p.id) {
            case rdfs.range.id:
            case rdfs.domain.id: {
                store.addQuad(s, rdf.type, rdf.Property, targetGraph);
                break;
            }
        }
    }

    protected inferNamedIndividualAxioms(store: n3.Store, targetGraph: n3.Quad_Graph, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o || o.equals(rdfs.Class) || o.equals(owl.Class)) {
            return;
        }

        switch(p.id) {
            case rdf.type.id: {
                for(let q of store.match(o, rdf.type, rdfs.Class)) {
                    store.addQuad(s, rdf.type, owl.NamedIndividual, targetGraph);
                    break;
                }
            }
        }
    }
}