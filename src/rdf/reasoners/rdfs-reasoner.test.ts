import * as rdfjs from "@rdfjs/types";
import { RDF, RDFS, XSD } from "../../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";
import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { DefaultInferenceGraphHandler } from "./reasoner";
import { dataFactory } from "../data-factory";
import { VocabularyRepository } from "../vocabulary-repository";

const { namedNode } = dataFactory;

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

    it('should infer that a used predicate denotes a property', async () => {
        const store = new Store(reasoner);

        // The document states triples with predicates that it does not define (RDFS rule rdf1).
        const fileUri = await loadFile(store, 'src/rdf/tests/cases/valid-property-usage.ttl');
        const inferenceUri = reasoner.targetUriGenerator.getGraphUri(fileUri);

        const actual = Array.from(store.matchAll(inferenceUri, null, namedNode(RDF.type), namedNode(RDF.Property)))
            .map(q => q.subject.value)
            .sort();

        expect(actual).toContain('file://valid-property-usage.ttl#fullName');
        expect(actual).toContain('file://valid-property-usage.ttl#memberOf');

        // Predicates of the W3C vocabularies are left out, mirroring the inference of classes.
        expect(actual).not.toContain(RDFS.label);
        expect(actual).not.toContain(RDF.type);
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

    describe('inherited ranges and domains', () => {
        const ns = 'file://valid-subproperty-range-domain.ttl#';

        /**
         * Loads the test case and returns the objects of the given predicate that were
         * inferred for a property.
         */
        async function getInferred(propertyName: string, predicate: string): Promise<string[]> {
            const store = new Store(reasoner);
            const fileUri = await loadFile(store, 'src/rdf/tests/cases/valid-subproperty-range-domain.ttl');
            const inferenceUri = reasoner.targetUriGenerator.getGraphUri(fileUri);

            return Array.from(store.matchAll(inferenceUri, namedNode(ns + propertyName), namedNode(predicate), null))
                .map(q => q.object.value)
                .sort();
        }

        it('should infer the range of a sub property from its super property', async () => {
            expect(await getInferred('subFlag', RDFS.range)).toEqual([XSD.boolean]);
            expect(await getInferred('issueNumber', RDFS.range)).toEqual([XSD.integer]);
        });

        it('should infer the range along a chain of sub properties', async () => {
            expect(await getInferred('punchlistNumber', RDFS.range)).toEqual([XSD.integer]);
        });

        it('should infer the domain of a sub property from its super properties', async () => {
            expect(await getInferred('issueNumber', RDFS.domain)).toEqual([ns + 'Thing']);
            expect(await getInferred('punchlistNumber', RDFS.domain)).toEqual([ns + 'Thing']);
        });

        it('should not add ranges to the super properties', async () => {
            expect(await getInferred('id', RDFS.range)).toEqual([]);
            expect(await getInferred('flag', RDFS.range)).toEqual([]);
        });

        it('should follow a cycle in the property hierarchy only once', async () => {
            expect(await getInferred('start', RDFS.range)).toEqual([XSD.date]);
        });

        it('should return the asserted range of a sub property before the inherited one', async () => {
            const store = new Store(reasoner);
            const fileUri = await loadFile(store, 'src/rdf/tests/cases/valid-subproperty-range-domain.ttl');
            const vocabulary = new VocabularyRepository(store);

            expect(await getInferred('shortCode', RDFS.range)).toEqual([XSD.string]);
            expect(vocabulary.getRange([fileUri], ns + 'shortCode')).toEqual('http://www.w3.org/2001/XMLSchema#token');
            expect(vocabulary.getRange([fileUri], ns + 'punchlistNumber')).toEqual(XSD.integer);
            expect(vocabulary.getDomain([fileUri], ns + 'punchlistNumber')).toEqual(ns + 'Thing');
        });
    });
});
