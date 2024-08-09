import * as n3 from "n3";

/** Namespace URI of the RDFA vocabulary. */
export const _RDFA = 'http://www.w3.org/ns/rdfa#';

export const RDFA = {
	'me': 'http://www.ivan-herman.net/foaf#me',
	'DocumentError': 'http://www.w3.org/ns/rdfa#DocumentError',
	'Error': 'http://www.w3.org/ns/rdfa#Error',
	'Info': 'http://www.w3.org/ns/rdfa#Info',
	'PGClass': 'http://www.w3.org/ns/rdfa#PGClass',
	'Pattern': 'http://www.w3.org/ns/rdfa#Pattern',
	'PrefixMapping': 'http://www.w3.org/ns/rdfa#PrefixMapping',
	'PrefixOrTermMapping': 'http://www.w3.org/ns/rdfa#PrefixOrTermMapping',
	'PrefixRedefinition': 'http://www.w3.org/ns/rdfa#PrefixRedefinition',
	'TermMapping': 'http://www.w3.org/ns/rdfa#TermMapping',
	'UnresolvedCURIE': 'http://www.w3.org/ns/rdfa#UnresolvedCURIE',
	'UnresolvedTerm': 'http://www.w3.org/ns/rdfa#UnresolvedTerm',
	'VocabReferenceError': 'http://www.w3.org/ns/rdfa#VocabReferenceError',
	'Warning': 'http://www.w3.org/ns/rdfa#Warning',
	'context': 'http://www.w3.org/ns/rdfa#context',
	'copy': 'http://www.w3.org/ns/rdfa#copy',
	'prefix': 'http://www.w3.org/ns/rdfa#prefix',
	'term': 'http://www.w3.org/ns/rdfa#term',
	'uri': 'http://www.w3.org/ns/rdfa#uri',
	'usesVocabulary': 'http://www.w3.org/ns/rdfa#usesVocabulary',
	'vocabulary': 'http://www.w3.org/ns/rdfa#vocabulary',
}

/** Namespace URI of the rdfa vocabulary. */
export const _rdfa = new n3.NamedNode('http://www.w3.org/ns/rdfa#');

export const rdfa = {
	'me': new n3.NamedNode('http://www.ivan-herman.net/foaf#me'),
	'DocumentError': new n3.NamedNode('http://www.w3.org/ns/rdfa#DocumentError'),
	'Error': new n3.NamedNode('http://www.w3.org/ns/rdfa#Error'),
	'Info': new n3.NamedNode('http://www.w3.org/ns/rdfa#Info'),
	'PGClass': new n3.NamedNode('http://www.w3.org/ns/rdfa#PGClass'),
	'Pattern': new n3.NamedNode('http://www.w3.org/ns/rdfa#Pattern'),
	'PrefixMapping': new n3.NamedNode('http://www.w3.org/ns/rdfa#PrefixMapping'),
	'PrefixOrTermMapping': new n3.NamedNode('http://www.w3.org/ns/rdfa#PrefixOrTermMapping'),
	'PrefixRedefinition': new n3.NamedNode('http://www.w3.org/ns/rdfa#PrefixRedefinition'),
	'TermMapping': new n3.NamedNode('http://www.w3.org/ns/rdfa#TermMapping'),
	'UnresolvedCURIE': new n3.NamedNode('http://www.w3.org/ns/rdfa#UnresolvedCURIE'),
	'UnresolvedTerm': new n3.NamedNode('http://www.w3.org/ns/rdfa#UnresolvedTerm'),
	'VocabReferenceError': new n3.NamedNode('http://www.w3.org/ns/rdfa#VocabReferenceError'),
	'Warning': new n3.NamedNode('http://www.w3.org/ns/rdfa#Warning'),
	'context': new n3.NamedNode('http://www.w3.org/ns/rdfa#context'),
	'copy': new n3.NamedNode('http://www.w3.org/ns/rdfa#copy'),
	'prefix': new n3.NamedNode('http://www.w3.org/ns/rdfa#prefix'),
	'term': new n3.NamedNode('http://www.w3.org/ns/rdfa#term'),
	'uri': new n3.NamedNode('http://www.w3.org/ns/rdfa#uri'),
	'usesVocabulary': new n3.NamedNode('http://www.w3.org/ns/rdfa#usesVocabulary'),
	'vocabulary': new n3.NamedNode('http://www.w3.org/ns/rdfa#vocabulary'),
}