import * as n3 from "n3";
import { SHACL, rdf, shacl } from "../ontologies";
import { Store } from "./store";
import { DefinitionQueryOptions, TypedInstanceQueryOptions } from "./resource-repository";
import { IndividualRepository } from "./individual-repository";

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
     * Get all shapes of a given type in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shapes in the repository.
     */
    getShapesOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): string[] {
        const result = new Set<string>();

        if (options?.includeSubTypes === false) {
            // 1. Get all subclasses of the given type from the repository -> ClassRepository.
            const subclasses = new Set<string>(this.getAllSubClasses(graphUris, typeUri));

            // 2. Then get all triples that have a rdf:type predicate.
            //  a) if the object matches the given type, add it to the result.
            //  b) if the object is a subclass of the given type, remove it from the result.
            const filtered = new Set<string>();

            for (let q of this.store.match(graphUris, null, rdf.type, null, options?.includeInferred)) {
                if (q.object.value == typeUri && !this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                } else if (subclasses.has(q.object.value)) {
                    filtered.add(q.subject.value)
                }
            }

            return Array.from(result).filter(x => !filtered.has(x));
        } else {
            for (let q of this.store.match(graphUris, null, rdf.type, new n3.NamedNode(typeUri), options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            return Array.from(result);
        }
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
}