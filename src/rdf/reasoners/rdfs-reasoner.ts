import * as n3 from "n3";
import { owl, rdf, rdfs } from "../../ontologies";
import { IReasoner } from "./reasoner";

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner implements IReasoner {
    protected store: n3.Store = new n3.Store();

    public sourceGraph: n3.Quad_Graph | undefined;

    public targetGraph: n3.Quad_Graph | undefined;

    protected classes: Set<n3.Term> = new Set();

    protected properties: Set<n3.Term> = new Set();

    protected invididuals: Set<n3.NamedNode> = new Set();

    public expand(store: n3.Store, sourceGraph: string | n3.Quad_Graph, targetGraph: string | n3.Quad_Graph): n3.Store {
        if (!this.store || !sourceGraph || !targetGraph) {
            return store;
        }

        this.classes.clear();
        this.properties.clear();
        this.invididuals.clear();

        this.store = store;
        this.sourceGraph = this.getGraphNode(sourceGraph);
        this.targetGraph = this.getGraphNode(targetGraph);

        this.beforeInference();

        const lists = store.extractLists() as Record<string, n3.Term[]>;

        for (let quad of store.match(null, null, null, this.sourceGraph)) {
            let q = quad as n3.Quad;

            // Treat all named nodes with rdf:type definitions as potential individuals.
            if (q.predicate.equals(rdf.type) && q.subject.termType == "NamedNode") {
                this.invididuals.add(q.subject);
            }

            this.inferClassAxioms(lists, quad as n3.Quad);
            this.inferPropertyAxioms(lists, quad as n3.Quad);
        }

        // After all axioms have been inferred, add the inferred individuals to the graph.
        const individuals = [...this.invididuals].filter(x => !this.classes.has(x) && !this.properties.has(x));

        for (let individual of individuals) {
            this.store.addQuad(individual, rdf.type, owl.NamedIndividual, this.targetGraph);
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

    protected isW3CNode(term: n3.Term): boolean {
        return term.value.startsWith("http://www.w3.org");
    }

    protected beforeInference() { }

    protected afterInference() { }

    protected assertClass(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, rdfs.Class, this.targetGraph);

        this.classes.add(subject);
    }

    protected inferClassAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(rdfs.Class)) {
                    // No need to infer the class type, as it is already asserted.
                    this.classes.add(s);
                } else if (o.equals(owl.Class)) {
                    this.assertClass(s);
                } else if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                }
                return;
            }
            case rdfs.subClassOf.id: {
                this.assertClass(s);

                if (!this.isW3CNode(o)) {
                    this.assertClass(o);
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
                return;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                }
                return;
            }
        }
    }

    protected assertProperty(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, rdf.Property, this.targetGraph);

        this.properties.add(subject);
    }

    protected inferPropertyAxioms(lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(rdf.Property)) {
                    // No need to infer the property type, as it is already asserted.
                    this.properties.add(s);
                }

                return;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                this.assertProperty(s);

                return;
            }
        }
    }
}