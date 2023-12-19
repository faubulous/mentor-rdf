import * as n3 from "n3";
import * as RDF from "@rdfjs/types";
import { rdf, rdfs, owl } from "../ontologies";
import { ResourceRepository } from "./resource-repository";

interface ClassRetrievalOptions {
    /**
     * Indicate if classes what are not defined in the ontology should be included when retrieving classes (default true).
     */
    includeReferencedClasses?: boolean;
}

/**
 * A repository for retrieving classes from graphs.
 */
export class ClassRepository extends ResourceRepository {
    constructor(store: n3.Store) { super(store); }

    private _skip(node: RDF.Quad_Subject | RDF.Quad_Object, options?: ClassRetrievalOptions): boolean {
        if (node.termType != "NamedNode") {
            return true;

        }

        if (options?.includeReferencedClasses === false && !this.hasSubject(node.value)) {
            return true;
        }

        return false;
    }

    /**
     * Get all classes in the repository.
     * @returns A list of all classes in the repository.
     */
    getClasses(options?: ClassRetrievalOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (this._skip(s, options)) {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Get the super classes of a given class.
     * @param subject URI of a class.
     * @returns An array of super classes of the given class, an empty array if the class has no super classes.
     */
    getSuperClasses(subject: string, options?: ClassRetrievalOptions): string[] {
        const result = new Set<string>();
        const s = n3.DataFactory.namedNode(subject);

        for (let q of this.store.match(s, rdfs.subClassOf, null)) {
            const o = q.object;

            if (this._skip(o, options)) {
                continue;
            }

            result.add(o.value);
        }

        return Array.from(result);
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subject URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getRootClassPath(subject: string, path: string[], backtrack: Set<string>, options?: ClassRetrievalOptions): string[] {
        const superClasses = this.getSuperClasses(subject, options);

        for (let o of superClasses.filter(o => !backtrack.has(o))) {
            return this._getRootClassPath(o, [...path, o], backtrack, options);
        }

        return path;
    }

    /**
     * Get the first discovered path from a given class to a root class.
     * @param subject URI of a class.
     * @returns A string array containing the first path that is found from the given class to a root class.
     */
    getRootClassPath(subject: string, options?: ClassRetrievalOptions): string[] {
        return this._getRootClassPath(subject, [], new Set<string>(), options);
    }

    /**
     * Indicate if there are sub classes of a given class.
     * @param subject URI of a class.
     * @returns true if the class has sub classes, false otherwise.
     */
    hasSubClasses(subject: string, options?: ClassRetrievalOptions): boolean {
        const o = n3.DataFactory.namedNode(subject);

        for (let _q of this.store.match(null, rdfs.subClassOf, o)) {
            if (this._skip(_q.subject, options)) {
                continue;
            } else {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the sub classes of a given class or all root classes.
     * @param subject URI of a class or undefined to get all root classes.
     * @returns An array of sub classes of the given class, an empty array if the class has no sub classes.
     */
    getSubClasses(subject?: string, options?: ClassRetrievalOptions): string[] {
        if (subject) {
            const result = new Set<string>();
            const o = n3.DataFactory.namedNode(subject);

            for (let q of this.store.match(null, rdfs.subClassOf, o)) {
                const s = q.subject;

                if (this._skip(s, options)) {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getRootClasses(options);
        }
    }

    /**
     * Get all classes from the repository that have no super classes.
     * @returns An array of root classes in the repository.
     */
    public getRootClasses(options?: ClassRetrievalOptions): string[] {
        const classes = new Set<string>();
        const subclasses = new Set<string>();

        // 1. Get all classes that are defined in the ontology.
        for (let q of this.store.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (this._skip(s, options)) {
                continue;
            }

            classes.add(s.value);
        }

        // 2. Get all classes that have a sub class relationship.
        for (let q of this.store.match(null, rdfs.subClassOf, null)) {
            const s = q.subject;
            const o = q.object;

            if (this._skip(s, options) || this._skip(o, options)) {
                continue;
            }

            classes.add(s.value);
            classes.add(o.value);

            subclasses.add(s.value);
        }

        return Array.from(classes).filter(c => !subclasses.has(c));
    }

    /**
     * Indicate if there is an equivalent class of a given class.
     * @param subject URI of a class.
     * @returns true if the class has an equivalent class, false otherwise.
     */
    public hasEquivalentClass(uri: string): boolean {
        const s = n3.DataFactory.namedNode(uri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for (let _ of this.store.match(s, owl.equivalentClass, null)) {
            return true;
        }

        return false;
    }
}