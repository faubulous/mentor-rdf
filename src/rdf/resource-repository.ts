import { NamedNode, Quad_Subject, Quad_Object } from "@rdfjs/types";
import { Store } from "./store";
import { rdf, rdfs, owl } from "../ontologies";
import { Uri } from "./uri";
import { dataFactory } from "./data-factory";

const { namedNode, blankNode } = dataFactory;

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

    /**
     * URI of the concept scheme the resources must be associated with via `skos:inScheme`.
     * If `null`, returns only resources that have no `skos:inScheme` property.
     */
    inScheme?: string | null;
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
            for (let _ of this.store.matchAll(graphUris, s, null, null, false)) {
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
            for (let _ of this.store.matchAll(graphUris, s, rdfs.isDefinedBy, null)) {
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
            const ontologyNamespace = Uri.getNormalizedUri(Uri.getNamespaceIri(definedBy));
            const subjectNamespace = Uri.getNormalizedUri(Uri.getNamespaceIri(node.value));

            if (subjectNamespace === ontologyNamespace) {
                return true;
            }

            const o = namedNode(Uri.getNormalizedUri(definedBy));

            // The explicit annotation of the definition source has precedence over heuristic checks.
            for (let q of this.store.matchAll(graphUris, s, rdfs.isDefinedBy, null)) {
                if (Uri.getNormalizedUri(q.object.value) === o.value) {
                    return true;
                }
            }

            // A blank node is defined in the namespace if it is the object of a triple that is defined by the URI.
            if (s.termType === "BlankNode") {
                for (let q of this.store.matchAll(graphUris, null, null, s, false)) {
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

        for (let _ of this.store.matchAll(graphUris, namedNode(subjectUri), rdf.type, o, options?.includeInferred)) {
            return true;
        }

        for (let _ of this.store.matchAll(graphUris, blankNode(subjectUri), rdf.type, o, options?.includeInferred)) {
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

        for (let q of this.store.matchAll(graphUris, null, null, null, false)) {
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

        for (let q of this.store.matchAll(graphUris, null, null, null, false)) {
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

    /**
     * Get the hierarchy relations of a predicate such as `rdfs:subClassOf`, read in a single pass.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param predicate The hierarchy predicate, e.g. `rdfs:subClassOf` or `rdfs:subPropertyOf`.
     * @param options Optional query parameters.
     * @returns A map from a node, named or blank, to its named parents, excluding the node itself.
     */
    protected getParentMap(graphUris: string | string[] | undefined, predicate: NamedNode, options?: QueryOptions): Map<string, string[]> {
        const result = new Map<string, string[]>();

        for (let q of this.store.matchAll(graphUris, null, predicate, null, options?.includeInferred)) {
            if ((q.subject.termType != "NamedNode" && q.subject.termType != "BlankNode") || q.object.termType != "NamedNode" || q.subject.value == q.object.value) {
                continue;
            }

            const parents = result.get(q.subject.value);

            if (!parents) {
                result.set(q.subject.value, [q.object.value]);
            } else if (!parents.includes(q.object.value)) {
                parents.push(q.object.value);
            }
        }

        return result;
    }

    /**
     * Get the root nodes of a hierarchy such as the class or the property hierarchy. A member with no
     * visible parent is a root. A parent that is not one of the document's own nodes is referenced:
     * the roots are then the top nodes of its chains of parents, as far as the graphs state them.
     * @param members The nodes whose roots are wanted, e.g. the classes of the document.
     * @param parents The parents of every node, see {@link getParentMap}.
     * @param isOwn Whether a node belongs to the document; a chain that reaches one has no top of its own.
     * @param isVisible Whether a parent is shown in the hierarchy at all.
     * @param canBeRoot Whether a node is listed as a root, be it a member without visible parents or the top of a referenced chain.
     * @returns An iterator of the root nodes.
     */
    protected *getHierarchyRoots(members: Iterable<string>, parents: Map<string, string[]>, isOwn: (iri: string) => boolean, isVisible: (iri: string) => boolean, canBeRoot: (iri: string) => boolean = () => true): IterableIterator<string> {
        const yielded = new Set<string>();
        const getVisibleParents = (iri: string): string[] => (parents.get(iri) ?? []).filter(isVisible);

        // The referenced nodes whose top nodes were already yielded, shared by all members
        // so that a chain is walked only once.
        const finished = new Set<string>();

        for (let m of members) {
            let hasParent = false;

            for (let p of getVisibleParents(m)) {
                // We have at least one parent that is not the node itself.
                hasParent = true;

                if (!isOwn(p)) {
                    for (let r of this._getTopNodes(p, getVisibleParents, isOwn, finished, new Set<string>())) {
                        if (!yielded.has(r) && canBeRoot(r)) {
                            yielded.add(r);

                            yield r;
                        }
                    }
                }
            }

            if (!hasParent && !yielded.has(m) && canBeRoot(m)) {
                yielded.add(m);

                yield m;
            }
        }
    }

    /**
     * Get the top nodes of the chains of parents of a referenced node.
     * @param iri URI of a referenced node.
     * @param getParents A function returning the visible parents of a node.
     * @param isOwn Whether a node belongs to the document; a chain that reaches one has no top of its own.
     * @param finished The referenced nodes whose top nodes were already yielded.
     * @param path The nodes on the current chain, to stop at cycles.
     * @returns An iterator of the top nodes not yielded for another chain before.
     */
    private *_getTopNodes(iri: string, getParents: (iri: string) => string[], isOwn: (iri: string) => boolean, finished: Set<string>, path: Set<string>): IterableIterator<string> {
        if (finished.has(iri)) {
            return;
        }

        path.add(iri);

        let isTop = true;

        for (let p of getParents(iri)) {
            if (isOwn(p) || finished.has(p)) {
                // The chain continues in a node of the document or in a chain already walked.
                isTop = false;
            } else if (!path.has(p)) {
                isTop = false;

                yield* this._getTopNodes(p, getParents, isOwn, finished, path);
            }
        }

        path.delete(iri);
        finished.add(iri);

        if (isTop) {
            yield iri;
        }
    }

    /**
     * Indicate if a node is only referenced by the document: it is included if referenced terms
     * are included, and it is not defined by another ontology of the document. Annotations or a
     * declaration of a term from another vocabulary do not define it.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param node A node.
     * @param options Optional query parameters.
     * @param ontologies The other ontologies in the graphs, see {@link getOtherOntologiesOnce}.
     * @returns `true` if the node is a referenced named node, `false` otherwise.
     */
    protected isReferenced(graphUris: string | string[] | undefined, node: Quad_Subject | Quad_Object, options: DefinitionQueryOptions | undefined, ontologies: () => string[]): boolean {
        if (!(options?.includeReferenced ?? false) || node.termType != "NamedNode") {
            return false;
        }

        return !ontologies().some(o => this.isDefinedBy(graphUris, node, o));
    }

    /**
     * Indicate if a node is a referenced term with one of the document's own terms below it in a
     * hierarchy, so that the hierarchy from a referenced root down to the document is not broken.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param node A node.
     * @param predicate The hierarchy predicate, e.g. `rdfs:subClassOf` or `rdfs:subPropertyOf`.
     * @param options Optional query parameters.
     * @param ontologies The other ontologies in the graphs, see {@link getOtherOntologiesOnce}.
     * @param visited The nodes already visited, to stop at cycles.
     * @returns `true` if a term of the document is a direct or indirect child of the node.
     */
    protected isReferencedAbove(graphUris: string | string[] | undefined, node: Quad_Subject, predicate: NamedNode, options: DefinitionQueryOptions | undefined, ontologies: () => string[], visited: Set<string> = new Set<string>()): boolean {
        if (!this.isReferenced(graphUris, node, options, ontologies)) {
            return false;
        }

        visited.add(node.value);

        for (let q of this.store.matchAll(graphUris, null, predicate, node, options?.includeInferred)) {
            if (visited.has(q.subject.value)) {
                continue;
            }

            if (!this.skip(graphUris, q.subject, options) || this.isReferencedAbove(graphUris, q.subject, predicate, options, ontologies, visited)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get an accessor for the other ontologies in the graphs that queries them on its first call
     * only, as most queries never need them.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A function returning the URIs of the other ontologies, see {@link _getOtherOntologies}.
     */
    protected getOtherOntologiesOnce(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): () => string[] {
        let ontologies: string[] | undefined;

        return () => ontologies ??= this._getOtherOntologies(graphUris, options);
    }

    /**
     * Get the ontologies declared in the graphs other than the one the options select with `definedBy`.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns The URIs of the other ontologies, or none if the options select no ontology.
     */
    private _getOtherOntologies(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        if (!options?.definedBy) {
            return [];
        }

        const definedBy = Uri.getNormalizedUri(options.definedBy);
        const result = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, owl.Ontology, false)) {
            if (q.subject.termType == "NamedNode" && Uri.getNormalizedUri(q.subject.value) != definedBy) {
                result.add(q.subject.value);
            }
        }

        return [...result];
    }
}
