import * as n3 from "n3";
import { rdf, rdfs, owl } from "../ontologies";
import { ResourceRepository } from "./resource-repository";

/**
 * A repository for retrieving classes from graphs.
 */
export class ClassRepository extends ResourceRepository {
    constructor(store: n3.Store) { super(store);}

    /**
     * Get all classes in the repository.
     * @returns A list of all classes in the repository.
     */
    getClasses(): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
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
    getSuperClasses(subject: string): string[] {
        const result = [];
        const s = n3.DataFactory.namedNode(subject);

        for (let q of this.store.match(s, rdfs.subClassOf, null)) {
            const o = q.object;

            if (o.termType != "NamedNode") {
                continue;
            }

            result.push(o.value);
        }

        return result;
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subject URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getRootClassPath(subject: string, path: string[], backtrack: Set<string>): string[] {
        const superClasses = this.getSuperClasses(subject);

        for (let o of superClasses.filter(o => !backtrack.has(o))) {
            return this._getRootClassPath(o, [...path, o], backtrack);
        }

        return path;
    }

    /**
     * Get the first discovered path from a given class to a root class.
     * @param subject URI of a class.
     * @returns A string array containing the first path that is found from the given class to a root class.
     */
    getRootClassPath(subject: string): string[] {
        return this._getRootClassPath(subject, [], new Set<string>());
    }

    /**
     * Indicate if there are sub classes of a given class.
     * @param subject URI of a class.
     * @returns true if the class has sub classes, false otherwise.
     */
    hasSubClasses(subject: string): boolean {
        const o = n3.DataFactory.namedNode(subject);

        for (let _q of this.store.match(null, rdfs.subClassOf, o)) {
            return true;
        }

        return false;
    }

    /**
     * Get the sub classes of a given class or all root classes.
     * @param subject URI of a class or undefined to get all root classes.
     * @returns An array of sub classes of the given class, an empty array if the class has no sub classes.
     */
    getSubClasses(subject?: string): string[] {
        if (subject) {
            const result = new Set<string>();
            const o = n3.DataFactory.namedNode(subject);

            for (let q of this.store.match(null, rdfs.subClassOf, o)) {
                const s = q.subject;

                if (s.termType != "NamedNode") {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getRootClasses();
        }
    }

    /**
     * Get all classes from the repository that have no super classes.
     * @returns An array of root classes in the repository.
     */
    public getRootClasses(): string[] {
        const classes = new Set<string>();
        const subclasses = new Set<string>();

        for (let q of this.store.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            classes.add(s.value);
        }

        for (let q of this.store.match(null, rdfs.subClassOf, null)) {
            const s = q.subject;
            const o = q.object;

            if (s.termType != "NamedNode" || o.termType != "NamedNode") {
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
        for(let _ of this.store.match(s, owl.equivalentClass, null)) {
            return true;
        }

        return false;
    }
}