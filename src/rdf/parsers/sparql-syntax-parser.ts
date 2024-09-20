import { IRecognitionException, IToken } from "chevrotain";
import { W3SpecSparqlParser } from "millan";
import { SyntaxParser, SyntaxParseResult } from "./syntax-parser";

/**
 * An extended version of the Millan SPARQL parser that also returns semantic errors such as undefined prefixes.
 */
export class SparqlSyntaxParser implements SyntaxParser {
    readonly parser: W3SpecSparqlParser = new W3SpecSparqlParser();

    public get input(): IToken[] {
        return this.parser.input;
    }

    public tokenize(document: string): IToken[] {
        return this.parser.tokenize(document);
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

        return { cst, errors, semanticErrors, comments: comments ? comments : [] };
    };
}