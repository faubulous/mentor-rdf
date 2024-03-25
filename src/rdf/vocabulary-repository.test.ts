import { GIST } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { VocabularyRepository } from "./vocabulary-repository";

describe("VocabularyRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new VocabularyRepository(store);

    let gist: string[];
    let owl: string[];
    let schema: string[];
    let lob: string[];

    beforeAll(async () => {
        gist = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl'));
        schema = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl'));
        owl = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/vocabularies/owl.ttl'));
        lob = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/vocabularies/lob.ttl'));
    });

    it('can retrieve all concept scheme definitions', async () => {
        let expected = ['http://w3id.org/lob/'];
        let actual = repository.getConceptSchemes(lob).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve all ontology definitions', async () => {
        let expected = [GIST.gistCore];
        let actual = repository.getOntologies(gist).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getOntologies(schema).sort();

        expect(actual).toEqual(expected);

        expected = ["http://www.w3.org/2002/07/owl#"];
        actual = repository.getOntologies(owl);

        expect(actual).toEqual(expected);
    });

    it('can retrieve the version of an ontology', async () => {
        let expected = "2009-11-14";
        let actual = repository.getOntologyVersionInfo(owl, "http://www.w3.org/2002/07/owl#");

        expect(actual).toEqual(expected);
    });
});