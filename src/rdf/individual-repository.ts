import * as n3 from "n3";
import { rdf, owl } from "../ontologies";
import { PropertyRepository } from "./property-repository";

/**
 * A repository for retrieving classes from graphs.
 */
export class IndividualRepository extends PropertyRepository {
    constructor(store: n3.Store) { super(store); }

    /**
     * Get all classes that have instances.
     * @returns A list of all types of the individual.
     */
    getIndividualTypes(subjectUri?: string): string[] {
        const result = new Set<string>();
        const subject = subjectUri ? new n3.NamedNode(subjectUri) : null;

        for (const q of this.store.match(subject, rdf.type, owl.NamedIndividual)) {
            const s = q.subject as n3.NamedNode;

            if (s.termType != "NamedNode") {
                continue;
            }

            for (const p of this.store.match(s, rdf.type, null)) {
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
     * @returns A list of all individuals in the repository.
     */
    getIndividuals(typeUri?: string): string[] {
        const result = new Set<string>();
        const type = typeUri ? new n3.NamedNode(typeUri) : owl.NamedIndividual;

        for (const q of this.store.match(null, rdf.type, type)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Indicate if the subject is an instance of the type, or of one of its super types.
     * @param subjectUri URI of the subject.
     * @param typeUri URI of the type to check.
     * @returns true if the subject is an instance of the type, or of one of its super types.
     */
    isInstanceOfType(subjectUri: string, typeUri: string): boolean {
        const subject = new n3.NamedNode(subjectUri);
        const type = new n3.NamedNode(typeUri);

        for (const q of this.store.match(subject, rdf.type, null)) {
            const o = q.object;

            if (o.termType != "NamedNode") {
                continue;
            }

            if(o.equals(type) || this.isSubClassOf(o.value, type.value)) {
                return true;
            }
        }

        return false;
    }
}