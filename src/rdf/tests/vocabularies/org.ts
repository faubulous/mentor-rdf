import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

/** Namespace URI of the ORG vocabulary. */
export const _ORG = 'http://www.w3.org/ns/org#';

export const ORG = {
	'BusinessEntity': 'http://purl.org/goodrelations/v1#BusinessEntity',
	/** Represents an event which resulted in a major change to an organization such as a merger or complete restructuring. It is intended for situations where the resulting organization is sufficient distinct from the original organizations that it has a distinct identity and distinct URI. Extension vocabularies should define sub-classes of this to denote particular categories of event. The instant or interval at which the event occurred should be given by `prov:startAtTime` and `prov:endedAtTime`, a description should be given by `dct:description`.  */
	'ChangeEvent': 'http://www.w3.org/ns/org#ChangeEvent',
	/** An Organization which is recognized in the world at large, in particular in legal jurisdictions, with associated rights and responsibilities. Examples include a Corporation, Charity, Government or Church. Note that this is a super class of `gr:BusinessEntity` and it is recommended to use the GoodRelations vocabulary to denote Business classifications such as DUNS or NAICS. */
	'FormalOrganization': 'http://www.w3.org/ns/org#FormalOrganization',
	/** A role corresponding to the `org:headOf` property */
	'Head': 'http://www.w3.org/ns/org#Head',
	/** Indicates the nature of an Agent's membership of an organization. Represents an n-ary relation between an Agent, an Organization and a Role. It is possible to directly indicate membership, independent of the specific Role, through use of the `org:memberOf` property. */
	'Membership': 'http://www.w3.org/ns/org#Membership',
	/** Represents a collection of people organized together into a community or other social, commercial or political structure. The group has some common purpose or reason for existence which goes beyond the set of people belonging to it and can act as an Agent. Organizations are often decomposable into hierarchical structures.  It is recommended that SKOS lexical labels should be used to label the Organization. In particular `skos:prefLabel` for the primary (possibly legally recognized name), `skos:altLabel` for alternative names (trading names, colloquial names) and `skos:notation` to denote a code from a code list. Alternative names: _Collective_ _Body_ _Org_ _Group_ */
	'Organization': 'http://www.w3.org/ns/org#Organization',
	/** A collaboration between two or more Organizations such as a project. It meets the criteria for being an Organization in that it has an identity and defining purpose independent of its particular members but is neither a formally recognized legal entity nor a sub-unit within some larger organization. Might typically have a shorter lifetime than the Organizations within it, but not necessarily. All members are `org:Organization`s rather than individuals and those Organizations can play particular roles within the venture. Alternative names: _Project_ _Venture_  _Endeavour_ _Consortium_ _Endeavour_ */
	'OrganizationalCollaboration': 'http://www.w3.org/ns/org#OrganizationalCollaboration',
	/** An Organization such as a University Support Unit which is part of some larger FormalOrganization and only has full recognition within the context of that FormalOrganization, it is not a Legal Entity in its own right. Units can be large and complex containing other Units and even FormalOrganizations. Alternative names: _OU_ _Unit_ _Department_ */
	'OrganizationalUnit': 'http://www.w3.org/ns/org#OrganizationalUnit',
	/** A Post represents some position within an organization that exists independently of the person or persons filling it. Posts may be used to represent situations where a person is a member of an organization ex officio (for example the Secretary of State for Scotland is part of UK Cabinet by virtue of being Secretary of State for Scotland, not as an individual person). A post can be held by multiple people and hence can be treated as a organization in its own right. */
	'Post': 'http://www.w3.org/ns/org#Post',
	/** Denotes a role that a Person or other Agent can take in an organization. Instances of this class describe the abstract role; to denote a specific instance of a person playing that role in a specific organization use an instance of `org:Membership`. It is common for roles to be arranged in some taxonomic structure and we use SKOS to represent that. The normal SKOS lexical properties should be used when labelling the Role. Additional descriptive properties for the Role, such as a Salary band, may be added by extension vocabularies. */
	'Role': 'http://www.w3.org/ns/org#Role',
	/** An office or other premise at which the organization is located. Many organizations are spread across multiple sites and many sites will host multiple locations. In most cases a Site will be a physical location. However, we don't exclude the possibility of non-physical sites such as a virtual office with an associated post box and phone reception service. Extensions may provide subclasses to denote particular types of site. */
	'Site': 'http://www.w3.org/ns/org#Site',
	/** Indicates the site at which a person is based. We do not restrict the possibility that a person is based at multiple sites. */
	'basedAt': 'http://www.w3.org/ns/org#basedAt',
	/** Indicates a change event which resulted in a change to this organization. Depending on the event the organization may or may not have continued to exist after the event. Inverse of `org:originalOrganization`. */
	'changedBy': 'http://www.w3.org/ns/org#changedBy',
	/** Indicates a classification for this Organization within some classification scheme. Extension vocabularies may wish to specialize this property to have a range corresponding to a specific `skos:ConceptScheme`. This property is under discussion and may be revised or removed - in many cases organizations are best categorized by defining a sub-class hierarchy in an extension vocabulary. */
	'classification': 'http://www.w3.org/ns/org#classification',
	/** Indicates a person who is a member of the subject Organization. Inverse of `org:memberOf`, see that property for further clarification. Provided for compatibility with `foaf:member`. */
	'hasMember': 'http://www.w3.org/ns/org#hasMember',
	/** Indicates a membership relationship that the Agent plays. Inverse of `org:member`. */
	'hasMembership': 'http://www.w3.org/ns/org#hasMembership',
	/** Indicates a Post which exists within the Organization. */
	'hasPost': 'http://www.w3.org/ns/org#hasPost',
	/** Indicates a primary site for the Organization, this is the default means by which an Organization can be contacted and is not necessarily the formal headquarters. */
	'hasPrimarySite': 'http://www.w3.org/ns/org#hasPrimarySite',
	/** Indicates the legally registered site for the organization, in many legal jurisdictions there is a requirement that FormalOrganizations such as Companies or Charities have such a primary designed site.  */
	'hasRegisteredSite': 'http://www.w3.org/ns/org#hasRegisteredSite',
	/** Indicates a site at which the Organization has some presence even if only indirect (e.g. virtual office or a professional service which is acting as the registered address for a company). Inverse of `org:siteOf`. */
	'hasSite': 'http://www.w3.org/ns/org#hasSite',
	/** Represents hierarchical containment of Organizations or Organizational Units; indicates an organization which is a sub-part or child of this organization.  Inverse of `org:subOrganizationOf`. */
	'hasSubOrganization': 'http://www.w3.org/ns/org#hasSubOrganization',
	/** Indicates a unit which is part of this Organization, e.g. a Department within a larger FormalOrganization. Inverse of `org:unitOf`. */
	'hasUnit': 'http://www.w3.org/ns/org#hasUnit',
	/** Indicates that a person is the leader or formal head of the Organization. This will normally mean that they are the root of the `org:reportsTo` (acyclic) graph, though an organization may have more than one head. */
	'headOf': 'http://www.w3.org/ns/org#headOf',
	/** Indicates an Agent which holds a Post. */
	'heldBy': 'http://www.w3.org/ns/org#heldBy',
	/** Indicates a Post held by some Agent. */
	'holds': 'http://www.w3.org/ns/org#holds',
	/** Gives an identifier, such as a company registration number, that can be used to used to uniquely identify the organization. Many different national and international identier schemes are available. The org ontology is neutral to which schemes are used. The particular identifier scheme should be indicated by the datatype of the identifier value.  Using datatypes to distinguish the notation scheme used is consistent with recommended best practice for `skos:notation` of which this property is a specialization. */
	'identifier': 'http://www.w3.org/ns/org#identifier',
	/** Indicates an arbitrary relationship between two organizations. Specializations of this can be used to, for example, denote funding or supply chain relationships. */
	'linkedTo': 'http://www.w3.org/ns/org#linkedTo',
	/** Gives a location description for a person within the organization, for example a _Mail Stop_ for internal posting purposes. */
	'location': 'http://www.w3.org/ns/org#location',
	/** Indicates the Person (or other Agent including Organization) involved in the Membership relationship. Inverse of `org:hasMembership` */
	'member': 'http://www.w3.org/ns/org#member',
	/** Optional property to indicate the interval for which the membership is/was valid. */
	'memberDuring': 'http://www.w3.org/ns/org#memberDuring',
	/** Indicates that a person is a member of the Organization with no indication of the nature of that membership or the role played. Note that the choice of property name is not meant to limit the property to only formal membership arrangements, it is also indended to cover related concepts such as affilliation or other involvement in the organization. Extensions can specialize this relationship to indicate particular roles within the organization or more nuanced relationships to the organization. Has an optional inverse, `org:hasmember`. */
	'memberOf': 'http://www.w3.org/ns/org#memberOf',
	/** Indicates Organization in which the Agent is a member. */
	'organization': 'http://www.w3.org/ns/org#organization',
	/** Indicates one or more organizations that existed before the change event. Depending on the event they may or may not have continued to exist after the event. Inverse of `org:changedBy`. */
	'originalOrganization': 'http://www.w3.org/ns/org#originalOrganization',
	/** Indicates the Organization in which the Post exists. */
	'postIn': 'http://www.w3.org/ns/org#postIn',
	/** Indicates the purpose of this Organization. There can be many purposes at different levels of abstraction but the nature of an organization is to have a reason for existence and this property is a means to document that reason. An Organization may have multiple purposes. It is recommended that the purpose be denoted by a controlled term or code list, ideally a `skos:Concept`. However, the range is left open to allow for other types of descriptive schemes. It is expected that specializations or application profiles of this vocabulary will constrain the range of the purpose. Alternative names: _remit_ _responsibility_ (esp. if applied to OrganizationalUnits such as Government Departments). */
	'purpose': 'http://www.w3.org/ns/org#purpose',
	/** Indicates a salary or other reward associated with the role. Typically this will be denoted using an existing representation scheme such as `gr:PriceSpecification` but the range is left open to allow applications to specialize it (e.g. to remunerationInGBP). */
	'remuneration': 'http://www.w3.org/ns/org#remuneration',
	/** Indicates a reporting relationship as might be depicted on an organizational chart. The precise semantics of the reporting relationship will vary by organization but is intended to encompass both direct supervisory relationships (e.g. carrying objective and salary setting authority) and more general reporting or accountability relationships (e.g. so called _dotted line_ reporting). */
	'reportsTo': 'http://www.w3.org/ns/org#reportsTo',
	/** Indicates an event which resulted in this organization. Inverse of `org:resultingOrganization`. */
	'resultedFrom': 'http://www.w3.org/ns/org#resultedFrom',
	/** Indicates an organization which was created or changed as a result of the event. Inverse of `org:resultedFrom`. */
	'resultingOrganization': 'http://www.w3.org/ns/org#resultingOrganization',
	/** Indicates the Role that the Agent plays in a Membership relationship with an Organization. */
	'role': 'http://www.w3.org/ns/org#role',
	/** This is a metalevel property which is used to annotate an `org:Role` instance with a sub-property of `org:memberOf` that can be used to directly indicate the role for easy of query. The intended semantics is a Membership relation involving the Role implies the existence of a direct property relationship through an inference rule of the form:  `{ [] org:member ?p; org:organization ?o; org:role [org:roleProperty ?r] } -> {?p ?r ?o}`. */
	'roleProperty': 'http://www.w3.org/ns/org#roleProperty',
	/** Indicates an address for the site in a suitable encoding. Use of vCard (using the http://www.w3.org/TR/vcard-rdf/ vocabulary) is encouraged but the range is left open to allow other encodings to be used. The address may include email, telephone, and geo-location information and is not restricted to a physical address.  */
	'siteAddress': 'http://www.w3.org/ns/org#siteAddress',
	/** Indicates an Organization which has some presence at the given site. This is the inverse of `org:hasSite`. */
	'siteOf': 'http://www.w3.org/ns/org#siteOf',
	/** Represents hierarchical containment of Organizations or OrganizationalUnits; indicates an Organization which contains this Organization. Inverse of `org:hasSubOrganization`. */
	'subOrganizationOf': 'http://www.w3.org/ns/org#subOrganizationOf',
	/** The transitive closure of subOrganizationOf, giving a representation of all organizations that contain this one. Note that technically this is a super property of the transitive closure so it could contain additional assertions but such usage is discouraged. */
	'transitiveSubOrganizationOf': 'http://www.w3.org/ns/org#transitiveSubOrganizationOf',
	/** Indicates an Organization of which this Unit is a part, e.g. a Department within a larger FormalOrganization. This is the inverse of `org:hasUnit`. */
	'unitOf': 'http://www.w3.org/ns/org#unitOf',
	'wasDerivedFrom': 'http://www.w3.org/ns/prov#wasDerivedFrom',
}

