import * as n3 from "n3";
import * as RDF from "@rdfjs/types";
import { rdf, rdfs, owl } from "../ontologies";
import { Store } from "./store";
import { ConceptRepository } from "./concept-repository";

interface ClassRetrievalOptions {
    /**
     * Indicate if classes what are not defined in the ontology should be included when retrieving classes (default true).
     */
    includeReferencedClasses?: boolean;
}

/**
 * A repository for retrieving classes from graphs.
 */
export class ClassRepository extends ConceptRepository {
    constructor(store: Store) { super(store); }

    private _skip(graphUris: string | string[] | undefined, node: RDF.Quad_Subject | RDF.Quad_Object, options?: ClassRetrievalOptions): boolean {
        if (node.termType != "NamedNode") {
            return true;
        }

        if (options?.includeReferencedClasses === false && !this.hasSubject(graphUris, node.value)) {
            return true;
        }

        return false;
    }

    /**
     * Get all classes in the repository.
     * @returns A list of all classes in the repository.
     */
    getClasses(graphUris: string | string[] | undefined, options?: ClassRetrievalOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (this._skip(graphUris, s, options)) {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Get the super classes of a given class.
     * @param subjectUri URI of a class.
     * @returns An array of super classes of the given class, an empty array if the class has no super classes.
     */
    getSuperClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: ClassRetrievalOptions): string[] {
        const result = new Set<string>();
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdfs.subClassOf, null)) {
            const o = q.object;

            if (this._skip(graphUris, o, options)) {
                continue;
            }

            result.add(o.value);
        }

        return Array.from(result);
    }

    /**
     * Get the first discovered path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @returns A string array containing the first path that is found from the given class to a root class.
     */
    getRootClassPath(graphUris: string | string[] | undefined, subjectUri: string, options?: ClassRetrievalOptions): string[] {
        return this._getRootClassPath(graphUris, subjectUri, [], new Set<string>(), options);
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getRootClassPath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>, options?: ClassRetrievalOptions): string[] {
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
    hasSubClasses(graphUris: string | string[] | undefined, subjectUri: string, options?: ClassRetrievalOptions): boolean {
        const o = n3.DataFactory.namedNode(subjectUri);

        for (let _q of this.store.match(graphUris, null, rdfs.subClassOf, o)) {
            if (this._skip(graphUris, _q.subject, options)) {
                continue;
            } else {
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
    getSubClasses(graphUris: string | string[] | undefined, subjectUri?: string, options?: ClassRetrievalOptions): string[] {
        if (subjectUri) {
            const result = new Set<string>();
            const o = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, null, rdfs.subClassOf, o)) {
                const s = q.subject;

                if (this._skip(graphUris, s, options)) {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getRootClasses(graphUris, options);
        }
    }

    /**
     * Indicate if a given class is direct or indirect (inferred) sub class of another class.
     * @param subjectUri URI of a class.
     * @param classUri URI of a class.
     * @returns true if the class is a sub class of the other class, false otherwise.
     */
    isSubClassOf(graphUris: string | string[] | undefined, subjectUri: string, classUri: string): boolean {
        return this.getRootClassPath(graphUris, subjectUri).includes(classUri);
    }

    /**
     * Indicate if a given class is the intersection of classes.
     * @param graphUris Graph URIs to search in, undefined for the default graph.
     * @param subjectUri URI of a class.
     * @returns `true` if the class is the intersection of classes, `false` otherwise.
     */
    isIntersectionOfClasses(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        if (this._isIntersectionOfClasses(graphUris, s)) {
            return true;
        }

        for (let q of this.store.match(graphUris, s, owl.equivalentClass)) {
            if (this._isIntersectionOfClasses(graphUris, q.object)) {
                return true;
            }
        }

        return false;
    }

    private _isIntersectionOfClasses(graphUris: string | string[] | undefined, subject: any): boolean {
        if (subject instanceof n3.BlankNode || subject instanceof n3.NamedNode) {
            for (let _ of this.store.match(graphUris, subject, owl.intersectionOf)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Indicate if a given class is a (disjoint) union of classes.
     * @param graphUris Graph URIs to search in, undefined for the default graph.
     * @param subjectUri URI of a class.
     * @returns `true` if the class is a (disjoint) union of classes, `false` otherwise.
     */
    isUnionOfClasses(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        if (this._isUnionOfClasses(graphUris, s)) {
            return true;
        }

        for (let q of this.store.match(graphUris, s, owl.equivalentClass)) {
            if (this._isUnionOfClasses(graphUris, q.object)) {
                return true;
            }
        }

        return false;
    }

    private _isUnionOfClasses(graphUris: string | string[] | undefined, subject: any): boolean {
        if (subject instanceof n3.BlankNode || subject instanceof n3.NamedNode) {
            for (let _ of this.store.match(graphUris, subject, owl.unionOf)) {
                return true;
            }

            for (let _ of this.store.match(graphUris, subject, owl.disjointUnionOf)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Indicate if a given class has property restrictions.
     * @param graphUris Graph URIs to search in, undefined for the default graph.
     * @param subjectUri URI of a class.
     * @returns `true` if the class has property restrictions, `false` otherwise.
     */
    hasRestrictions(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, owl.equivalentClass)) {
            if (q.object instanceof n3.BlankNode || q.object instanceof n3.NamedNode) {
                for (let _ of this.store.match(graphUris, q.object, rdf.type, owl.Restriction)) {
                    return true;
                }
            }
        }

        for (let q of this.store.match(graphUris, s, rdfs.subClassOf)) {
            if (q.object instanceof n3.BlankNode || q.object instanceof n3.NamedNode) {
                for (let _ of this.store.match(graphUris, q.object, rdf.type, owl.Restriction)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Get all classes from the repository that have no super classes.
     * @returns An array of root classes in the repository.
     */
    public getRootClasses(graphUris: string | string[] | undefined, options?: ClassRetrievalOptions): string[] {
        const classes = new Set<string>();
        const subclasses = new Set<string>();

        // 1. Get all classes that are defined in the ontology.
        for (let q of this.store.match(graphUris, null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (this._skip(graphUris, s, options)) {
                continue;
            }

            classes.add(s.value);
        }

        // 2. Get all classes that have a sub class relationship.
        for (let q of this.store.match(graphUris, null, rdfs.subClassOf, null)) {
            const s = q.subject;
            const o = q.object;

            if (this._skip(graphUris, s, options) || this._skip(graphUris, o, options)) {
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
     * @param subjectUri URI of a class.
     * @returns `true` if the class has an equivalent class, `false` otherwise.
     */
    public hasEquivalentClass(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for (let _ of this.store.match(graphUris, s, owl.equivalentClass, null)) {
            return true;
        }

        return false;
    }

    /**
     * Indicate if a given class has at least one individual defined for it or for one of its sub classes.
     * @param graphUris Graph URIs to search in, undefined for the default graph.
     * @param classUri URI of a class.
     * @returns `true` if the class has individuals, `false` otherwise.
     */
    public hasIndividuals(graphUris: string | string[] | undefined, classUri: string): boolean {
        const s = n3.DataFactory.namedNode(classUri);

        for (let q of this.store.match(graphUris, null, rdf.type, s)) {
            if (q.subject.termType == "NamedNode") {
                return true;
            }
        }

        for (let c of this.getSubClasses(graphUris, classUri)) {
            if (this.hasIndividuals(graphUris, c)) {
                return true;
            }
        }

        return false;
    }

}