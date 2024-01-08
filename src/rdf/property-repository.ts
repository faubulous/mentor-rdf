import * as n3 from "n3";
import * as RDF from "@rdfjs/types";
import { rdf, rdfs, owl } from "../ontologies";
import { ResourceRepository } from "./resource-repository";

interface PropertyRetrievalOptions {
    /**
     * A predicate that must be present on the returned properties.
     */
    predicate?: string;

    /**
     * An object value that must be present on the returned properties.
     */
    object?: string;
}

/**
 * A repository for retrieving properties from graphs.
 */
export class PropertyRepository extends ResourceRepository {
    /**
     * The predicate used to indicate the domain of a property.
     */
    public domainPredicate = rdfs.domain;

    /**
     * The predicate used to indicate the range of a property.
     */
    public rangePredicate = rdfs.range;

    constructor(store: n3.Store) { super(store); }

    private _skip(node: RDF.Quad_Subject | RDF.Quad_Object, options?: PropertyRetrievalOptions): boolean {
        if (node.termType != "NamedNode") {
            return true;
        }

        if (options?.predicate || options?.object) {
            const s = n3.DataFactory.namedNode(node.value);
            const p = options.predicate ? n3.DataFactory.namedNode(options.predicate) : undefined;
            const o = options.object ? n3.DataFactory.namedNode(options.object) : undefined;

            if (this.store.match(s, p, o).size == 0) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get all properties in the repository.
     * @param options Optional options for retrieving properties.
     * @returns A list of all properties in the repository.
     */
    getProperties(options?: PropertyRetrievalOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(null, rdf.type, rdf.Property)) {
            const s = q.subject;

            if (this._skip(s, options)) {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Get the super properties of a given property.
     * @param subject URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns An array of super properties of the given property, an empty array if the property has no super properties.
     */
    getSuperProperties(subject: string, options?: PropertyRetrievalOptions): string[] {
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
    private _getRootPropertyPath(subject: string, path: string[], backtrack: Set<string>, options?: PropertyRetrievalOptions): string[] {
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
    getRootPropertiesPath(subject: string, options?: PropertyRetrievalOptions): string[] {
        return this._getRootPropertyPath(subject, [], new Set<string>());
    }

    /**
     * Indicate if there are sub properties of a given property.
     * @param subject URI of a property.
     * @param options Optional options for retrieving properties.
     * @returns true if the property has sub properties, false otherwise.
     */
    hasSubProperties(subject: string, options?: PropertyRetrievalOptions): boolean {
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
    getSubProperties(subject?: string, options?: PropertyRetrievalOptions): string[] {
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
    public getRootProperties(options?: PropertyRetrievalOptions): string[] {
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

        for (let p of this.getProperties()) {
            const types = this.store.match(n3.DataFactory.namedNode(p), rdf.type, null);

            for (let t of types) {
                // Do not assert rdf:Property for properties that have multiple types.
                if (t.object.value == rdf.Property.value && types.size > 1) {
                    continue;
                }

                result.add(t.object.value);
            }
        }

        return Array.from(result);
    }
}