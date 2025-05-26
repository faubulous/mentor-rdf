import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import { rdf, rdfs, owl } from "../ontologies";
import { Store } from "./store";
import { QueryOptions, DefinitionQueryOptions, TypedInstanceQueryOptions } from "./resource-repository";
import { ConceptRepository } from "./concept-repository";

const { namedNode } = n3.DataFactory;

/**
 * A repository for retrieving classes from graphs.
 */
export class ClassRepository extends ConceptRepository {
    constructor(store: Store) { super(store); }

    /**
     * Get all classes in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all classes in the repository.
     */
    getClasses(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, rdfs.Class, options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options)) {
                result.add(q.subject.value);
            }
        }

        return Array.from(result);
    }

    /**
     * Get the super classes of a given class.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @param options Optional query parameters.
     * @returns An array of super classes of the given class, an empty array if the class has no super classes.
     */
    getSuperClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();
        const s = namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdfs.subClassOf, null, options?.includeInferred)) {
            if (!this.skip(graphUris, q.object, options)) {
                result.add(q.object.value);
            }
        }

        return Array.from(result);
    }

    /**
     * Get the first discovered path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @returns A string array containing the first path that is found from the given class to a root class.
     */
    getRootClassPath(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string[] {
        return this._getRootClassPath(graphUris, subjectUri, [], new Set<string>(), options);
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getRootClassPath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>, options?: DefinitionQueryOptions): string[] {
        const superClasses = this.getSuperClasses(graphUris, subjectUri, options);

        for (let o of superClasses.filter(o => !backtrack.has(o))) {
            return this._getRootClassPath(graphUris, o, [...path, o], backtrack, options);
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

        for (let q of this.store.match(graphUris, null, rdfs.subClassOf, o)) {
            if (!this.skip(graphUris, q.subject, options)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the sub classes of a given class or all root classes.
     * @param subjectUri URI of a class or undefined to get all root classes.
     * @returns An array of sub classes of the given class, an empty array if the class has no sub classes.
     */
    getSubClasses(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): string[] {
        if (subjectUri) {
            const result = new Set<string>();
            const o = namedNode(subjectUri);

            for (let q of this.store.match(graphUris, null, rdfs.subClassOf, o, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            return Array.from(result);
        } else {
            return this.getRootClasses(graphUris, options);
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
        for (let q of this.store.match(graphUris, null, rdfs.subClassOf, superClass, options?.includeInferred)) {
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
     * @returns An array of all sub classes of the given class.
     */
    getAllSubClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        this._traverseSubClasses(graphUris, namedNode(subjectUri), s => { result.add(s.value); return true; }, options)

        return Array.from(result);
    }

    /**
     * Indicate if there are instances of a given class or any of its sub classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param typeUri URI of the class.
     * @param options Optional query parameters.
     * @returns `true` if the class has instances, `false` otherwise.
     */
    hasSubjectsOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): boolean {
        // TODO: Optimize implementation.
        return this.getSubjectsOfType(graphUris, typeUri, options).length > 0;
    }

    /**
     * Get all subjects of a given class in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param typeUri URI of the class.
     * @param options Optional query parameters.
     * @returns A list of all shapes in the repository.
     */
    getSubjectsOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): string[] {
        const result = new Set<string>();

        if (options?.includeSubTypes === false) {
            // 1. Get all subclasses of the given type from the repository -> ClassRepository.
            const subclasses = new Set<string>(this.getAllSubClasses(graphUris, typeUri));

            // 2. Then get all triples that have a rdf:type predicate.
            //  a) if the object matches the given type, add it to the result.
            //  b) if the object is a subclass of the given type, remove it from the result.
            const filtered = new Set<string>();

            for (let q of this.store.match(graphUris, null, rdf.type, null, options?.includeInferred)) {
                if (q.object.value == typeUri && !this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                } else if (subclasses.has(q.object.value)) {
                    filtered.add(q.subject.value)
                }
            }

            return Array.from(result).filter(x => !filtered.has(x));
        } else {
            // TODO: This does not explicitly check the sub classes. Implement a unit test.
            for (let q of this.store.match(graphUris, null, rdf.type, namedNode(typeUri), options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            return Array.from(result);
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
        return this.getRootClassPath(graphUris, subjectUri, options).includes(classUri);
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
        for (let q of this.store.match(graphUris, s, owl.equivalentClass, null, false)) {
            if (this._isIntersectionOfClasses(graphUris, q.object)) {
                return true;
            }
        }

        return false;
    }

    private _isIntersectionOfClasses(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        if (subject.termType === "BlankNode" || subject.termType === "NamedNode") {
            for (let _ of this.store.match(graphUris, subject, owl.intersectionOf, null, false)) {
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
        for (let q of this.store.match(graphUris, s, owl.equivalentClass, null, false)) {
            if (this._isUnionOfClasses(graphUris, q.object)) {
                return true;
            }
        }

        return false;
    }

    private _isUnionOfClasses(graphUris: string | string[] | undefined, subject: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        if (subject.termType === "BlankNode" || subject.termType === "NamedNode") {
            for (let _ of this.store.match(graphUris, subject, owl.unionOf, null, false)) {
                return true;
            }

            for (let _ of this.store.match(graphUris, subject, owl.disjointUnionOf, null, false)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get all classes from the repository that have no super classes.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns An array of root classes in the repository.
     */
    public getRootClasses(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();
        const classes = new Set<string>(this.getClasses(graphUris, options));

        for (let c of classes) {
            let hasSuperClass = false;

            for (let q of this.store.match(graphUris, namedNode(c), rdfs.subClassOf, null, options?.includeInferred)) {
                const includeReferenced = options?.includeReferenced ?? false;
                const skip = this.skip(graphUris, q.object, options);

                // Do not skip the super property if it is only referenced and the includeReferenced option is set.
                if (q.object.termType != "NamedNode" || skip && (!includeReferenced || includeReferenced && this.hasSubject(graphUris, q.object.value))) {
                    continue;
                }

                hasSuperClass = true;

                // If we have a super property that is not in the list of properties and not excluded by the options, we add it to the result.
                if (!classes.has(q.object.value)) {
                    result.add(q.object.value);
                }

                break;
            }

            if (!hasSuperClass) {
                result.add(c);
            }
        }

        return Array.from(result);
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
        for (let _ of this.store.match(graphUris, s, owl.equivalentClass, null, options?.includeInferred)) {
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
        const s = namedNode(classUri);

        for (let q of this.store.match(graphUris, null, rdf.type, s, options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options)) {
                return true;
            }
        }

        for (let c of this.getSubClasses(graphUris, classUri, options)) {
            if (this.hasIndividuals(graphUris, c)) {
                return true;
            }
        }

        return false;
    }
}