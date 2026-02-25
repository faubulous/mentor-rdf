import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import * as src from '../ontologies/src';
import { RdfStore } from "rdf-stores";
import { rdf, RDF } from '../ontologies';
import { _RDF, _RDFA, _RDFS, _OWL, _SH, _SKOS, _XSD } from "../ontologies";
import { EventEmitter } from "stream";
import { Reasoner } from "./reasoners/reasoner";
import { RdfXmlParser } from "rdfxml-streaming-parser";
import { graph, serialize } from "rdflib";
import { toRdflibTerm } from "./utils";

const { namedNode, blankNode, quad } = n3.DataFactory;

/**
 * Indicates an error when a triple is not found in the store.
 */
export class TripleNotFoundError extends Error {
    /**
     * Create a new instance of the error.
     * @param message The error message.
     */
    constructor(subject: rdfjs.Quad_Subject | null, predicate: rdfjs.Quad_Predicate | null, object: rdfjs.Quad_Object | null) {
        super(`No triple was found matching the pattern: ${subject} ${predicate} ${object}`);

        this.name = "TripleNotFoundError";
    }
}

/*
 * A store for RDF triples with support for reasoning.
 */
export class Store implements rdfjs.Source<rdfjs.Quad> {
    /**
     * The adapted RDF.js triple store implementation.
     * 
     * Note: Please do not use this directly, but rather use the `_ds` property to access the dataset.
     */
    private readonly _store = RdfStore.createDefault();

    /**
     * The RDF dataset containing the triples in the store, which should primarily be used
     * for any operations so that the store can be swapped out with a different implementation.
     */
    private readonly _ds: rdfjs.DatasetCore = this._store.asDataset();

    /**
     * The reasoner to be used for inference.
     */
    readonly reasoner?: Reasoner;

    /**
     * Get the number of triples in all graphs of the store.
     */
    get size(): number {
        return this._ds.size;
    }

    /**
     * Create a new RDF triple store.
     * @param reasoner The reasoner to be used for inference.
     */
    constructor(reasoner?: Reasoner) {
        this.reasoner = reasoner;
    }

    [Symbol.iterator](): Iterator<rdfjs.Quad, any, any> {
        return this._ds[Symbol.iterator]();
    }

    /**
     * Loads a set of W3C Standard ontologies into the store (RDF, RDFA, RDFS, OWL, SKOS, SHACL, XSD).
     */
    async loadFrameworkOntologies(executeInference: boolean = true): Promise<void> {
        await this.loadFromTurtleStream(src.rdf, _RDF, executeInference);
        await this.loadFromTurtleStream(src.rdfa, _RDFA, executeInference);
        await this.loadFromTurtleStream(src.rdfs, _RDFS, executeInference);
        await this.loadFromTurtleStream(src.owl, _OWL, executeInference);
        await this.loadFromTurtleStream(src.sh, _SH, executeInference);
        await this.loadFromTurtleStream(src.skos, _SKOS, executeInference);
        await this.loadFromTurtleStream(src.xsd, _XSD, executeInference);
    }

    /**
     * Add a quad to the store. Existing quads with the same subject, predicate, object, and graph will be ignored.
     * @param quad The quad to be added.
     * @returns The store instance.
     */
    add(quad: rdfjs.Quad): this {
        this._ds.add(quad);

        return this;
    }

    /**
     * Delete a quad from the store.
     * @param quad The quad to be deleted.
     * @returns The store instance.
     */
    delete(quad: rdfjs.Quad): this {
        this._ds.delete(quad);

        return this;
    }

    /**
     * Indicates if the store contains a specific quad.
     * @param quad The quad to be checked.
     * @returns `true` if the quad is found in the store, `false` otherwise.
     */
    has(quad: rdfjs.Quad): boolean {
        return this._ds.has(quad);
    }

    /**
     * Get the URIs of the graphs in the triple store.
     * @returns An array of graph URIs in no particular order.
     */
    getGraphs(): string[] {
        const result = new Set<string>();

        for (const q of this._ds.match(null, null, null, null)) {
            result.add(q.graph.value);
        }

        return Array.from(result);
    }

