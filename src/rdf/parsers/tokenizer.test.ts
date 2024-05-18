import * as fs from 'fs';
import { Tokenizer } from "./tokenizer";
import { RdfSyntax } from './rdf-syntax';

describe("Tokenizer", () => {
    it('can parse data in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/vocabularies/schema.ttl').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Turtle);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can parse comments in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/valid-comments.ttl').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Turtle);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);

        const comments = result.tokens.filter(t => t.tokenType?.name === "Comment");

        expect(comments.length).toBeGreaterThan(0);
    });

    it('can parse data in TriG syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/valid-named-graph.trig').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.TriG);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can parse data in N-Triples syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/vocabularies/schema-nt.nt').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.NTriples);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can NOT parse data in N-Quads syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/vocabularies/schema-nq.nq').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.NQuads);

        // Note: This is because currently the parser does not support N-Quads.
        expect(result.syntaxErrors.length).toBeGreaterThan(0);

        // When implementing support for N-Quads, this should be the expected result:
        // expect(result.syntaxErrors.length).toBe(0);
        // expect(result.semanticErrors.length).toBe(0);
        // expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can parse data in SPARQL syntax', async () => {
        let data = fs.readFileSync('src/rdf/tests/queries/valid-spo.sparql').toString();
        let result = await Tokenizer.parseData(data, RdfSyntax.Sparql);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);

        data = fs.readFileSync('src/rdf/tests/queries/valid-insert.sparql').toString();

        result = await Tokenizer.parseData(data, RdfSyntax.Sparql);
    });

    it('can detect syntax errors in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/invalid-missing-brace.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Sparql);

        expect(result.syntaxErrors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can detect prefix errors in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/invalid-undefined-prefix.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Sparql);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(1);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can parse comments in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/valid-comments.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Sparql);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);

        const comments = result.tokens.filter(t => t.tokenType?.name === "Comment");

        expect(comments.length).toBeGreaterThan(0);
    });

    it('can detect prefix errors in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/invalid-undefined-prefix.ttl').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Turtle);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBeGreaterThan(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can detect syntax errors in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/cases/invalid-missing-semicolon.ttl').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Turtle);

        expect(result.syntaxErrors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('will return errors in wrong syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/valid-spo.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Turtle);

        expect(result.syntaxErrors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });
});