import * as rdfjs from "@rdfjs/types";
import * as rdflib from "rdflib";
import { dataFactory } from "./data-factory";

/**
 * Converts an rdflib term to an RDFJS term.
 * @param term The rdflib term to convert.
 * @returns The corresponding RDFJS term.
 */
export const toRdfjsTerm = (term: rdflib.Node): rdfjs.Term => {
    switch (term.termType) {
        case 'NamedNode':
            return dataFactory.namedNode(term.value);
        case 'BlankNode':
            return dataFactory.blankNode(term.value);
        case 'Literal': {
            const literal = term as rdflib.Literal;

            if (literal.language) {
                return dataFactory.literal(term.value, literal.language);
            } else if (literal.datatype) {
                return dataFactory.literal(term.value, dataFactory.namedNode(literal.datatype.value));
            } else {
                return dataFactory.literal(term.value);
            }
        }
        default: {
            throw new Error(`Unsupported RDF termType: ${term.termType}`);
        }
    }
}

/**
 * Converts an RDFJS term to an rdflib term adding compareTerm methods required by rdflib serializers.
 * @param term The RDFJS term to convert.
 * @returns The corresponding rdflib term.
 */
export const toRdflibTerm = (term: rdfjs.Term) => {
    switch (term.termType) {
        case 'NamedNode':
            return rdflib.namedNode(term.value);
        case 'BlankNode':
            return rdflib.blankNode(term.value);
        case 'Literal': {
            const literal = term as rdfjs.Literal;

            if (literal.language) {
                return rdflib.lit(term.value, literal.language);
            } else if (literal.datatype) {
                return rdflib.lit(term.value, undefined, rdflib.namedNode(literal.datatype.value));
            } else {
                return rdflib.lit(term.value);
            }
        }
        default: {
            throw new Error(`Unsupported RDF termType: ${term.termType}`);
        }
    }
};