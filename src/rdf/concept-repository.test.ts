import { LOB, MENTOR } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { Store } from "./store";
import { VocabularyRepository } from "./vocabulary-repository";
import { RdfsReasoner } from "./reasoners/rdfs-reasoner";
import { vi } from "vitest";

// See: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
vi.useFakeTimers();

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
    let nested: string;
    let collectionCycle: string;
    let cycle: string;
    let schemes: string;

    beforeAll(async () => {
        lob = await loadFile(store, 'src/rdf/tests/vocabularies/lob.ttl');
        unesco = await loadFile(store, 'src/rdf/tests/vocabularies/unesco.ttl');
        collection = await loadFile(store, 'src/rdf/tests/cases/valid-collection.ttl');
        nested = await loadFile(store, 'src/rdf/tests/cases/valid-nested-collection.ttl');
        collectionCycle = await loadFile(store, 'src/rdf/tests/cases/valid-collection-cycle.ttl');
        cycle = await loadFile(store, 'src/rdf/tests/cases/valid-concept-cycle.ttl');
        schemes = await loadFile(store, 'src/rdf/tests/cases/valid-multi-scheme.ttl');
    });

    /**
     * Get all collections of a graph that are reachable from its root collections.
     * @param graphUri URI of the graph to search for collections.
     * @returns An array of URIs of the reachable collections.
     */
    function getReachableCollections(graphUri: string): string[] {
        const stack = [...repository.getRootCollections(graphUri)];
        const reachable = new Set<string>(stack);

        while (stack.length) {
            const current = stack.pop()!;

            for (const c of repository.getSubCollections(graphUri, current)) {
                if (!reachable.has(c)) {
                    reachable.add(c);

                    stack.push(c);
                }
            }
        }

        return [...reachable];
    }

    it('can get all concepts', () => {
        let actual = [...repository.getConcepts(lob)];

        expect(actual.length).toEqual(1426);
    });

    it('can get all concept schemes', () => {
        let expected = ['http://w3id.org/lob/'];
        let actual = [...repository.getConceptSchemes(lob)];

        expect(actual).toEqual(expected);

        actual = [...repository.getNarrowerConcepts(lob)];

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
        let actual = [...repository.getBroaderConcepts(lob, LOB._3419)];

        expect(actual).toEqual(expected);

        expected = [LOB._3777];
        actual = [...repository.getBroaderConcepts(lob, LOB._3779)];

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
        let actual = [...repository.getNarrowerConcepts(lob, 'http://w3id.org/lob/')].sort();

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
        actual = [...repository.getNarrowerConcepts(lob, LOB._3299)].sort();
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
        let actual = [...repository.getIndividuals(lob)];
        let expected: string[] = [];

        expect(actual).toEqual(expected);

        actual = [...repository.getIndividuals(lob, undefined)];
        expected = [];

        expect(actual).toEqual(expected);

        actual = [...repository.getIndividuals(lob, undefined, { notDefinedBy: new Set([]) })];
        expected = [];

        expect(actual).toEqual(expected);
    });

    it('can get all collections', () => {
        let actual = [...repository.getCollections(unesco)].sort();
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

        actual = [...repository.getCollections(collection)].sort();
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

    it('can indicate if a concept is of a concept scheme', () => {
        expect(repository.isConceptOfScheme(schemes, "http://example.org/group--root", "http://example.org/GroupScheme")).toBeTruthy();
        expect(repository.isConceptOfScheme(schemes, "http://example.org/group--installation", "http://example.org/GroupScheme")).toBeTruthy();

        // The task is nested below a concept of the group scheme, but it is not of that scheme.
        expect(repository.isConceptOfScheme(schemes, "http://example.org/task--install-foundation", "http://example.org/GroupScheme")).toBeFalsy();
        expect(repository.isConceptOfScheme(schemes, "http://example.org/task--install-foundation", "http://example.org/TaskScheme")).toBeTruthy();

        // The concept has no skos:inScheme property at all.
        expect(repository.isConceptOfScheme(schemes, "http://example.org/scope--offshore-deep", "http://example.org/ScopeScheme")).toBeFalsy();

        expect(repository.isConceptOfScheme(schemes, "http://example.org/DoesNotExist", "http://example.org/ScopeScheme")).toBeFalsy();
    });

    it('can get the concepts of a concept scheme', () => {
        expect([...repository.getConceptsOfScheme(schemes, "http://example.org/GroupScheme")].sort()).toEqual([
            "http://example.org/group--downtime",
            "http://example.org/group--installation",
            "http://example.org/group--root"
        ]);

        // The unscoped concept is not returned, the nested task is.
        expect([...repository.getConceptsOfScheme(schemes, "http://example.org/ScopeScheme")].sort()).toEqual([
            "http://example.org/scope--offshore",
            "http://example.org/scope--root"
        ]);

        expect([...repository.getConceptsOfScheme(schemes, "http://example.org/TaskScheme")].length).toEqual(5);
    });

    it('can get the top concepts of a concept scheme', () => {
        // The other concepts of the scheme are nested below the root concept.
        expect([...repository.getTopConcepts(schemes, "http://example.org/GroupScheme")]).toEqual([
            "http://example.org/group--root"
        ]);

        // The tasks are of the task scheme but their broader concepts are of the group scheme,
        // so they are top concepts of the scheme that they are associated with.
        expect([...repository.getTopConcepts(schemes, "http://example.org/TaskScheme")].sort()).toEqual([
            "http://example.org/task--install-foundation",
            "http://example.org/task--install-platform",
            "http://example.org/task--root",
            "http://example.org/task--wait-on-weather"
        ]);

        // An unscoped concept never becomes a top concept of a scheme.
        expect([...repository.getTopConcepts(schemes, "http://example.org/ScopeScheme")]).toEqual([
            "http://example.org/scope--root"
        ]);

        expect([...repository.getTopConcepts(schemes, "http://example.org/StreamScheme")]).toEqual([
            "http://example.org/stream--root"
        ]);

        // A concept that is its own broader concept remains a top concept.
        expect([...repository.getTopConcepts(cycle, "http://example.org/CycleScheme")].sort()).toEqual([
            "http://example.org/ConceptA",
            "http://example.org/RecursiveConcept"
        ]);
    });

    it('can get all concepts of a concept scheme', () => {
        expect([...repository.getAllConceptsInScheme(schemes, "http://example.org/GroupScheme")].sort()).toEqual([
            "http://example.org/group--downtime",
            "http://example.org/group--installation",
            "http://example.org/group--root"
        ]);

        // The nested task of the same scheme is reached, the tasks of other schemes are not.
        expect([...repository.getAllConceptsInScheme(schemes, "http://example.org/TaskScheme")].length).toEqual(5);

        // The unscoped concept is displayed below the scheme it is reached from.
        expect([...repository.getAllConceptsInScheme(schemes, "http://example.org/ScopeScheme")].sort()).toEqual([
            "http://example.org/scope--offshore",
            "http://example.org/scope--offshore-deep",
            "http://example.org/scope--root"
        ]);

        expect([...repository.getAllConceptsInScheme(schemes, "http://example.org/StreamScheme")].length).toEqual(3);

        // Every concept of the document is accounted for by exactly one scheme.
        const counted = [...repository.getConceptSchemes(schemes)]
            .reduce((total, s) => total + [...repository.getAllConceptsInScheme(schemes, s)].length, 0);

        expect(counted).toEqual([...repository.getConcepts(schemes)].length);

        // The traversal terminates on cyclic narrower concepts.
        expect([...repository.getAllConceptsInScheme(cycle, "http://example.org/CycleScheme")].length).toEqual(4);

        // A single scheme vocabulary reaches all of its concepts.
        expect([...repository.getAllConceptsInScheme(lob, "http://w3id.org/lob/")].length)
            .toEqual([...repository.getConcepts(lob)].length);
    });

    it('can filter narrower concepts by concept scheme', () => {
        const groupScheme = "http://example.org/GroupScheme";
        const installation = "http://example.org/group--installation";

        // Without the option the tasks of the other scheme are returned.
        expect([...repository.getNarrowerConcepts(schemes, installation)].sort()).toEqual([
            "http://example.org/task--install-foundation",
            "http://example.org/task--install-platform"
        ]);

        // With the option they are excluded, because they are of a different scheme.
        expect([...repository.getNarrowerConcepts(schemes, installation, { inScheme: groupScheme })]).toEqual([]);

        // An unscoped narrower concept is not excluded.
        expect([...repository.getNarrowerConcepts(schemes, "http://example.org/scope--offshore", { inScheme: "http://example.org/ScopeScheme" })]).toEqual([
            "http://example.org/scope--offshore-deep"
        ]);

        // A concept scheme subject yields the top concepts of that scheme.
        expect([...repository.getNarrowerConcepts(schemes, groupScheme)]).toEqual([
            "http://example.org/group--root"
        ]);
    });

    it('can indicate if a subject is a collection', () => {
        expect(repository.isCollection(nested, "http://example.org/Domains")).toBeTruthy();
        expect(repository.isCollection(nested, "http://example.org/Domain1")).toBeTruthy();
        expect(repository.isCollection(nested, "http://example.org/MicroThesaurus2")).toBeTruthy();
        expect(repository.isCollection(collection, "http://example.org/OrderedCollection")).toBeTruthy();
        expect(repository.isCollection(unesco, "http://vocabularies.unesco.org/thesaurus/mt1.05")).toBeTruthy();

        expect(repository.isCollection(nested, "http://example.org/concept1")).toBeFalsy();
        expect(repository.isCollection(nested, "http://example.org/Scheme")).toBeFalsy();
        expect(repository.isCollection(nested, "http://example.org/DoesNotExist")).toBeFalsy();
        expect(repository.isCollection(unesco, "http://vocabularies.unesco.org/thesaurus/concept1049")).toBeFalsy();
    });

    it('can get all super collections', () => {
        expect([...repository.getSuperCollections(nested, "http://example.org/Domain1")]).toEqual([
            "http://example.org/Domains"
        ]);

        expect([...repository.getSuperCollections(nested, "http://example.org/Domain2")]).toEqual([
            "http://example.org/Domains"
        ]);

        // The collection is referenced by the first node of an ordered member list.
        expect([...repository.getSuperCollections(nested, "http://example.org/MicroThesaurus1")]).toEqual([
            "http://example.org/Domain1"
        ]);

        // The collection is referenced by the last node of an ordered member list.
        expect([...repository.getSuperCollections(nested, "http://example.org/MicroThesaurus2")]).toEqual([
            "http://example.org/Domain1"
        ]);

        // The concept is a member of one collection via skos:member and of one via skos:memberList.
        expect([...repository.getSuperCollections(nested, "http://example.org/concept2")].sort()).toEqual([
            "http://example.org/Domain1",
            "http://example.org/MicroThesaurus1"
        ]);

        expect([...repository.getSuperCollections(nested, "http://example.org/Domains")]).toEqual([]);
        expect([...repository.getSuperCollections(nested, "http://example.org/Glossary")]).toEqual([]);

        expect([...repository.getSuperCollections(unesco, "http://vocabularies.unesco.org/thesaurus/mt1.05")]).toEqual([
            "http://vocabularies.unesco.org/thesaurus/domain1"
        ]);

        expect([...repository.getSuperCollections(unesco, "http://vocabularies.unesco.org/thesaurus/domain1")]).toEqual([]);
    });

    it('can indicate if a collection has super collections', () => {
        expect(repository.hasSuperCollections(nested, "http://example.org/Domain1")).toBeTruthy();
        expect(repository.hasSuperCollections(nested, "http://example.org/MicroThesaurus2")).toBeTruthy();
        expect(repository.hasSuperCollections(unesco, "http://vocabularies.unesco.org/thesaurus/mt2.85")).toBeTruthy();

        expect(repository.hasSuperCollections(nested, "http://example.org/Domains")).toBeFalsy();
        expect(repository.hasSuperCollections(nested, "http://example.org/Glossary")).toBeFalsy();
        expect(repository.hasSuperCollections(unesco, "http://vocabularies.unesco.org/thesaurus/domain7")).toBeFalsy();
    });

    it('can get all sub collections', () => {
        // The concept member of the collection is not returned.
        expect([...repository.getSubCollections(nested, "http://example.org/Domains")].sort()).toEqual([
            "http://example.org/Domain1",
            "http://example.org/Domain2"
        ]);

        // The order of the members of an ordered collection is preserved.
        expect([...repository.getSubCollections(nested, "http://example.org/Domain1")]).toEqual([
            "http://example.org/MicroThesaurus1",
            "http://example.org/MicroThesaurus2"
        ]);

        expect([...repository.getSubCollections(nested, "http://example.org/Domain2")]).toEqual([]);
        expect([...repository.getSubCollections(nested, "http://example.org/MicroThesaurus1")]).toEqual([]);
        expect([...repository.getSubCollections(nested, "http://example.org/Glossary")]).toEqual([]);

        expect([...repository.getSubCollections(unesco, "http://vocabularies.unesco.org/thesaurus/domain1")].length).toEqual(14);
        expect([...repository.getSubCollections(unesco, "http://vocabularies.unesco.org/thesaurus/mt1.05")]).toEqual([]);

        // Without a subject the root collections are returned.
        expect([...repository.getSubCollections(nested)].sort()).toEqual([...repository.getRootCollections(nested)].sort());
    });

    it('can indicate if a collection has sub collections', () => {
        expect(repository.hasSubCollections(nested, "http://example.org/Domains")).toBeTruthy();
        expect(repository.hasSubCollections(nested, "http://example.org/Domain1")).toBeTruthy();
        expect(repository.hasSubCollections(unesco, "http://vocabularies.unesco.org/thesaurus/domain3")).toBeTruthy();

        expect(repository.hasSubCollections(nested, "http://example.org/Domain2")).toBeFalsy();
        expect(repository.hasSubCollections(nested, "http://example.org/Glossary")).toBeFalsy();
        expect(repository.hasSubCollections(unesco, "http://vocabularies.unesco.org/thesaurus/mt3.05")).toBeFalsy();
    });

    it('can get all root collections', () => {
        expect([...repository.getRootCollections(nested)].sort()).toEqual([
            "http://example.org/Domains",
            "http://example.org/Glossary"
        ]);

        // Neither of the collections of the flat test case is nested in the other.
        expect([...repository.getRootCollections(collection)].sort()).toEqual([
            "http://example.org/OrderedCollection",
            "http://example.org/UnorderedCollection"
        ]);

        // The microthesauri are members of the domains and are thus not returned.
        expect([...repository.getRootCollections(unesco)].sort()).toEqual([
            "http://vocabularies.unesco.org/thesaurus/domain1",
            "http://vocabularies.unesco.org/thesaurus/domain2",
            "http://vocabularies.unesco.org/thesaurus/domain3",
            "http://vocabularies.unesco.org/thesaurus/domain4",
            "http://vocabularies.unesco.org/thesaurus/domain5",
            "http://vocabularies.unesco.org/thesaurus/domain6",
            "http://vocabularies.unesco.org/thesaurus/domain7"
        ]);
    });

    it('does not lose collections when resolving root collections', () => {
        expect(getReachableCollections(nested).sort()).toEqual([...repository.getCollections(nested)].sort());
        expect(getReachableCollections(collection).sort()).toEqual([...repository.getCollections(collection)].sort());
        expect(getReachableCollections(collectionCycle).sort()).toEqual([...repository.getCollections(collectionCycle)].sort());
        expect(getReachableCollections(unesco).sort()).toEqual([...repository.getCollections(unesco)].sort());
    });

    it('can filter collections by concept scheme', () => {
        const scheme = "http://example.org/Scheme";

        expect([...repository.getCollections(nested, { inScheme: scheme })].sort()).toEqual([
            "http://example.org/Domain1",
            "http://example.org/Domain2",
            "http://example.org/Domains",
            "http://example.org/MicroThesaurus1",
            "http://example.org/MicroThesaurus2"
        ]);

        expect([...repository.getCollections(nested, { inScheme: null })]).toEqual([
            "http://example.org/Glossary"
        ]);

        expect([...repository.getRootCollections(nested, { inScheme: scheme })]).toEqual([
            "http://example.org/Domains"
        ]);

        expect([...repository.getRootCollections(nested, { inScheme: null })]).toEqual([
            "http://example.org/Glossary"
        ]);

        // Collections that are not associated with the given scheme are not returned as sub collections.
        expect([...repository.getSubCollections(nested, "http://example.org/Domains", { inScheme: null })]).toEqual([]);

        expect([...repository.getCollections(collection, { inScheme: null })].sort()).toEqual([
            "http://example.org/OrderedCollection",
            "http://example.org/UnorderedCollection"
        ]);
    });

    it('can get the path to the root collection', () => {
        expect(repository.getRootCollectionPath(nested, "http://example.org/MicroThesaurus2")).toEqual([
            "http://example.org/Domain1",
            "http://example.org/Domains"
        ]);

        expect(repository.getRootCollectionPath(nested, "http://example.org/Domain2")).toEqual([
            "http://example.org/Domains"
        ]);

        expect(repository.getRootCollectionPath(nested, "http://example.org/Domains")).toEqual([]);
        expect(repository.getRootCollectionPath(nested, "http://example.org/Glossary")).toEqual([]);

        expect(repository.getRootCollectionPath(unesco, "http://vocabularies.unesco.org/thesaurus/mt6.85")).toEqual([
            "http://vocabularies.unesco.org/thesaurus/domain6"
        ]);

        expect(repository.getRootCollectionPath(unesco, "http://vocabularies.unesco.org/thesaurus/domain6")).toEqual([]);
    });

    it('can handle cyclic collection definitions', () => {
        const a = "http://example.org/CollectionA";
        const b = "http://example.org/CollectionB";
        const recursive = "http://example.org/RecursiveCollection";

        // A collection that is a member of itself is its own super and sub collection.
        expect([...repository.getSuperCollections(collectionCycle, recursive)]).toEqual([recursive]);
        expect([...repository.getSubCollections(collectionCycle, recursive)]).toEqual([recursive]);

        // But self membership does not remove it from the root collections.
        expect(repository.hasSuperCollections(collectionCycle, recursive)).toBeFalsy();
        expect(repository.getRootCollectionPath(collectionCycle, recursive)).toEqual([]);

        // The collections of a cycle are super collections of each other.
        expect([...repository.getSuperCollections(collectionCycle, a)]).toEqual([b]);
        expect([...repository.getSuperCollections(collectionCycle, b)]).toEqual([a]);
        expect(repository.hasSuperCollections(collectionCycle, a)).toBeTruthy();
        expect(repository.hasSuperCollections(collectionCycle, b)).toBeTruthy();

        // The path resolution terminates and does not repeat collections.
        expect(repository.getRootCollectionPath(collectionCycle, a)).toEqual([b]);
        expect(repository.getRootCollectionPath(collectionCycle, b)).toEqual([a]);

        const actual = [...repository.getRootCollections(collectionCycle)];

        // The self referencing collection is a root collection.
        expect(actual).toContain(recursive);

        // Exactly one collection of the cycle is returned so that neither of them is lost.
        expect(actual.filter(c => c === a || c === b).length).toEqual(1);
        expect(actual.length).toEqual(2);
    });

    it('can handle cyclic concept definitions', () => {
        let actual = [...repository.getNarrowerConcepts(cycle, MENTOR.RecursiveConcept)];
        let expected = [MENTOR.RecursiveConcept];

        expect(actual).toEqual(expected);

        actual = [...repository.getBroaderConcepts(cycle, MENTOR.RecursiveConcept)];
        expected = [MENTOR.RecursiveConcept];

        expect(actual).toEqual(expected);
    });
});