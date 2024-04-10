import * as n3 from "n3";
import { Quad_Subject, Quad_Object } from "@rdfjs/types";
import { Store } from "./store";
import { rdfs } from "../ontologies";

/**
 * Parameters for matching triples in the store.
 */
export interface QueryOptions {
    /**
     * Indicates if inferred triples should be included in the result. If `undefined`, 
     * the default value is `true` when a reasoner associated with the store and `false` otherwise.
     */
    includeInferred?: boolean;
}

export interface DefinitionQueryOptions extends QueryOptions {
    /**
     * URI of the vocabulary that defines the resource.
     */
    definedBy?: string | null;

    /**
     * Indicate if terms what are not *defined* in the ontology should be included in the result (default: true).
     */
    includeReferenced?: boolean;
}

/**
 * A repository for retrieving resources from graphs.
 */
export class ResourceRepository {
    /**
     * The RDF triple store.
     */
    readonly store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    protected skip(graphUris: string | string[] | undefined, node: Quad_Subject | Quad_Object, options?: DefinitionQueryOptions): boolean {
        if (node.termType != "NamedNode") {
            return true;
        }

        if (options?.definedBy !== undefined) {
            return !this.isDefinedBy(graphUris, node as n3.NamedNode<string>, options.definedBy);
        }

        if (options?.includeReferenced === false && !this.hasSubject(graphUris, node.value)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a given URI exists as the subject of a triple in the graph.
     * @param graphUris URIs of the graphs to search.
     * @param subjectUri URI of the subject to search for.
     * @returns true if the URI is a subject, false otherwise.
     */
    hasSubject(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let _ of this.store.match(graphUris, s, null, null, false)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a node is explicitly defined by the given URI using the rdfs:isDefinedBy property.
     * @param graphUris URIs of the graphs to search.
     * @param node A named node to check if it is defined by the given URI.
     * @param definedBy URI of the vocabulary that defines the resource (rdfs:isDefinedBy).
     * @returns `true` if the node is defined by the given URI, `false` otherwise.
     */
    isDefinedBy(graphUris: string | string[] | undefined, node: n3.NamedNode<string>, definedBy: string | null): boolean {
        const s = node as n3.NamedNode<string>;

        if (definedBy) {
            const o = n3.DataFactory.namedNode(definedBy);

            for (let _ of this.store.match(graphUris, s, rdfs.isDefinedBy, o)) {
                return true;
            }

            return s.value.startsWith(definedBy);
        } else if (definedBy === null) {
            for (let _ of this.store.match(graphUris, s, rdfs.isDefinedBy, null)) {
                return false;
            }
        }

        return true;
    }
}