import { StoreFactory } from "./store-factory";

describe("StoreFactory", () => {
    it('can load a file in Turtle format', async () => {
        const store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in N3 format', async () => {
        const store = await StoreFactory.createFromFile('src/rdf/test/schema.nt');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in NQ format', async () => {
        const store = await StoreFactory.createFromFile('src/rdf/test/schema.nq');

        expect(store.size).toBeGreaterThan(0);
    });

    it('asserts the file URI as graph URI', async () => {
        const store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl');
        const graph = 'file://' + process.cwd() + '/src/rdf/test/gist.ttl';

        const actual = store.getGraphs(null, null, null).map(g => g.id);
        const expected = [
            graph,
            graph + '#inference'
        ];

        expect(actual).toEqual(expected);
    });
});