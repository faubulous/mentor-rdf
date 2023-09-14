import * as n3 from "n3";
import { rdf, rdfs } from "../ontologies";

/**
 * A repository for retrieving classes from graphs.
 */
export class ClassRepository {
    constructor(private _graph: n3.Store) { }

    /**
     * Get all classes in the repository.
     * @returns A list of all classes in the repository.
     */
    getClasses(): string[] {
        const result = new Set<string>();

        for (let q of this._graph.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (s.termType != "NamedNode" || s.value.startsWith("http://www.w3.org")) {
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

        for (let q of this._graph.match(s, rdfs.subClassOf, null)) {
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
        if (!subject) {
            return false;
        } else {
            const o = n3.DataFactory.namedNode(subject);

            return this._graph.match(null, rdfs.subClassOf, o).size > 0;
        }
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

            for (let q of this._graph.match(null, rdfs.subClassOf, o)) {
                const s = q.subject;

                if (s.termType != "NamedNode") {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            const result = this.getClasses();
            const subclasses = new Set<string>();

            for (let q of this._graph.match(null, rdfs.subClassOf, null)) {
                const s = q.subject;
                const o = q.object;

                if (s.termType != "NamedNode" || o.termType != "NamedNode") {
                    continue;
                }

                subclasses.add(s.value);
            }

            return result.filter(c => !subclasses.has(c));
        }
    }
}