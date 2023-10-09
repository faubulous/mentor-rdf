import { SCHEMA } from "./test/ontologies";
import { OWL, RDFS } from "../ontologies";
import { StoreFactory } from "./store-factory"
import { ResourceRepository } from "./resource-repository";

describe("ResourceRepository", () => {
    let schema: ResourceRepository;

    beforeAll(async () => {
        let store = await StoreFactory.createFromFile('src/rdf/test/schema.ttl');

        schema = new ResourceRepository(store);
    });

    it('can indicate subject definitions', async () => {
        let expected = true;
        let actual = schema.hasSubject(SCHEMA.Thing);

        expect(actual).toEqual(expected);

        // This is referenced but not described as a subject.
        actual = schema.hasSubject(RDFS.Class);
        expected = false;

        expect(actual).toEqual(expected);

        // This is not referenced at all.
        actual = schema.hasSubject(OWL.Thing);
        expected = false;

        expect(actual).toEqual(expected);
    });
});