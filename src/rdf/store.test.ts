import { createStoreFromFile, createStoreFromString, createStoreFromXmlFile, loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { gist } from "./tests/vocabularies/gist";

describe("Store", () => {
    it('can load string data in Turtle format', async () => {
        const store = await createStoreFromString('src/rdf/tests/vocabularies/emmo.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load stream data in Turtle format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in Turtle format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in N3 format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/schema-nt.nt');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can load a file in NQ format', async () => {
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/schema-nq.nq');

        expect(store.size).toBeGreaterThan(0);
    });

    it('can provide parsed triples to a callback', async () => {
        let n = 0;

        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', undefined, (quad) => {
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

        await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl', graph, (quad) => {
            expect(quad).toBeDefined();

            n++;
        });

        expect(n).toBeGreaterThan(0);
        expect(store.size).toEqual(n);

        // We expect the graph to be cleared before loading the new triples.
        n = 0;

        await loadFile(store, 'src/rdf/tests/vocabularies/skos.ttl', graph, (quad) => {
            expect(quad).toBeDefined();

            n++;
        });

        expect(n).toBeGreaterThan(0);
        expect(store.size).toEqual(n);

        // We expect the graph only to be cleared if the file is loaded successfully.
        try {
            await loadFile(store, 'src/rdf/tests/cases/invalid-missing-semicolon.ttl', graph);

            expect.unreachable();
        }
        catch (e) {
            expect(e).toBeDefined();
            expect(store.size).toEqual(n);
        }
    });

    it('asserts the file URI as graph URI', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        const actual = store.getGraphs();

        expect(actual.length).toEqual(2);
    });

    it('throws error on invalid files', async () => {
        const reasoner = new OwlReasoner();

        try {
            await createStoreFromFile('src/rdf/tests/cases/invalid-missing-semicolon.ttl', reasoner);

            expect.unreachable();
        }
        catch (e) {
            expect(e).toBeDefined();
        }

        try {
            await createStoreFromFile('src/rdf/tests/cases/nonexistent-file.ttl', reasoner);

            expect.unreachable();
        }
        catch (e) {
            expect(e).toBeDefined();
        }
    });

    it('can match triples in multiple graphs', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        const actual = store.getGraphs().sort();

        expect(actual.length).toEqual(2);

        const x = Array.from(store.matchAll(actual[0], null, null, null)).length;

        expect(x).toBeGreaterThan(0);

        const y = Array.from(store.matchAll(actual[1], null, null, null)).length;

        expect(y).toBeGreaterThan(0);
        expect(y).not.toEqual(x);

        const z = Array.from(store.matchAll(actual, null, null, null)).length;

        expect(z).toEqual(x + y);

        try {
            // We need to consume the iterator to trigger the error.
            Array.from(new Store().matchAll("http://example.org/", null, null, null, true));

            expect.unreachable();
        } catch (e) {
            expect(e).toBeDefined();
        }
    });


    it('can load standard vocabularies from memory', async () => {
        const store = new Store();

        await store.loadFrameworkOntologies();

        const actual = store.getGraphs().sort();
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
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        let dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
        }

        let inferenceGraph = reasoner.targetUriGenerator.getGraphUri(dataGraph);

        expect(store.hasGraph(dataGraph)).toBeTruthy();
        expect(store.hasGraph(inferenceGraph)).toBeTruthy();

        dataGraph = "file:///nonexistent";
        inferenceGraph = reasoner.targetUriGenerator.getGraphUri(dataGraph);

        expect(store.hasGraph(dataGraph)).toBeFalsy();
        expect(store.hasGraph(inferenceGraph)).toBeFalsy();
    });

    it('can run reasoning on a graph', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        let dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
        }

        let inferenceGraph = reasoner.targetUriGenerator.getGraphUri(dataGraph);

        store.deleteGraphs([inferenceGraph]);

        expect(store.hasGraph(inferenceGraph)).toBeFalsy();

        await store.executeInference(dataGraph);

        expect(store.hasGraph(inferenceGraph)).toBeTruthy();
    });

    it('does not alter the graph array provided to match', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        let graphs = store.getGraphs();

        expect(graphs.length).toEqual(2);

        store.matchAll(graphs, gist.Account, null, null, false);

        expect(graphs.length).toEqual(2);

        store.matchAll(graphs, gist.Account, null, null, true);

        expect(graphs.length).toEqual(2);
    });

    it('can return the members of a collection in order', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/cases/valid-collection.ttl', reasoner);

        let graphs = store.getGraphs();

        let expected = [
            "http://example.org/concept2",
            "http://example.org/concept1",
            "http://example.org/concept3",
        ];
        let actual = store.getListItems(graphs, "http://example.org/Collection");

        expect(actual).toEqual(expected);
    });

    it('can write a graph into a Turtle formatted string', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        let dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
        }

        let actual = await store.serializeGraph(dataGraph);

        expect(actual).toBeDefined();
        expect(actual.length).toBeGreaterThan(0);
    });

    it('can write a graph into a RDF/XML formatted string', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);

        let dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
        }

        let actual = await store.serializeGraph(dataGraph, 'application/rdf+xml');

        expect(actual).toBeDefined();
        expect(actual.length).toBeGreaterThan(0);
        expect(actual).contains('<rdf:RDF');
    });

    it('can read a graph from a RDF/XML formatted string', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromXmlFile('src/rdf/tests/vocabularies/cidoc-crm.rdf', reasoner);

        let dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
        }

        let actual = await store.serializeGraph(dataGraph);

        expect(actual).toBeDefined();
        expect(actual.length).toBeGreaterThan(0);
    });
});