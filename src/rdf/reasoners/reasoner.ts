import * as n3 from 'n3';

export interface Reasoner {
    /**
     * Get the URI of the graph where the inferred triples are stored.
     * @param uri A graph URI.
     */
    getInferenceGraphUri(uri: string): string;

    /**
     * Indicate if a given URI is the URI of the graph where the inferred triples are stored.
     * @param uri A graph URI.
     */
    isInferenceGraphUri(uri: string): boolean;

    /**
     * Apply inference on the source graph and store the inferred triples in the target graph.
     * @param store The store to be inferenced.
     * @param sourceGraph The source graph where to find the triples to be inferenced.
     * @param targetGraph The optional target graph where to store the inferred triples. If none is provided, the graph from getGraphUri will be used.
     */
    expand(store: n3.Store, sourceGraph: string | n3.Quad_Graph, targetGraph?: string | n3.Quad_Graph): n3.Store;
}

/**
 * A base class for reasoners that expand graphs with inferred triples.
 */
export abstract class ReasonerBase implements Reasoner {
    protected store: n3.Store = new n3.Store();

    public sourceGraph: n3.Quad_Graph | undefined;

    public targetGraph: n3.Quad_Graph | undefined;

    public readonly errors: { message: string, quad: n3.Quad }[] = [];

    public getInferenceGraphUri(uri: string | n3.Quad_Graph): string {
        let u = typeof uri == "string" ? uri : uri.value;

        // This reasoner is specifically designed to work with the Mentor platform.
        return u.replace(/^(http|https|urn|file):\/\//, 'mentor://');
    }

    public isInferenceGraphUri(uri: string | n3.Quad_Graph): boolean {
        let u = typeof uri == "string" ? uri : uri.value;

        return u.startsWith('mentor://');
    }

    protected getGraphNode(graph: string | n3.Quad_Graph): n3.Quad_Graph {
        if (typeof graph === "string") {
            return new n3.NamedNode(graph);
        } else {
            return graph;
        }
    }

    protected isW3CNode(term: n3.Term): boolean {
        return term.value.startsWith("http://www.w3.org");
    }

    public expand(store: n3.Store, sourceGraph: string | n3.Quad_Graph, targetGraph?: string | n3.Quad_Graph): n3.Store {
        if (!targetGraph) {
            targetGraph = this.getInferenceGraphUri(sourceGraph);
        }

        this.store = store;

        if (this.store.getGraphs(null, null, null).filter(g => g.id == targetGraph).length > 0) {
            // Ensure the target graph is empty so this function is idempotent and consistent.
            store.deleteGraph(targetGraph);
        }

        this.sourceGraph = this.getGraphNode(sourceGraph);
        this.targetGraph = this.getGraphNode(targetGraph);

        this.beforeInference();

        for (let quad of store.match(null, null, null, this.sourceGraph)) {
            let q = quad as n3.Quad;

            this.applyInference(q)
        }

        this.afterInference();

        return store;
    }

    protected beforeInference() { }

    protected afterInference() { }

    abstract applyInference(quad: n3.Quad): void;
}