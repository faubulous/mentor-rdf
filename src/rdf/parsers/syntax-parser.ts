import { IRecognitionException, IToken } from "chevrotain";
import { IStardogParser } from "millan";

/**
 * The result of parsing a text document.
 */
export interface SyntaxParseResult {
    errors: IRecognitionException[];
    semanticErrors: IRecognitionException[];
    comments: IToken[];
    cst: any;
}

/**
 * A syntax parser for text documents.
 */
export interface SyntaxParser extends IStardogParser {
    parse(content: string): SyntaxParseResult;
}