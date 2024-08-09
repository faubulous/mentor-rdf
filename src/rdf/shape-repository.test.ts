import { SHACL, XSD } from "../ontologies";
import { SHAPES } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { ShapeRepository } from "./shape-repository";

// See: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
jest.useFakeTimers();

describe("ShapeRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new ShapeRepository(store);

    let shapes: string;
    let shacl: string;

    beforeAll(async () => {
        shapes = await loadFile(store, 'src/rdf/tests/vocabularies/shapes.ttl');
        shacl = await loadFile(store, 'src/ontologies/shacl.ttl');
    });

    it('can retrieve all shape nodes', async () => {
        let expected: string[] = [
            SHAPES.CustomerShape,
            SHAPES.ExamplePropertyShape,
            SHAPES.InvoiceShape,
            SHAPES.NamePropertyShape,
            SHAPES.Person,
            SHAPES.PersonShape
        ];
        let actual = repository.getShapes(shapes).sort();

        expect(actual).toEqual(expected);
    });

    it('can get all shape nodes for a subject', async () => {
        let expected: string[] = [
            SHAPES.Person,
            SHAPES.PersonShape
        ];
        let actual = repository.getShapes(shapes, SHAPES.Person);

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getShapes(shapes, SHAPES.customer);

        expect(actual).toEqual(expected);

        expected = [
            "n3-0",
        ];
        actual = repository.getShapes(shapes, SHAPES.customer, { includeBlankNodes: true });
    });

    it('can retrieve all shape types', async () => {
        let expected: string[] = [
            SHACL.NodeShape,
            SHACL.PropertyShape
        ];
        let actual = repository.getShapeTypes(shapes).sort();

        expect(actual).toEqual(expected);

        expected = []
        actual = repository.getShapeTypes(shapes, { definedBy: "https://example.org/" });

        expect(actual).toEqual(expected);
    });

    it('can retrieve all shape nodes of a given type', async () => {
        let expected: string[] = [
            SHAPES.CustomerShape,
            SHAPES.InvoiceShape,
            SHAPES.Person,
            SHAPES.PersonShape
        ];
        let actual = repository.getSubjectsOfType(shapes, SHACL.NodeShape).sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.ExamplePropertyShape
        ];
        actual = repository.getSubjectsOfType(shapes, SHACL.PropertyShape).sort();

        expected = [
            SHAPES.ExamplePropertyShape,
            SHAPES.NamePropertyShape,
            "n3-0",
            "n3-1",
            "n3-3",
            "n3-4"
        ];
        actual = repository.getSubjectsOfType(shapes, SHACL.PropertyShape, { includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.ExamplePropertyShape,
            SHAPES.NamePropertyShape,
            "n3-0"
        ];
        actual = repository.getSubjectsOfType([shacl, shapes], SHACL.PropertyShape, { includeBlankNodes: true, includeSubTypes: false }).sort();

        expect(actual).toEqual(expected);

        actual = repository.getSubjectsOfType([shacl, shapes], SHACL.PropertyShape, { definedBy: "http://example.org/", includeBlankNodes: true, includeSubTypes: false }).sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.ExamplePropertyShape,
            SHAPES.NamePropertyShape,
        ];
        actual = repository.getSubjectsOfType(shapes, SHACL.PropertyShape, { includeBlankNodes: true, includeInferred: false }).sort();

        expect(actual).toEqual(expected);

        expected = [
            "n3-1",
            "n3-3",
            "n3-4"
        ];
        actual = repository.getSubjectsOfType(shapes, SHACL.Parameter, { includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);

        actual = repository.getSubjectsOfType(shapes, SHACL.Parameter, { definedBy: "http://example.org/", includeBlankNodes: true }).sort();

        expect(actual).toEqual(expected);

        actual = repository.getSubjectsOfType(shapes, SHACL.Validator).sort();
        expected = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern
        ];

        expect(actual).toEqual(expected);
    });

    it('can indicate if there is a shape node for a subject', async () => {
        let actual = repository.hasShapes(shapes, SHAPES.Person);

        expect(actual).toBe(true);

        actual = repository.hasShapes(shapes, "http://example.org/Customer");

        expect(actual).toBe(true);

        actual = repository.hasShapes(shapes, SHAPES.customer);

        expect(actual).toBe(true);

        actual = repository.hasShapes(shapes, SHAPES.customer, { definedBy: "http://test.org/" });

        expect(actual).toBe(false);
    });

    it('can provide the datatype for a given property', async () => {
        let actual = repository.getDatatype(shapes, SHAPES.name);
        let expected = XSD.string;

        expect(actual).toEqual(expected);
    });

    it('can provide the cardinality constraints for a given property', async () => {
        let actual = repository.getCardinalites(shapes, SHAPES.name);
        let expected = { minCount: 1, maxCount: 1 };

        expect(actual).toEqual(expected);

        actual = repository.getCardinalites(shapes, "http://example.org/email");
        expected = { minCount: 1, maxCount: -1 };

        expect(actual).toEqual(expected);
    });

    it('can provide all validators in the repository', async () => {
        let actual = repository.getSubjectsOfType(shapes, SHACL.Validator, { includeBlankNodes: true }).sort();
        let expected = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern,
            "n3-2"
        ];

        expect(actual).toEqual(expected);

        actual = repository.getSubjectsOfType(shapes, SHACL.Validator, { includeBlankNodes: false }).sort();
        expected = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern
        ];

        expect(actual).toEqual(expected);

        // Note: We add the SHACL ontology to the graphs in order to filter out all subtypes of `sh:Validator`.
        actual = repository.getSubjectsOfType([shacl, shapes], SHACL.Validator, { includeBlankNodes: false, includeSubTypes: false }).sort();
        expected = [];

        expect(actual).toEqual(expected);
    });

    it('can provide all validator types in the repository', async () => {
        let actual = repository.getValidatorTypes(shapes).sort();
        let expected = [
            SHACL.JSValidator,
            SHACL.SPARQLAskValidator,
            SHACL.Validator
        ];

        expect(actual).toEqual(expected);

        actual = repository.getValidatorTypes(shapes, { includeInferred: false }).sort();
        expected = [
            SHACL.JSValidator,
            SHACL.SPARQLAskValidator,
        ];

        expect(actual).toEqual(expected);
    });
});