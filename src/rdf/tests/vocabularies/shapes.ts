import * as n3 from "n3";

/** Namespace URI of the SHAPES vocabulary. */
export const _SHAPES = 'http://example.org/';

export const SHAPES = {
	'AlternativePropertyShape': 'http://example.org/AlternativePropertyShape',
	/** A constraint component that defines an anonymous / blank node validator. */
	'AnonymousValidatorConstraintComponent': 'http://example.org/AnonymousValidatorConstraintComponent',
	'ChildRule': 'http://example.org/ChildRule',
	'ClassTypePropertyShape': 'http://example.org/ClassTypePropertyShape',
	'CustomerNamePropertyShape': 'http://example.org/CustomerNamePropertyShape',
	'CustomerShape': 'http://example.org/CustomerShape',
	'ExamplePropertyShape': 'http://example.org/ExamplePropertyShape',
	'FatherShape': 'http://example.org/FatherShape',
	'InverseCustomerPropertyShape': 'http://example.org/InverseCustomerPropertyShape',
	'InvoiceShape': 'http://example.org/InvoiceShape',
	'NamePropertyShape': 'http://example.org/NamePropertyShape',
	'PatternConstraintComponent': 'http://example.org/PatternConstraintComponent',
	'Person': 'http://example.org/Person',
	'PersonShape': 'http://example.org/PersonShape',
	'SubClassTypePropertyShape': 'http://example.org/SubClassTypePropertyShape',
	'UnreferencedJavaScriptValidator': 'http://example.org/UnreferencedJavaScriptValidator',
	'customer': 'http://example.org/customer',
	'father': 'http://example.org/father',
	'hasPattern': 'http://example.org/hasPattern',
	'mother': 'http://example.org/mother',
	'name': 'http://example.org/name',
}

/** Namespace URI of the shapes vocabulary. */
export const _shapes = new n3.NamedNode('http://example.org/');

export const shapes = {
	'AlternativePropertyShape': new n3.NamedNode('http://example.org/AlternativePropertyShape'),
	/** A constraint component that defines an anonymous / blank node validator. */
	'AnonymousValidatorConstraintComponent': new n3.NamedNode('http://example.org/AnonymousValidatorConstraintComponent'),
	'ChildRule': new n3.NamedNode('http://example.org/ChildRule'),
	'ClassTypePropertyShape': new n3.NamedNode('http://example.org/ClassTypePropertyShape'),
	'CustomerNamePropertyShape': new n3.NamedNode('http://example.org/CustomerNamePropertyShape'),
	'CustomerShape': new n3.NamedNode('http://example.org/CustomerShape'),
	'ExamplePropertyShape': new n3.NamedNode('http://example.org/ExamplePropertyShape'),
	'FatherShape': new n3.NamedNode('http://example.org/FatherShape'),
	'InverseCustomerPropertyShape': new n3.NamedNode('http://example.org/InverseCustomerPropertyShape'),
	'InvoiceShape': new n3.NamedNode('http://example.org/InvoiceShape'),
	'NamePropertyShape': new n3.NamedNode('http://example.org/NamePropertyShape'),
	'PatternConstraintComponent': new n3.NamedNode('http://example.org/PatternConstraintComponent'),
	'Person': new n3.NamedNode('http://example.org/Person'),
	'PersonShape': new n3.NamedNode('http://example.org/PersonShape'),
	'SubClassTypePropertyShape': new n3.NamedNode('http://example.org/SubClassTypePropertyShape'),
	'UnreferencedJavaScriptValidator': new n3.NamedNode('http://example.org/UnreferencedJavaScriptValidator'),
	'customer': new n3.NamedNode('http://example.org/customer'),
	'father': new n3.NamedNode('http://example.org/father'),
	'hasPattern': new n3.NamedNode('http://example.org/hasPattern'),
	'mother': new n3.NamedNode('http://example.org/mother'),
	'name': new n3.NamedNode('http://example.org/name'),
}