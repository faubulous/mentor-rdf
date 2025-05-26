import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

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
export const _rdfs = namedNode('http://www.w3.org/2000/01/rdf-schema#');

export const rdfs = {
	/** The class of classes. */
	'Class': namedNode('http://www.w3.org/2000/01/rdf-schema#Class'),
	/** The class of RDF containers. */
	'Container': namedNode('http://www.w3.org/2000/01/rdf-schema#Container'),
	/** The class of container membership properties, rdf:_1, rdf:_2, ...,
                    all of which are sub-properties of 'member'. */
	'ContainerMembershipProperty': namedNode('http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty'),
	/** The class of RDF datatypes. */
	'Datatype': namedNode('http://www.w3.org/2000/01/rdf-schema#Datatype'),
	/** The class of literal values, eg. textual strings and integers. */
	'Literal': namedNode('http://www.w3.org/2000/01/rdf-schema#Literal'),
	/** The class resource, everything. */
	'Resource': namedNode('http://www.w3.org/2000/01/rdf-schema#Resource'),
	/** A description of the subject resource. */
	'comment': namedNode('http://www.w3.org/2000/01/rdf-schema#comment'),
	/** A domain of the subject property. */
	'domain': namedNode('http://www.w3.org/2000/01/rdf-schema#domain'),
	/** The defininition of the subject resource. */
	'isDefinedBy': namedNode('http://www.w3.org/2000/01/rdf-schema#isDefinedBy'),
	/** A human-readable name for the subject. */
	'label': namedNode('http://www.w3.org/2000/01/rdf-schema#label'),
	/** A member of the subject resource. */
	'member': namedNode('http://www.w3.org/2000/01/rdf-schema#member'),
	/** A range of the subject property. */
	'range': namedNode('http://www.w3.org/2000/01/rdf-schema#range'),
	/** Further information about the subject resource. */
	'seeAlso': namedNode('http://www.w3.org/2000/01/rdf-schema#seeAlso'),
	/** The subject is a subclass of a class. */
	'subClassOf': namedNode('http://www.w3.org/2000/01/rdf-schema#subClassOf'),
	/** The subject is a subproperty of a property. */
	'subPropertyOf': namedNode('http://www.w3.org/2000/01/rdf-schema#subPropertyOf'),
}