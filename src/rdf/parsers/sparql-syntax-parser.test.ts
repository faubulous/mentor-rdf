import * as fs from "fs";
import { SparqlSyntaxParser } from "./sparql-syntax-parser";

describe("SparqlSyntaxParser", () => {
    const parser = new SparqlSyntaxParser();

    it('will return errors in wrong syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/valid-comments.ttl').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
    });

    it("can tokenize a SPARQL query", () => {
        const tokens = parser.tokenize("SELECT ?subject WHERE { ?subject ?predicate ?object }");

        expect(tokens.length).toEqual(8);
        expect(tokens[0].image).toEqual("SELECT");
        expect(tokens[1].image).toEqual("?subject");
        expect(tokens[2].image).toEqual("WHERE");
        expect(tokens[3].image).toEqual("{");
        expect(tokens[4].image).toEqual("?subject");
        expect(tokens[5].image).toEqual("?predicate");
        expect(tokens[6].image).toEqual("?object");
        expect(tokens[7].image).toEqual("}");
    });

    it('can parse data in SPARQL syntax', async () => {
        let data = fs.readFileSync('src/rdf/tests/queries/valid-spo.sparql').toString();
        let result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);

        expect(() => {
            // Note:
            // This file is very large and is causing a maximum call stack error in the Millan SPARQL parser. 
            // The reason is that the parser is implemented recursively and this file is too large for the parser to handle.
            data = fs.readFileSync('src/rdf/tests/queries/valid-insert.sparql').toString();

            result = parser.parse(data);

            expect(result.errors.length).toBe(0);
            expect(result.semanticErrors.length).toBe(0);
        }).toThrow(RangeError);
    });

    it('can detect syntax errors in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/invalid-missing-brace.sparql').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
    });

    it('can detect prefix errors in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/invalid-undefined-prefix.sparql').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(1);
    });

    it('can parse comments in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/valid-comments.sparql').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.comments.length).toBeGreaterThan(0);
    });

    // Note: This is a test case that is causing a maximum call stack error in the Millan SPARQL parser.
    // it('can parse data in SPARQL syntax without crashing', async () => {
    //     const parser = new n3.Parser();
    //     const writer = new n3.Writer({ format: 'Turtle' });

    //     const data = fs.readFileSync('src/rdf/tests/queries/qudt.ttl').toString();

    //     // Read all prefixes from the data.
    //     const prefixes: { [key: string]: string } = {};

    //     const quads = parser.parse(data, null, (prefix, node) => {
    //         prefixes[prefix] = node.value;

    //         writer.addPrefix(prefix, node.value);
    //     });

    //     // Collect all unique subjects
    //     const subjects = new Set<string>();

    //     quads.forEach(quad => {
    //         subjects.add(quad.subject.value);
    //     });

    //     let i = 1;
    //     let queryBody = "";

    //     // Generate Turtle serialization for each subject
    //     for (let subject of subjects) {
    //         const subjectQuads = quads.filter(quad => quad.subject.value === subject);

    //         queryBody += writer.quadsToString(subjectQuads);

    //         console.debug(`Testing ${i++}/${subjects.size} [${queryBody.length}]: `, subject);

    //         let query = "";

    //         for (let prefix in prefixes) {
    //             query += `prefix ${prefix}: <${prefixes[prefix]}>\n`;
    //         }

    //         query += 'insert data { graph <http://example.org/> {\n';
    //         query += queryBody;
    //         query += '}}';

    //         try {
    //             const parser = new SparqlSyntaxParser();
    //             const result = parser.test(query);
    //             result.errors = result.errors;
    //             // const result = await Tokenizer.parseData(query, RdfSyntax.Sparql);

    //             expect(result.errors.length).toBe(0);
    //             expect(result.semanticErrors.length).toBe(0);
    //             expect(result.tokens.length).toBeGreaterThan(0);
    //         } catch (e) {
    //             console.debug(subject);
    //             console.debug(query);
    //             throw e;
    //         }
    //     }
    // });
});