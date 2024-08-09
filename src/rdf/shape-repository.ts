import * as n3 from "n3";
import { rdf, rdfs, shacl, SHACL } from "../ontologies";
import { Store } from "./store";
import { DefinitionQueryOptions } from "./resource-repository";
import { IndividualRepository } from "./individual-repository";
import { Quad_Subject } from "@rdfjs/types";

/**
 * A repository for retrieving SHACL shapes from graphs.
 */
export class ShapeRepository extends IndividualRepository {
    constructor(store: Store) { super(store); }

    /**
     * Get all shapes in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shapes in the repository.
     */
    getShapes(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        if (!subjectUri) {
            for (let q of this.store.match(graphUris, null, rdf.type, shacl.Shape, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }
        } else {
            const s = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, s, rdf.type, shacl.Shape, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            for (let q of this.store.match(graphUris, null, shacl.targetClass, s, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            for (let q of this.store.match(graphUris, null, shacl.path, s, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }
        }

        return Array.from(result);
    }

    /**
     * Get all shape types in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shape types in the repository.
     */
    getShapeTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, shacl.NodeShape)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                result.add(SHACL.NodeShape);
                break;
            }
        }

        for (let q of this.store.match(graphUris, null, rdf.type, shacl.PropertyShape)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                result.add(SHACL.PropertyShape);
                break;
            }
        }

        return Array.from(result);
    }

    /**
     * Get all validator types in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shape types in the repository.
     */
    getValidatorTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        // Get all validators in the repository, including the inferred ones.
        if (this.store.has(graphUris, null, rdf.type, shacl.Validator, options?.includeInferred)) {
            result.add(SHACL.Validator);
        }

        if (this.store.has(graphUris, null, rdf.type, shacl.JSValidator, false)) {
            result.add(SHACL.JSValidator);
        }
        
        if (this.store.has(graphUris, null, rdf.type, shacl.SPARQLAskValidator, false)) {
            result.add(SHACL.SPARQLAskValidator);
        }
        
        if (this.store.has(graphUris, null, rdf.type, shacl.SPARQLSelectValidator, false)) {
            result.add(SHACL.SPARQLSelectValidator);
        }

        return Array.from(result);
    }

    /**
     * Get all target classes, nodes or properties of a given shape in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param shape The URI or blank id of the shape.
     * @param options Optional query parameters.
     * @returns A list of all targeted reesources in the repository.
     */
    getShapeTargets(graphUris: string | string[] | undefined, shape: Quad_Subject, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        // Add the shape definition itself if it is a class.
        for (let q of this.store.match(graphUris, shape, rdf.type, rdfs.Class, true)) {
            result.add(q.subject.value);
        }

        for (let q of this.store.match(graphUris, shape, shacl.targetClass, null, options?.includeInferred)) {
            result.add(q.object.value);
        }

        for (let q of this.store.match(graphUris, shape, shacl.targetNode, null, options?.includeInferred)) {
            result.add(q.object.value);
        }

        for (let q of this.store.match(graphUris, shape, shacl.path, null, options?.includeInferred)) {
            result.add(q.object.value);
        }

        return Array.from(result);
    }

    /**
     * Indicate if there are shapes for a subject in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns `true` if there are shapes for the subject, `false` otherwise.
     */
    hasShapes(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdf.type, shacl.Shape)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                return true;
            }
        }

        for (let q of this.store.match(graphUris, null, shacl.targetClass, s)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                return true;
            }
        }

        for (let q of this.store.match(graphUris, null, shacl.path, s)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the SHACL datatype of a given property.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns A datatype URI on success, `xsd:anyURI` otherwise.
     */
    getDatatype(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string | undefined {
        for (let q of this.store.match(graphUris, null, shacl.path, n3.DataFactory.namedNode(subjectUri), options?.includeInferred)) {
            for (let x of this.store.match(graphUris, q.subject, shacl.datatype, null, options?.includeInferred)) {
                return x.object.value;
            }
        }
    }

    /**
     * Get the SHACL cardinality constraints of a given property.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns An object with the minimum and maximum cardinalities; values are `-1` if not found.
     */
    getCardinalites(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): { minCount: number, maxCount: number } {
        let minCount = -1;
        let maxCount = -1;

        for (let q of this.store.match(graphUris, null, shacl.path, n3.DataFactory.namedNode(subjectUri), options?.includeInferred)) {
            for (let x of this.store.match(graphUris, q.subject, shacl.minCount, null, options?.includeInferred)) {
                minCount = parseInt(x.object.value);
                break;
            }

            for (let x of this.store.match(graphUris, q.subject, shacl.maxCount, null, options?.includeInferred)) {
                maxCount = parseInt(x.object.value);
                break;
            }
        }

        return { minCount, maxCount };
    }
}