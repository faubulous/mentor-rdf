import { SH, sh, XSD, RDF, RDFS } from "../ontologies";
import { SHAPES, _SHAPES, shapes } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { ShapeRepository } from "./shape-repository";
import { Quad_Subject } from "n3";

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

    let _shapes: string;

    let _shacl: string;

    beforeAll(async () => {
        _shapes = await loadFile(store, 'src/rdf/tests/vocabularies/shapes.ttl');
        _shacl = await loadFile(store, 'src/ontologies/sh.ttl');
    });

    it('can retrieve all shape nodes', async () => {
        let expected: string[] = [
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
        let actual = [...repository.getShapes(_shapes)].sort();

        expect(actual).toEqual(expected);

        expected = [
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
            "n3-0",
            "n3-17",
            "n3-19",
            "n3-20"
        ];
        actual = [...repository.getShapes(_shapes, undefined, { includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);
    });

    it('can get all shape nodes for a subject', async () => {
        let expected: string[] = [
            SHAPES.Person,
            SHAPES.PersonShape
        ];
        let actual = [...repository.getShapes(_shapes, SHAPES.Person)];

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getShapes(_shapes, SHAPES.customer)];

        expect(actual).toEqual(expected);

        expected = ["n3-0"];
        actual = [...repository.getShapes(_shapes, SHAPES.customer, { includeBlankNodes: true })];

        expect(actual).toEqual(expected);
    });

    it('can retrieve all shape types', async () => {
        let expected: string[] = [
            SH.NodeShape,
            SH.PropertyShape
        ];
        let actual = [...repository.getShapeTypes(_shapes)].sort();

        expect(actual).toEqual(expected);

        expected = [
            SH.NodeShape,
            SH.PropertyShape
        ];
        actual = [...repository.getShapeTypes(_shapes, { definedBy: _SHAPES })];

        expect(actual).toEqual(expected);
    });

    it('can retrieve all shape nodes of a given type', async () => {
        let expected: string[] = [
            SHAPES.CustomerShape,
            SHAPES.InvoiceShape,
            SHAPES.Person,
            SHAPES.PersonShape
        ];
        let actual = [...repository.getSubjectsOfType(_shapes, SH.NodeShape)].sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.ExamplePropertyShape
        ];
        actual = [...repository.getSubjectsOfType(_shapes, SH.PropertyShape)].sort();

        expected = [
            SHAPES.AlternativePropertyShape,
            SHAPES.ClassTypePropertyShape,
            SHAPES.CustomerNamePropertyShape,
            SHAPES.ExamplePropertyShape,
            SHAPES.FatherShape,
            SHAPES.InverseCustomerPropertyShape,
            SHAPES.NamePropertyShape,
            SHAPES.SubClassTypePropertyShape,
            "n3-0",
            "n3-17",
            "n3-19",
            "n3-20"
        ];
        actual = [...repository.getSubjectsOfType(_shapes, SH.PropertyShape, { includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.AlternativePropertyShape,
            SHAPES.ClassTypePropertyShape,
            SHAPES.CustomerNamePropertyShape,
            SHAPES.ExamplePropertyShape,
            SHAPES.FatherShape,
            SHAPES.InverseCustomerPropertyShape,
            SHAPES.NamePropertyShape,
            SHAPES.SubClassTypePropertyShape,
            "n3-0"
        ];
        actual = [...repository.getSubjectsOfType([_shacl, _shapes], SH.PropertyShape, { includeBlankNodes: true, includeSubTypes: false })].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getSubjectsOfType([_shacl, _shapes], SH.PropertyShape, { definedBy: "http://example.org/", includeBlankNodes: true, includeSubTypes: false })].sort();

        expect(actual).toEqual(expected);

        expected = [
            SHAPES.AlternativePropertyShape,
            SHAPES.ClassTypePropertyShape,
            SHAPES.CustomerNamePropertyShape,
            SHAPES.ExamplePropertyShape,
            SHAPES.FatherShape,
            SHAPES.InverseCustomerPropertyShape,
            SHAPES.NamePropertyShape,
            SHAPES.SubClassTypePropertyShape,
        ];
        actual = [...repository.getSubjectsOfType(_shapes, SH.PropertyShape, { includeBlankNodes: true, includeInferred: false })].sort();

        expect(actual).toEqual(expected);

        expected = [
            "n3-17",
            "n3-19",
            "n3-20"
        ];
        actual = [...repository.getSubjectsOfType(_shapes, SH.Parameter, { includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getSubjectsOfType(_shapes, SH.Parameter, { definedBy: "http://example.org/", includeBlankNodes: true })].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getSubjectsOfType(_shapes, SH.Validator)].sort();
        expected = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern
        ];

        expect(actual).toEqual(expected);
    });

    it('can indicate if there is a shape node for a subject', async () => {
        let actual = repository.hasShapes(_shapes, SHAPES.Person);

        expect(actual).toBe(true);

        actual = repository.hasShapes(_shapes, "http://example.org/Customer");

        expect(actual).toBe(true);

        actual = repository.hasShapes(_shapes, SHAPES.customer);

        expect(actual).toBe(true);

        actual = repository.hasShapes(_shapes, SHAPES.customer, { definedBy: "http://test.org/" });

        expect(actual).toBe(false);
    });

    it('can provide the datatype for a given property', async () => {
        let actual = repository.getDatatype(_shapes, SHAPES.name);
        let expected = XSD.string;

        expect(actual).toEqual(expected);
    });

    it('can provide the cardinality constraints for a given property', async () => {
        let actual = repository.getCardinalites(_shapes, SHAPES.name);
        let expected = { minCount: 1, maxCount: 1 };

        expect(actual).toEqual(expected);

        actual = repository.getCardinalites(_shapes, "http://example.org/email");
        expected = { minCount: 1, maxCount: -1 };

        expect(actual).toEqual(expected);
    });

    it('can provide all validators in the repository', async () => {
        let actual = [...repository.getValidators(_shapes, { includeBlankNodes: true })].sort();
        let expected = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern,
            "n3-18"
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getValidators(_shapes, { includeBlankNodes: false })].sort();
        expected = [
            SHAPES.UnreferencedJavaScriptValidator,
            SHAPES.hasPattern
        ];

        expect(actual).toEqual(expected);

        // Note: We add the SHACL ontology to the graphs in order to filter out all subtypes of `sh:Validator`.
        actual = [...repository.getValidators([_shacl, _shapes], { includeBlankNodes: false, includeSubTypes: false })].sort();
        expected = [];

        expect(actual).toEqual(expected);
    });

    it('can provide all validator types in the repository', async () => {
        let actual = [...repository.getValidatorTypes(_shapes)].sort();
        let expected = [
            SH.JSValidator,
            SH.SPARQLAskValidator,
            SH.Validator
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getValidatorTypes(_shapes, { includeInferred: false })].sort();
        expected = [
            SH.JSValidator,
            SH.SPARQLAskValidator,
        ];

        expect(actual).toEqual(expected);
    });

    it('can parse a property path', async () => {
        let p = repository.store.first(_shapes, shapes.NamePropertyShape, sh.path, null).object as Quad_Subject;

        let actual = repository.getPropertyPathTokens(_shapes, p).map(c => typeof c === 'string' ? c : c.value);
        let expected = [SHAPES.name];

        expect(actual).toEqual(expected);

        p = repository.store.first(_shapes, shapes.CustomerNamePropertyShape, sh.path, null).object as Quad_Subject;

        actual = repository.getPropertyPathTokens(_shapes, p).map(c => typeof c === 'string' ? c : c.value);
        expected = [SHAPES.customer, '/', SHAPES.name];

        expect(actual).toEqual(expected);

        p = repository.store.first(_shapes, shapes.AlternativePropertyShape, sh.path, null).object as Quad_Subject;

        actual = repository.getPropertyPathTokens(_shapes, p).map(c => typeof c === 'string' ? c : c.value);
        expected = [SHAPES.father, '|', SHAPES.mother];

        expect(actual).toEqual(expected);

        p = repository.store.first(_shapes, shapes.ClassTypePropertyShape, sh.path, null).object as Quad_Subject;

        actual = repository.getPropertyPathTokens(_shapes, p).map(c => typeof c === 'string' ? c : c.value);
        expected = [RDF.type, '/', '(', SHAPES.father, '|', SHAPES.mother, ')', '+'];

        expect(actual).toEqual(expected);

        p = repository.store.first(_shapes, shapes.SubClassTypePropertyShape, sh.path, null).object as Quad_Subject;

        actual = repository.getPropertyPathTokens(_shapes, p).map(c => typeof c === 'string' ? c : c.value);
        expected = [RDF.type, '/', RDFS.subClassOf, '*'];

        expect(actual).toEqual(expected);
    });
});