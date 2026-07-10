/// <reference types="vitest/globals" />
import { dataFactory } from "./data-factory";
import { createStoreFromFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { DatasetView } from "./dataset-view";
import { Store } from "./store";

describe("DatasetView", () => {
    const p = dataFactory.namedNode("http://example.org/p");
    const q = dataFactory.namedNode("http://example.org/q");
    const g1 = "http://example.org/graph1";
    const g2 = "http://example.org/graph2";

    function createStore(): Store {
        const store = new Store();

        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/a"), p, dataFactory.literal("1"), dataFactory.namedNode(g1)));
        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/a"), q, dataFactory.literal("2"), dataFactory.namedNode(g1)));
        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/b"), p, dataFactory.literal("3"), dataFactory.namedNode(g2)));
        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/c"), p, dataFactory.literal("4")));

        return store;
    }

    it('has a size equal to the number of iterated quads', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);
        const dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
            return;
        }

        // Unscoped view.
        const all = new DatasetView(store);

        expect(all.size).toEqual(Array.from(all).length);
        expect(all.size).toEqual(store.size);

        // Scoped to a single graph, without inference.
        const data = new DatasetView(store, { graphUris: [dataGraph], includeInferred: false });

        expect(data.size).toEqual(Array.from(data).length);
        expect(data.size).toBeGreaterThan(0);
        expect(data.size).toBeLessThan(store.size);

        // Scoped to a single graph, with inference graphs included by default.
        const dataInferred = new DatasetView(store, { graphUris: [dataGraph] });

        expect(dataInferred.size).toEqual(Array.from(dataInferred).length);
        expect(dataInferred.size).toBeGreaterThan(data.size);

        // Scoped to multiple graphs.
        const multi = new DatasetView(store, { graphUris: store.getGraphs(), includeInferred: false });

        expect(multi.size).toEqual(Array.from(multi).length);
        expect(multi.size).toEqual(store.size);
    });

    it('has a size that respects pattern constraints', () => {
        const store = createStore();
        const view = new DatasetView(store, { predicate: p });

        expect(view.size).toEqual(3);
        expect(view.size).toEqual(Array.from(view).length);
    });

    it('refreshes the memoized size after the store is modified', () => {
        const store = createStore();
        const view = new DatasetView(store, { graphUris: [g1] });

        expect(view.size).toEqual(2);

        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/d"), p, dataFactory.literal("5"), dataFactory.namedNode(g1)));

        expect(view.size).toEqual(3);
    });

    it('indicates if it contains a quad', () => {
        const store = createStore();
        const view = new DatasetView(store, { graphUris: [g1] });

        const inScope = dataFactory.quad(dataFactory.namedNode("http://example.org/a"), p, dataFactory.literal("1"), dataFactory.namedNode(g1));
        const outOfScope = dataFactory.quad(dataFactory.namedNode("http://example.org/b"), p, dataFactory.literal("3"), dataFactory.namedNode(g2));
        const missing = dataFactory.quad(dataFactory.namedNode("http://example.org/x"), p, dataFactory.literal("1"), dataFactory.namedNode(g1));

        expect(view.has(inScope)).toEqual(true);
        expect(view.has(outOfScope)).toEqual(false);
        expect(view.has(missing)).toEqual(false);

        // A pattern-constrained view must not contain quads that do not match the pattern.
        const constrained = new DatasetView(store, { graphUris: [g1], predicate: q });

        expect(constrained.has(inScope)).toEqual(false);
    });

    it('intersects constraints on chained match calls', () => {
        const store = createStore();
        const a = dataFactory.namedNode("http://example.org/a");
        const view = new DatasetView(store);

        // The subject constraint from the first match must be preserved by the second.
        const chained = view.match(a).match(null, p);

        expect(Array.from(chained).length).toEqual(1);
        expect(chained.size).toEqual(1);

        // A conflicting term constraint results in an empty view.
        const conflicting = view.match(a).match(dataFactory.namedNode("http://example.org/b"));

        expect(Array.from(conflicting).length).toEqual(0);
        expect(conflicting.size).toEqual(0);

        // An equal term constraint keeps the view unchanged.
        const equal = view.match(a).match(a);

        expect(Array.from(equal).length).toEqual(2);
    });

    it('narrows the graph scope on match', () => {
        const store = createStore();
        const view = new DatasetView(store, { graphUris: [g1, g2] });

        // Narrowing to a graph inside the scope.
        const inScope = view.match(null, null, null, dataFactory.namedNode(g1));

        expect(inScope.size).toEqual(2);

        // Narrowing to a graph outside the scope results in an empty view.
        const outOfScope = view.match(null, null, null, dataFactory.namedNode("http://example.org/other"));

        expect(outOfScope.size).toEqual(0);
        expect(Array.from(outOfScope).length).toEqual(0);
    });

    it('supports matching quads in the default graph', () => {
        const store = createStore();
        const view = store.match(null, null, null, dataFactory.defaultGraph());

        expect(view.size).toEqual(1);
        expect(Array.from(view).length).toEqual(1);
        expect(Array.from(view)[0].subject.value).toEqual("http://example.org/c");
    });

    it('throws when adding or deleting quads', () => {
        const store = createStore();
        const view = new DatasetView(store);
        const quad = dataFactory.quad(dataFactory.namedNode("http://example.org/x"), p, dataFactory.literal("1"));

        expect(() => view.add(quad)).toThrow();
        expect(() => view.delete(quad)).toThrow();
    });

    it('throws when inference is requested without a reasoner', () => {
        const store = createStore();

        expect(() => new DatasetView(store, { graphUris: [g1], includeInferred: true })).toThrow();
    });

    it('is returned by Store.match with contents equal to matchAll', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);
        const dataGraph = store.getGraphs().find(g => g.startsWith('file'));

        if (!dataGraph) {
            expect.unreachable();
            return;
        }

        const view = store.match(null, null, null, dataFactory.namedNode(dataGraph));
        const expected = Array.from(store.matchAll(dataGraph, null, null, null, false));

        expect(Array.from(view).length).toEqual(expected.length);
        expect(view.size).toEqual(expected.length);
    });

    it('is returned by Store.getDataset as a live view', () => {
        const store = createStore();
        const dataset = store.getDataset(g1);

        expect(dataset).toBeInstanceOf(DatasetView);
        expect(dataset.size).toEqual(2);

        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/d"), p, dataFactory.literal("5"), dataFactory.namedNode(g1)));

        expect(dataset.size).toEqual(3);
    });

    it('can be used with Store.asSource to stream quads', () => {
        const store = createStore();
        const source = store.asSource();
        const stream = source.match(null, null, null, null);

        expect(typeof (stream as any).on).toEqual('function');
    });
});

