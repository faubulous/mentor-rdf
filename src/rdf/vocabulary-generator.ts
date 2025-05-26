import * as fs from "fs";
import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import { basename, extname, dirname, join, parse } from "path";
import { Readable, Writable } from "stream";
import { Uri } from "./uri";

/**
 * A generator for TypeScript vocabulary files.
 */
export class VocabularyGenerator {
    /**
     * The supported RDF file extensions.
     */
    private readonly _supportedExtensions = new Set<string>([
        ".ttl",
        ".trig",
        ".n3",
        ".nt",
        ".nq"
    ]);

    /**
     * The predicates that are used to describe a subject.
     */
    private readonly _descriptionPredicates = new Set<string>([
        "http://www.w3.org/2000/01/rdf-schema#comment",
        "http://www.w3.org/2004/02/skos/core#definition",
        "http://www.w3.org/2004/02/skos/core#scopeNote",
    ]);

    /**
     * Get a valid TypeScript identifier from a string.
     * @param str The filename to generate a prefix from.
     * @returns A valid TypeScript identifier.
     */
    private _getTypescriptIdentifier(str: string): string {
        return str.replace(/[^a-zA-Z0-9_]/g, '_');
    }

    /**
     * Get the subject of a quad as a named node.
     * @param quad A quad.
     * @returns A named node if the given quad describes a subject, otherwise undefined.
     */
    private _getNamedSubject(quad: rdfjs.Quad): string | undefined {
        if (quad.subject.termType == "NamedNode") {
            return quad.subject.value;
        } else {
            return undefined;
        }
    }

    /**
     * Get the description of a subject from a quad, if any.
     * @param quad A quad.
     * @returns A literal if the given quad describes a subject, otherwise undefined.
     */
    private _getDescription(quad: rdfjs.Quad): rdfjs.Literal | undefined {
        if (this._descriptionPredicates.has(quad.predicate.value)) {
            return quad.object as rdfjs.Literal;
        }
    }

    /**
     * Parse the label of a URI.
     * @param subject A URI.
     * @returns The label of the URI.
     */
    private _getLabel(subject: string) {
        let result = undefined;

        let n = subject.lastIndexOf('#');

        if (n > 0) {
            result = subject.slice(n + 1);
        } else {
            n = subject.lastIndexOf('/');

            if (n > 0) {
                result = subject.slice(n + 1);
            }
        }

        if (result && /^\d/.test(result)) {
            result = '_' + result;
        }

        return result;
    }

    /**
     * Write a namespace to a TypeScript file.
     * @param stream A writable stream to the target file.
     * @param prefix Namespace prefix of the vocabulary.
     * @param namespaceUri URI of the namespace.
     */
    private _writeNamespace(stream: Writable, prefix: string, namespaceUri: string, value: (s: string) => string = s => s) {
        stream.write(`/** Namespace URI of the ${prefix} vocabulary. */\n`);
        stream.write(`export const _${prefix} = ${value(namespaceUri)};\n\n`);
    }

    /**
     * Write a vocabulary to a TypeScript file given a function for serializing the URI of a subject.
     * @param stream A writable stream to the target file.
     * @param prefix Namespace prefix of the vocabulary.
     * @param subjects URIs of the subjects to serialize.
     * @param value A function that serializes a URI.
     */
    private _writeVocabulary(stream: Writable, prefix: string, subjects: { [key: string]: rdfjs.Literal[] }, value: (s: string) => string) {
        stream.write(`export const ${prefix} = {`);

        for (var s of Object.keys(subjects).filter(s => s).sort()) {
            var definitions = subjects[s];

            var comment = definitions.find(l => l.language == "en");

            if (!comment) {
                comment = definitions.find(l => !l.language);
            }

            var label = this._getLabel(s);

            if (!label) {
                continue;
            }

            if (comment) {
                stream.write(`\n\t/** ${comment.value} */`);
            }

            label = this._getTypescriptIdentifier(label);

            stream.write(`\n\t'${label}': ${value(s)},`);
        }

        stream.write(`\n}`);
    }

    /**
     * Get the most used namespace of the given subjects.
     * @param subjects URIs of the subjects.
     * @returns The most common namespace of the subjects.
     */
    private _getVocabularyNamespace(subjects: string[]): string | undefined {
        let namespaces: { [key: string]: number } = {};

        for (let s of subjects) {
            let ns = Uri.getNamespaceUri(s);

            if (!namespaces[ns]) {
                namespaces[ns] = 0;
            }

            namespaces[ns] += 1;
        }

        return Object.keys(namespaces).sort((a, b) => namespaces[b] - namespaces[a])[0];
    }

