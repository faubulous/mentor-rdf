import { LOB } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { Store } from "./store";
import { VocabularyRepository } from "./vocabulary-repository";
import { RdfsReasoner } from "./reasoners/rdfs-reasoner";

// See: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
jest.useFakeTimers();

describe("ConceptRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new RdfsReasoner());

    /**
     * The repository under test.
     */
    const repository = new VocabularyRepository(store);

    let lob: string;

    beforeAll(async () => {
        lob = await loadFile(store, 'src/rdf/tests/vocabularies/lob.ttl');
    });

    it('can get all concepts', () => {
        let actual = repository.getConcepts(lob);

        expect(actual.length).toEqual(1426);
    });

    it('can get all concept schemes', () => {
        let expected = ['http://w3id.org/lob/'];
        let actual = repository.getConceptSchemes(lob);

        expect(actual).toEqual(expected);

        actual = repository.getNarrowerConcepts(lob);

        expect(actual).toEqual(expected);
    });

    it('can indicate if a subject is a concept scheme', () => {
        let actual = repository.isConceptScheme(lob, 'http://w3id.org/lob/');

        expect(actual).toBeTruthy();

        actual = repository.isConceptScheme(lob, LOB._3417);

        expect(actual).toBeFalsy();
    });

    it('can get all broader concepts', () => {
        let expected = [LOB._3417];
        let actual = repository.getBroaderConcepts(lob, LOB._3419);

        expect(actual).toEqual(expected);

        expected = [LOB._3777];
        actual = repository.getBroaderConcepts(lob, LOB._3779);

        expect(actual).toEqual(expected);
    });

    it('can check if a concept has broader concepts', () => {
        let actual = repository.hasBroaderConcepts(lob, LOB._3419);

        expect(actual).toBeTruthy();

        actual = repository.hasBroaderConcepts(lob, 'http://w3id.org/lob/');

        expect(actual).toBeFalsy();
    });

    it('can get all narrower concepts', () => {
        let expected = [
            LOB._2270,
            LOB._2272,
            LOB._2277,
            LOB._2281,
            LOB._2283,
            LOB._3299,
            LOB._3417,
            LOB._3431
        ];
        let actual = repository.getNarrowerConcepts(lob, 'http://w3id.org/lob/').sort();

        expect(actual).toEqual(expected);

        expected = [
            LOB._1326,
            LOB._1388,
            LOB._3637,
            LOB._3791,
            LOB._4075,
            LOB._4089,
            LOB._4539
        ];
        actual = repository.getNarrowerConcepts(lob, LOB._3299).sort();
    });

    it('can check if a concept has narrower concepts', () => {
        let actual = repository.hasNarrowerConcepts(lob, 'http://w3id.org/lob/');

        expect(actual).toBeTruthy();

        actual = repository.hasNarrowerConcepts(lob, LOB._3299);

        expect(actual).toBeTruthy();

        actual = repository.hasNarrowerConcepts(lob, LOB._3779);

        expect(actual).toBeFalsy();
    });

    it('can check if a concept is a narrower concept of another concept', () => {
        let actual = repository.isNarrowerConceptOf(lob, LOB._3779, LOB._3417);

        expect(actual).toBeTruthy();

        actual = repository.isNarrowerConceptOf(lob, LOB._3417, LOB._3779);

        expect(actual).toBeFalsy();

        actual = repository.isNarrowerConceptOf(lob, LOB._3779, LOB._3299);

        expect(actual).toBeFalsy();
    });

    it('does not classify concepts and concept schemes as named individuals', () => {
        let actual = repository.getIndividuals(lob);
        let expected: string[] = [];

        expect(actual).toEqual(expected);

        actual = repository.getIndividuals(lob, undefined);
        expected = [];

        expect(actual).toEqual(expected);

        actual = repository.getIndividuals(lob, undefined, { notDefinedBy: [] });
        expected = [];

        expect(actual).toEqual(expected);
    });
});