import { Store } from "../store";
import { loadFile } from "../tests/helpers";
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
            "n3-0"
        ];
        const actual = repository.getShapes(shapes, undefined, { includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);
    });
});