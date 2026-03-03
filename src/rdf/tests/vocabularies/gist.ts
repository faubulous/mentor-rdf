import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the GIST vocabulary. */
export const _GIST = 'https://w3id.org/semanticarts/ns/ontology/gist/';

export const GIST = {
	/** An agreement having a balance, as in a bank account, or credit card account, or Accounts Receivable account. */
	'Account': 'https://w3id.org/semanticarts/ns/ontology/gist/Account',
	/** A device that can affect the real world via a message interface */
	'Actuator': 'https://w3id.org/semanticarts/ns/ontology/gist/Actuator',
	/** A reference to a place (real or virtual) that can be located by some routing algorithm, and where messages or things can be sent to or retrieved from. E.g. PO Box or URL to a PDF file. */
	'Address': 'https://w3id.org/semanticarts/ns/ontology/gist/Address',
	/** Something which two or more People or Organizations mutually commit to do. */
	'Agreement': 'https://w3id.org/semanticarts/ns/ontology/gist/Agreement',
	/** A measurement of two-dimensional space. */
	'Area': 'https://w3id.org/semanticarts/ns/ontology/gist/Area',
	/** A unit of two-dimensional area, such as square inches or hectares. */
	'AreaUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/AreaUnit',
	/** An intentional, person-made thing, which could be physical or content */
	'Artifact': 'https://w3id.org/semanticarts/ns/ontology/gist/Artifact',
	/** A very general term for the characteristic of something that is being measured.  E.g., property (height) or a process (cycle time) or a behavior (loyalty). */
	'Aspect': 'https://w3id.org/semanticarts/ns/ontology/gist/Aspect',
	/** An amount decremented or incremented by a series of transactions. */
	'Balance': 'https://w3id.org/semanticarts/ns/ontology/gist/Balance',
	/** A primitive unit that cannot be decomposed into other units. It can be converted from one measurement system to another.  The base units in gist are the seven primitive units from the System Internationale (SI): (meter, second, kilogram, ampere, kelvin, mole, candela), plus three convenience ones: each. bit and usDollar. */
	'BaseUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/BaseUnit',
	/** A way of categorizing events.  E.g., differentiating drilling versus cutting. */
	'Behavior': 'https://w3id.org/semanticarts/ns/ontology/gist/Behavior',
	/** A relatively permanent man-made structure situated on a plot of land, having a roof and walls, commonly used for dwelling, entertaining, or working. */
	'Building': 'https://w3id.org/semanticarts/ns/ontology/gist/Building',
	/** Any combination of descriptions of things offered together.  Could be a kit (several parts offered together), but could also be a product plus a warranty. */
	'BundledCatalogItem': 'https://w3id.org/semanticarts/ns/ontology/gist/BundledCatalogItem',
	/** A description of a product or service to be delivered, given in a sufficient level of detail that a receiver could determine whether delivery constituted discharge of the obligation to deliver. */
	'CatalogItem': 'https://w3id.org/semanticarts/ns/ontology/gist/CatalogItem',
	/** A concept or label used to categorize other instances informally. Things that can be thought of as types are usually Categories. */
	'Category': 'https://w3id.org/semanticarts/ns/ontology/gist/Category',
	/** A product unit both of whose factors are coherent units. The conversion factor is 1. */
	'CoherentProductUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentProductUnit',
	/** A ratio unit whose conversion factor is 1. */
	'CoherentRatioUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentRatioUnit',
	/** A unit that is expressed in units that have no conversions.  It may be a simple unit.  It may also be a product or ratio unit that bottoms out in simple units. */
	'CoherentUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentUnit',
	/** A grouping of things. */
	'Collection': 'https://w3id.org/semanticarts/ns/ontology/gist/Collection',
	/** An obligation (possibly unilateral). */
	'Commitment': 'https://w3id.org/semanticarts/ns/ontology/gist/Commitment',
	/** A component is an artifact that contributes to a system.  Could be a simple mechanical component, such as the float contributing to the toilet tank maintaining a constant level, or much more complex as in the internet of things. */
	'Component': 'https://w3id.org/semanticarts/ns/ontology/gist/Component',
	/** An event that has started but has not yet ended. */
	'ContemporaryEvent': 'https://w3id.org/semanticarts/ns/ontology/gist/ContemporaryEvent',
	/** A document, program, image, etc.  (Categories are not content until they are written down.) */
	'Content': 'https://w3id.org/semanticarts/ns/ontology/gist/Content',
	/** Intellectual Property reduced to text, audio etc.  If it contains text (written or spoken), it may be in a language. */
	'ContentExpression': 'https://w3id.org/semanticarts/ns/ontology/gist/ContentExpression',
	/** An event with a probability of happening in the future, and usually dependent upon some other event or condition. */
	'ContingentEvent': 'https://w3id.org/semanticarts/ns/ontology/gist/ContingentEvent',
	/** An obligation that is not yet firm.  There is some contingent event, the occurrence of which will cause the obligation to become firm. */
	'ContingentObligation': 'https://w3id.org/semanticarts/ns/ontology/gist/ContingentObligation',
	/** An Agreement which can be enforced by law */
	'Contract': 'https://w3id.org/semanticarts/ns/ontology/gist/Contract',
	/** A specification of some aspect of a contract. */
	'ContractTerm': 'https://w3id.org/semanticarts/ns/ontology/gist/ContractTerm',
	/** A collection of terms approved and managed by some organization or person. */
	'ControlledVocabulary': 'https://w3id.org/semanticarts/ns/ontology/gist/ControlledVocabulary',
	/** A device that takes messages or signals from a sensor and decides through algorithms whether and which actuator to fire via messages */
	'Controller': 'https://w3id.org/semanticarts/ns/ontology/gist/Controller',
	/** A kind of controller. */
	'ControllerType': 'https://w3id.org/semanticarts/ns/ontology/gist/ControllerType',
	/** A measure that involves countable amounts (?eaches? as well as cases, etc.). Can be decimal. */
	'Count': 'https://w3id.org/semanticarts/ns/ontology/gist/Count',
	/** A unit of counting, especially ?each?, but also units such as dozens. */
	'CountingUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/CountingUnit',
	/** A defined geographical area (or areas) governed by exactly one country government. */
	'CountryGeoRegion': 'https://w3id.org/semanticarts/ns/ontology/gist/CountryGeoRegion',
	/** A Government Organization which asserts both sovereignty (i.e., it is not governed by some other government organization) and governance over an entity generally recognized as a 'country'. */
	'CountryGovernment': 'https://w3id.org/semanticarts/ns/ontology/gist/CountryGovernment',
	/** A unit for measuring a monetary amount over a period of time, such as dollars/hour or euros/month. */
	'CurrencyPerDurationUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/CurrencyPerDurationUnit',
	/** A unit of money. Note: this is the only unit whose conversion factors include time (i.e., the conversion rates change on a daily basis). */
	'CurrencyUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/CurrencyUnit',
	/** A unit to measure amounts of digital information. */
	'DataSizeUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/DataSizeUnit',
	/** The difficulty of reversing a commitment. */
	'DegreeOfCommitment': 'https://w3id.org/semanticarts/ns/ontology/gist/DegreeOfCommitment',
	/** A unit to measure linear distance, such as feet or kilometers. */
	'DistanceUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/DistanceUnit',
	/** Time, but not on a timeline. */
	'Duration': 'https://w3id.org/semanticarts/ns/ontology/gist/Duration',
	/** A unit to measure passage of time: hours, days, years. */
	'DurationUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/DurationUnit',
	/** A flow of electric charge. */
	'ElectricCurrent': 'https://w3id.org/semanticarts/ns/ontology/gist/ElectricCurrent',
	/** Unit of electrical current, which is charge per unit time.  The SI unit is the ampere.  (Note that electrical current is a composed unit.) */
	'ElectricalCurrentUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/ElectricalCurrentUnit',
	/** Any place an electronic message (email, fax, etc.) can be sent. */
	'ElectronicMessageAddress': 'https://w3id.org/semanticarts/ns/ontology/gist/ElectronicMessageAddress',
	/** An email address is a unique identifier for an email account. It is used to both send and receive email messages over the Internet. */
	'EmailAddress': 'https://w3id.org/semanticarts/ns/ontology/gist/EmailAddress',
	/** Tangible property other than land or buildings.  Any kind of equipment, could be machine, router, car etc. */
	'Equipment': 'https://w3id.org/semanticarts/ns/ontology/gist/Equipment',
	/** Categories of equipment */
	'EquipmentType': 'https://w3id.org/semanticarts/ns/ontology/gist/EquipmentType',
	/** Something that occurs over a period of time, often characterized as an activity being carried out by some person, organization, or software application or brought about by natural forces. */
	'Event': 'https://w3id.org/semanticarts/ns/ontology/gist/Event',
	/** A measure of distance, which could be distances over the Earth, and could also be height, width, length, depth, girth, etc. */
	'Extent': 'https://w3id.org/semanticarts/ns/ontology/gist/Extent',
	/** Content which is in a particular format. (E.g., HTML, PDF, JPG.) */
	'FormattedContent': 'https://w3id.org/semanticarts/ns/ontology/gist/FormattedContent',
	/** A function is what a specific made item is intended to do.  For instance: transmit electricity, provide ballast, control ambient temperature. */
	'Function': 'https://w3id.org/semanticarts/ns/ontology/gist/Function',
	/** The real-world media type for content. */
	'GeneralMediaType': 'https://w3id.org/semanticarts/ns/ontology/gist/GeneralMediaType',
	/** An individual point on the Earth's surface, identified by latitude, longitude and altitude. If altitude is missing, it is assumed to be at the Earth's surface.  However, altitude is measured from sea level.  these points are to the WGS-84 coordinate system using the GPS decimal lat/long */
	'GeoPoint': 'https://w3id.org/semanticarts/ns/ontology/gist/GeoPoint',
	/** A bounded region (or set of regions) on the surface of the Earth. */
	'GeoRegion': 'https://w3id.org/semanticarts/ns/ontology/gist/GeoRegion',
	/** An ordered set of GeoPoints that defines a path from starting point to ending point. */
	'GeoRoute': 'https://w3id.org/semanticarts/ns/ontology/gist/GeoRoute',
	/** A single portion of a GeoRegion which has been divided (i.e., segmented). */
	'GeoSegment': 'https://w3id.org/semanticarts/ns/ontology/gist/GeoSegment',
	/** A three-dimensional space on or near the surface of the Earth, such as an oil reservoir, the body of a lake, or an airspace. */
	'GeoVolume': 'https://w3id.org/semanticarts/ns/ontology/gist/GeoVolume',
	/** A specific intentional endpoint.  One can tell whether it has been achieved, as opposed to an intention, which may not have an evaluation function. */
	'Goal': 'https://w3id.org/semanticarts/ns/ontology/gist/Goal',
	/** A defined geographic area or areas governed by at least one government organization. */
	'GovernedGeoRegion': 'https://w3id.org/semanticarts/ns/ontology/gist/GovernedGeoRegion',
	/** An organization which exercises political and/or regulatory authority over a political unit, people, geo-region, etc., as well as performing certain functions for this unit or body. Differs from a corporation in that it cannot be owned. */
	'GovernmentOrganization': 'https://w3id.org/semanticarts/ns/ontology/gist/GovernmentOrganization',
	/** An event which occurred in time, with an actual end earlier than the present moment. */
	'HistoricalEvent': 'https://w3id.org/semanticarts/ns/ontology/gist/HistoricalEvent',
	/** Content that is used to uniquely identify something or someone. */
	'ID': 'https://w3id.org/semanticarts/ns/ontology/gist/ID',
	/** An amount of data, such as 6 petabytes, or 640KB. */
	'InformationQuantity': 'https://w3id.org/semanticarts/ns/ontology/gist/InformationQuantity',
	/** A work, invention or concept, independent of its being expressed in text, audio, video, image, or live performance.  IP can also be tacit knowledge, know-how, or skill. Also includes Brands. */
	'IntellectualProperty': 'https://w3id.org/semanticarts/ns/ontology/gist/IntellectualProperty',
	/** Goal, desire, aspiration. This is the "teleologic" aspect of the system that indicates things are done with a purpose. */
	'Intention': 'https://w3id.org/semanticarts/ns/ontology/gist/Intention',
	/** An organization whose members are government organizations. This can comprise regional, municipal, state/province, or national level entities. */
	'IntergovernmentalOrganization': 'https://w3id.org/semanticarts/ns/ontology/gist/IntergovernmentalOrganization',
	/** Something permanently attached to the Earth. */
	'Landmark': 'https://w3id.org/semanticarts/ns/ontology/gist/Landmark',
	/** A recognized, organized set of symbols and grammar. */
	'Language': 'https://w3id.org/semanticarts/ns/ontology/gist/Language',
	/** Something that is currently, or at some point in time was, alive. */
	'LivingThing': 'https://w3id.org/semanticarts/ns/ontology/gist/LivingThing',
	/** A measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle.  This is based on the luminosity function, a standardized model of the sensitivity of the human eye. */
	'LuminousIntensity': 'https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensity',
	/** The measure of brightness. The SI unit is the candela. */
	'LuminousIntensityUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensityUnit',
	/** Base class for units which can be converted.  The primitive units can be converted from one measurement system to another; the complex units (ratio or product) have to decompose to their primitives. */
	'Magnitude': 'https://w3id.org/semanticarts/ns/ontology/gist/Magnitude',
	/** Magnitude of mass. */
	'Mass': 'https://w3id.org/semanticarts/ns/ontology/gist/Mass',
	/** A unit representing the amount of matter in a particle or object.  The SI unit of mass is the kilogram. */
	'MassUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/MassUnit',
	/** A digitized type that computer applications can recognize. */
	'MediaType': 'https://w3id.org/semanticarts/ns/ontology/gist/MediaType',
	/** A physicality on which a work could be implemented or exposed. E.g., paper, clay, or a computer monitor. */
	'Medium': 'https://w3id.org/semanticarts/ns/ontology/gist/Medium',
	/** A specific instance of content sent from an Organization or Person to at least one other Organization or Person. */
	'Message': 'https://w3id.org/semanticarts/ns/ontology/gist/Message',
	/** Each pulse from a Sensor is reflected in a message, as well as each instruction to an Actuator */
	'MessageDefinition': 'https://w3id.org/semanticarts/ns/ontology/gist/MessageDefinition',
	/** Amount of a substance, as counted molecules. */
	'MolarQuantity': 'https://w3id.org/semanticarts/ns/ontology/gist/MolarQuantity',
	/** Amount of chemical material.  Measured in Avogadro units (moles) of 6.02 x 10^23 molecules. */
	'MoleUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/MoleUnit',
	/** A special type of magnitude, due to the way rounding is handled in math and the temporal aspect of conversion. */
	'Monetary': 'https://w3id.org/semanticarts/ns/ontology/gist/Monetary',
	/** A monetary amount over a period of time. */
	'MonetaryPerDuration': 'https://w3id.org/semanticarts/ns/ontology/gist/MonetaryPerDuration',
	/** A network is a set of nodes connected by links. */
	'Network': 'https://w3id.org/semanticarts/ns/ontology/gist/Network',
	/** An abstract representation of the connection between two or more nodes in a network. */
	'NetworkLink': 'https://w3id.org/semanticarts/ns/ontology/gist/NetworkLink',
	/** A node in a network. */
	'NetworkNode': 'https://w3id.org/semanticarts/ns/ontology/gist/NetworkNode',
	/** A future commitment from one organization or person to another. Contracts are sets of obligations to do or forbear, or to indemnify or warrant. */
	'Obligation': 'https://w3id.org/semanticarts/ns/ontology/gist/Obligation',
	/** A commitment to buy or sell a described or identified part or service. */
	'Offer': 'https://w3id.org/semanticarts/ns/ontology/gist/Offer',
	/** A collection in which the members are sequentially ordered. All members of an OrderedCollection are OrderedMembers. */
	'OrderedCollection': 'https://w3id.org/semanticarts/ns/ontology/gist/OrderedCollection',
	/** A member of an ordered collection serving as a proxy for a real world item, which can appear in different orders in different collections. The ordered member appears in exactly one ordered collection. */
	'OrderedMember': 'https://w3id.org/semanticarts/ns/ontology/gist/OrderedMember',
	/** A generic organization that can be formal or informal, legal or non-legal. It can have members, or not. */
	'Organization': 'https://w3id.org/semanticarts/ns/ontology/gist/Organization',
	/** A description of things one is permitted to do. This could be broad, such as free speech, but more often is very specific, such as the right of egress through a particular property. */
	'Permission': 'https://w3id.org/semanticarts/ns/ontology/gist/Permission',
	/** A human being that may or may not still be alive. */
	'Person': 'https://w3id.org/semanticarts/ns/ontology/gist/Person',
	/** The things that a sensor can sense, such as light, heat, current, moisture, etc. */
	'PhenomenaType': 'https://w3id.org/semanticarts/ns/ontology/gist/PhenomenaType',
	/** The effects to be realized in the real world, such as lifting a garage door, turning off a valve, dropping cadmium rods, etc. */
	'PhysicalActionType': 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalActionType',
	/** An event that can be said to have occurred at some place in space. */
	'PhysicalEvent': 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalEvent',
	/** A discrete physical object which, if subdivided, will result in parts that are distinguishable in nature from the whole and in general also from the other parts. */
	'PhysicalIdentifiableItem': 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalIdentifiableItem',
	/** An undifferentiated amount of physical material which, when subdivided, results in each part being indistinguishable in nature from the whole and from every other part. */
	'PhysicalSubstance': 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalSubstance',
	/** Union of all the geo classes */
	'Place': 'https://w3id.org/semanticarts/ns/ontology/gist/Place',
	/** A set of codes the postal authorities can use to deliver physical mail. */
	'PostalAddress': 'https://w3id.org/semanticarts/ns/ontology/gist/PostalAddress',
	/** Any of many ways of categorizing products, including models, NATO product codes, and the like. */
	'ProductCategory': 'https://w3id.org/semanticarts/ns/ontology/gist/ProductCategory',
	/** A magnitude expressed as a product of primitives.  (E.g., Force = M*A). */
	'ProductMagnitude': 'https://w3id.org/semanticarts/ns/ontology/gist/ProductMagnitude',
	/** Offering something which could be physically warehoused or digitally stored. */
	'ProductSpecification': 'https://w3id.org/semanticarts/ns/ontology/gist/ProductSpecification',
	/** A unit of measure that is the product of two simpler ones. */
	'ProductUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/ProductUnit',
	/** A task, usually of longer duration, made up of other tasks. */
	'Project': 'https://w3id.org/semanticarts/ns/ontology/gist/Project',
	/** This is a number whose unit of measure is a ratio. */
	'RatioMagnitude': 'https://w3id.org/semanticarts/ns/ontology/gist/RatioMagnitude',
	/** A UnitOfMeasure composed of a numerator unit and a denominator unit. */
	'RatioUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/RatioUnit',
	/** A measure that was neither measured nor estimated but set by fiat. For instance, a goal. There is no Measurement associated with a ReferenceValue. */
	'ReferenceValue': 'https://w3id.org/semanticarts/ns/ontology/gist/ReferenceValue',
	/** Content which has been expressed, either to print, or through speakers, or on a monitor. */
	'RenderedContent': 'https://w3id.org/semanticarts/ns/ontology/gist/RenderedContent',
	/** A documented physical or functional need that a particular design, product, or process must be able to perform.  Alternately, the obligation of a person or organization to behave in a certain way (i.e., drive on the right side of the road). */
	'Requirement': 'https://w3id.org/semanticarts/ns/ontology/gist/Requirement',
	/** A description of things one is prevented from doing.  Most laws are restrictions. */
	'Restriction': 'https://w3id.org/semanticarts/ns/ontology/gist/Restriction',
	/** An event with a planned start datetime. */
	'ScheduledEvent': 'https://w3id.org/semanticarts/ns/ontology/gist/ScheduledEvent',
	/** A task with a planned start datetime. */
	'ScheduledTask': 'https://w3id.org/semanticarts/ns/ontology/gist/ScheduledTask',
	/** Superclass for all types of metadata, including owl concepts (such as class) and relational (tables, elements) and tool related (queries, R2RML maps etc etc) */
	'SchemaMetaData': 'https://w3id.org/semanticarts/ns/ontology/gist/SchemaMetaData',
	/** A device that can detect something and report it. Light sensors, temperature sensors, */
	'Sensor': 'https://w3id.org/semanticarts/ns/ontology/gist/Sensor',
	/** A description of something that can be done for a person or organization (which produces some form of an act). */
	'ServiceSpecification': 'https://w3id.org/semanticarts/ns/ontology/gist/ServiceSpecification',
	/** Each simple unit has a base unit and a conversion factor to the base. The bases are from the System International (SI). The conversion factor is the number which one multiplies a Unit by to get to base, or divides by to get from base.  E.g., the conversionFactor for inch is 0.0254 to get to the base unit (meter). */
	'SimpleUnitOfMeasure': 'https://w3id.org/semanticarts/ns/ontology/gist/SimpleUnitOfMeasure',
	/** A set of requirements to be satisfied by a material, design, product, or service. */
	'Specification': 'https://w3id.org/semanticarts/ns/ontology/gist/Specification',
	/** An address which references a fixed location in the physical world. */
	'StreetAddress': 'https://w3id.org/semanticarts/ns/ontology/gist/StreetAddress',
	/** A government of a governed geo-region other than a country, which is under the direct or indirect control of a country government. */
	'SubCountryGovernment': 'https://w3id.org/semanticarts/ns/ontology/gist/SubCountryGovernment',
	/** A system is an artifact with component parts where the parts contribute to the goal of the system */
	'System': 'https://w3id.org/semanticarts/ns/ontology/gist/System',
	/** This is for folksonomy type terms, which can be made up on the fly by users. */
	'Tag': 'https://w3id.org/semanticarts/ns/ontology/gist/Tag',
	/** A piece of work that is either proposed, planned, scheduled, underway, or completed. */
	'Task': 'https://w3id.org/semanticarts/ns/ontology/gist/Task',
	/** An outline of a task of a particular type, which is the basis for executing such tasks. */
	'TaskTemplate': 'https://w3id.org/semanticarts/ns/ontology/gist/TaskTemplate',
	/** A controlled vocabulary arranged as a hierarchy of concepts. */
	'Taxonomy': 'https://w3id.org/semanticarts/ns/ontology/gist/Taxonomy',
	/** A numeric code a telephonic device uses for contacting another telephonic device. */
	'TelephoneNumber': 'https://w3id.org/semanticarts/ns/ontology/gist/TelephoneNumber',
	/** The degree or intensity of heat present in a substance or object, especially as expressed according to a comparative scale. */
	'Temperature': 'https://w3id.org/semanticarts/ns/ontology/gist/Temperature',
	/** Unit of measurement for expressing temperature.  Per SI, the base of temperature is in Kelvin, to allow for all units to be expressed relative to a real (in this case absolute) zero. */
	'TemperatureUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/TemperatureUnit',
	/** Something used to make objects in its own image. */
	'Template': 'https://w3id.org/semanticarts/ns/ontology/gist/Template',
	/** A relationship existing for a period of time. */
	'TemporalRelation': 'https://w3id.org/semanticarts/ns/ontology/gist/TemporalRelation',
	/** Content expressed as words and numbers (not graphics). */
	'Text': 'https://w3id.org/semanticarts/ns/ontology/gist/Text',
	/** A span of time with a known start time, end time, and duration. As long as two of the three are known, the third can be inferred. */
	'TimeInterval': 'https://w3id.org/semanticarts/ns/ontology/gist/TimeInterval',
	/** An event which has an effect on at least one accumulator. */
	'Transaction': 'https://w3id.org/semanticarts/ns/ontology/gist/Transaction',
	/** Standard unit by which we measure things */
	'UnitOfMeasure': 'https://w3id.org/semanticarts/ns/ontology/gist/UnitOfMeasure',
	/** Three-dimensional space, or equivalent fluid measurement. */
	'Volume': 'https://w3id.org/semanticarts/ns/ontology/gist/Volume',
	/** Units of three-dimensional space, expressed here as an area times a distance. */
	'VolumeUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/VolumeUnit',
	'_PrefixDeclaration_gist': 'https://w3id.org/semanticarts/ns/ontology/gist/_PrefixDeclaration_gist',
	/** The base unit for currency. */
	'_USDollar': 'https://w3id.org/semanticarts/ns/ontology/gist/_USDollar',
	/** The base unit for electrical current. */
	'_ampere': 'https://w3id.org/semanticarts/ns/ontology/gist/_ampere',
	/** The base unit for measuring digital information. */
	'_bit': 'https://w3id.org/semanticarts/ns/ontology/gist/_bit',
	/** The base unit for luminous intensity. */
	'_candela': 'https://w3id.org/semanticarts/ns/ontology/gist/_candela',
	/** A duration unit that is 24 hours long. */
	'_day': 'https://w3id.org/semanticarts/ns/ontology/gist/_day',
	/** The base unit for count magnitudes. */
	'_each': 'https://w3id.org/semanticarts/ns/ontology/gist/_each',
	/** The base unit for measuring temperature. */
	'_kelvin': 'https://w3id.org/semanticarts/ns/ontology/gist/_kelvin',
	/** The base unit for measuring mass. */
	'_kilogram': 'https://w3id.org/semanticarts/ns/ontology/gist/_kilogram',
	/** The base unit for measuring distance. */
	'_meter': 'https://w3id.org/semanticarts/ns/ontology/gist/_meter',
	/** A unit equal to a thousandth of a second. */
	'_millisecond': 'https://w3id.org/semanticarts/ns/ontology/gist/_millisecond',
	/** A unit equal to 60 seconds. */
	'_minute': 'https://w3id.org/semanticarts/ns/ontology/gist/_minute',
	/** The base unit for measuring molar quantities. */
	'_mole': 'https://w3id.org/semanticarts/ns/ontology/gist/_mole',
	/** The unit designating a quantity that is the ratio of two quantities with the same unit of measure and which has been multiplied by 100. */
	'_percent': 'https://w3id.org/semanticarts/ns/ontology/gist/_percent',
	/** The base unit for measuring durations. */
	'_second': 'https://w3id.org/semanticarts/ns/ontology/gist/_second',
	/** The types of input messages that will be allowed. */
	'accepts': 'https://w3id.org/semanticarts/ns/ontology/gist/accepts',
	/** The actual date that something ended, with precision of one day. */
	'actualEndDate': 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndDate',
	/** The actual date and time that something ended, with no implied precision. */
	'actualEndDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndDateTime',
	/** The actual time that something ended, expressed as a system time used for timestamps. */
	'actualEndMicrosecond': 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndMicrosecond',
	/** The actual date and time that something ended, with precision of one minute. */
	'actualEndMinute': 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndMinute',
	/** The actual date that something ended, with precision of one year. */
	'actualEndYear': 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndYear',
	/** The actual date that something started, with precision of one day. */
	'actualStartDate': 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartDate',
	/** The actual date and time that something started, with no implied precision. */
	'actualStartDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartDateTime',
	/** The actual time that something started, expressed as a system time used for timestamps. */
	'actualStartMicrosecond': 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartMicrosecond',
	/** The actual date and time that something started, with precision of one minute. */
	'actualStartMinute': 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartMinute',
	/** The actual date that something started, with precision of one year. */
	'actualStartYear': 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartYear',
	/** The intention (say a grant) allows a particular kind of activity (for instance egress) */
	'allows': 'https://w3id.org/semanticarts/ns/ontology/gist/allows',
	/** The date and time at which something did or will occur, with variants for precision, start and end, and actual vs. planned. */
	'atDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/atDateTime',
	/** The date some living thing was or will be born, with precision of one day. */
	'birthDate': 'https://w3id.org/semanticarts/ns/ontology/gist/birthDate',
	/** The party that is the source of something (e.g. a message, shipment, etc.) */
	'comesFromAgent': 'https://w3id.org/semanticarts/ns/ontology/gist/comesFromAgent',
	/** Origin */
	'comesFromPlace': 'https://w3id.org/semanticarts/ns/ontology/gist/comesFromPlace',
	/** The subject conforms to the Object, e.g. meet an obligation, meet terms of an offer, adhere to a specification */
	'conformsTo': 'https://w3id.org/semanticarts/ns/ontology/gist/conformsTo',
	/** Links to the string corresponding to Text */
	'containedText': 'https://w3id.org/semanticarts/ns/ontology/gist/containedText',
	/** The parts of a system contribute to the goal/ function of the whole system */
	'contributesTo': 'https://w3id.org/semanticarts/ns/ontology/gist/contributesTo',
	/** The conversion factor used to convert a unit to its standard (i.e., coherent) unit (which could be a base unit.) */
	'conversionFactor': 'https://w3id.org/semanticarts/ns/ontology/gist/conversionFactor',
	/** Add this number to get to the zero point.  On the Celsius scale, the conversionOffset is -273.15 degrees C. On the Fahrenheit scale it is -459.67 degrees.  Is equal to 0 when the unit has the same zero point as the base unit. e.g. inch, meter. */
	'conversionOffset': 'https://w3id.org/semanticarts/ns/ontology/gist/conversionOffset',
	/** The date some living thing died. */
	'deathDate': 'https://w3id.org/semanticarts/ns/ontology/gist/deathDate',
	/** A statement about someone or something's attributes or characteristics. */
	'description': 'https://w3id.org/semanticarts/ns/ontology/gist/description',
	/** The set of actuators that a controller can affect */
	'directs': 'https://w3id.org/semanticarts/ns/ontology/gist/directs',
	/** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
	'domainIncludes': 'https://w3id.org/semanticarts/ns/ontology/gist/domainIncludes',
	/** Links to the string corresponding to EncryptedText */
	'encryptedText': 'https://w3id.org/semanticarts/ns/ontology/gist/encryptedText',
	/** The date and time that something ended. */
	'endDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/endDateTime',
	/** The party that is the recipient of something (e.g. a message, shipment, etc.) */
	'goesToAgent': 'https://w3id.org/semanticarts/ns/ontology/gist/goesToAgent',
	/** Destination */
	'goesToPlace': 'https://w3id.org/semanticarts/ns/ontology/gist/goesToPlace',
	/** Relates the subject to its physical or virtual address. */
	'hasAddress': 'https://w3id.org/semanticarts/ns/ontology/gist/hasAddress',
	/** Distance above sea level */
	'hasAltitude': 'https://w3id.org/semanticarts/ns/ontology/gist/hasAltitude',
	/** Relates a UnitOfMeasure to its BaseUnit.  This indicates what kind of Unit something is. */
	'hasBaseUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/hasBaseUnit',
	/** Relates a living thing to its biological parent. */
	'hasBiologicalParent': 'https://w3id.org/semanticarts/ns/ontology/gist/hasBiologicalParent',
	/** Relates a Person or Organization to where they can receive messages, including postal addresses, fax numbers, phone numbers, email, web site, etc. */
	'hasCommunicationAddress': 'https://w3id.org/semanticarts/ns/ontology/gist/hasCommunicationAddress',
	/** Relates a RatioUnit such as meters/second to the denominator Unit (e.g. second). */
	'hasDenominator': 'https://w3id.org/semanticarts/ns/ontology/gist/hasDenominator',
	/** The relationship between a whole and a part where the part has independent existence. */
	'hasDirectPart': 'https://w3id.org/semanticarts/ns/ontology/gist/hasDirectPart',
	/** The subject category is a subcategory of the object category. This property defines the direct links in a category hierarchy; no intermediate categories can exist between the direct links. */
	'hasDirectSuperCategory': 'https://w3id.org/semanticarts/ns/ontology/gist/hasDirectSuperCategory',
	/** Relates an ordered collection to its first member. */
	'hasFirstMember': 'https://w3id.org/semanticarts/ns/ontology/gist/hasFirstMember',
	/** The active party, the one with the obligation or the one initiating the transfer */
	'hasGiver': 'https://w3id.org/semanticarts/ns/ontology/gist/hasGiver',
	/** The reason for doing something */
	'hasGoal': 'https://w3id.org/semanticarts/ns/ontology/gist/hasGoal',
	/** What equipment or person is currently in this node.  Note to create a temporal view make a TemporalRelation for this property */
	'hasIncumbent': 'https://w3id.org/semanticarts/ns/ontology/gist/hasIncumbent',
	/** To have a comparable numeric value. Each magnitude has a unit. */
	'hasMagnitude': 'https://w3id.org/semanticarts/ns/ontology/gist/hasMagnitude',
	/** Relates a Collection to its member individuals. */
	'hasMember': 'https://w3id.org/semanticarts/ns/ontology/gist/hasMember',
	/** Relates a ProductUnit such as square mile to the second of two units multiplied together (e.g. mile). */
	'hasMultiplicand': 'https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplicand',
	/** Relates a ProductUnit such as square mile to the first of two units multiplied together (e.g. mile) */
	'hasMultiplier': 'https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplier',
	/** Relates a child category to a parent category in an informal (e.g., faceted) hierarchy. */
	'hasNavigationalParent': 'https://w3id.org/semanticarts/ns/ontology/gist/hasNavigationalParent',
	/** Relates a RatioUnit such as meter(s)/second to the numerator Unit (e.g. meter). */
	'hasNumerator': 'https://w3id.org/semanticarts/ns/ontology/gist/hasNumerator',
	/** The transitive version of gist:hasDirectPart */
	'hasPart': 'https://w3id.org/semanticarts/ns/ontology/gist/hasPart',
	/** Relates something (e.g. an agreement) to things that play a role, or take part or are otherwise involved in some way. */
	'hasParticipant': 'https://w3id.org/semanticarts/ns/ontology/gist/hasParticipant',
	/** The people or organizations participating in an event, agreement or obligation */
	'hasParty': 'https://w3id.org/semanticarts/ns/ontology/gist/hasParty',
	/** Where something is located */
	'hasPhysicalLocation': 'https://w3id.org/semanticarts/ns/ontology/gist/hasPhysicalLocation',
	/** Links a Magnitude to the degree of accuracy of the numeric value.   This allows for fuzzy numbers.  All magnitudes have a precision.  Usually we don't record them.  When we do this, it will be a value whose extent covers 2 standard deviations around the stated magnitude */
	'hasPrecision': 'https://w3id.org/semanticarts/ns/ontology/gist/hasPrecision',
	/** The recipient */
	'hasRecipient': 'https://w3id.org/semanticarts/ns/ontology/gist/hasRecipient',
	/** For a complex unit refers to a unit that has all the component parts in SI */
	'hasStandardUnit': 'https://w3id.org/semanticarts/ns/ontology/gist/hasStandardUnit',
	/** The subject category is included by, or narrower than, the object category. Everything categorized by the subcategory can be inferred to be categorized by the supercategory. */
	'hasSuperCategory': 'https://w3id.org/semanticarts/ns/ontology/gist/hasSuperCategory',
	/** Relates a subject category to a unique parent category in an informal (e.g., faceted) hierarchy. */
	'hasUniqueNavigationalParent': 'https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueNavigationalParent',
	/** Used for taxos that must have single parents */
	'hasUniqueSuperCategory': 'https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueSuperCategory',
	/** Which unit of measure you are using. All measures are expressed in some unit of measure, even if we don't know what it is initially. */
	'hasUnitOfMeasure': 'https://w3id.org/semanticarts/ns/ontology/gist/hasUnitOfMeasure',
	/** The area over which the sensor can sense (might be a small geospatial area or a specific wire in a circuit) */
	'hasViableRange': 'https://w3id.org/semanticarts/ns/ontology/gist/hasViableRange',
	/** Subject matter of a document. */
	'isAbout': 'https://w3id.org/semanticarts/ns/ontology/gist/isAbout',
	/** Where the effect came from */
	'isAffectedBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isAffectedBy',
	/** Relates the subject to whomever or whatever assigns or distributes it. */
	'isAllocatedBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isAllocatedBy',
	/** What this aspect is referring to */
	'isAspectOf': 'https://w3id.org/semanticarts/ns/ontology/gist/isAspectOf',
	/** The Object is a foundation for, a starting point for, gave rise to or justifies the Subject */
	'isBasedOn': 'https://w3id.org/semanticarts/ns/ontology/gist/isBasedOn',
	/** Points to a taxonomy item or other less formally defined class. */
	'isCategorizedBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isCategorizedBy',
	/** A way to categorize a behavior. */
	'isCharacterizedAs': 'https://w3id.org/semanticarts/ns/ontology/gist/isCharacterizedAs',
	/** A non-owning, non-causal, non-subordinate (i.e., peer-to-peer) relationship. */
	'isConnectedTo': 'https://w3id.org/semanticarts/ns/ontology/gist/isConnectedTo',
	/** The language something was expressed in */
	'isExpressedIn': 'https://w3id.org/semanticarts/ns/ontology/gist/isExpressedIn',
	/** Relates one place to another place that contains the first. */
	'isGeographicallyContainedIn': 'https://w3id.org/semanticarts/ns/ontology/gist/isGeographicallyContainedIn',
	/** A reference from the thing being governed to the governor */
	'isGovernedBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isGovernedBy',
	/** This is like a URI: a thing can have more than one ID, but each of the IDs must refer to a unique thing. */
	'isIdentifiedBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isIdentifiedBy',
	/** Relates something to a substance that it is made up of. */
	'isMadeUpOf': 'https://w3id.org/semanticarts/ns/ontology/gist/isMadeUpOf',
	/** The entity that formally acknowledges the existence of, as the State recognizes the existence of a particular company */
	'isRecognizedBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedBy',
	/** The party doing the recognition */
	'isRecognizedDirectlyBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedDirectlyBy',
	/** Date that something was posted, not necessarily the date it occurred. Must be after the date of occurrence, but could be before or after the planned date. (Unusual, but I could record today that I expected to be paid last week.) */
	'isRecordedAt': 'https://w3id.org/semanticarts/ns/ontology/gist/isRecordedAt',
	/** What media something was rendered On */
	'isRenderedOn': 'https://w3id.org/semanticarts/ns/ontology/gist/isRenderedOn',
	/** Relates a deprecated term to a term that replaces it, which is either an exact (in the case of simple renaming) or approximate (in the case of renaming and some semantic change) semantic match. */
	'isSupersededBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isSupersededBy',
	/** Relates a contingency, such as an event or obligation, to the event that gives rise to it. */
	'isTriggeredBy': 'https://w3id.org/semanticarts/ns/ontology/gist/isTriggeredBy',
	/** Relates a law, contract, etc., to the system of law or government which has the power, right, or authority to interpret and apply it. */
	'isUnderJurisdictionOf': 'https://w3id.org/semanticarts/ns/ontology/gist/isUnderJurisdictionOf',
	/** Degrees above or below equator */
	'latitude': 'https://w3id.org/semanticarts/ns/ontology/gist/latitude',
	/** An annotation for providing the licensing on this or derivative ontologies */
	'license': 'https://w3id.org/semanticarts/ns/ontology/gist/license',
	/** Relates a NetworkLink to a NetworkNode that it connects to another node. Used when the connections are undirected, or the direction is not known. */
	'links': 'https://w3id.org/semanticarts/ns/ontology/gist/links',
	/** Relates a NetworkLink to its origin NetworkNode. Unlike the superproperty, this represents a directed connection. */
	'linksFrom': 'https://w3id.org/semanticarts/ns/ontology/gist/linksFrom',
	/** Relates a NetworkLink to its destination NetworkNode. Unlike the superproperty, this represents a directed connection. */
	'linksTo': 'https://w3id.org/semanticarts/ns/ontology/gist/linksTo',
	/** Degrees from GM */
	'longitude': 'https://w3id.org/semanticarts/ns/ontology/gist/longitude',
	/** Relates an individual to (one of) its name(s). */
	'name': 'https://w3id.org/semanticarts/ns/ontology/gist/name',
	/** The actual value of a magnitude. */
	'numericValue': 'https://w3id.org/semanticarts/ns/ontology/gist/numericValue',
	/** A thing occupies are region */
	'occupiesGeographically': 'https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographically',
	/** To be in a fixed position on the earth */
	'occupiesGeographicallyPermanently': 'https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographicallyPermanently',
	/** The geospatial place where something happened or will happen */
	'occursIn': 'https://w3id.org/semanticarts/ns/ontology/gist/occursIn',
	/** Possessing and controlling.  Ultimate form of ownership is the right to destroy.  Long list of potential Range classes */
	'owns': 'https://w3id.org/semanticarts/ns/ontology/gist/owns',
	/** The date that something is or was planned to end, with precision of one day. */
	'plannedEndDate': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDate',
	/** The date that something is or was planned to end, with no implied precision. */
	'plannedEndDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDateTime',
	/** The date and time that something is or was planned to end, with precision of one minute. */
	'plannedEndMinute': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndMinute',
	/** The date that something is or was planned to end, with precision of one year. */
	'plannedEndYear': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndYear',
	/** The date that something is or was planned to start, with precision of one day. */
	'plannedStartDate': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDate',
	/** The date and time that something is or was planned to start, with no implied precision. */
	'plannedStartDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDateTime',
	/** The date and time that something is or was planned to start, with precision of one minute. */
	'plannedStartMinute': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartMinute',
	/** The date that something is or was planned to start, with precision of one year. */
	'plannedStartYear': 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartYear',
	/** A generic ordering relation indicating that the subject comes before the object. */
	'precedes': 'https://w3id.org/semanticarts/ns/ontology/gist/precedes',
	/** A generic ordering relation indicating that the subject comes immediately before the object. */
	'precedesDirectly': 'https://w3id.org/semanticarts/ns/ontology/gist/precedesDirectly',
	/** The intention (say a law) is intended to prevent this kind of behavior (say jay-walking) */
	'prevents': 'https://w3id.org/semanticarts/ns/ontology/gist/prevents',
	/** The subject creates the object. */
	'produces': 'https://w3id.org/semanticarts/ns/ontology/gist/produces',
	/** Links a member of an ordered collection to the real-world item it represents in that collection. */
	'providesOrderFor': 'https://w3id.org/semanticarts/ns/ontology/gist/providesOrderFor',
	/** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
	'rangeIncludes': 'https://w3id.org/semanticarts/ns/ontology/gist/rangeIncludes',
	/** The subject needs the object or makes it necessary, mandatory, or compulsory. */
	'requires': 'https://w3id.org/semanticarts/ns/ontology/gist/requires',
	/** The set of sensors that a controller is attached to */
	'respondsTo': 'https://w3id.org/semanticarts/ns/ontology/gist/respondsTo',
	/** For ordering ordered lists. */
	'sequence': 'https://w3id.org/semanticarts/ns/ontology/gist/sequence',
	/** The date and time that something started. */
	'startDateTime': 'https://w3id.org/semanticarts/ns/ontology/gist/startDateTime',
	/** Used for folksonomy style categories (non controlled vocabulary) */
	'tagText': 'https://w3id.org/semanticarts/ns/ontology/gist/tagText',
	/** The unique string value of some content object; i.e., there is no possibility of having more than one value. */
	'uniqueText': 'https://w3id.org/semanticarts/ns/ontology/gist/uniqueText',
	/** The standard symbol for the unit NOT using any special characters.  E.g. square meter would be m^2 rather than m?. */
	'unitSymbol': 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbol',
	/** The standard symbol for the unit in HTML format for  pretty printing, may use special characters.  E.g. to show square meter as  m? rather than m^2, the value of this property would be "m&sup2;" This is for when Unicode not supported and the display will be HTML format. */
	'unitSymbolHtml': 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolHtml',
	/** The standard symbol for the unit preferred for pretty printing, may use special characters.  E.g. square meter would be  m? rather than m^2. */
	'unitSymbolUnicode': 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolUnicode',
	/** gist is a minimalist upper ontology created by Semantic Arts. */
	'gistCore': 'https://w3id.org/semanticarts/ontology/gistCore',
}

