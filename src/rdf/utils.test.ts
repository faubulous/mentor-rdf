import * as n3 from 'n3';
import * as rdflib from 'rdflib';
import { toRdfjsTerm, toRdflibTerm } from './utils';

const { namedNode, blankNode, literal } = n3.DataFactory;

describe('utils', () => {
	describe('toRdflibTerm', () => {
		it('converts NamedNode', () => {
			const t = namedNode('http://example.com/a');
			const r = toRdflibTerm(t);

			expect(r.termType).toBe('NamedNode');
			expect(r.value).toBe('http://example.com/a');
		});

		it('converts BlankNode', () => {
			const t = blankNode('b1');
			const r = toRdflibTerm(t);

			expect(r.termType).toBe('BlankNode');
			expect(r.value).toBe('b1');
		});

		it('converts language Literal', () => {
			const t = literal('hello', 'en');
			const r = toRdflibTerm(t) as rdflib.Literal;

			expect(r.termType).toBe('Literal');
			expect(r.value).toBe('hello');
			expect(r.language).toBe('en');
		});

		it('converts datatype Literal', () => {
			const xsdInteger = namedNode('http://www.w3.org/2001/XMLSchema#integer');
			const t = literal('42', xsdInteger);
			const r = toRdflibTerm(t) as rdflib.Literal;

			expect(r.termType).toBe('Literal');
			expect(r.value).toBe('42');
			expect(r.language).toBe('');
			expect(r.datatype?.value).toBe('http://www.w3.org/2001/XMLSchema#integer');
		});

		it('throws on unsupported termType', () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			expect(() => toRdflibTerm({ termType: 'Variable', value: 'x' } as any)).toThrow(
				/Unsupported RDF termType: Variable/
			);
		});
	});

	describe('toRdfjsTerm', () => {
		it('converts NamedNode', () => {
			const t = rdflib.namedNode('http://example.com/a');
			const r = toRdfjsTerm(t);

			expect(r.termType).toBe('NamedNode');
			expect(r.value).toBe('http://example.com/a');
		});

		it('converts BlankNode', () => {
			const t = rdflib.blankNode('b1');
			const r = toRdfjsTerm(t);

			expect(r.termType).toBe('BlankNode');
			expect(r.value).toBe('b1');
		});

		it('converts language Literal', () => {
			const t = rdflib.lit('hello', 'en');
			const r = toRdfjsTerm(t) as n3.Literal;

			expect(r.termType).toBe('Literal');
			expect(r.value).toBe('hello');
			expect(r.language).toBe('en');
		});

		it('converts datatype Literal', () => {
			const t = rdflib.lit('42', undefined, rdflib.namedNode('http://www.w3.org/2001/XMLSchema#integer'));
			const r = toRdfjsTerm(t) as n3.Literal;

			expect(r.termType).toBe('Literal');
			expect(r.value).toBe('42');
			expect(r.language).toBe('');
			expect(r.datatype.value).toBe('http://www.w3.org/2001/XMLSchema#integer');
		});

		it('throws on unsupported termType', () => {
			expect(() => toRdfjsTerm({ termType: 'Variable', value: 'x' } as any)).toThrow(
				/Unsupported RDF termType: Variable/
			);
		});
	});
});

