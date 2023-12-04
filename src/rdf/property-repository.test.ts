import { GIST, SCHEMA } from "./test/ontologies";
import { OWL, RDFS, SKOS, XSD } from "../ontologies";
import { StoreFactory } from "./store-factory"
import { PropertyRepository } from "./property-repository";
import { OwlReasoner } from "./reasoning/owl-reasoner";

describe("PropertyRepository", () => {

    let gist: PropertyRepository;

    let owl: PropertyRepository;

    let schema: PropertyRepository;

    let skos: PropertyRepository;

    beforeAll(async () => {
        const reasoner = new OwlReasoner();
        
        let store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl', { reasoner });

        gist = new PropertyRepository(store);

        store = await StoreFactory.createFromFile('src/rdf/test/schema.ttl', { reasoner });

        schema = new PropertyRepository(store);

        store = await StoreFactory.createFromFile('src/rdf/test/w3c/owl.ttl', { reasoner });

        owl = new PropertyRepository(store);

        store = await StoreFactory.createFromFile('src/rdf/test/w3c/skos.ttl', { reasoner });

        skos = new PropertyRepository(store);
    });

    it('can retrieve property nodes', async () => {
        let expected = [
            GIST.accepts,
            GIST.actualEndDate,
            GIST.actualEndDateTime,
            GIST.actualEndMicrosecond,
            GIST.actualEndMinute,
            GIST.actualEndYear,
            GIST.actualStartDate,
            GIST.actualStartDateTime,
            GIST.actualStartMicrosecond,
            GIST.actualStartMinute,
            GIST.actualStartYear,
            GIST.allows,
            GIST.atDateTime,
            GIST.birthDate,
            GIST.comesFromAgent,
            GIST.comesFromPlace,
            GIST.conformsTo,
            GIST.containedText,
            GIST.contributesTo,
            GIST.conversionFactor,
            GIST.conversionOffset,
            GIST.deathDate,
            GIST.description,
            GIST.directs,
            GIST.domainIncludes,
            GIST.encryptedText,
            GIST.endDateTime,
            GIST.goesToAgent,
            GIST.goesToPlace,
            GIST.hasAddress,
            GIST.hasAltitude,
            GIST.hasBaseUnit,
            GIST.hasBiologicalParent,
            GIST.hasCommunicationAddress,
            GIST.hasDenominator,
            GIST.hasDirectPart,
            GIST.hasDirectSuperCategory,
            GIST.hasFirstMember,
            GIST.hasGiver,
            GIST.hasGoal,
            GIST.hasIncumbent,
            GIST.hasMagnitude,
            GIST.hasMember,
            GIST.hasMultiplicand,
            GIST.hasMultiplier,
            GIST.hasNavigationalParent,
            GIST.hasNumerator,
            GIST.hasPart,
            GIST.hasParticipant,
            GIST.hasParty,
            GIST.hasPhysicalLocation,
            GIST.hasPrecision,
            GIST.hasRecipient,
            GIST.hasStandardUnit,
            GIST.hasSuperCategory,
            GIST.hasUniqueNavigationalParent,
            GIST.hasUniqueSuperCategory,
            GIST.hasUnitOfMeasure,
            GIST.hasViableRange,
            GIST.isAbout,
            GIST.isAffectedBy,
            GIST.isAllocatedBy,
            GIST.isAspectOf,
            GIST.isBasedOn,
            GIST.isCategorizedBy,
            GIST.isCharacterizedAs,
            GIST.isConnectedTo,
            GIST.isExpressedIn,
            GIST.isGeographicallyContainedIn,
            GIST.isGovernedBy,
            GIST.isIdentifiedBy,
            GIST.isMadeUpOf,
            GIST.isRecognizedBy,
            GIST.isRecognizedDirectlyBy,
            GIST.isRecordedAt,
            GIST.isRenderedOn,
            GIST.isSupersededBy,
            GIST.isTriggeredBy,
            GIST.isUnderJurisdictionOf,
            GIST.latitude,
            GIST.license,
            GIST.links,
            GIST.linksFrom,
            GIST.linksTo,
            GIST.longitude,
            GIST.name,
            GIST.numericValue,
            GIST.occupiesGeographically,
            GIST.occupiesGeographicallyPermanently,
            GIST.occursIn,
            GIST.owns,
            GIST.plannedEndDate,
            GIST.plannedEndDateTime,
            GIST.plannedEndMinute,
            GIST.plannedEndYear,
            GIST.plannedStartDate,
            GIST.plannedStartDateTime,
            GIST.plannedStartMinute,
            GIST.plannedStartYear,
            GIST.precedes,
            GIST.precedesDirectly,
            GIST.prevents,
            GIST.produces,
            GIST.providesOrderFor,
            GIST.rangeIncludes,
            GIST.requires,
            GIST.respondsTo,
            GIST.sequence,
            GIST.startDateTime,
            GIST.tagText,
            GIST.uniqueText,
            GIST.unitSymbol,
            GIST.unitSymbolHtml,
            GIST.unitSymbolUnicode
        ].sort();
        let actual = gist.getProperties().sort();

        expect(actual).toEqual(expected);

        actual = owl.getProperties().sort();
        expected = [
            OWL.allValuesFrom,
            OWL.annotatedProperty,
            OWL.annotatedSource,
            OWL.annotatedTarget,
            OWL.assertionProperty,
            OWL.backwardCompatibleWith,
            OWL.bottomDataProperty,
            OWL.bottomObjectProperty,
            OWL.cardinality,
            OWL.complementOf,
            OWL.datatypeComplementOf,
            OWL.deprecated,
            OWL.differentFrom,
            OWL.disjointUnionOf,
            OWL.disjointWith,
            OWL.distinctMembers,
            OWL.equivalentClass,
            OWL.equivalentProperty,
            OWL.hasKey,
            OWL.hasSelf,
            OWL.hasValue,
            OWL.imports,
            OWL.incompatibleWith,
            OWL.intersectionOf,
            OWL.inverseOf,
            OWL.maxCardinality,
            OWL.maxQualifiedCardinality,
            OWL.members,
            OWL.minCardinality,
            OWL.minQualifiedCardinality,
            OWL.onClass,
            OWL.onDataRange,
            OWL.onDatatype,
            OWL.oneOf,
            OWL.onProperties,
            OWL.onProperty,
            OWL.priorVersion,
            OWL.propertyChainAxiom,
            OWL.propertyDisjointWith,
            OWL.qualifiedCardinality,
            OWL.sameAs,
            OWL.someValuesFrom,
            OWL.sourceIndividual,
            OWL.targetIndividual,
            OWL.targetValue,
            OWL.topDataProperty,
            OWL.topObjectProperty,
            OWL.unionOf,
            OWL.versionInfo,
            OWL.versionIRI,
            OWL.withRestrictions
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve super property nodes', async () => {
        let expected = [GIST.actualEndDateTime];
        let actual = gist.getSuperProperties(GIST.actualEndDate);

        expect(actual).toEqual(expected);
    });

    it('can retrieve sub property nodes', async () => {
        let actual = gist.getSubProperties(GIST.actualEndDateTime).sort();
        let expected = [
            GIST.actualEndDate,
            GIST.actualEndMicrosecond,
            GIST.actualEndMinute,
            GIST.actualEndYear
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve root property nodes', async () => {
        let expected = [
            SKOS.scopeNote,
            GIST.accepts,
            GIST.allows,
            GIST.atDateTime,
            GIST.comesFromPlace,
            GIST.conformsTo,
            GIST.containedText,
            GIST.contributesTo,
            GIST.conversionFactor,
            GIST.conversionOffset,
            GIST.description,
            GIST.directs,
            GIST.goesToPlace,
            GIST.hasAddress,
            GIST.hasAltitude,
            GIST.hasBiologicalParent,
            GIST.hasDenominator,
            GIST.hasGoal,
            GIST.hasIncumbent,
            GIST.hasMagnitude,
            GIST.hasMember,
            GIST.hasMultiplicand,
            GIST.hasMultiplier,
            GIST.hasNavigationalParent,
            GIST.hasNumerator,
            GIST.hasPart,
            GIST.hasParticipant,
            GIST.hasPhysicalLocation,
            GIST.hasPrecision,
            GIST.hasStandardUnit,
            GIST.hasSuperCategory,
            GIST.hasUnitOfMeasure,
            GIST.hasViableRange,
            GIST.isAbout,
            GIST.isAffectedBy,
            GIST.isAllocatedBy,
            GIST.isAspectOf,
            GIST.isBasedOn,
            GIST.isCategorizedBy,
            GIST.isCharacterizedAs,
            GIST.isConnectedTo,
            GIST.isExpressedIn,
            GIST.isGeographicallyContainedIn,
            GIST.isGovernedBy,
            GIST.isIdentifiedBy,
            GIST.isMadeUpOf,
            GIST.isRecognizedBy,
            GIST.isRenderedOn,
            GIST.isSupersededBy,
            GIST.isTriggeredBy,
            GIST.isUnderJurisdictionOf,
            GIST.latitude,
            GIST.license,
            GIST.links,
            GIST.longitude,
            GIST.name,
            GIST.numericValue,
            GIST.occupiesGeographically,
            GIST.occursIn,
            GIST.owns,
            GIST.precedes,
            GIST.prevents,
            GIST.produces,
            GIST.providesOrderFor,
            GIST.requires,
            GIST.respondsTo,
            GIST.sequence,
            GIST.tagText,
            GIST.uniqueText,
            GIST.unitSymbol,
            GIST.unitSymbolHtml,
            GIST.unitSymbolUnicode,
        ];
        let actual = gist.getRootProperties().sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve root property path', async () => {
        let expected = [GIST.actualEndDateTime, GIST.endDateTime, GIST.atDateTime];
        let actual = gist.getRootPropertiesPath(GIST.actualEndDate);

        expect(actual).toEqual(expected);
    });

    it('can indicate if sub properties exist for a given property', async () => {
        let expected = true;
        let actual = gist.hasSubProperties(GIST.atDateTime);

        expect(actual).toEqual(expected);

        expected = false;
        actual = gist.hasSubProperties(GIST.allows);

        expect(actual).toEqual(expected);
    });

    it("can indicate if a property has an equivalent property", async () => {
        let expected = false;
        let actual = gist.hasEquivalentProperty(GIST.accepts);

        expect(actual).toEqual(expected);

        expected = true;
        actual = schema.hasEquivalentProperty(SCHEMA.isbn);

        expect(actual).toEqual(expected);

        expected = true;
        actual = schema.hasEquivalentProperty("http://purl.org/ontology/bibo/isbn");

        expect(actual).toEqual(expected);
    });

    it("can retrieve the domain of a property", async () => {
        let expected = RDFS.Resource;
        let actual = gist.getDomain(GIST.accepts);

        expect(actual).toEqual(expected);

        expected = GIST.Intention;
        actual = gist.getDomain(GIST.allows);

        expect(actual).toEqual(expected);
    });

    it("can retrieve the range of a property", async () => {
        let expected = RDFS.Resource;
        let actual = gist.getRange(GIST.accepts);

        expect(actual).toEqual(expected);

        expected = XSD.dateTime;
        actual = gist.getRange(GIST.atDateTime);

        expect(actual).toEqual(expected);

        expected = RDFS.Resource;
        actual = skos.getRange(SKOS.closeMatch);

        expect(actual).toEqual(expected);
    });
});