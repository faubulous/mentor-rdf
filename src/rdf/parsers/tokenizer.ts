import { IRecognitionException } from "chevrotain";
import { IToken } from "millan";
import { RdfSyntax } from "./rdf-syntax";
import { TrigSyntaxParser } from "./trig-syntax-parser";
import { SparqlSyntaxParser } from "./sparql-syntax-parser";
import { TurtleSyntaxParser } from "./turtle-syntax-parser";

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
            const parser = new SparqlSyntaxParser();

            const { errors, semanticErrors, comments } = parser.parse(data);
            const tokens = [...parser.input, ...comments];

            return { tokens, syntaxErrors: errors, semanticErrors };
        } else {
            const parser = syntax === RdfSyntax.TriG ? new TrigSyntaxParser() : new TurtleSyntaxParser();

            const { errors, semanticErrors, comments } = parser.parse(data);
            const tokens = [...parser.input, ...comments];

            return { tokens, syntaxErrors: errors, semanticErrors };
        }
    }
}