/** Namespace URI of the org vocabulary. */
export const _org = namedNode('http://www.w3.org/ns/org#');

export const org = {
	'BusinessEntity': namedNode('http://purl.org/goodrelations/v1#BusinessEntity'),
	/** Represents an event which resulted in a major change to an organization such as a merger or complete restructuring. It is intended for situations where the resulting organization is sufficient distinct from the original organizations that it has a distinct identity and distinct URI. Extension vocabularies should define sub-classes of this to denote particular categories of event. The instant or interval at which the event occurred should be given by `prov:startAtTime` and `prov:endedAtTime`, a description should be given by `dct:description`.  */
	'ChangeEvent': namedNode('http://www.w3.org/ns/org#ChangeEvent'),
	/** An Organization which is recognized in the world at large, in particular in legal jurisdictions, with associated rights and responsibilities. Examples include a Corporation, Charity, Government or Church. Note that this is a super class of `gr:BusinessEntity` and it is recommended to use the GoodRelations vocabulary to denote Business classifications such as DUNS or NAICS. */
	'FormalOrganization': namedNode('http://www.w3.org/ns/org#FormalOrganization'),
	/** A role corresponding to the `org:headOf` property */
	'Head': namedNode('http://www.w3.org/ns/org#Head'),
	/** Indicates the nature of an Agent's membership of an organization. Represents an n-ary relation between an Agent, an Organization and a Role. It is possible to directly indicate membership, independent of the specific Role, through use of the `org:memberOf` property. */
	'Membership': namedNode('http://www.w3.org/ns/org#Membership'),
	/** Represents a collection of people organized together into a community or other social, commercial or political structure. The group has some common purpose or reason for existence which goes beyond the set of people belonging to it and can act as an Agent. Organizations are often decomposable into hierarchical structures.  It is recommended that SKOS lexical labels should be used to label the Organization. In particular `skos:prefLabel` for the primary (possibly legally recognized name), `skos:altLabel` for alternative names (trading names, colloquial names) and `skos:notation` to denote a code from a code list. Alternative names: _Collective_ _Body_ _Org_ _Group_ */
	'Organization': namedNode('http://www.w3.org/ns/org#Organization'),
	/** A collaboration between two or more Organizations such as a project. It meets the criteria for being an Organization in that it has an identity and defining purpose independent of its particular members but is neither a formally recognized legal entity nor a sub-unit within some larger organization. Might typically have a shorter lifetime than the Organizations within it, but not necessarily. All members are `org:Organization`s rather than individuals and those Organizations can play particular roles within the venture. Alternative names: _Project_ _Venture_  _Endeavour_ _Consortium_ _Endeavour_ */
	'OrganizationalCollaboration': namedNode('http://www.w3.org/ns/org#OrganizationalCollaboration'),
	/** An Organization such as a University Support Unit which is part of some larger FormalOrganization and only has full recognition within the context of that FormalOrganization, it is not a Legal Entity in its own right. Units can be large and complex containing other Units and even FormalOrganizations. Alternative names: _OU_ _Unit_ _Department_ */
	'OrganizationalUnit': namedNode('http://www.w3.org/ns/org#OrganizationalUnit'),
	/** A Post represents some position within an organization that exists independently of the person or persons filling it. Posts may be used to represent situations where a person is a member of an organization ex officio (for example the Secretary of State for Scotland is part of UK Cabinet by virtue of being Secretary of State for Scotland, not as an individual person). A post can be held by multiple people and hence can be treated as a organization in its own right. */
	'Post': namedNode('http://www.w3.org/ns/org#Post'),
	/** Denotes a role that a Person or other Agent can take in an organization. Instances of this class describe the abstract role; to denote a specific instance of a person playing that role in a specific organization use an instance of `org:Membership`. It is common for roles to be arranged in some taxonomic structure and we use SKOS to represent that. The normal SKOS lexical properties should be used when labelling the Role. Additional descriptive properties for the Role, such as a Salary band, may be added by extension vocabularies. */
	'Role': namedNode('http://www.w3.org/ns/org#Role'),
	/** An office or other premise at which the organization is located. Many organizations are spread across multiple sites and many sites will host multiple locations. In most cases a Site will be a physical location. However, we don't exclude the possibility of non-physical sites such as a virtual office with an associated post box and phone reception service. Extensions may provide subclasses to denote particular types of site. */
	'Site': namedNode('http://www.w3.org/ns/org#Site'),
	/** Indicates the site at which a person is based. We do not restrict the possibility that a person is based at multiple sites. */
	'basedAt': namedNode('http://www.w3.org/ns/org#basedAt'),
	/** Indicates a change event which resulted in a change to this organization. Depending on the event the organization may or may not have continued to exist after the event. Inverse of `org:originalOrganization`. */
	'changedBy': namedNode('http://www.w3.org/ns/org#changedBy'),
	/** Indicates a classification for this Organization within some classification scheme. Extension vocabularies may wish to specialize this property to have a range corresponding to a specific `skos:ConceptScheme`. This property is under discussion and may be revised or removed - in many cases organizations are best categorized by defining a sub-class hierarchy in an extension vocabulary. */
	'classification': namedNode('http://www.w3.org/ns/org#classification'),
	/** Indicates a person who is a member of the subject Organization. Inverse of `org:memberOf`, see that property for further clarification. Provided for compatibility with `foaf:member`. */
	'hasMember': namedNode('http://www.w3.org/ns/org#hasMember'),
	/** Indicates a membership relationship that the Agent plays. Inverse of `org:member`. */
	'hasMembership': namedNode('http://www.w3.org/ns/org#hasMembership'),
	/** Indicates a Post which exists within the Organization. */
	'hasPost': namedNode('http://www.w3.org/ns/org#hasPost'),
	/** Indicates a primary site for the Organization, this is the default means by which an Organization can be contacted and is not necessarily the formal headquarters. */
	'hasPrimarySite': namedNode('http://www.w3.org/ns/org#hasPrimarySite'),
	/** Indicates the legally registered site for the organization, in many legal jurisdictions there is a requirement that FormalOrganizations such as Companies or Charities have such a primary designed site.  */
	'hasRegisteredSite': namedNode('http://www.w3.org/ns/org#hasRegisteredSite'),
	/** Indicates a site at which the Organization has some presence even if only indirect (e.g. virtual office or a professional service which is acting as the registered address for a company). Inverse of `org:siteOf`. */
	'hasSite': namedNode('http://www.w3.org/ns/org#hasSite'),
	/** Represents hierarchical containment of Organizations or Organizational Units; indicates an organization which is a sub-part or child of this organization.  Inverse of `org:subOrganizationOf`. */
	'hasSubOrganization': namedNode('http://www.w3.org/ns/org#hasSubOrganization'),
	/** Indicates a unit which is part of this Organization, e.g. a Department within a larger FormalOrganization. Inverse of `org:unitOf`. */
	'hasUnit': namedNode('http://www.w3.org/ns/org#hasUnit'),
	/** Indicates that a person is the leader or formal head of the Organization. This will normally mean that they are the root of the `org:reportsTo` (acyclic) graph, though an organization may have more than one head. */
	'headOf': namedNode('http://www.w3.org/ns/org#headOf'),
	/** Indicates an Agent which holds a Post. */
	'heldBy': namedNode('http://www.w3.org/ns/org#heldBy'),
	/** Indicates a Post held by some Agent. */
	'holds': namedNode('http://www.w3.org/ns/org#holds'),
	/** Gives an identifier, such as a company registration number, that can be used to used to uniquely identify the organization. Many different national and international identier schemes are available. The org ontology is neutral to which schemes are used. The particular identifier scheme should be indicated by the datatype of the identifier value.  Using datatypes to distinguish the notation scheme used is consistent with recommended best practice for `skos:notation` of which this property is a specialization. */
	'identifier': namedNode('http://www.w3.org/ns/org#identifier'),
	/** Indicates an arbitrary relationship between two organizations. Specializations of this can be used to, for example, denote funding or supply chain relationships. */
	'linkedTo': namedNode('http://www.w3.org/ns/org#linkedTo'),
	/** Gives a location description for a person within the organization, for example a _Mail Stop_ for internal posting purposes. */
	'location': namedNode('http://www.w3.org/ns/org#location'),
	/** Indicates the Person (or other Agent including Organization) involved in the Membership relationship. Inverse of `org:hasMembership` */
	'member': namedNode('http://www.w3.org/ns/org#member'),
	/** Optional property to indicate the interval for which the membership is/was valid. */
	'memberDuring': namedNode('http://www.w3.org/ns/org#memberDuring'),
	/** Indicates that a person is a member of the Organization with no indication of the nature of that membership or the role played. Note that the choice of property name is not meant to limit the property to only formal membership arrangements, it is also indended to cover related concepts such as affilliation or other involvement in the organization. Extensions can specialize this relationship to indicate particular roles within the organization or more nuanced relationships to the organization. Has an optional inverse, `org:hasmember`. */
	'memberOf': namedNode('http://www.w3.org/ns/org#memberOf'),
	/** Indicates Organization in which the Agent is a member. */
	'organization': namedNode('http://www.w3.org/ns/org#organization'),
	/** Indicates one or more organizations that existed before the change event. Depending on the event they may or may not have continued to exist after the event. Inverse of `org:changedBy`. */
	'originalOrganization': namedNode('http://www.w3.org/ns/org#originalOrganization'),
	/** Indicates the Organization in which the Post exists. */
	'postIn': namedNode('http://www.w3.org/ns/org#postIn'),
	/** Indicates the purpose of this Organization. There can be many purposes at different levels of abstraction but the nature of an organization is to have a reason for existence and this property is a means to document that reason. An Organization may have multiple purposes. It is recommended that the purpose be denoted by a controlled term or code list, ideally a `skos:Concept`. However, the range is left open to allow for other types of descriptive schemes. It is expected that specializations or application profiles of this vocabulary will constrain the range of the purpose. Alternative names: _remit_ _responsibility_ (esp. if applied to OrganizationalUnits such as Government Departments). */
	'purpose': namedNode('http://www.w3.org/ns/org#purpose'),
	/** Indicates a salary or other reward associated with the role. Typically this will be denoted using an existing representation scheme such as `gr:PriceSpecification` but the range is left open to allow applications to specialize it (e.g. to remunerationInGBP). */
	'remuneration': namedNode('http://www.w3.org/ns/org#remuneration'),
	/** Indicates a reporting relationship as might be depicted on an organizational chart. The precise semantics of the reporting relationship will vary by organization but is intended to encompass both direct supervisory relationships (e.g. carrying objective and salary setting authority) and more general reporting or accountability relationships (e.g. so called _dotted line_ reporting). */
	'reportsTo': namedNode('http://www.w3.org/ns/org#reportsTo'),
	/** Indicates an event which resulted in this organization. Inverse of `org:resultingOrganization`. */
	'resultedFrom': namedNode('http://www.w3.org/ns/org#resultedFrom'),
	/** Indicates an organization which was created or changed as a result of the event. Inverse of `org:resultedFrom`. */
	'resultingOrganization': namedNode('http://www.w3.org/ns/org#resultingOrganization'),
	/** Indicates the Role that the Agent plays in a Membership relationship with an Organization. */
	'role': namedNode('http://www.w3.org/ns/org#role'),
	/** This is a metalevel property which is used to annotate an `org:Role` instance with a sub-property of `org:memberOf` that can be used to directly indicate the role for easy of query. The intended semantics is a Membership relation involving the Role implies the existence of a direct property relationship through an inference rule of the form:  `{ [] org:member ?p; org:organization ?o; org:role [org:roleProperty ?r] } -> {?p ?r ?o}`. */
	'roleProperty': namedNode('http://www.w3.org/ns/org#roleProperty'),
	/** Indicates an address for the site in a suitable encoding. Use of vCard (using the http://www.w3.org/TR/vcard-rdf/ vocabulary) is encouraged but the range is left open to allow other encodings to be used. The address may include email, telephone, and geo-location information and is not restricted to a physical address.  */
	'siteAddress': namedNode('http://www.w3.org/ns/org#siteAddress'),
	/** Indicates an Organization which has some presence at the given site. This is the inverse of `org:hasSite`. */
	'siteOf': namedNode('http://www.w3.org/ns/org#siteOf'),
	/** Represents hierarchical containment of Organizations or OrganizationalUnits; indicates an Organization which contains this Organization. Inverse of `org:hasSubOrganization`. */
	'subOrganizationOf': namedNode('http://www.w3.org/ns/org#subOrganizationOf'),
	/** The transitive closure of subOrganizationOf, giving a representation of all organizations that contain this one. Note that technically this is a super property of the transitive closure so it could contain additional assertions but such usage is discouraged. */
	'transitiveSubOrganizationOf': namedNode('http://www.w3.org/ns/org#transitiveSubOrganizationOf'),
	/** Indicates an Organization of which this Unit is a part, e.g. a Department within a larger FormalOrganization. This is the inverse of `org:hasUnit`. */
	'unitOf': namedNode('http://www.w3.org/ns/org#unitOf'),
	'wasDerivedFrom': namedNode('http://www.w3.org/ns/prov#wasDerivedFrom'),
}