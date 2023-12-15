import * as fs from 'fs';
import { Tokenizer } from "./tokenizer";
import { RdfSyntax } from './rdf-syntax';

describe("Tokenizer", () => {
    it('can parse data in Turtle syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/ontologies/schema.ttl').toString();
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

    it('can parse data in N-Triples syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/ontologies/schema.nt').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.NTriples);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can parse data in N-Quads syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/ontologies/schema.nq').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.NQuads);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can parse data in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/spo-valid.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Sparql);

        expect(result.syntaxErrors.length).toBe(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });

    it('can detect syntax errors in SPARQL syntax', async () => {
        const data = fs.readFileSync('src/rdf/tests/queries/spo-invalid.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Sparql);

        expect(result.syntaxErrors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
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
        const data = fs.readFileSync('src/rdf/tests/queries/spo-valid.sparql').toString();
        const result = await Tokenizer.parseData(data, RdfSyntax.Turtle);

        expect(result.syntaxErrors.length).toBeGreaterThan(0);
        expect(result.semanticErrors.length).toBe(0);
        expect(result.tokens.length).toBeGreaterThan(0);
    });
});