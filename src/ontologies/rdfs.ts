import { NamedNode } from '@rdfjs/types';

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
export const _rdfs = { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#' } as NamedNode;

export const rdfs = {
	/** The class of classes. */
	'Class': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#Class', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#Class' } as NamedNode,
	/** The class of RDF containers. */
	'Container': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#Container', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#Container' } as NamedNode,
	/** The class of container membership properties, rdf:_1, rdf:_2, ...,
                    all of which are sub-properties of 'member'. */
	'ContainerMembershipProperty': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty' } as NamedNode,
	/** The class of RDF datatypes. */
	'Datatype': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#Datatype', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#Datatype' } as NamedNode,
	/** The class of literal values, eg. textual strings and integers. */
	'Literal': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#Literal', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#Literal' } as NamedNode,
	/** The class resource, everything. */
	'Resource': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#Resource', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#Resource' } as NamedNode,
	/** A description of the subject resource. */
	'comment': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#comment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#comment' } as NamedNode,
	/** A domain of the subject property. */
	'domain': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#domain', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#domain' } as NamedNode,
	/** The defininition of the subject resource. */
	'isDefinedBy': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy' } as NamedNode,
	/** A human-readable name for the subject. */
	'label': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#label', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#label' } as NamedNode,
	/** A member of the subject resource. */
	'member': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#member', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#member' } as NamedNode,
	/** A range of the subject property. */
	'range': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#range', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#range' } as NamedNode,
	/** Further information about the subject resource. */
	'seeAlso': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#seeAlso', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#seeAlso' } as NamedNode,
	/** The subject is a subclass of a class. */
	'subClassOf': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#subClassOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#subClassOf' } as NamedNode,
	/** The subject is a subproperty of a property. */
	'subPropertyOf': { termType: 'NamedNode', value: 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf' } as NamedNode,
}