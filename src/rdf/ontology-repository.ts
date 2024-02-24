import * as n3 from "n3";
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

    /**
     * Get the version (owl:versionInfo) of an ontology. If the version is a date, it is returned as a string in the format "YYYY-MM-DD".
     * @param graphUris URIs of the graphs to search.
     * @param ontologyUri URI of the ontology.
     * @returns The version of the ontology, or undefined if it is not found.
     */
    public getOntologyVersionInfo(graphUris: string | string[], ontologyUri: string): string | undefined {
        const s = new n3.NamedNode(ontologyUri);

        for (const q of this.store.match(graphUris, s, owl.versionInfo, null)) {
            // If the version is a date, return it in the format "YYYY-MM-DD".
            const match = q.object.value.match(/(\d{4}[\/-]\d{2}[\/-]\d{2})/);

            if(match && match.length > 1) {
                return new Date(match[1]).toISOString().substring(0, 10);
            } else {
                return q.object.value;
            }
        }
    }
}