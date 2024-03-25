import * as n3 from "n3";

export const FIBO_ORGANIZATION = {
	/** role of a group or organization that has members that are people or other organizations */
	'MemberBearingOrganization': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/MemberBearingOrganization',
	/** situation, corresponding to an n-ary relation, in which some group or organization has at least one member (person or organization) for some period of time */
	'Membership': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Membership',
	/** collection of one or more people, or groups of people formed together into a community or other social, commercial or political structure to act, or that is designated to act, towards some purpose, such as to meet a need or pursue collective goals on a continuing basis */
	'Organization': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Organization',
	/** identification scheme dedicated to the unique identification of organizations */
	'OrganizationIdentificationScheme': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationIdentificationScheme',
	/** identifier assigned to an organization within an organization identification scheme, and unique within that scheme */
	'OrganizationIdentifier': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationIdentifier',
	/** party (person or organization) that has a membership role with respect to some organization */
	'OrganizationMember': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationMember',
	/** designation by which some organization is known in some context */
	'OrganizationName': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationName',
	/** identifier allocated to a particular organizational sub-unit */
	'OrganizationPartIdentifier': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationPartIdentifier',
	/** any department, service, and other entity within a larger organization that only has full recognition within the context of that organization, but requires identification for some purpose */
	'OrganizationalSubUnit': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationalSubUnit',
	/** identifies the organization acting in the role of having members in an organizational membership situation */
	'hasMembership': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasMembership',
	/** indicates the party that is the member in an organizational membership situation */
	'hasOrganizationMember': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasOrganizationMember',
	/** relates an organization to a part of that organization */
	'hasSubUnit': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasSubUnit',
	/** indicates the context of membership in which the party plays the role of having members */
	'isMembershipPartyIn': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isMembershipPartyIn',
	/** indicates the context of membership in which some party is an organization member */
	'isOrganizationMember': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isOrganizationMember',
	/** relates a part of an organization to the larger entity */
	'isSubUnitOf': 'https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isSubUnitOf',
}

export const fibo_organization = {
	/** role of a group or organization that has members that are people or other organizations */
	'MemberBearingOrganization': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/MemberBearingOrganization'),
	/** situation, corresponding to an n-ary relation, in which some group or organization has at least one member (person or organization) for some period of time */
	'Membership': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Membership'),
	/** collection of one or more people, or groups of people formed together into a community or other social, commercial or political structure to act, or that is designated to act, towards some purpose, such as to meet a need or pursue collective goals on a continuing basis */
	'Organization': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Organization'),
	/** identification scheme dedicated to the unique identification of organizations */
	'OrganizationIdentificationScheme': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationIdentificationScheme'),
	/** identifier assigned to an organization within an organization identification scheme, and unique within that scheme */
	'OrganizationIdentifier': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationIdentifier'),
	/** party (person or organization) that has a membership role with respect to some organization */
	'OrganizationMember': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationMember'),
	/** designation by which some organization is known in some context */
	'OrganizationName': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationName'),
	/** identifier allocated to a particular organizational sub-unit */
	'OrganizationPartIdentifier': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationPartIdentifier'),
	/** any department, service, and other entity within a larger organization that only has full recognition within the context of that organization, but requires identification for some purpose */
	'OrganizationalSubUnit': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationalSubUnit'),
	/** identifies the organization acting in the role of having members in an organizational membership situation */
	'hasMembership': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasMembership'),
	/** indicates the party that is the member in an organizational membership situation */
	'hasOrganizationMember': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasOrganizationMember'),
	/** relates an organization to a part of that organization */
	'hasSubUnit': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasSubUnit'),
	/** indicates the context of membership in which the party plays the role of having members */
	'isMembershipPartyIn': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isMembershipPartyIn'),
	/** indicates the context of membership in which some party is an organization member */
	'isOrganizationMember': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isOrganizationMember'),
	/** relates a part of an organization to the larger entity */
	'isSubUnitOf': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isSubUnitOf'),
}