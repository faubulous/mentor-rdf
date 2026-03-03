import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the MENTOR vocabulary. */
export const _MENTOR = 'http://example.org/';

export const MENTOR = {
	/** A class that is defined in terms of itself. */
	'RecursiveClass': 'http://example.org/RecursiveClass',
	'RecursiveConcept': 'http://example.org/RecursiveConcept',
	/** A property that is defined in terms of itself. */
	'RecursiveProperty': 'http://example.org/RecursiveProperty',
}

/** Namespace URI of the mentor vocabulary. */
export const _mentor = { termType: 'NamedNode', value: 'http://example.org/', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/' } as NamedNode;

export const mentor = {
	/** A class that is defined in terms of itself. */
	'RecursiveClass': { termType: 'NamedNode', value: 'http://example.org/RecursiveClass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/RecursiveClass' } as NamedNode,
	'RecursiveConcept': { termType: 'NamedNode', value: 'http://example.org/RecursiveConcept', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/RecursiveConcept' } as NamedNode,
	/** A property that is defined in terms of itself. */
	'RecursiveProperty': { termType: 'NamedNode', value: 'http://example.org/RecursiveProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/RecursiveProperty' } as NamedNode,
}