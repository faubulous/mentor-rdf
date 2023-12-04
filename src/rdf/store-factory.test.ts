import * as fs from 'fs';
import { OwlReasoner } from "./reasoning/owl-reasoner";
import { StoreFactory } from "./store-factory";

describe("StoreFactory", () => {
    it('can load string data in Turtle format', async () => {
        const file = 'src/rdf/test/gist.ttl';

        const graphUri = 'file://' + file;
        const data = fs.readFileSync(file).toString();

        const store = await StoreFactory.createFromStream(data, graphUri);

        expect(store.size).toBeGreaterThan(0);

        const graphs = store.getGraphs(null, null, null).map(g => g.id);
    });

    it('can load stream data in Turtle format', async () => {
        const file = 'src/rdf/test/gist.ttl';

        const graphUri = 'file://' + file;
        const stream = fs.createReadStream(file);

        const store = await StoreFactory.createFromStream(stream, graphUri);

        expect(store.size).toBeGreaterThan(0);
    });

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

    it('can provide parsed triples to a callback', async () => {
        let n = 0;

        const store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl', {
            onQuad: (quad) => {
                expect(quad).toBeDefined();

                n++;
            }
        });

        expect(store.size).toEqual(n);
    });

    it('asserts the file URI as graph URI', async () => {
        const reasoner = new OwlReasoner();
        const store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl', { reasoner });

        const actual = store.getGraphs(null, null, null).map(g => g.id).sort();

        expect(actual.length).toEqual(2);
        expect(actual[0].endsWith('src/rdf/test/gist.ttl')).toBeTruthy();
        expect(actual[1].endsWith('src/rdf/test/gist.ttl#inference')).toBeTruthy();
    });
});