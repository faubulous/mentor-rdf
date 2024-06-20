import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { SHACL } from "../../ontologies";
import { SHAPES } from "../tests/vocabularies";
import { ShaclReasoner } from "./shacl-reasoner";
import { VocabularyRepository } from "../vocabulary-repository";

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
            SHAPES.Person,
            SHAPES.PersonShape,
            "n3-0",
            "n3-1",
            "n3-2"
        ];
        const actual = repository.getShapes(shapes, undefined, { includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined classes", async () => {
        const expected: string[] = [
            SHAPES.Customer,
            SHAPES.Person
        ];
        const actual = repository.getClasses(shapes, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined properties", async () => {
        const expected: string[] = [
            SHAPES.customer,
            SHAPES.email,
            SHACL.flags,
            SHACL.pattern
        ];
        const actual = repository.getProperties(shapes, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);
    });
});