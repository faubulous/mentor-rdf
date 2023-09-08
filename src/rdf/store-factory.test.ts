import { StoreFactory } from "./store-factory";

describe("StoreFactory", () => {
    it('can load a file in Turtle format', async () => {
        const store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl');

        expect(store.size).toBeGreaterThan(0);
    });
});