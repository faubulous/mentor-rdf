import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

/** Namespace URI of the SKOS_XL vocabulary. */
export const _SKOS_XL = 'http://www.w3.org/2008/05/skos-xl#';

export const SKOS_XL = {
	'skos_xl': 'http://www.w3.org/2008/05/skos-xl',
	/** A special class of lexical entities. */
	'Label': 'http://www.w3.org/2008/05/skos-xl#Label',
	/** The property skosxl:altLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:altLabel. */
	'altLabel': 'http://www.w3.org/2008/05/skos-xl#altLabel',
	/** The property skosxl:hiddenLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:hiddenLabel. */
	'hiddenLabel': 'http://www.w3.org/2008/05/skos-xl#hiddenLabel',
	/** The property skosxl:labelRelation is used for representing binary ('direct') relations between instances of the class skosxl:Label. */
	'labelRelation': 'http://www.w3.org/2008/05/skos-xl#labelRelation',
	/** The property skosxl:literalForm is used to give the literal form of an skosxl:Label. */
	'literalForm': 'http://www.w3.org/2008/05/skos-xl#literalForm',
	/** The property skosxl:prefLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:prefLabel. */
	'prefLabel': 'http://www.w3.org/2008/05/skos-xl#prefLabel',
}

/** Namespace URI of the skos_xl vocabulary. */
export const _skos_xl = namedNode('http://www.w3.org/2008/05/skos-xl#');

export const skos_xl = {
	'skos_xl': namedNode('http://www.w3.org/2008/05/skos-xl'),
	/** A special class of lexical entities. */
	'Label': namedNode('http://www.w3.org/2008/05/skos-xl#Label'),
	/** The property skosxl:altLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:altLabel. */
	'altLabel': namedNode('http://www.w3.org/2008/05/skos-xl#altLabel'),
	/** The property skosxl:hiddenLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:hiddenLabel. */
	'hiddenLabel': namedNode('http://www.w3.org/2008/05/skos-xl#hiddenLabel'),
	/** The property skosxl:labelRelation is used for representing binary ('direct') relations between instances of the class skosxl:Label. */
	'labelRelation': namedNode('http://www.w3.org/2008/05/skos-xl#labelRelation'),
	/** The property skosxl:literalForm is used to give the literal form of an skosxl:Label. */
	'literalForm': namedNode('http://www.w3.org/2008/05/skos-xl#literalForm'),
	/** The property skosxl:prefLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:prefLabel. */
	'prefLabel': namedNode('http://www.w3.org/2008/05/skos-xl#prefLabel'),
}