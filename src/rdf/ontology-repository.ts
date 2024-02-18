import { rdf, owl } from "../ontologies";
import { IndividualRepository } from "./individual-repository";

/**
 * A repository for retrieving ontologies and ontology concepts from graphs.
 */
export class OntologyRepository extends IndividualRepository {
    /**
     * Get all ontologies in the repository.
     * @returns A list of all ontologies in the repository.
     */
    public getOntologies(graphUris: string | string[]): string[] {
        const result = new Set<string>();

        for (const q of this.store.match(graphUris, null, rdf.type, owl.Ontology)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }
            
            result.add(s.value);
        }

        return Array.from(result);
    }
}