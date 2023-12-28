import * as n3 from "n3";
import { owl, rdf, rdfs } from "../../ontologies";
import { IReasoner } from "./reasoner";

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner implements IReasoner {
    protected store: n3.Store;

    public sourceGraph: n3.Quad_Graph | undefined;

    public targetGraph: n3.Quad_Graph | undefined;

    constructor() {
        this.store = new n3.Store();
    }

    public expand(store: n3.Store, sourceGraph: string | n3.Quad_Graph, targetGraph: string | n3.Quad_Graph): n3.Store {
        if (!this.store || !sourceGraph || !targetGraph) {
            return store;
        }

        this.store = store;
        this.sourceGraph = this.getGraphNode(sourceGraph);
        this.targetGraph = this.getGraphNode(targetGraph);

        this.beforeInference();

        const lists = store.extractLists() as Record<string, n3.Term[]>;

        // Todo: Add the inferred triples to a new subgraph.
        for (let q of store.match(null, null, null, this.sourceGraph)) {
            this.inferClassAxioms(lists, q as n3.Quad);
            this.inferPropertyAxioms(lists, q as n3.Quad);
            this.inferNamedIndividualAxioms(lists, q as n3.Quad);
        }

        this.afterInference();

        return store;
    }

    protected getGraphNode(graph: string | n3.Quad_Graph): n3.Quad_Graph {
        if (typeof graph == "string") {
            return new n3.NamedNode(graph);
        } else {
            return graph;
        }
    }

    protected beforeInference() { }

    protected afterInference() { }
    
    protected inferClassAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(owl.Class)) {
                    this.store.addQuad(s, rdf.type, rdfs.Class, this.targetGraph);
                } else if (!o.value.startsWith("http://www.w3.org")) {
                    this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
                }
                break;
            }
            case rdfs.subClassOf.id: {
                this.store.addQuad(s, rdf.type, rdfs.Class, this.targetGraph);

                if (!o.value.startsWith("http://www.w3.org")) {
                    this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
                } else if (o.equals(rdfs.Resource)) {
                    this.store.addQuad(rdfs.Resource, rdf.type, rdfs.Class, this.targetGraph);
                } else if (o.equals(rdfs.Class)) {
                    this.store.addQuad(rdfs.Class, rdf.type, rdfs.Class, this.targetGraph);
                    this.store.addQuad(rdfs.Class, rdfs.subClassOf, rdfs.Resource, this.targetGraph);
                } else if (o.equals(rdfs.Datatype)) {
                    this.store.addQuad(rdfs.Datatype, rdf.type, rdfs.Class, this.targetGraph);
                    this.store.addQuad(rdfs.Datatype, rdfs.subClassOf, rdfs.Class, this.targetGraph);
                } else if (o.equals(owl.Class)) {
                    this.store.addQuad(owl.Class, rdf.type, rdfs.Class, this.targetGraph);
                    this.store.addQuad(owl.Class, rdfs.subClassOf, rdfs.Class, this.targetGraph);
                }
                break;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                if (!o.value.startsWith("http://www.w3.org")) {
                    this.store.addQuad(o, rdf.type, rdfs.Class, this.targetGraph);
                }
                break;
            }
        }
    }

    protected inferPropertyAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdfs.range.id:
            case rdfs.domain.id: {
                this.store.addQuad(s, rdf.type, rdf.Property, this.targetGraph);
                break;
            }
        }
    }

    protected inferNamedIndividualAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        // Instances of rdfs:Class are not individuals.
        if (!o || o.equals(rdfs.Class) || o.equals(owl.Class)) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                for (let q of this.store.match(o, rdf.type, rdf.Property)) {
                    // Instances of rdf:Property are not individuals.
                    continue;
                }

                for (let q of this.store.match(o, rdf.type, rdfs.Class)) {
                    // Instances of rdfs:Class that are not classes themselves are individuals.
                    this.store.addQuad(s, rdf.type, owl.NamedIndividual, this.targetGraph);
                    break;
                }
            }
        }
    }
}