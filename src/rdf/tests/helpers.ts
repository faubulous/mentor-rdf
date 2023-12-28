import * as n3 from "n3";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import { ParseOptions, StoreFactory } from "../store-factory"
import EventEmitter from "events";

export function pathToFileURL(filePath: string): string {
    return url.pathToFileURL(path.resolve(filePath)).href;
}

/**
* Create an RDF store from a file.
* @param path Path to a file containing RDF triples in Turtle or N3 format.
* @param inference Indicates if OWL inference should be performed on the store.
* @returns A promise that resolves to an RDF store.
*/
export async function createFromFile(filePath: string, parseOptions?: ParseOptions): Promise<n3.Store> {
    const graphUri = pathToFileURL(filePath);
    const stream = fs.createReadStream(filePath);

    return StoreFactory.createFromStream(stream, graphUri, parseOptions);
}

/**
 * Create an RDF store from a file.
 * @param input Input data or stream in Turtle format to be parsed.
 * @param graphUri URI of the graph to in which the triples will be created.
 * @param parseCallback Callback function that will be called for each parsed triple.
 * @returns A promise that resolves to an RDF store.
 */
export async function createFromStream(input: string | EventEmitter, graphUri: string, parseOptions?: ParseOptions): Promise<n3.Store> {
    return StoreFactory.createFromStream(input, graphUri, parseOptions);
}

export function writeNTriples(store: n3.Store, graphUri: string): string {
    let graph = "";

    for(let q of store.readQuads(null, null, null, graphUri))
    {
        graph += `<${q.subject.value}> <${q.predicate.value}> <${q.object.value}> .\n`;
    }

    return graph;
}