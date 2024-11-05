import * as vocabularies from "./tests/vocabularies"
import { SCHEMA } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OWL, RDFS, SKOS } from "../ontologies";
import { Store } from "./store";
import { ResourceRepository } from "./resource-repository";
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
     * URI of the Schema.org graph.
     */
    let schema: string;

    /**
     * URI of the CIDOC-CRM graph.
     */
    let cidoc: string;

    beforeAll(async () => {
        schema = await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl');
        cidoc = await loadFile(store, 'src/rdf/tests/vocabularies/cidoc-crm.ttl');
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
        let actual = repository.getLanguageStats(cidoc, undefined);
        let expected: { [key: string]: number } = {
            en: 386,
            de: 299,
            el: 280,
            fr: 280,
            pt: 280,
            ru: 280,
            zh: 295,
        };

        for (let stats of actual) {
            expect(stats.totalCount).toEqual(expected[stats.language]);
        }

        actual = repository.getLanguageStats(cidoc, [RDFS.label]);
        expected = {
            en: 385,
            de: 299,
            el: 280,
            fr: 280,
            pt: 280,
            ru: 280,
            zh: 295,
        };

        for (let stats of actual) {
            expect(stats.totalCount).toEqual(expected[stats.language]);
        }
    });

    it('can indicate the most frequently used language tag', async () => {
        let actual = repository.getPrimaryLanguageTag(cidoc, undefined);
        let expected: string | undefined = 'en';

        expect(actual).toEqual(expected);

        actual = repository.getPrimaryLanguageTag(cidoc, [RDFS.label]);
        expected = 'en'

        expect(actual).toEqual(expected);

        actual = repository.getPrimaryLanguageTag(cidoc, [SKOS.prefLabel]);
        expected = undefined;

        expect(actual).toEqual(expected);
    });
});