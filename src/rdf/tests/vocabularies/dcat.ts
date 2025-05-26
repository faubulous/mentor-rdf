import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

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
export const _dcat = namedNode('http://www.w3.org/ns/dcat#');

export const dcat = {
	/** DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema. */
	'dcat': namedNode('http://www.w3.org/ns/dcat'),
	/** A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog). */
	'Catalog': namedNode('http://www.w3.org/ns/dcat#Catalog'),
	/** A record in a data catalog, describing the registration of a single dataset or data service. */
	'CatalogRecord': namedNode('http://www.w3.org/ns/dcat#CatalogRecord'),
	/** A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources. */
	'DataService': namedNode('http://www.w3.org/ns/dcat#DataService'),
	/** A collection of data, published or curated by a single source, and available for access or download in one or more representations. */
	'Dataset': namedNode('http://www.w3.org/ns/dcat#Dataset'),
	/** A collection of datasets that are published separately, but share some characteristics that group them. */
	'DatasetSeries': namedNode('http://www.w3.org/ns/dcat#DatasetSeries'),
	/** A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above). */
	'Distribution': namedNode('http://www.w3.org/ns/dcat#Distribution'),
	/** An association class for attaching additional information to a relationship between DCAT Resources. */
	'Relationship': namedNode('http://www.w3.org/ns/dcat#Relationship'),
	/** Resource published or curated by a single agent. */
	'Resource': namedNode('http://www.w3.org/ns/dcat#Resource'),
	/** A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships. */
	'Role': namedNode('http://www.w3.org/ns/dcat#Role'),
	/** A site or end-point that gives access to the distribution of the dataset. */
	'accessService': namedNode('http://www.w3.org/ns/dcat#accessService'),
	/** A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred. */
	'accessURL': namedNode('http://www.w3.org/ns/dcat#accessURL'),
	/** The geographic bounding box of a spatial thing [SDW-BP]. */
	'bbox': namedNode('http://www.w3.org/ns/dcat#bbox'),
	/** The size of a distribution in bytes. */
	'byteSize': namedNode('http://www.w3.org/ns/dcat#byteSize'),
	/** A catalog that is listed in the catalog. */
	'catalog': namedNode('http://www.w3.org/ns/dcat#catalog'),
	/** The geographic center (centroid) of a spatial thing [SDW-BP]. */
	'centroid': namedNode('http://www.w3.org/ns/dcat#centroid'),
	/** The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file. */
	'compressFormat': namedNode('http://www.w3.org/ns/dcat#compressFormat'),
	/** Relevant contact information for the catalogued resource. Use of vCard is recommended. */
	'contactPoint': namedNode('http://www.w3.org/ns/dcat#contactPoint'),
	/** A dataset that is listed in the catalog. */
	'dataset': namedNode('http://www.w3.org/ns/dcat#dataset'),
	/** An available distribution of the dataset. */
	'distribution': namedNode('http://www.w3.org/ns/dcat#distribution'),
	/** The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dcterms:format and/or dcat:mediaType. */
	'downloadURL': namedNode('http://www.w3.org/ns/dcat#downloadURL'),
	/** The end of the period. */
	'endDate': namedNode('http://www.w3.org/ns/dcat#endDate'),
	/** A description of the service end-point, including its operations, parameters etc. */
	'endpointDescription': namedNode('http://www.w3.org/ns/dcat#endpointDescription'),
	/** The root location or primary endpoint of the service (a web-resolvable IRI). */
	'endpointURL': namedNode('http://www.w3.org/ns/dcat#endpointURL'),
	/** The first resource in an ordered collection or series of resources, to which the current resource belongs. */
	'first': namedNode('http://www.w3.org/ns/dcat#first'),
	/** The function of an entity or agent with respect to another entity or resource. */
	'hadRole': namedNode('http://www.w3.org/ns/dcat#hadRole'),
	/** This resource has a more specific, versioned resource with equivalent content [PAV]. */
	'hasCurrentVersion': namedNode('http://www.w3.org/ns/dcat#hasCurrentVersion'),
	/** This resource has a more specific, versioned resource [PAV]. */
	'hasVersion': namedNode('http://www.w3.org/ns/dcat#hasVersion'),
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'inCatalog': namedNode('http://www.w3.org/ns/dcat#inCatalog'),
	/** A dataset series of which the dataset is part. */
	'inSeries': namedNode('http://www.w3.org/ns/dcat#inSeries'),
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'isDistributionOf': namedNode('http://www.w3.org/ns/dcat#isDistributionOf'),
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'isVersionOf': namedNode('http://www.w3.org/ns/dcat#isVersionOf'),
	/** A keyword or tag describing a resource. */
	'keyword': namedNode('http://www.w3.org/ns/dcat#keyword'),
	/** A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information. */
	'landingPage': namedNode('http://www.w3.org/ns/dcat#landingPage'),
	/** The last resource in an ordered collection or series of resources, to which the current resource belongs. */
	'last': namedNode('http://www.w3.org/ns/dcat#last'),
	/** The media type of the distribution as defined by IANA */
	'mediaType': namedNode('http://www.w3.org/ns/dcat#mediaType'),
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'next': namedNode('http://www.w3.org/ns/dcat#next'),
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'nextVersion': namedNode('http://www.w3.org/ns/dcat#nextVersion'),
	/** The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together. */
	'packageFormat': namedNode('http://www.w3.org/ns/dcat#packageFormat'),
	/** The previous resource (before the current one) in an ordered collection or series of resources. */
	'prev': namedNode('http://www.w3.org/ns/dcat#prev'),
	/** The previous version of a resource in a lineage [PAV]. */
	'previousVersion': namedNode('http://www.w3.org/ns/dcat#previousVersion'),
	/** Link to a description of a relationship with another resource. */
	'qualifiedRelation': namedNode('http://www.w3.org/ns/dcat#qualifiedRelation'),
	/** A record describing the registration of a single dataset or data service that is part of the catalog. */
	'record': namedNode('http://www.w3.org/ns/dcat#record'),
	/** A resource that is listed in the catalog. */
	'resource': namedNode('http://www.w3.org/ns/dcat#resource'),
	/** This property MAY be used only in addition to its inverse, and it MUST NOT be used to replace it. */
	'seriesMember': namedNode('http://www.w3.org/ns/dcat#seriesMember'),
	/** A collection of data that this DataService can distribute. */
	'servesDataset': namedNode('http://www.w3.org/ns/dcat#servesDataset'),
	/** A service that is listed in the catalog. */
	'service': namedNode('http://www.w3.org/ns/dcat#service'),
	/** Alternative spatial resolutions might be provided as different dataset distributions. */
	'spatialResolutionInMeters': namedNode('http://www.w3.org/ns/dcat#spatialResolutionInMeters'),
	/** The start of the period */
	'startDate': namedNode('http://www.w3.org/ns/dcat#startDate'),
	/** minimum time period resolvable in a dataset. */
	'temporalResolution': namedNode('http://www.w3.org/ns/dcat#temporalResolution'),
	/** A main category of the resource. A resource can have multiple themes. */
	'theme': namedNode('http://www.w3.org/ns/dcat#theme'),
	/** The knowledge organization system (KOS) used to classify catalog's datasets. */
	'themeTaxonomy': namedNode('http://www.w3.org/ns/dcat#themeTaxonomy'),
	/** The version indicator (name or identifier) of a resource. */
	'version': namedNode('http://www.w3.org/ns/dcat#version'),
	/** This axiom needed so that Protege loads DCAT 3 without errors. */
	'homepage': namedNode('http://xmlns.com/foaf/0.1/homepage'),
	/** This axiom needed so that Protege loads DCAT 3 without errors. */
	'primaryTopic': namedNode('http://xmlns.com/foaf/0.1/primaryTopic'),
}