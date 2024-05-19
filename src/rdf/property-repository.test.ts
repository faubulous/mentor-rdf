import { GIST, SCHEMA } from "./tests/vocabularies";
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

    let gist: string;
    let rdfs: string;
    let owl: string;
    let schema: string;
    let skos: string;
    let fibo: string;
    let blank: string;
    let type: string;
    let emmo: string;
    let cidoc: string;

    beforeAll(async () => {
        gist = await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl');
        schema = await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl');
        rdfs = await loadFile(store, 'src/ontologies/rdfs.ttl');
        owl = await loadFile(store, 'src/rdf/tests/vocabularies/owl.ttl');
        skos = await loadFile(store, 'src/rdf/tests/vocabularies/skos.ttl');
        fibo = await loadFile(store, 'src/rdf/tests/vocabularies/fibo-organization.ttl');
        blank = await loadFile(store, 'src/rdf/tests/cases/valid-blanknodes.ttl');
        type = await loadFile(store, 'src/rdf/tests/cases/valid-rdf-type-property.ttl');
        emmo = await loadFile(store, 'src/rdf/tests/vocabularies/emmo.ttl');
        cidoc = await loadFile(store, 'src/rdf/tests/vocabularies/cidoc-crm.ttl');
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

        // Note: We only retrieve named properties and no blank nodes.
        actual = repository.getProperties(blank).sort();
        expected = [
            'file://blanknode-properties.ttl#hasAnonymousSuperProperty'
        ];

        expect(actual).toEqual(expected);

        actual = repository.getProperties(emmo, {
            includeReferenced: false, notDefinedBy: [
                "https://w3id.org/emmo",
                "https://w3id.org/emmo/mereocausality#",
                "https://w3id.org/emmo/disciplines/materials#",
                "https://w3id.org/emmo/multiperspective/properties#",
                "https://w3id.org/emmo/disciplines/units/siacceptedunits#",
                "https://w3id.org/emmo/disciplines/units/noncoherentsiunits#",
                "https://w3id.org/emmo/disciplines/units/coherentsiunits#",
                "https://w3id.org/emmo/disciplines/periodictable#",
                "https://w3id.org/emmo/disciplines/manufacturing#",
                "https://w3id.org/emmo/disciplines/isq#",
                "https://w3id.org/emmo/multiperspective/symbolic#",
                "https://w3id.org/emmo/disciplines/computerscience#",
                "https://w3id.org/emmo/disciplines/units/sidimensionalunits#",
                "https://w3id.org/emmo/disciplines/math#",
                "https://w3id.org/emmo/perspectives/semiotics#",
                "https://w3id.org/emmo/disciplines/models#",
                "https://w3id.org/emmo/multiperspective/persholistic#",
                "https://w3id.org/emmo/perspectives/physicalistic#",
                "https://w3id.org/emmo/disciplines/metrology#",
                "https://w3id.org/emmo/perspectives/perceptual#",
                "https://w3id.org/emmo/disciplines/chemistry#",
                "https://w3id.org/emmo/perspectives/reductionistic#",
                "https://w3id.org/emmo/disciplines/units/siunits#",
                "https://w3id.org/emmo/multiperspective/workflow#",
                "https://w3id.org/emmo/perspectives/holistic#",
                "https://w3id.org/emmo/perspectives/standardmodel#",
                "https://w3id.org/emmo/multiperspective/information#",
                "https://w3id.org/emmo/perspectives/data#",
                "https://w3id.org/emmo/perspectives/persistence#",
                "https://w3id.org/emmo/disciplines/units/prefixedsiunits#",
            ]
        });
        expected = [
            RDFS.label
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve only typed root property nodes', async () => {
        // OWL
        let actual = repository.getRootPropertiesOfType(owl, OWL.DatatypeProperty, { includeInferred: false }).sort();
        let expected = [
            OWL.bottomDataProperty,
            OWL.topDataProperty
        ];

        expect(actual).toEqual(expected);

        actual = repository.getRootPropertiesOfType(owl, OWL.DatatypeProperty).sort();
        expected = [
            OWL.bottomDataProperty,
            OWL.topDataProperty
        ];

        expect(actual).toEqual(expected);

        // Type
        // Since this method operates on the inferred graph, it will return all properties.
        actual = repository.getRootPropertiesOfType(type, RDF.Property, { includeInferred: false }).sort();
        expected = [
            "file://valid-rdf-type-property.ttl#testA"
        ];

        expect(actual).toEqual(expected);

        actual = repository.getRootPropertiesOfType(type, RDF.Property).sort();
        expected = [
            "file://valid-rdf-type-property.ttl#testA",
            "file://valid-rdf-type-property.ttl#testB"
        ];

        expect(actual).toEqual(expected);

        // Note: We only retrieve named properties and no blank nodes.
        actual = repository.getRootPropertiesOfType(blank, RDF.Property, { includeInferred: false }).sort();
        expected = [];

        expect(actual).toEqual(expected);

        // :hasAnonymousSuperProperty is an owl:ObjectProperty and thus a rdf:Property.
        // However, it is defined as a sub property of an anonymous property which is being ignored. So
        // we expect it to be returned as a root property as it has a URI and a definition.
        actual = repository.getRootPropertiesOfType(blank, RDF.Property, { includeInferred: true }).sort();
        expected = [
            'file://blanknode-properties.ttl#hasAnonymousSuperProperty'
        ];

        expect(actual).toEqual(expected);

        actual = repository.getRootPropertiesOfType(fibo, OWL.ObjectProperty, { definedBy: "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/", includeReferenced: true }).sort();
        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/actsIn",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/hasActor",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/hasUndergoer",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/undergoes",
            "https://www.omg.org/spec/Commons/Collections/hasPart",
            "https://www.omg.org/spec/Commons/Collections/isPartOf"
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve property nodes defined by an ontology', async () => {
        let expected: string[] = [];
        let actual = repository.getProperties(owl, { definedBy: 'http://www.w3.org/ns/prov-o#' }).sort();

        expect(actual).toEqual(expected);

        actual = repository.getProperties(owl, { definedBy: 'http://www.w3.org/2002/07/owl#' }).sort();
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
        let actual = repository.getProperties(fibo, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);

        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/Relations/Relations/hasLegalName",
        ];
        actual = repository.getRootPropertiesOfType(fibo, OWL.DatatypeProperty, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);

        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/GoalsAndObjectives/Objectives/hasGoal",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/actsIn",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/hasActor",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/hasUndergoer",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/undergoes",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Roles/isPlayedBy",
            "https://www.omg.org/spec/Commons/Collections/hasMember",
            "https://www.omg.org/spec/Commons/Collections/hasPart",
            "https://www.omg.org/spec/Commons/Collections/isMemberOf",
            "https://www.omg.org/spec/Commons/Collections/isPartOf",
            "https://www.omg.org/spec/Commons/Designators/hasName",
            "https://www.omg.org/spec/Commons/Designators/isNameOf",
            "https://www.omg.org/spec/Commons/Identifiers/identifies"
        ];
        actual = repository.getRootPropertiesOfType(fibo, OWL.ObjectProperty, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);

        expected = [
            RDFS.label
        ];
        actual = repository.getRootPropertiesOfType(emmo, RDF.Property, {
            includeReferenced: false, notDefinedBy: [
                "https://w3id.org/emmo",
                "https://w3id.org/emmo/mereocausality#",
                "https://w3id.org/emmo/disciplines/materials#",
                "https://w3id.org/emmo/multiperspective/properties#",
                "https://w3id.org/emmo/disciplines/units/siacceptedunits#",
                "https://w3id.org/emmo/disciplines/units/noncoherentsiunits#",
                "https://w3id.org/emmo/disciplines/units/coherentsiunits#",
                "https://w3id.org/emmo/disciplines/periodictable#",
                "https://w3id.org/emmo/disciplines/manufacturing#",
                "https://w3id.org/emmo/disciplines/isq#",
                "https://w3id.org/emmo/multiperspective/symbolic#",
                "https://w3id.org/emmo/disciplines/computerscience#",
                "https://w3id.org/emmo/disciplines/units/sidimensionalunits#",
                "https://w3id.org/emmo/disciplines/math#",
                "https://w3id.org/emmo/perspectives/semiotics#",
                "https://w3id.org/emmo/disciplines/models#",
                "https://w3id.org/emmo/multiperspective/persholistic#",
                "https://w3id.org/emmo/perspectives/physicalistic#",
                "https://w3id.org/emmo/disciplines/metrology#",
                "https://w3id.org/emmo/perspectives/perceptual#",
                "https://w3id.org/emmo/disciplines/chemistry#",
                "https://w3id.org/emmo/perspectives/reductionistic#",
                "https://w3id.org/emmo/disciplines/units/siunits#",
                "https://w3id.org/emmo/multiperspective/workflow#",
                "https://w3id.org/emmo/perspectives/holistic#",
                "https://w3id.org/emmo/perspectives/standardmodel#",
                "https://w3id.org/emmo/multiperspective/information#",
                "https://w3id.org/emmo/perspectives/data#",
                "https://w3id.org/emmo/perspectives/persistence#",
                "https://w3id.org/emmo/disciplines/units/prefixedsiunits#",
            ]
        }).sort();

        expect(actual).toEqual(expected);

        // Some of the properties below are referenced in owl:Restrictions on properties such as hasLegalName.
        // These should be included in the result among the others because they *must* be instances of rdf:Property
        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/GoalsAndObjectives/Objectives/hasGoal",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/actsIn",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/hasActor",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/hasUndergoer",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/undergoes",
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
        actual = repository.getRootPropertiesOfType(fibo, RDF.Property, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);

        // However, these referenced properties are only inferred and should not be included in the result if includeInferred is false.
        expected = [];
        actual = repository.getRootPropertiesOfType(fibo, RDF.Property, { includeReferenced: true, includeInferred: false }).sort();

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
        let actual = repository.getRootProperties(gist, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);

        actual = repository.getSubProperties(gist, undefined, { includeReferenced: true }).sort();

        expect(actual).toEqual(expected);

        // Blank Nodes
        actual = repository.getRootProperties(blank).sort();
        expected = [
            "file://blanknode-properties.ttl#hasAnonymousSuperProperty"
        ];

        expect(actual).toEqual(expected);

        // Root properties of a subgraph of EMMO. This should include the super 
        // properties of referenced ontologies such as RDFS and OWL which are 
        // *not* explicitly defined in the EMMO graph.
        actual = repository.getSubProperties(emmo, undefined, { definedBy: "https://w3id.org/emmo/disciplines/metrology#" }).sort();
        expected = [
            "https://w3id.org/emmo#EMMO_0aa934ee_1ad4_4345_8a7f_bc73ec67c7e5",
            "https://w3id.org/emmo#EMMO_4be0acad_af05_426f_aa6d_fe7531072564",
            "https://w3id.org/emmo#EMMO_58e7c821_4af0_4394_89f7_a9649735f4d2",
            "https://w3id.org/emmo#EMMO_5d73661e_e710_4844_ab9b_a85b7e68576a",
            "https://w3id.org/emmo#EMMO_67fc0a36_8dcb_4ffa_9a43_31074efa3296",
            "https://w3id.org/emmo#EMMO_78c79b48_4b76_4cbe_812f_b32dbb04fd44",
            "https://w3id.org/emmo#EMMO_8ef3cd6d_ae58_4a8d_9fc0_ad8f49015cd0",
            "https://w3id.org/emmo#EMMO_eeb06032_dd4f_476e_9da6_aa24302b7588",
            "https://w3id.org/emmo#EMMO_fe015383_afb3_44a6_ae86_043628697aa2"
        ];

        expect(actual).toEqual(expected);

        actual = repository.getSubProperties(emmo, undefined, { definedBy: "https://w3id.org/emmo/perspectives/data#", includeReferenced: true }).sort();
        expected = [
            "http://www.w3.org/2002/07/owl#topDataProperty",
            "https://w3id.org/emmo#EMMO_b19aacfc_5f73_4c33_9456_469c1e89a53e",
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

        actual = repository.getPropertyTypes(emmo, { definedBy: "https://w3id.org/emmo/disciplines/math#" }).sort();
        expected = [
            OWL.DatatypeProperty,
            OWL.FunctionalProperty,
            OWL.ObjectProperty
        ];

        expect(actual).toEqual(expected);

        actual = repository.getPropertyTypes(emmo, { notDefinedBy: ["https://w3id.org/emmo"] }).sort();
        expected = [
            RDF.Property, // Not explicitly defined in the EMMO graph, but rdfs:label is defined with a rdfs:range.
            OWL.AnnotationProperty
        ];

        expect(actual).toEqual(expected);

        actual = repository.getPropertyTypes(emmo, {
            notDefinedBy: [
                "https://w3id.org/emmo",
                "https://w3id.org/emmo/mereocausality#",
                "https://w3id.org/emmo/disciplines/materials#",
                "https://w3id.org/emmo/multiperspective/properties#",
                "https://w3id.org/emmo/disciplines/units/siacceptedunits#",
                "https://w3id.org/emmo/disciplines/units/noncoherentsiunits#",
                "https://w3id.org/emmo/disciplines/units/coherentsiunits#",
                "https://w3id.org/emmo/disciplines/periodictable#",
                "https://w3id.org/emmo/disciplines/manufacturing#",
                "https://w3id.org/emmo/disciplines/isq#",
                "https://w3id.org/emmo/multiperspective/symbolic#",
                "https://w3id.org/emmo/disciplines/computerscience#",
                "https://w3id.org/emmo/disciplines/units/sidimensionalunits#",
                "https://w3id.org/emmo/disciplines/math#",
                "https://w3id.org/emmo/perspectives/semiotics#",
                "https://w3id.org/emmo/disciplines/models#",
                "https://w3id.org/emmo/multiperspective/persholistic#",
                "https://w3id.org/emmo/perspectives/physicalistic#",
                "https://w3id.org/emmo/disciplines/metrology#",
                "https://w3id.org/emmo/perspectives/perceptual#",
                "https://w3id.org/emmo/disciplines/chemistry#",
                "https://w3id.org/emmo/perspectives/reductionistic#",
                "https://w3id.org/emmo/disciplines/units/siunits#",
                "https://w3id.org/emmo/multiperspective/workflow#",
                "https://w3id.org/emmo/perspectives/holistic#",
                "https://w3id.org/emmo/perspectives/standardmodel#",
                "https://w3id.org/emmo/multiperspective/information#",
                "https://w3id.org/emmo/perspectives/data#",
                "https://w3id.org/emmo/perspectives/persistence#",
                "https://w3id.org/emmo/disciplines/units/prefixedsiunits#",
            ]
        });
        expected = [
            RDF.Property
        ];

        expect(actual).toEqual(expected);
    });

    it("can retrieve porperties from the default graph", async () => {
        // Make sure that we do not repeatedly count the same resource.
        const resources = new Set<string>();

        for (let g of store.getGraphs()) {
            for (let c of repository.getProperties(g)) {
                resources.add(c);
            }
        }

        let actual = repository.getProperties(undefined).length;
        let expected = resources.size;

        expect(actual).toEqual(expected);
    });
});