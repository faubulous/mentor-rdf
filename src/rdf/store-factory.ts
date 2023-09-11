import * as fs from "fs";
import * as n3 from "n3";
import { OwlReasoner } from "./owl-reasoner";

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
    public static async createFromFile(path: string, inference: boolean = true): Promise<n3.Store> {
        return new Promise((resolve, reject) => {
            const graph = new n3.NamedNode('file://' + process.cwd() + '/src/rdf/test/gist.ttl');
            const store = new n3.Store();
            const stream = fs.createReadStream(path);

            new n3.Parser({ }).parse(stream, (error, quad, done) => {
                if (quad) {
                    store.add(new n3.Quad(quad.subject, quad.predicate, quad.object, graph));
                } else if (error) {
                    reject(error);
                } else if (done) {
                    if (inference) {
                        new OwlReasoner().expand(store, graph);
                    }
                    
                    resolve(store);
                }
            });
        });
    }
}