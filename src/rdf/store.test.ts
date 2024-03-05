import { createStoreFromFile, createStoreFromString, loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";

describe("Store", () => {
    it('can load string data in Turtle format', async () => {
        const store = await createStoreFromString('src/rdf/tests/ontologies/emmo.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load stream data in Turtle format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in Turtle format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in N3 format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/ontologies/schema.nt');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in NQ format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/ontologies/schema.nq');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can provide parsed triples to a callback', async () => {
        let n = 0;

        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl', undefined, (quad) => {
            expect(quad).toBeDefined();

            n++;
        });

        expect(store.size).toEqual(n);
    });

    it('clears the target graph before loading from stream', async () => {
        // Enable reasoning to check that the inference graph is cleared as well.
        const store = new Store();
        const graph = "http://localhost/test";

        let n = 0;

        await loadFile(store, 'src/rdf/tests/ontologies/gist.ttl', graph, (quad) => {
            expect(quad).toBeDefined();

            n++;
        });

        expect(n).toBeGreaterThan(0);
        expect(store.size).toEqual(n);

        // We expect the graph to be cleared before loading the new triples.
        n = 0;

        await loadFile(store, 'src/rdf/tests/ontologies/skos.ttl', graph, (quad) => {
            expect(quad).toBeDefined();

            n++;
        });

        expect(n).toBeGreaterThan(0);
        expect(store.size).toEqual(n);

        // We expect the graph only to be cleared if the file is loaded successfully.
        try {
            await loadFile(store, 'src/rdf/tests/cases/invalid-missing-semicolon.ttl', graph);

            fail();
        }
        catch (e) {
            expect(e).toBeDefined();
            expect(store.size).toEqual(n);
        }
    });

    it('asserts the file URI as graph URI', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl', reasoner);

        const actual = store.getGraphs().sort();

        expect(actual.length).toEqual(2);
    });

    it('throws error on invalid files', async () => {
        const reasoner = new OwlReasoner();

        try {
            await createStoreFromFile('src/rdf/tests/cases/invalid-missing-semicolon.ttl', reasoner);

            fail();
        }
        catch (e) {
            expect(e).toBeDefined();
        }

        try {
            await createStoreFromFile('src/rdf/tests/cases/nonexistent-file.ttl', reasoner);

            fail();
        }
        catch (e) {
            expect(e).toBeDefined();
        }
    });

    it('can match triples in multiple graphs', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl', reasoner);

        const actual = store.getGraphs().map(g => g.id).sort();

        expect(actual.length).toEqual(2);

        const x = Array.from(store.match(actual[0])).length;

        expect(x).toBeGreaterThan(0);

        const y = Array.from(store.match(actual[1])).length;

        expect(y).toBeGreaterThan(0);

        const z = Array.from(store.match(actual)).length;

        expect(z).toEqual(x + y);
    });

    it('can load standard vocabularies from memory', async () => {
        const store = new Store();

        await store.loadFrameworkOntologies();

        const actual = store.getGraphs().map(g => g.id).sort();
        const expected = [
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "http://www.w3.org/2000/01/rdf-schema#",
            "http://www.w3.org/2001/XMLSchema#",
            "http://www.w3.org/2002/07/owl#",
            "http://www.w3.org/2004/02/skos/core#",
            "http://www.w3.org/ns/rdfa#",
            "http://www.w3.org/ns/shacl#",
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can indicate if a graph contains triples', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl', reasoner);

        let dataGraph = store.getGraphs().map(g => g.id).find(g => g.startsWith('file'));

        if (!dataGraph) {
            fail();
        }

        let inferenceGraph = reasoner.getInferenceGraphUri(dataGraph);

        expect(store.hasGraph(dataGraph)).toBeTruthy();
        expect(store.hasGraph(inferenceGraph)).toBeTruthy();

        dataGraph = "file:///nonexistent";
        inferenceGraph = reasoner.getInferenceGraphUri(dataGraph);

        expect(store.hasGraph(dataGraph)).toBeFalsy();
        expect(store.hasGraph(inferenceGraph)).toBeFalsy();
    });

    it('can run reasoning on a graph', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/ontologies/gist.ttl', reasoner);

        let dataGraph = store.getGraphs().map(g => g.id).find(g => g.startsWith('file'));

        if (!dataGraph) {
            fail();
        }

        let inferenceGraph = reasoner.getInferenceGraphUri(dataGraph);

        store.deleteGraphs([inferenceGraph]);

        expect(store.hasGraph(inferenceGraph)).toBeFalsy();

        await store.executeInference(dataGraph);

        expect(store.hasGraph(inferenceGraph)).toBeTruthy();
    });
});