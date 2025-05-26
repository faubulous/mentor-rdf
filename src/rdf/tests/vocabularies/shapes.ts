import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

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
export const _shapes = namedNode('http://example.org/');

export const shapes = {
	'AlternativePropertyShape': namedNode('http://example.org/AlternativePropertyShape'),
	/** A constraint component that defines an anonymous / blank node validator. */
	'AnonymousValidatorConstraintComponent': namedNode('http://example.org/AnonymousValidatorConstraintComponent'),
	'ChildRule': namedNode('http://example.org/ChildRule'),
	'ClassTypePropertyShape': namedNode('http://example.org/ClassTypePropertyShape'),
	'CustomerNamePropertyShape': namedNode('http://example.org/CustomerNamePropertyShape'),
	'CustomerShape': namedNode('http://example.org/CustomerShape'),
	'ExamplePropertyShape': namedNode('http://example.org/ExamplePropertyShape'),
	'FatherShape': namedNode('http://example.org/FatherShape'),
	'InverseCustomerPropertyShape': namedNode('http://example.org/InverseCustomerPropertyShape'),
	'InvoiceShape': namedNode('http://example.org/InvoiceShape'),
	'NamePropertyShape': namedNode('http://example.org/NamePropertyShape'),
	'PatternConstraintComponent': namedNode('http://example.org/PatternConstraintComponent'),
	'Person': namedNode('http://example.org/Person'),
	'PersonShape': namedNode('http://example.org/PersonShape'),
	'SubClassTypePropertyShape': namedNode('http://example.org/SubClassTypePropertyShape'),
	'UnreferencedJavaScriptValidator': namedNode('http://example.org/UnreferencedJavaScriptValidator'),
	'customer': namedNode('http://example.org/customer'),
	'father': namedNode('http://example.org/father'),
	'hasPattern': namedNode('http://example.org/hasPattern'),
	'mother': namedNode('http://example.org/mother'),
	'name': namedNode('http://example.org/name'),
}