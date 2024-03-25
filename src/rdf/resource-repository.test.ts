import * as n3 from "n3";
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
    let schema: string[];

    beforeAll(async () => {
        schema = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl'));
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