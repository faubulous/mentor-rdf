import * as n3 from "n3";

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

export const rdf = {
	/** The class of containers of alternatives. */
	'Alt': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'),
	/** The class of unordered containers. */
	'Bag': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'),
	/** A class representing a compound literal. */
	'CompoundLiteral': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral'),
	/** The datatype of RDF literals storing fragments of HTML content */
	'HTML': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML'),
	/** The datatype of RDF literals storing JSON content. */
	'JSON': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON'),
	/** The class of RDF Lists. */
	'List': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#List'),
	/** The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2 */
	'PlainLiteral': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral'),
	/** The class of RDF properties. */
	'Property': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'),
	/** The class of ordered containers. */
	'Seq': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'),
	/** The class of RDF statements. */
	'Statement': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'),
	/** The datatype of XML literal values. */
	'XMLLiteral': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral'),
	/** The base direction component of a CompoundLiteral. */
	'direction': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#direction'),
	/** The first item in the subject RDF list. */
	'first': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#first'),
	/** The datatype of language-tagged string values */
	'langString': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString'),
	/** The language component of a CompoundLiteral. */
	'language': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#language'),
	/** The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it. */
	'nil': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#nil'),
	/** The object of the subject RDF statement. */
	'object': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#object'),
	/** The predicate of the subject RDF statement. */
	'predicate': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'),
	/** The rest of the subject RDF list after the first item. */
	'rest': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'),
	/** The subject of the subject RDF statement. */
	'subject': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'),
	/** The subject is an instance of a class. */
	'type': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
	/** Idiomatic property used for structured values. */
	'value': new n3.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#value'),
}