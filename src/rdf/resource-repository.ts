import * as n3 from "n3";

/**
 * A repository for retrieving resources from graphs.
 */
export class ResourceRepository {
    constructor(public readonly store: n3.Store) { }

    /**
     * Indicate if a given URI exists as the subject of a triple in the graph.
     * @returns true if the URI is a subject, false otherwise.
     */
    hasSubject(uri: string): boolean {
        const s = n3.DataFactory.namedNode(uri);

        for (let q of this.store.match(s)) {
            // This could be much faster if we had access to the graphs defined in the store.
            // Sadly, the API doesn't provide a way retrieve them.
            if(!q.graph.value.endsWith("inference")) {
                return true;
            }
        }

        return false;
    }
}