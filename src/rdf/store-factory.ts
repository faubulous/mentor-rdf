import * as n3 from "n3";
import { EventEmitter } from "stream";
import { IReasoner } from "./reasoners/reasoner";

/**
 * @deprecated Options for parsing RDF data.
 */
export interface ParseOptions {
    /**
     * The reasoner to be used for inference.
     */
    reasoner?: IReasoner;

    /**
     * A callback function that will be called for each parsed triple.
     * @param quad The parsed triple.
     */
    onQuad?: (quad: n3.Quad) => void;
}

/**
 * @deprecated Factory for creating RDF stores.
 */
export class StoreFactory {
    /**
     * Create an RDF store from a file.
     * @param input Input data or stream in Turtle format to be parsed.
     * @param graphUri URI of the graph to in which the triples will be created.
     * @param parseCallback Callback function that will be called for each parsed triple.
     * @returns A promise that resolves to an RDF store.
     */
    public static async createFromStream(input: string | EventEmitter, graphUri: string, parseOptions?: ParseOptions): Promise<n3.Store> {
        return new Promise((resolve, reject) => {
            const graph = new n3.NamedNode(graphUri.replace('\\', '\/'));
            const store = new n3.Store();

            new n3.Parser({}).parse(input, (error, quad, done) => {
                if (quad) {
                    store.add(new n3.Quad(quad.subject, quad.predicate, quad.object, graph));

                    if (parseOptions?.onQuad) {
                        parseOptions.onQuad(quad);
                    }
                } else if (error) {
                    reject(error);
                } else if (done) {
                    if (parseOptions?.reasoner) {
                        // Todo: Improve URI generation to support URIs that already have a fragment id.
                        const g = graphUri + '#inference';

                        parseOptions.reasoner.expand(store, graphUri, g);
                    }

                    resolve(store);
                }
            });
        });
    }
}