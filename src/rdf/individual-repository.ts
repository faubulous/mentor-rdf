import * as n3 from "n3";
import { rdf, owl } from "../ontologies";
import { ResourceRepository } from "./resource-repository";

/**
 * A repository for retrieving classes from graphs.
 */
export class IndividualRepository extends ResourceRepository {
    constructor(store: n3.Store) { super(store);}

    /**
     * Get all individuals in the repository.
     * @returns A list of all individuals in the repository.
     */
    getIndividuals(): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(null, rdf.type, owl.NamedIndividual)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }
}