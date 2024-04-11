import { TurtleSyntaxParser } from "./turtle-syntax-parser";

describe("TrigSyntaxParser", () => {
    const parser = new TurtleSyntaxParser();

    it("can tokenize a Trig file with named graphs", () => {
        const { errors } = parser.parse("<http://example.org/graph> { <http://example.org/subject> <http://example.org/predicate> <http://example.org/object> . }");

        expect(errors.length).toBeGreaterThan(0);
    });
});