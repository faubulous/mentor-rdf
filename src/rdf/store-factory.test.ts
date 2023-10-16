import * as fs from 'fs';
import { OwlReasoner } from "./owl-reasoner";
import { StoreFactory } from "./store-factory";

describe("StoreFactory", () => {
    it('can load string data in Turtle format', async () => {
        const data = fs.readFileSync('src/rdf/test/gist.ttl').toString();
        const graphUri = 'file://' + process.cwd() + '/src/rdf/test/gist.ttl';

        const store = await StoreFactory.createFromStream(data, graphUri);

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load stream data in Turtle format', async () => {
        const stream = fs.createReadStream('src/rdf/test/gist.ttl');
        const graphUri = 'file://' + process.cwd() + '/src/rdf/test/gist.ttl';
        
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
        const graph = 'file://' + process.cwd() + '/src/rdf/test/gist.ttl';

        const actual = store.getGraphs(null, null, null).map(g => g.id);
        const expected = [
            graph,
            graph + '#inference',
        ];

        expect(actual).toEqual(expected);
    });
});