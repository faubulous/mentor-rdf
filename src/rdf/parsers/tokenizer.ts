import { IRecognitionException } from "chevrotain";
import { IToken, W3SpecSparqlParser } from "millan";
import { RdfSyntax } from "./rdf-syntax";
import { TrigSyntaxParser } from "./trig-syntax-parser";

/**
 * Parse result of the RDF tokenizer.
 */
export interface TokenizerResult {
    tokens: IToken[];
    syntaxErrors: IRecognitionException[];
    semanticErrors: IRecognitionException[];
}

/**
 * Parses RDF data into tokens.
 */
export class Tokenizer {
    static async parseData(data: string, syntax: RdfSyntax): Promise<TokenizerResult> {
        if (syntax === RdfSyntax.Sparql) {
            const parser = new W3SpecSparqlParser();

            const { errors, comments } = parser.parse(data);
            const tokens = comments ? [...parser.input, ...comments] : parser.input;

            return { tokens, syntaxErrors: errors, semanticErrors: [] };
        } else {
            const parser = new TrigSyntaxParser();

            const { errors, semanticErrors, comments } = parser.parse(data);
            const tokens = [...parser.input, ...comments];

            return { tokens, syntaxErrors: errors, semanticErrors };
        }
    }
}