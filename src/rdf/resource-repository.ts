import * as n3 from "n3";
import { Quad_Subject, Quad_Object } from "@rdfjs/types";
import { Store } from "./store";
import { rdf, rdfs } from "../ontologies";
import { Uri } from "./uri";

const { namedNode, blankNode } = n3.DataFactory;

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
    notDefinedBy?: Set<string>;

    /**
     * Indicate if terms what are not *defined* in the ontology should be included in the result (default: false).
     */
    includeReferenced?: boolean;

    /**
     * Indicate if blank nodes should be included in the result (default: false).
     */
    includeBlankNodes?: boolean;
}

/**
 * Parameters for store queries that support filtering on the type of resource.
 */
export interface TypedInstanceQueryOptions extends QueryOptions {
    /**
     * Indicate if instances of a subclasses of the type should be included in the result.
     */
    includeSubTypes?: boolean;
}

/**
 * Maps a language tag to the number of occurrences in the document.
 */
export interface LanguageTagUsageStats {
    [key: string]: number;
}

/**
 * Maps a predicate IRI to information about its usage in the document.
 */
export interface PredicateUsageStats {
    [key: string]: PredicateUsageInfo;
}

/**
 * Information about the usage of a single predicate in a document.
 */
export interface PredicateUsageInfo {
    /**
     * The predicate IRI.
     */
    predicateIri: string;

    /**
     * The set of subjects that use the predicate.
     */
    subjects: Set<string>;

    /**
     * The number of occurrences of the predicate in a document.
     */
    usageFrequency: number;

    /**
     * Information about the language tags used in the object of triples with the predicate.
     */
    languageTags: { [key: string]: number };
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

        if (!opts.includeBlankNodes && subject.termType !== "NamedNode") {
            // We are only interested in named nodes.
            return true;
        }

        const s = subject as Quad_Subject;

        if (!opts.includeReferenced && !this.hasSubject(graphUris, subject)) {
            // Skip the node if it is not explicitly defined in the graph as a subject.
            return true;
        }

        if (opts?.definedBy !== undefined) {
            const isDefined = this.isDefinedBy(graphUris, s, opts.definedBy);

            // Do not skip the node if it has a different namespace but is *explicitly* defined by the given URI.
            if (opts.definedBy === null && isDefined || opts.definedBy !== null && !isDefined) {
                return true;
            }
        } else if (opts?.notDefinedBy !== undefined) {
            for (const source of opts.notDefinedBy) {
                if (this.isDefinedBy(graphUris, s, source)) {
                    return true;
                }
            } s
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
            s = namedNode(subjectUri);
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
    isDefinedBy(graphUris: string | string[] | undefined, node: Quad_Subject, definedBy: string | null): boolean {
        const s = node;

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

            const o = namedNode(Uri.getNormalizedUri(definedBy));

            // The explicit annotation of the definition source has precedence over heuristic checks.
            for (let q of this.store.match(graphUris, s, rdfs.isDefinedBy, null)) {
                if (Uri.getNormalizedUri(q.object.value) === o.value) {
                    return true;
                }
            }

            // A blank node is defined in the namespace if it is the object of a triple that is defined by the URI.
            if (s.termType === "BlankNode") {
                for (let q of this.store.match(graphUris, null, null, s, false)) {
                    return this.isDefinedBy(graphUris, q.subject, definedBy)
                }
            }
        }

        return false;
    }

    /**
     * Indicate if a resource has a given type in the graph.
     * @param graphUris URIs of the graphs to search.
     * @param subjectUri URI or blank node id of the subject to match.
     * @param typeUri URI of the type to match.
     * @param options Optional query parameters.
     * @returns `true` if the resource has the type, `false` otherwise.
     */
    hasType(graphUris: string | string[] | undefined, subjectUri: string, typeUri: string, options?: QueryOptions): boolean {
        const o = namedNode(typeUri);

        for (let _ of this.store.match(graphUris, namedNode(subjectUri), rdf.type, o, options?.includeInferred)) {
            return true;
        }

        for (let _ of this.store.match(graphUris, blankNode(subjectUri), rdf.type, o, options?.includeInferred)) {
            return true;
        }

        return false;
    }

    /**
     * Get information about the usage of predicates in the document such as the frequency of use and the use of language tags.
     * @param graphUris URIs of the graphs to search.
     * @param predicateUris URIs of the predicates to match.
     */
    getPredicateUsageStats(graphUris: string | string[] | undefined, predicateUris: string[] | undefined = undefined): PredicateUsageStats {
        const result: PredicateUsageStats = {};
        const predicates = predicateUris ? new Set(predicateUris) : undefined;

        for (let q of this.store.match(graphUris, null, null, null, false)) {
            if (predicates && !predicates.has(q.predicate.value)) {
                continue;
            }

            // Create stats for all predicates and add language tags for literals if available.
            let predicateStats = result[q.predicate.value];

            if (!predicateStats) {
                predicateStats = {
                    predicateIri: q.predicate.value,
                    subjects: new Set<string>(),
                    usageFrequency: 0,
                    languageTags: {}
                };

                result[q.predicate.value] = predicateStats;
            }

            predicateStats.subjects.add(q.subject.value);
            predicateStats.usageFrequency++;

            if (q.object.termType === "Literal") {
                let language = q.object.language;

                if (!predicateStats.languageTags[language]) {
                    predicateStats.languageTags[language] = 1;
                } else {
                    predicateStats.languageTags[language] += 1;
                }
            }
        }

        return result;
    }

    /**
     * Get the language tags used in the object of triples with a given set of predicates.
     * @param graphUris URIs of the graphs to search.
     * @param predicateUris URIs of the predicates to match.
     * @returns An array of language tag statistics, sorted by the number of occurrences in descending order.
     */
    getLanguageTagUsageStats(graphUris: string | string[] | undefined): LanguageTagUsageStats {
        const stats: LanguageTagUsageStats = {};

        for (let q of this.store.match(graphUris, null, null, null, false)) {
            if (q.object.termType === "Literal" && q.object.language) {
                const language = q.object.language;

                if (!stats[language]) {
                    stats[language] = 1;
                } else {
                    stats[language] += 1;
                }
            }
        }

        return stats;
    }

    /**
     * Get the most frequently used language tag in the object of triples with a given set of predicates.
     * @param graphUris URIs of the graphs to search.
     */
    getMostFrequentLanguageTag(graphUris: string | string[] | undefined): string | undefined {
        let stats = this.getLanguageTagUsageStats(graphUris);
        let max = 0;
        let primary: string | undefined;

        for (let language in stats) {
            if (stats[language] > max) {
                max = stats[language];
                primary = language;
            }
        }

        return primary;
    }
}