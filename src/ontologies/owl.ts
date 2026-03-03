import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the OWL vocabulary. */
export const _OWL = 'http://www.w3.org/2002/07/owl#';

export const OWL = {
	/** The class of collections of pairwise different individuals. */
	'AllDifferent': 'http://www.w3.org/2002/07/owl#AllDifferent',
	/** The class of collections of pairwise disjoint classes. */
	'AllDisjointClasses': 'http://www.w3.org/2002/07/owl#AllDisjointClasses',
	/** The class of collections of pairwise disjoint properties. */
	'AllDisjointProperties': 'http://www.w3.org/2002/07/owl#AllDisjointProperties',
	/** The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Annotation': 'http://www.w3.org/2002/07/owl#Annotation',
	/** The class of annotation properties. */
	'AnnotationProperty': 'http://www.w3.org/2002/07/owl#AnnotationProperty',
	/** The class of asymmetric properties. */
	'AsymmetricProperty': 'http://www.w3.org/2002/07/owl#AsymmetricProperty',
	/** The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Axiom': 'http://www.w3.org/2002/07/owl#Axiom',
	/** The class of OWL classes. */
	'Class': 'http://www.w3.org/2002/07/owl#Class',
	/** The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead. */
	'DataRange': 'http://www.w3.org/2002/07/owl#DataRange',
	/** The class of data properties. */
	'DatatypeProperty': 'http://www.w3.org/2002/07/owl#DatatypeProperty',
	/** The class of deprecated classes. */
	'DeprecatedClass': 'http://www.w3.org/2002/07/owl#DeprecatedClass',
	/** The class of deprecated properties. */
	'DeprecatedProperty': 'http://www.w3.org/2002/07/owl#DeprecatedProperty',
	/** The class of functional properties. */
	'FunctionalProperty': 'http://www.w3.org/2002/07/owl#FunctionalProperty',
	/** The class of inverse-functional properties. */
	'InverseFunctionalProperty': 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty',
	/** The class of irreflexive properties. */
	'IrreflexiveProperty': 'http://www.w3.org/2002/07/owl#IrreflexiveProperty',
	/** The class of named individuals. */
	'NamedIndividual': 'http://www.w3.org/2002/07/owl#NamedIndividual',
	/** The class of negative property assertions. */
	'NegativePropertyAssertion': 'http://www.w3.org/2002/07/owl#NegativePropertyAssertion',
	/** This is the empty class. */
	'Nothing': 'http://www.w3.org/2002/07/owl#Nothing',
	/** The class of object properties. */
	'ObjectProperty': 'http://www.w3.org/2002/07/owl#ObjectProperty',
	/** The class of ontologies. */
	'Ontology': 'http://www.w3.org/2002/07/owl#Ontology',
	/** The class of ontology properties. */
	'OntologyProperty': 'http://www.w3.org/2002/07/owl#OntologyProperty',
	/** The class of reflexive properties. */
	'ReflexiveProperty': 'http://www.w3.org/2002/07/owl#ReflexiveProperty',
	/** The class of property restrictions. */
	'Restriction': 'http://www.w3.org/2002/07/owl#Restriction',
	/** The class of symmetric properties. */
	'SymmetricProperty': 'http://www.w3.org/2002/07/owl#SymmetricProperty',
	/** The class of OWL individuals. */
	'Thing': 'http://www.w3.org/2002/07/owl#Thing',
	/** The class of transitive properties. */
	'TransitiveProperty': 'http://www.w3.org/2002/07/owl#TransitiveProperty',
	/** The property that determines the class that a universal property restriction refers to. */
	'allValuesFrom': 'http://www.w3.org/2002/07/owl#allValuesFrom',
	/** The property that determines the predicate of an annotated axiom or annotated annotation. */
	'annotatedProperty': 'http://www.w3.org/2002/07/owl#annotatedProperty',
	/** The property that determines the subject of an annotated axiom or annotated annotation. */
	'annotatedSource': 'http://www.w3.org/2002/07/owl#annotatedSource',
	/** The property that determines the object of an annotated axiom or annotated annotation. */
	'annotatedTarget': 'http://www.w3.org/2002/07/owl#annotatedTarget',
	/** The property that determines the predicate of a negative property assertion. */
	'assertionProperty': 'http://www.w3.org/2002/07/owl#assertionProperty',
	/** The annotation property that indicates that a given ontology is backward compatible with another ontology. */
	'backwardCompatibleWith': 'http://www.w3.org/2002/07/owl#backwardCompatibleWith',
	/** The data property that does not relate any individual to any data value. */
	'bottomDataProperty': 'http://www.w3.org/2002/07/owl#bottomDataProperty',
	/** The object property that does not relate any two individuals. */
	'bottomObjectProperty': 'http://www.w3.org/2002/07/owl#bottomObjectProperty',
	/** The property that determines the cardinality of an exact cardinality restriction. */
	'cardinality': 'http://www.w3.org/2002/07/owl#cardinality',
	/** The property that determines that a given class is the complement of another class. */
	'complementOf': 'http://www.w3.org/2002/07/owl#complementOf',
	/** The property that determines that a given data range is the complement of another data range with respect to the data domain. */
	'datatypeComplementOf': 'http://www.w3.org/2002/07/owl#datatypeComplementOf',
	/** The annotation property that indicates that a given entity has been deprecated. */
	'deprecated': 'http://www.w3.org/2002/07/owl#deprecated',
	/** The property that determines that two given individuals are different. */
	'differentFrom': 'http://www.w3.org/2002/07/owl#differentFrom',
	/** The property that determines that a given class is equivalent to the disjoint union of a collection of other classes. */
	'disjointUnionOf': 'http://www.w3.org/2002/07/owl#disjointUnionOf',
	/** The property that determines that two given classes are disjoint. */
	'disjointWith': 'http://www.w3.org/2002/07/owl#disjointWith',
	/** The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom. */
	'distinctMembers': 'http://www.w3.org/2002/07/owl#distinctMembers',
	/** The property that determines that two given classes are equivalent, and that is used to specify datatype definitions. */
	'equivalentClass': 'http://www.w3.org/2002/07/owl#equivalentClass',
	/** The property that determines that two given properties are equivalent. */
	'equivalentProperty': 'http://www.w3.org/2002/07/owl#equivalentProperty',
	/** The property that determines the collection of properties that jointly build a key. */
	'hasKey': 'http://www.w3.org/2002/07/owl#hasKey',
	/** The property that determines the property that a self restriction refers to. */
	'hasSelf': 'http://www.w3.org/2002/07/owl#hasSelf',
	/** The property that determines the individual that a has-value restriction refers to. */
	'hasValue': 'http://www.w3.org/2002/07/owl#hasValue',
	/** The property that is used for importing other ontologies into a given ontology. */
	'imports': 'http://www.w3.org/2002/07/owl#imports',
	/** The annotation property that indicates that a given ontology is incompatible with another ontology. */
	'incompatibleWith': 'http://www.w3.org/2002/07/owl#incompatibleWith',
	/** The property that determines the collection of classes or data ranges that build an intersection. */
	'intersectionOf': 'http://www.w3.org/2002/07/owl#intersectionOf',
	/** The property that determines that two given properties are inverse. */
	'inverseOf': 'http://www.w3.org/2002/07/owl#inverseOf',
	/** The property that determines the cardinality of a maximum cardinality restriction. */
	'maxCardinality': 'http://www.w3.org/2002/07/owl#maxCardinality',
	/** The property that determines the cardinality of a maximum qualified cardinality restriction. */
	'maxQualifiedCardinality': 'http://www.w3.org/2002/07/owl#maxQualifiedCardinality',
	/** The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom. */
	'members': 'http://www.w3.org/2002/07/owl#members',
	/** The property that determines the cardinality of a minimum cardinality restriction. */
	'minCardinality': 'http://www.w3.org/2002/07/owl#minCardinality',
	/** The property that determines the cardinality of a minimum qualified cardinality restriction. */
	'minQualifiedCardinality': 'http://www.w3.org/2002/07/owl#minQualifiedCardinality',
	/** The property that determines the class that a qualified object cardinality restriction refers to. */
	'onClass': 'http://www.w3.org/2002/07/owl#onClass',
	/** The property that determines the data range that a qualified data cardinality restriction refers to. */
	'onDataRange': 'http://www.w3.org/2002/07/owl#onDataRange',
	/** The property that determines the datatype that a datatype restriction refers to. */
	'onDatatype': 'http://www.w3.org/2002/07/owl#onDatatype',
	/** The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to. */
	'onProperties': 'http://www.w3.org/2002/07/owl#onProperties',
	/** The property that determines the property that a property restriction refers to. */
	'onProperty': 'http://www.w3.org/2002/07/owl#onProperty',
	/** The property that determines the collection of individuals or data values that build an enumeration. */
	'oneOf': 'http://www.w3.org/2002/07/owl#oneOf',
	/** The annotation property that indicates the predecessor ontology of a given ontology. */
	'priorVersion': 'http://www.w3.org/2002/07/owl#priorVersion',
	/** The property that determines the n-tuple of properties that build a sub property chain of a given property. */
	'propertyChainAxiom': 'http://www.w3.org/2002/07/owl#propertyChainAxiom',
	/** The property that determines that two given properties are disjoint. */
	'propertyDisjointWith': 'http://www.w3.org/2002/07/owl#propertyDisjointWith',
	/** The property that determines the cardinality of an exact qualified cardinality restriction. */
	'qualifiedCardinality': 'http://www.w3.org/2002/07/owl#qualifiedCardinality',
	/** The property that determines that two given individuals are equal. */
	'sameAs': 'http://www.w3.org/2002/07/owl#sameAs',
	/** The property that determines the class that an existential property restriction refers to. */
	'someValuesFrom': 'http://www.w3.org/2002/07/owl#someValuesFrom',
	/** The property that determines the subject of a negative property assertion. */
	'sourceIndividual': 'http://www.w3.org/2002/07/owl#sourceIndividual',
	/** The property that determines the object of a negative object property assertion. */
	'targetIndividual': 'http://www.w3.org/2002/07/owl#targetIndividual',
	/** The property that determines the value of a negative data property assertion. */
	'targetValue': 'http://www.w3.org/2002/07/owl#targetValue',
	/** The data property that relates every individual to every data value. */
	'topDataProperty': 'http://www.w3.org/2002/07/owl#topDataProperty',
	/** The object property that relates every two individuals. */
	'topObjectProperty': 'http://www.w3.org/2002/07/owl#topObjectProperty',
	/** The property that determines the collection of classes or data ranges that build a union. */
	'unionOf': 'http://www.w3.org/2002/07/owl#unionOf',
	/** The property that identifies the version IRI of an ontology. */
	'versionIRI': 'http://www.w3.org/2002/07/owl#versionIRI',
	/** The annotation property that provides version information for an ontology or another OWL construct. */
	'versionInfo': 'http://www.w3.org/2002/07/owl#versionInfo',
	/** The property that determines the collection of facet-value pairs that define a datatype restriction. */
	'withRestrictions': 'http://www.w3.org/2002/07/owl#withRestrictions',
}

