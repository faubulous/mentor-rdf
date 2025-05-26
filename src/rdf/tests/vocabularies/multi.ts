import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

/** Namespace URI of the MULTI vocabulary. */
export const _MULTI = 'http://www.example.org/';

export const MULTI = {
	'Class1': 'http://www.example.org/Class1',
	'Class2': 'http://www.example.org/Class2',
	'Class3': 'http://www.example.org/Class3',
	'Class4': 'http://www.example.org/Class4',
	/** This is an ontology file to test edge cases for class / property / individual retrieval. */
	'ontology': 'http://www.example.org/ontology',
	'ontology2': 'http://www.example.org/ontology2',
	'property1': 'http://www.example.org/property1',
	'property2': 'http://www.example.org/property2',
	'property3': 'http://www.example.org/property3',
}

/** Namespace URI of the multi vocabulary. */
export const _multi = namedNode('http://www.example.org/');

export const multi = {
	'Class1': namedNode('http://www.example.org/Class1'),
	'Class2': namedNode('http://www.example.org/Class2'),
	'Class3': namedNode('http://www.example.org/Class3'),
	'Class4': namedNode('http://www.example.org/Class4'),
	/** This is an ontology file to test edge cases for class / property / individual retrieval. */
	'ontology': namedNode('http://www.example.org/ontology'),
	'ontology2': namedNode('http://www.example.org/ontology2'),
	'property1': namedNode('http://www.example.org/property1'),
	'property2': namedNode('http://www.example.org/property2'),
	'property3': namedNode('http://www.example.org/property3'),
}