import { NamedNode } from '@rdfjs/types';

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
export const _shapes = { termType: 'NamedNode', value: 'http://example.org/', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/' } as NamedNode;

export const shapes = {
	'AlternativePropertyShape': { termType: 'NamedNode', value: 'http://example.org/AlternativePropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/AlternativePropertyShape' } as NamedNode,
	/** A constraint component that defines an anonymous / blank node validator. */
	'AnonymousValidatorConstraintComponent': { termType: 'NamedNode', value: 'http://example.org/AnonymousValidatorConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/AnonymousValidatorConstraintComponent' } as NamedNode,
	'ChildRule': { termType: 'NamedNode', value: 'http://example.org/ChildRule', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/ChildRule' } as NamedNode,
	'ClassTypePropertyShape': { termType: 'NamedNode', value: 'http://example.org/ClassTypePropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/ClassTypePropertyShape' } as NamedNode,
	'CustomerNamePropertyShape': { termType: 'NamedNode', value: 'http://example.org/CustomerNamePropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/CustomerNamePropertyShape' } as NamedNode,
	'CustomerShape': { termType: 'NamedNode', value: 'http://example.org/CustomerShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/CustomerShape' } as NamedNode,
	'ExamplePropertyShape': { termType: 'NamedNode', value: 'http://example.org/ExamplePropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/ExamplePropertyShape' } as NamedNode,
	'FatherShape': { termType: 'NamedNode', value: 'http://example.org/FatherShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/FatherShape' } as NamedNode,
	'InverseCustomerPropertyShape': { termType: 'NamedNode', value: 'http://example.org/InverseCustomerPropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/InverseCustomerPropertyShape' } as NamedNode,
	'InvoiceShape': { termType: 'NamedNode', value: 'http://example.org/InvoiceShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/InvoiceShape' } as NamedNode,
	'NamePropertyShape': { termType: 'NamedNode', value: 'http://example.org/NamePropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/NamePropertyShape' } as NamedNode,
	'PatternConstraintComponent': { termType: 'NamedNode', value: 'http://example.org/PatternConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/PatternConstraintComponent' } as NamedNode,
	'Person': { termType: 'NamedNode', value: 'http://example.org/Person', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/Person' } as NamedNode,
	'PersonShape': { termType: 'NamedNode', value: 'http://example.org/PersonShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/PersonShape' } as NamedNode,
	'SubClassTypePropertyShape': { termType: 'NamedNode', value: 'http://example.org/SubClassTypePropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/SubClassTypePropertyShape' } as NamedNode,
	'UnreferencedJavaScriptValidator': { termType: 'NamedNode', value: 'http://example.org/UnreferencedJavaScriptValidator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/UnreferencedJavaScriptValidator' } as NamedNode,
	'customer': { termType: 'NamedNode', value: 'http://example.org/customer', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/customer' } as NamedNode,
	'father': { termType: 'NamedNode', value: 'http://example.org/father', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/father' } as NamedNode,
	'hasPattern': { termType: 'NamedNode', value: 'http://example.org/hasPattern', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/hasPattern' } as NamedNode,
	'mother': { termType: 'NamedNode', value: 'http://example.org/mother', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/mother' } as NamedNode,
	'name': { termType: 'NamedNode', value: 'http://example.org/name', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://example.org/name' } as NamedNode,
}