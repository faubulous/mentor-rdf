import * as n3 from "n3";
import { Store } from "./store";

/**
 * A repository for retrieving resources from graphs.
 */
export class ResourceRepository {
    /**
     * The RDF triple store.
     */
    readonly store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    /**
     * Get URIs of graphs related to a given graph, such as the inference graph or referenced standard ontology graphs.
     * @param graphUri A graph URI.
     * @param enableInference Indicates if inference should be enabled for the graph.
     */
    getGraphs(graphUri: string, enableInference: boolean = true): string[] {
        let result = [graphUri];

        if (enableInference && this.store.reasoner) {
            result.push(this.store.reasoner.getInferenceGraphUri(graphUri));
        } else if (enableInference && !this.store.reasoner) {
            throw new Error("Cannot enable inference without a reasoner.");
        }

        return result;
    }

    /**
     * Indicate if a given URI exists as the subject of a triple in the graph.
     * @param graphUris URIs of the graphs to search.
     * @param subjectUri URI of the subject to search for.
     * @returns true if the URI is a subject, false otherwise.
     */
    hasSubject(graphUris: string | string[], subjectUri: string, includeInferenced: boolean = false): boolean {
        const s = n3.DataFactory.namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s)) {
            // This could be much faster if we had access to the graphs defined in the store.
            // Sadly, the API doesn't provide a way retrieve them.
            if (!includeInferenced && this.store.reasoner?.isInferenceGraphUri(q.graph.value)) {
                continue;
            }

            return true;
        }

        return false;
    }
}