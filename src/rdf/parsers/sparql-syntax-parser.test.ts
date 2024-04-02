import { SparqlSyntaxParser } from "./sparql-syntax-parser";

describe("SparqlSyntaxParser", () => {
    const parser = new SparqlSyntaxParser();

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
});