describe("Store versioning", () => {
    const p = dataFactory.namedNode("http://example.org/p");
    const g1 = "http://example.org/graph1";
    const g2 = "http://example.org/graph2";

    it('bumps the version counters on add and delete', () => {
        const store = new Store();
        const quad = dataFactory.quad(dataFactory.namedNode("http://example.org/a"), p, dataFactory.literal("1"), dataFactory.namedNode(g1));

        const v0 = store.version;

        store.add(quad);

        expect(store.version).toBeGreaterThan(v0);
        expect(store.getGraphVersion(g1)).toEqual(1);
        expect(store.getGraphVersion(g2)).toEqual(0);

        store.delete(quad);

        expect(store.getGraphVersion(g1)).toEqual(2);
        expect(store.getGraphVersion(g2)).toEqual(0);
    });

    it('bumps the version counters on loadTurtle and deleteGraphs', async () => {
        const reasoner = new OwlReasoner();
        const store = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl', reasoner);
        const dataGraph = store.getGraphs().find(g => g.startsWith('file'));
        const inferenceGraph = store.getGraphs().find(g => !g.startsWith('file'));

        if (!dataGraph || !inferenceGraph) {
            expect.unreachable();
            return;
        }

        const dataVersion = store.getGraphVersion(dataGraph);
        const inferenceVersion = store.getGraphVersion(inferenceGraph);

        expect(dataVersion).toBeGreaterThan(0);
        expect(inferenceVersion).toBeGreaterThan(0);

        store.deleteGraphs([dataGraph]);

        expect(store.getGraphVersion(dataGraph)).toBeGreaterThan(dataVersion);
        expect(store.getGraphVersion(inferenceGraph)).toEqual(inferenceVersion);

        // Deleting an already empty graph does not bump the version.
        const deletedVersion = store.getGraphVersion(dataGraph);

        store.deleteGraphs([dataGraph]);

        expect(store.getGraphVersion(dataGraph)).toEqual(deletedVersion);
    });

    it('bumps the inference graph version on executeInference', () => {
        const reasoner = new OwlReasoner();
        const store = new Store(reasoner);

        store.add(dataFactory.quad(dataFactory.namedNode("http://example.org/a"), p, dataFactory.literal("1"), dataFactory.namedNode(g1)));

        const inferenceGraph = reasoner.targetUriGenerator.getGraphUri(g1);
        const v0 = store.getGraphVersion(inferenceGraph);

        store.executeInference(g1);

        expect(store.getGraphVersion(inferenceGraph)).toBeGreaterThan(v0);
    });
});
