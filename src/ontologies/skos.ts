import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the SKOS vocabulary. */
export const _SKOS = 'http://www.w3.org/2004/02/skos/core#';

export const SKOS = {
	'core': 'http://www.w3.org/2004/02/skos/core',
	/** A meaningful collection of concepts. */
	'Collection': 'http://www.w3.org/2004/02/skos/core#Collection',
	/** An idea or notion; a unit of thought. */
	'Concept': 'http://www.w3.org/2004/02/skos/core#Concept',
	/** A set of concepts, optionally including statements about semantic relationships between those concepts. */
	'ConceptScheme': 'http://www.w3.org/2004/02/skos/core#ConceptScheme',
	/** An ordered collection of concepts, where both the grouping and the ordering are meaningful. */
	'OrderedCollection': 'http://www.w3.org/2004/02/skos/core#OrderedCollection',
	/** An alternative lexical label for a resource. */
	'altLabel': 'http://www.w3.org/2004/02/skos/core#altLabel',
	/** skos:broadMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes. */
	'broadMatch': 'http://www.w3.org/2004/02/skos/core#broadMatch',
	/** Relates a concept to a concept that is more general in meaning. */
	'broader': 'http://www.w3.org/2004/02/skos/core#broader',
	/** By convention, skos:broaderTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application. */
	'broaderTransitive': 'http://www.w3.org/2004/02/skos/core#broaderTransitive',
	/** A note about a modification to a concept. */
	'changeNote': 'http://www.w3.org/2004/02/skos/core#changeNote',
	/** skos:closeMatch is used to link two concepts that are sufficiently similar that they can be used interchangeably in some information retrieval applications. In order to avoid the possibility of "compound errors" when combining mappings across more than two concept schemes, skos:closeMatch is not declared to be a transitive property. */
	'closeMatch': 'http://www.w3.org/2004/02/skos/core#closeMatch',
	/** A statement or formal explanation of the meaning of a concept. */
	'definition': 'http://www.w3.org/2004/02/skos/core#definition',
	/** A note for an editor, translator or maintainer of the vocabulary. */
	'editorialNote': 'http://www.w3.org/2004/02/skos/core#editorialNote',
	/** skos:exactMatch is used to link two concepts, indicating a high degree of confidence that the concepts can be used interchangeably across a wide range of information retrieval applications. skos:exactMatch is a transitive property, and is a sub-property of skos:closeMatch. */
	'exactMatch': 'http://www.w3.org/2004/02/skos/core#exactMatch',
	/** An example of the use of a concept. */
	'example': 'http://www.w3.org/2004/02/skos/core#example',
	/** Relates, by convention, a concept scheme to a concept which is topmost in the broader/narrower concept hierarchies for that scheme, providing an entry point to these hierarchies. */
	'hasTopConcept': 'http://www.w3.org/2004/02/skos/core#hasTopConcept',
	/** A lexical label for a resource that should be hidden when generating visual displays of the resource, but should still be accessible to free text search operations. */
	'hiddenLabel': 'http://www.w3.org/2004/02/skos/core#hiddenLabel',
	/** A note about the past state/use/meaning of a concept. */
	'historyNote': 'http://www.w3.org/2004/02/skos/core#historyNote',
	/** Relates a resource (for example a concept) to a concept scheme in which it is included. */
	'inScheme': 'http://www.w3.org/2004/02/skos/core#inScheme',
	/** Relates two concepts coming, by convention, from different schemes, and that have comparable meanings */
	'mappingRelation': 'http://www.w3.org/2004/02/skos/core#mappingRelation',
	/** Relates a collection to one of its members. */
	'member': 'http://www.w3.org/2004/02/skos/core#member',
	/** Relates an ordered collection to the RDF list containing its members. */
	'memberList': 'http://www.w3.org/2004/02/skos/core#memberList',
	/** skos:narrowMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes. */
	'narrowMatch': 'http://www.w3.org/2004/02/skos/core#narrowMatch',
	/** Relates a concept to a concept that is more specific in meaning. */
	'narrower': 'http://www.w3.org/2004/02/skos/core#narrower',
	/** By convention, skos:narrowerTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application. */
	'narrowerTransitive': 'http://www.w3.org/2004/02/skos/core#narrowerTransitive',
	/** A notation, also known as classification code, is a string of characters such as "T58.5" or "303.4833" used to uniquely identify a concept within the scope of a given concept scheme. */
	'notation': 'http://www.w3.org/2004/02/skos/core#notation',
	/** A general note, for any purpose. */
	'note': 'http://www.w3.org/2004/02/skos/core#note',
	/** The preferred lexical label for a resource, in a given language. */
	'prefLabel': 'http://www.w3.org/2004/02/skos/core#prefLabel',
	/** Relates a concept to a concept with which there is an associative semantic relationship. */
	'related': 'http://www.w3.org/2004/02/skos/core#related',
	/** skos:relatedMatch is used to state an associative mapping link between two conceptual resources in different concept schemes. */
	'relatedMatch': 'http://www.w3.org/2004/02/skos/core#relatedMatch',
	/** A note that helps to clarify the meaning and/or the use of a concept. */
	'scopeNote': 'http://www.w3.org/2004/02/skos/core#scopeNote',
	/** Links a concept to a concept related by meaning. */
	'semanticRelation': 'http://www.w3.org/2004/02/skos/core#semanticRelation',
	/** Relates a concept to the concept scheme that it is a top level concept of. */
	'topConceptOf': 'http://www.w3.org/2004/02/skos/core#topConceptOf',
}

