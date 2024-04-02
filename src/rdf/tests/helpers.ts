import * as n3 from "n3";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import { IReasoner } from "../reasoners/reasoner";
import { Store } from "../store";

/**
 * Get the URL of a file.
 * @param filePath A file system path.
 * @returns A URL to the file.
 */
export function pathToFileURL(filePath: string): string {
    return url.pathToFileURL(path.resolve(filePath)).href;
}

/**
 * Read the content of a file.
 * @param filePath A file path.
 * @returns The content of the file as a string.
 */
export async function readFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(filePath)) {
            reject(`File not found: ${filePath}`);
        }

        try {
            const result = fs.readFileSync(filePath).toString();

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * Load a Turtle or N3 file into a store.
 * @param store An RDF store.
 * @param filePath Path to a file containing RDF triples in Turtle or N3 format.
 * @param onQuad Callback function that will be called for each parsed triple.
 * @returns A promise that resolves to the URI of the graph that was loaded.
 */
export async function loadFile(store: Store, filePath: string, graphUri?: string, onQuad?: (quad: n3.Quad) => void): Promise<string> {
    const graph = graphUri ?? pathToFileURL(filePath);
    const stream = fs.createReadStream(filePath);

    await store.loadFromStream(stream, graph, true, true, onQuad);

    return graph;
}

/**
 * Create a RDF triple store from a string.
 * @param filePath Path to a file containing RDF triples in Turtle or N3 format.
 * @param reasoner A reasoner to be used with the store.
 * @param onQuad Callback function that will be called for each parsed triple.
 * @returns A promise that resolves to an RDF store.
 */
export async function createStoreFromString(filePath: string, reasoner?: IReasoner, onQuad?: (quad: n3.Quad) => void): Promise<Store> {
    const graphUri = pathToFileURL(filePath);
    const data = await readFile(filePath);

    return new Store(reasoner).loadFromStream(data, graphUri, reasoner != null, true, onQuad);
}

/**
* Create a RDF triple store from a file.
* @param path Path to a file containing RDF triples in Turtle or N3 format.
* @param reasoner A reasoner to be used with the store.
* @param onQuad Callback function that will be called for each parsed triple.
* @returns A promise that resolves to an RDF store.
*/
export async function createStoreFromFile(filePath: string, reasoner?: IReasoner, onQuad?: (quad: n3.Quad) => void): Promise<Store> {
    const graphUri = pathToFileURL(filePath);
    const stream = fs.createReadStream(filePath);

    return new Store(reasoner).loadFromStream(stream, graphUri, reasoner != null, true, onQuad);
}
