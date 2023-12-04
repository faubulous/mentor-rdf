import * as fs from "fs";
import { IRecognitionException } from "chevrotain";
import { IToken, W3SpecSparqlParser } from "millan";
import { RdfSyntax } from "./rdf-syntax";
import { TrigSyntaxParser } from "./trig-syntax-parser";

export interface TokenizerResult {
    tokens: IToken[];
    syntaxErrors: IRecognitionException[];
    semanticErrors: IRecognitionException[];
}

export class Tokenizer {
    static async parseFile(filePath: string, syntax: RdfSyntax): Promise<TokenizerResult> {
        const data = fs.readFileSync(filePath).toString();

        return this.parseData(data, syntax);

    }

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