import * as n3 from "n3";

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

export const skos = {
	'core': new n3.NamedNode('http://www.w3.org/2004/02/skos/core'),
	/** A meaningful collection of concepts. */
	'Collection': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#Collection'),
	/** An idea or notion; a unit of thought. */
	'Concept': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#Concept'),
	/** A set of concepts, optionally including statements about semantic relationships between those concepts. */
	'ConceptScheme': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#ConceptScheme'),
	/** An ordered collection of concepts, where both the grouping and the ordering are meaningful. */
	'OrderedCollection': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#OrderedCollection'),
	/** An alternative lexical label for a resource. */
	'altLabel': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#altLabel'),
	/** skos:broadMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes. */
	'broadMatch': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#broadMatch'),
	/** Relates a concept to a concept that is more general in meaning. */
	'broader': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#broader'),
	/** By convention, skos:broaderTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application. */
	'broaderTransitive': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#broaderTransitive'),
	/** A note about a modification to a concept. */
	'changeNote': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#changeNote'),
	/** skos:closeMatch is used to link two concepts that are sufficiently similar that they can be used interchangeably in some information retrieval applications. In order to avoid the possibility of "compound errors" when combining mappings across more than two concept schemes, skos:closeMatch is not declared to be a transitive property. */
	'closeMatch': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#closeMatch'),
	/** A statement or formal explanation of the meaning of a concept. */
	'definition': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#definition'),
	/** A note for an editor, translator or maintainer of the vocabulary. */
	'editorialNote': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#editorialNote'),
	/** skos:exactMatch is used to link two concepts, indicating a high degree of confidence that the concepts can be used interchangeably across a wide range of information retrieval applications. skos:exactMatch is a transitive property, and is a sub-property of skos:closeMatch. */
	'exactMatch': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#exactMatch'),
	/** An example of the use of a concept. */
	'example': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#example'),
	/** Relates, by convention, a concept scheme to a concept which is topmost in the broader/narrower concept hierarchies for that scheme, providing an entry point to these hierarchies. */
	'hasTopConcept': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#hasTopConcept'),
	/** A lexical label for a resource that should be hidden when generating visual displays of the resource, but should still be accessible to free text search operations. */
	'hiddenLabel': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#hiddenLabel'),
	/** A note about the past state/use/meaning of a concept. */
	'historyNote': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#historyNote'),
	/** Relates a resource (for example a concept) to a concept scheme in which it is included. */
	'inScheme': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#inScheme'),
	/** Relates two concepts coming, by convention, from different schemes, and that have comparable meanings */
	'mappingRelation': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#mappingRelation'),
	/** Relates a collection to one of its members. */
	'member': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#member'),
	/** Relates an ordered collection to the RDF list containing its members. */
	'memberList': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#memberList'),
	/** skos:narrowMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes. */
	'narrowMatch': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#narrowMatch'),
	/** Relates a concept to a concept that is more specific in meaning. */
	'narrower': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#narrower'),
	/** By convention, skos:narrowerTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application. */
	'narrowerTransitive': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#narrowerTransitive'),
	/** A notation, also known as classification code, is a string of characters such as "T58.5" or "303.4833" used to uniquely identify a concept within the scope of a given concept scheme. */
	'notation': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#notation'),
	/** A general note, for any purpose. */
	'note': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#note'),
	/** The preferred lexical label for a resource, in a given language. */
	'prefLabel': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#prefLabel'),
	/** Relates a concept to a concept with which there is an associative semantic relationship. */
	'related': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#related'),
	/** skos:relatedMatch is used to state an associative mapping link between two conceptual resources in different concept schemes. */
	'relatedMatch': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#relatedMatch'),
	/** A note that helps to clarify the meaning and/or the use of a concept. */
	'scopeNote': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#scopeNote'),
	/** Links a concept to a concept related by meaning. */
	'semanticRelation': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#semanticRelation'),
	/** Relates a concept to the concept scheme that it is a top level concept of. */
	'topConceptOf': new n3.NamedNode('http://www.w3.org/2004/02/skos/core#topConceptOf'),
}