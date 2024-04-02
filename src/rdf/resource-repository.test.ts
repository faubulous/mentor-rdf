import * as vocabularies from "./tests/vocabularies"
import { SCHEMA } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OWL, RDFS } from "../ontologies";
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

    beforeAll(async () => {
        schema = await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl');
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
});