import * as n3 from 'n3';
import * as rdfjs from "@rdfjs/types";
import { RdfStore } from 'rdf-stores';
import { rdf, RDF } from '../../ontologies';

const { namedNode, blankNode } = n3.DataFactory;

/**
 * A handler to generate graph URIs from any given URI.
 */
export interface GraphUriGenerator {
    /**
     * Generate a graph URI from a given URI.
     * @param uri A URI.
     */
    getGraphUri(uri: string | rdfjs.Quad_Graph): string;
}

/**
 * Default implementation of the InferenceGraphHandler interface. It generates URIs 
 * for inference graphs using a Mentor specific URN scheme.
 */
export class DefaultInferenceGraphHandler implements GraphUriGenerator {
    getGraphUri(uri: string | rdfjs.Quad_Graph): string {
        const u = typeof uri === "string" ? uri : uri.value;

        return `urn:mentor:inference:${u}`;
    }

    /**
     * Check if a given URI is an inference graph URI.
     * @param uri A URI.
     * @returns `true` if the URI is an inference graph URI, `false` otherwise.
     */
    isInferenceGraphUri(uri: string | rdfjs.Quad_Graph): boolean {
        const u = typeof uri === "string" ? uri : uri.value;

        return u.startsWith("urn:mentor:inference:");
    }
}

/**
 * An interface for reasoners that operate on existing graphs in the RDF store and
 * materialise the inferred triples in an inference graph.
 */
export interface Reasoner {

    /**
     * A handler to generate inference graph URIs from any given graph URI if no explicit target graph is provided.
     */
    targetUriGenerator: GraphUriGenerator;

    /**
     * Apply inference on the source graph and store the inferred triples in the target graph.
     * @param store The store to be inferenced.
     * @param sourceGraph The source graph where to find the triples to be inferenced.
     * @param targetGraph The optional target graph where to store the inferred triples. If none is provided, the graph from getGraphUri will be used.
     */
    expand(store: rdfjs.DatasetCore, sourceGraph: string | rdfjs.Quad_Graph, targetGraph?: string | rdfjs.Quad_Graph): rdfjs.DatasetCore;
}

/**
 * A base class for reasoners that expand graphs with inferred triples.
 */
export abstract class ReasonerBase implements Reasoner {
    protected store: rdfjs.DatasetCore = RdfStore.createDefault().asDataset();

    public sourceGraph?: rdfjs.Quad_Graph;

    public targetGraph?: rdfjs.Quad_Graph;

    public readonly errors: { message: string, quad: rdfjs.Quad }[] = [];

    readonly targetUriGenerator: GraphUriGenerator;

    constructor(targetUriGenerator: GraphUriGenerator) {
        if (targetUriGenerator) {
            this.targetUriGenerator = targetUriGenerator;
        } else {
            throw new Error(`Invalid value for targetUriGenerator: ${targetUriGenerator}`);
        }
    }

    protected getGraphNode(graph: string | rdfjs.Quad_Graph): rdfjs.Quad_Graph {
        if (typeof graph === "string") {
            return namedNode(graph);
        } else {
            return graph;
        }
    }

    protected isW3CNode(term: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        return term.value.startsWith("http://www.w3.org");
    }

    /**
     * Get the URIs of ordered list members in the store.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param listUri URI of the list to get the items from.
     * @returns An array of URIs of the items in the list.
     */
    getListItems(listUri: string): rdfjs.Quad_Object[] {
        // To do: Fix #10
        const list = listUri.includes(':') ? namedNode(listUri) : blankNode(listUri);

        return this._getListItems(list);
    }

    private _getListItems(subject: rdfjs.Quad_Subject): rdfjs.Quad_Object[] {
        if (!this.sourceGraph) {
            return [];
        }

        let first = Array.from(this.match(this.sourceGraph, subject, rdf.first, null));

        if (!first.length) {
            return [];
        }

        const rest = Array.from(this.match(this.sourceGraph, subject, rdf.rest, null));

        const firstItem = first[0].object;
        const restList = rest[0]?.object;

        if (restList.value === RDF.nil) {
            return [firstItem];
        } else {
            const restItems = this._getListItems(restList as rdfjs.Quad_Subject);

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
    *match(graph: rdfjs.Quad_Graph, subject: rdfjs.Quad_Subject | null, predicate: rdfjs.Quad_Predicate | null, object: rdfjs.Quad_Object | null) {
        if (graph !== undefined) {
            yield* this.store.match(subject, predicate, object, graph);
        } else {
            yield* this.store.match(subject, predicate, object);
        }
    }

    public expand(store: rdfjs.DatasetCore, sourceGraph: string | rdfjs.Quad_Graph, targetGraph?: string | rdfjs.Quad_Graph): rdfjs.DatasetCore {
        if (!targetGraph) {
            targetGraph = this.targetUriGenerator.getGraphUri(sourceGraph);
        }

        this.store = store;
        this.sourceGraph = this.getGraphNode(sourceGraph);
        this.targetGraph = this.getGraphNode(targetGraph);

        // Ensure the target graph is empty so this function is idempotent and consistent.
        for (let quad of store.match(null, null, null, this.targetGraph)) {
            store.delete(quad);
        }

        this.beforeInference();

        for (let quad of store.match(null, null, null, this.sourceGraph)) {
            this.applyInference(quad)
        }

        this.afterInference();

        this.resetState();

        return store;
    }

    protected beforeInference() { }

    protected afterInference() { }

    protected resetState() { }

    abstract applyInference(quad: rdfjs.Quad): void;

    /**
     * Indicate if a given resource should *not* be inferred to be a owl:NamedIndividual.
     * @param id A resource URI or blank node identifier.
     */
    protected abstract isClass(id: string): boolean;
}