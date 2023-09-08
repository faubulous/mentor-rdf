import * as fs from "fs";
import * as n3 from "n3";
import { basename, extname, dirname, join, parse } from "path";
import { Writable } from "stream";
import { RDFS, SKOS } from "src/ontologies";

/**
 * A generator for TypeScript vocabulary files.
 */
export class VocabularyGenerator {
    /**
     * The supported RDF file extensions.
     */
    private readonly _supportedExtensions = new Set<string>([
        ".ttl",
        ".n3"
    ]);

    /**
     * The predicates that are used to describe a subject.
     */
    private readonly _descriptionPredicates = new Set<string>([
        RDFS.comment,
        SKOS.definition
    ]);

    /**
     * Get the subject of a quad as a named node.
     * @param quad A quad.
     * @returns A named node if the given quad describes a subject, otherwise undefined.
     */
    private _getNamedSubject(quad: n3.Quad): string {
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
    private _getDescription(quad: n3.Quad): n3.Literal {
        if (this._descriptionPredicates.has(quad.predicate.value)) {
            return quad.object as n3.Literal;
        }
    }

    /**
     * Parse the label of a URI.
     * @param subject A URI.
     * @returns The label of the URI.
     */
    private _getLabel(subject: string) {
        let n = subject.lastIndexOf('#');

        if (n > 0) {
            return subject.slice(n + 1);
        }

        n = subject.lastIndexOf('/');

        if (n > 0) {
            return subject.slice(n + 1);
        } else {
            return undefined;
        }
    }

    /**
     * Write a vocabulary to a TypeScript file given a function for serializing the URI of a subject.
     * @param stream A writable stream to the target file.
     * @param prefix Namespace prefix of the vocabulary.
     * @param subjects URIs of the subjects to serialize.
     * @param value A function that serializes a URI.
     */
    private _writeVocabulary(stream: Writable, prefix: string, subjects: { [key: string]: n3.Literal[] }, value: (s: string) => string) {
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

            stream.write(`\n\t'${label}': ${value(s)},`);
        }

        stream.write(`\n}`);
    }

    /**
     * Serialize a vocabulary to a TypeScript file.
     * @param stream A writable stream to the target file.
     * @param prefix Namespace prefix of the vocabulary.
     * @param subjects URIs of the subjects to serialize.
     */
    private _serialize(stream: Writable, prefix: string, subjects: { [key: string]: n3.Literal[] }) {
        stream.write(`import * as n3 from "n3";\n\n`);

        this._writeVocabulary(stream, prefix.toUpperCase(), subjects, s => `'${s}'`);

        stream.write(`\n\n`);

        this._writeVocabulary(stream, prefix.toLowerCase(), subjects, s => `new n3.NamedNode('${s}')`);

        stream.on("end", () => {
            stream.end();
        });
    }

    /**
     * Create an index.ts file for the given modules.
     * @param path Directory of the index.ts file.
     * @param modules Array of modules to export.
     */
    private _serializeIndex(path: string, modules: string[]) {
        const stream = fs.createWriteStream(join(path, "index.ts"));

        for (let m of modules.map(x => basename(x))) {
            stream.write(`export * from './${parse(m).name}';\n`);
        }

        stream.on("end", () => {
            stream.end();
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

            const inputStream = fs.createReadStream(path);
            const outputStream = fs.createWriteStream(result);
            const subjects = {};

            new n3.Parser().parse(inputStream, (error, quad, done) => {
                if (quad) {
                    const s = this._getNamedSubject(quad);
                    const o = this._getDescription(quad);

                    if (!subjects[s]) {
                        subjects[s] = [];
                    }

                    if (o) {
                        subjects[s].push(o);
                    }
                } else if (error) {
                    reject(error);
                } else if (done) {
                    this._serialize(outputStream, prefix, subjects);

                    resolve(result);
                }
            });
        });
    }

    /**
     * Generate TypeScript vocabulary files for all RDF files in the given directory.
     * @param path Path of the directory to parse.
     * @param createIndex Indicate if an index.ts file should be created.
     * @returns An array of paths to the generated files.
     */
    public async parseDirectory(path: string, createIndex: boolean = false): Promise<string[]> {
        const result = [];

        for (let file of fs.readdirSync(path)) {
            const ext = extname(file);

            if (this._supportedExtensions.has(ext)) {
                const f = await this.parseFile(join(path, file));

                result.push(f);
            }
        };

        if (createIndex) {
            this._serializeIndex(path, result);
        }

        return result;
    }
}