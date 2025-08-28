import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import { RdfsReasoner } from "./rdfs-reasoner";
import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { DefaultInferenceGraphHandler } from "./reasoner";

const { namedNode } = n3.DataFactory;

describe("RdfsReasoner", () => {
    const reasoner = new RdfsReasoner();

    const generator = new DefaultInferenceGraphHandler();

    const testInferenceGraphIri = function (graphUri: string | rdfjs.NamedNode) {
        const actual = generator.getGraphUri(graphUri);

        expect(generator.isInferenceGraphUri(actual)).toEqual(true);
    };

    it("should provide the inference graph URI for a given graph URI", () => {
        testInferenceGraphIri("http://example.com/graph");
        testInferenceGraphIri(namedNode("http://example.com/graph"));
        testInferenceGraphIri(namedNode("vscode-vfs://example.com/graph"));
        testInferenceGraphIri(namedNode("file://c:/Users/test/"));
        testInferenceGraphIri(namedNode("file://c:/Users/test"));
        testInferenceGraphIri(namedNode("http://example.org/?q=test"));
        testInferenceGraphIri(namedNode("http://example.org#test"));
    });

    it('should indicate whether a URI is an inference graph URI', () => {
        let expected = true;
        let actual = generator.isInferenceGraphUri("urn:mentor:inference:http://example.com/graph");

        expect(actual).toEqual(expected);

        actual = generator.isInferenceGraphUri({ value: "urn:mentor:inference:http://example.com/graph" } as rdfjs.Quad_Graph);

        expect(actual).toEqual(expected);

        expected = false;
        actual = generator.isInferenceGraphUri("http://example.com/graph");

        expect(actual).toEqual(expected);
    });

    it('should clear the inference graph when expanding', async () => {
        const store = new Store(reasoner);

        const fileUri = await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl');

        expect(store.hasGraph(fileUri)).toBeTruthy();

        const inferenceUri = reasoner.targetUriGenerator.getGraphUri(fileUri);

        expect(store.hasGraph(inferenceUri)).toBeTruthy();

        const n = Array.from(store.matchAll(inferenceUri, null, null, null)).length;

        expect(n).toBeGreaterThan(0);

        store.executeInference(namedNode(fileUri));

        const m = Array.from(store.matchAll(inferenceUri, null, null, null)).length;

        expect(m).toEqual(n);
    });
});