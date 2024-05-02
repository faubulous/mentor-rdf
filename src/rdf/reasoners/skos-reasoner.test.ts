import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { SkosReasoner } from "./skos-reasoner";
import { VocabularyRepository } from "../vocabulary-repository";

describe("SkosReasoner", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new SkosReasoner());

    /**
     * The repository under test.
     */
    const repository = new VocabularyRepository(store);

    let collection: string;

    beforeAll(async () => {
        collection = await loadFile(store, 'src/rdf/tests/cases/valid-collection.ttl');
    });

    it("should assert implicitly defined concepts", async () => {
        const expected = [
            "http://example.org/concept1",
            "http://example.org/concept2",
            "http://example.org/concept3"
        ];
        const actual = repository.getConcepts(collection);

        expect(actual).toEqual(expected);
    });
});