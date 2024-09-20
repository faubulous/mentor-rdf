import { TrigParser } from "millan";
import { SyntaxParser, SyntaxParseResult } from "./syntax-parser";

/**
 * A TriG document parser that also returns comments.
 */
export class TrigSyntaxParser extends TrigParser implements SyntaxParser {
    public parse = (content: string): SyntaxParseResult => {
        const result = this.lexer.tokenize(content);

        this.input = result.tokens;

        const cst = this.trigDoc(0, ['standard']);
        const errors = [...this.errors];
        const semanticErrors = [...this.semanticErrors];
        const comments = result.groups.comments || [];

        this.resetManagedState();

        return {
            comments,
            cst,
            errors,
            semanticErrors,
            tokens: result.tokens,
        };
    };
}