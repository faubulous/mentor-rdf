import * as n3 from "n3";

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

export const multi = {
	'Class1': new n3.NamedNode('http://www.example.org/Class1'),
	'Class2': new n3.NamedNode('http://www.example.org/Class2'),
	'Class3': new n3.NamedNode('http://www.example.org/Class3'),
	'Class4': new n3.NamedNode('http://www.example.org/Class4'),
	/** This is an ontology file to test edge cases for class / property / individual retrieval. */
	'ontology': new n3.NamedNode('http://www.example.org/ontology'),
	'ontology2': new n3.NamedNode('http://www.example.org/ontology2'),
	'property1': new n3.NamedNode('http://www.example.org/property1'),
	'property2': new n3.NamedNode('http://www.example.org/property2'),
	'property3': new n3.NamedNode('http://www.example.org/property3'),
}