import * as vocabularies from "./vocabularies"
import * as ontologies from "../../ontologies"

describe("Vocabularies", () => {
    it('all standard ontologies are defined', async () => {
        expect(ontologies.owl).toBeDefined();
        expect(ontologies.OWL).toBeDefined();
        expect(ontologies.rdf).toBeDefined();
        expect(ontologies.RDF).toBeDefined();
        expect(ontologies.rdfa).toBeDefined();
        expect(ontologies.RDFA).toBeDefined();
        expect(ontologies.rdfs).toBeDefined();
        expect(ontologies.RDFS).toBeDefined();
        expect(ontologies.sh).toBeDefined();
        expect(ontologies.SH).toBeDefined();
        expect(ontologies.skos).toBeDefined();
        expect(ontologies.SKOS).toBeDefined();
        expect(ontologies.xsd).toBeDefined();
        expect(ontologies.XSD).toBeDefined();
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
});