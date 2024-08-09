import * as n3 from "n3";

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
export const _gist = new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/');

export const gist = {
	/** An agreement having a balance, as in a bank account, or credit card account, or Accounts Receivable account. */
	'Account': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Account'),
	/** A device that can affect the real world via a message interface */
	'Actuator': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Actuator'),
	/** A reference to a place (real or virtual) that can be located by some routing algorithm, and where messages or things can be sent to or retrieved from. E.g. PO Box or URL to a PDF file. */
	'Address': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Address'),
	/** Something which two or more People or Organizations mutually commit to do. */
	'Agreement': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Agreement'),
	/** A measurement of two-dimensional space. */
	'Area': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Area'),
	/** A unit of two-dimensional area, such as square inches or hectares. */
	'AreaUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/AreaUnit'),
	/** An intentional, person-made thing, which could be physical or content */
	'Artifact': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Artifact'),
	/** A very general term for the characteristic of something that is being measured.  E.g., property (height) or a process (cycle time) or a behavior (loyalty). */
	'Aspect': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Aspect'),
	/** An amount decremented or incremented by a series of transactions. */
	'Balance': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Balance'),
	/** A primitive unit that cannot be decomposed into other units. It can be converted from one measurement system to another.  The base units in gist are the seven primitive units from the System Internationale (SI): (meter, second, kilogram, ampere, kelvin, mole, candela), plus three convenience ones: each. bit and usDollar. */
	'BaseUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/BaseUnit'),
	/** A way of categorizing events.  E.g., differentiating drilling versus cutting. */
	'Behavior': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Behavior'),
	/** A relatively permanent man-made structure situated on a plot of land, having a roof and walls, commonly used for dwelling, entertaining, or working. */
	'Building': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Building'),
	/** Any combination of descriptions of things offered together.  Could be a kit (several parts offered together), but could also be a product plus a warranty. */
	'BundledCatalogItem': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/BundledCatalogItem'),
	/** A description of a product or service to be delivered, given in a sufficient level of detail that a receiver could determine whether delivery constituted discharge of the obligation to deliver. */
	'CatalogItem': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CatalogItem'),
	/** A concept or label used to categorize other instances informally. Things that can be thought of as types are usually Categories. */
	'Category': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Category'),
	/** A product unit both of whose factors are coherent units. The conversion factor is 1. */
	'CoherentProductUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CoherentProductUnit'),
	/** A ratio unit whose conversion factor is 1. */
	'CoherentRatioUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CoherentRatioUnit'),
	/** A unit that is expressed in units that have no conversions.  It may be a simple unit.  It may also be a product or ratio unit that bottoms out in simple units. */
	'CoherentUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CoherentUnit'),
	/** A grouping of things. */
	'Collection': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Collection'),
	/** An obligation (possibly unilateral). */
	'Commitment': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Commitment'),
	/** A component is an artifact that contributes to a system.  Could be a simple mechanical component, such as the float contributing to the toilet tank maintaining a constant level, or much more complex as in the internet of things. */
	'Component': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Component'),
	/** An event that has started but has not yet ended. */
	'ContemporaryEvent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ContemporaryEvent'),
	/** A document, program, image, etc.  (Categories are not content until they are written down.) */
	'Content': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Content'),
	/** Intellectual Property reduced to text, audio etc.  If it contains text (written or spoken), it may be in a language. */
	'ContentExpression': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ContentExpression'),
	/** An event with a probability of happening in the future, and usually dependent upon some other event or condition. */
	'ContingentEvent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ContingentEvent'),
	/** An obligation that is not yet firm.  There is some contingent event, the occurrence of which will cause the obligation to become firm. */
	'ContingentObligation': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ContingentObligation'),
	/** An Agreement which can be enforced by law */
	'Contract': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Contract'),
	/** A specification of some aspect of a contract. */
	'ContractTerm': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ContractTerm'),
	/** A collection of terms approved and managed by some organization or person. */
	'ControlledVocabulary': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ControlledVocabulary'),
	/** A device that takes messages or signals from a sensor and decides through algorithms whether and which actuator to fire via messages */
	'Controller': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Controller'),
	/** A kind of controller. */
	'ControllerType': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ControllerType'),
	/** A measure that involves countable amounts (?eaches? as well as cases, etc.). Can be decimal. */
	'Count': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Count'),
	/** A unit of counting, especially ?each?, but also units such as dozens. */
	'CountingUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CountingUnit'),
	/** A defined geographical area (or areas) governed by exactly one country government. */
	'CountryGeoRegion': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CountryGeoRegion'),
	/** A Government Organization which asserts both sovereignty (i.e., it is not governed by some other government organization) and governance over an entity generally recognized as a 'country'. */
	'CountryGovernment': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CountryGovernment'),
	/** A unit for measuring a monetary amount over a period of time, such as dollars/hour or euros/month. */
	'CurrencyPerDurationUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CurrencyPerDurationUnit'),
	/** A unit of money. Note: this is the only unit whose conversion factors include time (i.e., the conversion rates change on a daily basis). */
	'CurrencyUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/CurrencyUnit'),
	/** A unit to measure amounts of digital information. */
	'DataSizeUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/DataSizeUnit'),
	/** The difficulty of reversing a commitment. */
	'DegreeOfCommitment': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/DegreeOfCommitment'),
	/** A unit to measure linear distance, such as feet or kilometers. */
	'DistanceUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/DistanceUnit'),
	/** Time, but not on a timeline. */
	'Duration': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Duration'),
	/** A unit to measure passage of time: hours, days, years. */
	'DurationUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/DurationUnit'),
	/** A flow of electric charge. */
	'ElectricCurrent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ElectricCurrent'),
	/** Unit of electrical current, which is charge per unit time.  The SI unit is the ampere.  (Note that electrical current is a composed unit.) */
	'ElectricalCurrentUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ElectricalCurrentUnit'),
	/** Any place an electronic message (email, fax, etc.) can be sent. */
	'ElectronicMessageAddress': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ElectronicMessageAddress'),
	/** An email address is a unique identifier for an email account. It is used to both send and receive email messages over the Internet. */
	'EmailAddress': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/EmailAddress'),
	/** Tangible property other than land or buildings.  Any kind of equipment, could be machine, router, car etc. */
	'Equipment': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Equipment'),
	/** Categories of equipment */
	'EquipmentType': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/EquipmentType'),
	/** Something that occurs over a period of time, often characterized as an activity being carried out by some person, organization, or software application or brought about by natural forces. */
	'Event': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Event'),
	/** A measure of distance, which could be distances over the Earth, and could also be height, width, length, depth, girth, etc. */
	'Extent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Extent'),
	/** Content which is in a particular format. (E.g., HTML, PDF, JPG.) */
	'FormattedContent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/FormattedContent'),
	/** A function is what a specific made item is intended to do.  For instance: transmit electricity, provide ballast, control ambient temperature. */
	'Function': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Function'),
	/** The real-world media type for content. */
	'GeneralMediaType': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GeneralMediaType'),
	/** An individual point on the Earth's surface, identified by latitude, longitude and altitude. If altitude is missing, it is assumed to be at the Earth's surface.  However, altitude is measured from sea level.  these points are to the WGS-84 coordinate system using the GPS decimal lat/long */
	'GeoPoint': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GeoPoint'),
	/** A bounded region (or set of regions) on the surface of the Earth. */
	'GeoRegion': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GeoRegion'),
	/** An ordered set of GeoPoints that defines a path from starting point to ending point. */
	'GeoRoute': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GeoRoute'),
	/** A single portion of a GeoRegion which has been divided (i.e., segmented). */
	'GeoSegment': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GeoSegment'),
	/** A three-dimensional space on or near the surface of the Earth, such as an oil reservoir, the body of a lake, or an airspace. */
	'GeoVolume': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GeoVolume'),
	/** A specific intentional endpoint.  One can tell whether it has been achieved, as opposed to an intention, which may not have an evaluation function. */
	'Goal': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Goal'),
	/** A defined geographic area or areas governed by at least one government organization. */
	'GovernedGeoRegion': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GovernedGeoRegion'),
	/** An organization which exercises political and/or regulatory authority over a political unit, people, geo-region, etc., as well as performing certain functions for this unit or body. Differs from a corporation in that it cannot be owned. */
	'GovernmentOrganization': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/GovernmentOrganization'),
	/** An event which occurred in time, with an actual end earlier than the present moment. */
	'HistoricalEvent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/HistoricalEvent'),
	/** Content that is used to uniquely identify something or someone. */
	'ID': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ID'),
	/** An amount of data, such as 6 petabytes, or 640KB. */
	'InformationQuantity': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/InformationQuantity'),
	/** A work, invention or concept, independent of its being expressed in text, audio, video, image, or live performance.  IP can also be tacit knowledge, know-how, or skill. Also includes Brands. */
	'IntellectualProperty': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/IntellectualProperty'),
	/** Goal, desire, aspiration. This is the "teleologic" aspect of the system that indicates things are done with a purpose. */
	'Intention': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Intention'),
	/** An organization whose members are government organizations. This can comprise regional, municipal, state/province, or national level entities. */
	'IntergovernmentalOrganization': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/IntergovernmentalOrganization'),
	/** Something permanently attached to the Earth. */
	'Landmark': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Landmark'),
	/** A recognized, organized set of symbols and grammar. */
	'Language': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Language'),
	/** Something that is currently, or at some point in time was, alive. */
	'LivingThing': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/LivingThing'),
	/** A measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle.  This is based on the luminosity function, a standardized model of the sensitivity of the human eye. */
	'LuminousIntensity': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensity'),
	/** The measure of brightness. The SI unit is the candela. */
	'LuminousIntensityUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/LuminousIntensityUnit'),
	/** Base class for units which can be converted.  The primitive units can be converted from one measurement system to another; the complex units (ratio or product) have to decompose to their primitives. */
	'Magnitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Magnitude'),
	/** Magnitude of mass. */
	'Mass': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Mass'),
	/** A unit representing the amount of matter in a particle or object.  The SI unit of mass is the kilogram. */
	'MassUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/MassUnit'),
	/** A digitized type that computer applications can recognize. */
	'MediaType': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/MediaType'),
	/** A physicality on which a work could be implemented or exposed. E.g., paper, clay, or a computer monitor. */
	'Medium': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Medium'),
	/** A specific instance of content sent from an Organization or Person to at least one other Organization or Person. */
	'Message': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Message'),
	/** Each pulse from a Sensor is reflected in a message, as well as each instruction to an Actuator */
	'MessageDefinition': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/MessageDefinition'),
	/** Amount of a substance, as counted molecules. */
	'MolarQuantity': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/MolarQuantity'),
	/** Amount of chemical material.  Measured in Avogadro units (moles) of 6.02 x 10^23 molecules. */
	'MoleUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/MoleUnit'),
	/** A special type of magnitude, due to the way rounding is handled in math and the temporal aspect of conversion. */
	'Monetary': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Monetary'),
	/** A monetary amount over a period of time. */
	'MonetaryPerDuration': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/MonetaryPerDuration'),
	/** A network is a set of nodes connected by links. */
	'Network': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Network'),
	/** An abstract representation of the connection between two or more nodes in a network. */
	'NetworkLink': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/NetworkLink'),
	/** A node in a network. */
	'NetworkNode': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/NetworkNode'),
	/** A future commitment from one organization or person to another. Contracts are sets of obligations to do or forbear, or to indemnify or warrant. */
	'Obligation': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Obligation'),
	/** A commitment to buy or sell a described or identified part or service. */
	'Offer': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Offer'),
	/** A collection in which the members are sequentially ordered. All members of an OrderedCollection are OrderedMembers. */
	'OrderedCollection': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/OrderedCollection'),
	/** A member of an ordered collection serving as a proxy for a real world item, which can appear in different orders in different collections. The ordered member appears in exactly one ordered collection. */
	'OrderedMember': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/OrderedMember'),
	/** A generic organization that can be formal or informal, legal or non-legal. It can have members, or not. */
	'Organization': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Organization'),
	/** A description of things one is permitted to do. This could be broad, such as free speech, but more often is very specific, such as the right of egress through a particular property. */
	'Permission': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Permission'),
	/** A human being that may or may not still be alive. */
	'Person': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Person'),
	/** The things that a sensor can sense, such as light, heat, current, moisture, etc. */
	'PhenomenaType': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/PhenomenaType'),
	/** The effects to be realized in the real world, such as lifting a garage door, turning off a valve, dropping cadmium rods, etc. */
	'PhysicalActionType': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/PhysicalActionType'),
	/** An event that can be said to have occurred at some place in space. */
	'PhysicalEvent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/PhysicalEvent'),
	/** A discrete physical object which, if subdivided, will result in parts that are distinguishable in nature from the whole and in general also from the other parts. */
	'PhysicalIdentifiableItem': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/PhysicalIdentifiableItem'),
	/** An undifferentiated amount of physical material which, when subdivided, results in each part being indistinguishable in nature from the whole and from every other part. */
	'PhysicalSubstance': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/PhysicalSubstance'),
	/** Union of all the geo classes */
	'Place': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Place'),
	/** A set of codes the postal authorities can use to deliver physical mail. */
	'PostalAddress': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/PostalAddress'),
	/** Any of many ways of categorizing products, including models, NATO product codes, and the like. */
	'ProductCategory': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ProductCategory'),
	/** A magnitude expressed as a product of primitives.  (E.g., Force = M*A). */
	'ProductMagnitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ProductMagnitude'),
	/** Offering something which could be physically warehoused or digitally stored. */
	'ProductSpecification': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ProductSpecification'),
	/** A unit of measure that is the product of two simpler ones. */
	'ProductUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ProductUnit'),
	/** A task, usually of longer duration, made up of other tasks. */
	'Project': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Project'),
	/** This is a number whose unit of measure is a ratio. */
	'RatioMagnitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/RatioMagnitude'),
	/** A UnitOfMeasure composed of a numerator unit and a denominator unit. */
	'RatioUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/RatioUnit'),
	/** A measure that was neither measured nor estimated but set by fiat. For instance, a goal. There is no Measurement associated with a ReferenceValue. */
	'ReferenceValue': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ReferenceValue'),
	/** Content which has been expressed, either to print, or through speakers, or on a monitor. */
	'RenderedContent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/RenderedContent'),
	/** A documented physical or functional need that a particular design, product, or process must be able to perform.  Alternately, the obligation of a person or organization to behave in a certain way (i.e., drive on the right side of the road). */
	'Requirement': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Requirement'),
	/** A description of things one is prevented from doing.  Most laws are restrictions. */
	'Restriction': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Restriction'),
	/** An event with a planned start datetime. */
	'ScheduledEvent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ScheduledEvent'),
	/** A task with a planned start datetime. */
	'ScheduledTask': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ScheduledTask'),
	/** Superclass for all types of metadata, including owl concepts (such as class) and relational (tables, elements) and tool related (queries, R2RML maps etc etc) */
	'SchemaMetaData': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/SchemaMetaData'),
	/** A device that can detect something and report it. Light sensors, temperature sensors, */
	'Sensor': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Sensor'),
	/** A description of something that can be done for a person or organization (which produces some form of an act). */
	'ServiceSpecification': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/ServiceSpecification'),
	/** Each simple unit has a base unit and a conversion factor to the base. The bases are from the System International (SI). The conversion factor is the number which one multiplies a Unit by to get to base, or divides by to get from base.  E.g., the conversionFactor for inch is 0.0254 to get to the base unit (meter). */
	'SimpleUnitOfMeasure': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/SimpleUnitOfMeasure'),
	/** A set of requirements to be satisfied by a material, design, product, or service. */
	'Specification': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Specification'),
	/** An address which references a fixed location in the physical world. */
	'StreetAddress': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/StreetAddress'),
	/** A government of a governed geo-region other than a country, which is under the direct or indirect control of a country government. */
	'SubCountryGovernment': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/SubCountryGovernment'),
	/** A system is an artifact with component parts where the parts contribute to the goal of the system */
	'System': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/System'),
	/** This is for folksonomy type terms, which can be made up on the fly by users. */
	'Tag': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Tag'),
	/** A piece of work that is either proposed, planned, scheduled, underway, or completed. */
	'Task': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Task'),
	/** An outline of a task of a particular type, which is the basis for executing such tasks. */
	'TaskTemplate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/TaskTemplate'),
	/** A controlled vocabulary arranged as a hierarchy of concepts. */
	'Taxonomy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Taxonomy'),
	/** A numeric code a telephonic device uses for contacting another telephonic device. */
	'TelephoneNumber': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/TelephoneNumber'),
	/** The degree or intensity of heat present in a substance or object, especially as expressed according to a comparative scale. */
	'Temperature': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Temperature'),
	/** Unit of measurement for expressing temperature.  Per SI, the base of temperature is in Kelvin, to allow for all units to be expressed relative to a real (in this case absolute) zero. */
	'TemperatureUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/TemperatureUnit'),
	/** Something used to make objects in its own image. */
	'Template': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Template'),
	/** A relationship existing for a period of time. */
	'TemporalRelation': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/TemporalRelation'),
	/** Content expressed as words and numbers (not graphics). */
	'Text': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Text'),
	/** A span of time with a known start time, end time, and duration. As long as two of the three are known, the third can be inferred. */
	'TimeInterval': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/TimeInterval'),
	/** An event which has an effect on at least one accumulator. */
	'Transaction': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Transaction'),
	/** Standard unit by which we measure things */
	'UnitOfMeasure': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/UnitOfMeasure'),
	/** Three-dimensional space, or equivalent fluid measurement. */
	'Volume': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/Volume'),
	/** Units of three-dimensional space, expressed here as an area times a distance. */
	'VolumeUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/VolumeUnit'),
	'_PrefixDeclaration_gist': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_PrefixDeclaration_gist'),
	/** The base unit for currency. */
	'_USDollar': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_USDollar'),
	/** The base unit for electrical current. */
	'_ampere': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_ampere'),
	/** The base unit for measuring digital information. */
	'_bit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_bit'),
	/** The base unit for luminous intensity. */
	'_candela': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_candela'),
	/** A duration unit that is 24 hours long. */
	'_day': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_day'),
	/** The base unit for count magnitudes. */
	'_each': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_each'),
	/** The base unit for measuring temperature. */
	'_kelvin': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_kelvin'),
	/** The base unit for measuring mass. */
	'_kilogram': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_kilogram'),
	/** The base unit for measuring distance. */
	'_meter': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_meter'),
	/** A unit equal to a thousandth of a second. */
	'_millisecond': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_millisecond'),
	/** A unit equal to 60 seconds. */
	'_minute': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_minute'),
	/** The base unit for measuring molar quantities. */
	'_mole': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_mole'),
	/** The unit designating a quantity that is the ratio of two quantities with the same unit of measure and which has been multiplied by 100. */
	'_percent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_percent'),
	/** The base unit for measuring durations. */
	'_second': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/_second'),
	/** The types of input messages that will be allowed. */
	'accepts': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/accepts'),
	/** The actual date that something ended, with precision of one day. */
	'actualEndDate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualEndDate'),
	/** The actual date and time that something ended, with no implied precision. */
	'actualEndDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualEndDateTime'),
	/** The actual time that something ended, expressed as a system time used for timestamps. */
	'actualEndMicrosecond': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualEndMicrosecond'),
	/** The actual date and time that something ended, with precision of one minute. */
	'actualEndMinute': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualEndMinute'),
	/** The actual date that something ended, with precision of one year. */
	'actualEndYear': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualEndYear'),
	/** The actual date that something started, with precision of one day. */
	'actualStartDate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualStartDate'),
	/** The actual date and time that something started, with no implied precision. */
	'actualStartDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualStartDateTime'),
	/** The actual time that something started, expressed as a system time used for timestamps. */
	'actualStartMicrosecond': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualStartMicrosecond'),
	/** The actual date and time that something started, with precision of one minute. */
	'actualStartMinute': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualStartMinute'),
	/** The actual date that something started, with precision of one year. */
	'actualStartYear': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/actualStartYear'),
	/** The intention (say a grant) allows a particular kind of activity (for instance egress) */
	'allows': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/allows'),
	/** The date and time at which something did or will occur, with variants for precision, start and end, and actual vs. planned. */
	'atDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/atDateTime'),
	/** The date some living thing was or will be born, with precision of one day. */
	'birthDate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/birthDate'),
	/** The party that is the source of something (e.g. a message, shipment, etc.) */
	'comesFromAgent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/comesFromAgent'),
	/** Origin */
	'comesFromPlace': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/comesFromPlace'),
	/** The subject conforms to the Object, e.g. meet an obligation, meet terms of an offer, adhere to a specification */
	'conformsTo': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/conformsTo'),
	/** Links to the string corresponding to Text */
	'containedText': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/containedText'),
	/** The parts of a system contribute to the goal/ function of the whole system */
	'contributesTo': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/contributesTo'),
	/** The conversion factor used to convert a unit to its standard (i.e., coherent) unit (which could be a base unit.) */
	'conversionFactor': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/conversionFactor'),
	/** Add this number to get to the zero point.  On the Celsius scale, the conversionOffset is -273.15 degrees C. On the Fahrenheit scale it is -459.67 degrees.  Is equal to 0 when the unit has the same zero point as the base unit. e.g. inch, meter. */
	'conversionOffset': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/conversionOffset'),
	/** The date some living thing died. */
	'deathDate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/deathDate'),
	/** A statement about someone or something's attributes or characteristics. */
	'description': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/description'),
	/** The set of actuators that a controller can affect */
	'directs': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/directs'),
	/** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
	'domainIncludes': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/domainIncludes'),
	/** Links to the string corresponding to EncryptedText */
	'encryptedText': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/encryptedText'),
	/** The date and time that something ended. */
	'endDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/endDateTime'),
	/** The party that is the recipient of something (e.g. a message, shipment, etc.) */
	'goesToAgent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/goesToAgent'),
	/** Destination */
	'goesToPlace': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/goesToPlace'),
	/** Relates the subject to its physical or virtual address. */
	'hasAddress': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasAddress'),
	/** Distance above sea level */
	'hasAltitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasAltitude'),
	/** Relates a UnitOfMeasure to its BaseUnit.  This indicates what kind of Unit something is. */
	'hasBaseUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasBaseUnit'),
	/** Relates a living thing to its biological parent. */
	'hasBiologicalParent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasBiologicalParent'),
	/** Relates a Person or Organization to where they can receive messages, including postal addresses, fax numbers, phone numbers, email, web site, etc. */
	'hasCommunicationAddress': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasCommunicationAddress'),
	/** Relates a RatioUnit such as meters/second to the denominator Unit (e.g. second). */
	'hasDenominator': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasDenominator'),
	/** The relationship between a whole and a part where the part has independent existence. */
	'hasDirectPart': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasDirectPart'),
	/** The subject category is a subcategory of the object category. This property defines the direct links in a category hierarchy; no intermediate categories can exist between the direct links. */
	'hasDirectSuperCategory': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasDirectSuperCategory'),
	/** Relates an ordered collection to its first member. */
	'hasFirstMember': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasFirstMember'),
	/** The active party, the one with the obligation or the one initiating the transfer */
	'hasGiver': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasGiver'),
	/** The reason for doing something */
	'hasGoal': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasGoal'),
	/** What equipment or person is currently in this node.  Note to create a temporal view make a TemporalRelation for this property */
	'hasIncumbent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasIncumbent'),
	/** To have a comparable numeric value. Each magnitude has a unit. */
	'hasMagnitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasMagnitude'),
	/** Relates a Collection to its member individuals. */
	'hasMember': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasMember'),
	/** Relates a ProductUnit such as square mile to the second of two units multiplied together (e.g. mile). */
	'hasMultiplicand': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplicand'),
	/** Relates a ProductUnit such as square mile to the first of two units multiplied together (e.g. mile) */
	'hasMultiplier': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasMultiplier'),
	/** Relates a child category to a parent category in an informal (e.g., faceted) hierarchy. */
	'hasNavigationalParent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasNavigationalParent'),
	/** Relates a RatioUnit such as meter(s)/second to the numerator Unit (e.g. meter). */
	'hasNumerator': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasNumerator'),
	/** The transitive version of gist:hasDirectPart */
	'hasPart': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasPart'),
	/** Relates something (e.g. an agreement) to things that play a role, or take part or are otherwise involved in some way. */
	'hasParticipant': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasParticipant'),
	/** The people or organizations participating in an event, agreement or obligation */
	'hasParty': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasParty'),
	/** Where something is located */
	'hasPhysicalLocation': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasPhysicalLocation'),
	/** Links a Magnitude to the degree of accuracy of the numeric value.   This allows for fuzzy numbers.  All magnitudes have a precision.  Usually we don't record them.  When we do this, it will be a value whose extent covers 2 standard deviations around the stated magnitude */
	'hasPrecision': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasPrecision'),
	/** The recipient */
	'hasRecipient': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasRecipient'),
	/** For a complex unit refers to a unit that has all the component parts in SI */
	'hasStandardUnit': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasStandardUnit'),
	/** The subject category is included by, or narrower than, the object category. Everything categorized by the subcategory can be inferred to be categorized by the supercategory. */
	'hasSuperCategory': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasSuperCategory'),
	/** Relates a subject category to a unique parent category in an informal (e.g., faceted) hierarchy. */
	'hasUniqueNavigationalParent': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueNavigationalParent'),
	/** Used for taxos that must have single parents */
	'hasUniqueSuperCategory': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasUniqueSuperCategory'),
	/** Which unit of measure you are using. All measures are expressed in some unit of measure, even if we don't know what it is initially. */
	'hasUnitOfMeasure': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasUnitOfMeasure'),
	/** The area over which the sensor can sense (might be a small geospatial area or a specific wire in a circuit) */
	'hasViableRange': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/hasViableRange'),
	/** Subject matter of a document. */
	'isAbout': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isAbout'),
	/** Where the effect came from */
	'isAffectedBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isAffectedBy'),
	/** Relates the subject to whomever or whatever assigns or distributes it. */
	'isAllocatedBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isAllocatedBy'),
	/** What this aspect is referring to */
	'isAspectOf': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isAspectOf'),
	/** The Object is a foundation for, a starting point for, gave rise to or justifies the Subject */
	'isBasedOn': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isBasedOn'),
	/** Points to a taxonomy item or other less formally defined class. */
	'isCategorizedBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isCategorizedBy'),
	/** A way to categorize a behavior. */
	'isCharacterizedAs': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isCharacterizedAs'),
	/** A non-owning, non-causal, non-subordinate (i.e., peer-to-peer) relationship. */
	'isConnectedTo': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isConnectedTo'),
	/** The language something was expressed in */
	'isExpressedIn': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isExpressedIn'),
	/** Relates one place to another place that contains the first. */
	'isGeographicallyContainedIn': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isGeographicallyContainedIn'),
	/** A reference from the thing being governed to the governor */
	'isGovernedBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isGovernedBy'),
	/** This is like a URI: a thing can have more than one ID, but each of the IDs must refer to a unique thing. */
	'isIdentifiedBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isIdentifiedBy'),
	/** Relates something to a substance that it is made up of. */
	'isMadeUpOf': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isMadeUpOf'),
	/** The entity that formally acknowledges the existence of, as the State recognizes the existence of a particular company */
	'isRecognizedBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedBy'),
	/** The party doing the recognition */
	'isRecognizedDirectlyBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isRecognizedDirectlyBy'),
	/** Date that something was posted, not necessarily the date it occurred. Must be after the date of occurrence, but could be before or after the planned date. (Unusual, but I could record today that I expected to be paid last week.) */
	'isRecordedAt': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isRecordedAt'),
	/** What media something was rendered On */
	'isRenderedOn': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isRenderedOn'),
	/** Relates a deprecated term to a term that replaces it, which is either an exact (in the case of simple renaming) or approximate (in the case of renaming and some semantic change) semantic match. */
	'isSupersededBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isSupersededBy'),
	/** Relates a contingency, such as an event or obligation, to the event that gives rise to it. */
	'isTriggeredBy': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isTriggeredBy'),
	/** Relates a law, contract, etc., to the system of law or government which has the power, right, or authority to interpret and apply it. */
	'isUnderJurisdictionOf': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/isUnderJurisdictionOf'),
	/** Degrees above or below equator */
	'latitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/latitude'),
	/** An annotation for providing the licensing on this or derivative ontologies */
	'license': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/license'),
	/** Relates a NetworkLink to a NetworkNode that it connects to another node. Used when the connections are undirected, or the direction is not known. */
	'links': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/links'),
	/** Relates a NetworkLink to its origin NetworkNode. Unlike the superproperty, this represents a directed connection. */
	'linksFrom': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/linksFrom'),
	/** Relates a NetworkLink to its destination NetworkNode. Unlike the superproperty, this represents a directed connection. */
	'linksTo': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/linksTo'),
	/** Degrees from GM */
	'longitude': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/longitude'),
	/** Relates an individual to (one of) its name(s). */
	'name': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/name'),
	/** The actual value of a magnitude. */
	'numericValue': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/numericValue'),
	/** A thing occupies are region */
	'occupiesGeographically': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographically'),
	/** To be in a fixed position on the earth */
	'occupiesGeographicallyPermanently': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/occupiesGeographicallyPermanently'),
	/** The geospatial place where something happened or will happen */
	'occursIn': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/occursIn'),
	/** Possessing and controlling.  Ultimate form of ownership is the right to destroy.  Long list of potential Range classes */
	'owns': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/owns'),
	/** The date that something is or was planned to end, with precision of one day. */
	'plannedEndDate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDate'),
	/** The date that something is or was planned to end, with no implied precision. */
	'plannedEndDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedEndDateTime'),
	/** The date and time that something is or was planned to end, with precision of one minute. */
	'plannedEndMinute': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedEndMinute'),
	/** The date that something is or was planned to end, with precision of one year. */
	'plannedEndYear': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedEndYear'),
	/** The date that something is or was planned to start, with precision of one day. */
	'plannedStartDate': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDate'),
	/** The date and time that something is or was planned to start, with no implied precision. */
	'plannedStartDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedStartDateTime'),
	/** The date and time that something is or was planned to start, with precision of one minute. */
	'plannedStartMinute': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedStartMinute'),
	/** The date that something is or was planned to start, with precision of one year. */
	'plannedStartYear': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/plannedStartYear'),
	/** A generic ordering relation indicating that the subject comes before the object. */
	'precedes': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/precedes'),
	/** A generic ordering relation indicating that the subject comes immediately before the object. */
	'precedesDirectly': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/precedesDirectly'),
	/** The intention (say a law) is intended to prevent this kind of behavior (say jay-walking) */
	'prevents': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/prevents'),
	/** The subject creates the object. */
	'produces': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/produces'),
	/** Links a member of an ordered collection to the real-world item it represents in that collection. */
	'providesOrderFor': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/providesOrderFor'),
	/** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
	'rangeIncludes': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/rangeIncludes'),
	/** The subject needs the object or makes it necessary, mandatory, or compulsory. */
	'requires': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/requires'),
	/** The set of sensors that a controller is attached to */
	'respondsTo': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/respondsTo'),
	/** For ordering ordered lists. */
	'sequence': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/sequence'),
	/** The date and time that something started. */
	'startDateTime': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/startDateTime'),
	/** Used for folksonomy style categories (non controlled vocabulary) */
	'tagText': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/tagText'),
	/** The unique string value of some content object; i.e., there is no possibility of having more than one value. */
	'uniqueText': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/uniqueText'),
	/** The standard symbol for the unit NOT using any special characters.  E.g. square meter would be m^2 rather than m?. */
	'unitSymbol': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/unitSymbol'),
	/** The standard symbol for the unit in HTML format for  pretty printing, may use special characters.  E.g. to show square meter as  m? rather than m^2, the value of this property would be "m&sup2;" This is for when Unicode not supported and the display will be HTML format. */
	'unitSymbolHtml': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolHtml'),
	/** The standard symbol for the unit preferred for pretty printing, may use special characters.  E.g. square meter would be  m? rather than m^2. */
	'unitSymbolUnicode': new n3.NamedNode('https://w3id.org/semanticarts/ns/ontology/gist/unitSymbolUnicode'),
	/** gist is a minimalist upper ontology created by Semantic Arts. */
	'gistCore': new n3.NamedNode('https://w3id.org/semanticarts/ontology/gistCore'),
}