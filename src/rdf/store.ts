import { Store as _Store, Quad_Subject, Quad_Predicate, Quad_Object, NamedNode } from "@rdfjs/types";
import * as n3 from "n3";
import * as src from '../ontologies/src';
import { rdf, RDF } from '../ontologies';
import { _RDF, _RDFA, _RDFS, _OWL, _SH, _SKOS, _XSD } from "../ontologies";
import { EventEmitter } from "stream";
import { Reasoner } from "./reasoners/reasoner";
import { RdfXmlParser } from "rdfxml-streaming-parser";

/**
 * Indicates an error when a triple is not found in the store.
 */
export class TripleNotFoundError extends Error {
    /**
     * Create a new instance of the error.
     * @param message The error message.
     */
    constructor(subject: Quad_Subject | null, predicate: Quad_Predicate | null, object: Quad_Object | null) {
        super(`No triple was found matching the pattern: ${subject} ${predicate} ${object}`);

        this.name = "TripleNotFoundError";
    }
}

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
        await this.loadFromTurtleStream(src.rdf, _RDF);
        await this.loadFromTurtleStream(src.rdfa, _RDFA);
        await this.loadFromTurtleStream(src.rdfs, _RDFS);
        await this.loadFromTurtleStream(src.owl, _OWL);
        await this.loadFromTurtleStream(src.sh, _SH);
        await this.loadFromTurtleStream(src.skos, _SKOS);
        await this.loadFromTurtleStream(src.xsd, _XSD);
    }

    /**
     * Get the URIs of the graphs in the triple store.
     * @returns An array of graph URIs in no particular order.
     */
    getGraphs(): string[] {
        return this._store.getGraphs(null, null, null).map(g => g.id);
    }

    /**
     * Get a handle to the underlying RDFJS store implementation.
     * @returns The RDFJS store object.
     */
    getNativeStore(): _Store {
        return this._store;
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
     * Create an RDF store from N3, Turtle or N-Triples data.
     * @param input Input data or stream in to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    async loadFromTurtleStream(input: string | EventEmitter, graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: n3.Quad) => void): Promise<Store> {
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
     * Create an RDF store from RDF/XML data.
     * @param input Input data or stream format to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param executeInference Indicates if inference should be executed after loading the triples.
     * @param clearGraph Indicates if the graph should be cleared before loading.
     * @param onQuad Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    async loadFromXmlStream(input: string | EventEmitter, graphUri: string, executeInference: boolean = true, clearGraph: boolean = true, onQuad?: (quad: n3.Quad) => void): Promise<Store> {
        return new Promise((resolve, reject) => {
            let quads: n3.Quad[] = [];

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
     * @param graphUri A graph URI.
     * @returns A string serialization of the triples in the graph in Turtle format.
     */
    async serializeGraph(graphUri: string, prefixes?: { [prefix: string]: NamedNode<string> }, format?: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const writer = new n3.Writer({
                format: format || 'Turtle',
                prefixes: prefixes
            });

            for (let q of this._store.match(null, null, null, new n3.NamedNode(graphUri))) {
                writer.addQuad(q.subject, q.predicate, q.object);
            }

            writer.end((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
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
                for (let q of this._store.match(s, p, o, graph)) {
                    yield q;
                }

                if (includeInferred !== false && this.reasoner) {
                    let inferenceGraph = new n3.NamedNode(this.reasoner.getInferenceGraphUri(graph.value));

                    for (let q of this._store.match(s, p, o, inferenceGraph)) {
                        yield q;
                    }
                }
            }
        } else {
            yield* this._store.match(s, p, o);
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
    has(graphUris: string | string[] | undefined, subject: Quad_Subject | null, predicate: Quad_Predicate | null, object: Quad_Object | null, includeInferred?: boolean): boolean {
        return this.match(graphUris, subject, predicate, object, includeInferred).next().done === false;
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
    first(graphUris: string | string[] | undefined, subject: Quad_Subject | null, predicate: Quad_Predicate | null, object: Quad_Object | null, includeInferred?: boolean) {
        const result = this.match(graphUris, subject, predicate, object, includeInferred).next().value;

        if (!result) {
            throw new TripleNotFoundError(subject, predicate, object);
        }

        return result;
    }
}