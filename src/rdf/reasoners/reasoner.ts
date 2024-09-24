import * as n3 from 'n3';
import { rdf, RDF } from '../../ontologies';

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
        const u = typeof uri === "string" ? uri : uri.value;

        // Let the function throw an error if the URI is not valid.
        return 'mentor:' + u.substring(u.indexOf(':') + 1);
    }

    public isInferenceGraphUri(uri: string | n3.Quad_Graph): boolean {
        const u = new URL(typeof uri == "string" ? uri : uri.value);

        return u.protocol === 'mentor:';
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

    /**
     * Get the URIs of ordered list members in the store.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param listUri URI of the list to get the items from.
     * @returns An array of URIs of the items in the list.
     */
    getListItems(listUri: string): n3.Term[] {
        // To do: Fix #10
        const list = listUri.includes(':') ? new n3.NamedNode(listUri) : new n3.BlankNode(listUri);

        return this._getListItems(list);
    }

    private _getListItems(subject: n3.Term): n3.Term[] {
        if (!this.sourceGraph) {
            return [];
        }

        let first = Array.from(this.match(this.sourceGraph, subject, rdf.first, null));

        if (!first.length) {
            return [];
        }

        const rest = Array.from(this.match(this.sourceGraph, subject, rdf.rest, null));

        const firstItem = first[0].object as n3.Term;
        const restList = rest[0]?.object as n3.Term;

        if (restList.value === RDF.nil) {
            return [firstItem];
        } else {
            const restItems = this._getListItems(restList);

            return [firstItem, ...restItems];
        }
    }

    /**
     * Query the store for triples matching the given pattern supporting multiple graphs.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param subject A subject URI or null to match any subject.
     * @param predicate A predicate URI or null to match any predicate.
     * @param object An object URI or null to match any object.
     * @todo Refactor and merge with the same method in the Mentor RDF Store class.
     */
    *match(graph: n3.Term, subject: n3.Term | null, predicate: n3.Term | null, object: n3.Term | null) {
        if (graph !== undefined) {
            yield* this.store.match(subject, predicate, object, graph);
        } else {
            yield* this.store.match(subject, predicate, object);
        }
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

    /**
     * Indicate if a given resource should *not* be inferred to be a owl:NamedIndividual.
     * @param id A resource URI or blank node identifier.
     */
    protected abstract isClass(id: string): boolean;
}