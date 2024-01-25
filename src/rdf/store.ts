import * as n3 from "n3";
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
     * @param graphs Optional graph URI or array of graph URIs to query.
     */
    *match(subject: n3.Term | null | undefined, predicate: n3.Term | null | undefined, object: n3.Term | null | undefined, graphs?: n3.Term | n3.Term[]) {
        if (!graphs) {
            yield* this._store.match(subject, predicate, object);
        } else if (!Array.isArray(graphs)) {
            yield* this._store.match(subject, predicate, object, graphs);
        } else {
            for (let graph of graphs) {
                yield* this._store.match(subject, predicate, object, graph);
            }
        }
    }
}