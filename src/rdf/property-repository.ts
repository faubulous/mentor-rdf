import * as n3 from "n3";
import { rdf, rdfs, owl } from "../ontologies";
import { ClassRepository } from "./class-repository";

/**
 * A repository for retrieving properties from graphs.
 */
export class PropertyRepository extends ClassRepository {
    /**
     * The predicate used to indicate the domain of a property.
     */
    public domainPredicate = rdfs.domain;

    /**
     * The predicate used to indicate the range of a property.
     */
    public rangePredicate = rdfs.range;

    constructor(store: n3.Store) { super(store); }

    /**
     * Get all properties in the repository.
     * @param options Optional options for retrieving properties.
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
     * Get properties of a given type.
     * @param typeUri URI of a property type.
     * @param includeInferred Indicate if properties of a more specific type should be included in the result.
     * @returns A list of properties of the given type.
     */
    getPropertiesOfType(typeUri: string, includeInferred: boolean = true): string[] {
        const result = new Set<string>();
        const type = new n3.NamedNode(typeUri);

        for (let q of this.store.match(null, rdf.type, type)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            if (includeInferred || typeUri != rdf.Property.id) {
                result.add(s.value);
            } else {
                // In the case of rdf:Property, we do not want to include properties that have a more specific type.
                const t = new Set(Array.from(this.store.match(new n3.NamedNode(s.value), rdf.type, null)).map(q => q.object.value));

                if (t.size == 1) {
                    result.add(s.value);
                }
            }
        }

        return Array.from(result);
    }

    /**
     * Get the super properties of a given property.
     * @param subject URI of a property.
     * @param options Optional options for retrieving properties.
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
     * @param options Optional options for retrieving properties.
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
     * @param options Optional options for retrieving properties.
     * @returns A string array containing the first path that is found from the given property to a root property.
     */
    getRootPropertiesPath(subject: string): string[] {
        return this._getRootPropertyPath(subject, [], new Set<string>());
    }

    /**
     * Indicate if there are sub properties of a given property.
     * @param subject URI of a property.
     * @param options Optional options for retrieving properties.
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
     * @param options Optional options for retrieving properties.
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
     * @param options Optional options for retrieving properties.
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
     * @param uri URI of a property.
     * @returns true if the property has an equivalent property, false otherwise.
     */
    public hasEquivalentProperty(uri: string): boolean {
        const s = n3.DataFactory.namedNode(uri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for (let _ of this.store.match(s, owl.equivalentProperty, null)) {
            return true;
        }

        return false;
    }

    /**
     * Get the domain of a given property.
     * @param uri URI of a property.
     * @returns The URI of the domain of the given property. If no domain is specified, rdfs:Resource is returned.
     */
    public getDomain(uri: string): string {
        const s = n3.DataFactory.namedNode(uri);

        for (let q of this.store.match(s, this.domainPredicate, null)) {
            return q.object.value;
        }

        return rdfs.Resource.value;
    }

    /**
     * Get the range of a given property.
     * @param uri URI of a property.
     * @returns The URI of the range of the given property. If no range is specified, rdfs:Resource is returned.
     */
    public getRange(uri: string): string {
        const s = n3.DataFactory.namedNode(uri);

        for (let q of this.store.match(s, this.rangePredicate, null)) {
            return q.object.value;
        }

        return rdfs.Resource.value;
    }

    /**
     * Get all asserted and inferred property types.
     * @returns A list of all property types in the repository.
     */
    public getPropertyTypes(): string[] {
        const result = new Set<string>();

        for (let p of this.getProperties().map(p => new n3.NamedNode(p))) {
            const types = new Set<string>(Array.from(this.store.match(p, rdf.type, null)).map(t => t.object.value));

            for (let t of types) {
                // Do not assert rdf:Property for properties that have multiple types.
                if (t == rdf.Property.value && types.size > 1) {
                    continue;
                }

                result.add(t);
            }
        }

        return Array.from(result);
    }
}