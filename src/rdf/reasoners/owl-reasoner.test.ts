import { RdfStore } from "rdf-stores";
import { createStoreFromFile, createStoreFromString } from "../tests/helpers";
import { OwlReasoner } from "./owl-reasoner";

describe("OwlReasoner", () => {
    it('can load string data in Turtle format', async () => {
        const reasoner = new OwlReasoner();

        await createStoreFromString('src/rdf/tests/vocabularies/emmo.ttl', reasoner);

        expect(reasoner.errors.length).toBe(0);
    });

    it('expands a plain RDF/JS dataset that is not a Store', async () => {
        const source = await createStoreFromFile('src/rdf/tests/vocabularies/gist.ttl');
        const dataGraph = source.getGraphs()[0];
        const dataset = RdfStore.createDefault().asDataset();

        for (const quad of source) {
            dataset.add(quad);
        }

        const sizeBefore = dataset.size;

        new OwlReasoner().expand(dataset, dataGraph);

        expect(dataset.size).toBeGreaterThan(sizeBefore);
    });
});