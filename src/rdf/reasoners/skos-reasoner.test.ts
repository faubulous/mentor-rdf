import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { SkosReasoner } from "./skos-reasoner";
import { VocabularyRepository } from "../vocabulary-repository";
import { rdf, skos } from "../../ontologies";
import { dataFactory } from "../data-factory";

const { namedNode } = dataFactory;

describe("SkosReasoner", () => {
    /**
     * The reasoner under test.
     */
    const reasoner = new SkosReasoner();

    /**
     * The RDF triple store.
     */
    const store = new Store(reasoner);

    /**
     * The repository used to query the store.
     */
    const repository = new VocabularyRepository(store);

    let collection: string;
    let collectionInScheme: string;

    /**
     * Indicates whether a resource was inferred to be a `skos:Concept` in a graph.
     * @param graphUri The URI of the graph that was loaded.
     * @param subjectUri The URI of the resource.
     */
    const isInferredConcept = (graphUri: string, subjectUri: string) => {
        const inferenceGraphUri = reasoner.targetUriGenerator.getGraphUri(graphUri);

        return [...store.matchAll(inferenceGraphUri, namedNode(subjectUri), rdf.type, skos.Concept)].length > 0;
    };

    beforeAll(async () => {
        collection = await loadFile(store, 'src/rdf/tests/cases/valid-collection.ttl');
        collectionInScheme = await loadFile(store, 'src/rdf/tests/cases/valid-collection-in-scheme.ttl');
    });

    it("should assert implicitly defined concepts", async () => {
        const expected = [
            "http://example.org/concept1",
            "http://example.org/concept2",
            "http://example.org/concept3"
        ];
        const actual = [...repository.getConcepts(collection)].sort();

        expect(actual).toEqual(expected);
    });

    it("should infer the subjects of skos:inScheme to be concepts", () => {
        expect(isInferredConcept(collectionInScheme, "http://example.org/Seniors")).toBe(true);
    });

    it("should not infer collections in a concept scheme to be concepts", () => {
        expect(isInferredConcept(collectionInScheme, "http://example.org/Audience")).toBe(false);
        expect(isInferredConcept(collectionInScheme, "http://example.org/AgeGroups")).toBe(false);
        expect(isInferredConcept(collectionInScheme, "http://example.org/Ranking")).toBe(false);

        expect([...repository.getConcepts(collectionInScheme)].sort()).toEqual([
            "http://example.org/Adults",
            "http://example.org/AdultsAudience",
            "http://example.org/Kids",
            "http://example.org/KidsAudience",
            "http://example.org/Seniors"
        ]);
    });

    it("should not use the resources of a previously inferred graph", () => {
        const isolatedReasoner = new SkosReasoner();
        const isolatedStore = new Store(isolatedReasoner);

        isolatedStore.loadTurtle('<http://example.org/x> a <http://www.w3.org/2004/02/skos/core#Collection> .', 'http://example.org/a');
        isolatedStore.loadTurtle('<http://example.org/x> <http://www.w3.org/2004/02/skos/core#inScheme> <http://example.org/Scheme> .', 'http://example.org/b');

        const inferenceGraphUri = isolatedReasoner.targetUriGenerator.getGraphUri('http://example.org/b');
        const types = [...isolatedStore.matchAll(inferenceGraphUri, namedNode('http://example.org/x'), rdf.type, skos.Concept)];

        // The resource is a collection in the first graph only.
        expect(types).toHaveLength(1);
    });
});
