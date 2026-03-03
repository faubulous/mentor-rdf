import { NamedNode } from '@rdfjs/types';

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
export const _multi = { termType: 'NamedNode', value: 'http://www.example.org/', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/' } as NamedNode;

export const multi = {
	'Class1': { termType: 'NamedNode', value: 'http://www.example.org/Class1', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/Class1' } as NamedNode,
	'Class2': { termType: 'NamedNode', value: 'http://www.example.org/Class2', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/Class2' } as NamedNode,
	'Class3': { termType: 'NamedNode', value: 'http://www.example.org/Class3', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/Class3' } as NamedNode,
	'Class4': { termType: 'NamedNode', value: 'http://www.example.org/Class4', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/Class4' } as NamedNode,
	/** This is an ontology file to test edge cases for class / property / individual retrieval. */
	'ontology': { termType: 'NamedNode', value: 'http://www.example.org/ontology', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/ontology' } as NamedNode,
	'ontology2': { termType: 'NamedNode', value: 'http://www.example.org/ontology2', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/ontology2' } as NamedNode,
	'property1': { termType: 'NamedNode', value: 'http://www.example.org/property1', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/property1' } as NamedNode,
	'property2': { termType: 'NamedNode', value: 'http://www.example.org/property2', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/property2' } as NamedNode,
	'property3': { termType: 'NamedNode', value: 'http://www.example.org/property3', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.example.org/property3' } as NamedNode,
}