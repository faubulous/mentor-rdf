import * as n3 from "n3";

export const SHAPES = {
	'CustomerShape': 'http://example.org/CustomerShape',
	'ExamplePropertyShape': 'http://example.org/ExamplePropertyShape',
	'InvoiceShape': 'http://example.org/InvoiceShape',
	'NamePropertyShape': 'http://example.org/NamePropertyShape',
	'PatternConstraintComponent': 'http://example.org/PatternConstraintComponent',
	'Person': 'http://example.org/Person',
	'PersonShape': 'http://example.org/PersonShape',
	'customer': 'http://example.org/customer',
	'hasPattern': 'http://example.org/hasPattern',
	'name': 'http://example.org/name',
}

export const shapes = {
	'CustomerShape': new n3.NamedNode('http://example.org/CustomerShape'),
	'ExamplePropertyShape': new n3.NamedNode('http://example.org/ExamplePropertyShape'),
	'InvoiceShape': new n3.NamedNode('http://example.org/InvoiceShape'),
	'NamePropertyShape': new n3.NamedNode('http://example.org/NamePropertyShape'),
	'PatternConstraintComponent': new n3.NamedNode('http://example.org/PatternConstraintComponent'),
	'Person': new n3.NamedNode('http://example.org/Person'),
	'PersonShape': new n3.NamedNode('http://example.org/PersonShape'),
	'customer': new n3.NamedNode('http://example.org/customer'),
	'hasPattern': new n3.NamedNode('http://example.org/hasPattern'),
	'name': new n3.NamedNode('http://example.org/name'),
}