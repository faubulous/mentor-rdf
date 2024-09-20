import { TrigParser } from "millan";
import { SytnaxParser, SyntaxParseResult } from "./document-parser";

/**
 * A Turtle document parser that also returns comments.
 */
export class TurtleSyntaxParser extends TrigParser implements SytnaxParser {
    public parse = (content: string): SyntaxParseResult => {
        const result = this.lexer.tokenize(content);

        this.input = result.tokens;

        const cst = this.turtleDoc(0, ['standard']);
        const errors = [...this.errors];
        const semanticErrors = [...this.semanticErrors];
        const comments = result.groups.comments || [];

        this.resetManagedState();

        return {
            errors,
            semanticErrors,
            comments,
            cst,
        };
    };
}