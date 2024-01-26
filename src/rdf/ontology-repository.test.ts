import { GIST } from "./tests/ontologies";
import { loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { OntologyRepository } from "./ontology-repository";

describe("OntologyRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new OntologyRepository(store);

    let gist: string[];
    let owl: string[];
    let schema: string[];

    beforeAll(async () => {
        gist = repository.getGraphs(await loadFile(store, 'src/rdf/tests/ontologies/gist.ttl'));
        schema = repository.getGraphs(await loadFile(store, 'src/rdf/tests/ontologies/schema.ttl'));
        owl = repository.getGraphs(await loadFile(store, 'src/rdf/tests/ontologies/owl.ttl'));
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
});