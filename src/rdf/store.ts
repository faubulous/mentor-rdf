import { Quad_Subject, Quad_Predicate, Quad_Object } from "@rdfjs/types";
import * as n3 from "n3";
import * as src from '../ontologies/src';
import { rdf, RDF } from '../ontologies';
import { EventEmitter } from "stream";
import { Reasoner } from "./reasoners/reasoner";

/*
 * A store for RDF triples with support for reasoning.
 */
export class Store {
    /**
     * The N3 triple store implementation.
     */
    private readonly _store: n3.Store = new n3.Store();

    /**
     * The reasoner to be used for inference.
     */
    readonly reasoner?: Reasoner;

    /**
     * Return the number of triples in the store.
     */
    get size(): number {
        return this._store.size;
    }

    /**
     * Create a new RDF triple store.
     * @param reasoner The reasoner to be used for inference.
     */
    constructor(reasoner?: Reasoner) {
        this.reasoner = reasoner;
    }

    /**
     * Loads a set of W3C Standard ontologies into the store (RDF, RDFA, RDFS, OWL, SKOS, SHACL, XSD).
     */
    async loadFrameworkOntologies() {
        await this.loadFromStream(src.rdf, "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        await this.loadFromStream(src.rdfa, "http://www.w3.org/ns/rdfa#");
        await this.loadFromStream(src.rdfs, "http://www.w3.org/2000/01/rdf-schema#");
        await this.loadFromStream(src.owl, "http://www.w3.org/2002/07/owl#");
        await this.loadFromStream(src.shacl, "http://www.w3.org/ns/shacl#");
        await this.loadFromStream(src.skos, "http://www.w3.org/2004/02/skos/core#");
        await this.loadFromStream(src.xsd, "http://www.w3.org/2001/XMLSchema#");
    }

    /**
     * Get the URIs of the graphs in the triple store.
     * @returns An array of graph URIs in no particular order.
     */
    getGraphs(): string[] {
        return this._store.getGraphs(null, null, null).map(g => g.id);
    }

    /**
     * Load a set of triples into the store.
     * @param quads An array of quads to be loaded into the store.
     * @param graphUri The target graph URI.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad A callback function that will be called for each parsed triple.
     */
    private _loadQuads(quads: n3.Quad[], graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: n3.Quad) => void) {
        const graph = new n3.NamedNode(graphUri.replace('\\', '\/'));

        // Only clear the graph once if there had been no errors.
        if (clearGraph) {
            // Note: Using the match method to clear the graph results in an error because the graph is being modified.
            this.deleteGraphs([graphUri]);

            if (this.reasoner) {
                const inferenceGraph = new n3.NamedNode(this.reasoner.getInferenceGraphUri(graphUri));

                this.deleteGraphs([inferenceGraph.value]);
            }
        }

        for (let q of quads) {
            this._store.add(new n3.Quad(q.subject, q.predicate, q.object, graph));

            if (onQuad) {
                onQuad(q);
            }
        }

        if (this.reasoner && executeInference) {
            this.reasoner.expand(this._store, graphUri);
        }
    }

    /**
     * Create an RDF store from a file.
     * @param input Input data or stream in Turtle format to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    async loadFromStream(input: string | EventEmitter, graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: n3.Quad) => void): Promise<Store> {
        return new Promise((resolve, reject) => {
            let quads: n3.Quad[] = [];

            new n3.Parser({}).parse(input, (error, quad, done) => {
                if (error) {
                    reject(error);
                } else if (quad) {
                    quads.push(quad);
                } else if (done) {
                    this._loadQuads(quads, graphUri, executeInference, clearGraph, onQuad);

                    resolve(this);
                }
            });
        });
    }

    /**
     * Indicates if the store contains triples in a given graph.
     * @param graphUri A graph URI.
     * @returns `true` if the store contains triples in the graph URI, `false` otherwise.
     */
    hasGraph(graphUri: n3.Quad_Graph | string): boolean {
        const uri = typeof graphUri === 'string' ? new n3.NamedNode(graphUri) : graphUri;

        for (const _ of this._store.match(null, null, null, uri)) {
            return true;
        }

        return false;
    }

    /**
     * Apply inference to the given graph and store the triples in the associated inference graph.
     * @param graphUri A graph URI.
     */
    executeInference(graphUri: n3.Quad_Graph | string) {
        if (this.reasoner) {
            this.reasoner.expand(this._store, graphUri);
        }
    }

    /**
     * Delete named graphs from the store.
     * @param graphUris URIs of the graphs to be deleted.
     */
    deleteGraphs(graphUris: string[]) {
        for (let graphUri of graphUris) {
            const g = new n3.NamedNode(graphUri);

            for (let q of this._store.match(null, null, null, g)) {
                this._store.removeQuad(q);
            }
        }
    }

    /**
     * Get the URIs of ordered list members in the store.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param listUri URI of the list to get the items from.
     * @returns An array of URIs of the items in the list.
     */
    getListItems(graphUris: string | string[] | undefined, listUri: string): string[] {
        // To do: Fix #10
        const list = listUri.includes(':') ? new n3.NamedNode(listUri) : new n3.BlankNode(listUri);

        return this._getListItems(graphUris, list).map(t => t.value);
    }

    private _getListItems(graphUris: string | string[] | undefined, subject: Quad_Subject): Quad_Subject[] {
        const first = Array.from(this.match(graphUris, subject, rdf.first, null));

        if (!first.length) {
            return [];
        }

        const rest = Array.from(this.match(graphUris, subject, rdf.rest, null));

        const firstItem = first[0].object as Quad_Subject;
        const restList = rest[0]?.object as Quad_Subject;

        if (restList.value === RDF.nil) {
            return [firstItem];
        } else {
            const restItems = this._getListItems(graphUris, restList);

            return [firstItem, ...restItems];
        }
    }

    /**
     * Query the store for triples matching the given pattern supporting multiple graphs.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param subject A subject URI or null to match any subject.
     * @param predicate A predicate URI or null to match any predicate.
     * @param object An object URI or null to match any object.
     */
    *match(graphUris: string | string[] | undefined, subject: Quad_Subject | null, predicate: Quad_Predicate | null, object: Quad_Object | null, includeInferred?: boolean) {
        if (includeInferred && !this.reasoner) {
            throw new Error('Reasoner is not available to include inferred triples.');
        }

        const s = subject as n3.Term;
        const p = predicate as n3.Term;
        const o = object as n3.Term;

        if (graphUris !== undefined) {
            const graphs = Array.isArray(graphUris) ? graphUris : [graphUris];

            for (let graph of graphs.map(g => new n3.NamedNode(g))) {
                yield* this._store.match(s, p, o, graph);

                if (includeInferred !== false && this.reasoner) {
                    let inferenceGraph = new n3.NamedNode(this.reasoner.getInferenceGraphUri(graph.value));

                    yield* this._store.match(s, p, o, inferenceGraph);
                }
            }
        } else {
            yield* this._store.match(s, p, o);
        }
    }
}