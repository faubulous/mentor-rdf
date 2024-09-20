import { TrigParser } from "millan";
import { SytnaxParser, SyntaxParseResult } from "./document-parser";

/**
 * A TriG document parser that also returns comments.
 */
export class TrigSyntaxParser extends TrigParser implements SytnaxParser {
    public parse = (content: string): SyntaxParseResult => {
        const result = this.lexer.tokenize(content);

        this.input = result.tokens;

        const cst = this.trigDoc(0, ['standard']);
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