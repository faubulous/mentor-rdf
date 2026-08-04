import * as rdfjs from "@rdfjs/types";
import { DefinitionQueryOptions, ResourceRepository } from "./resource-repository";
import { rdf, skos } from "../ontologies";
import { dataFactory } from "./data-factory";

export class ConceptRepository extends ResourceRepository {
    /**
     * Get all concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     * @returns An iterator of URIs of all concepts.
     */
    *getConcepts(graphUris: string | string[] | undefined): IterableIterator<string> {
        const yielded = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, skos.Concept)) {
            const s = q.subject;

            if (!yielded.has(s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }
    }

    /**
     * Get all concept schemes.
     * @param graphUris URIs of the graphs to search for concepts.
     * @returns An iterator of URIs of all concept schemes.
     */
    *getConceptSchemes(graphUris: string | string[] | undefined): IterableIterator<string> {
        const yielded = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, skos.ConceptScheme)) {
            const s = q.subject;

            if (!yielded.has(s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }
    }

    /**
     * Get all collections.
     * @param graphUris URI of the graphs to search for collections.
     * @param options Optional query parameters.
     * @returns An iterator of URIs of all collections.
     */
    *getCollections(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, skos.Collection)) {
            const s = q.subject;

            if (!yielded.has(s.value) && !this._skipCollection(graphUris, s, options)) {
                yielded.add(s.value);

                yield s.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, null, rdf.type, skos.OrderedCollection)) {
            const s = q.subject;

            if (!yielded.has(s.value) && !this._skipCollection(graphUris, s, options)) {
                yielded.add(s.value);

                yield s.value;
            }
        }
    }

    /**
     * Indicate if a collection should be excluded from a query result.
     *
     * Note: In contrast to other resource types, blank nodes and referenced collections are
     * included by default so that the result is unchanged when no options are provided.
     * @param graphUris URI of the graphs to search for collections.
     * @param subject The collection to test.
     * @param options Optional query parameters.
     * @returns `true` if the collection should be excluded, `false` otherwise.
     */
    private _skipCollection(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject, options?: DefinitionQueryOptions): boolean {
        if (this.skip(graphUris, subject, options, { includeBlankNodes: true, includeReferenced: true })) {
            return true;
        }

        if (options?.inScheme === undefined) {
            return false;
        }

        if (options.inScheme === null) {
            return this.hasConceptScheme(graphUris, subject.value);
        }

        return !this.isInScheme(graphUris, subject.value, options.inScheme);
    }

    /**
     * Indicate if a resource is associated with any concept scheme via `skos:inScheme`.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a resource.
     * @returns `true` if the resource is in a concept scheme, `false` otherwise.
     */
    hasConceptScheme(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = dataFactory.namedNode(subjectUri);

        for (let _ of this.store.matchAll(graphUris, s, skos.inScheme, null)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a resource is associated with a given concept scheme via `skos:inScheme`.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a resource.
     * @param schemeUri URI of a concept scheme.
     * @returns `true` if the resource is in the given concept scheme, `false` otherwise.
     */
    isInScheme(graphUris: string | string[] | undefined, subjectUri: string, schemeUri: string): boolean {
        const s = dataFactory.namedNode(subjectUri);
        const o = dataFactory.namedNode(schemeUri);

        for (let _ of this.store.matchAll(graphUris, s, skos.inScheme, o)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a concept is explicitly associated with a given concept scheme, either via
     * `skos:inScheme` or via `skos:topConceptOf`.
     *
     * Note: The `skos:broader` and `skos:narrower` relations are *not* taken into account, because
     * they may cross the boundaries of a concept scheme. Use {@link getAllConceptsInScheme} to get
     * the concepts that are displayed below a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     * @param schemeUri URI of a concept scheme.
     * @returns `true` if the concept is associated with the concept scheme, `false` otherwise.
     */
    isConceptOfScheme(graphUris: string | string[] | undefined, subjectUri: string, schemeUri: string): boolean {
        if (this.isInScheme(graphUris, subjectUri, schemeUri)) {
            return true;
        }

        const s = dataFactory.namedNode(subjectUri);
        const o = dataFactory.namedNode(schemeUri);

        for (let _ of this.store.matchAll(graphUris, s, skos.topConceptOf, o)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a concept can be displayed below a given concept scheme.
     *
     * Concepts that are not associated with any concept scheme belong to every concept scheme they
     * can be reached from, so that they are not hidden in vocabularies that only annotate their top
     * concepts with `skos:inScheme`.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     * @param schemeUri URI of a concept scheme.
     * @returns `true` if the concept can be displayed below the concept scheme, `false` otherwise.
     */
    private _isVisibleInScheme(graphUris: string | string[] | undefined, subjectUri: string, schemeUri: string): boolean {
        if (this.isConceptOfScheme(graphUris, subjectUri, schemeUri)) {
            return true;
        }

        return !this.hasConceptScheme(graphUris, subjectUri);
    }

    /**
     * Get the concepts that are explicitly associated with a concept scheme, either via
     * `skos:inScheme` or via `skos:topConceptOf`.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param schemeUri URI of a concept scheme.
     * @returns An iterator of URIs of the concepts of the concept scheme.
     */
    *getConceptsOfScheme(graphUris: string | string[] | undefined, schemeUri: string): IterableIterator<string> {
        const yielded = new Set<string>();
        const o = dataFactory.namedNode(schemeUri);

        for (let q of this.store.matchAll(graphUris, null, skos.inScheme, o)) {
            const s = q.subject;

            if (!yielded.has(s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.topConceptOf, o)) {
            const s = q.subject;

            if (!yielded.has(s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }
    }

    /**
     * Get the top concepts of a concept scheme.
     *
     * In addition to the concepts that are explicitly designated as top concepts via
     * `skos:hasTopConcept` or `skos:topConceptOf`, this returns the concepts of the scheme that have
     * no broader concept *within the same scheme*. Without the latter, concepts whose `skos:broader`
     * property refers to a concept of another scheme would not be displayed below the scheme that
     * they are associated with.
     *
     * Note: A concept that is its own broader concept is not excluded, so that recursive definitions
     * do not remove it from the list of top concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param schemeUri URI of a concept scheme.
     * @returns An iterator of URIs of the top concepts of the concept scheme.
     */
    *getTopConcepts(graphUris: string | string[] | undefined, schemeUri: string): IterableIterator<string> {
        const yielded = new Set<string>();
        const s = dataFactory.namedNode(schemeUri);

        for (let q of this.store.matchAll(graphUris, s, skos.hasTopConcept, null)) {
            const o = q.object;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.topConceptOf, s)) {
            const o = q.subject;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        // Note: A concept scheme is not a concept, so these two patterns are not valid SKOS. They
        // are matched for backwards compatibility with documents that use them regardless.
        for (let q of this.store.matchAll(graphUris, s, skos.narrower, null)) {
            const o = q.object;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.broader, s)) {
            const o = q.subject;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        const concepts = new Set<string>(this.getConceptsOfScheme(graphUris, schemeUri));
        const nested = this._nestedConceptsOfScheme(graphUris, concepts);

        for (let c of concepts) {
            if (!yielded.has(c) && !nested.has(c)) {
                yielded.add(c);

                yield c;
            }
        }
    }

    /**
     * Get the concepts of a concept scheme that have a broader concept within the same scheme.
     *
     * The hierarchical relations are enumerated once and matched against the set of concepts of the
     * scheme, which is considerably cheaper than querying the broader concepts of every single
     * concept of the scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param concepts Set of the concepts that are associated with the concept scheme.
     * @returns A set of URIs of the concepts that are nested below another concept of the scheme.
     */
    private _nestedConceptsOfScheme(graphUris: string | string[] | undefined, concepts: Set<string>): Set<string> {
        const result = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, skos.broader, null)) {
            // Note: A concept that is its own broader concept remains a top concept.
            if (q.subject.value !== q.object.value && concepts.has(q.subject.value) && concepts.has(q.object.value)) {
                result.add(q.subject.value);
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.narrower, null)) {
            if (q.subject.value !== q.object.value && concepts.has(q.subject.value) && concepts.has(q.object.value)) {
                result.add(q.object.value);
            }
        }

        return result;
    }

    /**
     * Get all concepts that are displayed below a concept scheme, including indirectly narrower ones.
     *
     * The traversal starts at the {@link getTopConcepts} of the scheme and follows the narrower
     * concepts that can be displayed below the scheme, so the result is exactly the set of concepts
     * that a hierarchical view of the scheme can reach.
     *
     * Note: The hierarchical relations of the graphs are indexed once per call instead of querying
     * the narrower concepts of every single concept, which is an order of magnitude faster on large
     * thesauri. Prefer {@link getConceptsOfScheme} when the *associated* concepts are sufficient.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param schemeUri URI of a concept scheme.
     * @returns An iterator of URIs of all concepts below the concept scheme.
     */
    *getAllConceptsInScheme(graphUris: string | string[] | undefined, schemeUri: string): IterableIterator<string> {
        const concepts = new Set<string>(this.getConceptsOfScheme(graphUris, schemeUri));
        const narrowerConcepts = this._getNarrowerConceptIndex(graphUris);

        const visited = new Set<string>();
        const stack = [...this.getTopConcepts(graphUris, schemeUri)];

        for (let c of stack) {
            visited.add(c);
        }

        while (stack.length) {
            const current = stack.pop()!;

            yield current;

            for (let n of narrowerConcepts.get(current) ?? []) {
                if (visited.has(n)) {
                    continue;
                }

                // Concepts of another scheme are displayed below that scheme, not below this one.
                // Concepts without any scheme are displayed wherever they are reached from.
                if (!concepts.has(n) && this.hasConceptScheme(graphUris, n)) {
                    continue;
                }

                visited.add(n);

                stack.push(n);
            }
        }
    }

    /**
     * Index the narrower concept relations of the given graphs.
     *
     * All four hierarchical relations are enumerated once, which is considerably cheaper than
     * querying {@link getNarrowerConcepts} for every concept of a large thesaurus.
     * @param graphUris URIs of the graphs to search for concepts.
     * @returns A map of concept URIs to the URIs of their narrower concepts.
     */
    private _getNarrowerConceptIndex(graphUris: string | string[] | undefined): Map<string, string[]> {
        const result = new Map<string, string[]>();

        const add = (broaderUri: string, narrowerUri: string) => {
            const narrowerConcepts = result.get(broaderUri);

            if (narrowerConcepts) {
                narrowerConcepts.push(narrowerUri);
            } else {
                result.set(broaderUri, [narrowerUri]);
            }
        };

        for (let q of this.store.matchAll(graphUris, null, skos.narrower, null)) {
            add(q.subject.value, q.object.value);
        }

        for (let q of this.store.matchAll(graphUris, null, skos.broader, null)) {
            add(q.object.value, q.subject.value);
        }

        for (let q of this.store.matchAll(graphUris, null, skos.hasTopConcept, null)) {
            add(q.subject.value, q.object.value);
        }

        for (let q of this.store.matchAll(graphUris, null, skos.topConceptOf, null)) {
            add(q.object.value, q.subject.value);
        }

        return result;
    }

    /**
     * Get the members of a collection. This includes both `skos:member` and `skos:memberList` properties.
     * @param graphUris URI of the graphs to search for collections.
     * @param collectionUri URI of a collection.
     * @returns An array of URIs of the members of the collection.
     */
    getCollectionMembers(graphUris: string | string[] | undefined, collectionUri: string): string[] {
        const s = dataFactory.namedNode(collectionUri);

        let result: string[] = [];

        for (let q of this.store.matchAll(graphUris, s, skos.member, null)) {
            result.push(q.object.value);
        }

        for (let q of this.store.matchAll(graphUris, s, skos.memberList, null)) {
            result = [...result, ...this.store.getListItems(graphUris, q.object.value)];
        }

        return result;
    }

    /**
     * Get the members of a collection. This includes both `skos:member` and `skos:memberList` properties.
     * @param graphUris URI of the graphs to search for collections.
     * @param collectionUri URI of a collection.
     * @returns An array of URIs of the members of the collection.
     */
    hasCollectionMembers(graphUris: string | string[] | undefined, collectionUri: string): boolean {
        const s = dataFactory.namedNode(collectionUri);

        for (let _ of this.store.matchAll(graphUris, s, skos.member, null)) {
            return true;
        }

        for (let _ of this.store.matchAll(graphUris, s, skos.memberList, null)) {
            return true;
        }

        return false;
    }

    /**
     * Indicates whether a collection is an ordered collection.
     * @param graphUris URI of the graphs to search for collections.
     * @param collectionUri URI of a collection.
     * @returns `true` if the collection is an ordered collection, `false` otherwise.
     */
    isOrderedCollection(graphUris: string | string[] | undefined, collectionUri: string): boolean {
        const s = dataFactory.namedNode(collectionUri);

        for (let _ of this.store.matchAll(graphUris, s, rdf.type, skos.OrderedCollection)) {
            return true;
        }

        return false;
    }

    /**
     * Indicates whether a subject is a collection.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a subject.
     * @returns `true` if the subject is a `skos:Collection` or a `skos:OrderedCollection`, `false` otherwise.
     */
    isCollection(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        if (subjectUri) {
            const s = dataFactory.namedNode(subjectUri);

            for (let _ of this.store.matchAll(graphUris, s, rdf.type, skos.Collection)) {
                return true;
            }

            for (let _ of this.store.matchAll(graphUris, s, rdf.type, skos.OrderedCollection)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the collections that have a given subject as a member. This includes both `skos:member`
     * and `skos:memberList` properties.
     *
     * Note: A collection that is a member of itself is returned as its own super collection, which
     * is consistent with {@link getBroaderConcepts}. Use {@link hasSuperCollections} to test whether
     * a collection is a member of *another* collection.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection or concept.
     * @returns An iterator of URIs of the collections that contain the subject.
     */
    *getSuperCollections(graphUris: string | string[] | undefined, subjectUri: string): IterableIterator<string> {
        const yielded = new Set<string>();
        const o = dataFactory.namedNode(subjectUri);

        for (let q of this.store.matchAll(graphUris, null, skos.member, o)) {
            const s = q.subject;

            if (!yielded.has(s.value) && this.isCollection(graphUris, s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }

        for (let s of this._getMemberListContainers(graphUris, subjectUri)) {
            if (!yielded.has(s) && this.isCollection(graphUris, s)) {
                yielded.add(s);

                yield s;
            }
        }
    }

    /**
     * Get the collections that reference a given subject in an ordered member list.
     *
     * Starting from the list nodes that have the subject as their first item, the `rdf:rest` chain
     * is traversed *backwards* towards the head of the list, and every visited list node is tested
     * for being the object of a `skos:memberList` property. This is considerably cheaper than
     * expanding all member lists in the graph, and it also resolves collections that share a list.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection or concept.
     * @returns An iterator of URIs of the collections that reference the subject in a member list.
     */
    private *_getMemberListContainers(graphUris: string | string[] | undefined, subjectUri: string): IterableIterator<string> {
        const o = dataFactory.namedNode(subjectUri);
        const visited = new Set<string>();
        const listNodes: rdfjs.Quad_Subject[] = [];

        for (let q of this.store.matchAll(graphUris, null, rdf.first, o)) {
            if (!visited.has(q.subject.value)) {
                visited.add(q.subject.value);

                listNodes.push(q.subject);
            }
        }

        // Note: The visited set guards against cyclic lists and against lists that share a tail.
        while (listNodes.length) {
            const listNode = listNodes.pop()!;

            for (let q of this.store.matchAll(graphUris, null, skos.memberList, listNode)) {
                yield q.subject.value;
            }

            for (let q of this.store.matchAll(graphUris, null, rdf.rest, listNode)) {
                if (!visited.has(q.subject.value)) {
                    visited.add(q.subject.value);

                    listNodes.push(q.subject);
                }
            }
        }
    }

    /**
     * Indicates whether a collection is a member of another collection.
     *
     * Note: A collection that is a member of itself is *not* considered to have a super collection,
     * so that recursive definitions do not remove it from the list of root collections.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection.
     * @returns `true` if the collection is a member of another collection, `false` otherwise.
     */
    hasSuperCollections(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        for (const c of this.getSuperCollections(graphUris, subjectUri)) {
            if (c !== subjectUri) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the members of a collection that are collections themselves, or all root collections.
     *
     * The order of the members of a `skos:OrderedCollection` is preserved.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection or `undefined` to get all root collections.
     * @param options Optional query parameters.
     * @returns An iterator of URIs of the nested collections of the given collection, or of the root collections if no subject is provided.
     */
    *getSubCollections(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        if (subjectUri) {
            const yielded = new Set<string>();

            for (let m of this.getCollectionMembers(graphUris, subjectUri)) {
                if (yielded.has(m) || !this.isCollection(graphUris, m)) {
                    continue;
                }

                if (this._skipCollection(graphUris, dataFactory.namedNode(m), options)) {
                    continue;
                }

                yielded.add(m);

                yield m;
            }
        } else {
            yield* this.getRootCollections(graphUris, options);
        }
    }

    /**
     * Indicates whether a collection has members that are collections themselves.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection.
     * @param options Optional query parameters.
     * @returns `true` if the collection has nested collections, `false` otherwise.
     */
    hasSubCollections(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): boolean {
        for (const _ of this.getSubCollections(graphUris, subjectUri, options)) {
            return true;
        }

        return false;
    }

    /**
     * Get all collections that are not a member of another collection.
     *
     * Every collection returned by {@link getCollections} is either returned by this method, or is
     * reachable from one of the returned collections via {@link getSubCollections}. If a group of
     * collections is only reachable through a membership cycle, the first collection of that group
     * is returned as a root collection so that no collection is lost.
     *
     * Note: Collections that are identified by a blank node cannot be queried for their members and
     * are therefore always returned as root collections.
     * @param graphUris URI of the graphs to search for collections.
     * @param options Optional query parameters.
     * @returns An iterator of URIs of the root collections.
     */
    *getRootCollections(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const roots = new Set<string>();
        const collections = new Set<string>(this.getCollections(graphUris, options));

        // Collect the collections that are not a member of another collection.
        for (let c of collections) {
            if (!this.hasSuperCollections(graphUris, c)) {
                roots.add(c);

                yield c;
            }
        }

        if (roots.size === collections.size) {
            // No collection is nested in another one, so none of them can be missing.
            return;
        }

        // Mark all collections that can be reached from the root collections.
        const reachable = new Set<string>(roots);

        for (let c of roots) {
            this._markReachableCollections(graphUris, c, collections, reachable);
        }

        // Yield one collection per group that is only reachable through a membership cycle.
        for (let c of collections) {
            if (!reachable.has(c)) {
                reachable.add(c);

                this._markReachableCollections(graphUris, c, collections, reachable);

                yield c;
            }
        }
    }

    /**
     * Mark all collections that can be reached from a given collection through nested collections.
     *
     * The traversal uses the same criteria as {@link getSubCollections} so that the marked
     * collections are exactly the collections that are visible below the given collection. Since
     * the set of reachable collections is shared between all calls, the members of a collection are
     * enumerated at most once per {@link getRootCollections} call.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of the collection to start the traversal from.
     * @param collections Set of all collections that are in the scope of the query.
     * @param reachable Set of collections that have already been reached.
     */
    private _markReachableCollections(graphUris: string | string[] | undefined, subjectUri: string, collections: Set<string>, reachable: Set<string>): void {
        const stack: string[] = [subjectUri];

        while (stack.length) {
            const current = stack.pop()!;

            for (let m of this.getCollectionMembers(graphUris, current)) {
                // Note: The set lookups keep concept members from reaching the store queries.
                if (collections.has(m) && !reachable.has(m) && this.isCollection(graphUris, m)) {
                    reachable.add(m);

                    stack.push(m);
                }
            }
        }
    }

    /**
     * Get the first discovered path from a given collection to a root collection.
     *
     * The path does not contain the given collection and is ordered from the closest super
     * collection to the root collection. If the collection is part of a membership cycle, the path
     * ends at the last collection that has not been visited yet and does not reach a root collection.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection.
     * @returns The first path that is found from the given collection to a root collection.
     */
    getRootCollectionPath(graphUris: string | string[] | undefined, subjectUri: string): string[] {
        return this._getRootCollectionPath(graphUris, subjectUri, [], new Set<string>([subjectUri]));
    }

    /**
     * Recursively find the first path from a given collection to a root collection.
     * @param graphUris URI of the graphs to search for collections.
     * @param subjectUri URI of a collection.
     * @param path The current collection path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given collection to a root collection.
     */
    private _getRootCollectionPath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>): string[] {
        for (let o of this.getSuperCollections(graphUris, subjectUri)) {
            if (!backtrack.has(o)) {
                backtrack.add(o);

                return this._getRootCollectionPath(graphUris, o, [...path, o], backtrack);
            }
        }

        return path;
    }

    /**
     * Get all broader concepts of a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept scheme.
     */
    *getBroaderConcepts(graphUris: string | string[] | undefined, subjectUri: string): IterableIterator<string> {
        const yielded = new Set<string>();
        const s = dataFactory.namedNode(subjectUri);

        for (let q of this.store.matchAll(graphUris, null, skos.hasTopConcept, s)) {
            const s = q.subject;

            if (!yielded.has(s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.narrower, s)) {
            const s = q.subject;

            if (!yielded.has(s.value)) {
                yielded.add(s.value);

                yield s.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, s, skos.topConceptOf, null)) {
            const o = q.object;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, s, skos.broader, null)) {
            const o = q.object;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }
    }

    /**
     * Indicates whether a concept has broader concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     */
    hasBroaderConcepts(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        for(const _ of this.getBroaderConcepts(graphUris, subjectUri)) {
            return true;
        }

        return false;
    }

    /**
     * Get all narrower concepts of a concept or the top concepts of a concept scheme.
     *
     * If the subject is a concept scheme, the {@link getTopConcepts} of that scheme are returned. If
     * the `inScheme` option is set, only concepts that can be displayed below that concept scheme are
     * returned, which excludes concepts that are associated with a *different* scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept or concept scheme, or `undefined` to get all concept schemes.
     * @param options Optional query parameters.
     */
    *getNarrowerConcepts(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        if (!subjectUri) {
            yield* this.getConceptSchemes(graphUris);

            return;
        }

        if (this.isConceptScheme(graphUris, subjectUri)) {
            yield* this.getTopConcepts(graphUris, subjectUri);

            return;
        }

        const yielded = new Set<string>();
        const s = dataFactory.namedNode(subjectUri);
        const scheme = options?.inScheme;

        for (let q of this.store.matchAll(graphUris, s, skos.hasTopConcept, null)) {
            const o = q.object;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, s, skos.narrower, null)) {
            const o = q.object;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                if (!scheme || this._isVisibleInScheme(graphUris, o.value, scheme)) {
                    yield o.value;
                }
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.topConceptOf, s)) {
            const o = q.subject;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                yield o.value;
            }
        }

        for (let q of this.store.matchAll(graphUris, null, skos.broader, s)) {
            const o = q.subject;

            if (!yielded.has(o.value)) {
                yielded.add(o.value);

                if (!scheme || this._isVisibleInScheme(graphUris, o.value, scheme)) {
                    yield o.value;
                }
            }
        }
    }

    /**
     * Indicates whether a concept has narrower concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     */
    hasNarrowerConcepts(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        for(const _ of this.getNarrowerConcepts(graphUris, subjectUri)) {
            return true;
        }

        return false;
    }

    /**
     * Indicates whether a concept is a narrower concept of another concept.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     * @param broaderUri URI of a broader concept.
     * @returns `true` if the concept is a narrower concept of the broader concept, `false` otherwise.
     */
    isNarrowerConceptOf(graphUris: string | string[] | undefined, subjectUri: string, broaderUri: string): boolean {
        return this.getConceptSchemePath(graphUris, subjectUri).includes(broaderUri);
    }

    /**
     * Indicates whether a subject is a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a subject.
     * @returns `true` if the subject is a concept scheme, `false` otherwise.
     */
    isConceptScheme(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        if (subjectUri) {
            const s = dataFactory.namedNode(subjectUri);

            for (let _ of this.store.matchAll(graphUris, s, rdf.type, skos.ConceptScheme)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get all broader concepts up to and including a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     */
    getConceptSchemePath(graphUris: string | string[] | undefined, subjectUri: string): string[] {
        return this._getConceptSchemePath(graphUris, subjectUri, [], new Set<string>([subjectUri]));
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getConceptSchemePath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>): string[] {
        for (let o of this.getBroaderConcepts(graphUris, subjectUri)) {
            if (!backtrack.has(o)) {
                backtrack.add(o);

                return this._getConceptSchemePath(graphUris, o, [...path, o], backtrack);
            }
        }

        return path;
    }
}