    /**
     * Serialize a vocabulary to a TypeScript file.
     * @param outputStream A writable stream to the target file.
     * @param prefix Namespace prefix of the vocabulary.
     * @param subjects URIs of the subjects to serialize.
     */
    private _serialize(inputStream: Readable, outputStream: Writable, prefix: string, subjects: { [key: string]: rdfjs.Literal[] }) {
        outputStream.write(`import * as n3 from "n3";\n\n`);
        outputStream.write(`const { namedNode } = n3.DataFactory;\n\n`);

        const ns = this._getVocabularyNamespace(Object.keys(subjects));

        if (!ns) {
            throw new Error("Unable to determine the vocabulary namespace.");
        }

        const p = this._getTypescriptIdentifier(prefix);

        this._writeNamespace(outputStream, p.toUpperCase(), ns, ns => `'${ns}'`);

        this._writeVocabulary(outputStream, p.toUpperCase(), subjects, s => `'${s}'`);

        outputStream.write(`\n\n`);

        this._writeNamespace(outputStream, p.toLowerCase(), ns, ns => `namedNode('${ns}')`);

        this._writeVocabulary(outputStream, p.toLowerCase(), subjects, s => `namedNode('${s}')`);
    }

    /**
     * Create an index.ts file for the given modules.
     * @param path Directory of the index.ts file.
     * @param modules Array of modules to export.
     */
    private async _serializeIndex(path: string, modules: string[]): Promise<void> {
        return new Promise((resolve, reject) => {
            let data = '';

            for (let m of modules.map(x => basename(x))) {
                let name = parse(m).name;
                let id = this._getTypescriptIdentifier(name);

                data += `export { ${id.toUpperCase()}, _${id.toUpperCase()}, ${id.toLowerCase()}, _${id.toLowerCase()} } from './${name}';\n`;
            }

            const file = join(path, "index.ts");
            const stream = fs.createWriteStream(file);

            stream.write(data, "utf8", (error) => {
                if (error) {
                    fs.unlinkSync(file);

                    reject(error);
                } else {
                    stream.end(() => resolve());
                }
            });
        });
    }

    private async _writeSourceIndex(path: string): Promise<void> {
        return new Promise((resolve, reject) => {
            // Note: We append the raw source to an index file so the store can
            // read it into a stream without needing file system access. However, we
            // append the raw source file that is not exported by the index.ts file 
            // to avoid breaking anything when the source file is corrupt for some reason.
            let data = '';

            for (let file of fs.readdirSync(path)) {
                const ext = extname(file);

                if (this._supportedExtensions.has(ext)) {
                    const prefix = this._getTypescriptIdentifier(parse(file).name);

                    let content = fs.readFileSync(join(path, file)).toString();
                    content = content.replace(/\\"/g, "'");

                    data += `export const ${prefix} = \``;
                    data += content;
                    data += '`;\n\n';
                }
            }

            const file = join(path, "src.ts");
            const stream = fs.createWriteStream(file);

            stream.write(data, "utf8", (error) => {
                if (error) {
                    fs.unlinkSync(file);

                    reject(error);
                } else {
                    stream.end(() => resolve());
                }
            });
        });
    }

    /**
     * Parse a single RDF file and generate a TypeScript vocabulary file.
     * @param path Path of the RDF file to parse.
     * @returns Path of the generated TypeScript file.
     */
    public async parseFile(path: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const directory = dirname(path);
            const prefix = parse(path).name;
            const result = join(directory, prefix + '.ts');

            const input = fs.createReadStream(path);
            const output = fs.createWriteStream(result);
            const subjects: { [key: string]: rdfjs.Literal[] } = {};

            new n3.Parser().parse(input, (error, quad, done) => {
                if (quad) {
                    const s = this._getNamedSubject(quad);

                    if (s) {
                        // If the key is not yet in the dictionary, add it.
                        if (!subjects[s]) {
                            subjects[s] = [];
                        }

                        const o = this._getDescription(quad);

                        // If there is a description, add it to the array.
                        if (o) {
                            subjects[s].push(o);
                        }
                    }
                } else if (error) {
                    input.close();
                    output.close();

                    fs.unlinkSync(result);

                    reject(error);
                } else if (done) {
                    console.log(`Writing ${result}..`);

                    this._serialize(input, output, prefix, subjects);

                    input.close();
                    output.close();

                    resolve(result);
                }
            });
        });
    }

    /**
     * Generate TypeScript vocabulary files for all RDF files in the given directory.
     * @param path Path of the directory to parse.
     * @param createIndex Indicate if an index.ts file should be created.
     * @param createSourceIndex Indicate if a src.ts file should be created.
     * @returns An array of paths to the generated files.
     */
    public async parseDirectory(path: string, createIndex: boolean = false, createSourceIndex: boolean = false): Promise<string[]> {
        const result = [];

        for (let file of fs.readdirSync(path)) {
            const ext = extname(file);

            if (this._supportedExtensions.has(ext)) {
                const f = await this.parseFile(join(path, file));

                result.push(f);
            }
        };

        if (createIndex) {
            await this._serializeIndex(path, result);
        }

        if (createSourceIndex) {
            await this._writeSourceIndex(path);
        }

        return result;
    }
}