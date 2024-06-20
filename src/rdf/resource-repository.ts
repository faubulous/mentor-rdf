import * as n3 from "n3";
import { Quad_Subject, Quad_Object } from "@rdfjs/types";
import { Store } from "./store";
import { rdf, rdfs } from "../ontologies";
import { Uri } from "./uri";

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

/**
 * Parameters for querying resources in the store that have an explicitly asserted type in the document.
 */
export interface DefinitionQueryOptions extends QueryOptions {
    /**
     * URI of the vocabulary that defines the resources. If `null`, returns only resources that have no `rdfs:isDefinedBy` property.
     */
    definedBy?: string | null;

    /**
     * URIs of the vocabularies in which the resources must not be defined, either by sharing a namespace or by `rdfs:isDefinedBy`.
     */
    notDefinedBy?: string[];

    /**
     * Indicate if terms what are not *defined* in the ontology should be included in the result (default: false).
     */
    includeReferenced?: boolean;

    /**
     * Indicate if blank nodes should be included in the result (default: false).
     */
    includeBlankNodes?: boolean;

    /**
     * Indicate if subtypes of the given type should be included in the result (default: true).
     */
    includeSubTypes?: boolean;
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

    /**
     * Inidiates if a node should not be included in the result of a definition query.
     * @param graphUris URIs of the graphs to search.
     * @param subject The focus node.
     * @param options Definition query options.
     * @param optionDefaults Custom default values for the query options.
     * @returns 
     */
    protected skip(graphUris: string | string[] | undefined, subject: Quad_Subject | Quad_Object, options?: DefinitionQueryOptions, optionDefaults: DefinitionQueryOptions = { includeBlankNodes: false, includeReferenced: false }): boolean {
        const opts = { ...optionDefaults, ...options };

        if (!opts.includeBlankNodes && subject.termType != "NamedNode") {
            // We are only interested in named nodes.
            return true;
        }

        if (!opts.includeReferenced && !this.hasSubject(graphUris, subject)) {
            // Skip the node if it is not explicitly defined in the graph as a subject.
            return true;
        }

        if (opts?.definedBy !== undefined) {
            const isDefined = this.isDefinedBy(graphUris, subject as n3.NamedNode<string>, opts.definedBy);

            // Do not skip the node if it has a different namespace but is *explicitly* defined by the given URI.
            if (opts.definedBy === null && isDefined || opts.definedBy !== null && !isDefined) {
                return true;
            }
        } else if (opts?.notDefinedBy !== undefined) {
            for (const source of opts.notDefinedBy) {
                if (this.isDefinedBy(graphUris, subject as n3.NamedNode<string>, source)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Indicate if a given URI exists as the subject of a triple in the graph.
     * @param graphUris URIs of the graphs to search.
     * @param subjectUri URI of the subject to search for.
     * @returns true if the URI is a subject, false otherwise.
     */
    hasSubject(graphUris: string | string[] | undefined, subjectUri: string | Quad_Subject | Quad_Object): boolean {
        let s;

        if (typeof subjectUri === "string") {
            s = n3.DataFactory.namedNode(subjectUri);
        } else if (subjectUri.termType !== "Literal") {
            s = subjectUri;
        }

        if (s) {
            for (let _ of this.store.match(graphUris, s, null, null, false)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Indicate if a node is explicitly defined by the given URI using the `rdfs:isDefinedBy` property, or implicitly by sharing the same namespace.
     * @param graphUris URIs of the graphs to search.
     * @param node A named node to check if it is defined by the given URI.
     * @param definedBy URI of the vocabulary that defines the resource (rdfs:isDefinedBy). Provide `null` to only return resources that have no `rdfs:isDefinedBy` property.
     * @returns `true` if the node is defined by the given URI, `false` otherwise.
     */
    isDefinedBy(graphUris: string | string[] | undefined, node: n3.NamedNode<string>, definedBy: string | null): boolean {
        const s = node as n3.NamedNode<string>;

        if (definedBy === null) {
            // If there is no definedBy URI, we assume that the resource is not
            // explicitly defined by any ontology.
            for (let _ of this.store.match(graphUris, s, rdfs.isDefinedBy, null)) {
                return true;
            }
        }
        else {
            // We assume that a resource is defined by an ontology if it starts with the namespace of the ontology.
            if (node.value.startsWith(definedBy)) {
                return true;
            }

            // If the ontology is something like <http://purl.obolibrary.org/obo/bfo.owl> or <http://www.w3.org/ns/prov#>
            // and the subject is <http://purl.obolibrary.org/obo/BFO_0000001> or <http://www.w3.org/ns/prov#Entity>
            // then we assume that it is defined by the ontology. The OBO case shows that we need to remove the file
            // name in oder to be able to compare the namespace URIs.
            const ontologyNamespace = Uri.getNormalizedUri(Uri.getNamespaceUri(definedBy));
            const subjectNamespace = Uri.getNormalizedUri(Uri.getNamespaceUri(node.value));

            if (subjectNamespace === ontologyNamespace) {
                return true;
            }

            const o = n3.DataFactory.namedNode(Uri.getNormalizedUri(definedBy));

            // The explicit annotation of the definition source has precedence over heuristic checks.
            for (let q of this.store.match(graphUris, s, rdfs.isDefinedBy, null)) {
                if (Uri.getNormalizedUri(q.object.value) === o.value) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Indicate if a resource has a given type in the graph.
     * @param graphUris URIs of the graphs to search.
     * @param subjectUri URI of the subject to match.
     * @param typeUri URI of the type to match.
     * @param options Optional query parameters.
     * @returns `true` if the resource has the type, `false` otherwise.
     */
    hasType(graphUris: string | string[] | undefined, subjectUri: string, typeUri: string, options?: QueryOptions): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);
        const o = n3.DataFactory.namedNode(typeUri);

        for (let _ of this.store.match(graphUris, s, rdf.type, o, options?.includeInferred)) {
            return true;
        }

        return false;
    }
}