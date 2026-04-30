import { Store } from "../store";
import { loadFile } from "../tests/helpers";
import { SH } from "../../ontologies";
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
        shapes = await loadFile(store, 'src/rdf/tests/vocabularies/shapes.ttl', 'http://example.org/shapes');
    });

    it("should assert implicitly defined shapes", async () => {
        const expected: string[] = [
            "1wyz0bs_b0",
            "1wyz0bs_b12",
            "1wyz0bs_b14",
            "1wyz0bs_b15",
            SHAPES.AlternativePropertyShape,
            SHAPES.ClassTypePropertyShape,
            SHAPES.CustomerNamePropertyShape,
            SHAPES.CustomerShape,
            SHAPES.ExamplePropertyShape,
            SHAPES.FatherShape,
            SHAPES.InverseCustomerPropertyShape,
            SHAPES.InvoiceShape,
            SHAPES.NamePropertyShape,
            SHAPES.Person,
            SHAPES.PersonShape,
            SHAPES.SubClassTypePropertyShape,
        ];
        const actual = [...repository.getShapes(shapes, undefined, { includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined classes", async () => {
        const expected: string[] = [
            SHAPES_.Customer,
            SHAPES.Person
        ];
        const actual = [...repository.getClasses(shapes, { includeReferenced: true })].sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined properties", async () => {
        const expected: string[] = [
            SHAPES.customer,
            SHAPES_.email,
            SHAPES.father,
            SHAPES.mother,
            SHAPES.name,
            SH.flags,
            SH.pattern
        ];
        const actual = [...repository.getProperties(shapes, { includeReferenced: true })].sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined validators", async () => {
        const expected: string[] = [
            "1wyz0bs_b13", // This one is implicit.
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern,
        ];
        const actual = [...repository.getSubjectsOfType(shapes, SH.Validator, { includeReferenced: true, includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);
    });

    it("should assert implicitly defined rules", async () => {
        let expected: string[] = [
            "1wyz0bs_b11", // This one is implicit.
            SHAPES.ChildRule,
        ];
        let actual = [...repository.getSubjectsOfType(shapes, SH.Rule, { includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.ChildRule
        ];
        actual = [...repository.getSubjectsOfType(shapes, SH.Rule, { includeBlankNodes: false })].sort();

        expect(actual).toEqual(expected);
    });
});