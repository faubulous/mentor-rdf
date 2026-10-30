import * as rdfjs from "@rdfjs/types";
import { rdf, rdfs, owl } from "../ontologies";
import { Store } from "./store";
import { QueryOptions, DefinitionQueryOptions, TypedInstanceQueryOptions } from "./resource-repository";
import { ConceptRepository } from "./concept-repository";
import { dataFactory } from "./data-factory";
import { Uri } from "./uri";

const { namedNode } = dataFactory;

/**
 * A repository for retrieving classes from graphs.
 */
export class ClassRepository extends ConceptRepository {
    constructor(store: Store) { super(store); }

    /**
     * Get all classes in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns An iterator of all classes in the repository.
     */
    *getClasses(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, rdfs.Class, options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options) && !yielded.has(q.subject.value)) {
                yielded.add(q.subject.value);

                yield q.subject.value;
            }
        }
    }

    /**
     * Get the super classes of a given class.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @param options Optional query parameters.
     * @returns An iterator of super classes of the given class.
     */
    *getSuperClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();
        const s = namedNode(subjectUri);

        for (let q of this.store.matchAll(graphUris, s, rdfs.subClassOf, null, options?.includeInferred)) {
            if (!this.skip(graphUris, q.object, options) && !yielded.has(q.object.value)) {
                yielded.add(q.object.value);

                yield q.object.value;
            }
        }
    }

    /**
     * Get the first discovered path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @returns An iterator containing the first path that is found from the given class to a root class.
     */
    *getRootClassPath(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        const path = this._getRootClassPath(graphUris, subjectUri, [], new Set<string>(), options);

        yield* path;
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getRootClassPath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>, options?: DefinitionQueryOptions): string[] {
        for (let o of this.getSuperClasses(graphUris, subjectUri, options)) {
            if (!backtrack.has(o)) {
                backtrack.add(o);

                return this._getRootClassPath(graphUris, o, [...path, o], backtrack, options);
            }
        }

        return path;
    }

    /**
     * Indicate if there are sub classes of a given class.
     * @param subjectUri URI of a class.
     * @returns true if the class has sub classes, false otherwise.
     */
    hasSubClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): boolean {
        const o = namedNode(subjectUri);
        const ontologies = this._getOtherOntologiesOnce(graphUris, options);

        for (let q of this.store.matchAll(graphUris, null, rdfs.subClassOf, o)) {
            if (!this.skip(graphUris, q.subject, options) || this._isReferencedAboveClass(graphUris, q.subject, options, ontologies)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the sub classes of a given class or all root classes.
     * @param subjectUri URI of a class or undefined to get all root classes.
     * @returns An iterator of sub classes of the given class, or root classes if no subject is provided.
     */
    *getSubClasses(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        if (subjectUri) {
            const yielded = new Set<string>();
            const o = namedNode(subjectUri);
            const ontologies = this._getOtherOntologiesOnce(graphUris, options);

            for (let q of this.store.matchAll(graphUris, null, rdfs.subClassOf, o, options?.includeInferred)) {
                if (yielded.has(q.subject.value)) {
                    continue;
                }

                // A referenced class is listed if it leads to a class of the document, so that
                // the hierarchy from a referenced root class down to the document is not broken.
                if (!this.skip(graphUris, q.subject, options) || this._isReferencedAboveClass(graphUris, q.subject, options, ontologies)) {
                    yielded.add(q.subject.value);

                    yield q.subject.value;
                }
            }
        } else {
            yield* this.getRootClasses(graphUris, options);
        }
    }

    /**
     * Recursively traverse all sub classes of a given class and invoke a callback.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param superClass The super class to start the traversal from.
     * @param callback A function to call for each sub class. If the function returns `false`, the traversal stops.
     * @param options Optional query parameters.
     * @param visited A set of visited URIs.
     * @returns `true` if the traversal was completed, `false` if it was stopped by the callback.
     */
    private _traverseSubClasses(graphUris: string | string[] | undefined, superClass: rdfjs.Quad_Subject, callback: (s: rdfjs.Quad_Subject) => boolean, options?: DefinitionQueryOptions, visited: Set<string> = new Set<string>()) {
        // Enumerate all sub classes of the given super class.
        for (let q of this.store.matchAll(graphUris, null, rdfs.subClassOf, superClass, options?.includeInferred)) {
            // If it is not skipped and has not been visited yet, we call the callback function.
            if (!this.skip(graphUris, q.subject, options) && !visited.has(q.subject.value)) {
                visited.add(q.subject.value);

                // If the callback returns false, we stop the traversal.
                if (callback(q.subject)) {
                    this._traverseSubClasses(graphUris, q.subject, callback, options, visited);
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Get all sub classes of a given class, including indirect sub classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @param options Optional query parameters.
     * @returns An iterator of all sub classes of the given class.
     */
    *getAllSubClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        const visited = new Set<string>();

        yield* this._traverseSubClassesGenerator(graphUris, namedNode(subjectUri), options, visited);
    }

    /**
     * Recursively traverse all sub classes of a given class and yield them.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param superClass The super class to start the traversal from.
     * @param options Optional query parameters.
     * @param visited A set of visited URIs.
     */
    private *_traverseSubClassesGenerator(graphUris: string | string[] | undefined, superClass: rdfjs.Quad_Subject, options?: DefinitionQueryOptions, visited: Set<string> = new Set<string>()): IterableIterator<string> {
        // Enumerate all sub classes of the given super class.
        for (let q of this.store.matchAll(graphUris, null, rdfs.subClassOf, superClass, options?.includeInferred)) {
            // If it is not skipped and has not been visited yet, we yield it and recurse.
            if (!this.skip(graphUris, q.subject, options) && !visited.has(q.subject.value)) {
                visited.add(q.subject.value);

                yield q.subject.value;

                yield* this._traverseSubClassesGenerator(graphUris, q.subject, options, visited);
            }
        }
    }

    /**
     * Indicate if there are instances of a given class or any of its sub classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param typeUri URI of the class.
     * @param options Optional query parameters.
     * @returns `true` if the class has instances, `false` otherwise.
     */
    hasSubjectsOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): boolean {
        const iterator = this.getSubjectsOfType(graphUris, typeUri, options).next();

        return !iterator.done;
    }

    /**
     * Get all subjects of a given class in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param typeUri URI of the class.
     * @param options Optional query parameters.
     * @returns An iterator of all subjects of the given class.
     */
    *getSubjectsOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): IterableIterator<string> {
        if (options?.includeSubTypes === false) {
            // 1. Get all subclasses of the given type from the repository -> ClassRepository.
            const subclasses = new Set<string>(this.getAllSubClasses(graphUris, typeUri));

            // 2. Then get all triples that have a rdf:type predicate.
            //  a) if the object matches the given type, add it to the result.
            //  b) if the object is a subclass of the given type, track it for filtering.
            const result = new Set<string>();
            const filtered = new Set<string>();

            for (let q of this.store.matchAll(graphUris, null, rdf.type, null, options?.includeInferred)) {
                if (q.object.value == typeUri && !this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                } else if (subclasses.has(q.object.value)) {
                    filtered.add(q.subject.value);
                }
            }

            // Yield only items that are not filtered
            for (const item of result) {
                if (!filtered.has(item)) {
                    yield item;
                }
            }
        } else {
            // TODO: This does not explicitly check the sub classes. Implement a unit test.
            const yielded = new Set<string>();

            for (let q of this.store.matchAll(graphUris, null, rdf.type, namedNode(typeUri), options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options) && !yielded.has(q.subject.value)) {
                    yielded.add(q.subject.value);

                    yield q.subject.value;
                }
            }
        }
    }

    /**
     * Indicate if a given class is direct or indirect (inferred) sub class of another class.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of the sub class.
     * @param classUri URI of the super class.
     * @param options Optional query parameters.
     * @returns `true` if the class is a sub class of the other class, false otherwise.
     */
    isSubClassOf(graphUris: string | string[] | undefined, subjectUri: string, classUri: string, options?: DefinitionQueryOptions): boolean {
        for (const pathClass of this.getRootClassPath(graphUris, subjectUri, options)) {
            if (pathClass === classUri) {
                return true;
            }
        }
        return false;
    }

    /**
     * Indicate if a given class is the intersection of classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @returns `true` if the class is the intersection of classes, `false` otherwise.
     */
    isIntersectionOfClasses(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = namedNode(subjectUri);

        if (this._isIntersectionOfClasses(graphUris, s)) {
            return true;
        }

        // Note: The intersection must be defined in the original graphs, so inference is not required.
        for (let q of this.store.matchAll(graphUris, s, owl.equivalentClass, null, false)) {
            if (this._isIntersectionOfClasses(graphUris, q.object)) {
                return true;
            }
        }

        return false;
    }

    private _isIntersectionOfClasses(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        if (subject.termType === "BlankNode" || subject.termType === "NamedNode") {
            for (let _ of this.store.matchAll(graphUris, subject, owl.intersectionOf, null, false)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Indicate if a given class is a (disjoint) union of classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @returns `true` if the class is a (disjoint) union of classes, `false` otherwise.
     */
    isUnionOfClasses(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = namedNode(subjectUri);

        if (this._isUnionOfClasses(graphUris, s)) {
            return true;
        }

        // Note: The union must be defined in the original graphs, so inference is not required.
        for (let q of this.store.matchAll(graphUris, s, owl.equivalentClass, null, false)) {
            if (this._isUnionOfClasses(graphUris, q.object)) {
                return true;
            }
        }

        return false;
    }

    private _isUnionOfClasses(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        if (subject.termType === "BlankNode" || subject.termType === "NamedNode") {
            for (let _ of this.store.matchAll(graphUris, subject, owl.unionOf, null, false)) {
                return true;
            }

            for (let _ of this.store.matchAll(graphUris, subject, owl.disjointUnionOf, null, false)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get all classes from the repository that have no super classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns An iterator of root classes in the repository.
     */
    *getRootClasses(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();
        const classes = new Set<string>(this.getClasses(graphUris, options));
        const ontologies = this._getOtherOntologiesOnce(graphUris, options);

        // All super class relations are read in one pass rather than per class, which would
        // query the asserted and the inferred graphs of every class.
        const superClasses = this._getSuperClassMap(graphUris, options);

        // Whether a super class is shown depends on the node alone, so it is decided once.
        const visible = new Map<string, boolean>();

        const isVisible = (iri: string): boolean => {
            if (classes.has(iri)) {
                return true;
            }

            let result = visible.get(iri);

            if (result === undefined) {
                const node = namedNode(iri);

                result = !this.skip(graphUris, node, options) || this._isReferenced(graphUris, node, options, ontologies);

                visible.set(iri, result);
            }

            return result;
        };

        const getVisibleSuperClasses = (iri: string): string[] => (superClasses.get(iri) ?? []).filter(isVisible);

        // The referenced classes whose top classes were already yielded, shared by all
        // classes so that a chain is walked only once.
        const finished = new Set<string>();

        for (let c of classes) {
            let hasSuperClass = false;

            for (let s of getVisibleSuperClasses(c)) {
                // We have at least one super class that is not the class itself.
                hasSuperClass = true;

                // A super class that is not a class of the document is referenced: the root classes
                // are the top classes of its super class chains, if the document states any.
                if (!classes.has(s)) {
                    for (let r of this._getTopClasses(s, getVisibleSuperClasses, classes, finished, new Set<string>())) {
                        if (!yielded.has(r)) {
                            yielded.add(r);

                            yield r;
                        }
                    }
                }
            }

            if (!hasSuperClass && !yielded.has(c)) {
                yielded.add(c);

                yield c;
            }
        }
    }

    /**
     * Get the named super classes of every class in the graphs, read in a single pass.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A map from a class to its named super classes, excluding the class itself.
     */
    private _getSuperClassMap(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): Map<string, string[]> {
        const result = new Map<string, string[]>();

        for (let q of this.store.matchAll(graphUris, null, rdfs.subClassOf, null, options?.includeInferred)) {
            if (q.subject.termType != "NamedNode" || q.object.termType != "NamedNode" || q.subject.value == q.object.value) {
                continue;
            }

            const superClasses = result.get(q.subject.value);

            if (!superClasses) {
                result.set(q.subject.value, [q.object.value]);
            } else if (!superClasses.includes(q.object.value)) {
                superClasses.push(q.object.value);
            }
        }

        return result;
    }

    /**
     * Get the top classes of the super class chains of a referenced class.
     * @param classUri URI of a referenced class.
     * @param getSuperClasses A function returning the super classes of a class shown in the hierarchy.
     * @param classes The classes of the document; a chain that leads back to one of them has no top of its own.
     * @param finished The referenced classes whose top classes were already yielded.
     * @param path The classes on the current chain, to stop at cycles.
     * @returns An iterator of the top classes not yielded for another chain before.
     */
    private *_getTopClasses(classUri: string, getSuperClasses: (iri: string) => string[], classes: Set<string>, finished: Set<string>, path: Set<string>): IterableIterator<string> {
        if (finished.has(classUri)) {
            return;
        }

        path.add(classUri);

        let isTop = true;

        for (let s of getSuperClasses(classUri)) {
            if (classes.has(s) || finished.has(s)) {
                // The chain continues in a class of the document or in a chain already walked.
                isTop = false;
            } else if (!path.has(s)) {
                isTop = false;

                yield* this._getTopClasses(s, getSuperClasses, classes, finished, path);
            }
        }

        path.delete(classUri);
        finished.add(classUri);

        if (isTop) {
            yield classUri;
        }
    }

    /**
     * Indicate if a node is only referenced by the document: it is included if referenced classes
     * are included, and it is not defined by another ontology of the document. Annotations or a
     * declaration of a class from another vocabulary do not define it.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param node A node.
     * @param options Optional query parameters.
     * @param ontologies The other ontologies in the graphs, see {@link _getOtherOntologiesOnce}.
     * @returns `true` if the node is a referenced named node, `false` otherwise.
     */
    private _isReferenced(graphUris: string | string[] | undefined, node: rdfjs.Quad_Subject | rdfjs.Quad_Object, options: DefinitionQueryOptions | undefined, ontologies: () => string[]): boolean {
        if (!(options?.includeReferenced ?? false) || node.termType != "NamedNode") {
            return false;
        }

        return !ontologies().some(o => this.isDefinedBy(graphUris, node, o));
    }

    /**
     * Indicate if a node is a referenced class with a class of the document below it.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param node A node.
     * @param options Optional query parameters.
     * @param ontologies The other ontologies in the graphs, see {@link _getOtherOntologiesOnce}.
     * @param visited The classes already visited, to stop at cycles.
     * @returns `true` if a class of the document is a direct or indirect sub class of the node.
     */
    private _isReferencedAboveClass(graphUris: string | string[] | undefined, node: rdfjs.Quad_Subject, options: DefinitionQueryOptions | undefined, ontologies: () => string[], visited: Set<string> = new Set<string>()): boolean {
        if (!this._isReferenced(graphUris, node, options, ontologies)) {
            return false;
        }

        visited.add(node.value);

        for (let q of this.store.matchAll(graphUris, null, rdfs.subClassOf, node, options?.includeInferred)) {
            if (visited.has(q.subject.value)) {
                continue;
            }

            if (!this.skip(graphUris, q.subject, options) || this._isReferencedAboveClass(graphUris, q.subject, options, ontologies, visited)) {
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
    private _getOtherOntologiesOnce(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): () => string[] {
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

    /**
     * Indicate if there is an equivalent class of a given class.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @param options Optional query parameters.
     * @returns `true` if the class has an equivalent class, `false` otherwise.
     */
    public hasEquivalentClass(graphUris: string | string[] | undefined, subjectUri: string, options?: QueryOptions): boolean {
        const s = namedNode(subjectUri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for (let _ of this.store.matchAll(graphUris, s, owl.equivalentClass, null, options?.includeInferred)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a given class has at least one individual defined for it or for one of its sub classes.
     * @param graphUris Graph URIs to search in, undefined for the default graph.
     * @param classUri URI of a class.
     * @param options Optional query parameters.
     * @returns `true` if the class has individuals, `false` otherwise.
     */
    public hasIndividuals(graphUris: string | string[] | undefined, classUri: string, options?: DefinitionQueryOptions): boolean {
        return this._hasIndividuals(new Set<string>(), graphUris, classUri, options);
    }

    /**
     * Internal method to check for individuals with cycle detection.
     * @param graphUris Graph URIs to search in, undefined for the default graph.
     * @param classUri URI of a class.
     * @param options Optional query parameters.
     * @param backtrack Set of already visited class URIs to prevent cycles.
     * @returns `true` if the class has individuals, `false` otherwise.
     */
    private _hasIndividuals(backtrack: Set<string>, graphUris: string | string[] | undefined, classUri: string, options?: DefinitionQueryOptions): boolean {
        // Prevent infinite recursion by checking if we've already visited this class
        if (backtrack.has(classUri)) {
            return false;
        }

        backtrack.add(classUri);

        const s = namedNode(classUri);

        // Check for direct individuals of this class
        for (let q of this.store.matchAll(graphUris, null, rdf.type, s, options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options)) {
                return true;
            }
        }

        // Check subclasses recursively with cycle detection
        for (let c of this.getSubClasses(graphUris, classUri, options)) {
            if (this._hasIndividuals(backtrack, graphUris, c, options)) {
                return true;
            }
        }

        return false;
    }
}