    /**
     * Load a set of triples into the store.
     * @param quads An array of quads to be loaded into the store.
     * @param graphUri The target graph URI.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad A callback function that will be called for each parsed triple.
     */
    private _loadQuads(quads: rdfjs.Quad[], graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: rdfjs.Quad) => void) {
        const graph = namedNode(graphUri.replace('\\', '\/'));

        // Only clear the graph once if there had been no errors.
        if (clearGraph) {
            // Note: Using the match method to clear the graph results in an error because the graph is being modified.
            this.deleteGraphs([graphUri]);

            if (this.reasoner) {
                const inferenceGraph = namedNode(this.reasoner.targetUriGenerator.getGraphUri(graphUri));

                this.deleteGraphs([inferenceGraph.value]);
            }
        }

        for (let q of quads) {
            this._ds.add(quad(q.subject, q.predicate, q.object, graph));

            if (onQuad) {
                onQuad(q);
            }
        }

        if (this.reasoner && executeInference) {
            this.reasoner.expand(this._ds, graphUri);
        }
    }

    /**
     * Create an RDF store from N3, Turtle or N-Triples data.
     * @param input Input data or stream in to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    async loadFromTurtleStream(input: string | EventEmitter, graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: rdfjs.Quad) => void): Promise<Store> {
        return new Promise((resolve, reject) => {
            let quads: rdfjs.Quad[] = [];

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
     * Create an RDF store from RDF/XML data.
     * @param input Input data or stream format to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    async loadFromXmlStream(input: string | EventEmitter, graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: rdfjs.Quad) => void): Promise<Store> {
        return new Promise((resolve, reject) => {
            let quads: rdfjs.Quad[] = [];

            const parser = new RdfXmlParser();

            if (typeof input === 'string') {
                parser.on('error', (error) => reject(error));
                parser.on('data', (quad) => quads.push(quad));
                parser.on('end', () => {
                    this._loadQuads(quads, graphUri, executeInference, clearGraph, onQuad);

                    resolve(this);
                });

                parser.write(input);
                parser.end();
            } else {
                parser.import(input)
                    .on('error', (error) => reject(error))
                    .on('data', (quad) => quads.push(quad))
                    .on('end', () => {
                        this._loadQuads(quads, graphUri, executeInference, clearGraph, onQuad);

                        resolve(this);
                    });
            }
        });
    }

    /**
     * Write the triples in the store into a string in Turtle format.
     * @param sourceGraphUri A graph URI.
     * @param targetFormat Optional mime type of the serialization format (e.g., 'text/turtle').
     * @param targetGraphUri Optional target graph URI. If not provided, the source graph URI will be used for serialization formats that support quads.
     * @param prefixes Optional prefixes to be used in the serialization.
     * @returns A string serialization of the triples in the graph in the specified format.
     */
    async serializeGraph(sourceGraphUri: string, targetFormat: string = 'text/turtle', targetGraphUri?: string, prefixes?: Record<string, string>): Promise<string> {
        return new Promise((resolve, reject) => {
            const sourceGraph = namedNode(sourceGraphUri);
            const targetGraph = targetGraphUri ? namedNode(targetGraphUri) : undefined;
            const store = graph();

            // Unfortunately the termType values of RDFJS terms are not directly compatible with rdflib.
            // For serialization, rdflib expectes a compareTerm function to sort blank nodes which does not
            // exist in the RDFJS interface or n3.Terms.
            const g = targetGraph ? toRdflibTerm(targetGraph) as any : undefined;

            for (const q of this._ds.match(null, null, null, sourceGraph)) {
                const s = toRdflibTerm(q.subject) as any;
                const p = toRdflibTerm(q.predicate) as any;
                const o = toRdflibTerm(q.object) as any;

                store.add(s, p, o, g);
            }

            const callback = (error: any, result?: string) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result ?? '');
                }
            };

            serialize(null, store as any, null, targetFormat, callback, prefixes);
        });
    }

    /**
     * Indicates if the store contains triples in a given graph.
     * @param graphUri A graph URI.
     * @returns `true` if the store contains triples in the graph URI, `false` otherwise.
     */
    hasGraph(graphUri: rdfjs.Quad_Graph | string): boolean {
        const uri = typeof graphUri === 'string' ? namedNode(graphUri) : graphUri;

        for (const _ of this._ds.match(null, null, null, uri)) {
            return true;
        }

        return false;
    }

    /**
     * Apply inference to the given graph and store the triples in the associated inference graph.
     * @param graphUri A graph URI.
     */
    executeInference(graphUri: rdfjs.Quad_Graph | string) {
        if (this.reasoner) {
            this.reasoner.expand(this._ds, graphUri);
        }
    }

    /**
     * Delete named graphs from the store.
     * @param graphUris URIs of the graphs to be deleted.
     */
    deleteGraphs(graphUris: string[]) {
        for (let graphUri of graphUris) {
            const g = namedNode(graphUri);

            for (let q of this._ds.match(null, null, null, g)) {
                this._ds.delete(q);
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
        const list = listUri.includes(':') ? namedNode(listUri) : blankNode(listUri);

        return this._getListItems(graphUris, list).map(t => t.value);
    }

    private _getListItems(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject): rdfjs.Quad_Subject[] {
        const first = Array.from(this.matchAll(graphUris, subject, rdf.first, null));

        if (!first.length) {
            return [];
        }

        const rest = Array.from(this.matchAll(graphUris, subject, rdf.rest, null));

        const firstItem = first[0].object as rdfjs.Quad_Subject;
        const restList = rest[0]?.object as rdfjs.Quad_Subject;

        if (restList.value === RDF.nil) {
            return [firstItem];
        } else {
            const restItems = this._getListItems(graphUris, restList);

            return [firstItem, ...restItems];
        }
    }

    /**
     * Returns the exact cardinality of the quads matching the pattern.
     * @param subject The optional subject.
     * @param predicate The optional predicate.
     * @param object The optional object.
     * @param graph The optional graph.
     */
    countQuads(subject?: rdfjs.Term | null, predicate?: rdfjs.Term | null, object?: rdfjs.Term | null, graph?: rdfjs.Term | null): number {
        return this._store.countQuads(subject, predicate, object, graph);
    }

    /**
     * Returns a stream of quads matching the given pattern.
     * @param subject The optional subject.
     * @param predicate The optional predicate.
     * @param object The optional object.
     * @param graph The optional graph.
     * @returns A stream of matching quads.
     */
    match(subject?: rdfjs.Term | null, predicate?: rdfjs.Term | null, object?: rdfjs.Term | null, graph?: rdfjs.Term | null): rdfjs.Stream<rdfjs.Quad> {
        return this._store.match(subject, predicate, object, graph);
    }

    /**
     * Query the store for triples matching the given pattern supporting multiple graphs.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param subject A subject URI or null to match any subject.
     * @param predicate A predicate URI or null to match any predicate.
     * @param object An object URI or null to match any object.
     */
    *matchAll(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | null, predicate: rdfjs.Quad_Predicate | null, object: rdfjs.Quad_Object | null, includeInferred?: boolean) {
        if (includeInferred && !this.reasoner) {
            throw new Error('Reasoner is not available to include inferred triples.');
        }

        const s = subject as n3.Term;
        const p = predicate as n3.Term;
        const o = object as n3.Term;

        if (graphUris !== undefined) {
            const graphs = Array.isArray(graphUris) ? graphUris : [graphUris];

            for (let graph of graphs.map(g => namedNode(g))) {
                for (let q of this._ds.match(s, p, o, graph)) {
                    yield q;
                }

                if (includeInferred !== false && this.reasoner) {
                    let inferenceGraph = namedNode(this.reasoner.targetUriGenerator.getGraphUri(graph.value));

                    for (let q of this._ds.match(s, p, o, inferenceGraph)) {
                        yield q;
                    }
                }
            }
        } else {
            yield* this._ds.match(s, p, o);
        }
    }

    /**
     * Indicate if there are triples matching the given pattern in the store.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param subject A subject URI or null to match any subject.
     * @param predicate A predicate URI or null to match any predicate.
     * @param object An object URI or null to match any object.
     * @returns `true` if there are triples matching the pattern, `false` otherwise.
     */
    any(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | null, predicate: rdfjs.Quad_Predicate | null, object: rdfjs.Quad_Object | null, includeInferred?: boolean): boolean {
        return this.matchAll(graphUris, subject, predicate, object, includeInferred).next().done === false;
    }

    /**
     * Get the first triple matching the given pattern in the store.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     * @param subject A subject URI or null to match any subject.
     * @param predicate A predicate URI or null to match any predicate.
     * @param object An object URI or null to match any object.
     * @returns The first triple that matches the pattern.
     * @throws {TripleNotFoundError} If no triple is found matching the pattern.
     */
    first(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | null, predicate: rdfjs.Quad_Predicate | null, object: rdfjs.Quad_Object | null, includeInferred?: boolean) {
        const result = this.matchAll(graphUris, subject, predicate, object, includeInferred).next().value;

        if (!result) {
            throw new TripleNotFoundError(subject, predicate, object);
        }

        return result;
    }
}