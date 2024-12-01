import * as vocabularies from "./tests/vocabularies"
import { SCHEMA } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OWL, RDFS } from "../ontologies";
import { Store } from "./store";
import { PredicateUsageStats, ResourceRepository } from "./resource-repository";
import { OwlReasoner } from "./reasoners/owl-reasoner";

describe("ResourceRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new ResourceRepository(store);

    /**
     * URI of the Schema.org ontology.
     */
    let schema: string;

    /**
     * URI of the CIDOC-CRM ontology.
     */
    let cidoc: string;

    /**
     * URI of the Gist ontology.
     */
    let gist: string;

    /**
     * URI of the Mentor i18n test ontology.
     */
    let i18n: string;

    beforeAll(async () => {
        schema = await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl');
        cidoc = await loadFile(store, 'src/rdf/tests/vocabularies/cidoc-crm.ttl');
        gist = await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl');
        i18n = await loadFile(store, 'src/rdf/tests/vocabularies/i18n.ttl');
    });

    it('all test vocabularies are defined', async () => {
        expect(vocabularies.emmo).toBeDefined();
        expect(vocabularies.EMMO).toBeDefined();
        expect(vocabularies.FIBO_AGENTS).toBeDefined();
        expect(vocabularies.fibo_agents).toBeDefined();
        expect(vocabularies.FIBO_ORGANIZATION).toBeDefined();
        expect(vocabularies.fibo_organization).toBeDefined();
        expect(vocabularies.gist).toBeDefined();
        expect(vocabularies.GIST).toBeDefined();
        expect(vocabularies.lob).toBeDefined();
        expect(vocabularies.LOB).toBeDefined();
        expect(vocabularies.multi).toBeDefined();
        expect(vocabularies.MULTI).toBeDefined();
        expect(vocabularies.owl).toBeDefined();
        expect(vocabularies.OWL).toBeDefined();
        expect(vocabularies.prov_o).toBeDefined();
        expect(vocabularies.PROV_O).toBeDefined();
        expect(vocabularies.schema_nq).toBeDefined();
        expect(vocabularies.SCHEMA_NQ).toBeDefined();
        expect(vocabularies.schema_nt).toBeDefined();
        expect(vocabularies.SCHEMA_NT).toBeDefined();
        expect(vocabularies.schema).toBeDefined();
        expect(vocabularies.SCHEMA).toBeDefined();
        expect(vocabularies.skos).toBeDefined();
        expect(vocabularies.SKOS).toBeDefined();
    });

    it('can indicate subject definitions', async () => {
        let expected = true;
        let actual = repository.hasSubject(schema, SCHEMA.Thing);

        expect(actual).toEqual(expected);

        // This is referenced but not described as a subject.
        actual = repository.hasSubject(schema, RDFS.Class);
        expected = false;

        expect(actual).toEqual(expected);

        // This is not referenced at all.
        actual = repository.hasSubject(schema, OWL.Thing);
        expected = false;

        expect(actual).toEqual(expected);
    });

    it('can retrieve the literal language tag stats', async () => {
        let actual = repository.getLanguageTagUsageStats(cidoc);
        let expected = {
            en: 386,
            de: 299,
            el: 280,
            fr: 280,
            pt: 280,
            ru: 280,
            zh: 295,
        };

        expect(actual).toEqual(expected);
    });

    it('can indicate the most frequently used language tag', async () => {
        let actual = repository.getMostFrequentLanguageTag(cidoc);
        let expected: string | undefined = 'en';

        expect(actual).toEqual(expected);

        actual = repository.getMostFrequentLanguageTag(cidoc);
        expected = 'en'

        expect(actual).toEqual(expected);

        actual = repository.getMostFrequentLanguageTag(gist);
        expected = undefined;

        expect(actual).toEqual(expected);
    });

    it('can provide statistics about the usage of predicates in the graph', async () => {
        let actual = repository.getPredicateUsageStats(i18n, [RDFS.label, RDFS.comment]);
        let expected: PredicateUsageStats = {
            "http://www.w3.org/2000/01/rdf-schema#label": {
                predicateIri: "http://www.w3.org/2000/01/rdf-schema#label",
                usageFrequency: 6,
                subjects: new Set([
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class1",
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class2",
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class3",
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class4",
                ]),
                languageTags: {
                    de: 2,
                    en: 2,
                    fr: 1,
                    "": 1,
                },
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
                predicateIri: "http://www.w3.org/2000/01/rdf-schema#comment",
                usageFrequency: 6,
                subjects: new Set([
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class1",
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class2",
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class3",
                    "file://src/rdf/tests/vocabularies/i18n.ttl#Class4",
                ]),
                languageTags: {
                    de: 2,
                    en: 3,
                    fr: 1,
                },
            },
        };

        expect(actual).toEqual(expected);
    });
});