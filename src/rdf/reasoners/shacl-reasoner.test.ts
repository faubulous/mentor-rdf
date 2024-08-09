import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { shacl, SHACL } from "../../ontologies";
import { SHAPES } from "../tests/vocabularies";
import { ShaclReasoner } from "./shacl-reasoner";
import { VocabularyRepository } from "../vocabulary-repository";

// Additional inferred definitions which are not picked up by the vocabulary generator.
const SHAPES_ = {
    Customer: 'http://example.org/Customer',
    email: 'http://example.org/email'
}

describe("ShaclReasoner", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new ShaclReasoner());

    /**
     * The repository under test.
     */
    const repository = new VocabularyRepository(store);

    let shapes: string;

    beforeAll(async () => {
        shapes = await loadFile(store, 'src/rdf/tests/vocabularies/shapes.ttl');
    });

    it("should assert implicitly defined shapes", async () => {
        const expected: string[] = [
            SHAPES.CustomerShape,
            SHAPES.ExamplePropertyShape,
            SHAPES.InvoiceShape,
            SHAPES.NamePropertyShape,
            SHAPES.Person,
            SHAPES.PersonShape,
            "n3-0",
            "n3-1",
            // "n3-2" is not included because it is not a shape but a validator.
            "n3-3",
            "n3-4",
        ];
        const actual = repository.getShapes(shapes, undefined, { includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined classes", async () => {
        const expected: string[] = [
            SHAPES_.Customer,
            SHAPES.Person
        ];
        const actual = repository.getClasses(shapes, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined properties", async () => {
        const expected: string[] = [
            SHAPES.customer,
            SHAPES_.email,
            SHAPES.name,
            SHACL.flags,
            SHACL.pattern
        ];
        const actual = repository.getProperties(shapes, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined validators", async () => {
        const expected: string[] = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern,
            "n3-2" // This one is implicit.
        ];
        const actual = repository.getSubjectsOfType(shapes, SHACL.Validator, { includeReferenced: true, includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);
    });
});