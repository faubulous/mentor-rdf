import * as n3 from "n3";
import { RDF, rdf, rdfs, owl } from "../ontologies";
import { ClassRepository } from "./class-repository";
import { Store } from "./store";
import { DefinitionQueryOptions } from "./resource-repository";

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
    getProperties(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, rdf.Property, options?.includeInferred)) {
            const s = q.subject;

            if (this.skip(graphUris, s, options)) {
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
    getPropertiesOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();
        const type = new n3.NamedNode(typeUri);

        for (let q of this.store.match(graphUris, null, rdf.type, type, options?.includeInferred)) {
            const s = q.subject as n3.NamedNode;

            if (this.skip(graphUris, s, options)) {
                continue;
            }

            if (typeUri === RDF.Property && options?.includeInferred === false) {
                // In the case of rdf:Property, we do not want to include properties that have a more specific type.
                const t = Array.from(this.store.match(graphUris, s, rdf.type, null, options?.includeInferred)).map(q => q.object.value);

                if (new Set(t).size == 1) {
                    result.add(s.value);
                }
            } else {
                result.add(s.value);
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
    getSuperProperties(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string[] {
        const result = [];
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdfs.subPropertyOf, null, options?.includeInferred)) {
            const o = q.object;

            if (this.skip(graphUris, o, options)) {
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
    private _getRootPropertyPath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>, options?: DefinitionQueryOptions): string[] {
        const superClasses = this.getSuperProperties(graphUris, subjectUri, options);

        for (let o of superClasses.filter(o => !backtrack.has(o))) {
            return this._getRootPropertyPath(graphUris, o, [...path, o], backtrack, options);
        }

        return path;
    }

    /**
     * Get the first discovered path from a given property to a root property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns A string array containing the first path that is found from the given property to a root property.
     */
    getRootPropertiesPath(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string[] {
        return this._getRootPropertyPath(graphUris, subjectUri, [], new Set<string>(), options);
    }

    /**
     * Indicate if there are sub properties of a given property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns true if the property has sub properties, false otherwise.
     */
    hasSubProperties(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): boolean {
        const o = n3.DataFactory.namedNode(subjectUri);

        for (let _q of this.store.match(graphUris, null, rdfs.subPropertyOf, o, options?.includeInferred)) {
            if (!this.skip(graphUris, _q.subject, options)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the sub properties of a given property or all root properties.
     * @param subjectUri URI of a property or undefined to get all root properties.
     * @param options Optional options for retrieving properties.
     * @returns An array of sub properties of the given property, an empty array if the property has no sub properties.
     */
    getSubProperties(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): string[] {
        if (subjectUri) {
            const result = new Set<string>();
            const o = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, null, rdfs.subPropertyOf, o, options?.includeInferred)) {
                const s = q.subject;

                if (this.skip(graphUris, s, options)) {
                    continue;
                }

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getRootProperties(graphUris, options);
        }
    }

    /**
     * Get all properties from the repository that have no super properties.
     * @param options Optional options for retrieving properties.
     * @returns An array of root properties in the repository.
     */
    public getRootProperties(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();
        const properties = new Set<string>(this.getProperties(graphUris, options));

        for (let p of properties) {
            let hasSuperProperty = false;

            for (let q of this.store.match(graphUris, new n3.NamedNode<string>(p), rdfs.subPropertyOf, null, options?.includeInferred)) {
                const includeReferenced = options?.includeReferenced ?? false;
                const skip = this.skip(graphUris, q.object, options);

                // Do not skip the super property if it is only referenced and the includeReferenced option is set.
                if (q.object.termType != "NamedNode" || skip && (!includeReferenced || includeReferenced && this.hasSubject(graphUris, q.object.value))) {
                    continue;
                }

                hasSuperProperty = true;

                // If we have a super property that is not in the list of properties and not excluded by the options, we add it to the result.
                if (!properties.has(q.object.value)) {
                    result.add(q.object.value);
                }

                break;
            }

            if (!hasSuperProperty) {
                result.add(p);
            }
        }

        return Array.from(result);
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
     * @param graphUris The URI of the graph or an array of graphs to search for property types.
     * @param options Optional options for retrieving properties.
     * @returns A list of all property types in the repository.
     */
    public getPropertyTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (let p of this.getProperties(graphUris, options).map(p => new n3.NamedNode(p))) {
            const types = new Set<string>(Array.from(this.store.match(graphUris, p, rdf.type, null, options?.includeInferred)).map(t => t.object.value));

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