/** Namespace URI of the gist vocabulary. */
export const _gist = { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/' } as NamedNode;

export const gist = {
	/** An agreement having a balance, as in a bank account, or credit card account, or Accounts Receivable account. */
	'Account': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Account', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Account' } as NamedNode,
	/** A device that can affect the real world via a message interface */
	'Actuator': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Actuator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Actuator' } as NamedNode,
	/** A reference to a place (real or virtual) that can be located by some routing algorithm, and where messages or things can be sent to or retrieved from. E.g. PO Box or URL to a PDF file. */
	'Address': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Address', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Address' } as NamedNode,
	/** Something which two or more People or Organizations mutually commit to do. */
	'Agreement': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Agreement', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Agreement' } as NamedNode,
	/** A measurement of two-dimensional space. */
	'Area': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Area', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Area' } as NamedNode,
	/** A unit of two-dimensional area, such as square inches or hectares. */
	'AreaUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/AreaUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/AreaUnit' } as NamedNode,
	/** An intentional, person-made thing, which could be physical or content */
	'Artifact': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Artifact', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Artifact' } as NamedNode,
	/** A very general term for the characteristic of something that is being measured.  E.g., property (height) or a process (cycle time) or a behavior (loyalty). */
	'Aspect': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Aspect', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Aspect' } as NamedNode,
	/** An amount decremented or incremented by a series of transactions. */
	'Balance': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Balance', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Balance' } as NamedNode,
	/** A primitive unit that cannot be decomposed into other units. It can be converted from one measurement system to another.  The base units in gist are the seven primitive units from the System Internationale (SI): (meter, second, kilogram, ampere, kelvin, mole, candela), plus three convenience ones: each. bit and usDollar. */
	'BaseUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/BaseUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/BaseUnit' } as NamedNode,
	/** A way of categorizing events.  E.g., differentiating drilling versus cutting. */
	'Behavior': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Behavior', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Behavior' } as NamedNode,
	/** A relatively permanent man-made structure situated on a plot of land, having a roof and walls, commonly used for dwelling, entertaining, or working. */
	'Building': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Building', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Building' } as NamedNode,
	/** Any combination of descriptions of things offered together.  Could be a kit (several parts offered together), but could also be a product plus a warranty. */
	'BundledCatalogItem': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/BundledCatalogItem', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/BundledCatalogItem' } as NamedNode,
	/** A description of a product or service to be delivered, given in a sufficient level of detail that a receiver could determine whether delivery constituted discharge of the obligation to deliver. */
	'CatalogItem': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CatalogItem', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CatalogItem' } as NamedNode,
	/** A concept or label used to categorize other instances informally. Things that can be thought of as types are usually Categories. */
	'Category': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Category', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Category' } as NamedNode,
	/** A product unit both of whose factors are coherent units. The conversion factor is 1. */
	'CoherentProductUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentProductUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentProductUnit' } as NamedNode,
	/** A ratio unit whose conversion factor is 1. */
	'CoherentRatioUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentRatioUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentRatioUnit' } as NamedNode,
	/** A unit that is expressed in units that have no conversions.  It may be a simple unit.  It may also be a product or ratio unit that bottoms out in simple units. */
	'CoherentUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CoherentUnit' } as NamedNode,
	/** A grouping of things. */
	'Collection': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Collection', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Collection' } as NamedNode,
	/** An obligation (possibly unilateral). */
	'Commitment': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Commitment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Commitment' } as NamedNode,
	/** A component is an artifact that contributes to a system.  Could be a simple mechanical component, such as the float contributing to the toilet tank maintaining a constant level, or much more complex as in the internet of things. */
	'Component': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Component', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Component' } as NamedNode,
	/** An event that has started but has not yet ended. */
	'ContemporaryEvent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ContemporaryEvent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ContemporaryEvent' } as NamedNode,
	/** A document, program, image, etc.  (Categories are not content until they are written down.) */
	'Content': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Content', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Content' } as NamedNode,
	/** Intellectual Property reduced to text, audio etc.  If it contains text (written or spoken), it may be in a language. */
	'ContentExpression': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ContentExpression', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ContentExpression' } as NamedNode,
	/** An event with a probability of happening in the future, and usually dependent upon some other event or condition. */
	'ContingentEvent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ContingentEvent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ContingentEvent' } as NamedNode,
	/** An obligation that is not yet firm.  There is some contingent event, the occurrence of which will cause the obligation to become firm. */
	'ContingentObligation': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ContingentObligation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ContingentObligation' } as NamedNode,
	/** An Agreement which can be enforced by law */
	'Contract': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Contract', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Contract' } as NamedNode,
	/** A specification of some aspect of a contract. */
	'ContractTerm': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ContractTerm', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ContractTerm' } as NamedNode,
	/** A collection of terms approved and managed by some organization or person. */
	'ControlledVocabulary': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ControlledVocabulary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ControlledVocabulary' } as NamedNode,
	/** A device that takes messages or signals from a sensor and decides through algorithms whether and which actuator to fire via messages */
	'Controller': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Controller', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Controller' } as NamedNode,
	/** A kind of controller. */
	'ControllerType': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ControllerType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ControllerType' } as NamedNode,
	/** A measure that involves countable amounts (?eaches? as well as cases, etc.). Can be decimal. */
	'Count': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Count', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Count' } as NamedNode,
	/** A unit of counting, especially ?each?, but also units such as dozens. */
	'CountingUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CountingUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CountingUnit' } as NamedNode,
	/** A defined geographical area (or areas) governed by exactly one country government. */
	'CountryGeoRegion': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CountryGeoRegion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CountryGeoRegion' } as NamedNode,
	/** A Government Organization which asserts both sovereignty (i.e., it is not governed by some other government organization) and governance over an entity generally recognized as a 'country'. */
	'CountryGovernment': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CountryGovernment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CountryGovernment' } as NamedNode,
	/** A unit for measuring a monetary amount over a period of time, such as dollars/hour or euros/month. */
	'CurrencyPerDurationUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CurrencyPerDurationUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CurrencyPerDurationUnit' } as NamedNode,
	/** A unit of money. Note: this is the only unit whose conversion factors include time (i.e., the conversion rates change on a daily basis). */
	'CurrencyUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/CurrencyUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/CurrencyUnit' } as NamedNode,
	/** A unit to measure amounts of digital information. */
	'DataSizeUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/DataSizeUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/DataSizeUnit' } as NamedNode,
	/** The difficulty of reversing a commitment. */
	'DegreeOfCommitment': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/DegreeOfCommitment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/DegreeOfCommitment' } as NamedNode,
	/** A unit to measure linear distance, such as feet or kilometers. */
	'DistanceUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/DistanceUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/DistanceUnit' } as NamedNode,
	/** Time, but not on a timeline. */
	'Duration': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Duration', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Duration' } as NamedNode,
	/** A unit to measure passage of time: hours, days, years. */
	'DurationUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/DurationUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/DurationUnit' } as NamedNode,
	/** A flow of electric charge. */
	'ElectricCurrent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ElectricCurrent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ElectricCurrent' } as NamedNode,
	/** Unit of electrical current, which is charge per unit time.  The SI unit is the ampere.  (Note that electrical current is a composed unit.) */
	'ElectricalCurrentUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ElectricalCurrentUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ElectricalCurrentUnit' } as NamedNode,
	/** Any place an electronic message (email, fax, etc.) can be sent. */
	'ElectronicMessageAddress': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ElectronicMessageAddress', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ElectronicMessageAddress' } as NamedNode,
	/** An email address is a unique identifier for an email account. It is used to both send and receive email messages over the Internet. */
	'EmailAddress': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/EmailAddress', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/EmailAddress' } as NamedNode,
	/** Tangible property other than land or buildings.  Any kind of equipment, could be machine, router, car etc. */
	'Equipment': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Equipment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Equipment' } as NamedNode,
	/** Categories of equipment */
	'EquipmentType': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/EquipmentType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/EquipmentType' } as NamedNode,
	/** Something that occurs over a period of time, often characterized as an activity being carried out by some person, organization, or software application or brought about by natural forces. */
	'Event': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Event', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Event' } as NamedNode,
	/** A measure of distance, which could be distances over the Earth, and could also be height, width, length, depth, girth, etc. */
	'Extent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Extent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Extent' } as NamedNode,
	/** Content which is in a particular format. (E.g., HTML, PDF, JPG.) */
	'FormattedContent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/FormattedContent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/FormattedContent' } as NamedNode,
	/** A function is what a specific made item is intended to do.  For instance: transmit electricity, provide ballast, control ambient temperature. */
	'Function': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Function', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Function' } as NamedNode,
	/** The real-world media type for content. */
	'GeneralMediaType': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GeneralMediaType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GeneralMediaType' } as NamedNode,
	/** An individual point on the Earth's surface, identified by latitude, longitude and altitude. If altitude is missing, it is assumed to be at the Earth's surface.  However, altitude is measured from sea level.  these points are to the WGS-84 coordinate system using the GPS decimal lat/long */
	'GeoPoint': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GeoPoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GeoPoint' } as NamedNode,
	/** A bounded region (or set of regions) on the surface of the Earth. */
	'GeoRegion': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GeoRegion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GeoRegion' } as NamedNode,
	/** An ordered set of GeoPoints that defines a path from starting point to ending point. */
	'GeoRoute': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GeoRoute', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GeoRoute' } as NamedNode,
	/** A single portion of a GeoRegion which has been divided (i.e., segmented). */
	'GeoSegment': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GeoSegment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GeoSegment' } as NamedNode,
	/** A three-dimensional space on or near the surface of the Earth, such as an oil reservoir, the body of a lake, or an airspace. */
	'GeoVolume': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GeoVolume', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GeoVolume' } as NamedNode,
	/** A specific intentional endpoint.  One can tell whether it has been achieved, as opposed to an intention, which may not have an evaluation function. */
	'Goal': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Goal', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Goal' } as NamedNode,
	/** A defined geographic area or areas governed by at least one government organization. */
	'GovernedGeoRegion': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GovernedGeoRegion', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GovernedGeoRegion' } as NamedNode,
	/** An organization which exercises political and/or regulatory authority over a political unit, people, geo-region, etc., as well as performing certain functions for this unit or body. Differs from a corporation in that it cannot be owned. */
	'GovernmentOrganization': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/GovernmentOrganization', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/GovernmentOrganization' } as NamedNode,
	/** An event which occurred in time, with an actual end earlier than the present moment. */
	'HistoricalEvent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/HistoricalEvent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/HistoricalEvent' } as NamedNode,
	/** Content that is used to uniquely identify something or someone. */
	'ID': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ID', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ID' } as NamedNode,
	/** An amount of data, such as 6 petabytes, or 640KB. */
	'InformationQuantity': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/InformationQuantity', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/InformationQuantity' } as NamedNode,
	/** A work, invention or concept, independent of its being expressed in text, audio, video, image, or live performance.  IP can also be tacit knowledge, know-how, or skill. Also includes Brands. */
	'IntellectualProperty': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/IntellectualProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/IntellectualProperty' } as NamedNode,
	/** Goal, desire, aspiration. This is the "teleologic" aspect of the system that indicates things are done with a purpose. */
	'Intention': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Intention', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Intention' } as NamedNode,
	/** An organization whose members are government organizations. This can comprise regional, municipal, state/province, or national level entities. */
	'IntergovernmentalOrganization': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/IntergovernmentalOrganization', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/IntergovernmentalOrganization' } as NamedNode,
	/** Something permanently attached to the Earth. */
	'Landmark': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Landmark', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Landmark' } as NamedNode,
	/** A recognized, organized set of symbols and grammar. */
	'Language': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Language', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Language' } as NamedNode,
	/** Something that is currently, or at some point in time was, alive. */
	'LivingThing': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/LivingThing', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/LivingThing' } as NamedNode,
	/** A measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle.  This is based on the luminosity function, a standardized model of the sensitivity of the human eye. */
	'LuminousIntensity': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensity', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensity' } as NamedNode,
	/** The measure of brightness. The SI unit is the candela. */
	'LuminousIntensityUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensityUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensityUnit' } as NamedNode,
	/** Base class for units which can be converted.  The primitive units can be converted from one measurement system to another; the complex units (ratio or product) have to decompose to their primitives. */
	'Magnitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Magnitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Magnitude' } as NamedNode,
	/** Magnitude of mass. */
	'Mass': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Mass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Mass' } as NamedNode,
	/** A unit representing the amount of matter in a particle or object.  The SI unit of mass is the kilogram. */
	'MassUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/MassUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/MassUnit' } as NamedNode,
	/** A digitized type that computer applications can recognize. */
	'MediaType': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/MediaType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/MediaType' } as NamedNode,
	/** A physicality on which a work could be implemented or exposed. E.g., paper, clay, or a computer monitor. */
	'Medium': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Medium', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Medium' } as NamedNode,
	/** A specific instance of content sent from an Organization or Person to at least one other Organization or Person. */
	'Message': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Message', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Message' } as NamedNode,
	/** Each pulse from a Sensor is reflected in a message, as well as each instruction to an Actuator */
	'MessageDefinition': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/MessageDefinition', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/MessageDefinition' } as NamedNode,
	/** Amount of a substance, as counted molecules. */
	'MolarQuantity': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/MolarQuantity', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/MolarQuantity' } as NamedNode,
	/** Amount of chemical material.  Measured in Avogadro units (moles) of 6.02 x 10^23 molecules. */
	'MoleUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/MoleUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/MoleUnit' } as NamedNode,
	/** A special type of magnitude, due to the way rounding is handled in math and the temporal aspect of conversion. */
	'Monetary': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Monetary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Monetary' } as NamedNode,
	/** A monetary amount over a period of time. */
	'MonetaryPerDuration': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/MonetaryPerDuration', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/MonetaryPerDuration' } as NamedNode,
	/** A network is a set of nodes connected by links. */
	'Network': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Network', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Network' } as NamedNode,
	/** An abstract representation of the connection between two or more nodes in a network. */
	'NetworkLink': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/NetworkLink', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/NetworkLink' } as NamedNode,
	/** A node in a network. */
	'NetworkNode': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/NetworkNode', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/NetworkNode' } as NamedNode,
	/** A future commitment from one organization or person to another. Contracts are sets of obligations to do or forbear, or to indemnify or warrant. */
	'Obligation': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Obligation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Obligation' } as NamedNode,
	/** A commitment to buy or sell a described or identified part or service. */
	'Offer': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Offer', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Offer' } as NamedNode,
	/** A collection in which the members are sequentially ordered. All members of an OrderedCollection are OrderedMembers. */
	'OrderedCollection': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/OrderedCollection', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/OrderedCollection' } as NamedNode,
	/** A member of an ordered collection serving as a proxy for a real world item, which can appear in different orders in different collections. The ordered member appears in exactly one ordered collection. */
	'OrderedMember': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/OrderedMember', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/OrderedMember' } as NamedNode,
	/** A generic organization that can be formal or informal, legal or non-legal. It can have members, or not. */
	'Organization': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Organization', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Organization' } as NamedNode,
	/** A description of things one is permitted to do. This could be broad, such as free speech, but more often is very specific, such as the right of egress through a particular property. */
	'Permission': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Permission', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Permission' } as NamedNode,
	/** A human being that may or may not still be alive. */
	'Person': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Person', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Person' } as NamedNode,
	/** The things that a sensor can sense, such as light, heat, current, moisture, etc. */
	'PhenomenaType': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/PhenomenaType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/PhenomenaType' } as NamedNode,
	/** The effects to be realized in the real world, such as lifting a garage door, turning off a valve, dropping cadmium rods, etc. */
	'PhysicalActionType': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalActionType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalActionType' } as NamedNode,
	/** An event that can be said to have occurred at some place in space. */
	'PhysicalEvent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalEvent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalEvent' } as NamedNode,
	/** A discrete physical object which, if subdivided, will result in parts that are distinguishable in nature from the whole and in general also from the other parts. */
	'PhysicalIdentifiableItem': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalIdentifiableItem', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalIdentifiableItem' } as NamedNode,
	/** An undifferentiated amount of physical material which, when subdivided, results in each part being indistinguishable in nature from the whole and from every other part. */
	'PhysicalSubstance': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalSubstance', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/PhysicalSubstance' } as NamedNode,
	/** Union of all the geo classes */
	'Place': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Place', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Place' } as NamedNode,
	/** A set of codes the postal authorities can use to deliver physical mail. */
	'PostalAddress': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/PostalAddress', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/PostalAddress' } as NamedNode,
	/** Any of many ways of categorizing products, including models, NATO product codes, and the like. */
	'ProductCategory': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ProductCategory', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ProductCategory' } as NamedNode,
	/** A magnitude expressed as a product of primitives.  (E.g., Force = M*A). */
	'ProductMagnitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ProductMagnitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ProductMagnitude' } as NamedNode,
	/** Offering something which could be physically warehoused or digitally stored. */
	'ProductSpecification': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ProductSpecification', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ProductSpecification' } as NamedNode,
	/** A unit of measure that is the product of two simpler ones. */
	'ProductUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ProductUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ProductUnit' } as NamedNode,
	/** A task, usually of longer duration, made up of other tasks. */
	'Project': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Project', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Project' } as NamedNode,
	/** This is a number whose unit of measure is a ratio. */
	'RatioMagnitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/RatioMagnitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/RatioMagnitude' } as NamedNode,
	/** A UnitOfMeasure composed of a numerator unit and a denominator unit. */
	'RatioUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/RatioUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/RatioUnit' } as NamedNode,
	/** A measure that was neither measured nor estimated but set by fiat. For instance, a goal. There is no Measurement associated with a ReferenceValue. */
	'ReferenceValue': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ReferenceValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ReferenceValue' } as NamedNode,
	/** Content which has been expressed, either to print, or through speakers, or on a monitor. */
	'RenderedContent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/RenderedContent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/RenderedContent' } as NamedNode,
	/** A documented physical or functional need that a particular design, product, or process must be able to perform.  Alternately, the obligation of a person or organization to behave in a certain way (i.e., drive on the right side of the road). */
	'Requirement': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Requirement', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Requirement' } as NamedNode,
	/** A description of things one is prevented from doing.  Most laws are restrictions. */
	'Restriction': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Restriction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Restriction' } as NamedNode,
	/** An event with a planned start datetime. */
	'ScheduledEvent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ScheduledEvent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ScheduledEvent' } as NamedNode,
	/** A task with a planned start datetime. */
	'ScheduledTask': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ScheduledTask', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ScheduledTask' } as NamedNode,
	/** Superclass for all types of metadata, including owl concepts (such as class) and relational (tables, elements) and tool related (queries, R2RML maps etc etc) */
	'SchemaMetaData': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/SchemaMetaData', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/SchemaMetaData' } as NamedNode,
	/** A device that can detect something and report it. Light sensors, temperature sensors, */
	'Sensor': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Sensor', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Sensor' } as NamedNode,
	/** A description of something that can be done for a person or organization (which produces some form of an act). */
	'ServiceSpecification': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/ServiceSpecification', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/ServiceSpecification' } as NamedNode,
	/** Each simple unit has a base unit and a conversion factor to the base. The bases are from the System International (SI). The conversion factor is the number which one multiplies a Unit by to get to base, or divides by to get from base.  E.g., the conversionFactor for inch is 0.0254 to get to the base unit (meter). */
	'SimpleUnitOfMeasure': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/SimpleUnitOfMeasure', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/SimpleUnitOfMeasure' } as NamedNode,
	/** A set of requirements to be satisfied by a material, design, product, or service. */
	'Specification': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Specification', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Specification' } as NamedNode,
	/** An address which references a fixed location in the physical world. */
	'StreetAddress': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/StreetAddress', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/StreetAddress' } as NamedNode,
	/** A government of a governed geo-region other than a country, which is under the direct or indirect control of a country government. */
	'SubCountryGovernment': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/SubCountryGovernment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/SubCountryGovernment' } as NamedNode,
	/** A system is an artifact with component parts where the parts contribute to the goal of the system */
	'System': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/System', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/System' } as NamedNode,
	/** This is for folksonomy type terms, which can be made up on the fly by users. */
	'Tag': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Tag', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Tag' } as NamedNode,
	/** A piece of work that is either proposed, planned, scheduled, underway, or completed. */
	'Task': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Task', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Task' } as NamedNode,
	/** An outline of a task of a particular type, which is the basis for executing such tasks. */
	'TaskTemplate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/TaskTemplate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/TaskTemplate' } as NamedNode,
	/** A controlled vocabulary arranged as a hierarchy of concepts. */
	'Taxonomy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Taxonomy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Taxonomy' } as NamedNode,
	/** A numeric code a telephonic device uses for contacting another telephonic device. */
	'TelephoneNumber': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/TelephoneNumber', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/TelephoneNumber' } as NamedNode,
	/** The degree or intensity of heat present in a substance or object, especially as expressed according to a comparative scale. */
	'Temperature': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Temperature', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Temperature' } as NamedNode,
	/** Unit of measurement for expressing temperature.  Per SI, the base of temperature is in Kelvin, to allow for all units to be expressed relative to a real (in this case absolute) zero. */
	'TemperatureUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/TemperatureUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/TemperatureUnit' } as NamedNode,
	/** Something used to make objects in its own image. */
	'Template': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Template', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Template' } as NamedNode,
	/** A relationship existing for a period of time. */
	'TemporalRelation': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/TemporalRelation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/TemporalRelation' } as NamedNode,
	/** Content expressed as words and numbers (not graphics). */
	'Text': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Text', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Text' } as NamedNode,
	/** A span of time with a known start time, end time, and duration. As long as two of the three are known, the third can be inferred. */
	'TimeInterval': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/TimeInterval', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/TimeInterval' } as NamedNode,
	/** An event which has an effect on at least one accumulator. */
	'Transaction': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Transaction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Transaction' } as NamedNode,
	/** Standard unit by which we measure things */
	'UnitOfMeasure': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/UnitOfMeasure', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/UnitOfMeasure' } as NamedNode,
	/** Three-dimensional space, or equivalent fluid measurement. */
	'Volume': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/Volume', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/Volume' } as NamedNode,
	/** Units of three-dimensional space, expressed here as an area times a distance. */
	'VolumeUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/VolumeUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/VolumeUnit' } as NamedNode,
	'_PrefixDeclaration_gist': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_PrefixDeclaration_gist', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_PrefixDeclaration_gist' } as NamedNode,
	/** The base unit for currency. */
	'_USDollar': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_USDollar', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_USDollar' } as NamedNode,
	/** The base unit for electrical current. */
	'_ampere': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_ampere', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_ampere' } as NamedNode,
	/** The base unit for measuring digital information. */
	'_bit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_bit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_bit' } as NamedNode,
	/** The base unit for luminous intensity. */
	'_candela': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_candela', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_candela' } as NamedNode,
	/** A duration unit that is 24 hours long. */
	'_day': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_day', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_day' } as NamedNode,
	/** The base unit for count magnitudes. */
	'_each': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_each', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_each' } as NamedNode,
	/** The base unit for measuring temperature. */
	'_kelvin': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_kelvin', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_kelvin' } as NamedNode,
	/** The base unit for measuring mass. */
	'_kilogram': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_kilogram', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_kilogram' } as NamedNode,
	/** The base unit for measuring distance. */
	'_meter': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_meter', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_meter' } as NamedNode,
	/** A unit equal to a thousandth of a second. */
	'_millisecond': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_millisecond', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_millisecond' } as NamedNode,
	/** A unit equal to 60 seconds. */
	'_minute': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_minute', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_minute' } as NamedNode,
	/** The base unit for measuring molar quantities. */
	'_mole': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_mole', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_mole' } as NamedNode,
	/** The unit designating a quantity that is the ratio of two quantities with the same unit of measure and which has been multiplied by 100. */
	'_percent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_percent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_percent' } as NamedNode,
	/** The base unit for measuring durations. */
	'_second': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/_second', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/_second' } as NamedNode,
	/** The types of input messages that will be allowed. */
	'accepts': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/accepts', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/accepts' } as NamedNode,
	/** The actual date that something ended, with precision of one day. */
	'actualEndDate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndDate' } as NamedNode,
	/** The actual date and time that something ended, with no implied precision. */
	'actualEndDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndDateTime' } as NamedNode,
	/** The actual time that something ended, expressed as a system time used for timestamps. */
	'actualEndMicrosecond': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndMicrosecond', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndMicrosecond' } as NamedNode,
	/** The actual date and time that something ended, with precision of one minute. */
	'actualEndMinute': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndMinute', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndMinute' } as NamedNode,
	/** The actual date that something ended, with precision of one year. */
	'actualEndYear': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndYear', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualEndYear' } as NamedNode,
	/** The actual date that something started, with precision of one day. */
	'actualStartDate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartDate' } as NamedNode,
	/** The actual date and time that something started, with no implied precision. */
	'actualStartDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartDateTime' } as NamedNode,
	/** The actual time that something started, expressed as a system time used for timestamps. */
	'actualStartMicrosecond': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartMicrosecond', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartMicrosecond' } as NamedNode,
	/** The actual date and time that something started, with precision of one minute. */
	'actualStartMinute': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartMinute', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartMinute' } as NamedNode,
	/** The actual date that something started, with precision of one year. */
	'actualStartYear': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartYear', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/actualStartYear' } as NamedNode,
	/** The intention (say a grant) allows a particular kind of activity (for instance egress) */
	'allows': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/allows', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/allows' } as NamedNode,
	/** The date and time at which something did or will occur, with variants for precision, start and end, and actual vs. planned. */
	'atDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/atDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/atDateTime' } as NamedNode,
	/** The date some living thing was or will be born, with precision of one day. */
	'birthDate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/birthDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/birthDate' } as NamedNode,
	/** The party that is the source of something (e.g. a message, shipment, etc.) */
	'comesFromAgent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/comesFromAgent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/comesFromAgent' } as NamedNode,
	/** Origin */
	'comesFromPlace': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/comesFromPlace', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/comesFromPlace' } as NamedNode,
	/** The subject conforms to the Object, e.g. meet an obligation, meet terms of an offer, adhere to a specification */
	'conformsTo': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/conformsTo', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/conformsTo' } as NamedNode,
	/** Links to the string corresponding to Text */
	'containedText': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/containedText', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/containedText' } as NamedNode,
	/** The parts of a system contribute to the goal/ function of the whole system */
	'contributesTo': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/contributesTo', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/contributesTo' } as NamedNode,
	/** The conversion factor used to convert a unit to its standard (i.e., coherent) unit (which could be a base unit.) */
	'conversionFactor': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/conversionFactor', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/conversionFactor' } as NamedNode,
	/** Add this number to get to the zero point.  On the Celsius scale, the conversionOffset is -273.15 degrees C. On the Fahrenheit scale it is -459.67 degrees.  Is equal to 0 when the unit has the same zero point as the base unit. e.g. inch, meter. */
	'conversionOffset': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/conversionOffset', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/conversionOffset' } as NamedNode,
	/** The date some living thing died. */
	'deathDate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/deathDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/deathDate' } as NamedNode,
	/** A statement about someone or something's attributes or characteristics. */
	'description': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/description', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/description' } as NamedNode,
	/** The set of actuators that a controller can affect */
	'directs': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/directs', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/directs' } as NamedNode,
	/** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
	'domainIncludes': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/domainIncludes', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/domainIncludes' } as NamedNode,
	/** Links to the string corresponding to EncryptedText */
	'encryptedText': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/encryptedText', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/encryptedText' } as NamedNode,
	/** The date and time that something ended. */
	'endDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/endDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/endDateTime' } as NamedNode,
	/** The party that is the recipient of something (e.g. a message, shipment, etc.) */
	'goesToAgent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/goesToAgent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/goesToAgent' } as NamedNode,
	/** Destination */
	'goesToPlace': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/goesToPlace', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/goesToPlace' } as NamedNode,
	/** Relates the subject to its physical or virtual address. */
	'hasAddress': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasAddress', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasAddress' } as NamedNode,
	/** Distance above sea level */
	'hasAltitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasAltitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasAltitude' } as NamedNode,
	/** Relates a UnitOfMeasure to its BaseUnit.  This indicates what kind of Unit something is. */
	'hasBaseUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasBaseUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasBaseUnit' } as NamedNode,
	/** Relates a living thing to its biological parent. */
	'hasBiologicalParent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasBiologicalParent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasBiologicalParent' } as NamedNode,
	/** Relates a Person or Organization to where they can receive messages, including postal addresses, fax numbers, phone numbers, email, web site, etc. */
	'hasCommunicationAddress': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasCommunicationAddress', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasCommunicationAddress' } as NamedNode,
	/** Relates a RatioUnit such as meters/second to the denominator Unit (e.g. second). */
	'hasDenominator': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasDenominator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasDenominator' } as NamedNode,
	/** The relationship between a whole and a part where the part has independent existence. */
	'hasDirectPart': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasDirectPart', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasDirectPart' } as NamedNode,
	/** The subject category is a subcategory of the object category. This property defines the direct links in a category hierarchy; no intermediate categories can exist between the direct links. */
	'hasDirectSuperCategory': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasDirectSuperCategory', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasDirectSuperCategory' } as NamedNode,
	/** Relates an ordered collection to its first member. */
	'hasFirstMember': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasFirstMember', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasFirstMember' } as NamedNode,
	/** The active party, the one with the obligation or the one initiating the transfer */
	'hasGiver': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasGiver', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasGiver' } as NamedNode,
	/** The reason for doing something */
	'hasGoal': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasGoal', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasGoal' } as NamedNode,
	/** What equipment or person is currently in this node.  Note to create a temporal view make a TemporalRelation for this property */
	'hasIncumbent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasIncumbent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasIncumbent' } as NamedNode,
	/** To have a comparable numeric value. Each magnitude has a unit. */
	'hasMagnitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasMagnitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasMagnitude' } as NamedNode,
	/** Relates a Collection to its member individuals. */
	'hasMember': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasMember', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasMember' } as NamedNode,
	/** Relates a ProductUnit such as square mile to the second of two units multiplied together (e.g. mile). */
	'hasMultiplicand': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplicand', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplicand' } as NamedNode,
	/** Relates a ProductUnit such as square mile to the first of two units multiplied together (e.g. mile) */
	'hasMultiplier': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplier', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplier' } as NamedNode,
	/** Relates a child category to a parent category in an informal (e.g., faceted) hierarchy. */
	'hasNavigationalParent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasNavigationalParent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasNavigationalParent' } as NamedNode,
	/** Relates a RatioUnit such as meter(s)/second to the numerator Unit (e.g. meter). */
	'hasNumerator': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasNumerator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasNumerator' } as NamedNode,
	/** The transitive version of gist:hasDirectPart */
	'hasPart': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasPart', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasPart' } as NamedNode,
	/** Relates something (e.g. an agreement) to things that play a role, or take part or are otherwise involved in some way. */
	'hasParticipant': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasParticipant', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasParticipant' } as NamedNode,
	/** The people or organizations participating in an event, agreement or obligation */
	'hasParty': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasParty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasParty' } as NamedNode,
	/** Where something is located */
	'hasPhysicalLocation': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasPhysicalLocation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasPhysicalLocation' } as NamedNode,
	/** Links a Magnitude to the degree of accuracy of the numeric value.   This allows for fuzzy numbers.  All magnitudes have a precision.  Usually we don't record them.  When we do this, it will be a value whose extent covers 2 standard deviations around the stated magnitude */
	'hasPrecision': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasPrecision', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasPrecision' } as NamedNode,
	/** The recipient */
	'hasRecipient': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasRecipient', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasRecipient' } as NamedNode,
	/** For a complex unit refers to a unit that has all the component parts in SI */
	'hasStandardUnit': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasStandardUnit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasStandardUnit' } as NamedNode,
	/** The subject category is included by, or narrower than, the object category. Everything categorized by the subcategory can be inferred to be categorized by the supercategory. */
	'hasSuperCategory': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasSuperCategory', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasSuperCategory' } as NamedNode,
	/** Relates a subject category to a unique parent category in an informal (e.g., faceted) hierarchy. */
	'hasUniqueNavigationalParent': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueNavigationalParent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueNavigationalParent' } as NamedNode,
	/** Used for taxos that must have single parents */
	'hasUniqueSuperCategory': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueSuperCategory', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueSuperCategory' } as NamedNode,
	/** Which unit of measure you are using. All measures are expressed in some unit of measure, even if we don't know what it is initially. */
	'hasUnitOfMeasure': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasUnitOfMeasure', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasUnitOfMeasure' } as NamedNode,
	/** The area over which the sensor can sense (might be a small geospatial area or a specific wire in a circuit) */
	'hasViableRange': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/hasViableRange', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/hasViableRange' } as NamedNode,
	/** Subject matter of a document. */
	'isAbout': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isAbout', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isAbout' } as NamedNode,
	/** Where the effect came from */
	'isAffectedBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isAffectedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isAffectedBy' } as NamedNode,
	/** Relates the subject to whomever or whatever assigns or distributes it. */
	'isAllocatedBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isAllocatedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isAllocatedBy' } as NamedNode,
	/** What this aspect is referring to */
	'isAspectOf': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isAspectOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isAspectOf' } as NamedNode,
	/** The Object is a foundation for, a starting point for, gave rise to or justifies the Subject */
	'isBasedOn': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isBasedOn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isBasedOn' } as NamedNode,
	/** Points to a taxonomy item or other less formally defined class. */
	'isCategorizedBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isCategorizedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isCategorizedBy' } as NamedNode,
	/** A way to categorize a behavior. */
	'isCharacterizedAs': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isCharacterizedAs', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isCharacterizedAs' } as NamedNode,
	/** A non-owning, non-causal, non-subordinate (i.e., peer-to-peer) relationship. */
	'isConnectedTo': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isConnectedTo', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isConnectedTo' } as NamedNode,
	/** The language something was expressed in */
	'isExpressedIn': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isExpressedIn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isExpressedIn' } as NamedNode,
	/** Relates one place to another place that contains the first. */
	'isGeographicallyContainedIn': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isGeographicallyContainedIn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isGeographicallyContainedIn' } as NamedNode,
	/** A reference from the thing being governed to the governor */
	'isGovernedBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isGovernedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isGovernedBy' } as NamedNode,
	/** This is like a URI: a thing can have more than one ID, but each of the IDs must refer to a unique thing. */
	'isIdentifiedBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isIdentifiedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isIdentifiedBy' } as NamedNode,
	/** Relates something to a substance that it is made up of. */
	'isMadeUpOf': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isMadeUpOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isMadeUpOf' } as NamedNode,
	/** The entity that formally acknowledges the existence of, as the State recognizes the existence of a particular company */
	'isRecognizedBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedBy' } as NamedNode,
	/** The party doing the recognition */
	'isRecognizedDirectlyBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedDirectlyBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedDirectlyBy' } as NamedNode,
	/** Date that something was posted, not necessarily the date it occurred. Must be after the date of occurrence, but could be before or after the planned date. (Unusual, but I could record today that I expected to be paid last week.) */
	'isRecordedAt': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isRecordedAt', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isRecordedAt' } as NamedNode,
	/** What media something was rendered On */
	'isRenderedOn': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isRenderedOn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isRenderedOn' } as NamedNode,
	/** Relates a deprecated term to a term that replaces it, which is either an exact (in the case of simple renaming) or approximate (in the case of renaming and some semantic change) semantic match. */
	'isSupersededBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isSupersededBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isSupersededBy' } as NamedNode,
	/** Relates a contingency, such as an event or obligation, to the event that gives rise to it. */
	'isTriggeredBy': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isTriggeredBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isTriggeredBy' } as NamedNode,
	/** Relates a law, contract, etc., to the system of law or government which has the power, right, or authority to interpret and apply it. */
	'isUnderJurisdictionOf': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/isUnderJurisdictionOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/isUnderJurisdictionOf' } as NamedNode,
	/** Degrees above or below equator */
	'latitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/latitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/latitude' } as NamedNode,
	/** An annotation for providing the licensing on this or derivative ontologies */
	'license': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/license', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/license' } as NamedNode,
	/** Relates a NetworkLink to a NetworkNode that it connects to another node. Used when the connections are undirected, or the direction is not known. */
	'links': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/links', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/links' } as NamedNode,
	/** Relates a NetworkLink to its origin NetworkNode. Unlike the superproperty, this represents a directed connection. */
	'linksFrom': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/linksFrom', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/linksFrom' } as NamedNode,
	/** Relates a NetworkLink to its destination NetworkNode. Unlike the superproperty, this represents a directed connection. */
	'linksTo': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/linksTo', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/linksTo' } as NamedNode,
	/** Degrees from GM */
	'longitude': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/longitude', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/longitude' } as NamedNode,
	/** Relates an individual to (one of) its name(s). */
	'name': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/name', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/name' } as NamedNode,
	/** The actual value of a magnitude. */
	'numericValue': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/numericValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/numericValue' } as NamedNode,
	/** A thing occupies are region */
	'occupiesGeographically': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographically', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographically' } as NamedNode,
	/** To be in a fixed position on the earth */
	'occupiesGeographicallyPermanently': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographicallyPermanently', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographicallyPermanently' } as NamedNode,
	/** The geospatial place where something happened or will happen */
	'occursIn': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/occursIn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/occursIn' } as NamedNode,
	/** Possessing and controlling.  Ultimate form of ownership is the right to destroy.  Long list of potential Range classes */
	'owns': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/owns', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/owns' } as NamedNode,
	/** The date that something is or was planned to end, with precision of one day. */
	'plannedEndDate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDate' } as NamedNode,
	/** The date that something is or was planned to end, with no implied precision. */
	'plannedEndDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDateTime' } as NamedNode,
	/** The date and time that something is or was planned to end, with precision of one minute. */
	'plannedEndMinute': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndMinute', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndMinute' } as NamedNode,
	/** The date that something is or was planned to end, with precision of one year. */
	'plannedEndYear': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndYear', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedEndYear' } as NamedNode,
	/** The date that something is or was planned to start, with precision of one day. */
	'plannedStartDate': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDate' } as NamedNode,
	/** The date and time that something is or was planned to start, with no implied precision. */
	'plannedStartDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDateTime' } as NamedNode,
	/** The date and time that something is or was planned to start, with precision of one minute. */
	'plannedStartMinute': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartMinute', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartMinute' } as NamedNode,
	/** The date that something is or was planned to start, with precision of one year. */
	'plannedStartYear': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartYear', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/plannedStartYear' } as NamedNode,
	/** A generic ordering relation indicating that the subject comes before the object. */
	'precedes': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/precedes', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/precedes' } as NamedNode,
	/** A generic ordering relation indicating that the subject comes immediately before the object. */
	'precedesDirectly': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/precedesDirectly', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/precedesDirectly' } as NamedNode,
	/** The intention (say a law) is intended to prevent this kind of behavior (say jay-walking) */
	'prevents': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/prevents', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/prevents' } as NamedNode,
	/** The subject creates the object. */
	'produces': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/produces', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/produces' } as NamedNode,
	/** Links a member of an ordered collection to the real-world item it represents in that collection. */
	'providesOrderFor': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/providesOrderFor', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/providesOrderFor' } as NamedNode,
	/** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
	'rangeIncludes': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/rangeIncludes', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/rangeIncludes' } as NamedNode,
	/** The subject needs the object or makes it necessary, mandatory, or compulsory. */
	'requires': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/requires', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/requires' } as NamedNode,
	/** The set of sensors that a controller is attached to */
	'respondsTo': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/respondsTo', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/respondsTo' } as NamedNode,
	/** For ordering ordered lists. */
	'sequence': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/sequence', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/sequence' } as NamedNode,
	/** The date and time that something started. */
	'startDateTime': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/startDateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/startDateTime' } as NamedNode,
	/** Used for folksonomy style categories (non controlled vocabulary) */
	'tagText': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/tagText', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/tagText' } as NamedNode,
	/** The unique string value of some content object; i.e., there is no possibility of having more than one value. */
	'uniqueText': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/uniqueText', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/uniqueText' } as NamedNode,
	/** The standard symbol for the unit NOT using any special characters.  E.g. square meter would be m^2 rather than m?. */
	'unitSymbol': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbol', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbol' } as NamedNode,
	/** The standard symbol for the unit in HTML format for  pretty printing, may use special characters.  E.g. to show square meter as  m? rather than m^2, the value of this property would be "m&sup2;" This is for when Unicode not supported and the display will be HTML format. */
	'unitSymbolHtml': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolHtml', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolHtml' } as NamedNode,
	/** The standard symbol for the unit preferred for pretty printing, may use special characters.  E.g. square meter would be  m? rather than m^2. */
	'unitSymbolUnicode': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolUnicode', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolUnicode' } as NamedNode,
	/** gist is a minimalist upper ontology created by Semantic Arts. */
	'gistCore': { termType: 'NamedNode', value: 'https://w3id.org/semanticarts/ontology/gistCore', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/semanticarts/ontology/gistCore' } as NamedNode,
}