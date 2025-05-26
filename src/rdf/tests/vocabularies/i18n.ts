import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

/** Namespace URI of the I18N vocabulary. */
export const _I18N = 'file://src/rdf/tests/vocabularies/i18n.ttl#';

export const I18N = {
	/** This class has language tags in all languages. */
	'Class1': 'file://src/rdf/tests/vocabularies/i18n.ttl#Class1',
	/** This class only has a label with a German language tag. */
	'Class2': 'file://src/rdf/tests/vocabularies/i18n.ttl#Class2',
	'Class3': 'file://src/rdf/tests/vocabularies/i18n.ttl#Class3',
	/** This class does not have any language tag on the label, but a tagged comment. */
	'Class4': 'file://src/rdf/tests/vocabularies/i18n.ttl#Class4',
}

/** Namespace URI of the i18n vocabulary. */
export const _i18n = namedNode('file://src/rdf/tests/vocabularies/i18n.ttl#');

export const i18n = {
	/** This class has language tags in all languages. */
	'Class1': namedNode('file://src/rdf/tests/vocabularies/i18n.ttl#Class1'),
	/** This class only has a label with a German language tag. */
	'Class2': namedNode('file://src/rdf/tests/vocabularies/i18n.ttl#Class2'),
	'Class3': namedNode('file://src/rdf/tests/vocabularies/i18n.ttl#Class3'),
	/** This class does not have any language tag on the label, but a tagged comment. */
	'Class4': namedNode('file://src/rdf/tests/vocabularies/i18n.ttl#Class4'),
}