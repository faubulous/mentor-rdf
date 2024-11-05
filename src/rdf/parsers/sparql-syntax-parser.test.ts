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

        // expect(() => {
        //     // Note:
        //     // This file is very large and is causing a maximum call stack error in the Millan SPARQL parser. 
        //     // The reason is that the parser is implemented recursively and this file is too large for the parser to handle.
        //     data = fs.readFileSync('src/rdf/tests/queries/valid-large.sparql').toString();

        //     result = parser.parse(data);

        //     expect(result.errors.length).toBe(0);
        //     expect(result.semanticErrors.length).toBe(0);
        // }).toThrow(RangeError);
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

        const tokens = parser.tokenize(data);

        expect(tokens.length).toEqual(result.tokens.length + result.comments.length);
    });

    it('can tokenize data in SPARQL syntax without crashing', async () => {
        // Note: This large SPARQL file is causing a maximum call stack error in the Millan 
        // SPARQL parser when parsing due to the recursive implementation of the CST computation.

        const data = fs.readFileSync('src/rdf/tests/queries/valid-large.sparql').toString();
        const result = parser.tokenize(data);

        expect(result.length).toBeGreaterThan(0);
    });
});