import { IRecognitionException, IToken } from "chevrotain";
import { TrigParser } from "millan";

export class TrigSyntaxParser extends TrigParser {
    public parse = (document: string): {
        errors: IRecognitionException[];
        semanticErrors: IRecognitionException[];
        comments: IToken[];
        cst: any;
    } => {
        const result = this.lexer.tokenize(document);

        this.input = result.tokens;

        const cst = this.turtleDoc(0, ['standard']);
        const errors: IRecognitionException[] = [...this.errors];
        const semanticErrors: IRecognitionException[] = [...this.semanticErrors];
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