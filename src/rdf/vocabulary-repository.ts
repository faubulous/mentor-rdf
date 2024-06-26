import * as n3 from "n3";
import { rdf, rdfs, owl, skos } from "../ontologies";
import { Uri } from "./uri";
import { ShapeRepository } from "./shape-repository";

/**
 * A repository for retrieving ontologies and ontology concepts from graphs.
 */
export class VocabularyRepository extends ShapeRepository {
    /**
     * Get all concept schemes in the repository.
     * @param graphUris URIs of the graphs to search.
     * @returns A list of all concept schemes in the repository.
     */
    public getConceptSchemes(graphUris: string | string[] | undefined): string[] {
        const result = new Set<string>();

        for (const q of this.store.match(graphUris, null, rdf.type, skos.ConceptScheme)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    /**
     * Indicates whether the repository contains any concept schemes.
     * @param graphUris URIs of the graphs to search.
     * @returns `true` if the repository contains any concept schemes, `false` otherwise.
     */
    public hasConceptSchemes(graphUris: string | string[] | undefined): boolean {
        return this.getConceptSchemes(graphUris).length > 0;
    }

    /**
     * Get all ontologies in the repository.
     * @param graphUris URIs of the graphs to search.
     * @returns A list of all ontologies in the repository.
     */
    public getOntologies(graphUris: string | string[] | undefined): string[] {
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
     * Indicates whether the repository contains any ontology headers.
     * @param graphUris URIs of the graphs to search.
     * @returns `true` if the repository contains any ontology headers, `false` otherwise.
     */
    public hasOntologies(graphUris: string | string[] | undefined): boolean {
        return this.getOntologies(graphUris).length > 0;
    }

    /**
     * Get the version (owl:versionInfo) of an ontology. If the version is a date, it is returned as a string in the format "YYYY-MM-DD".
     * @param graphUris URIs of the graphs to search.
     * @param ontologyUri URI of the ontology.
     * @returns The version of the ontology, or undefined if it is not found.
     */
    public getOntologyVersionInfo(graphUris: string | string[] | undefined, ontologyUri: string): string | undefined {
        const s = new n3.NamedNode(ontologyUri);

        for (const q of this.store.match(graphUris, s, owl.versionInfo, null)) {
            // If the version is a date, return it in the format "YYYY-MM-DD".
            const match = q.object.value.match(/(\d{4}[\/-]\d{2}[\/-]\d{2})/);

            if (match && match.length > 1) {
                return new Date(match[1]).toISOString().substring(0, 10);
            } else {
                return q.object.value;
            }
        }
    }

    /**
     * Get the sources of definitions for a given graph. These are ontology definitions 
     * or the objects of `rdfs:isDefinedBy` triples. If the rdfs:isDefinedBy object can be
     * matched with an ontology definition, the ontology URI is returned.
     * @param graphUris URIs of the graphs to search.
     * @returns A list of sources of definitions for the given graph.
     */
    public getDefinitionSources(graphUris: string | string[] | undefined, includeOntologies = false): string[] {
        const result = new Set<string>();

        // Load all ontologies in the graph in a normalized form.
        const ontologies: { [key: string]: string } = {};

        // Store the normalized versions of the ontology URI so that we can detect 
        // equality even if different namespace seperators ('#' and '/') are used.
        for (let o of this.getOntologies(graphUris)) {
            const uri = Uri.getNormalizedUri(o);

            ontologies[uri] = o;
        }

        for (const q of this.store.match(graphUris, null, rdfs.isDefinedBy, null)) {
            const s = q.subject as n3.NamedNode;
            const o = q.object as n3.NamedNode;

            if (s.termType != "NamedNode" || o.termType != "NamedNode") {
                continue;
            }

            // Do not include ontologies in the list of sources. However, if there are other
            // terms defined by the object it will be included by subsequent iterations.
            const s_ = Uri.getNormalizedUri(s.value);
            const o_ = Uri.getNormalizedUri(o.value);

            let isOntology = s_ in ontologies;

            if (!isOntology || includeOntologies) {
                if (o_ in ontologies) {
                    result.add(ontologies[o_]);
                } else {
                    result.add(o.value);
                }
            }
        }

        return Array.from(result);
    }
}