import * as n3 from "n3";
import { SHACL, rdf, shacl } from "../ontologies";
import { Store } from "./store";
import { ConceptRepository } from "./concept-repository";
import { DefinitionQueryOptions } from "./resource-repository";

/**
 * A repository for retrieving SHACL shapes from graphs.
 */
export class ShapeRepository extends ConceptRepository {
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
                const s = q.subject;

                if (!this.skip(graphUris, s, options)) {
                    result.add(s.value);
                }
            }
        } else {
            const s = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, s, rdf.type, shacl.Shape, options?.includeInferred)) {
                const s = q.subject;

                if (!this.skip(graphUris, s, options)) {
                    result.add(s.value);
                }
            }

            for (let q of this.store.match(graphUris, null, shacl.targetClass, s, options?.includeInferred)) {
                const s = q.subject;

                if (!this.skip(graphUris, s, options)) {
                    result.add(s.value);
                }
            }

            for (let q of this.store.match(graphUris, null, shacl.path, s, options?.includeInferred)) {
                const s = q.subject;

                if (!this.skip(graphUris, s, options)) {
                    result.add(s.value);
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
    getShapesOfType(graphUris: string | string[] | undefined, typeUri: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, new n3.NamedNode(typeUri), options?.includeInferred)) {
            const s = q.subject;

            if (!this.skip(graphUris, s, options)) {
                result.add(s.value);
            }
        }

        return Array.from(result);
    }

    /**
     * Get all shape types in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @returns A list of all shape types in the repository.
     */
    getShapeTypes(graphUris: string | string[] | undefined): string[] {
        const result = new Set<string>();

        for (let _ of this.store.match(graphUris, null, rdf.type, shacl.NodeShape)) {
            result.add(SHACL.NodeShape);

            break;
        }

        for (let _ of this.store.match(graphUris, null, rdf.type, shacl.PropertyShape)) {
            result.add(SHACL.PropertyShape);

            break;
        }

        return Array.from(result);
    }

    /**
     * Indicate if there are shapes for a subject in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @returns `true` if there are shapes for the subject, `false` otherwise.
     */
    hasShapes(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let _ of this.store.match(graphUris, s, rdf.type, shacl.Shape)) {
            return true;
        }

        for (let _ of this.store.match(graphUris, null, shacl.targetClass, s)) {
            return true;
        }

        for (let _ of this.store.match(graphUris, null, shacl.path, s)) {
            return true;
        }

        return false;
    }
}