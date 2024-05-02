import * as n3 from "n3";
import { RdfsReasoner } from "./rdfs-reasoner";
import { Store } from "../store";
import { loadFile } from "../tests/helpers";

describe("RdfsReasoner", () => {
    const reasoner = new RdfsReasoner();

    it("should provide the inference graph URI for a given graph URI", () => {
        let expected = "mentor://example.com/graph";
        let actual = reasoner.getInferenceGraphUri("http://example.com/graph");

        expect(actual).toEqual(expected);

        actual = reasoner.getInferenceGraphUri({ value: "http://example.com/graph" } as n3.Quad_Graph);

        expect(actual).toEqual(expected);
    });

    it('should indicate whether a URI is an inference graph URI', () => {
        let expected = true;
        let actual = reasoner.isInferenceGraphUri("mentor://example.com/graph");

        expect(actual).toEqual(expected);

        actual = reasoner.isInferenceGraphUri({ value: "mentor://example.com/graph" } as n3.Quad_Graph);

        expect(actual).toEqual(expected);

        expected = false;
        actual = reasoner.isInferenceGraphUri("http://example.com/graph");

        expect(actual).toEqual(expected);
    });

    it('should clear the inference graph when expanding', async () => {
        const store = new Store(reasoner);

        const fileUri = await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl');

        expect(store.hasGraph(fileUri)).toBeTruthy();

        const inferenceUri = reasoner.getInferenceGraphUri(fileUri);

        expect(store.hasGraph(inferenceUri)).toBeTruthy();

        const n = Array.from(store.match(inferenceUri, null, null, null)).length;

        expect(n).toBeGreaterThan(0);

        store.executeInference(new n3.NamedNode(fileUri));

        const m = Array.from(store.match(inferenceUri, null, null, null)).length;

        expect(m).toEqual(n);
    });
});