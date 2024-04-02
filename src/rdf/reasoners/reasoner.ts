import * as n3 from 'n3';

export interface IReasoner {
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