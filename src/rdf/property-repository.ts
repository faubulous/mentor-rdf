import { Quad_Subject } from "@rdfjs/types";
import { RDF, rdf, rdfs, owl } from "../ontologies";
import { ClassRepository } from "./class-repository";
import { Store } from "./store";
import { DefinitionQueryOptions } from "./resource-repository";
import { dataFactory } from "./data-factory";

const { namedNode } = dataFactory;

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
    *getProperties(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, rdf.Property, options?.includeInferred)) {
            if (this.skip(graphUris, q.subject, options)) {
                continue;
            }

            if (!yielded.has(q.subject.value)) {
                yielded.add(q.subject.value);

                yield q.subject.value;
            }
        }
    }

    /**
     * Get properties of a given type.
     * @param typeUri URI of a property type.
     * @param includeInferred Indicate if properties of a more specific type should be included in the result.
     * @returns An iterator of properties of the given type.
     */
    *getRootPropertiesOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        // The properties of the given type, by their URI or blank node identifier.
        const members = new Map<string, Quad_Subject>();

        for (let q of this.store.matchAll(graphUris, null, rdf.type, namedNode(typeUri), options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options)) {
                members.set(q.subject.value, q.subject);
            }
        }

        const ontologies = this.getOtherOntologiesOnce(graphUris, options);
        const superProperties = this.getParentMap(graphUris, rdfs.subPropertyOf, options);
        const referenced = new Map<string, boolean>();
        const own = new Map<string, boolean>();

        // A referenced super property is listed with the properties of the given type: we must assume that
        // it is of the same type or a super type of it. With an ontology selected, a super property is
        // referenced unless another ontology of the document defines it; annotations or a declaration of
        // a property of another vocabulary do not define it. Without one, it is referenced if the document
        // states nothing about it.
        const isReferenced = (iri: string): boolean => {
            let result = referenced.get(iri);

            if (result === undefined) {
                const node = namedNode(iri);

                if (!(options?.includeReferenced ?? false)) {
                    result = false;
                } else if (options?.definedBy) {
                    result = this.skip(graphUris, node, options) && this.isReferenced(graphUris, node, options, ontologies);
                } else {
                    result = !this.hasSubject(graphUris, iri);
                }

                referenced.set(iri, result);
            }

            return result;
        };

        // A super property of the document that is not skipped; its sub properties are listed below it.
        const isOwn = (iri: string): boolean => {
            let result = own.get(iri);

            if (result === undefined) {
                result = !isReferenced(iri) && !this.skip(graphUris, namedNode(iri), options);

                own.set(iri, result);
            }

            return result;
        };

        // In the case of rdf:Property, we do not want to include properties that have a more specific type.
        // Every property is an instance of rdf:Property, so they would be listed twice otherwise. This holds
        // for a referenced root as well, such as an external property the document declares with its type.
        const canBeRoot = (iri: string): boolean => typeUri !== RDF.Property || !this._hasSpecificType(graphUris, members.get(iri) ?? namedNode(iri));

        yield* this.getHierarchyRoots(members.keys(), superProperties, isOwn, iri => isOwn(iri) || isReferenced(iri), canBeRoot);
    }

    /**
     * Indicate whether a property is stated to be of a type that is more specific than rdf:Property.
     * Only asserted types are taken into account, because every property is an inferred rdf:Property.
     * @param graphUris URI of the graph or an array of graphs to search.
     * @param property The node of a property.
     * @returns `true` if the property has a more specific asserted type, `false` otherwise.
     */
    private _hasSpecificType(graphUris: string | string[] | undefined, property: Quad_Subject): boolean {
        for (let q of this.store.matchAll(graphUris, property, rdf.type, null, false)) {
            if (q.object.value !== RDF.Property) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the super properties of a given property.
     * @param subjectUri URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns An array of super properties of the given property, an empty array if the property has no super properties.
     */
    *getSuperProperties(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();
        const s = namedNode(subjectUri);

        for (let q of this.store.matchAll(graphUris, s, rdfs.subPropertyOf, null, options?.includeInferred)) {
            if (this.skip(graphUris, q.object, options)) {
                continue;
            }

            if (!yielded.has(q.object.value)) {
                yield q.object.value;
            }

            yielded.add(q.object.value);
        }
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
        const superClasses = [...this.getSuperProperties(graphUris, subjectUri, options)];

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
        const ontologies = this.getOtherOntologiesOnce(graphUris, options);

        for (let q of this.store.matchAll(graphUris, null, rdfs.subPropertyOf, o, options?.includeInferred)) {
            if (!this.skip(graphUris, q.subject, options) || this.isReferencedAbove(graphUris, q.subject, rdfs.subPropertyOf, options, ontologies)) {
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
    *getSubProperties(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        if (subjectUri) {
            const yielded = new Set<string>();
            const o = namedNode(subjectUri);
            const ontologies = this.getOtherOntologiesOnce(graphUris, options);

            for (let q of this.store.matchAll(graphUris, null, rdfs.subPropertyOf, o, options?.includeInferred)) {
                // A referenced property is listed if it leads to a property of the document, so that
                // the hierarchy from a referenced root property down to the document is not broken.
                if (this.skip(graphUris, q.subject, options) && !this.isReferencedAbove(graphUris, q.subject, rdfs.subPropertyOf, options, ontologies)) {
                    continue;
                }

                if (!yielded.has(q.subject.value)) {
                    yield q.subject.value;
                }

                yielded.add(q.subject.value);
            }
        } else {
            yield* this.getRootProperties(graphUris, options);
        }
    }

    /**
     * Get all properties from the repository that have no super properties.
     * @param options Optional options for retrieving properties.
     * @returns An iterator of root properties in the repository.
     */
    *getRootProperties(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const properties = new Set<string>(this.getProperties(graphUris, options));
        const ontologies = this.getOtherOntologiesOnce(graphUris, options);

        // All super property relations are read in one pass rather than per property.
        const superProperties = this.getParentMap(graphUris, rdfs.subPropertyOf, options);

        // Whether a super property is shown depends on the node alone, so it is decided once.
        const visible = new Map<string, boolean>();

        const isVisible = (iri: string): boolean => {
            if (properties.has(iri)) {
                return true;
            }

            let result = visible.get(iri);

            if (result === undefined) {
                const node = namedNode(iri);

                result = !this.skip(graphUris, node, options) || this.isReferenced(graphUris, node, options, ontologies);

                visible.set(iri, result);
            }

            return result;
        };

        yield* this.getHierarchyRoots(properties, superProperties, iri => properties.has(iri), isVisible);
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
     * @returns An iterator of all property types in the repository.
     */
    *getPropertyTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();

        for (let property of this.getProperties(graphUris, options)) {
            const p = namedNode(property);
            const types = new Set<string>(Array.from(this.store.matchAll(graphUris, p, rdf.type, null, false)).map(t => t.object.value));

            if (types.size > 0) {
                for (let t of types) {
                    // Do not assert rdf:Property for properties that have multiple types.
                    if ((t !== RDF.Property || types.size == 1) && !yielded.has(t)) {
                        yielded.add(t);

                        yield t;
                    }
                }
            } else {
                // If there are no asserted types, we need to infer rdf:Property.
                if (!yielded.has(RDF.Property)) {
                    yielded.add(RDF.Property);

                    yield RDF.Property;
                }
            }
        }
    }
}