import { owl } from "../ontologies";
import { IndividualRepository } from "./individual-repository";

/**
 * A repository for retrieving ontologies and ontology concepts from graphs.
 */
export class OntologyRepository extends IndividualRepository {
    /**
     * Get all ontologies in the repository.
     * @returns A list of all ontologies in the repository.
     */
    public getOntologies(): string[] {
        return this.getIndividuals(owl.Ontology.id);
    }
}