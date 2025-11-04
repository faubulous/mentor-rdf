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

    let gist: string;
    let owl: string;
    let schema: string;
    let lob: string;
    let prov: string;
    let emmo: string;
    let blank: string;
    let org: string;

    beforeAll(async () => {
        gist = await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl');
        schema = await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl');
        owl = await loadFile(store, 'src/rdf/tests/vocabularies/owl.ttl');
        lob = await loadFile(store, 'src/rdf/tests/vocabularies/lob.ttl');
        prov = await loadFile(store, 'src/rdf/tests/vocabularies/prov-o.ttl');
        emmo = await loadFile(store, 'src/rdf/tests/vocabularies/emmo.ttl');
        blank = await loadFile(store, 'src/rdf/tests/cases/valid-blanknodes.ttl');
        org = await loadFile(store, 'src/rdf/tests/vocabularies/org.ttl');
    });

    it('can retrieve all concept scheme definitions', async () => {
        let expected = ['http://w3id.org/lob/'];
        let actual = [...repository.getConceptSchemes(lob)].sort();

        expect(actual).toEqual(expected);

        // Concept schemes which are defined as blank nodes are explicitly ignored.
        expected = [];
        actual = [...repository.getConceptSchemes(blank)];

        expect(actual).toEqual(expected);
    });

    it('can retrieve all ontology definitions', async () => {
        let expected = [GIST.gistCore];
        let actual = [...repository.getOntologies(gist)].sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getOntologies(schema)].sort();

        expect(actual).toEqual(expected);

        expected = ["http://www.w3.org/2002/07/owl#"];
        actual = [...repository.getOntologies(owl)];

        expect(actual).toEqual(expected);

        // Concept schemes which are defined as blank nodes are explicitly ignored.
        expected = [];
        actual = [...repository.getOntologies(blank)];

        expect(actual).toEqual(expected);
    });

    it('can retrieve the version of an ontology', async () => {
        let expected = "2009-11-14";
        let actual = repository.getOntologyVersionInfo(owl, "http://www.w3.org/2002/07/owl#");

        expect(actual).toEqual(expected);

        expected = "2013-04-30";
        actual = repository.getOntologyVersionInfo(prov, "http://www.w3.org/ns/prov-o#");

        expect(actual).toEqual(expected);

        expected = "1.0.0-beta7";
        actual = repository.getOntologyVersionInfo(emmo, "https://w3id.org/emmo");

        expect(actual).toEqual(expected);
    });

    it('can indicate if a vocabulary defines concept schemes', async () => {
        let actual = repository.hasConceptSchemes(lob);

        expect(actual).toBeTruthy();

        actual = repository.hasConceptSchemes(gist);

        expect(actual).toBeFalsy();
    });

    it('can indicate if a vocabulary defines ontologies', async () => {
        let actual = repository.hasOntologies(lob);

        expect(actual).toBeFalsy();

        actual = repository.hasOntologies(gist);

        expect(actual).toBeTruthy();
    });

    it('can retrieve all sources for definitions', async () => {
        let expected = [
            'http://www.w3.org/2002/07/owl#'
        ];
        let actual = [...repository.getDefinitionSources(owl)].sort();

        expect(actual).toEqual(expected);

        expected = [
            'http://www.w3.org/2002/07/owl#',
            'http://www.w3.org/TR/owl2-mapping-to-rdf/',
            'http://www.w3.org/TR/owl2-rdf-based-semantics/',
            'http://www.w3.org/TR/owl2-syntax/'
        ].sort();
        actual = [...repository.getDefinitionSources(owl, true)].sort();

        expect(actual).toEqual(expected);

        expected = [
            'https://w3id.org/emmo',
            'https://w3id.org/emmo/disciplines/chemistry#',
            'https://w3id.org/emmo/disciplines/computerscience#',
            'https://w3id.org/emmo/disciplines/isq#',
            'https://w3id.org/emmo/disciplines/manufacturing#',
            'https://w3id.org/emmo/disciplines/materials#',
            'https://w3id.org/emmo/disciplines/math#',
            'https://w3id.org/emmo/disciplines/metrology#',
            'https://w3id.org/emmo/disciplines/models#',
            'https://w3id.org/emmo/disciplines/periodictable#',
            'https://w3id.org/emmo/disciplines/units/coherentsiunits#',
            'https://w3id.org/emmo/disciplines/units/noncoherentsiunits#',
            'https://w3id.org/emmo/disciplines/units/prefixedsiunits#',
            'https://w3id.org/emmo/disciplines/units/siacceptedunits#',
            'https://w3id.org/emmo/disciplines/units/sidimensionalunits#',
            'https://w3id.org/emmo/disciplines/units/siunits#',
            'https://w3id.org/emmo/mereocausality#',
            'https://w3id.org/emmo/multiperspective/information#',
            'https://w3id.org/emmo/multiperspective/persholistic#',
            'https://w3id.org/emmo/multiperspective/properties#',
            'https://w3id.org/emmo/multiperspective/symbolic#',
            'https://w3id.org/emmo/multiperspective/workflow#',
            'https://w3id.org/emmo/perspectives/data#',
            'https://w3id.org/emmo/perspectives/holistic#',
            'https://w3id.org/emmo/perspectives/perceptual#',
            'https://w3id.org/emmo/perspectives/persistence#',
            'https://w3id.org/emmo/perspectives/physicalistic#',
            'https://w3id.org/emmo/perspectives/reductionistic#',
            'https://w3id.org/emmo/perspectives/semiotics#',
            'https://w3id.org/emmo/perspectives/standardmodel#',
        ];
        actual = [...repository.getDefinitionSources(emmo)].sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getDefinitionSources(schema)];

        expect(actual).toEqual(expected);

        expected = [
            "http://www.w3.org/ns/org#"
        ];
        actual = [...repository.getDefinitionSources(org)];

        expect(actual).toEqual(expected);
    });
});