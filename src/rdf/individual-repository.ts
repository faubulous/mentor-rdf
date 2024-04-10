import * as n3 from "n3";
import { rdf, owl } from "../ontologies";
import { Store } from "./store";
import { PropertyRepository } from "./property-repository";
import { DefinitionQueryOptions } from "./resource-repository";

/**
 * A repository for retrieving classes from graphs.
 */
export class IndividualRepository extends PropertyRepository {
    constructor(store: Store) { super(store); }

    /**
     * Get all classes that have instances or all types of a specific individual.
     * @param graphUris The graph URIs to search.
     * @param subjectUri The URI of a subject for which to get the types (optional).
     * @returns A list of all individual types, or all types of a specific individual.
     */
    getIndividualTypes(graphUris: string | string[] | undefined, subjectUri?: string): string[] {
        const result = new Set<string>();
        const subject = subjectUri ? new n3.NamedNode(subjectUri) : null;

        for (const q of this.store.match(graphUris, subject, rdf.type, owl.NamedIndividual)) {
            const s = q.subject as n3.NamedNode;

            if (this.skip(graphUris, s)) {
                continue;
            }

            for (const p of this.store.match(graphUris, s, rdf.type, null)) {
                if (p.object.equals(owl.NamedIndividual)) {
                    continue;
                }

                result.add(p.object.value);
            }
        }

        return Array.from(result);
    }

    /**
     * Get all individuals in the repository.
     * @param typeUri The type of the individuals to get.
     * @param options Options for retrieving the individuals.
     * @returns A list of all individuals in the repository.
     */
    getIndividuals(graphUris: string | string[] | undefined, typeUri?: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (const q of this.store.match(graphUris, null, rdf.type, owl.NamedIndividual)) {
            const s = q.subject;

            if (this.skip(graphUris, s, options)) {
                continue;
            }

            if (!typeUri || this.isInstanceOfType(graphUris, s.value, typeUri)) {
                result.add(s.value);
            }
        }

        return Array.from(result);
    }

    /**
     * Indicate if the subject is an instance of the type, or of one of its super types.
     * @param subjectUri URI of the subject.
     * @param typeUri URI of the type to check.
     * @returns true if the subject is an instance of the type, or of one of its super types.
     */
    isInstanceOfType(graphUris: string | string[] | undefined, subjectUri: string, typeUri: string): boolean {
        const subject = new n3.NamedNode(subjectUri);
        const type = new n3.NamedNode(typeUri);

        for (const q of this.store.match(graphUris, subject, rdf.type, null)) {
            const o = q.object;

            if (o.termType != "NamedNode") {
                continue;
            }

            if (o.equals(type) || this.isSubClassOf(graphUris, o.value, type.value)) {
                return true;
            }
        }

        return false;
    }
}