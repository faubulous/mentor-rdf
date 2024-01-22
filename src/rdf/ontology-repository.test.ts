import { GIST } from "./tests/ontologies";
import { createFromFile } from "./tests/helpers";
import { OntologyRepository } from "./ontology-repository";
import { OwlReasoner } from "./reasoners/owl-reasoner";

describe("OntologyRepository", () => {
    let gist: OntologyRepository;

    let schema: OntologyRepository;

    let owl: OntologyRepository;

    beforeAll(async () => {
        const reasoner = new OwlReasoner();

        let store = await createFromFile('src/rdf/tests/ontologies/gist.ttl', { reasoner });

        gist = new OntologyRepository(store);

        store = await createFromFile('src/rdf/tests/ontologies/schema.ttl', { reasoner });

        schema = new OntologyRepository(store);

        store = await createFromFile('src/rdf/tests/ontologies/owl.ttl', { reasoner });

        owl = new OntologyRepository(store);
    });

    it('can retrieve all ontology definitions', async () => {
        let expected = [GIST.gistCore];
        let actual = gist.getOntologies().sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = schema.getOntologies().sort();

        expect(actual).toEqual(expected);

        expected = ["http://www.w3.org/2002/07/owl#"];
        actual = owl.getOntologies();

        expect(actual).toEqual(expected);
    });
});