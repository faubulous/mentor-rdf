import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

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
export const _mentor = namedNode('http://example.org/');

export const mentor = {
	/** A class that is defined in terms of itself. */
	'RecursiveClass': namedNode('http://example.org/RecursiveClass'),
	'RecursiveConcept': namedNode('http://example.org/RecursiveConcept'),
	/** A property that is defined in terms of itself. */
	'RecursiveProperty': namedNode('http://example.org/RecursiveProperty'),
}