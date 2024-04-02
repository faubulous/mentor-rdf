import * as n3 from "n3";
import { ResourceRepository } from "./resource-repository";
import { rdf, skos } from "../ontologies";

export class ConceptRepository extends ResourceRepository {
    /**
     * Get all concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     */
    getConcepts(graphUris: string | string[] | undefined): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, skos.Concept)) {
            const s = q.subject;

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Get all concept schemes.
     * @param graphUris URIs of the graphs to search for concepts.
     */
    getConceptSchemes(graphUris: string | string[] | undefined): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, skos.ConceptScheme)) {
            const s = q.subject;

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Get all broader concepts of a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept scheme.
     */
    getBroaderConcepts(graphUris: string | string[] | undefined, subjectUri: string): string[] {
        const result = new Set<string>();
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, null, skos.hasTopConcept, s)) {
            const s = q.subject;

            result.add(s.value);
        }

        for (let q of this.store.match(graphUris, null, skos.narrower, s)) {
            const s = q.subject;

            result.add(s.value);
        }

        for (let q of this.store.match(graphUris, s, skos.topConceptOf, null)) {
            const o = q.object;

            result.add(o.value);
        }

        for (let q of this.store.match(graphUris, s, skos.broader, null)) {
            const o = q.object;

            result.add(o.value);
        }

        return Array.from(result);
    }

    /**
     * Indicates whether a concept has broader concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     */
    hasBroaderConcepts(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        return this.getBroaderConcepts(graphUris, subjectUri).length > 0;
    }

    /**
     * Get all narrower concepts of a concept or top concepts of a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept or concept scheme.
     */
    getNarrowerConcepts(graphUris: string | string[] | undefined, subjectUri?: string): string[] {
        if (subjectUri) {
            const result = new Set<string>();
            const s = n3.DataFactory.namedNode(subjectUri);

            for (let q of this.store.match(graphUris, s, skos.hasTopConcept, null)) {
                const o = q.object;

                result.add(o.value);
            }

            for (let q of this.store.match(graphUris, s, skos.narrower, null)) {
                const o = q.object;

                result.add(o.value);
            }

            for (let q of this.store.match(graphUris, null, skos.topConceptOf, s)) {
                const s = q.subject;

                result.add(s.value);
            }

            for (let q of this.store.match(graphUris, null, skos.broader, s)) {
                const s = q.subject;

                result.add(s.value);
            }

            return Array.from(result);
        } else {
            return this.getConceptSchemes(graphUris);
        }
    }

    /**
     * Indicates whether a concept has narrower concepts.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     */
    hasNarrowerConcepts(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        return this.getNarrowerConcepts(graphUris, subjectUri).length > 0;
    }

    /**
     * Indicates whether a concept is a narrower concept of another concept.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     * @param broaderUri URI of a broader concept.
     * @returns `true` if the concept is a narrower concept of the broader concept, `false` otherwise.
     */
    isNarrowerConceptOf(graphUris: string | string[] | undefined, subjectUri: string, broaderUri: string): boolean {
        return this.getConceptSchemePath(graphUris, subjectUri).includes(broaderUri);
    }

    /**
     * Indicates whether a subject is a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a subject.
     * @returns `true` if the subject is a concept scheme, `false` otherwise.
     */
    isConceptScheme(graphUris: string | string[] | undefined, subjectUri: string): boolean {
        if (subjectUri) {
            const s = n3.DataFactory.namedNode(subjectUri);

            for (let _ of this.store.match(graphUris, s, rdf.type, skos.ConceptScheme)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get all broader concepts up to and including a concept scheme.
     * @param graphUris URIs of the graphs to search for concepts.
     * @param subjectUri URI of a concept.
     */
    getConceptSchemePath(graphUris: string | string[] | undefined, subjectUri: string): string[] {
        return this._getConceptSchemePath(graphUris, subjectUri, [], new Set<string>());
    }

    /**
     * Recursively find the first path from a given class to a root class.
     * @param subjectUri URI of a class.
     * @param path The current class path.
     * @param backtrack Set of URIs that have already been visited.
     * @returns The first path that is found from the given class to a root class.
     */
    private _getConceptSchemePath(graphUris: string | string[] | undefined, subjectUri: string, path: string[], backtrack: Set<string>): string[] {
        const broaderConcepts = this.getBroaderConcepts(graphUris, subjectUri);

        for (let o of broaderConcepts.filter(o => !backtrack.has(o))) {
            return this._getConceptSchemePath(graphUris, o, [...path, o], backtrack);
        }

        return path;
    }
}