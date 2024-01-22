import { owl } from "../ontologies";
import { IndividualRepository } from "./individual-repository";

export class OntologyRepository extends IndividualRepository {
    /**
     * Get all ontologies in the repository.
     * @returns A list of all ontologies in the repository.
     */
    public getOntologies(): string[] {
        return this.getIndividuals(owl.Ontology.id);
    }
}