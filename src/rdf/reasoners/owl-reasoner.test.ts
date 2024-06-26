import { createStoreFromString } from "../tests/helpers";
import { OwlReasoner } from "./owl-reasoner";

describe("OwlReasoner", () => {
    it('can load string data in Turtle format', async () => {
        const reasoner = new OwlReasoner();

        await createStoreFromString('src/rdf/tests/vocabularies/emmo.ttl', reasoner);

        expect(reasoner.errors.length).toBe(0);
    });
});