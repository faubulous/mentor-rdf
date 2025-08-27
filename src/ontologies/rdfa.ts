import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

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
export const _rdfa = namedNode('http://www.w3.org/ns/rdfa#');

export const rdfa = {
	'me': namedNode('http://www.ivan-herman.net/foaf#me'),
	'DocumentError': namedNode('http://www.w3.org/ns/rdfa#DocumentError'),
	'Error': namedNode('http://www.w3.org/ns/rdfa#Error'),
	'Info': namedNode('http://www.w3.org/ns/rdfa#Info'),
	'PGClass': namedNode('http://www.w3.org/ns/rdfa#PGClass'),
	'Pattern': namedNode('http://www.w3.org/ns/rdfa#Pattern'),
	'PrefixMapping': namedNode('http://www.w3.org/ns/rdfa#PrefixMapping'),
	'PrefixOrTermMapping': namedNode('http://www.w3.org/ns/rdfa#PrefixOrTermMapping'),
	'PrefixRedefinition': namedNode('http://www.w3.org/ns/rdfa#PrefixRedefinition'),
	'TermMapping': namedNode('http://www.w3.org/ns/rdfa#TermMapping'),
	'UnresolvedCURIE': namedNode('http://www.w3.org/ns/rdfa#UnresolvedCURIE'),
	'UnresolvedTerm': namedNode('http://www.w3.org/ns/rdfa#UnresolvedTerm'),
	'VocabReferenceError': namedNode('http://www.w3.org/ns/rdfa#VocabReferenceError'),
	'Warning': namedNode('http://www.w3.org/ns/rdfa#Warning'),
	'context': namedNode('http://www.w3.org/ns/rdfa#context'),
	'copy': namedNode('http://www.w3.org/ns/rdfa#copy'),
	'prefix': namedNode('http://www.w3.org/ns/rdfa#prefix'),
	'term': namedNode('http://www.w3.org/ns/rdfa#term'),
	'uri': namedNode('http://www.w3.org/ns/rdfa#uri'),
	'usesVocabulary': namedNode('http://www.w3.org/ns/rdfa#usesVocabulary'),
	'vocabulary': namedNode('http://www.w3.org/ns/rdfa#vocabulary'),
}