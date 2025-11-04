import * as n3 from "n3";
import { rdf, owl } from "../ontologies";
import { Store } from "./store";
import { PropertyRepository } from "./property-repository";
import { DefinitionQueryOptions } from "./resource-repository";

const { namedNode } = n3.DataFactory;

/**
 * A repository for retrieving classes from graphs.
 */
export class IndividualRepository extends PropertyRepository {
    constructor(store: Store) { super(store); }

    /**
     * Get all classes that have instances or all types of a specific individual.
     * @param graphUris The graph URIs to search.
     * @param subjectUri The URI of a subject for which to get the types (optional).
     * @param options Options for retrieving the individuals.
     * @returns An iterator of all individual types, or all types of a specific individual.
     */
    *getIndividualTypes(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();
        const subject = subjectUri ? namedNode(subjectUri) : null;

        for (const q of this.store.matchAll(graphUris, subject, rdf.type, owl.NamedIndividual)) {
            if (this.skip(graphUris, q.subject, options)) {
                continue;
            }

            // Note: We do not include inferred types here.
            for (const p of this.store.matchAll(graphUris, q.subject, rdf.type, null, false)) {
                if (p.object.equals(owl.NamedIndividual)) {
                    continue;
                }

                if (!yielded.has(p.object.value)) {
                    yielded.add(p.object.value);

                    yield p.object.value;
                }
            }
        }
    }

    /**
     * Get all individuals in the repository.
     * @param typeUri The type of the individuals to get.
     * @param options Options for retrieving the individuals.
     * @returns An iterator of all individuals in the repository.
     */
    *getIndividuals(graphUris: string | string[] | undefined, typeUri?: string, options?: DefinitionQueryOptions): IterableIterator<string> {
        const yielded = new Set<string>();

        for (const q of this.store.matchAll(graphUris, null, rdf.type, owl.NamedIndividual)) {
            if (this.skip(graphUris, q.subject, options)) {
                continue;
            }

            if (!typeUri || this.isInstanceOfType(graphUris, q.subject.value, typeUri)) {
                if (!yielded.has(q.subject.value)) {
                    yielded.add(q.subject.value);
                    
                    yield q.subject.value;
                }
            }
        }
    }

    /**
     * Indicate if the subject is an instance of the type, or of one of its super types.
     * @param subjectUri URI of the subject.
     * @param typeUri URI of the type to check.
     * @returns true if the subject is an instance of the type, or of one of its super types.
     */
    isInstanceOfType(graphUris: string | string[] | undefined, subjectUri: string, typeUri: string): boolean {
        const subject = namedNode(subjectUri);
        const type = namedNode(typeUri);

        for (const q of this.store.matchAll(graphUris, subject, rdf.type, null)) {
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