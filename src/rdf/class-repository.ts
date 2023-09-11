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
    async getClasses(): Promise<string[]> {
        const result = [];

        for (let q of this._graph.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (s.termType != "NamedNode" || s.value.startsWith("http://www.w3.org")) {
                continue;
            }

            result.push(s.value);
        }

        return result;
    }

    /**
     * Get the super classes of a given class.
     * @param subject URI of a class.
     * @returns An array of super classes of the given class, an empty array if the class has no super classes.
     */
    async getSuperClasses(subject: string): Promise<string[]> {
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
    private async _getRootClassPath(subject: string, path: string[], backtrack: Set<string>): Promise<string[]> {
        const superClasses = await this.getSuperClasses(subject);

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
    async getRootClassPath(subject: string): Promise<string[]> {
        return await this._getRootClassPath(subject, [], new Set<string>());
    }

    /**
     * Get the sub classes of a given class.
     * @param subject URI of a class.
     * @returns An array of sub classes of the given class, an empty array if the class has no sub classes.
     */
    async getSubClasses(subject: string): Promise<string[]> {
        const result = [];
        const o = n3.DataFactory.namedNode(subject);

        for (let q of this._graph.match(null, rdfs.subClassOf, o)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            result.push(s.value);
        }

        return result;
    }


    /**
     * Get all classes from the repository that have no super classes.
     * @returns An array of root classes in the repository.
     */
    async getRootClasses(): Promise<string[]> {
        const classes = await this.getClasses();
        const subclasses = new Set<string>();

        for (let q of this._graph.match(null, rdfs.subClassOf, null)) {
            const s = q.subject;
            const o = q.object;

            if (s.termType != "NamedNode" || o.termType != "NamedNode") {
                continue;
            }

            subclasses.add(s.value);
        }

        return classes.filter(c => !subclasses.has(c));
    }
}