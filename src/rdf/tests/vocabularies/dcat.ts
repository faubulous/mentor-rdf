import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the DCAT vocabulary. */
export const _DCAT = 'http://www.w3.org/ns/dcat#';

export const DCAT = {
	/** DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema. */
	'dcat': 'http://www.w3.org/ns/dcat',
	/** A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog). */
	'Catalog': 'http://www.w3.org/ns/dcat#Catalog',
	/** A record in a data catalog, describing the registration of a single dataset or data service. */
	'CatalogRecord': 'http://www.w3.org/ns/dcat#CatalogRecord',
	/** A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources. */
	'DataService': 'http://www.w3.org/ns/dcat#DataService',
	/** A collection of data, published or curated by a single source, and available for access or download in one or more representations. */
	'Dataset': 'http://www.w3.org/ns/dcat#Dataset',
	/** A collection of datasets that are published separately, but share some characteristics that group them. */
	'DatasetSeries': 'http://www.w3.org/ns/dcat#DatasetSeries',
	/** A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above). */
	'Distribution': 'http://www.w3.org/ns/dcat#Distribution',
	/** An association class for attaching additional information to a relationship between DCAT Resources. */
	'Relationship': 'http://www.w3.org/ns/dcat#Relationship',
	/** Resource published or curated by a single agent. */
	'Resource': 'http://www.w3.org/ns/dcat#Resource',
	/** A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships. */
	'Role': 'http://www.w3.org/ns/dcat#Role',
	/** A site or end-point that gives access to the distribution of the dataset. */
	'accessService': 'http://www.w3.org/ns/dcat#accessService',
	/** A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred. */
	'accessURL': 'http://www.w3.org/ns/dcat#accessURL',
	/** The geographic bounding box of a spatial thing [SDW-BP]. */
	'bbox': 'http://www.w3.org/ns/dcat#bbox',
	/** The size of a distribution in bytes. */
	'byteSize': 'http://www.w3.org/ns/dcat#byteSize',
	/** A catalog that is listed in the catalog. */
	'catalog': 'http://www.w3.org/ns/dcat#catalog',
	/** The geographic center (centroid) of a spatial thing [SDW-BP]. */
	'centroid': 'http://www.w3.org/ns/dcat#centroid',
	/** The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file. */
	'compressFormat': 'http://www.w3.org/ns/dcat#compressFormat',
	/** Relevant contact information for the catalogued resource. Use of vCard is recommended. */
	'contactPoint': 'http://www.w3.org/ns/dcat#contactPoint',
	/** A dataset that is listed in the catalog. */
	'dataset': 'http://www.w3.org/ns/dcat#dataset',
	/** An available distribution of the dataset. */
	'distribution': 'http://www.w3.org/ns/dcat#distribution',
	/** The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dcterms:format and/or dcat:mediaType. */
	'downloadURL': 'http://www.w3.org/ns/dcat#downloadURL',
	/** The end of the period. */
	'endDate': 'http://www.w3.org/ns/dcat#endDate',
	/** A description of the service end-point, including its operations, parameters etc. */
	'endpointDescription': 'http://www.w3.org/ns/dcat#endpointDescription',
	/** The root location or primary endpoint of the service (a web-resolvable IRI). */
	'endpointURL': 'http://www.w3.org/ns/dcat#endpointURL',
	/** The first resource in an ordered collection or series of resources, to which the current resource belongs. */
	'first': 'http://www.w3.org/ns/dcat#first',
	/** The function of an entity or agent with respect to another entity or resource. */
	'hadRole': 'http://www.w3.org/ns/dcat#hadRole',
	/** This resource has a more specific, versioned resource with equivalent content [PAV]. */
	'hasCurrentVersion': 'http://www.w3.org/ns/dcat#hasCurrentVersion',
	/** This resource has a more specific, versioned resource [PAV]. */
	'hasVersion': 'http://www.w3.org/ns/dcat#hasVersion',
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'inCatalog': 'http://www.w3.org/ns/dcat#inCatalog',
	/** A dataset series of which the dataset is part. */
	'inSeries': 'http://www.w3.org/ns/dcat#inSeries',
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'isDistributionOf': 'http://www.w3.org/ns/dcat#isDistributionOf',
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'isVersionOf': 'http://www.w3.org/ns/dcat#isVersionOf',
	/** A keyword or tag describing a resource. */
	'keyword': 'http://www.w3.org/ns/dcat#keyword',
	/** A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information. */
	'landingPage': 'http://www.w3.org/ns/dcat#landingPage',
	/** The last resource in an ordered collection or series of resources, to which the current resource belongs. */
	'last': 'http://www.w3.org/ns/dcat#last',
	/** The media type of the distribution as defined by IANA */
	'mediaType': 'http://www.w3.org/ns/dcat#mediaType',
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'next': 'http://www.w3.org/ns/dcat#next',
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'nextVersion': 'http://www.w3.org/ns/dcat#nextVersion',
	/** The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together. */
	'packageFormat': 'http://www.w3.org/ns/dcat#packageFormat',
	/** The previous resource (before the current one) in an ordered collection or series of resources. */
	'prev': 'http://www.w3.org/ns/dcat#prev',
	/** The previous version of a resource in a lineage [PAV]. */
	'previousVersion': 'http://www.w3.org/ns/dcat#previousVersion',
	/** Link to a description of a relationship with another resource. */
	'qualifiedRelation': 'http://www.w3.org/ns/dcat#qualifiedRelation',
	/** A record describing the registration of a single dataset or data service that is part of the catalog. */
	'record': 'http://www.w3.org/ns/dcat#record',
	/** A resource that is listed in the catalog. */
	'resource': 'http://www.w3.org/ns/dcat#resource',
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'seriesMember': 'http://www.w3.org/ns/dcat#seriesMember',
	/** A collection of data that this DataService can distribute. */
	'servesDataset': 'http://www.w3.org/ns/dcat#servesDataset',
	/** A service that is listed in the catalog. */
	'service': 'http://www.w3.org/ns/dcat#service',
	/** Alternative spatial resolutions might be provided as different dataset distributions. */
	'spatialResolutionInMeters': 'http://www.w3.org/ns/dcat#spatialResolutionInMeters',
	/** The start of the period */
	'startDate': 'http://www.w3.org/ns/dcat#startDate',
	/** minimum time period resolvable in a dataset. */
	'temporalResolution': 'http://www.w3.org/ns/dcat#temporalResolution',
	/** A main category of the resource. A resource can have multiple themes. */
	'theme': 'http://www.w3.org/ns/dcat#theme',
	/** The knowledge organization system (KOS) used to classify catalog's datasets. */
	'themeTaxonomy': 'http://www.w3.org/ns/dcat#themeTaxonomy',
	/** The version indicator (name or identifier) of a resource. */
	'version': 'http://www.w3.org/ns/dcat#version',
	/** This axiom needed so that Protege loads DCAT 3 without errors. */
	'homepage': 'http://xmlns.com/foaf/0.1/homepage',
	/** This axiom needed so that Protege loads DCAT 3 without errors. */
	'primaryTopic': 'http://xmlns.com/foaf/0.1/primaryTopic',
}

