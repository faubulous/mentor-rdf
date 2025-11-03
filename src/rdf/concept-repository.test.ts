import { LOB, MENTOR } from "./tests/vocabularies";
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
    let unesco: string;
    let collection: string;
    let cycle: string;

    beforeAll(async () => {
        lob = await loadFile(store, 'src/rdf/tests/vocabularies/lob.ttl');
        unesco = await loadFile(store, 'src/rdf/tests/vocabularies/unesco.ttl');
        collection = await loadFile(store, 'src/rdf/tests/cases/valid-collection.ttl');
        cycle = await loadFile(store, 'src/rdf/tests/cases/valid-concept-cycle.ttl');
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

        actual = repository.getIndividuals(lob, undefined, { notDefinedBy: new Set([]) });
        expected = [];

        expect(actual).toEqual(expected);
    });

    it('can get all collections', () => {
        let actual = repository.getCollections(unesco).sort();
        let expected: string[] = [
            "http://vocabularies.unesco.org/thesaurus/domain1",
            "http://vocabularies.unesco.org/thesaurus/mt1.05",
            "http://vocabularies.unesco.org/thesaurus/mt1.10",
            "http://vocabularies.unesco.org/thesaurus/mt1.15",
            "http://vocabularies.unesco.org/thesaurus/mt1.20",
            "http://vocabularies.unesco.org/thesaurus/mt1.25",
            "http://vocabularies.unesco.org/thesaurus/mt1.30",
            "http://vocabularies.unesco.org/thesaurus/mt1.35",
            "http://vocabularies.unesco.org/thesaurus/mt1.40",
            "http://vocabularies.unesco.org/thesaurus/mt1.45",
            "http://vocabularies.unesco.org/thesaurus/mt1.50",
            "http://vocabularies.unesco.org/thesaurus/mt1.55",
            "http://vocabularies.unesco.org/thesaurus/mt1.60",
            "http://vocabularies.unesco.org/thesaurus/mt1.65",
            "http://vocabularies.unesco.org/thesaurus/mt1.70",
            "http://vocabularies.unesco.org/thesaurus/domain2",
            "http://vocabularies.unesco.org/thesaurus/mt2.05",
            "http://vocabularies.unesco.org/thesaurus/mt2.10",
            "http://vocabularies.unesco.org/thesaurus/mt2.15",
            "http://vocabularies.unesco.org/thesaurus/mt2.20",
            "http://vocabularies.unesco.org/thesaurus/mt2.25",
            "http://vocabularies.unesco.org/thesaurus/mt2.30",
            "http://vocabularies.unesco.org/thesaurus/mt2.35",
            "http://vocabularies.unesco.org/thesaurus/mt2.40",
            "http://vocabularies.unesco.org/thesaurus/mt2.45",
            "http://vocabularies.unesco.org/thesaurus/mt2.50",
            "http://vocabularies.unesco.org/thesaurus/mt2.55",
            "http://vocabularies.unesco.org/thesaurus/mt2.60",
            "http://vocabularies.unesco.org/thesaurus/mt2.65",
            "http://vocabularies.unesco.org/thesaurus/mt2.70",
            "http://vocabularies.unesco.org/thesaurus/mt2.75",
            "http://vocabularies.unesco.org/thesaurus/mt2.80",
            "http://vocabularies.unesco.org/thesaurus/mt2.85",
            "http://vocabularies.unesco.org/thesaurus/domain3",
            "http://vocabularies.unesco.org/thesaurus/mt3.05",
            "http://vocabularies.unesco.org/thesaurus/mt3.10",
            "http://vocabularies.unesco.org/thesaurus/mt3.15",
            "http://vocabularies.unesco.org/thesaurus/mt3.20",
            "http://vocabularies.unesco.org/thesaurus/mt3.25",
            "http://vocabularies.unesco.org/thesaurus/mt3.30",
            "http://vocabularies.unesco.org/thesaurus/mt3.35",
            "http://vocabularies.unesco.org/thesaurus/mt3.40",
            "http://vocabularies.unesco.org/thesaurus/mt3.45",
            "http://vocabularies.unesco.org/thesaurus/mt3.50",
            "http://vocabularies.unesco.org/thesaurus/mt3.55",
            "http://vocabularies.unesco.org/thesaurus/mt3.60",
            "http://vocabularies.unesco.org/thesaurus/mt3.65",
            "http://vocabularies.unesco.org/thesaurus/domain4",
            "http://vocabularies.unesco.org/thesaurus/mt4.05",
            "http://vocabularies.unesco.org/thesaurus/mt4.10",
            "http://vocabularies.unesco.org/thesaurus/mt4.15",
            "http://vocabularies.unesco.org/thesaurus/mt4.20",
            "http://vocabularies.unesco.org/thesaurus/mt4.25",
            "http://vocabularies.unesco.org/thesaurus/mt4.30",
            "http://vocabularies.unesco.org/thesaurus/mt4.35",
            "http://vocabularies.unesco.org/thesaurus/mt4.40",
            "http://vocabularies.unesco.org/thesaurus/mt4.45",
            "http://vocabularies.unesco.org/thesaurus/domain5",
            "http://vocabularies.unesco.org/thesaurus/mt5.05",
            "http://vocabularies.unesco.org/thesaurus/mt5.10",
            "http://vocabularies.unesco.org/thesaurus/mt5.15",
            "http://vocabularies.unesco.org/thesaurus/mt5.20",
            "http://vocabularies.unesco.org/thesaurus/mt5.25",
            "http://vocabularies.unesco.org/thesaurus/mt5.30",
            "http://vocabularies.unesco.org/thesaurus/mt5.35",
            "http://vocabularies.unesco.org/thesaurus/mt5.40",
            "http://vocabularies.unesco.org/thesaurus/mt5.45",
            "http://vocabularies.unesco.org/thesaurus/domain6",
            "http://vocabularies.unesco.org/thesaurus/mt6.05",
            "http://vocabularies.unesco.org/thesaurus/mt6.10",
            "http://vocabularies.unesco.org/thesaurus/mt6.15",
            "http://vocabularies.unesco.org/thesaurus/mt6.20",
            "http://vocabularies.unesco.org/thesaurus/mt6.25",
            "http://vocabularies.unesco.org/thesaurus/mt6.30",
            "http://vocabularies.unesco.org/thesaurus/mt6.35",
            "http://vocabularies.unesco.org/thesaurus/mt6.40",
            "http://vocabularies.unesco.org/thesaurus/mt6.45",
            "http://vocabularies.unesco.org/thesaurus/mt6.50",
            "http://vocabularies.unesco.org/thesaurus/mt6.55",
            "http://vocabularies.unesco.org/thesaurus/mt6.60",
            "http://vocabularies.unesco.org/thesaurus/mt6.65",
            "http://vocabularies.unesco.org/thesaurus/mt6.70",
            "http://vocabularies.unesco.org/thesaurus/mt6.75",
            "http://vocabularies.unesco.org/thesaurus/mt6.80",
            "http://vocabularies.unesco.org/thesaurus/mt6.85",
            "http://vocabularies.unesco.org/thesaurus/domain7",
            "http://vocabularies.unesco.org/thesaurus/mt7.45",
            "http://vocabularies.unesco.org/thesaurus/mt7.05",
            "http://vocabularies.unesco.org/thesaurus/mt7.10",
            "http://vocabularies.unesco.org/thesaurus/mt7.15",
            "http://vocabularies.unesco.org/thesaurus/mt7.20",
            "http://vocabularies.unesco.org/thesaurus/mt7.25",
            "http://vocabularies.unesco.org/thesaurus/mt7.30",
            "http://vocabularies.unesco.org/thesaurus/mt7.35",
            "http://vocabularies.unesco.org/thesaurus/mt7.40"
        ].sort();

        expect(actual).toEqual(expected);

        actual = repository.getCollections(collection).sort();
        expected = [
            "http://example.org/OrderedCollection",
            "http://example.org/UnorderedCollection"
        ];

        expect(actual).toEqual(expected);
    });

    it('can get all collection items in order', () => {
        let actual = repository.getCollectionMembers(collection, "http://example.org/OrderedCollection");
        let expected = [
            "http://example.org/concept2",
            "http://example.org/concept1",
            "http://example.org/concept3"
        ];

        expect(actual).toEqual(expected);

        actual = repository.getCollectionMembers(collection, "http://example.org/UnorderedCollection").sort();
        expected = [
            "http://example.org/concept1",
            "http://example.org/concept2",
            "http://example.org/concept3"
        ];

        expect(actual).toEqual(expected);
    });

    it('can indicate if a collection has items', () => {
        let actual = repository.hasCollectionMembers(collection, "http://example.org/OrderedCollection");
        let expected = true;

        expect(actual).toEqual(expected);

        actual = repository.hasCollectionMembers(collection, "http://example.org/UnorderedCollection");
        expected = true;

        expect(actual).toEqual(expected);

        actual = repository.hasCollectionMembers(collection, "http://example.org/NotExistingCollection");
        expected = false;

        expect(actual).toEqual(expected);
    });

    it('can handle cyclic concept definitions', () => {
        let actual = repository.getNarrowerConcepts(cycle, MENTOR.RecursiveConcept);
        let expected = [MENTOR.RecursiveConcept];

        expect(actual).toEqual(expected);

        actual = repository.getBroaderConcepts(cycle, MENTOR.RecursiveConcept);
        expected = [MENTOR.RecursiveConcept];

        expect(actual).toEqual(expected);
    });
});