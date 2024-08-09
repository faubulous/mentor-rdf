import * as n3 from "n3";

/** Namespace URI of the PROV-O vocabulary. */
export const _PROV-O = 'http://www.w3.org/ns/prov#';

export const PROV-O = {
	/**  */
	'comment': 'http://www.w3.org/2000/01/rdf-schema#comment',
	'isDefinedBy': 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy',
	/**  */
	'label': 'http://www.w3.org/2000/01/rdf-schema#label',
	/**  */
	'seeAlso': 'http://www.w3.org/2000/01/rdf-schema#seeAlso',
	'Thing': 'http://www.w3.org/2002/07/owl#Thing',
	'versionInfo': 'http://www.w3.org/2002/07/owl#versionInfo',
	'Activity': 'http://www.w3.org/ns/prov#Activity',
	/** ActivityInfluence provides additional descriptions of an Activity's binary influence upon any other kind of resource. Instances of ActivityInfluence use the prov:activity property to cite the influencing Activity. */
	'ActivityInfluence': 'http://www.w3.org/ns/prov#ActivityInfluence',
	'Agent': 'http://www.w3.org/ns/prov#Agent',
	/** AgentInfluence provides additional descriptions of an Agent's binary influence upon any other kind of resource. Instances of AgentInfluence use the prov:agent property to cite the influencing Agent. */
	'AgentInfluence': 'http://www.w3.org/ns/prov#AgentInfluence',
	/** An instance of prov:Association provides additional descriptions about the binary prov:wasAssociatedWith relation from an prov:Activity to some prov:Agent that had some responsiblity for it. For example, :baking prov:wasAssociatedWith :baker; prov:qualifiedAssociation [ a prov:Association; prov:agent :baker; :foo :bar ]. */
	'Association': 'http://www.w3.org/ns/prov#Association',
	/** An instance of prov:Attribution provides additional descriptions about the binary prov:wasAttributedTo relation from an prov:Entity to some prov:Agent that had some responsible for it. For example, :cake prov:wasAttributedTo :baker; prov:qualifiedAttribution [ a prov:Attribution; prov:entity :baker; :foo :bar ]. */
	'Attribution': 'http://www.w3.org/ns/prov#Attribution',
	/** Note that there are kinds of bundles (e.g. handwritten letters, audio recordings, etc.) that are not expressed in PROV-O, but can be still be described by PROV-O. */
	'Bundle': 'http://www.w3.org/ns/prov#Bundle',
	'Collection': 'http://www.w3.org/ns/prov#Collection',
	/** An instance of prov:Communication provides additional descriptions about the binary prov:wasInformedBy relation from an informed prov:Activity to the prov:Activity that informed it. For example, :you_jumping_off_bridge prov:wasInformedBy :everyone_else_jumping_off_bridge; prov:qualifiedCommunication [ a prov:Communication; prov:activity :everyone_else_jumping_off_bridge; :foo :bar ]. */
	'Communication': 'http://www.w3.org/ns/prov#Communication',
	/** An instance of prov:Delegation provides additional descriptions about the binary prov:actedOnBehalfOf relation from a performing prov:Agent to some prov:Agent for whom it was performed. For example, :mixing prov:wasAssociatedWith :toddler . :toddler prov:actedOnBehalfOf :mother; prov:qualifiedDelegation [ a prov:Delegation; prov:entity :mother; :foo :bar ]. */
	'Delegation': 'http://www.w3.org/ns/prov#Delegation',
	/** An instance of prov:Derivation provides additional descriptions about the binary prov:wasDerivedFrom relation from some derived prov:Entity to another prov:Entity from which it was derived. For example, :chewed_bubble_gum prov:wasDerivedFrom :unwrapped_bubble_gum; prov:qualifiedDerivation [ a prov:Derivation; prov:entity :unwrapped_bubble_gum; :foo :bar ]. */
	'Derivation': 'http://www.w3.org/ns/prov#Derivation',
	'EmptyCollection': 'http://www.w3.org/ns/prov#EmptyCollection',
	/** An instance of prov:End provides additional descriptions about the binary prov:wasEndedBy relation from some ended prov:Activity to an prov:Entity that ended it. For example, :ball_game prov:wasEndedBy :buzzer; prov:qualifiedEnd [ a prov:End; prov:entity :buzzer; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ]. */
	'End': 'http://www.w3.org/ns/prov#End',
	'Entity': 'http://www.w3.org/ns/prov#Entity',
	/** EntityInfluence provides additional descriptions of an Entity's binary influence upon any other kind of resource. Instances of EntityInfluence use the prov:entity property to cite the influencing Entity. */
	'EntityInfluence': 'http://www.w3.org/ns/prov#EntityInfluence',
	/** An instance of prov:Generation provides additional descriptions about the binary prov:wasGeneratedBy relation from a generated prov:Entity to the prov:Activity that generated it. For example, :cake prov:wasGeneratedBy :baking; prov:qualifiedGeneration [ a prov:Generation; prov:activity :baking; :foo :bar ]. */
	'Generation': 'http://www.w3.org/ns/prov#Generation',
	/** An instance of prov:Influence provides additional descriptions about the binary prov:wasInfluencedBy relation from some influenced Activity, Entity, or Agent to the influencing Activity, Entity, or Agent. For example, :stomach_ache prov:wasInfluencedBy :spoon; prov:qualifiedInfluence [ a prov:Influence; prov:entity :spoon; :foo :bar ] . Because prov:Influence is a broad relation, the more specific relations (Communication, Delegation, End, etc.) should be used when applicable. */
	'Influence': 'http://www.w3.org/ns/prov#Influence',
	/** An instantaneous event, or event for short, happens in the world and marks a change in the world, in its activities and in its entities. The term 'event' is commonly used in process algebra with a similar meaning. Events represent communications or interactions; they are assumed to be atomic and instantaneous. */
	'InstantaneousEvent': 'http://www.w3.org/ns/prov#InstantaneousEvent',
	/** An instance of prov:Invalidation provides additional descriptions about the binary prov:wasInvalidatedBy relation from an invalidated prov:Entity to the prov:Activity that invalidated it. For example, :uncracked_egg prov:wasInvalidatedBy :baking; prov:qualifiedInvalidation [ a prov:Invalidation; prov:activity :baking; :foo :bar ]. */
	'Invalidation': 'http://www.w3.org/ns/prov#Invalidation',
	'Location': 'http://www.w3.org/ns/prov#Location',
	'Organization': 'http://www.w3.org/ns/prov#Organization',
	'Person': 'http://www.w3.org/ns/prov#Person',
	/** There exist no prescriptive requirement on the nature of plans, their representation, the actions or steps they consist of, or their intended goals. Since plans may evolve over time, it may become necessary to track their provenance, so plans themselves are entities. Representing the plan explicitly in the provenance can be useful for various tasks: for example, to validate the execution as represented in the provenance record, to manage expectation failures, or to provide explanations. */
	'Plan': 'http://www.w3.org/ns/prov#Plan',
	/** An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . */
	'PrimarySource': 'http://www.w3.org/ns/prov#PrimarySource',
	/** An instance of prov:Quotation provides additional descriptions about the binary prov:wasQuotedFrom relation from some taken prov:Entity from an earlier, larger prov:Entity. For example, :here_is_looking_at_you_kid prov:wasQuotedFrom :casablanca_script; prov:qualifiedQuotation [ a prov:Quotation; prov:entity :casablanca_script; :foo :bar ]. */
	'Quotation': 'http://www.w3.org/ns/prov#Quotation',
	/** An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. */
	'Revision': 'http://www.w3.org/ns/prov#Revision',
	'Role': 'http://www.w3.org/ns/prov#Role',
	'SoftwareAgent': 'http://www.w3.org/ns/prov#SoftwareAgent',
	/** An instance of prov:Start provides additional descriptions about the binary prov:wasStartedBy relation from some started prov:Activity to an prov:Entity that started it. For example, :foot_race prov:wasStartedBy :bang; prov:qualifiedStart [ a prov:Start; prov:entity :bang; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ] . */
	'Start': 'http://www.w3.org/ns/prov#Start',
	/** An instance of prov:Usage provides additional descriptions about the binary prov:used relation from some prov:Activity to an prov:Entity that it used. For example, :keynote prov:used :podium; prov:qualifiedUsage [ a prov:Usage; prov:entity :podium; :foo :bar ]. */
	'Usage': 'http://www.w3.org/ns/prov#Usage',
	/** An object property to express the accountability of an agent towards another agent. The subordinate agent acted on behalf of the responsible agent in an actual activity.  */
	'actedOnBehalfOf': 'http://www.w3.org/ns/prov#actedOnBehalfOf',
	'activity': 'http://www.w3.org/ns/prov#activity',
	'agent': 'http://www.w3.org/ns/prov#agent',
	'alternateOf': 'http://www.w3.org/ns/prov#alternateOf',
	'aq': 'http://www.w3.org/ns/prov#aq',
	/** The Location of any resource. */
	'atLocation': 'http://www.w3.org/ns/prov#atLocation',
	/** The time at which an InstantaneousEvent occurred, in the form of xsd:dateTime. */
	'atTime': 'http://www.w3.org/ns/prov#atTime',
	/** Classify prov-o terms into three categories, including 'starting-point', 'qualifed', and 'extended'. This classification is used by the prov-o html document to gently introduce prov-o terms to its users.  */
	'category': 'http://www.w3.org/ns/prov#category',
	/** Classify prov-o terms into six components according to prov-dm, including 'agents-responsibility', 'alternate', 'annotations', 'collections', 'derivations', and 'entities-activities'. This classification is used so that readers of prov-o specification can find its correspondence with the prov-dm specification. */
	'component': 'http://www.w3.org/ns/prov#component',
	/** A reference to the principal section of the PROV-CONSTRAINTS document that describes this concept. */
	'constraints': 'http://www.w3.org/ns/prov#constraints',
	/** A definition quoted from PROV-DM or PROV-CONSTRAINTS that describes the concept expressed with this OWL term. */
	'definition': 'http://www.w3.org/ns/prov#definition',
	/** A reference to the principal section of the PROV-DM document that describes this concept. */
	'dm': 'http://www.w3.org/ns/prov#dm',
	/** A note by the OWL development team about how this term expresses the PROV-DM concept, or how it should be used in context of semantic web or linked data. */
	'editorialNote': 'http://www.w3.org/ns/prov#editorialNote',
	/** When the prov-o term does not have a definition drawn from prov-dm, and the prov-o editor provides one. */
	'editorsDefinition': 'http://www.w3.org/ns/prov#editorsDefinition',
	/** The time at which an activity ended. See also prov:startedAtTime. */
	'endedAtTime': 'http://www.w3.org/ns/prov#endedAtTime',
	'entity': 'http://www.w3.org/ns/prov#entity',
	'generated': 'http://www.w3.org/ns/prov#generated',
	/** The time at which an entity was completely created and is available for use. */
	'generatedAtTime': 'http://www.w3.org/ns/prov#generatedAtTime',
	/** The _optional_ Activity of an Influence, which used, generated, invalidated, or was the responsibility of some Entity. This property is _not_ used by ActivityInfluence (use prov:activity instead). */
	'hadActivity': 'http://www.w3.org/ns/prov#hadActivity',
	/** The _optional_ Generation involved in an Entity's Derivation. */
	'hadGeneration': 'http://www.w3.org/ns/prov#hadGeneration',
	'hadMember': 'http://www.w3.org/ns/prov#hadMember',
	/** The _optional_ Plan adopted by an Agent in Association with some Activity. Plan specifications are out of the scope of this specification. */
	'hadPlan': 'http://www.w3.org/ns/prov#hadPlan',
	'hadPrimarySource': 'http://www.w3.org/ns/prov#hadPrimarySource',
	/** The _optional_ Role that an Entity assumed in the context of an Activity. For example, :baking prov:used :spoon; prov:qualified [ a prov:Usage; prov:entity :spoon; prov:hadRole roles:mixing_implement ]. */
	'hadRole': 'http://www.w3.org/ns/prov#hadRole',
	/** The _optional_ Usage involved in an Entity's Derivation. */
	'hadUsage': 'http://www.w3.org/ns/prov#hadUsage',
	'influenced': 'http://www.w3.org/ns/prov#influenced',
	/** Subproperties of prov:influencer are used to cite the object of an unqualified PROV-O triple whose predicate is a subproperty of prov:wasInfluencedBy (e.g. prov:used, prov:wasGeneratedBy). prov:influencer is used much like rdf:object is used. */
	'influencer': 'http://www.w3.org/ns/prov#influencer',
	'invalidated': 'http://www.w3.org/ns/prov#invalidated',
	/** The time at which an entity was invalidated (i.e., no longer usable). */
	'invalidatedAtTime': 'http://www.w3.org/ns/prov#invalidatedAtTime',
	/** PROV-O does not define all property inverses. The directionalities defined in PROV-O should be given preference over those not defined. However, if users wish to name the inverse of a PROV-O property, the local name given by prov:inverse should be used. */
	'inverse': 'http://www.w3.org/ns/prov#inverse',
	/** A reference to the principal section of the PROV-DM document that describes this concept. */
	'n': 'http://www.w3.org/ns/prov#n',
	/** The position that this OWL term should be listed within documentation. The scope of the documentation (e.g., among all terms, among terms within a prov:category, among properties applying to a particular class, etc.) is unspecified. */
	'order': 'http://www.w3.org/ns/prov#order',
	/** If this Activity prov:wasAssociatedWith Agent :ag, then it can qualify the Association using prov:qualifiedAssociation [ a prov:Association;  prov:agent :ag; :foo :bar ]. */
	'qualifiedAssociation': 'http://www.w3.org/ns/prov#qualifiedAssociation',
	/** If this Entity prov:wasAttributedTo Agent :ag, then it can qualify how it was influenced using prov:qualifiedAttribution [ a prov:Attribution;  prov:agent :ag; :foo :bar ]. */
	'qualifiedAttribution': 'http://www.w3.org/ns/prov#qualifiedAttribution',
	/** If this Activity prov:wasInformedBy Activity :a, then it can qualify how it was influenced using prov:qualifiedCommunication [ a prov:Communication;  prov:activity :a; :foo :bar ]. */
	'qualifiedCommunication': 'http://www.w3.org/ns/prov#qualifiedCommunication',
	/** If this Agent prov:actedOnBehalfOf Agent :ag, then it can qualify how with prov:qualifiedResponsibility [ a prov:Responsibility;  prov:agent :ag; :foo :bar ]. */
	'qualifiedDelegation': 'http://www.w3.org/ns/prov#qualifiedDelegation',
	/** If this Entity prov:wasDerivedFrom Entity :e, then it can qualify how it was derived using prov:qualifiedDerivation [ a prov:Derivation;  prov:entity :e; :foo :bar ]. */
	'qualifiedDerivation': 'http://www.w3.org/ns/prov#qualifiedDerivation',
	/** If this Activity prov:wasEndedBy Entity :e1, then it can qualify how it was ended using prov:qualifiedEnd [ a prov:End;  prov:entity :e1; :foo :bar ]. */
	'qualifiedEnd': 'http://www.w3.org/ns/prov#qualifiedEnd',
	/** This annotation property links a subproperty of prov:wasInfluencedBy with the subclass of prov:Influence and the qualifying property that are used to qualify it. 

Example annotation:

    prov:wasGeneratedBy prov:qualifiedForm prov:qualifiedGeneration, prov:Generation .

Then this unqualified assertion:

    :entity1 prov:wasGeneratedBy :activity1 .

can be qualified by adding:

   :entity1 prov:qualifiedGeneration :entity1Gen .
   :entity1Gen 
       a prov:Generation, prov:Influence;
       prov:activity :activity1;
       :customValue 1337 .

Note how the value of the unqualified influence (prov:wasGeneratedBy :activity1) is mirrored as the value of the prov:activity (or prov:entity, or prov:agent) property on the influence class. */
	'qualifiedForm': 'http://www.w3.org/ns/prov#qualifiedForm',
	/** If this Activity prov:generated Entity :e, then it can qualify how it performed the Generation using prov:qualifiedGeneration [ a prov:Generation;  prov:entity :e; :foo :bar ]. */
	'qualifiedGeneration': 'http://www.w3.org/ns/prov#qualifiedGeneration',
	/** Because prov:qualifiedInfluence is a broad relation, the more specific relations (qualifiedCommunication, qualifiedDelegation, qualifiedEnd, etc.) should be used when applicable. */
	'qualifiedInfluence': 'http://www.w3.org/ns/prov#qualifiedInfluence',
	/** If this Entity prov:wasInvalidatedBy Activity :a, then it can qualify how it was invalidated using prov:qualifiedInvalidation [ a prov:Invalidation;  prov:activity :a; :foo :bar ]. */
	'qualifiedInvalidation': 'http://www.w3.org/ns/prov#qualifiedInvalidation',
	/** If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. */
	'qualifiedPrimarySource': 'http://www.w3.org/ns/prov#qualifiedPrimarySource',
	/** If this Entity prov:wasQuotedFrom Entity :e, then it can qualify how using prov:qualifiedQuotation [ a prov:Quotation;  prov:entity :e; :foo :bar ]. */
	'qualifiedQuotation': 'http://www.w3.org/ns/prov#qualifiedQuotation',
	/** If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. */
	'qualifiedRevision': 'http://www.w3.org/ns/prov#qualifiedRevision',
	/** If this Activity prov:wasStartedBy Entity :e1, then it can qualify how it was started using prov:qualifiedStart [ a prov:Start;  prov:entity :e1; :foo :bar ]. */
	'qualifiedStart': 'http://www.w3.org/ns/prov#qualifiedStart',
	/** If this Activity prov:used Entity :e, then it can qualify how it used it using prov:qualifiedUsage [ a prov:Usage; prov:entity :e; :foo :bar ]. */
	'qualifiedUsage': 'http://www.w3.org/ns/prov#qualifiedUsage',
	'sharesDefinitionWith': 'http://www.w3.org/ns/prov#sharesDefinitionWith',
	'specializationOf': 'http://www.w3.org/ns/prov#specializationOf',
	/** The time at which an activity started. See also prov:endedAtTime. */
	'startedAtTime': 'http://www.w3.org/ns/prov#startedAtTime',
	'todo': 'http://www.w3.org/ns/prov#todo',
	/** Classes and properties used to qualify relationships are annotated with prov:unqualifiedForm to indicate the property used to assert an unqualified provenance relation. */
	'unqualifiedForm': 'http://www.w3.org/ns/prov#unqualifiedForm',
	/** A prov:Entity that was used by this prov:Activity. For example, :baking prov:used :spoon, :egg, :oven . */
	'used': 'http://www.w3.org/ns/prov#used',
	'value': 'http://www.w3.org/ns/prov#value',
	/** An prov:Agent that had some (unspecified) responsibility for the occurrence of this prov:Activity. */
	'wasAssociatedWith': 'http://www.w3.org/ns/prov#wasAssociatedWith',
	/** Attribution is the ascribing of an entity to an agent. */
	'wasAttributedTo': 'http://www.w3.org/ns/prov#wasAttributedTo',
	/** The more specific subproperties of prov:wasDerivedFrom (i.e., prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource) should be used when applicable. */
	'wasDerivedFrom': 'http://www.w3.org/ns/prov#wasDerivedFrom',
	/** End is when an activity is deemed to have ended. An end may refer to an entity, known as trigger, that terminated the activity. */
	'wasEndedBy': 'http://www.w3.org/ns/prov#wasEndedBy',
	'wasGeneratedBy': 'http://www.w3.org/ns/prov#wasGeneratedBy',
	/** Because prov:wasInfluencedBy is a broad relation, its more specific subproperties (e.g. prov:wasInformedBy, prov:actedOnBehalfOf, prov:wasEndedBy, etc.) should be used when applicable. */
	'wasInfluencedBy': 'http://www.w3.org/ns/prov#wasInfluencedBy',
	/** An activity a2 is dependent on or informed by another activity a1, by way of some unspecified entity that is generated by a1 and used by a2. */
	'wasInformedBy': 'http://www.w3.org/ns/prov#wasInformedBy',
	'wasInvalidatedBy': 'http://www.w3.org/ns/prov#wasInvalidatedBy',
	/** An entity is derived from an original entity by copying, or 'quoting', some or all of it. */
	'wasQuotedFrom': 'http://www.w3.org/ns/prov#wasQuotedFrom',
	/** A revision is a derivation that revises an entity into a revised version. */
	'wasRevisionOf': 'http://www.w3.org/ns/prov#wasRevisionOf',
	/** Start is when an activity is deemed to have started. A start may refer to an entity, known as trigger, that initiated the activity. */
	'wasStartedBy': 'http://www.w3.org/ns/prov#wasStartedBy',
}

