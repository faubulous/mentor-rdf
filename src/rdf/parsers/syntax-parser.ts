import { IRecognitionException, IToken } from "chevrotain";
import { IStardogParser } from "millan";

/**
 * The result of parsing a text document.
 */
export interface SyntaxParseResult {
    /*
     * The comments in the document.
     */
    comments: IToken[];

    /**
     * The concrete syntax tree of the document.
     */
    cst: any;

    /**
     * The syntax errors in the document.
     */
    errors: IRecognitionException[];

    /**
     * The semantic errors in the document.
     */
    semanticErrors: IRecognitionException[];

    /**
     * The tokens in the document excluding comments.
     */
    tokens: IToken[];
}

/**
 * A generic syntax parser for text documents.
 */
export interface SyntaxParser extends IStardogParser {
    /**
     * Parse the content of a text document.
     * @param content The content of the document to parse.
     */
    parse(content: string): SyntaxParseResult;
}