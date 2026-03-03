import { describe, it, expect, beforeEach } from 'vitest';
import {
    DataFactory,
    dataFactory,
    NamedNode,
    BlankNode,
    Literal,
    Variable,
    DefaultGraph,
    Quad
} from './data-factory';

describe('DataFactory', () => {
    let factory: DataFactory;

    beforeEach(() => {
        factory = new DataFactory();
        factory.resetBlankNodeCounter();
    });

    describe('namedNode', () => {
        it('creates a named node with the given IRI', () => {
            const node = factory.namedNode('http://example.org/test');

            expect(node).toBeInstanceOf(NamedNode);
            expect(node.termType).toBe('NamedNode');
            expect(node.value).toBe('http://example.org/test');
        });

        it('creates named nodes that are equal when they have the same IRI', () => {
            const node1 = factory.namedNode('http://example.org/test');
            const node2 = factory.namedNode('http://example.org/test');

            expect(node1.equals(node2)).toBe(true);
        });

        it('creates named nodes that are not equal when they have different IRIs', () => {
            const node1 = factory.namedNode('http://example.org/test1');
            const node2 = factory.namedNode('http://example.org/test2');

            expect(node1.equals(node2)).toBe(false);
        });

        it('returns false when comparing to null or undefined', () => {
            const node = factory.namedNode('http://example.org/test');

            expect(node.equals(null)).toBe(false);
            expect(node.equals(undefined)).toBe(false);
        });

        it('returns false when comparing to a different term type', () => {
            const namedNode = factory.namedNode('http://example.org/test');
            const blankNode = factory.blankNode('test');

            expect(namedNode.equals(blankNode)).toBe(false);
        });
    });

    describe('blankNode', () => {
        it('creates a blank node with the given identifier', () => {
            const node = factory.blankNode('b1');

            expect(node).toBeInstanceOf(BlankNode);
            expect(node.termType).toBe('BlankNode');
            expect(node.value).toBe('b1');
        });

        it('generates a unique identifier when none is provided', () => {
            const node1 = factory.blankNode();
            const node2 = factory.blankNode();

            expect(node1.value).toBe('b1');
            expect(node2.value).toBe('b2');
        });

        it('creates blank nodes that are equal when they have the same identifier', () => {
            const node1 = factory.blankNode('test');
            const node2 = factory.blankNode('test');

            expect(node1.equals(node2)).toBe(true);
        });

        it('creates blank nodes that are not equal when they have different identifiers', () => {
            const node1 = factory.blankNode('test1');
            const node2 = factory.blankNode('test2');

            expect(node1.equals(node2)).toBe(false);
        });

        it('returns false when comparing to null or undefined', () => {
            const node = factory.blankNode('test');

            expect(node.equals(null)).toBe(false);
            expect(node.equals(undefined)).toBe(false);
        });
    });

    describe('literal', () => {
        it('creates a plain literal with XSD string datatype', () => {
            const literal = factory.literal('hello');

            expect(literal).toBeInstanceOf(Literal);
            expect(literal.termType).toBe('Literal');
            expect(literal.value).toBe('hello');
            expect(literal.language).toBe('');
            expect(literal.datatype.value).toBe('http://www.w3.org/2001/XMLSchema#string');
        });

        it('creates a language-tagged literal', () => {
            const literal = factory.literal('hello', 'en');

            expect(literal.value).toBe('hello');
            expect(literal.language).toBe('en');
            expect(literal.datatype.value).toBe('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString');
        });

        it('normalizes language tags to lowercase', () => {
            const literal = factory.literal('hello', 'EN-US');

            expect(literal.language).toBe('en-us');
        });

        it('creates a literal with a custom datatype', () => {
            const datatype = factory.namedNode('http://www.w3.org/2001/XMLSchema#integer');
            const literal = factory.literal('42', datatype);

            expect(literal.value).toBe('42');
            expect(literal.language).toBe('');
            expect(literal.datatype.value).toBe('http://www.w3.org/2001/XMLSchema#integer');
        });

        it('creates literals that are equal when they have the same value and datatype', () => {
            const literal1 = factory.literal('hello');
            const literal2 = factory.literal('hello');

            expect(literal1.equals(literal2)).toBe(true);
        });

        it('creates literals that are equal when they have the same value and language', () => {
            const literal1 = factory.literal('hello', 'en');
            const literal2 = factory.literal('hello', 'en');

            expect(literal1.equals(literal2)).toBe(true);
        });

        it('creates literals that are not equal when they have different values', () => {
            const literal1 = factory.literal('hello');
            const literal2 = factory.literal('world');

            expect(literal1.equals(literal2)).toBe(false);
        });

        it('creates literals that are not equal when they have different languages', () => {
            const literal1 = factory.literal('hello', 'en');
            const literal2 = factory.literal('hello', 'de');

            expect(literal1.equals(literal2)).toBe(false);
        });

        it('creates literals that are not equal when they have different datatypes', () => {
            const literal1 = factory.literal('42', factory.namedNode('http://www.w3.org/2001/XMLSchema#integer'));
            const literal2 = factory.literal('42', factory.namedNode('http://www.w3.org/2001/XMLSchema#decimal'));

            expect(literal1.equals(literal2)).toBe(false);
        });

        it('returns false when comparing to null or undefined', () => {
            const literal = factory.literal('hello');

            expect(literal.equals(null)).toBe(false);
            expect(literal.equals(undefined)).toBe(false);
        });

        it('returns false when comparing to a different term type', () => {
            const literal = factory.literal('hello');
            const namedNode = factory.namedNode('hello');

            expect(literal.equals(namedNode)).toBe(false);
        });
    });

    describe('variable', () => {
        it('creates a variable with the given name', () => {
            const variable = factory.variable('x');

            expect(variable).toBeInstanceOf(Variable);
            expect(variable.termType).toBe('Variable');
            expect(variable.value).toBe('x');
        });

        it('creates variables that are equal when they have the same name', () => {
            const var1 = factory.variable('x');
            const var2 = factory.variable('x');

            expect(var1.equals(var2)).toBe(true);
        });

        it('creates variables that are not equal when they have different names', () => {
            const var1 = factory.variable('x');
            const var2 = factory.variable('y');

            expect(var1.equals(var2)).toBe(false);
        });

        it('returns false when comparing to null or undefined', () => {
            const variable = factory.variable('x');

            expect(variable.equals(null)).toBe(false);
            expect(variable.equals(undefined)).toBe(false);
        });
    });

    describe('defaultGraph', () => {
        it('returns the default graph singleton', () => {
            const graph = factory.defaultGraph();

            expect(graph).toBeInstanceOf(DefaultGraph);
            expect(graph.termType).toBe('DefaultGraph');
            expect(graph.value).toBe('');
        });

        it('returns the same instance on multiple calls', () => {
            const graph1 = factory.defaultGraph();
            const graph2 = factory.defaultGraph();

            expect(graph1).toBe(graph2);
        });

        it('default graphs are equal', () => {
            const graph1 = factory.defaultGraph();
            const graph2 = new DefaultGraph();

            expect(graph1.equals(graph2)).toBe(true);
        });

        it('returns false when comparing to null or undefined', () => {
            const graph = factory.defaultGraph();

            expect(graph.equals(null)).toBe(false);
            expect(graph.equals(undefined)).toBe(false);
        });

        it('returns false when comparing to a different term type', () => {
            const graph = factory.defaultGraph();
            const namedNode = factory.namedNode('http://example.org/graph');

            expect(graph.equals(namedNode)).toBe(false);
        });
    });

    describe('quad', () => {
        it('creates a quad with the given subject, predicate, object, and graph', () => {
            const subject = factory.namedNode('http://example.org/subject');
            const predicate = factory.namedNode('http://example.org/predicate');
            const object = factory.literal('value');
            const graph = factory.namedNode('http://example.org/graph');

            const quad = factory.quad(subject, predicate, object, graph);

            expect(quad).toBeInstanceOf(Quad);
            expect(quad.termType).toBe('Quad');
            expect(quad.value).toBe('');
            expect(quad.subject).toBe(subject);
            expect(quad.predicate).toBe(predicate);
            expect(quad.object).toBe(object);
            expect(quad.graph).toBe(graph);
        });

        it('creates a quad with the default graph when no graph is provided', () => {
            const subject = factory.namedNode('http://example.org/subject');
            const predicate = factory.namedNode('http://example.org/predicate');
            const object = factory.literal('value');

            const quad = factory.quad(subject, predicate, object);

            expect(quad.graph.termType).toBe('DefaultGraph');
        });

        it('creates quads that are equal when all components are equal', () => {
            const subject = factory.namedNode('http://example.org/subject');
            const predicate = factory.namedNode('http://example.org/predicate');
            const object = factory.literal('value');

            const quad1 = factory.quad(subject, predicate, object);
            const quad2 = factory.quad(subject, predicate, object);

            expect(quad1.equals(quad2)).toBe(true);
        });

        it('creates quads that are not equal when subjects differ', () => {
            const predicate = factory.namedNode('http://example.org/predicate');
            const object = factory.literal('value');

            const quad1 = factory.quad(factory.namedNode('http://example.org/s1'), predicate, object);
            const quad2 = factory.quad(factory.namedNode('http://example.org/s2'), predicate, object);

            expect(quad1.equals(quad2)).toBe(false);
        });

        it('creates quads that are not equal when predicates differ', () => {
            const subject = factory.namedNode('http://example.org/subject');
            const object = factory.literal('value');

            const quad1 = factory.quad(subject, factory.namedNode('http://example.org/p1'), object);
            const quad2 = factory.quad(subject, factory.namedNode('http://example.org/p2'), object);

            expect(quad1.equals(quad2)).toBe(false);
        });

        it('creates quads that are not equal when objects differ', () => {
            const subject = factory.namedNode('http://example.org/subject');
            const predicate = factory.namedNode('http://example.org/predicate');

            const quad1 = factory.quad(subject, predicate, factory.literal('value1'));
            const quad2 = factory.quad(subject, predicate, factory.literal('value2'));

            expect(quad1.equals(quad2)).toBe(false);
        });

        it('creates quads that are not equal when graphs differ', () => {
            const subject = factory.namedNode('http://example.org/subject');
            const predicate = factory.namedNode('http://example.org/predicate');
            const object = factory.literal('value');

            const quad1 = factory.quad(subject, predicate, object, factory.namedNode('http://example.org/g1'));
            const quad2 = factory.quad(subject, predicate, object, factory.namedNode('http://example.org/g2'));

            expect(quad1.equals(quad2)).toBe(false);
        });

        it('returns false when comparing to null or undefined', () => {
            const quad = factory.quad(
                factory.namedNode('http://example.org/subject'),
                factory.namedNode('http://example.org/predicate'),
                factory.literal('value')
            );

            expect(quad.equals(null)).toBe(false);
            expect(quad.equals(undefined)).toBe(false);
        });

        it('returns false when comparing to a different term type', () => {
            const quad = factory.quad(
                factory.namedNode('http://example.org/subject'),
                factory.namedNode('http://example.org/predicate'),
                factory.literal('value')
            );
            const namedNode = factory.namedNode('http://example.org/test');

            expect(quad.equals(namedNode)).toBe(false);
        });
    });

    describe('fromTerm', () => {
        it('copies a named node', () => {
            const original = factory.namedNode('http://example.org/test');
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('NamedNode');
            expect(copy.value).toBe(original.value);
            expect(copy.equals(original)).toBe(true);
        });

        it('copies a blank node', () => {
            const original = factory.blankNode('b1');
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('BlankNode');
            expect(copy.value).toBe(original.value);
            expect(copy.equals(original)).toBe(true);
        });

        it('copies a plain literal', () => {
            const original = factory.literal('hello');
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('Literal');
            expect(copy.equals(original)).toBe(true);
        });

        it('copies a language-tagged literal', () => {
            const original = factory.literal('hello', 'en');
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('Literal');
            expect((copy as Literal).language).toBe('en');
            expect(copy.equals(original)).toBe(true);
        });

        it('copies a literal with a custom datatype', () => {
            const datatype = factory.namedNode('http://www.w3.org/2001/XMLSchema#integer');
            const original = factory.literal('42', datatype);
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('Literal');
            expect((copy as Literal).datatype.value).toBe('http://www.w3.org/2001/XMLSchema#integer');
            expect(copy.equals(original)).toBe(true);
        });

        it('copies a variable', () => {
            const original = factory.variable('x');
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('Variable');
            expect(copy.value).toBe(original.value);
            expect(copy.equals(original)).toBe(true);
        });

        it('copies the default graph', () => {
            const original = factory.defaultGraph();
            const copy = factory.fromTerm(original);

            expect(copy.termType).toBe('DefaultGraph');
            expect(copy.equals(original)).toBe(true);
        });

        it('copies a quad', () => {
            const original = factory.quad(
                factory.namedNode('http://example.org/subject'),
                factory.namedNode('http://example.org/predicate'),
                factory.literal('value'),
                factory.namedNode('http://example.org/graph')
            );
            const copy = factory.fromTerm(original);

            expect(copy).not.toBe(original);
            expect(copy.termType).toBe('Quad');
            expect(copy.equals(original)).toBe(true);
        });

        it('throws an error for unknown term types', () => {
            const unknownTerm = { termType: 'Unknown', value: 'test' } as any;

            expect(() => factory.fromTerm(unknownTerm)).toThrow('Unknown term type: Unknown');
        });
    });

    describe('fromQuad', () => {
        it('creates a copy of a quad with all components copied', () => {
            const original = factory.quad(
                factory.namedNode('http://example.org/subject'),
                factory.namedNode('http://example.org/predicate'),
                factory.literal('value'),
                factory.namedNode('http://example.org/graph')
            );
            const copy = factory.fromQuad(original);

            expect(copy).not.toBe(original);
            expect(copy.subject).not.toBe(original.subject);
            expect(copy.predicate).not.toBe(original.predicate);
            expect(copy.object).not.toBe(original.object);
            expect(copy.graph).not.toBe(original.graph);
            expect(copy.equals(original)).toBe(true);
        });

        it('creates a copy of a quad with default graph', () => {
            const original = factory.quad(
                factory.namedNode('http://example.org/subject'),
                factory.namedNode('http://example.org/predicate'),
                factory.literal('value')
            );
            const copy = factory.fromQuad(original);

            expect(copy.graph.termType).toBe('DefaultGraph');
            expect(copy.equals(original)).toBe(true);
        });

        it('creates a copy of a quad with blank node subject', () => {
            const original = factory.quad(
                factory.blankNode('b1'),
                factory.namedNode('http://example.org/predicate'),
                factory.literal('value')
            );
            const copy = factory.fromQuad(original);

            expect(copy.subject.termType).toBe('BlankNode');
            expect(copy.equals(original)).toBe(true);
        });
    });

    describe('resetBlankNodeCounter', () => {
        it('resets the blank node counter', () => {
            const node1 = factory.blankNode();
            const node2 = factory.blankNode();

            expect(node1.value).toBe('b1');
            expect(node2.value).toBe('b2');

            factory.resetBlankNodeCounter();

            const node3 = factory.blankNode();
            expect(node3.value).toBe('b1');
        });
    });

    describe('exported dataFactory instance', () => {
        it('is a DataFactory instance', () => {
            expect(dataFactory).toBeInstanceOf(DataFactory);
        });

        it('can create terms', () => {
            const node = dataFactory.namedNode('http://example.org/test');
            expect(node.termType).toBe('NamedNode');
        });
    });
});
