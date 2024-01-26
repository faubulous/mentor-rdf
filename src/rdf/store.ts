import * as n3 from "n3";
import * as src from '../ontologies/src';
import { EventEmitter } from "stream";
import { IReasoner } from "./reasoners/reasoner";

/**
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
    public readonly reasoner?: IReasoner;

    /**
     * Return the number of triples in the store.
     */
    public get size(): number {
        return this._store.size;
    }

    /**
     * Create a new RDF triple store.
     * @param reasoner The reasoner to be used for inference.
     */
    constructor(reasoner?: IReasoner) {
        this.reasoner = reasoner;
    }

    /**
     * Loads a set of W3C Standard ontologies into the store (RDF, RDFA, RDFS, OWL, SKOS, SHACL, XSD).
     */
    public async loadFrameworkOntologies() {
        await this.loadFromStream(src.rdf, "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        await this.loadFromStream(src.rdfa, "http://www.w3.org/ns/rdfa#");
        await this.loadFromStream(src.rdfs, "http://www.w3.org/2000/01/rdf-schema#");
        await this.loadFromStream(src.owl, "http://www.w3.org/2002/07/owl#");
        await this.loadFromStream(src.shacl, "http://www.w3.org/ns/shacl#");
        await this.loadFromStream(src.skos, "http://www.w3.org/2004/02/skos/core#");
        await this.loadFromStream(src.xsd, "http://www.w3.org/2001/XMLSchema#");
    }

    /**
     * Create an RDF store from a file.
     * @param input Input data or stream in Turtle format to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param onQuad Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    public async loadFromStream(input: string | EventEmitter, graphUri: string, onQuad?: (quad: n3.Quad) => void): Promise<Store> {
        return new Promise((resolve, reject) => {
            const graph = new n3.NamedNode(graphUri.replace('\\', '\/'));

            new n3.Parser({}).parse(input, (error, quad, done) => {
                if (quad) {
                    this._store.add(new n3.Quad(quad.subject, quad.predicate, quad.object, graph));

                    if (onQuad) {
                        onQuad(quad);
                    }
                } else if (error) {
                    reject(error);
                } else if (done) {
                    if (this.reasoner) {
                        this.reasoner.expand(this._store, graphUri);
                    }

                    resolve(this);
                }
            });
        });
    }

    /**
     * Get the URIs of the graphs in the triple store.
     * @returns An array of graph URIs in no particular order.
     */
    getGraphs(): n3.Quad_Graph[] {
        return this._store.getGraphs(null, null, null);
    }

    /**
     * Query the store for triples matching the given pattern supporting multiple graphs.
     * @param subject A subject URI or null to match any subject.
     * @param predicate A predicate URI or null to match any predicate.
     * @param object An object URI or null to match any object.
     * @param graphUris Optional graph URI or array of graph URIs to query.
     */
    *match(graphUris?: string | string[], subject?: n3.Term | null, predicate?: n3.Term | null, object?: n3.Term | null) {
        if (!graphUris) {
            yield* this._store.match(subject, predicate, object);
        } else if (!Array.isArray(graphUris)) {
            yield* this._store.match(subject, predicate, object, new n3.NamedNode(graphUris));
        } else {
            for (let graph of graphUris.map(g => new n3.NamedNode(g))) {
                yield* this._store.match(subject, predicate, object, graph);
            }
        }
    }
}