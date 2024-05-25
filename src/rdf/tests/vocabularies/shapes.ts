import * as n3 from "n3";

export const SHAPES = {
	'customer': 'http://example.org/customer',
	'Customer': 'http://example.org/Customer',
	'CustomerShape': 'http://example.org/CustomerShape',
	'ExamplePropertyShape': 'http://example.org/ExamplePropertyShape',
	'InvoiceShape': 'http://example.org/InvoiceShape',
	'Person': 'http://example.org/Person',
	'PersonShape': 'http://example.org/PersonShape',
}

export const shapes = {
	'customer': new n3.NamedNode('http://example.org/customer'),
	'Customer': new n3.NamedNode('http://example.org/Customer'),
	'CustomerShape': new n3.NamedNode('http://example.org/CustomerShape'),
	'ExamplePropertyShape': new n3.NamedNode('http://example.org/ExamplePropertyShape'),
	'InvoiceShape': new n3.NamedNode('http://example.org/InvoiceShape'),
	'Person': new n3.NamedNode('http://example.org/Person'),
	'PersonShape': new n3.NamedNode('http://example.org/PersonShape'),
}