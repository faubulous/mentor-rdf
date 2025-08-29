import * as n3 from "n3";
import { RDF, rdf, rdfs, owl } from "../ontologies";
import { ClassRepository } from "./class-repository";
import { Store } from "./store";
import { DefinitionQueryOptions } from "./resource-repository";

const { namedNode } = n3.DataFactory;

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

        for (let q of this.store.matchAll(graphUris, null, rdf.type, rdf.Property, options?.includeInferred)) {
            if (this.skip(graphUris, q.subject, options)) {
                continue;
            }

            result.add(q.subject.value);
        }

        return Array.from(result);
    }

    /**
     * Get properties of a given type.
     * @param typeUri URI of a property type.
     * @param includeInferred Indicate if properties of a more specific type should be included in the result.
     * @returns A list of properties of the given type.
     */
    getRootPropertiesOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();
        const type = namedNode(typeUri);

        for (let q of this.store.matchAll(graphUris, null, rdf.type, type, options?.includeInferred)) {
            if (this.skip(graphUris, q.subject, options)) {
                continue;
            }

            let hasSuperProperty = false;

            for (let q2 of this.store.matchAll(graphUris, q.subject, rdfs.subPropertyOf, null, options?.includeInferred)) {
                // Note: We have not skipped the property so it is relevant for our result. However, if we want 
                // to include referenced properties, then we include the referenced super property instead of the
                // current one.
                if (options?.includeReferenced && !this.hasSubject(graphUris, q2.object.value)) {
                    // We must assume that the referenced super property is of the same type as the given type or a super type of it.
                    result.add(q2.object.value);
                } else if (this.skip(graphUris, q2.object, options)) {
                    // If the super property is skipped, then we ignore it.
                    continue;
                }

                hasSuperProperty = true;

                break;
            }

            if (hasSuperProperty) {
                continue;
            }

            if (typeUri === RDF.Property && options?.includeInferred === false) {
                // In the case of rdf:Property, we do not want to include properties that have a more specific type.
                const t = Array.from(this.store.matchAll(graphUris, q.subject, rdf.type, null, options?.includeInferred)).map(q => q.object.value);

                if (new Set(t).size == 1) {
                    result.add(q.subject.value);
                }
            } else {
                result.add(q.subject.value);
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
        const s = namedNode(subjectUri);

        for (let q of this.store.matchAll(graphUris, s, rdfs.subPropertyOf, null, options?.includeInferred)) {
            if (this.skip(graphUris, q.object, options)) {
                continue;
            }

            result.push(q.object.value);
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
            backtrack.add(o);

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
     * Indicate if a given property is direct or indirect (inferred) sub property of another property.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri URI of the sub property.
     * @param classUri URI of the super property.
     * @param options Optional query parameters.
     * @returns `true` if the property is a sub property of the other property, false otherwise.
     */
    isSubPropertyOf(graphUris: string | string[] | undefined, subjectUri: string, classUri: string, options?: DefinitionQueryOptions): boolean {
        return this.getRootPropertiesPath(graphUris, subjectUri, options).includes(classUri);
    }

    /**
     * Indicate if there are sub properties of a given property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns true if the property has sub properties, false otherwise.
     */
    hasSubProperties(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): boolean {
        const o = namedNode(subjectUri);

        for (let q of this.store.matchAll(graphUris, null, rdfs.subPropertyOf, o, options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options)) {
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
            const o = namedNode(subjectUri);

            for (let q of this.store.matchAll(graphUris, null, rdfs.subPropertyOf, o, options?.includeInferred)) {
                if (this.skip(graphUris, q.subject, options)) {
                    continue;
                }

                result.add(q.subject.value);
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

            for (let q of this.store.matchAll(graphUris, namedNode(p), rdfs.subPropertyOf, null, options?.includeInferred)) {
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
        const s = namedNode(propertyUri);

        // The OWL resoner will assert the equivalent class relationship in both directions.
        for (let _ of this.store.matchAll(graphUris, s, owl.equivalentProperty, null)) {
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
        const s = namedNode(propertyUri);

        for (let q of this.store.matchAll(graphUris, s, this.domainPredicate, null)) {
            return q.object.value;
        }

        return rdfs.Resource.value;
    }

    /**
     * Get the range of a given property.
     * @param propertyUri URI of a property.
     * @returns The URI of the range of the given property. If no range is specified, `undefined` is returned.
     */
    public getRange(graphUris: string | string[] | undefined, propertyUri: string): string | undefined {
        const s = namedNode(propertyUri);

        for (let q of this.store.matchAll(graphUris, s, this.rangePredicate, null)) {
            return q.object.value;
        }

        return undefined;
    }

    /**
     * Get all asserted and inferred property types.
     * @param graphUris The URI of the graph or an array of graphs to search for property types.
     * @param options Optional options for retrieving properties.
     * @returns A list of all property types in the repository.
     */
    public getPropertyTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();
        const properties = this.getProperties(graphUris, options).map(p => namedNode(p));

        for (let p of properties) {
            const types = new Set<string>(Array.from(this.store.matchAll(graphUris, p, rdf.type, null, false)).map(t => t.object.value));

            if (types.size > 0) {
                for (let t of types) {
                    // Do not assert rdf:Property for properties that have multiple types.
                    if (t !== RDF.Property || types.size == 1) {
                        result.add(t);
                    }
                }
            } else {
                // If there are no asserted types, we need to infer rdf:Property.
                result.add(RDF.Property);
            }
        }

        return Array.from(result);
    }
}