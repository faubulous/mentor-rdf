import * as n3 from "n3";

/** Namespace URI of the SHAPES vocabulary. */
export const _SHAPES = 'http://example.org/';

export const SHAPES = {
	/** A constraint component that defines an anonymous / blank node validator. */
	'AnonymousValidatorConstraintComponent': 'http://example.org/AnonymousValidatorConstraintComponent',
	'CustomerNamePropertyShape': 'http://example.org/CustomerNamePropertyShape',
	'CustomerShape': 'http://example.org/CustomerShape',
	'ExamplePropertyShape': 'http://example.org/ExamplePropertyShape',
	'InverseCustomerPropertyShape': 'http://example.org/InverseCustomerPropertyShape',
	'InvoiceShape': 'http://example.org/InvoiceShape',
	'NamePropertyShape': 'http://example.org/NamePropertyShape',
	'ParentPropertyShape': 'http://example.org/ParentPropertyShape',
	'PatternConstraintComponent': 'http://example.org/PatternConstraintComponent',
	'Person': 'http://example.org/Person',
	'PersonShape': 'http://example.org/PersonShape',
	'TypeSubClassOfPropertyShape': 'http://example.org/TypeSubClassOfPropertyShape',
	'UnreferencedJavaScriptValidator': 'http://example.org/UnreferencedJavaScriptValidator',
	'customer': 'http://example.org/customer',
	'hasPattern': 'http://example.org/hasPattern',
	'name': 'http://example.org/name',
}

/** Namespace URI of the shapes vocabulary. */
export const _shapes = new n3.NamedNode('http://example.org/');

export const shapes = {
	/** A constraint component that defines an anonymous / blank node validator. */
	'AnonymousValidatorConstraintComponent': new n3.NamedNode('http://example.org/AnonymousValidatorConstraintComponent'),
	'CustomerNamePropertyShape': new n3.NamedNode('http://example.org/CustomerNamePropertyShape'),
	'CustomerShape': new n3.NamedNode('http://example.org/CustomerShape'),
	'ExamplePropertyShape': new n3.NamedNode('http://example.org/ExamplePropertyShape'),
	'InverseCustomerPropertyShape': new n3.NamedNode('http://example.org/InverseCustomerPropertyShape'),
	'InvoiceShape': new n3.NamedNode('http://example.org/InvoiceShape'),
	'NamePropertyShape': new n3.NamedNode('http://example.org/NamePropertyShape'),
	'ParentPropertyShape': new n3.NamedNode('http://example.org/ParentPropertyShape'),
	'PatternConstraintComponent': new n3.NamedNode('http://example.org/PatternConstraintComponent'),
	'Person': new n3.NamedNode('http://example.org/Person'),
	'PersonShape': new n3.NamedNode('http://example.org/PersonShape'),
	'TypeSubClassOfPropertyShape': new n3.NamedNode('http://example.org/TypeSubClassOfPropertyShape'),
	'UnreferencedJavaScriptValidator': new n3.NamedNode('http://example.org/UnreferencedJavaScriptValidator'),
	'customer': new n3.NamedNode('http://example.org/customer'),
	'hasPattern': new n3.NamedNode('http://example.org/hasPattern'),
	'name': new n3.NamedNode('http://example.org/name'),
}