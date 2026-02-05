import { IRecognitionException } from "chevrotain";
import { W3SpecSparqlParser, IToken } from "millan";
import { SyntaxParser, SyntaxParseResult } from "./syntax-parser";

/**
 * An extended version of the Millan SPARQL parser that also returns semantic errors such as undefined prefixes.
 */
export class SparqlSyntaxParser implements SyntaxParser {
    readonly parser: W3SpecSparqlParser = new W3SpecSparqlParser();

    public get input(): IToken[] {
        return this.parser ? this.parser.input : [];
    }

    public tokenize(document: string): IToken[] {
        // Note: The Millan SPARQL parser is crashing when parsing large files to build the CST tree for error detection.
        // Therefore, we access the lexer directly to tokenize the document including comments.
        const lexer = (this.parser as any).lexer;
        const result = lexer.tokenize(document);

        const tokens = result.tokens;
        const comments = result.groups.comments;

        return comments ? [...tokens, ...comments] : tokens;
    }

    public parse = (document: string): SyntaxParseResult => {
        const { cst, errors, comments } = this.parser.parse(document);
        const tokens = this.parser.input;
        const semanticErrors: IRecognitionException[] = [];

        const declaredPrefixes = new Set<string>();

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const tokenName = token.tokenType?.name;

            switch (tokenName) {
                case "PNAME_NS": {
                    const prefix = token.image.split(":")[0];

                    declaredPrefixes.add(prefix);
                    break;
                }
                case "PNAME_LN": {
                    const prefix = token.image.split(":")[0];

                    if (!declaredPrefixes.has(prefix)) {
                        semanticErrors.push({
                            message: `Undefined prefix: ${prefix}`,
                            name: "NoNamespacePrefixError",
                            token: token,
                            resyncedTokens: [],
                            context: {
                                ruleStack: [],
                                ruleOccurrenceStack: []
                            }
                        });
                    }
                    break;
                }
            }
        }

        return {
            comments: comments ? comments : [],
            cst,
            errors,
            semanticErrors,
            tokens,
        };
    };
}