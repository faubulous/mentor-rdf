import * as fs from "fs";
import * as n3 from "n3";
import * as url from "url";
import { EventEmitter } from "stream";
import { IReasoner } from "./reasoning/reasoner";

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
 * Factory for creating RDF stores.
 */
export class StoreFactory {
    /**
     * Create an RDF store from a file.
     * @param path Path to a file containing RDF triples in Turtle or N3 format.
     * @param inference Indicates if OWL inference should be performed on the store.
     * @returns A promise that resolves to an RDF store.
     */
    // public static async createFromFile(filePath: string, parseOptions?: ParseOptions): Promise<n3.Store> {
    //     const graphUri = url.pathToFileURL(path.resolve(filePath)).href;
    //     const stream = fs.createReadStream(filePath);

    //     return this.createFromStream(stream, graphUri, parseOptions);
    // }

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