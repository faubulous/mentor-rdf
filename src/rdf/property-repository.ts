import * as n3 from "n3";
import { rdf, rdfs, owl } from "../ontologies";
import { schema, gist } from "./test/ontologies";
import { ResourceRepository } from "./resource-repository";

/**
 * A repository for retrieving properties from graphs.
 */
export class PropertyRepository extends ResourceRepository {
    constructor(store: n3.Store) { super(store);}

    /**
     * Get all properties in the repository.
     * @returns A list of all properties in the repository.
     */
    getProperties(): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(null, rdf.type, rdf.Property)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Get the super properties of a given property.
     * @param subject URI of a property.
     * @returns An array of super properties of the given property, an empty array if the property has no super properties.
     */
    getSuperProperties(subject: string): string[] {
        const result = [];
        const s = n3.DataFactory.namedNode(subject);

        for (let q of this.store.match(s, rdfs.subPropertyOf, null)) {
            const o = q.object;

            if (o.termType != "NamedNode") {
                continue;
            }

            result.push(o.value);
        }

        return result;
    }

    /**
     * Recursively find the first path from a given property to a root property.
     * @param subject URI of a property.
     * @param path The current property path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given property to a root class.
     */
    private _getRootPropertyPath(subject: string, path: string[], backtrack: Set<string>): string[] {
        const superClasses = this.getSuperProperties(subject);

        for (let o of superClasses.filter(o => !backtrack.has(o))) {
            return this._getRootPropertyPath(o, [...path, o], backtrack);
        }

        return path;
    }

    /**
     * Get the first discovered path from a given property to a root property.
     * @param subject URI of a property.
     * @returns A string array containing the first path that is found from the given property to a root property.
     */
    getRootPropertiesPath(subject: string): string[] {
        return this._getRootPropertyPath(subject, [], new Set<string>());
    }

    /**
     * Indicate if there are sub properties of a given property.
     * @param subject URI of a property.
     * @returns true if the property has sub properties, false otherwise.
     */
    hasSubProperties(subject: string): boolean {
        const o = n3.DataFactory.namedNode(subject);

        for (let _q of this.store.match(null, rdfs.subPropertyOf, o)) {
            return true;
        }

        return false;
    }

    /**
     * Get the sub properties of a given property or all root properties.
     * @param subject URI of a property or undefined to get all root properties.
     * @returns An array of sub properties of the given property, an empty array if the property has no sub properties.
     */
    getSubProperties(subject?: string): string[] {
        if (subject) {
            const result = new Set<string>();
            const o = n3.DataFactory.namedNode(subject);

            for (let q of this.store.match(null, rdfs.subPropertyOf, o)) {
                const s = q.subject;

                if (s.termType != "NamedNode") {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getRootProperties();
        }
    }

    /**
     * Get all properties from the repository that have no super properties.
     * @returns An array of root properties in the repository.
     */
    public getRootProperties(): string[] {
        const properties = new Set<string>();
        const subproperties = new Set<string>();

        for (let q of this.store.match(null, rdf.type, rdf.Property)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            properties.add(s.value);
        }

        for (let q of this.store.match(null, rdfs.subPropertyOf, null)) {
            const s = q.subject;
            const o = q.object;

            if (s.termType != "NamedNode" || o.termType != "NamedNode") {
                continue;
            }

            properties.add(s.value);
            properties.add(o.value);

            subproperties.add(s.value);
        }

        return Array.from(properties).filter(c => !subproperties.has(c));
    }

    /**
     * Indicate if there is an equivalent property of a given property.
     * @param subject URI of a property.
     * @returns true if the property has an equivalent property, false otherwise.
     */
    public hasEquivalentProperty(uri: string): boolean {
        const s = n3.DataFactory.namedNode(uri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for(let _ of this.store.match(s, owl.equivalentProperty, null)) {
            return true;
        }

        return false;
    }
}