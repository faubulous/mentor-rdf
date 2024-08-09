import * as n3 from "n3";

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
export const _owl = new n3.NamedNode('http://www.w3.org/2002/07/owl#');

export const owl = {
	/** The class of collections of pairwise different individuals. */
	'AllDifferent': new n3.NamedNode('http://www.w3.org/2002/07/owl#AllDifferent'),
	/** The class of collections of pairwise disjoint classes. */
	'AllDisjointClasses': new n3.NamedNode('http://www.w3.org/2002/07/owl#AllDisjointClasses'),
	/** The class of collections of pairwise disjoint properties. */
	'AllDisjointProperties': new n3.NamedNode('http://www.w3.org/2002/07/owl#AllDisjointProperties'),
	/** The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Annotation': new n3.NamedNode('http://www.w3.org/2002/07/owl#Annotation'),
	/** The class of annotation properties. */
	'AnnotationProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#AnnotationProperty'),
	/** The class of asymmetric properties. */
	'AsymmetricProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#AsymmetricProperty'),
	/** The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object. */
	'Axiom': new n3.NamedNode('http://www.w3.org/2002/07/owl#Axiom'),
	/** The class of OWL classes. */
	'Class': new n3.NamedNode('http://www.w3.org/2002/07/owl#Class'),
	/** The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead. */
	'DataRange': new n3.NamedNode('http://www.w3.org/2002/07/owl#DataRange'),
	/** The class of data properties. */
	'DatatypeProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#DatatypeProperty'),
	/** The class of deprecated classes. */
	'DeprecatedClass': new n3.NamedNode('http://www.w3.org/2002/07/owl#DeprecatedClass'),
	/** The class of deprecated properties. */
	'DeprecatedProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#DeprecatedProperty'),
	/** The class of functional properties. */
	'FunctionalProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#FunctionalProperty'),
	/** The class of inverse-functional properties. */
	'InverseFunctionalProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#InverseFunctionalProperty'),
	/** The class of irreflexive properties. */
	'IrreflexiveProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#IrreflexiveProperty'),
	/** The class of named individuals. */
	'NamedIndividual': new n3.NamedNode('http://www.w3.org/2002/07/owl#NamedIndividual'),
	/** The class of negative property assertions. */
	'NegativePropertyAssertion': new n3.NamedNode('http://www.w3.org/2002/07/owl#NegativePropertyAssertion'),
	/** This is the empty class. */
	'Nothing': new n3.NamedNode('http://www.w3.org/2002/07/owl#Nothing'),
	/** The class of object properties. */
	'ObjectProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#ObjectProperty'),
	/** The class of ontologies. */
	'Ontology': new n3.NamedNode('http://www.w3.org/2002/07/owl#Ontology'),
	/** The class of ontology properties. */
	'OntologyProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#OntologyProperty'),
	/** The class of reflexive properties. */
	'ReflexiveProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#ReflexiveProperty'),
	/** The class of property restrictions. */
	'Restriction': new n3.NamedNode('http://www.w3.org/2002/07/owl#Restriction'),
	/** The class of symmetric properties. */
	'SymmetricProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#SymmetricProperty'),
	/** The class of OWL individuals. */
	'Thing': new n3.NamedNode('http://www.w3.org/2002/07/owl#Thing'),
	/** The class of transitive properties. */
	'TransitiveProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#TransitiveProperty'),
	/** The property that determines the class that a universal property restriction refers to. */
	'allValuesFrom': new n3.NamedNode('http://www.w3.org/2002/07/owl#allValuesFrom'),
	/** The property that determines the predicate of an annotated axiom or annotated annotation. */
	'annotatedProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#annotatedProperty'),
	/** The property that determines the subject of an annotated axiom or annotated annotation. */
	'annotatedSource': new n3.NamedNode('http://www.w3.org/2002/07/owl#annotatedSource'),
	/** The property that determines the object of an annotated axiom or annotated annotation. */
	'annotatedTarget': new n3.NamedNode('http://www.w3.org/2002/07/owl#annotatedTarget'),
	/** The property that determines the predicate of a negative property assertion. */
	'assertionProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#assertionProperty'),
	/** The annotation property that indicates that a given ontology is backward compatible with another ontology. */
	'backwardCompatibleWith': new n3.NamedNode('http://www.w3.org/2002/07/owl#backwardCompatibleWith'),
	/** The data property that does not relate any individual to any data value. */
	'bottomDataProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#bottomDataProperty'),
	/** The object property that does not relate any two individuals. */
	'bottomObjectProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#bottomObjectProperty'),
	/** The property that determines the cardinality of an exact cardinality restriction. */
	'cardinality': new n3.NamedNode('http://www.w3.org/2002/07/owl#cardinality'),
	/** The property that determines that a given class is the complement of another class. */
	'complementOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#complementOf'),
	/** The property that determines that a given data range is the complement of another data range with respect to the data domain. */
	'datatypeComplementOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#datatypeComplementOf'),
	/** The annotation property that indicates that a given entity has been deprecated. */
	'deprecated': new n3.NamedNode('http://www.w3.org/2002/07/owl#deprecated'),
	/** The property that determines that two given individuals are different. */
	'differentFrom': new n3.NamedNode('http://www.w3.org/2002/07/owl#differentFrom'),
	/** The property that determines that a given class is equivalent to the disjoint union of a collection of other classes. */
	'disjointUnionOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#disjointUnionOf'),
	/** The property that determines that two given classes are disjoint. */
	'disjointWith': new n3.NamedNode('http://www.w3.org/2002/07/owl#disjointWith'),
	/** The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom. */
	'distinctMembers': new n3.NamedNode('http://www.w3.org/2002/07/owl#distinctMembers'),
	/** The property that determines that two given classes are equivalent, and that is used to specify datatype definitions. */
	'equivalentClass': new n3.NamedNode('http://www.w3.org/2002/07/owl#equivalentClass'),
	/** The property that determines that two given properties are equivalent. */
	'equivalentProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#equivalentProperty'),
	/** The property that determines the collection of properties that jointly build a key. */
	'hasKey': new n3.NamedNode('http://www.w3.org/2002/07/owl#hasKey'),
	/** The property that determines the property that a self restriction refers to. */
	'hasSelf': new n3.NamedNode('http://www.w3.org/2002/07/owl#hasSelf'),
	/** The property that determines the individual that a has-value restriction refers to. */
	'hasValue': new n3.NamedNode('http://www.w3.org/2002/07/owl#hasValue'),
	/** The property that is used for importing other ontologies into a given ontology. */
	'imports': new n3.NamedNode('http://www.w3.org/2002/07/owl#imports'),
	/** The annotation property that indicates that a given ontology is incompatible with another ontology. */
	'incompatibleWith': new n3.NamedNode('http://www.w3.org/2002/07/owl#incompatibleWith'),
	/** The property that determines the collection of classes or data ranges that build an intersection. */
	'intersectionOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#intersectionOf'),
	/** The property that determines that two given properties are inverse. */
	'inverseOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#inverseOf'),
	/** The property that determines the cardinality of a maximum cardinality restriction. */
	'maxCardinality': new n3.NamedNode('http://www.w3.org/2002/07/owl#maxCardinality'),
	/** The property that determines the cardinality of a maximum qualified cardinality restriction. */
	'maxQualifiedCardinality': new n3.NamedNode('http://www.w3.org/2002/07/owl#maxQualifiedCardinality'),
	/** The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom. */
	'members': new n3.NamedNode('http://www.w3.org/2002/07/owl#members'),
	/** The property that determines the cardinality of a minimum cardinality restriction. */
	'minCardinality': new n3.NamedNode('http://www.w3.org/2002/07/owl#minCardinality'),
	/** The property that determines the cardinality of a minimum qualified cardinality restriction. */
	'minQualifiedCardinality': new n3.NamedNode('http://www.w3.org/2002/07/owl#minQualifiedCardinality'),
	/** The property that determines the class that a qualified object cardinality restriction refers to. */
	'onClass': new n3.NamedNode('http://www.w3.org/2002/07/owl#onClass'),
	/** The property that determines the data range that a qualified data cardinality restriction refers to. */
	'onDataRange': new n3.NamedNode('http://www.w3.org/2002/07/owl#onDataRange'),
	/** The property that determines the datatype that a datatype restriction refers to. */
	'onDatatype': new n3.NamedNode('http://www.w3.org/2002/07/owl#onDatatype'),
	/** The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to. */
	'onProperties': new n3.NamedNode('http://www.w3.org/2002/07/owl#onProperties'),
	/** The property that determines the property that a property restriction refers to. */
	'onProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#onProperty'),
	/** The property that determines the collection of individuals or data values that build an enumeration. */
	'oneOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#oneOf'),
	/** The annotation property that indicates the predecessor ontology of a given ontology. */
	'priorVersion': new n3.NamedNode('http://www.w3.org/2002/07/owl#priorVersion'),
	/** The property that determines the n-tuple of properties that build a sub property chain of a given property. */
	'propertyChainAxiom': new n3.NamedNode('http://www.w3.org/2002/07/owl#propertyChainAxiom'),
	/** The property that determines that two given properties are disjoint. */
	'propertyDisjointWith': new n3.NamedNode('http://www.w3.org/2002/07/owl#propertyDisjointWith'),
	/** The property that determines the cardinality of an exact qualified cardinality restriction. */
	'qualifiedCardinality': new n3.NamedNode('http://www.w3.org/2002/07/owl#qualifiedCardinality'),
	/** The property that determines that two given individuals are equal. */
	'sameAs': new n3.NamedNode('http://www.w3.org/2002/07/owl#sameAs'),
	/** The property that determines the class that an existential property restriction refers to. */
	'someValuesFrom': new n3.NamedNode('http://www.w3.org/2002/07/owl#someValuesFrom'),
	/** The property that determines the subject of a negative property assertion. */
	'sourceIndividual': new n3.NamedNode('http://www.w3.org/2002/07/owl#sourceIndividual'),
	/** The property that determines the object of a negative object property assertion. */
	'targetIndividual': new n3.NamedNode('http://www.w3.org/2002/07/owl#targetIndividual'),
	/** The property that determines the value of a negative data property assertion. */
	'targetValue': new n3.NamedNode('http://www.w3.org/2002/07/owl#targetValue'),
	/** The data property that relates every individual to every data value. */
	'topDataProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#topDataProperty'),
	/** The object property that relates every two individuals. */
	'topObjectProperty': new n3.NamedNode('http://www.w3.org/2002/07/owl#topObjectProperty'),
	/** The property that determines the collection of classes or data ranges that build a union. */
	'unionOf': new n3.NamedNode('http://www.w3.org/2002/07/owl#unionOf'),
	/** The property that identifies the version IRI of an ontology. */
	'versionIRI': new n3.NamedNode('http://www.w3.org/2002/07/owl#versionIRI'),
	/** The annotation property that provides version information for an ontology or another OWL construct. */
	'versionInfo': new n3.NamedNode('http://www.w3.org/2002/07/owl#versionInfo'),
	/** The property that determines the collection of facet-value pairs that define a datatype restriction. */
	'withRestrictions': new n3.NamedNode('http://www.w3.org/2002/07/owl#withRestrictions'),
}