/** Namespace URI of the dcat vocabulary. */
export const _dcat = { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#' } as NamedNode;

export const dcat = {
	/** DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema. */
	'dcat': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat' } as NamedNode,
	/** A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog). */
	'Catalog': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#Catalog', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#Catalog' } as NamedNode,
	/** A record in a data catalog, describing the registration of a single dataset or data service. */
	'CatalogRecord': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#CatalogRecord', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#CatalogRecord' } as NamedNode,
	/** A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources. */
	'DataService': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#DataService', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#DataService' } as NamedNode,
	/** A collection of data, published or curated by a single source, and available for access or download in one or more representations. */
	'Dataset': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#Dataset', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#Dataset' } as NamedNode,
	/** A collection of datasets that are published separately, but share some characteristics that group them. */
	'DatasetSeries': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#DatasetSeries', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#DatasetSeries' } as NamedNode,
	/** A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above). */
	'Distribution': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#Distribution', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#Distribution' } as NamedNode,
	/** An association class for attaching additional information to a relationship between DCAT Resources. */
	'Relationship': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#Relationship', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#Relationship' } as NamedNode,
	/** Resource published or curated by a single agent. */
	'Resource': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#Resource', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#Resource' } as NamedNode,
	/** A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships. */
	'Role': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#Role', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#Role' } as NamedNode,
	/** A site or end-point that gives access to the distribution of the dataset. */
	'accessService': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#accessService', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#accessService' } as NamedNode,
	/** A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred. */
	'accessURL': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#accessURL', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#accessURL' } as NamedNode,
	/** The geographic bounding box of a spatial thing [SDW-BP]. */
	'bbox': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#bbox', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#bbox' } as NamedNode,
	/** The size of a distribution in bytes. */
	'byteSize': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#byteSize', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#byteSize' } as NamedNode,
	/** A catalog that is listed in the catalog. */
	'catalog': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#catalog', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#catalog' } as NamedNode,
	/** The geographic center (centroid) of a spatial thing [SDW-BP]. */
	'centroid': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#centroid', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#centroid' } as NamedNode,
	/** The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file. */
	'compressFormat': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#compressFormat', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#compressFormat' } as NamedNode,
	/** Relevant contact information for the catalogued resource. Use of vCard is recommended. */
	'contactPoint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#contactPoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#contactPoint' } as NamedNode,
	/** A dataset that is listed in the catalog. */
	'dataset': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#dataset', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#dataset' } as NamedNode,
	/** An available distribution of the dataset. */
	'distribution': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#distribution', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#distribution' } as NamedNode,
	/** The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dcterms:format and/or dcat:mediaType. */
	'downloadURL': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#downloadURL', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#downloadURL' } as NamedNode,
	/** The end of the period. */
	'endDate': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#endDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#endDate' } as NamedNode,
	/** A description of the service end-point, including its operations, parameters etc. */
	'endpointDescription': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#endpointDescription', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#endpointDescription' } as NamedNode,
	/** The root location or primary endpoint of the service (a web-resolvable IRI). */
	'endpointURL': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#endpointURL', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#endpointURL' } as NamedNode,
	/** The first resource in an ordered collection or series of resources, to which the current resource belongs. */
	'first': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#first', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#first' } as NamedNode,
	/** The function of an entity or agent with respect to another entity or resource. */
	'hadRole': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#hadRole', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#hadRole' } as NamedNode,
	/** This resource has a more specific, versioned resource with equivalent content [PAV]. */
	'hasCurrentVersion': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#hasCurrentVersion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#hasCurrentVersion' } as NamedNode,
	/** This resource has a more specific, versioned resource [PAV]. */
	'hasVersion': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#hasVersion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#hasVersion' } as NamedNode,
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'inCatalog': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#inCatalog', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#inCatalog' } as NamedNode,
	/** A dataset series of which the dataset is part. */
	'inSeries': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#inSeries', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#inSeries' } as NamedNode,
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'isDistributionOf': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#isDistributionOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#isDistributionOf' } as NamedNode,
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'isVersionOf': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#isVersionOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#isVersionOf' } as NamedNode,
	/** A keyword or tag describing a resource. */
	'keyword': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#keyword', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#keyword' } as NamedNode,
	/** A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information. */
	'landingPage': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#landingPage', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#landingPage' } as NamedNode,
	/** The last resource in an ordered collection or series of resources, to which the current resource belongs. */
	'last': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#last', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#last' } as NamedNode,
	/** The media type of the distribution as defined by IANA */
	'mediaType': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#mediaType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#mediaType' } as NamedNode,
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'next': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#next', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#next' } as NamedNode,
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'nextVersion': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#nextVersion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#nextVersion' } as NamedNode,
	/** The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together. */
	'packageFormat': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#packageFormat', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#packageFormat' } as NamedNode,
	/** The previous resource (before the current one) in an ordered collection or series of resources. */
	'prev': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#prev', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#prev' } as NamedNode,
	/** The previous version of a resource in a lineage [PAV]. */
	'previousVersion': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#previousVersion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#previousVersion' } as NamedNode,
	/** Link to a description of a relationship with another resource. */
	'qualifiedRelation': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#qualifiedRelation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#qualifiedRelation' } as NamedNode,
	/** A record describing the registration of a single dataset or data service that is part of the catalog. */
	'record': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#record', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#record' } as NamedNode,
	/** A resource that is listed in the catalog. */
	'resource': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#resource', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#resource' } as NamedNode,
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'seriesMember': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#seriesMember', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#seriesMember' } as NamedNode,
	/** A collection of data that this DataService can distribute. */
	'servesDataset': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#servesDataset', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#servesDataset' } as NamedNode,
	/** A service that is listed in the catalog. */
	'service': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#service', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#service' } as NamedNode,
	/** Alternative spatial resolutions might be provided as different dataset distributions. */
	'spatialResolutionInMeters': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#spatialResolutionInMeters', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#spatialResolutionInMeters' } as NamedNode,
	/** The start of the period */
	'startDate': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#startDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#startDate' } as NamedNode,
	/** minimum time period resolvable in a dataset. */
	'temporalResolution': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#temporalResolution', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#temporalResolution' } as NamedNode,
	/** A main category of the resource. A resource can have multiple themes. */
	'theme': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#theme', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#theme' } as NamedNode,
	/** The knowledge organization system (KOS) used to classify catalog's datasets. */
	'themeTaxonomy': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#themeTaxonomy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#themeTaxonomy' } as NamedNode,
	/** The version indicator (name or identifier) of a resource. */
	'version': { termType: 'NamedNode', value: 'http://www.w3.org/ns/dcat#version', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/dcat#version' } as NamedNode,
	/** This axiom needed so that Protege loads DCAT 3 without errors. */
	'homepage': { termType: 'NamedNode', value: 'http://xmlns.com/foaf/0.1/homepage', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://xmlns.com/foaf/0.1/homepage' } as NamedNode,
	/** This axiom needed so that Protege loads DCAT 3 without errors. */
	'primaryTopic': { termType: 'NamedNode', value: 'http://xmlns.com/foaf/0.1/primaryTopic', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://xmlns.com/foaf/0.1/primaryTopic' } as NamedNode,
}