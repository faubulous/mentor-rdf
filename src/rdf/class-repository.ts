import * as n3 from "n3";
import { rdf, rdfs, owl } from "../ontologies";
import { Store } from "./store";
import { DefinitionQueryOptions, QueryOptions } from "./resource-repository";
import { ConceptRepository } from "./concept-repository";

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
            const s = q.subject;

            if (!this.skip(graphUris, s, options)) {
                result.add(s.value);
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
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdfs.subClassOf, null, options?.includeInferred)) {
            const o = q.object;

            if (!this.skip(graphUris, o, options)) {
                result.add(o.value);
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
        const o = n3.DataFactory.namedNode(subjectUri);

        for (let _q of this.store.match(graphUris, null, rdfs.subClassOf, o)) {
            if (!this.skip(graphUris, _q.subject, options)) {
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
            const o = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, null, rdfs.subClassOf, o, options?.includeInferred)) {
                const s = q.subject;

                if (!this.skip(graphUris, s, options)) {
                    result.add(s.value);
                }
            }

            return Array.from(result);
        } else {
            return this.getRootClasses(graphUris, options);
        }
    }

    /**
     * Indicate if a given class is direct or indirect (inferred) sub class of another class.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of a class.
     * @param classUri URI of a class.
     * @param options Optional query parameters.
     * @returns true if the class is a sub class of the other class, false otherwise.
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
        const s = n3.DataFactory.namedNode(subjectUri);

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

    private _isIntersectionOfClasses(graphUris: string | string[] | undefined, subject: any): boolean {
        if (subject instanceof n3.BlankNode || subject instanceof n3.NamedNode) {
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
        const s = n3.DataFactory.namedNode(subjectUri);

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

    private _isUnionOfClasses(graphUris: string | string[] | undefined, subject: any): boolean {
        if (subject instanceof n3.BlankNode || subject instanceof n3.NamedNode) {
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

            for (let q of this.store.match(graphUris, new n3.NamedNode<string>(c), rdfs.subClassOf, null, options?.includeInferred)) {
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
        const s = n3.DataFactory.namedNode(subjectUri);

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
        const s = n3.DataFactory.namedNode(classUri);

        for (let q of this.store.match(graphUris, null, rdf.type, s, options?.includeInferred)) {
            if (q.subject.termType == "NamedNode") {
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