/** Namespace URI of the skos vocabulary. */
export const _skos = { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#' } as NamedNode;

export const skos = {
	'core': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core' } as NamedNode,
	/** A meaningful collection of concepts. */
	'Collection': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#Collection', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#Collection' } as NamedNode,
	/** An idea or notion; a unit of thought. */
	'Concept': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#Concept', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#Concept' } as NamedNode,
	/** A set of concepts, optionally including statements about semantic relationships between those concepts. */
	'ConceptScheme': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#ConceptScheme', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#ConceptScheme' } as NamedNode,
	/** An ordered collection of concepts, where both the grouping and the ordering are meaningful. */
	'OrderedCollection': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#OrderedCollection', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#OrderedCollection' } as NamedNode,
	/** An alternative lexical label for a resource. */
	'altLabel': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#altLabel', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#altLabel' } as NamedNode,
	/** skos:broadMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes. */
	'broadMatch': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#broadMatch', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#broadMatch' } as NamedNode,
	/** Relates a concept to a concept that is more general in meaning. */
	'broader': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#broader', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#broader' } as NamedNode,
	/** By convention, skos:broaderTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application. */
	'broaderTransitive': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#broaderTransitive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#broaderTransitive' } as NamedNode,
	/** A note about a modification to a concept. */
	'changeNote': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#changeNote', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#changeNote' } as NamedNode,
	/** skos:closeMatch is used to link two concepts that are sufficiently similar that they can be used interchangeably in some information retrieval applications. In order to avoid the possibility of "compound errors" when combining mappings across more than two concept schemes, skos:closeMatch is not declared to be a transitive property. */
	'closeMatch': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#closeMatch', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#closeMatch' } as NamedNode,
	/** A statement or formal explanation of the meaning of a concept. */
	'definition': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#definition', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#definition' } as NamedNode,
	/** A note for an editor, translator or maintainer of the vocabulary. */
	'editorialNote': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#editorialNote', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#editorialNote' } as NamedNode,
	/** skos:exactMatch is used to link two concepts, indicating a high degree of confidence that the concepts can be used interchangeably across a wide range of information retrieval applications. skos:exactMatch is a transitive property, and is a sub-property of skos:closeMatch. */
	'exactMatch': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#exactMatch', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#exactMatch' } as NamedNode,
	/** An example of the use of a concept. */
	'example': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#example', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#example' } as NamedNode,
	/** Relates, by convention, a concept scheme to a concept which is topmost in the broader/narrower concept hierarchies for that scheme, providing an entry point to these hierarchies. */
	'hasTopConcept': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#hasTopConcept', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#hasTopConcept' } as NamedNode,
	/** A lexical label for a resource that should be hidden when generating visual displays of the resource, but should still be accessible to free text search operations. */
	'hiddenLabel': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#hiddenLabel', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#hiddenLabel' } as NamedNode,
	/** A note about the past state/use/meaning of a concept. */
	'historyNote': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#historyNote', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#historyNote' } as NamedNode,
	/** Relates a resource (for example a concept) to a concept scheme in which it is included. */
	'inScheme': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#inScheme', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#inScheme' } as NamedNode,
	/** Relates two concepts coming, by convention, from different schemes, and that have comparable meanings */
	'mappingRelation': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#mappingRelation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#mappingRelation' } as NamedNode,
	/** Relates a collection to one of its members. */
	'member': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#member', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#member' } as NamedNode,
	/** Relates an ordered collection to the RDF list containing its members. */
	'memberList': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#memberList', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#memberList' } as NamedNode,
	/** skos:narrowMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes. */
	'narrowMatch': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#narrowMatch', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#narrowMatch' } as NamedNode,
	/** Relates a concept to a concept that is more specific in meaning. */
	'narrower': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#narrower', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#narrower' } as NamedNode,
	/** By convention, skos:narrowerTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application. */
	'narrowerTransitive': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#narrowerTransitive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#narrowerTransitive' } as NamedNode,
	/** A notation, also known as classification code, is a string of characters such as "T58.5" or "303.4833" used to uniquely identify a concept within the scope of a given concept scheme. */
	'notation': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#notation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#notation' } as NamedNode,
	/** A general note, for any purpose. */
	'note': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#note', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#note' } as NamedNode,
	/** The preferred lexical label for a resource, in a given language. */
	'prefLabel': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#prefLabel', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#prefLabel' } as NamedNode,
	/** Relates a concept to a concept with which there is an associative semantic relationship. */
	'related': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#related', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#related' } as NamedNode,
	/** skos:relatedMatch is used to state an associative mapping link between two conceptual resources in different concept schemes. */
	'relatedMatch': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#relatedMatch', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#relatedMatch' } as NamedNode,
	/** A note that helps to clarify the meaning and/or the use of a concept. */
	'scopeNote': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#scopeNote', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#scopeNote' } as NamedNode,
	/** Links a concept to a concept related by meaning. */
	'semanticRelation': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#semanticRelation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#semanticRelation' } as NamedNode,
	/** Relates a concept to the concept scheme that it is a top level concept of. */
	'topConceptOf': { termType: 'NamedNode', value: 'http://www.w3.org/2004/02/skos/core#topConceptOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2004/02/skos/core#topConceptOf' } as NamedNode,
}