/** Namespace URI of the owl vocabulary. */
export const _owl = { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#' } as NamedNode;

export const owl = {
	/** The class of collections of pairwise different individuals. */
	'AllDifferent': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#AllDifferent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#AllDifferent' } as NamedNode,
	/** The class of collections of pairwise disjoint classes. */
	'AllDisjointClasses': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#AllDisjointClasses', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#AllDisjointClasses' } as NamedNode,
	/** The class of collections of pairwise disjoint properties. */
	'AllDisjointProperties': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#AllDisjointProperties', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#AllDisjointProperties' } as NamedNode,
	/** The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Annotation': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Annotation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Annotation' } as NamedNode,
	/** The class of annotation properties. */
	'AnnotationProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#AnnotationProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#AnnotationProperty' } as NamedNode,
	/** The class of asymmetric properties. */
	'AsymmetricProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#AsymmetricProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#AsymmetricProperty' } as NamedNode,
	/** The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Axiom': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Axiom', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Axiom' } as NamedNode,
	/** The class of OWL classes. */
	'Class': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Class', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Class' } as NamedNode,
	/** The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead. */
	'DataRange': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#DataRange', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#DataRange' } as NamedNode,
	/** The class of data properties. */
	'DatatypeProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#DatatypeProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#DatatypeProperty' } as NamedNode,
	/** The class of deprecated classes. */
	'DeprecatedClass': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#DeprecatedClass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#DeprecatedClass' } as NamedNode,
	/** The class of deprecated properties. */
	'DeprecatedProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#DeprecatedProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#DeprecatedProperty' } as NamedNode,
	/** The class of functional properties. */
	'FunctionalProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#FunctionalProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#FunctionalProperty' } as NamedNode,
	/** The class of inverse-functional properties. */
	'InverseFunctionalProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty' } as NamedNode,
	/** The class of irreflexive properties. */
	'IrreflexiveProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#IrreflexiveProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#IrreflexiveProperty' } as NamedNode,
	/** The class of named individuals. */
	'NamedIndividual': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#NamedIndividual', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#NamedIndividual' } as NamedNode,
	/** The class of negative property assertions. */
	'NegativePropertyAssertion': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#NegativePropertyAssertion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#NegativePropertyAssertion' } as NamedNode,
	/** This is the empty class. */
	'Nothing': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Nothing', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Nothing' } as NamedNode,
	/** The class of object properties. */
	'ObjectProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#ObjectProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#ObjectProperty' } as NamedNode,
	/** The class of ontologies. */
	'Ontology': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Ontology', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Ontology' } as NamedNode,
	/** The class of ontology properties. */
	'OntologyProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#OntologyProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#OntologyProperty' } as NamedNode,
	/** The class of reflexive properties. */
	'ReflexiveProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#ReflexiveProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#ReflexiveProperty' } as NamedNode,
	/** The class of property restrictions. */
	'Restriction': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Restriction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Restriction' } as NamedNode,
	/** The class of symmetric properties. */
	'SymmetricProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#SymmetricProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#SymmetricProperty' } as NamedNode,
	/** The class of OWL individuals. */
	'Thing': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#Thing', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#Thing' } as NamedNode,
	/** The class of transitive properties. */
	'TransitiveProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#TransitiveProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#TransitiveProperty' } as NamedNode,
	/** The property that determines the class that a universal property restriction refers to. */
	'allValuesFrom': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#allValuesFrom', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#allValuesFrom' } as NamedNode,
	/** The property that determines the predicate of an annotated axiom or annotated annotation. */
	'annotatedProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#annotatedProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#annotatedProperty' } as NamedNode,
	/** The property that determines the subject of an annotated axiom or annotated annotation. */
	'annotatedSource': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#annotatedSource', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#annotatedSource' } as NamedNode,
	/** The property that determines the object of an annotated axiom or annotated annotation. */
	'annotatedTarget': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#annotatedTarget', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#annotatedTarget' } as NamedNode,
	/** The property that determines the predicate of a negative property assertion. */
	'assertionProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#assertionProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#assertionProperty' } as NamedNode,
	/** The annotation property that indicates that a given ontology is backward compatible with another ontology. */
	'backwardCompatibleWith': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#backwardCompatibleWith', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#backwardCompatibleWith' } as NamedNode,
	/** The data property that does not relate any individual to any data value. */
	'bottomDataProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#bottomDataProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#bottomDataProperty' } as NamedNode,
	/** The object property that does not relate any two individuals. */
	'bottomObjectProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#bottomObjectProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#bottomObjectProperty' } as NamedNode,
	/** The property that determines the cardinality of an exact cardinality restriction. */
	'cardinality': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#cardinality', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#cardinality' } as NamedNode,
	/** The property that determines that a given class is the complement of another class. */
	'complementOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#complementOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#complementOf' } as NamedNode,
	/** The property that determines that a given data range is the complement of another data range with respect to the data domain. */
	'datatypeComplementOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#datatypeComplementOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#datatypeComplementOf' } as NamedNode,
	/** The annotation property that indicates that a given entity has been deprecated. */
	'deprecated': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#deprecated', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#deprecated' } as NamedNode,
	/** The property that determines that two given individuals are different. */
	'differentFrom': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#differentFrom', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#differentFrom' } as NamedNode,
	/** The property that determines that a given class is equivalent to the disjoint union of a collection of other classes. */
	'disjointUnionOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#disjointUnionOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#disjointUnionOf' } as NamedNode,
	/** The property that determines that two given classes are disjoint. */
	'disjointWith': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#disjointWith', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#disjointWith' } as NamedNode,
	/** The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom. */
	'distinctMembers': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#distinctMembers', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#distinctMembers' } as NamedNode,
	/** The property that determines that two given classes are equivalent, and that is used to specify datatype definitions. */
	'equivalentClass': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#equivalentClass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#equivalentClass' } as NamedNode,
	/** The property that determines that two given properties are equivalent. */
	'equivalentProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#equivalentProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#equivalentProperty' } as NamedNode,
	/** The property that determines the collection of properties that jointly build a key. */
	'hasKey': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#hasKey', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#hasKey' } as NamedNode,
	/** The property that determines the property that a self restriction refers to. */
	'hasSelf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#hasSelf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#hasSelf' } as NamedNode,
	/** The property that determines the individual that a has-value restriction refers to. */
	'hasValue': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#hasValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#hasValue' } as NamedNode,
	/** The property that is used for importing other ontologies into a given ontology. */
	'imports': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#imports', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#imports' } as NamedNode,
	/** The annotation property that indicates that a given ontology is incompatible with another ontology. */
	'incompatibleWith': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#incompatibleWith', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#incompatibleWith' } as NamedNode,
	/** The property that determines the collection of classes or data ranges that build an intersection. */
	'intersectionOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#intersectionOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#intersectionOf' } as NamedNode,
	/** The property that determines that two given properties are inverse. */
	'inverseOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#inverseOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#inverseOf' } as NamedNode,
	/** The property that determines the cardinality of a maximum cardinality restriction. */
	'maxCardinality': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#maxCardinality', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#maxCardinality' } as NamedNode,
	/** The property that determines the cardinality of a maximum qualified cardinality restriction. */
	'maxQualifiedCardinality': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#maxQualifiedCardinality', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#maxQualifiedCardinality' } as NamedNode,
	/** The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom. */
	'members': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#members', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#members' } as NamedNode,
	/** The property that determines the cardinality of a minimum cardinality restriction. */
	'minCardinality': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#minCardinality', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#minCardinality' } as NamedNode,
	/** The property that determines the cardinality of a minimum qualified cardinality restriction. */
	'minQualifiedCardinality': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#minQualifiedCardinality', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#minQualifiedCardinality' } as NamedNode,
	/** The property that determines the class that a qualified object cardinality restriction refers to. */
	'onClass': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#onClass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#onClass' } as NamedNode,
	/** The property that determines the data range that a qualified data cardinality restriction refers to. */
	'onDataRange': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#onDataRange', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#onDataRange' } as NamedNode,
	/** The property that determines the datatype that a datatype restriction refers to. */
	'onDatatype': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#onDatatype', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#onDatatype' } as NamedNode,
	/** The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to. */
	'onProperties': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#onProperties', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#onProperties' } as NamedNode,
	/** The property that determines the property that a property restriction refers to. */
	'onProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#onProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#onProperty' } as NamedNode,
	/** The property that determines the collection of individuals or data values that build an enumeration. */
	'oneOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#oneOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#oneOf' } as NamedNode,
	/** The annotation property that indicates the predecessor ontology of a given ontology. */
	'priorVersion': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#priorVersion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#priorVersion' } as NamedNode,
	/** The property that determines the n-tuple of properties that build a sub property chain of a given property. */
	'propertyChainAxiom': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#propertyChainAxiom', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#propertyChainAxiom' } as NamedNode,
	/** The property that determines that two given properties are disjoint. */
	'propertyDisjointWith': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#propertyDisjointWith', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#propertyDisjointWith' } as NamedNode,
	/** The property that determines the cardinality of an exact qualified cardinality restriction. */
	'qualifiedCardinality': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#qualifiedCardinality', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#qualifiedCardinality' } as NamedNode,
	/** The property that determines that two given individuals are equal. */
	'sameAs': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#sameAs', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#sameAs' } as NamedNode,
	/** The property that determines the class that an existential property restriction refers to. */
	'someValuesFrom': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#someValuesFrom', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#someValuesFrom' } as NamedNode,
	/** The property that determines the subject of a negative property assertion. */
	'sourceIndividual': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#sourceIndividual', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#sourceIndividual' } as NamedNode,
	/** The property that determines the object of a negative object property assertion. */
	'targetIndividual': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#targetIndividual', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#targetIndividual' } as NamedNode,
	/** The property that determines the value of a negative data property assertion. */
	'targetValue': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#targetValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#targetValue' } as NamedNode,
	/** The data property that relates every individual to every data value. */
	'topDataProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#topDataProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#topDataProperty' } as NamedNode,
	/** The object property that relates every two individuals. */
	'topObjectProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#topObjectProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#topObjectProperty' } as NamedNode,
	/** The property that determines the collection of classes or data ranges that build a union. */
	'unionOf': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#unionOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#unionOf' } as NamedNode,
	/** The property that identifies the version IRI of an ontology. */
	'versionIRI': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#versionIRI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#versionIRI' } as NamedNode,
	/** The annotation property that provides version information for an ontology or another OWL construct. */
	'versionInfo': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#versionInfo', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#versionInfo' } as NamedNode,
	/** The property that determines the collection of facet-value pairs that define a datatype restriction. */
	'withRestrictions': { termType: 'NamedNode', value: 'http://www.w3.org/2002/07/owl#withRestrictions', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2002/07/owl#withRestrictions' } as NamedNode,
}