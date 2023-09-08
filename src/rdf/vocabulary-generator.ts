import * as fs from "fs";
import * as n3 from "n3";
import { basename, extname, dirname, join, parse } from "path";
import { Writable } from "stream";

export class VocabularyGenerator {
    private readonly _supportedExtensions = new Set<string>([
        ".ttl",
        ".n3"
    ]);

    private readonly _descriptionPredicates = new Set<string>([
        "http://www.w3.org/2000/01/rdf-schema#comment",
        "http://www.w3.org/2004/02/skos/core#definition"
    ]);

    private _getSubject(quad: n3.Quad): string {
        if (quad.subject.termType == "NamedNode") {
            return quad.subject.value;
        } else {
            return undefined;
        }
    }

    private _getDescription(quad: n3.Quad): n3.Literal {
        if (this._descriptionPredicates.has(quad.predicate.value)) {
            return quad.object as n3.Literal;
        }
    }

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

    private _serialize(stream: Writable, prefix: string, subjects: { [key: string]: n3.Literal[] }) {
        stream.write(`import * as n3 from "n3";\n\n`);

        this._writeVocabulary(stream, prefix.toUpperCase(), subjects, s => `'${s}'`);

        stream.write(`\n\n`);

        this._writeVocabulary(stream, prefix.toLowerCase(), subjects, s => `new n3.NamedNode('${s}')`);

        stream.on("end", () => {
            stream.end();
        });
    }

    private _serializeIndex(path: string, modules: string[]) {
        const stream = fs.createWriteStream(join(path, "index.ts"));

        for (let m of modules.map(x => basename(x))) {
            stream.write(`export * from './${parse(m).name}';\n`);
        }

        stream.on("end", () => {
            stream.end();
        });
    }

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
                    const s = this._getSubject(quad);
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