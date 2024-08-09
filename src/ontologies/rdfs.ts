import * as n3 from "n3";

/** Namespace URI of the RDFS vocabulary. */
export const _RDFS = 'http://www.w3.org/2000/01/rdf-schema#';

export const RDFS = {
	/** The class of classes. */
	'Class': 'http://www.w3.org/2000/01/rdf-schema#Class',
	/** The class of RDF containers. */
	'Container': 'http://www.w3.org/2000/01/rdf-schema#Container',
	/** The class of container membership properties, rdf:_1, rdf:_2, ...,
                    all of which are sub-properties of 'member'. */
	'ContainerMembershipProperty': 'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty',
	/** The class of RDF datatypes. */
	'Datatype': 'http://www.w3.org/2000/01/rdf-schema#Datatype',
	/** The class of literal values, eg. textual strings and integers. */
	'Literal': 'http://www.w3.org/2000/01/rdf-schema#Literal',
	/** The class resource, everything. */
	'Resource': 'http://www.w3.org/2000/01/rdf-schema#Resource',
	/** A description of the subject resource. */
	'comment': 'http://www.w3.org/2000/01/rdf-schema#comment',
	/** A domain of the subject property. */
	'domain': 'http://www.w3.org/2000/01/rdf-schema#domain',
	/** The defininition of the subject resource. */
	'isDefinedBy': 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy',
	/** A human-readable name for the subject. */
	'label': 'http://www.w3.org/2000/01/rdf-schema#label',
	/** A member of the subject resource. */
	'member': 'http://www.w3.org/2000/01/rdf-schema#member',
	/** A range of the subject property. */
	'range': 'http://www.w3.org/2000/01/rdf-schema#range',
	/** Further information about the subject resource. */
	'seeAlso': 'http://www.w3.org/2000/01/rdf-schema#seeAlso',
	/** The subject is a subclass of a class. */
	'subClassOf': 'http://www.w3.org/2000/01/rdf-schema#subClassOf',
	/** The subject is a subproperty of a property. */
	'subPropertyOf': 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf',
}

/** Namespace URI of the rdfs vocabulary. */
export const _rdfs = new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#');

export const rdfs = {
	/** The class of classes. */
	'Class': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#Class'),
	/** The class of RDF containers. */
	'Container': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#Container'),
	/** The class of container membership properties, rdf:_1, rdf:_2, ...,
                    all of which are sub-properties of 'member'. */
	'ContainerMembershipProperty': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty'),
	/** The class of RDF datatypes. */
	'Datatype': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#Datatype'),
	/** The class of literal values, eg. textual strings and integers. */
	'Literal': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#Literal'),
	/** The class resource, everything. */
	'Resource': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#Resource'),
	/** A description of the subject resource. */
	'comment': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#comment'),
	/** A domain of the subject property. */
	'domain': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#domain'),
	/** The defininition of the subject resource. */
	'isDefinedBy': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#isDefinedBy'),
	/** A human-readable name for the subject. */
	'label': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#label'),
	/** A member of the subject resource. */
	'member': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#member'),
	/** A range of the subject property. */
	'range': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#range'),
	/** Further information about the subject resource. */
	'seeAlso': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#seeAlso'),
	/** The subject is a subclass of a class. */
	'subClassOf': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#subClassOf'),
	/** The subject is a subproperty of a property. */
	'subPropertyOf': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#subPropertyOf'),
}