/** Namespace URI of the prov-o vocabulary. */
export const _prov-o = new n3.NamedNode('http://www.w3.org/ns/prov#');

export const prov-o = {
	/**  */
	'comment': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#comment'),
	'isDefinedBy': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#isDefinedBy'),
	/**  */
	'label': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#label'),
	/**  */
	'seeAlso': new n3.NamedNode('http://www.w3.org/2000/01/rdf-schema#seeAlso'),
	'Thing': new n3.NamedNode('http://www.w3.org/2002/07/owl#Thing'),
	'versionInfo': new n3.NamedNode('http://www.w3.org/2002/07/owl#versionInfo'),
	'Activity': new n3.NamedNode('http://www.w3.org/ns/prov#Activity'),
	/** ActivityInfluence provides additional descriptions of an Activity's binary influence upon any other kind of resource. Instances of ActivityInfluence use the prov:activity property to cite the influencing Activity. */
	'ActivityInfluence': new n3.NamedNode('http://www.w3.org/ns/prov#ActivityInfluence'),
	'Agent': new n3.NamedNode('http://www.w3.org/ns/prov#Agent'),
	/** AgentInfluence provides additional descriptions of an Agent's binary influence upon any other kind of resource. Instances of AgentInfluence use the prov:agent property to cite the influencing Agent. */
	'AgentInfluence': new n3.NamedNode('http://www.w3.org/ns/prov#AgentInfluence'),
	/** An instance of prov:Association provides additional descriptions about the binary prov:wasAssociatedWith relation from an prov:Activity to some prov:Agent that had some responsiblity for it. For example, :baking prov:wasAssociatedWith :baker; prov:qualifiedAssociation [ a prov:Association; prov:agent :baker; :foo :bar ]. */
	'Association': new n3.NamedNode('http://www.w3.org/ns/prov#Association'),
	/** An instance of prov:Attribution provides additional descriptions about the binary prov:wasAttributedTo relation from an prov:Entity to some prov:Agent that had some responsible for it. For example, :cake prov:wasAttributedTo :baker; prov:qualifiedAttribution [ a prov:Attribution; prov:entity :baker; :foo :bar ]. */
	'Attribution': new n3.NamedNode('http://www.w3.org/ns/prov#Attribution'),
	/** Note that there are kinds of bundles (e.g. handwritten letters, audio recordings, etc.) that are not expressed in PROV-O, but can be still be described by PROV-O. */
	'Bundle': new n3.NamedNode('http://www.w3.org/ns/prov#Bundle'),
	'Collection': new n3.NamedNode('http://www.w3.org/ns/prov#Collection'),
	/** An instance of prov:Communication provides additional descriptions about the binary prov:wasInformedBy relation from an informed prov:Activity to the prov:Activity that informed it. For example, :you_jumping_off_bridge prov:wasInformedBy :everyone_else_jumping_off_bridge; prov:qualifiedCommunication [ a prov:Communication; prov:activity :everyone_else_jumping_off_bridge; :foo :bar ]. */
	'Communication': new n3.NamedNode('http://www.w3.org/ns/prov#Communication'),
	/** An instance of prov:Delegation provides additional descriptions about the binary prov:actedOnBehalfOf relation from a performing prov:Agent to some prov:Agent for whom it was performed. For example, :mixing prov:wasAssociatedWith :toddler . :toddler prov:actedOnBehalfOf :mother; prov:qualifiedDelegation [ a prov:Delegation; prov:entity :mother; :foo :bar ]. */
	'Delegation': new n3.NamedNode('http://www.w3.org/ns/prov#Delegation'),
	/** An instance of prov:Derivation provides additional descriptions about the binary prov:wasDerivedFrom relation from some derived prov:Entity to another prov:Entity from which it was derived. For example, :chewed_bubble_gum prov:wasDerivedFrom :unwrapped_bubble_gum; prov:qualifiedDerivation [ a prov:Derivation; prov:entity :unwrapped_bubble_gum; :foo :bar ]. */
	'Derivation': new n3.NamedNode('http://www.w3.org/ns/prov#Derivation'),
	'EmptyCollection': new n3.NamedNode('http://www.w3.org/ns/prov#EmptyCollection'),
	/** An instance of prov:End provides additional descriptions about the binary prov:wasEndedBy relation from some ended prov:Activity to an prov:Entity that ended it. For example, :ball_game prov:wasEndedBy :buzzer; prov:qualifiedEnd [ a prov:End; prov:entity :buzzer; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ]. */
	'End': new n3.NamedNode('http://www.w3.org/ns/prov#End'),
	'Entity': new n3.NamedNode('http://www.w3.org/ns/prov#Entity'),
	/** EntityInfluence provides additional descriptions of an Entity's binary influence upon any other kind of resource. Instances of EntityInfluence use the prov:entity property to cite the influencing Entity. */
	'EntityInfluence': new n3.NamedNode('http://www.w3.org/ns/prov#EntityInfluence'),
	/** An instance of prov:Generation provides additional descriptions about the binary prov:wasGeneratedBy relation from a generated prov:Entity to the prov:Activity that generated it. For example, :cake prov:wasGeneratedBy :baking; prov:qualifiedGeneration [ a prov:Generation; prov:activity :baking; :foo :bar ]. */
	'Generation': new n3.NamedNode('http://www.w3.org/ns/prov#Generation'),
	/** An instance of prov:Influence provides additional descriptions about the binary prov:wasInfluencedBy relation from some influenced Activity, Entity, or Agent to the influencing Activity, Entity, or Agent. For example, :stomach_ache prov:wasInfluencedBy :spoon; prov:qualifiedInfluence [ a prov:Influence; prov:entity :spoon; :foo :bar ] . Because prov:Influence is a broad relation, the more specific relations (Communication, Delegation, End, etc.) should be used when applicable. */
	'Influence': new n3.NamedNode('http://www.w3.org/ns/prov#Influence'),
	/** An instantaneous event, or event for short, happens in the world and marks a change in the world, in its activities and in its entities. The term 'event' is commonly used in process algebra with a similar meaning. Events represent communications or interactions; they are assumed to be atomic and instantaneous. */
	'InstantaneousEvent': new n3.NamedNode('http://www.w3.org/ns/prov#InstantaneousEvent'),
	/** An instance of prov:Invalidation provides additional descriptions about the binary prov:wasInvalidatedBy relation from an invalidated prov:Entity to the prov:Activity that invalidated it. For example, :uncracked_egg prov:wasInvalidatedBy :baking; prov:qualifiedInvalidation [ a prov:Invalidation; prov:activity :baking; :foo :bar ]. */
	'Invalidation': new n3.NamedNode('http://www.w3.org/ns/prov#Invalidation'),
	'Location': new n3.NamedNode('http://www.w3.org/ns/prov#Location'),
	'Organization': new n3.NamedNode('http://www.w3.org/ns/prov#Organization'),
	'Person': new n3.NamedNode('http://www.w3.org/ns/prov#Person'),
	/** There exist no prescriptive requirement on the nature of plans, their representation, the actions or steps they consist of, or their intended goals. Since plans may evolve over time, it may become necessary to track their provenance, so plans themselves are entities. Representing the plan explicitly in the provenance can be useful for various tasks: for example, to validate the execution as represented in the provenance record, to manage expectation failures, or to provide explanations. */
	'Plan': new n3.NamedNode('http://www.w3.org/ns/prov#Plan'),
	/** An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . */
	'PrimarySource': new n3.NamedNode('http://www.w3.org/ns/prov#PrimarySource'),
	/** An instance of prov:Quotation provides additional descriptions about the binary prov:wasQuotedFrom relation from some taken prov:Entity from an earlier, larger prov:Entity. For example, :here_is_looking_at_you_kid prov:wasQuotedFrom :casablanca_script; prov:qualifiedQuotation [ a prov:Quotation; prov:entity :casablanca_script; :foo :bar ]. */
	'Quotation': new n3.NamedNode('http://www.w3.org/ns/prov#Quotation'),
	/** An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. */
	'Revision': new n3.NamedNode('http://www.w3.org/ns/prov#Revision'),
	'Role': new n3.NamedNode('http://www.w3.org/ns/prov#Role'),
	'SoftwareAgent': new n3.NamedNode('http://www.w3.org/ns/prov#SoftwareAgent'),
	/** An instance of prov:Start provides additional descriptions about the binary prov:wasStartedBy relation from some started prov:Activity to an prov:Entity that started it. For example, :foot_race prov:wasStartedBy :bang; prov:qualifiedStart [ a prov:Start; prov:entity :bang; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ] . */
	'Start': new n3.NamedNode('http://www.w3.org/ns/prov#Start'),
	/** An instance of prov:Usage provides additional descriptions about the binary prov:used relation from some prov:Activity to an prov:Entity that it used. For example, :keynote prov:used :podium; prov:qualifiedUsage [ a prov:Usage; prov:entity :podium; :foo :bar ]. */
	'Usage': new n3.NamedNode('http://www.w3.org/ns/prov#Usage'),
	/** An object property to express the accountability of an agent towards another agent. The subordinate agent acted on behalf of the responsible agent in an actual activity.  */
	'actedOnBehalfOf': new n3.NamedNode('http://www.w3.org/ns/prov#actedOnBehalfOf'),
	'activity': new n3.NamedNode('http://www.w3.org/ns/prov#activity'),
	'agent': new n3.NamedNode('http://www.w3.org/ns/prov#agent'),
	'alternateOf': new n3.NamedNode('http://www.w3.org/ns/prov#alternateOf'),
	'aq': new n3.NamedNode('http://www.w3.org/ns/prov#aq'),
	/** The Location of any resource. */
	'atLocation': new n3.NamedNode('http://www.w3.org/ns/prov#atLocation'),
	/** The time at which an InstantaneousEvent occurred, in the form of xsd:dateTime. */
	'atTime': new n3.NamedNode('http://www.w3.org/ns/prov#atTime'),
	/** Classify prov-o terms into three categories, including 'starting-point', 'qualifed', and 'extended'. This classification is used by the prov-o html document to gently introduce prov-o terms to its users.  */
	'category': new n3.NamedNode('http://www.w3.org/ns/prov#category'),
	/** Classify prov-o terms into six components according to prov-dm, including 'agents-responsibility', 'alternate', 'annotations', 'collections', 'derivations', and 'entities-activities'. This classification is used so that readers of prov-o specification can find its correspondence with the prov-dm specification. */
	'component': new n3.NamedNode('http://www.w3.org/ns/prov#component'),
	/** A reference to the principal section of the PROV-CONSTRAINTS document that describes this concept. */
	'constraints': new n3.NamedNode('http://www.w3.org/ns/prov#constraints'),
	/** A definition quoted from PROV-DM or PROV-CONSTRAINTS that describes the concept expressed with this OWL term. */
	'definition': new n3.NamedNode('http://www.w3.org/ns/prov#definition'),
	/** A reference to the principal section of the PROV-DM document that describes this concept. */
	'dm': new n3.NamedNode('http://www.w3.org/ns/prov#dm'),
	/** A note by the OWL development team about how this term expresses the PROV-DM concept, or how it should be used in context of semantic web or linked data. */
	'editorialNote': new n3.NamedNode('http://www.w3.org/ns/prov#editorialNote'),
	/** When the prov-o term does not have a definition drawn from prov-dm, and the prov-o editor provides one. */
	'editorsDefinition': new n3.NamedNode('http://www.w3.org/ns/prov#editorsDefinition'),
	/** The time at which an activity ended. See also prov:startedAtTime. */
	'endedAtTime': new n3.NamedNode('http://www.w3.org/ns/prov#endedAtTime'),
	'entity': new n3.NamedNode('http://www.w3.org/ns/prov#entity'),
	'generated': new n3.NamedNode('http://www.w3.org/ns/prov#generated'),
	/** The time at which an entity was completely created and is available for use. */
	'generatedAtTime': new n3.NamedNode('http://www.w3.org/ns/prov#generatedAtTime'),
	/** The _optional_ Activity of an Influence, which used, generated, invalidated, or was the responsibility of some Entity. This property is _not_ used by ActivityInfluence (use prov:activity instead). */
	'hadActivity': new n3.NamedNode('http://www.w3.org/ns/prov#hadActivity'),
	/** The _optional_ Generation involved in an Entity's Derivation. */
	'hadGeneration': new n3.NamedNode('http://www.w3.org/ns/prov#hadGeneration'),
	'hadMember': new n3.NamedNode('http://www.w3.org/ns/prov#hadMember'),
	/** The _optional_ Plan adopted by an Agent in Association with some Activity. Plan specifications are out of the scope of this specification. */
	'hadPlan': new n3.NamedNode('http://www.w3.org/ns/prov#hadPlan'),
	'hadPrimarySource': new n3.NamedNode('http://www.w3.org/ns/prov#hadPrimarySource'),
	/** The _optional_ Role that an Entity assumed in the context of an Activity. For example, :baking prov:used :spoon; prov:qualified [ a prov:Usage; prov:entity :spoon; prov:hadRole roles:mixing_implement ]. */
	'hadRole': new n3.NamedNode('http://www.w3.org/ns/prov#hadRole'),
	/** The _optional_ Usage involved in an Entity's Derivation. */
	'hadUsage': new n3.NamedNode('http://www.w3.org/ns/prov#hadUsage'),
	'influenced': new n3.NamedNode('http://www.w3.org/ns/prov#influenced'),
	/** Subproperties of prov:influencer are used to cite the object of an unqualified PROV-O triple whose predicate is a subproperty of prov:wasInfluencedBy (e.g. prov:used, prov:wasGeneratedBy). prov:influencer is used much like rdf:object is used. */
	'influencer': new n3.NamedNode('http://www.w3.org/ns/prov#influencer'),
	'invalidated': new n3.NamedNode('http://www.w3.org/ns/prov#invalidated'),
	/** The time at which an entity was invalidated (i.e., no longer usable). */
	'invalidatedAtTime': new n3.NamedNode('http://www.w3.org/ns/prov#invalidatedAtTime'),
	/** PROV-O does not define all property inverses. The directionalities defined in PROV-O should be given preference over those not defined. However, if users wish to name the inverse of a PROV-O property, the local name given by prov:inverse should be used. */
	'inverse': new n3.NamedNode('http://www.w3.org/ns/prov#inverse'),
	/** A reference to the principal section of the PROV-DM document that describes this concept. */
	'n': new n3.NamedNode('http://www.w3.org/ns/prov#n'),
	/** The position that this OWL term should be listed within documentation. The scope of the documentation (e.g., among all terms, among terms within a prov:category, among properties applying to a particular class, etc.) is unspecified. */
	'order': new n3.NamedNode('http://www.w3.org/ns/prov#order'),
	/** If this Activity prov:wasAssociatedWith Agent :ag, then it can qualify the Association using prov:qualifiedAssociation [ a prov:Association;  prov:agent :ag; :foo :bar ]. */
	'qualifiedAssociation': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedAssociation'),
	/** If this Entity prov:wasAttributedTo Agent :ag, then it can qualify how it was influenced using prov:qualifiedAttribution [ a prov:Attribution;  prov:agent :ag; :foo :bar ]. */
	'qualifiedAttribution': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedAttribution'),
	/** If this Activity prov:wasInformedBy Activity :a, then it can qualify how it was influenced using prov:qualifiedCommunication [ a prov:Communication;  prov:activity :a; :foo :bar ]. */
	'qualifiedCommunication': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedCommunication'),
	/** If this Agent prov:actedOnBehalfOf Agent :ag, then it can qualify how with prov:qualifiedResponsibility [ a prov:Responsibility;  prov:agent :ag; :foo :bar ]. */
	'qualifiedDelegation': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedDelegation'),
	/** If this Entity prov:wasDerivedFrom Entity :e, then it can qualify how it was derived using prov:qualifiedDerivation [ a prov:Derivation;  prov:entity :e; :foo :bar ]. */
	'qualifiedDerivation': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedDerivation'),
	/** If this Activity prov:wasEndedBy Entity :e1, then it can qualify how it was ended using prov:qualifiedEnd [ a prov:End;  prov:entity :e1; :foo :bar ]. */
	'qualifiedEnd': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedEnd'),
	/** This annotation property links a subproperty of prov:wasInfluencedBy with the subclass of prov:Influence and the qualifying property that are used to qualify it. 

Example annotation:

    prov:wasGeneratedBy prov:qualifiedForm prov:qualifiedGeneration, prov:Generation .

Then this unqualified assertion:

    :entity1 prov:wasGeneratedBy :activity1 .

can be qualified by adding:

   :entity1 prov:qualifiedGeneration :entity1Gen .
   :entity1Gen 
       a prov:Generation, prov:Influence;
       prov:activity :activity1;
       :customValue 1337 .

Note how the value of the unqualified influence (prov:wasGeneratedBy :activity1) is mirrored as the value of the prov:activity (or prov:entity, or prov:agent) property on the influence class. */
	'qualifiedForm': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedForm'),
	/** If this Activity prov:generated Entity :e, then it can qualify how it performed the Generation using prov:qualifiedGeneration [ a prov:Generation;  prov:entity :e; :foo :bar ]. */
	'qualifiedGeneration': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedGeneration'),
	/** Because prov:qualifiedInfluence is a broad relation, the more specific relations (qualifiedCommunication, qualifiedDelegation, qualifiedEnd, etc.) should be used when applicable. */
	'qualifiedInfluence': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedInfluence'),
	/** If this Entity prov:wasInvalidatedBy Activity :a, then it can qualify how it was invalidated using prov:qualifiedInvalidation [ a prov:Invalidation;  prov:activity :a; :foo :bar ]. */
	'qualifiedInvalidation': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedInvalidation'),
	/** If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. */
	'qualifiedPrimarySource': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedPrimarySource'),
	/** If this Entity prov:wasQuotedFrom Entity :e, then it can qualify how using prov:qualifiedQuotation [ a prov:Quotation;  prov:entity :e; :foo :bar ]. */
	'qualifiedQuotation': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedQuotation'),
	/** If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. */
	'qualifiedRevision': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedRevision'),
	/** If this Activity prov:wasStartedBy Entity :e1, then it can qualify how it was started using prov:qualifiedStart [ a prov:Start;  prov:entity :e1; :foo :bar ]. */
	'qualifiedStart': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedStart'),
	/** If this Activity prov:used Entity :e, then it can qualify how it used it using prov:qualifiedUsage [ a prov:Usage; prov:entity :e; :foo :bar ]. */
	'qualifiedUsage': new n3.NamedNode('http://www.w3.org/ns/prov#qualifiedUsage'),
	'sharesDefinitionWith': new n3.NamedNode('http://www.w3.org/ns/prov#sharesDefinitionWith'),
	'specializationOf': new n3.NamedNode('http://www.w3.org/ns/prov#specializationOf'),
	/** The time at which an activity started. See also prov:endedAtTime. */
	'startedAtTime': new n3.NamedNode('http://www.w3.org/ns/prov#startedAtTime'),
	'todo': new n3.NamedNode('http://www.w3.org/ns/prov#todo'),
	/** Classes and properties used to qualify relationships are annotated with prov:unqualifiedForm to indicate the property used to assert an unqualified provenance relation. */
	'unqualifiedForm': new n3.NamedNode('http://www.w3.org/ns/prov#unqualifiedForm'),
	/** A prov:Entity that was used by this prov:Activity. For example, :baking prov:used :spoon, :egg, :oven . */
	'used': new n3.NamedNode('http://www.w3.org/ns/prov#used'),
	'value': new n3.NamedNode('http://www.w3.org/ns/prov#value'),
	/** An prov:Agent that had some (unspecified) responsibility for the occurrence of this prov:Activity. */
	'wasAssociatedWith': new n3.NamedNode('http://www.w3.org/ns/prov#wasAssociatedWith'),
	/** Attribution is the ascribing of an entity to an agent. */
	'wasAttributedTo': new n3.NamedNode('http://www.w3.org/ns/prov#wasAttributedTo'),
	/** The more specific subproperties of prov:wasDerivedFrom (i.e., prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource) should be used when applicable. */
	'wasDerivedFrom': new n3.NamedNode('http://www.w3.org/ns/prov#wasDerivedFrom'),
	/** End is when an activity is deemed to have ended. An end may refer to an entity, known as trigger, that terminated the activity. */
	'wasEndedBy': new n3.NamedNode('http://www.w3.org/ns/prov#wasEndedBy'),
	'wasGeneratedBy': new n3.NamedNode('http://www.w3.org/ns/prov#wasGeneratedBy'),
	/** Because prov:wasInfluencedBy is a broad relation, its more specific subproperties (e.g. prov:wasInformedBy, prov:actedOnBehalfOf, prov:wasEndedBy, etc.) should be used when applicable. */
	'wasInfluencedBy': new n3.NamedNode('http://www.w3.org/ns/prov#wasInfluencedBy'),
	/** An activity a2 is dependent on or informed by another activity a1, by way of some unspecified entity that is generated by a1 and used by a2. */
	'wasInformedBy': new n3.NamedNode('http://www.w3.org/ns/prov#wasInformedBy'),
	'wasInvalidatedBy': new n3.NamedNode('http://www.w3.org/ns/prov#wasInvalidatedBy'),
	/** An entity is derived from an original entity by copying, or 'quoting', some or all of it. */
	'wasQuotedFrom': new n3.NamedNode('http://www.w3.org/ns/prov#wasQuotedFrom'),
	/** A revision is a derivation that revises an entity into a revised version. */
	'wasRevisionOf': new n3.NamedNode('http://www.w3.org/ns/prov#wasRevisionOf'),
	/** Start is when an activity is deemed to have started. A start may refer to an entity, known as trigger, that initiated the activity. */
	'wasStartedBy': new n3.NamedNode('http://www.w3.org/ns/prov#wasStartedBy'),
}