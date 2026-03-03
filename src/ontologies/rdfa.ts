import { NamedNode } from '@rdfjs/types';

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
export const _rdfa = { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#' } as NamedNode;

export const rdfa = {
	'me': { termType: 'NamedNode', value: 'http://www.ivan-herman.net/foaf#me', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.ivan-herman.net/foaf#me' } as NamedNode,
	'DocumentError': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#DocumentError', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#DocumentError' } as NamedNode,
	'Error': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#Error', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#Error' } as NamedNode,
	'Info': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#Info', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#Info' } as NamedNode,
	'PGClass': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#PGClass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#PGClass' } as NamedNode,
	'Pattern': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#Pattern', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#Pattern' } as NamedNode,
	'PrefixMapping': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#PrefixMapping', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#PrefixMapping' } as NamedNode,
	'PrefixOrTermMapping': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#PrefixOrTermMapping', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#PrefixOrTermMapping' } as NamedNode,
	'PrefixRedefinition': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#PrefixRedefinition', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#PrefixRedefinition' } as NamedNode,
	'TermMapping': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#TermMapping', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#TermMapping' } as NamedNode,
	'UnresolvedCURIE': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#UnresolvedCURIE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#UnresolvedCURIE' } as NamedNode,
	'UnresolvedTerm': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#UnresolvedTerm', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#UnresolvedTerm' } as NamedNode,
	'VocabReferenceError': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#VocabReferenceError', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#VocabReferenceError' } as NamedNode,
	'Warning': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#Warning', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#Warning' } as NamedNode,
	'context': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#context', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#context' } as NamedNode,
	'copy': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#copy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#copy' } as NamedNode,
	'prefix': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#prefix', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#prefix' } as NamedNode,
	'term': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#term', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#term' } as NamedNode,
	'uri': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#uri', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#uri' } as NamedNode,
	'usesVocabulary': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#usesVocabulary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#usesVocabulary' } as NamedNode,
	'vocabulary': { termType: 'NamedNode', value: 'http://www.w3.org/ns/rdfa#vocabulary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/rdfa#vocabulary' } as NamedNode,
}