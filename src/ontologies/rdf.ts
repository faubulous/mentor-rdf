import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the RDF vocabulary. */
export const _RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';

export const RDF = {
	/** The class of containers of alternatives. */
	'Alt': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt',
	/** The class of unordered containers. */
	'Bag': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	/** A class representing a compound literal. */
	'CompoundLiteral': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral',
	/** The datatype of RDF literals storing fragments of HTML content */
	'HTML': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML',
	/** The datatype of RDF literals storing JSON content. */
	'JSON': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON',
	/** The class of RDF Lists. */
	'List': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#List',
	/** The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2 */
	'PlainLiteral': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral',
	/** The class of RDF properties. */
	'Property': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	/** The class of ordered containers. */
	'Seq': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	/** The class of RDF statements. */
	'Statement': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement',
	/** The datatype of XML literal values. */
	'XMLLiteral': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
	/** The base direction component of a CompoundLiteral. */
	'direction': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#direction',
	/** The first item in the subject RDF list. */
	'first': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#first',
	/** The datatype of language-tagged string values */
	'langString': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString',
	/** The language component of a CompoundLiteral. */
	'language': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#language',
	/** The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it. */
	'nil': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil',
	/** The object of the subject RDF statement. */
	'object': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object',
	/** The predicate of the subject RDF statement. */
	'predicate': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate',
	/** The rest of the subject RDF list after the first item. */
	'rest': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest',
	/** The subject of the subject RDF statement. */
	'subject': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject',
	/** The subject is an instance of a class. */
	'type': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
	/** Idiomatic property used for structured values. */
	'value': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
}

/** Namespace URI of the rdf vocabulary. */
export const _rdf = { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#' } as NamedNode;

export const rdf = {
	/** The class of containers of alternatives. */
	'Alt': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt' } as NamedNode,
	/** The class of unordered containers. */
	'Bag': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag' } as NamedNode,
	/** A class representing a compound literal. */
	'CompoundLiteral': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral' } as NamedNode,
	/** The datatype of RDF literals storing fragments of HTML content */
	'HTML': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML' } as NamedNode,
	/** The datatype of RDF literals storing JSON content. */
	'JSON': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON' } as NamedNode,
	/** The class of RDF Lists. */
	'List': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#List', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#List' } as NamedNode,
	/** The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2 */
	'PlainLiteral': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral' } as NamedNode,
	/** The class of RDF properties. */
	'Property': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property' } as NamedNode,
	/** The class of ordered containers. */
	'Seq': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq' } as NamedNode,
	/** The class of RDF statements. */
	'Statement': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement' } as NamedNode,
	/** The datatype of XML literal values. */
	'XMLLiteral': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral' } as NamedNode,
	/** The base direction component of a CompoundLiteral. */
	'direction': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#direction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#direction' } as NamedNode,
	/** The first item in the subject RDF list. */
	'first': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#first', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#first' } as NamedNode,
	/** The datatype of language-tagged string values */
	'langString': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString' } as NamedNode,
	/** The language component of a CompoundLiteral. */
	'language': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#language', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#language' } as NamedNode,
	/** The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it. */
	'nil': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil' } as NamedNode,
	/** The object of the subject RDF statement. */
	'object': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object' } as NamedNode,
	/** The predicate of the subject RDF statement. */
	'predicate': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate' } as NamedNode,
	/** The rest of the subject RDF list after the first item. */
	'rest': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest' } as NamedNode,
	/** The subject of the subject RDF statement. */
	'subject': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject' } as NamedNode,
	/** The subject is an instance of a class. */
	'type': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' } as NamedNode,
	/** Idiomatic property used for structured values. */
	'value': { termType: 'NamedNode', value: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value' } as NamedNode,
}