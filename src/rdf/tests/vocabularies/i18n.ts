import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the I18N vocabulary. */
export const _I18N = 'workspace:src/rdf/tests/vocabularies/i18n.ttl#';

export const I18N = {
	/** This class has language tags in all languages. */
	'Class1': 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class1',
	/** This class only has a label with a German language tag. */
	'Class2': 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class2',
	'Class3': 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class3',
	/** This class does not have any language tag on the label, but a tagged comment. */
	'Class4': 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class4',
}

/** Namespace URI of the i18n vocabulary. */
export const _i18n = { termType: 'NamedNode', value: 'workspace:src/rdf/tests/vocabularies/i18n.ttl#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'workspace:src/rdf/tests/vocabularies/i18n.ttl#' } as NamedNode;

export const i18n = {
	/** This class has language tags in all languages. */
	'Class1': { termType: 'NamedNode', value: 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class1', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class1' } as NamedNode,
	/** This class only has a label with a German language tag. */
	'Class2': { termType: 'NamedNode', value: 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class2', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class2' } as NamedNode,
	'Class3': { termType: 'NamedNode', value: 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class3', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class3' } as NamedNode,
	/** This class does not have any language tag on the label, but a tagged comment. */
	'Class4': { termType: 'NamedNode', value: 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class4', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'workspace:src/rdf/tests/vocabularies/i18n.ttl#Class4' } as NamedNode,
}