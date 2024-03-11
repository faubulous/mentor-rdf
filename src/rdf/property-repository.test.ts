import { GIST, SCHEMA } from "./tests/ontologies";
import { loadFile } from "./tests/helpers";
import { OWL, RDF, RDFS, SKOS, XSD } from "../ontologies";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { PropertyRepository } from "./property-repository";

describe("PropertyRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new PropertyRepository(store);

    let gist: string[];
    let rdfs: string[];
    let owl: string[];
    let schema: string[];
    let skos: string[];
    let fibo: string[];
    let blank: string[];
    let type: string[];
    let emmo: string[];

    beforeAll(async () => {
        gist = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/gist.ttl'));
        schema = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/schema.ttl'));
        rdfs = store.getContextGraphs(await loadFile(store, 'src/ontologies/rdfs.ttl'));
        owl = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/owl.ttl'));
        skos = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/skos.ttl'));
        fibo = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/fibo-organization.ttl'));
        blank = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/cases/blanknodes.ttl'));
        type = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/cases/rdf-type-property.ttl'));
        emmo = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/emmo.ttl'));
    });

    it('can retrieve all property nodes', async () => {
        // Gist
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
        let actual = repository.getProperties(gist).sort();

        expect(actual).toEqual(expected);

        // OWL
        actual = repository.getProperties(owl).sort();
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

    it('can retrieve only typed property nodes', async () => {
        // OWL
        let actual = repository.getPropertiesOfType(owl, OWL.DatatypeProperty, false).sort();
        let expected = [
            OWL.bottomDataProperty,
            OWL.topDataProperty
        ];

        expect(actual).toEqual(expected);

        actual = repository.getPropertiesOfType(owl, OWL.DatatypeProperty).sort();
        expected = [
            OWL.bottomDataProperty,
            OWL.topDataProperty
        ];

        expect(actual).toEqual(expected);

        // Type
        // Since this method operates on the inferred graph, it will return all properties.
        actual = repository.getPropertiesOfType(type, RDF.Property, false).sort();
        expected = [
            "file://rdf-type-property.ttl#testA"
        ];

        expect(actual).toEqual(expected);

        actual = repository.getPropertiesOfType(type, RDF.Property).sort();
        expected = [
            "file://rdf-type-property.ttl#testA",
            "file://rdf-type-property.ttl#testB"
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve property nodes defined by restrictions', async () => {
        // FIBO
        let expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/GoalsAndObjectives/Objectives/hasGoal",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasMembership",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasOrganizationMember",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasSubUnit",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isMembershipPartyIn",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isOrganizationMember",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isSubUnitOf",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Roles/isPlayedBy",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Relations/Relations/hasLegalName",
            "https://www.omg.org/spec/Commons/Collections/hasMember",
            "https://www.omg.org/spec/Commons/Collections/hasPart",
            "https://www.omg.org/spec/Commons/Collections/isMemberOf",
            "https://www.omg.org/spec/Commons/Collections/isPartOf",
            "https://www.omg.org/spec/Commons/Designators/hasName",
            "https://www.omg.org/spec/Commons/Designators/isNameOf",
            "https://www.omg.org/spec/Commons/Identifiers/identifies",
        ];
        let actual = repository.getProperties(fibo).sort();

        expect(actual).toEqual(expected);

        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/Relations/Relations/hasLegalName",
        ];
        actual = repository.getPropertiesOfType(fibo, OWL.DatatypeProperty).sort();

        expect(actual).toEqual(expected);

        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/GoalsAndObjectives/Objectives/hasGoal",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasMembership",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasOrganizationMember",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/hasSubUnit",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isMembershipPartyIn",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isOrganizationMember",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/isSubUnitOf",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Roles/isPlayedBy",
            "https://www.omg.org/spec/Commons/Collections/hasMember",
            "https://www.omg.org/spec/Commons/Collections/hasPart",
            "https://www.omg.org/spec/Commons/Collections/isMemberOf",
            "https://www.omg.org/spec/Commons/Collections/isPartOf",
            "https://www.omg.org/spec/Commons/Designators/hasName",
            "https://www.omg.org/spec/Commons/Designators/isNameOf",
            "https://www.omg.org/spec/Commons/Identifiers/identifies",
        ];
        actual = repository.getPropertiesOfType(fibo, OWL.ObjectProperty).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve super property nodes', async () => {
        // Gist
        let expected = [GIST.actualEndDateTime];
        let actual = repository.getSuperProperties(gist, GIST.actualEndDate);

        expect(actual).toEqual(expected);

        // Blank Nodes
        expected = [];
        actual = repository.getSuperProperties(blank, "file://blanknode-properties.ttl#hasAnonymousSuperProperty");

        expect(actual).toEqual(expected);
    });

    it('can retrieve sub property nodes', async () => {
        // Gist
        let actual = repository.getSubProperties(gist, GIST.actualEndDateTime).sort();
        let expected = [
            GIST.actualEndDate,
            GIST.actualEndMicrosecond,
            GIST.actualEndMinute,
            GIST.actualEndYear
        ];

        expect(actual).toEqual(expected);

        // Blank Nodes
        actual = repository.getSubProperties(blank, OWL.topObjectProperty).sort();
        expected = [];

        expect(actual).toEqual(expected);

        actual = repository.getSubProperties(emmo, "https://w3id.org/emmo#EMMO_ec2472ae_cf4a_46a5_8555_1556f5a6c3c5").sort();
        expected = [
            "https://w3id.org/emmo#EMMO_2337e25c_3c60_43fc_a8f9_b11a3f974291",
            "https://w3id.org/emmo#EMMO_3f2e4ac2_8ef3_4a14_b826_60d37f15f8ee",
            "https://w3id.org/emmo#EMMO_ad0e72fc_dcaa_490d_8371_b4d814dcda2c"
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve root property nodes', async () => {
        // Gist
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
        let actual = repository.getRootProperties(gist).sort();

        expect(actual).toEqual(expected);

        actual = repository.getSubProperties(gist).sort();

        expect(actual).toEqual(expected);

        // Blank Nodes
        actual = repository.getRootProperties(blank).sort();
        expected = [
            "file://blanknode-properties.ttl#hasAnonymousSuperProperty"
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve root property path', async () => {
        // Gist
        let expected = [GIST.actualEndDateTime, GIST.endDateTime, GIST.atDateTime];
        let actual = repository.getRootPropertiesPath(gist, GIST.actualEndDate);

        expect(actual).toEqual(expected);
    });

    it('can indicate if sub properties exist for a given property', async () => {
        // Gist
        let expected = true;
        let actual = repository.hasSubProperties(gist, GIST.atDateTime);

        expect(actual).toEqual(expected);

        expected = false;
        actual = repository.hasSubProperties(gist, GIST.allows);

        expect(actual).toEqual(expected);
    });

    it("can indicate if a property has an equivalent property", async () => {
        // Gist
        let expected = false;
        let actual = repository.hasEquivalentProperty(gist, GIST.accepts);

        expect(actual).toEqual(expected);

        // Schema.org
        expected = true;
        actual = repository.hasEquivalentProperty(schema, SCHEMA.isbn);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.hasEquivalentProperty(schema, "http://purl.org/ontology/bibo/isbn");

        expect(actual).toEqual(expected);
    });

    it("can retrieve the domain of a property", async () => {
        // Gist
        let expected = RDFS.Resource;
        let actual = repository.getDomain(gist, GIST.accepts);

        expect(actual).toEqual(expected);

        expected = GIST.Intention;
        actual = repository.getDomain(gist, GIST.allows);

        expect(actual).toEqual(expected);
    });

    it("can retrieve the range of a property", async () => {
        // Gist
        let expected = RDFS.Resource;
        let actual = repository.getRange(gist, GIST.accepts);

        expect(actual).toEqual(expected);

        expected = XSD.dateTime;
        actual = repository.getRange(gist, GIST.atDateTime);

        expect(actual).toEqual(expected);

        // SKOS
        expected = RDFS.Resource;
        actual = repository.getRange(skos, SKOS.closeMatch);

        expect(actual).toEqual(expected);
    });

    it("can retrieve all asserted and inferred property types", async () => {
        // OWL
        let actual = repository.getPropertyTypes(owl).sort();
        let expected = [
            RDF.Property,
            OWL.AnnotationProperty,
            OWL.DatatypeProperty,
            OWL.ObjectProperty,
            OWL.OntologyProperty
        ];

        expect(actual).toEqual(expected);

        // RDFS
        actual = repository.getPropertyTypes(rdfs).sort();
        expected = [
            RDF.Property
        ];

        expect(actual).toEqual(expected);

        // Type
        actual = repository.getPropertyTypes(type).sort();
        expected = [
            RDF.Property,
            OWL.ObjectProperty
        ];

        expect(actual).toEqual(expected);
    });

    it("can retrieve porperties from the default graph", async () => {
        // Make sure that we do not repeatedly count the same resource.
        const resources = new Set<string>();

        for(let g of store.getGraphs()) {
            for(let c of repository.getProperties(g.id)) {
                resources.add(c);
            }
        }
        
        let actual = repository.getProperties(undefined).length;
        let expected = resources.size;

        expect(actual).toEqual(expected);
    });
});