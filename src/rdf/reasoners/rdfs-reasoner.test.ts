import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import { RdfsReasoner } from "./rdfs-reasoner";
import { Store } from "../store";
import { loadFile } from "../tests/helpers";

const { namedNode } = n3.DataFactory;

describe("RdfsReasoner", () => {
    const reasoner = new RdfsReasoner();

    const testInferenceGraphIriString = function(graphUri: string) {
        const actual = reasoner.getInferenceGraphUri(graphUri);
        expect(actual.startsWith('inference:')).toEqual(true);
        expect(actual.substring('inference:'.length)).toEqual(graphUri);
    };

    const testInferenceGraphIriNode = function(graphUri: string) {  
        const actual = reasoner.getInferenceGraphUri(namedNode(graphUri));
        expect(actual.startsWith('inference:')).toEqual(true);
        expect(actual.substring('inference:'.length)).toEqual(graphUri);
    };

    it("should provide the inference graph URI for a given graph URI", () => {
        testInferenceGraphIriString("http://example.com/graph");
        testInferenceGraphIriNode("http://example.com/graph");
        testInferenceGraphIriNode("vscode-vfs://example.com/graph");
        testInferenceGraphIriNode("file://c:/Users/test/");
        testInferenceGraphIriNode("file://c:/Users/test");
        testInferenceGraphIriNode("http://example.org/?q=test");
        testInferenceGraphIriNode("http://example.org#test");
    });

    it('should indicate whether a URI is an inference graph URI', () => {
        let expected = true;
        let actual = reasoner.isInferenceGraphUri("inference:http://example.com/graph");

        expect(actual).toEqual(expected);

        actual = reasoner.isInferenceGraphUri({ value: "inference:http://example.com/graph" } as rdfjs.Quad_Graph);

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

        const n = Array.from(store.matchAll(inferenceUri, null, null, null)).length;

        expect(n).toBeGreaterThan(0);

        store.executeInference(namedNode(fileUri));

        const m = Array.from(store.matchAll(inferenceUri, null, null, null)).length;

        expect(m).toEqual(n);
    });
});