import * as fs from 'fs';
import { TurtleSyntaxParser } from "./turtle-syntax-parser";

describe("TrigSyntaxParser", () => {
    const parser = new TurtleSyntaxParser();

    it('will return errors in wrong syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/valid-spo.sparql').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
    });
    
    it('can detect prefix errors in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/invalid-undefined-prefix.ttl').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBeGreaterThan(0);
    });

    it('can detect syntax errors in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/invalid-missing-semicolon.ttl').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
    });

    it("can tokenize a Trig file with named graphs", () => {
        const { errors } = parser.parse("<http://example.org/graph> { <http://example.org/subject> <http://example.org/predicate> <http://example.org/object> . }");

        expect(errors.length).toBeGreaterThan(0);
    });

    it('can parse data in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/vocabularies/schema.ttl').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.comments.length).toBe(0);
    });

    it('can parse comments in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/valid-comments.ttl').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.comments.length).toBeGreaterThan(0);
    });

    it('can parse data in N-Triples syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/vocabularies/schema-nt.nt').toString();
        const result = parser.parse(data);

        expect(result.errors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.comments.length).toBe(0);
    });

    it('can NOT parse data in N-Quads syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/vocabularies/schema-nq.nq').toString();
        const result = parser.parse(data);

        // Note: This is because currently the parser does not support N-Quads.
        expect(result.errors.length).toBeGreaterThan(0);

        // When implementing support for N-Quads, this should be the expected result:
        // expect(result.errors.length).toBe(0);
        // expect(result.semanticErrors.length).toBe(0);
        // expect(result.tokens.length).toBeGreaterThan(0);
    });
});