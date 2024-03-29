import * as n3 from "n3";
import { rdf, rdfs, owl } from "../ontologies";
import { ClassRepository } from "./class-repository";
import { Store } from "./store";

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

    constructor(store: Store) { super(store); }

    /**
     * Get all properties in the repository.
     * @param options Optional options for retrieving properties.
     * @returns A list of all properties in the repository.
     */
    getProperties(graphUris: string | string[] | undefined): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, rdf.Property)) {
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
    getPropertiesOfType(graphUris: string | string[] | undefined, typeUri: string, includeInferred: boolean = true): string[] {
        const result = new Set<string>();
        const type = new n3.NamedNode(typeUri);

        for (let q of this.store.match(graphUris, null, rdf.type, type)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            if (includeInferred || typeUri != rdf.Property.id) {
                result.add(s.value);
            } else {
                // In the case of rdf:Property, we do not want to include properties that have a more specific type.
                const t = new Set(Array.from(this.store.match(graphUris, new n3.NamedNode(s.value), rdf.type, null)).map(q => q.object.value));

                if (t.size == 1) {
                    result.add(s.value);
                }
            }
        }

        return Array.from(result);
    }

    /**
     * Get the super properties of a given property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns An array of super properties of the given property, an empty array if the property has no super properties.
     */
    getSuperProperties(graphUris: string | string[] | undefined, subjectUri: string): string[] {
        const result = [];
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdfs.subPropertyOf, null)) {
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
     * @param subjectUri URI of a property.
     * @param path The current property path.
     * @param backtrack Set of URIs that have already been visited.
     * @param options Optional options for retrieving properties.
     * @returns The first path that is found from the given property to a root class.
     */
    private _getRootPropertyPath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>): string[] {
        const superClasses = this.getSuperProperties(graphUris, subjectUri);

        for (let o of superClasses.filter(o => !backtrack.has(o))) {
            return this._getRootPropertyPath(graphUris, o, [...path, o], backtrack);
        }

        return path;
    }

    /**
     * Get the first discovered path from a given property to a root property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns A string array containing the first path that is found from the given property to a root property.
     */
    getRootPropertiesPath(graphUris: string | string[] | undefined, subjectUri: string): string[] {
        return this._getRootPropertyPath(graphUris, subjectUri, [], new Set<string>());
    }

    /**
     * Indicate if there are sub properties of a given property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns true if the property has sub properties, false otherwise.
     */
    hasSubProperties(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const o = n3.DataFactory.namedNode(subjectUri);

        for (let _q of this.store.match(graphUris, null, rdfs.subPropertyOf, o)) {
            return true;
        }

        return false;
    }

    /**
     * Get the sub properties of a given property or all root properties.
     * @param subjectUri URI of a property or undefined to get all root properties.
     * @param options Optional options for retrieving properties.
     * @returns An array of sub properties of the given property, an empty array if the property has no sub properties.
     */
    getSubProperties(graphUris: string | string[] | undefined, subjectUri?: string): string[] {
        if (subjectUri) {
            const result = new Set<string>();
            const o = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, null, rdfs.subPropertyOf, o)) {
                const s = q.subject;

                if (s.termType != "NamedNode") {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getRootProperties(graphUris);
        }
    }

    /**
     * Get all properties from the repository that have no super properties.
     * @param options Optional options for retrieving properties.
     * @returns An array of root properties in the repository.
     */
    public getRootProperties(graphUris: string | string[] | undefined): string[] {
        const properties = new Set<string>();
        const subproperties = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, rdf.Property)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            properties.add(s.value);
        }

        for (let q of this.store.match(graphUris, null, rdfs.subPropertyOf, null)) {
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
     * @param propertyUri URI of a property.
     * @returns true if the property has an equivalent property, false otherwise.
     */
    public hasEquivalentProperty(graphUris: string | string[] | undefined, propertyUri: string): boolean {
        const s = n3.DataFactory.namedNode(propertyUri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for (let _ of this.store.match(graphUris, s, owl.equivalentProperty, null)) {
            return true;
        }

        return false;
    }

    /**
     * Get the domain of a given property.
     * @param propertyUri URI of a property.
     * @returns The URI of the domain of the given property. If no domain is specified, rdfs:Resource is returned.
     */
    public getDomain(graphUris: string | string[] | undefined, propertyUri: string): string {
        const s = n3.DataFactory.namedNode(propertyUri);

        for (let q of this.store.match(graphUris, s, this.domainPredicate, null)) {
            return q.object.value;
        }

        return rdfs.Resource.value;
    }

    /**
     * Get the range of a given property.
     * @param propertyUri URI of a property.
     * @returns The URI of the range of the given property. If no range is specified, rdfs:Resource is returned.
     */
    public getRange(graphUris: string | string[] | undefined, propertyUri: string): string {
        const s = n3.DataFactory.namedNode(propertyUri);

        for (let q of this.store.match(graphUris, s, this.rangePredicate, null)) {
            return q.object.value;
        }

        return rdfs.Resource.value;
    }

    /**
     * Get all asserted and inferred property types.
     * @returns A list of all property types in the repository.
     */
    public getPropertyTypes(graphUris: string | string[] | undefined): string[] {
        const result = new Set<string>();

        for (let p of this.getProperties(graphUris).map(p => new n3.NamedNode(p))) {
            const types = new Set<string>(Array.from(this.store.match(graphUris, p, rdf.type, null)).map(t => t.object.value));

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