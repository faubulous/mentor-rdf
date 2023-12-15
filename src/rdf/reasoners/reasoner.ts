import * as n3 from 'n3';

export interface IReasoner {
    /**
     * Apply inference on the source graph and store the inferred triples in the target graph.
     * @param store The store to be inferenced.
     * @param sourceGraph The source graph where to find the triples to be inferenced.
     * @param targetGraph The target graph where to store the inferred triples.
     */
    expand(store: n3.Store, sourceGraph: string | n3.NamedNode, targetGraph: string | n3.NamedNode): n3.Store;
}