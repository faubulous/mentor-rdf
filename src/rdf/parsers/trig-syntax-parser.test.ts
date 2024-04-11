import { TrigSyntaxParser } from "./trig-syntax-parser";

describe("TrigSyntaxParser", () => {
    const parser = new TrigSyntaxParser();

    it("can tokenize a Trig file with named graphs", () => {
        const { errors } = parser.parse("<http://example.org/graph> { <http://example.org/subject> <http://example.org/predicate> <http://example.org/object> . }");
        const tokens = parser.input;

        expect(errors.length).toEqual(0);
        expect(tokens.length).toEqual(7);
        expect(tokens[0].image.trim()).toEqual("<http://example.org/graph>");
        expect(tokens[1].image).toEqual("{");
        expect(tokens[2].image.trim()).toEqual("<http://example.org/subject>");
        expect(tokens[3].image.trim()).toEqual("<http://example.org/predicate>");
        expect(tokens[4].image.trim()).toEqual("<http://example.org/object>");
        expect(tokens[5].image).toEqual(".");
        expect(tokens[6].image).toEqual("}");
    });
});