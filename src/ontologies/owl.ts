import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

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
export const _owl = namedNode('http://www.w3.org/2002/07/owl#');

export const owl = {
	/** The class of collections of pairwise different individuals. */
	'AllDifferent': namedNode('http://www.w3.org/2002/07/owl#AllDifferent'),
	/** The class of collections of pairwise disjoint classes. */
	'AllDisjointClasses': namedNode('http://www.w3.org/2002/07/owl#AllDisjointClasses'),
	/** The class of collections of pairwise disjoint properties. */
	'AllDisjointProperties': namedNode('http://www.w3.org/2002/07/owl#AllDisjointProperties'),
	/** The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Annotation': namedNode('http://www.w3.org/2002/07/owl#Annotation'),
	/** The class of annotation properties. */
	'AnnotationProperty': namedNode('http://www.w3.org/2002/07/owl#AnnotationProperty'),
	/** The class of asymmetric properties. */
	'AsymmetricProperty': namedNode('http://www.w3.org/2002/07/owl#AsymmetricProperty'),
	/** The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Axiom': namedNode('http://www.w3.org/2002/07/owl#Axiom'),
	/** The class of OWL classes. */
	'Class': namedNode('http://www.w3.org/2002/07/owl#Class'),
	/** The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead. */
	'DataRange': namedNode('http://www.w3.org/2002/07/owl#DataRange'),
	/** The class of data properties. */
	'DatatypeProperty': namedNode('http://www.w3.org/2002/07/owl#DatatypeProperty'),
	/** The class of deprecated classes. */
	'DeprecatedClass': namedNode('http://www.w3.org/2002/07/owl#DeprecatedClass'),
	/** The class of deprecated properties. */
	'DeprecatedProperty': namedNode('http://www.w3.org/2002/07/owl#DeprecatedProperty'),
	/** The class of functional properties. */
	'FunctionalProperty': namedNode('http://www.w3.org/2002/07/owl#FunctionalProperty'),
	/** The class of inverse-functional properties. */
	'InverseFunctionalProperty': namedNode('http://www.w3.org/2002/07/owl#InverseFunctionalProperty'),
	/** The class of irreflexive properties. */
	'IrreflexiveProperty': namedNode('http://www.w3.org/2002/07/owl#IrreflexiveProperty'),
	/** The class of named individuals. */
	'NamedIndividual': namedNode('http://www.w3.org/2002/07/owl#NamedIndividual'),
	/** The class of negative property assertions. */
	'NegativePropertyAssertion': namedNode('http://www.w3.org/2002/07/owl#NegativePropertyAssertion'),
	/** This is the empty class. */
	'Nothing': namedNode('http://www.w3.org/2002/07/owl#Nothing'),
	/** The class of object properties. */
	'ObjectProperty': namedNode('http://www.w3.org/2002/07/owl#ObjectProperty'),
	/** The class of ontologies. */
	'Ontology': namedNode('http://www.w3.org/2002/07/owl#Ontology'),
	/** The class of ontology properties. */
	'OntologyProperty': namedNode('http://www.w3.org/2002/07/owl#OntologyProperty'),
	/** The class of reflexive properties. */
	'ReflexiveProperty': namedNode('http://www.w3.org/2002/07/owl#ReflexiveProperty'),
	/** The class of property restrictions. */
	'Restriction': namedNode('http://www.w3.org/2002/07/owl#Restriction'),
	/** The class of symmetric properties. */
	'SymmetricProperty': namedNode('http://www.w3.org/2002/07/owl#SymmetricProperty'),
	/** The class of OWL individuals. */
	'Thing': namedNode('http://www.w3.org/2002/07/owl#Thing'),
	/** The class of transitive properties. */
	'TransitiveProperty': namedNode('http://www.w3.org/2002/07/owl#TransitiveProperty'),
	/** The property that determines the class that a universal property restriction refers to. */
	'allValuesFrom': namedNode('http://www.w3.org/2002/07/owl#allValuesFrom'),
	/** The property that determines the predicate of an annotated axiom or annotated annotation. */
	'annotatedProperty': namedNode('http://www.w3.org/2002/07/owl#annotatedProperty'),
	/** The property that determines the subject of an annotated axiom or annotated annotation. */
	'annotatedSource': namedNode('http://www.w3.org/2002/07/owl#annotatedSource'),
	/** The property that determines the object of an annotated axiom or annotated annotation. */
	'annotatedTarget': namedNode('http://www.w3.org/2002/07/owl#annotatedTarget'),
	/** The property that determines the predicate of a negative property assertion. */
	'assertionProperty': namedNode('http://www.w3.org/2002/07/owl#assertionProperty'),
	/** The annotation property that indicates that a given ontology is backward compatible with another ontology. */
	'backwardCompatibleWith': namedNode('http://www.w3.org/2002/07/owl#backwardCompatibleWith'),
	/** The data property that does not relate any individual to any data value. */
	'bottomDataProperty': namedNode('http://www.w3.org/2002/07/owl#bottomDataProperty'),
	/** The object property that does not relate any two individuals. */
	'bottomObjectProperty': namedNode('http://www.w3.org/2002/07/owl#bottomObjectProperty'),
	/** The property that determines the cardinality of an exact cardinality restriction. */
	'cardinality': namedNode('http://www.w3.org/2002/07/owl#cardinality'),
	/** The property that determines that a given class is the complement of another class. */
	'complementOf': namedNode('http://www.w3.org/2002/07/owl#complementOf'),
	/** The property that determines that a given data range is the complement of another data range with respect to the data domain. */
	'datatypeComplementOf': namedNode('http://www.w3.org/2002/07/owl#datatypeComplementOf'),
	/** The annotation property that indicates that a given entity has been deprecated. */
	'deprecated': namedNode('http://www.w3.org/2002/07/owl#deprecated'),
	/** The property that determines that two given individuals are different. */
	'differentFrom': namedNode('http://www.w3.org/2002/07/owl#differentFrom'),
	/** The property that determines that a given class is equivalent to the disjoint union of a collection of other classes. */
	'disjointUnionOf': namedNode('http://www.w3.org/2002/07/owl#disjointUnionOf'),
	/** The property that determines that two given classes are disjoint. */
	'disjointWith': namedNode('http://www.w3.org/2002/07/owl#disjointWith'),
	/** The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom. */
	'distinctMembers': namedNode('http://www.w3.org/2002/07/owl#distinctMembers'),
	/** The property that determines that two given classes are equivalent, and that is used to specify datatype definitions. */
	'equivalentClass': namedNode('http://www.w3.org/2002/07/owl#equivalentClass'),
	/** The property that determines that two given properties are equivalent. */
	'equivalentProperty': namedNode('http://www.w3.org/2002/07/owl#equivalentProperty'),
	/** The property that determines the collection of properties that jointly build a key. */
	'hasKey': namedNode('http://www.w3.org/2002/07/owl#hasKey'),
	/** The property that determines the property that a self restriction refers to. */
	'hasSelf': namedNode('http://www.w3.org/2002/07/owl#hasSelf'),
	/** The property that determines the individual that a has-value restriction refers to. */
	'hasValue': namedNode('http://www.w3.org/2002/07/owl#hasValue'),
	/** The property that is used for importing other ontologies into a given ontology. */
	'imports': namedNode('http://www.w3.org/2002/07/owl#imports'),
	/** The annotation property that indicates that a given ontology is incompatible with another ontology. */
	'incompatibleWith': namedNode('http://www.w3.org/2002/07/owl#incompatibleWith'),
	/** The property that determines the collection of classes or data ranges that build an intersection. */
	'intersectionOf': namedNode('http://www.w3.org/2002/07/owl#intersectionOf'),
	/** The property that determines that two given properties are inverse. */
	'inverseOf': namedNode('http://www.w3.org/2002/07/owl#inverseOf'),
	/** The property that determines the cardinality of a maximum cardinality restriction. */
	'maxCardinality': namedNode('http://www.w3.org/2002/07/owl#maxCardinality'),
	/** The property that determines the cardinality of a maximum qualified cardinality restriction. */
	'maxQualifiedCardinality': namedNode('http://www.w3.org/2002/07/owl#maxQualifiedCardinality'),
	/** The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom. */
	'members': namedNode('http://www.w3.org/2002/07/owl#members'),
	/** The property that determines the cardinality of a minimum cardinality restriction. */
	'minCardinality': namedNode('http://www.w3.org/2002/07/owl#minCardinality'),
	/** The property that determines the cardinality of a minimum qualified cardinality restriction. */
	'minQualifiedCardinality': namedNode('http://www.w3.org/2002/07/owl#minQualifiedCardinality'),
	/** The property that determines the class that a qualified object cardinality restriction refers to. */
	'onClass': namedNode('http://www.w3.org/2002/07/owl#onClass'),
	/** The property that determines the data range that a qualified data cardinality restriction refers to. */
	'onDataRange': namedNode('http://www.w3.org/2002/07/owl#onDataRange'),
	/** The property that determines the datatype that a datatype restriction refers to. */
	'onDatatype': namedNode('http://www.w3.org/2002/07/owl#onDatatype'),
	/** The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to. */
	'onProperties': namedNode('http://www.w3.org/2002/07/owl#onProperties'),
	/** The property that determines the property that a property restriction refers to. */
	'onProperty': namedNode('http://www.w3.org/2002/07/owl#onProperty'),
	/** The property that determines the collection of individuals or data values that build an enumeration. */
	'oneOf': namedNode('http://www.w3.org/2002/07/owl#oneOf'),
	/** The annotation property that indicates the predecessor ontology of a given ontology. */
	'priorVersion': namedNode('http://www.w3.org/2002/07/owl#priorVersion'),
	/** The property that determines the n-tuple of properties that build a sub property chain of a given property. */
	'propertyChainAxiom': namedNode('http://www.w3.org/2002/07/owl#propertyChainAxiom'),
	/** The property that determines that two given properties are disjoint. */
	'propertyDisjointWith': namedNode('http://www.w3.org/2002/07/owl#propertyDisjointWith'),
	/** The property that determines the cardinality of an exact qualified cardinality restriction. */
	'qualifiedCardinality': namedNode('http://www.w3.org/2002/07/owl#qualifiedCardinality'),
	/** The property that determines that two given individuals are equal. */
	'sameAs': namedNode('http://www.w3.org/2002/07/owl#sameAs'),
	/** The property that determines the class that an existential property restriction refers to. */
	'someValuesFrom': namedNode('http://www.w3.org/2002/07/owl#someValuesFrom'),
	/** The property that determines the subject of a negative property assertion. */
	'sourceIndividual': namedNode('http://www.w3.org/2002/07/owl#sourceIndividual'),
	/** The property that determines the object of a negative object property assertion. */
	'targetIndividual': namedNode('http://www.w3.org/2002/07/owl#targetIndividual'),
	/** The property that determines the value of a negative data property assertion. */
	'targetValue': namedNode('http://www.w3.org/2002/07/owl#targetValue'),
	/** The data property that relates every individual to every data value. */
	'topDataProperty': namedNode('http://www.w3.org/2002/07/owl#topDataProperty'),
	/** The object property that relates every two individuals. */
	'topObjectProperty': namedNode('http://www.w3.org/2002/07/owl#topObjectProperty'),
	/** The property that determines the collection of classes or data ranges that build a union. */
	'unionOf': namedNode('http://www.w3.org/2002/07/owl#unionOf'),
	/** The property that identifies the version IRI of an ontology. */
	'versionIRI': namedNode('http://www.w3.org/2002/07/owl#versionIRI'),
	/** The annotation property that provides version information for an ontology or another OWL construct. */
	'versionInfo': namedNode('http://www.w3.org/2002/07/owl#versionInfo'),
	/** The property that determines the collection of facet-value pairs that define a datatype restriction. */
	'withRestrictions': namedNode('http://www.w3.org/2002/07/owl#withRestrictions'),
}