import { OWL, RDF, RDFS, SKOS } from "../ontologies";
import { GIST, MULTI, PROV_O, SCHEMA, MENTOR } from "./tests/vocabularies";
import { loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { ClassRepository } from "./class-repository";
import { vi } from "vitest";

// See: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
vi.useFakeTimers();

describe("ClassRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new ClassRepository(store);

    let bfo: string;
    let blank: string;
    let cycle: string;
    let emmo: string;
    let fibo: string;
    let gist: string;
    let lob: string;
    let mentor: string;
    let multi: string;
    let named: string;
    let owl: string;
    let prov: string;
    let schema: string;

    beforeAll(async () => {
        bfo = await loadFile(store, 'src/rdf/tests/vocabularies/bfo.ttl');
        blank = await loadFile(store, 'src/rdf/tests/cases/valid-blanknodes.ttl');
        cycle = await loadFile(store, 'src/rdf/tests/cases/valid-class-cycle.ttl');
        emmo = await loadFile(store, 'src/rdf/tests/vocabularies/emmo.ttl');
        fibo = await loadFile(store, 'src/rdf/tests/vocabularies/fibo-organization.ttl');
        gist = await loadFile(store, 'src/rdf/tests/vocabularies/gist.ttl');
        lob = await loadFile(store, 'src/rdf/tests/vocabularies/lob.ttl');
        mentor = await loadFile(store, 'src/rdf/tests/vocabularies/mentor.ttl');
        multi = await loadFile(store, 'src/rdf/tests/vocabularies/multi.ttl');
        named = await loadFile(store, 'src/rdf/tests/cases/valid-named-sets.ttl');
        owl = await loadFile(store, 'src/rdf/tests/vocabularies/owl.ttl');
        prov = await loadFile(store, 'src/rdf/tests/vocabularies/prov-o.ttl');
        schema = await loadFile(store, 'src/rdf/tests/vocabularies/schema.ttl');
    });

    it('can retrieve all class nodes', async () => {
        // This is the class list generated from Protege using DL query which 
        // comprises 137 classes, including owl:Nothing. However, in the ontology
        // stats Protege counts 138 classes which I cannot explain.
        let expected = [
            GIST.Account,
            GIST.Actuator,
            GIST.Address,
            GIST.Agreement,
            GIST.Area,
            GIST.AreaUnit,
            GIST.Artifact,
            GIST.Aspect,
            GIST.Balance,
            GIST.BaseUnit,
            GIST.Behavior,
            GIST.Building,
            GIST.BundledCatalogItem,
            GIST.CatalogItem,
            GIST.Category,
            GIST.CoherentProductUnit,
            GIST.CoherentRatioUnit,
            GIST.CoherentUnit,
            GIST.Collection,
            GIST.Commitment,
            GIST.Component,
            GIST.ContemporaryEvent,
            GIST.Content,
            GIST.ContentExpression,
            GIST.ContingentEvent,
            GIST.ContingentObligation,
            GIST.Contract,
            GIST.ContractTerm,
            GIST.ControlledVocabulary,
            GIST.Controller,
            GIST.ControllerType,
            GIST.Count,
            GIST.CountingUnit,
            GIST.CountryGeoRegion,
            GIST.CountryGovernment,
            GIST.CurrencyPerDurationUnit,
            GIST.CurrencyUnit,
            GIST.DataSizeUnit,
            GIST.DegreeOfCommitment,
            GIST.DistanceUnit,
            GIST.Duration,
            GIST.DurationUnit,
            GIST.ElectricalCurrentUnit,
            GIST.ElectricCurrent,
            GIST.ElectronicMessageAddress,
            GIST.EmailAddress,
            GIST.Equipment,
            GIST.EquipmentType,
            GIST.Event,
            GIST.Extent,
            GIST.FormattedContent,
            GIST.Function,
            GIST.GeneralMediaType,
            GIST.GeoPoint,
            GIST.GeoRegion,
            GIST.GeoRoute,
            GIST.GeoSegment,
            GIST.GeoVolume,
            GIST.Goal,
            GIST.GovernedGeoRegion,
            GIST.GovernmentOrganization,
            GIST.HistoricalEvent,
            GIST.ID,
            GIST.InformationQuantity,
            GIST.IntellectualProperty,
            GIST.Intention,
            GIST.IntergovernmentalOrganization,
            GIST.Landmark,
            GIST.Language,
            GIST.LivingThing,
            GIST.LuminousIntensity,
            GIST.LuminousIntensityUnit,
            GIST.Magnitude,
            GIST.Mass,
            GIST.MassUnit,
            GIST.MediaType,
            GIST.Medium,
            GIST.Message,
            GIST.MessageDefinition,
            GIST.MolarQuantity,
            GIST.MoleUnit,
            GIST.Monetary,
            GIST.MonetaryPerDuration,
            GIST.Network,
            GIST.NetworkLink,
            GIST.NetworkNode,
            GIST.Obligation,
            GIST.Offer,
            GIST.OrderedCollection,
            GIST.OrderedMember,
            GIST.Organization,
            GIST.Permission,
            GIST.Person,
            GIST.PhenomenaType,
            GIST.PhysicalActionType,
            GIST.PhysicalEvent,
            GIST.PhysicalIdentifiableItem,
            GIST.PhysicalSubstance,
            GIST.Place,
            GIST.PostalAddress,
            GIST.ProductCategory,
            GIST.ProductMagnitude,
            GIST.ProductSpecification,
            GIST.ProductUnit,
            GIST.Project,
            GIST.RatioMagnitude,
            GIST.RatioUnit,
            GIST.ReferenceValue,
            GIST.RenderedContent,
            GIST.Requirement,
            GIST.Restriction,
            GIST.ScheduledEvent,
            GIST.ScheduledTask,
            GIST.SchemaMetaData,
            GIST.Sensor,
            GIST.ServiceSpecification,
            GIST.SimpleUnitOfMeasure,
            GIST.Specification,
            GIST.StreetAddress,
            GIST.SubCountryGovernment,
            GIST.System,
            GIST.Tag,
            GIST.Task,
            GIST.TaskTemplate,
            GIST.Taxonomy,
            GIST.TelephoneNumber,
            GIST.Temperature,
            GIST.TemperatureUnit,
            GIST.Template,
            GIST.TemporalRelation,
            GIST.Text,
            GIST.TimeInterval,
            GIST.Transaction,
            GIST.UnitOfMeasure,
            GIST.Volume,
            GIST.VolumeUnit,
            // OWL.Nothing
        ].sort();
        let actual = [...repository.getClasses(gist)].sort();

        expect(actual).toEqual(expected);

        // Only includes the OWL classes *described* in the ontlogy.
        actual = [...repository.getClasses(owl, { includeReferenced: true })].sort();
        expected = [
            RDFS.Resource,
            RDFS.Class,
            RDFS.Datatype,
            OWL.AllDifferent,
            OWL.AllDisjointClasses,
            OWL.AllDisjointProperties,
            OWL.Annotation,
            OWL.AnnotationProperty,
            OWL.AsymmetricProperty,
            OWL.Axiom,
            OWL.Class,
            OWL.DataRange,
            OWL.DatatypeProperty,
            OWL.DeprecatedClass,
            OWL.DeprecatedProperty,
            OWL.FunctionalProperty,
            OWL.InverseFunctionalProperty,
            OWL.IrreflexiveProperty,
            OWL.NamedIndividual,
            OWL.NegativePropertyAssertion,
            OWL.Nothing,
            OWL.ObjectProperty,
            OWL.Ontology,
            OWL.OntologyProperty,
            OWL.ReflexiveProperty,
            OWL.Restriction,
            OWL.SymmetricProperty,
            OWL.Thing,
            OWL.TransitiveProperty,
        ].sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getClasses(owl, { definedBy: "http://www.w3.org/TR/owl2-mapping-to-rdf/" })];

        expect(actual).toEqual(expected);

        actual = [...repository.getClasses(fibo, { includeReferenced: true })].sort();
        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/GoalsAndObjectives/Objectives/Goal",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/MemberBearingOrganization",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Membership",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Organization",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationalSubUnit",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationIdentificationScheme",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationIdentifier",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationMember",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationName",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/OrganizationPartIdentifier",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/IndependentParty",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/PartyInRole",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/Situation",
            "https://www.omg.org/spec/Commons/ContextualDesignators/ContextualName",
            "https://www.omg.org/spec/Commons/Identifiers/IdentificationScheme",
            "https://www.omg.org/spec/Commons/Identifiers/Identifier",
        ].sort();

        expect(actual).toEqual(expected);

        expected = [
            MULTI.Class1,
            MULTI.Class2,
            MULTI.Class3,
            MULTI.Class4
        ];
        actual = [...repository.getClasses(multi)].sort();

        expect(actual).toEqual(expected);

        // All classes are defined in the same namespace as the ontology.
        expected = [MULTI.Class1, MULTI.Class2, MULTI.Class3, MULTI.Class4];
        actual = [...repository.getClasses(multi, { definedBy: MULTI.ontology })];

        expect(actual).toEqual(expected);

        expected = [MULTI.Class1, MULTI.Class2, MULTI.Class3, MULTI.Class4];
        actual = [...repository.getClasses(multi, { definedBy: MULTI.ontology2 })];

        expect(actual).toEqual(expected);

        expected = [MULTI.Class3];
        actual = [...repository.getClasses(multi, { definedBy: null })];

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getClasses(multi, { notDefinedBy: new Set([MULTI.ontology, MULTI.ontology2]) })];

        expect(actual).toEqual(expected);

        expected = [
            "https://w3id.org/emmo#EMMO_bbca6dfa_7463_4e8d_8280_35862ff50ce0",
            "https://w3id.org/emmo#EMMO_32e701c0_a925_49df_9829_0931b8554807",
            "https://w3id.org/emmo#EMMO_57c75ca1_bf8a_42bc_85d9_58cfe38c7df2",
            "https://w3id.org/emmo#EMMO_2469e4c6_ac2e_4c8f_b49f_7b2d2e277215",
            "https://w3id.org/emmo#EMMO_4b32fc1e_5293_4247_9e8d_1175df9f1c0b",
            "https://w3id.org/emmo#EMMO_aaad78a9_abaf_4f97_9c1a_d763a94c4ba3",
            "https://w3id.org/emmo#EMMO_f055e217_0b1b_4e7e_b8be_7340211b0c5e",
            "https://w3id.org/emmo#EMMO_808566db_b810_448d_8a54_48e7f6d30f36",
            "https://w3id.org/emmo#EMMO_1efe8b96_e006_4a33_bc9a_421406cbb9f0",
            "https://w3id.org/emmo#EMMO_0277f24a_ea7f_4917_81b7_fb0406c8fc62",
            "https://w3id.org/emmo#EMMO_4f226cf3_6d02_4d35_8566_a9e641bc6ff3",
        ].sort();
        actual = [...repository.getClasses(emmo, { definedBy: "https://w3id.org/emmo/perspectives/holistic#" })].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getClasses(prov, { definedBy: "http://www.w3.org/ns/prov-o#" })];

        expect(actual.length).toEqual(30);

        actual = [...repository.getClasses(bfo, { definedBy: "http://purl.obolibrary.org/obo/bfo.owl" })];

        expect(actual.length).toEqual(36);
    });

    it('can retrieve only defined class nodes', async () => {
        // Only includes the OWL classes *defined* in the ontlogy.
        let actual = [...repository.getClasses(owl, { includeReferenced: false })].sort();
        let expected = [
            OWL.AllDifferent,
            OWL.AllDisjointClasses,
            OWL.AllDisjointProperties,
            OWL.Annotation,
            OWL.AnnotationProperty,
            OWL.AsymmetricProperty,
            OWL.Axiom,
            OWL.Class,
            OWL.DataRange,
            OWL.DatatypeProperty,
            OWL.DeprecatedClass,
            OWL.DeprecatedProperty,
            OWL.FunctionalProperty,
            OWL.InverseFunctionalProperty,
            OWL.IrreflexiveProperty,
            OWL.NamedIndividual,
            OWL.NegativePropertyAssertion,
            OWL.Nothing,
            OWL.ObjectProperty,
            OWL.Ontology,
            OWL.OntologyProperty,
            OWL.ReflexiveProperty,
            OWL.Restriction,
            OWL.SymmetricProperty,
            OWL.Thing,
            OWL.TransitiveProperty
        ];

        expect(actual).toEqual(expected);

        // Only includes the OWL classes *defined* in the ontlogy.
        actual = [...repository.getClasses(owl, { includeInferred: false, includeReferenced: true })].sort();

        // Note: owl:Thing and owl:Nothing are instances of owl:Class and not rdfs:Class. 
        // Because includeInferred is 'false', they are not included.
        expected = [
            OWL.AllDifferent,
            OWL.AllDisjointClasses,
            OWL.AllDisjointProperties,
            OWL.Annotation,
            OWL.AnnotationProperty,
            OWL.AsymmetricProperty,
            OWL.Axiom,
            OWL.Class,
            OWL.DataRange,
            OWL.DatatypeProperty,
            OWL.DeprecatedClass,
            OWL.DeprecatedProperty,
            OWL.FunctionalProperty,
            OWL.InverseFunctionalProperty,
            OWL.IrreflexiveProperty,
            OWL.NamedIndividual,
            OWL.NegativePropertyAssertion,
            // OWL.Nothing,
            OWL.ObjectProperty,
            OWL.Ontology,
            OWL.OntologyProperty,
            OWL.ReflexiveProperty,
            OWL.Restriction,
            OWL.SymmetricProperty,
            // OWL.Thing,
            OWL.TransitiveProperty
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve all class nodes explicitly defined by an ontology', async () => {
        let expected = [
            PROV_O.Activity,
            PROV_O.ActivityInfluence,
            PROV_O.Agent,
            PROV_O.AgentInfluence,
            PROV_O.Association,
            PROV_O.Attribution,
            PROV_O.Bundle,
            PROV_O.Collection,
            PROV_O.Communication,
            PROV_O.Delegation,
            PROV_O.Derivation,
            PROV_O.EmptyCollection,
            PROV_O.End,
            PROV_O.Entity,
            PROV_O.EntityInfluence,
            PROV_O.Generation,
            PROV_O.Influence,
            PROV_O.InstantaneousEvent,
            PROV_O.Invalidation,
            PROV_O.Location,
            PROV_O.Organization,
            PROV_O.Person,
            PROV_O.Plan,
            PROV_O.PrimarySource,
            PROV_O.Quotation,
            PROV_O.Revision,
            PROV_O.Role,
            PROV_O.SoftwareAgent,
            PROV_O.Start,
            PROV_O.Usage
        ];
        let actual = [...repository.getClasses(prov, { definedBy: 'http://www.w3.org/ns/prov-o#' })].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve all super class nodes', async () => {
        let expected = [GIST.GovernmentOrganization];
        let actual = [...repository.getSuperClasses(gist, GIST.CountryGovernment)];

        expect(actual).toEqual(expected);

        expected = [GIST.ContingentObligation];
        actual = [...repository.getSuperClasses(gist, GIST.Offer)];

        expect(actual).toEqual(expected);

        expected = [GIST.Artifact, GIST.PhysicalIdentifiableItem];
        actual = [...repository.getSuperClasses(gist, GIST.Equipment)];

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getSuperClasses(gist, GIST.Commitment)];

        expect(actual).toEqual(expected);
    });

    it('can retrieve only defined super class nodes', async () => {
        let expected = [RDFS.Class];
        let actual = [...repository.getSuperClasses(owl, OWL.Class, { includeReferenced: true })];

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getSuperClasses(owl, OWL.Class, { includeReferenced: false })];

        expect(actual).toEqual(expected);
    });

    it('can retrieve all sub class nodes', async () => {
        let actual = [...repository.getSubClasses(gist, GIST.Artifact)].sort();
        let expected = [
            GIST.Building,
            GIST.Component,
            GIST.Content,
            GIST.Equipment,
            GIST.IntellectualProperty,
            GIST.Network,
            GIST.System,
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getSubClasses(gist, GIST.Content)].sort();
        expected = [
            GIST.Address,
            GIST.ContentExpression,
            GIST.ID,
            GIST.Text,
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getSubClasses(gist, GIST.Commitment)].sort();
        expected = [
            GIST.Agreement,
            GIST.ContingentObligation,
            GIST.Obligation
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getSubClasses(owl, OWL.Thing)].sort();
        expected = [
            // Includes all referenced classes.
            OWL.NamedIndividual,
            OWL.Nothing
        ].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getSubClasses(gist, GIST.CoherentUnit)];
        expected = [
            GIST.BaseUnit,
            GIST.CoherentProductUnit,
            GIST.CoherentRatioUnit
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve all sub class nodes of a given class', async () => {
        let actual = [...repository.getAllSubClasses(gist, GIST.CoherentUnit)].sort();
        let expected = [
            GIST.BaseUnit,
            GIST.CoherentProductUnit,
            GIST.CoherentRatioUnit
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getAllSubClasses(gist, GIST.CoherentUnit, { includeInferred: false })].sort();
        expected = [];

        expect(actual).toEqual(expected);

        actual = [...repository.getAllSubClasses(gist, GIST.Commitment)].sort();
        expected = [
            GIST.Account,
            GIST.Agreement,
            GIST.ContingentObligation,
            GIST.Contract,
            GIST.Obligation,
            GIST.Offer
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve only defined sub class nodes', async () => {
        let actual = [...repository.getSubClasses(owl, RDFS.Class, { includeReferenced: true })].sort();
        let expected = [
            RDFS.Datatype,
            OWL.Class,
            OWL.DeprecatedClass
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getSubClasses(owl, RDFS.Class, { includeReferenced: false })].sort();
        expected = [
            OWL.Class,
            OWL.DeprecatedClass
        ];

        expect(actual).toEqual(expected);
    });

    it('can retrieve all root class nodes', async () => {
        let expected = [
            GIST.Artifact,
            GIST.Category,
            GIST.CoherentUnit,
            GIST.Collection,
            GIST.Commitment,
            GIST.Event,
            GIST.Intention,
            GIST.Language,
            GIST.Magnitude,
            GIST.NetworkLink,
            GIST.NetworkNode,
            GIST.OrderedMember,
            GIST.Organization,
            GIST.PhysicalIdentifiableItem,
            GIST.PhysicalSubstance,
            GIST.Place,
            GIST.SchemaMetaData,
            GIST.Template,
            GIST.TemporalRelation,
            GIST.TimeInterval,
            GIST.UnitOfMeasure,
        ];
        let actual = [...repository.getRootClasses(gist)].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getSubClasses(gist)].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getRootClasses(schema, { includeReferenced: true })].sort();
        expected = [
            'http://purl.bioontology.org/ontology/SNOMEDCT/105590001',
            'http://purl.bioontology.org/ontology/SNOMEDCT/116154003',
            'http://purl.bioontology.org/ontology/SNOMEDCT/277132007',
            'http://purl.bioontology.org/ontology/SNOMEDCT/387713003',
            'http://purl.bioontology.org/ontology/SNOMEDCT/410942007',
            'http://purl.bioontology.org/ontology/SNOMEDCT/50731006',
            'http://purl.bioontology.org/ontology/SNOMEDCT/51114001',
            'http://purl.bioontology.org/ontology/SNOMEDCT/63653004',
            'http://purl.org/dc/dcmitype/Dataset',
            'http://purl.org/dc/dcmitype/Event',
            'http://purl.org/dc/dcmitype/Image',
            'http://purl.org/dc/dcmitype/Text',
            'http://purl.org/ontology/bibo/Issue',
            'http://purl.org/ontology/bibo/Periodical',
            'http://rdfs.org/ns/void#Dataset',
            RDFS.Resource,
            'http://xmlns.com/foaf/0.1/Person',
            SCHEMA.Boolean,
            SCHEMA.Date,
            SCHEMA.DateTime,
            SCHEMA.Number,
            SCHEMA.Text,
            SCHEMA.Thing,
            SCHEMA.Time
        ];

        expect(actual).toEqual(expected);

        actual = [...repository.getRootClasses(owl, { includeReferenced: true })].sort();
        expected = [
            OWL.Thing,
            // RDF.List, // This one is only referenced via rdfs:range.
            RDF.Property,
            RDFS.Resource,
        ].sort();

        expect(actual).toEqual(expected);

        actual = [...repository.getRootClasses(fibo, { includeReferenced: true })].sort();
        expected = [
            "https://spec.edmcouncil.org/fibo/ontology/FND/GoalsAndObjectives/Objectives/Goal",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/IndependentParty",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/PartyInRole",
            "https://spec.edmcouncil.org/fibo/ontology/FND/Parties/Parties/Situation",
            "https://www.omg.org/spec/Commons/ContextualDesignators/ContextualName",
            "https://www.omg.org/spec/Commons/Identifiers/IdentificationScheme",
            "https://www.omg.org/spec/Commons/Identifiers/Identifier",
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve only defined root class nodes', async () => {
        let expected = [
            RDF.Property,
            RDFS.Resource,
            OWL.Thing
        ];
        let actual = [...repository.getRootClasses(owl, { includeReferenced: true })].sort();

        expect(actual).toEqual(expected);

        expected = [
            OWL.AllDifferent,
            OWL.AllDisjointClasses,
            OWL.AllDisjointProperties,
            OWL.Annotation,
            OWL.AnnotationProperty,
            OWL.Axiom,
            OWL.Class,
            OWL.DataRange,
            OWL.DatatypeProperty,
            OWL.DeprecatedClass,
            OWL.DeprecatedProperty,
            OWL.FunctionalProperty,
            OWL.NegativePropertyAssertion,
            OWL.ObjectProperty,
            OWL.Ontology,
            OWL.OntologyProperty,
            OWL.Thing,
        ];
        actual = [...repository.getRootClasses(owl, { includeReferenced: false })].sort();

        expect(actual).toEqual(expected);

        // This should be equivalent to the above.
        actual = [...repository.getSubClasses(owl, undefined, { includeReferenced: false })].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve root class path to all classes', async () => {
        let expected = [GIST.Equipment, GIST.Artifact];
        let actual = [...repository.getRootClassPath(gist, GIST.Actuator)];

        expect(actual).toEqual(expected);

        expected = [GIST.GovernedGeoRegion, GIST.GeoRegion, GIST.Place];
        actual = [...repository.getRootClassPath(gist, GIST.CountryGeoRegion)];

        expect(actual).toEqual(expected);

        expected = [];
        actual = [...repository.getRootClassPath(gist, GIST.Artifact)];

        expect(actual).toEqual(expected);
    });

    it('can retrieve root class path to defined classes only', async () => {
        let expected = [OWL.Class, RDFS.Class, RDFS.Resource];
        let actual = [...repository.getRootClassPath(owl, OWL.Restriction, { includeReferenced: true })];

        expect(actual).toEqual(expected);

        expected = [OWL.Class];
        actual = [...repository.getRootClassPath(owl, OWL.Restriction)];

        expect(actual).toEqual(expected);
    });

    it('can indicate if any sub classes exist for a given class', async () => {
        // This one is expliclity defined in the ontology.
        let expected = true;
        let actual = repository.hasSubClasses(gist, GIST.Category);

        expect(actual).toEqual(expected);

        // This one is inferred from the owl:euivalentClass axiom.
        expected = true;
        actual = repository.hasSubClasses(gist, GIST.Commitment);

        expect(actual).toEqual(expected);

        // There are no sub classes of this class.
        expected = false;
        actual = repository.hasSubClasses(gist, GIST.TimeInterval);

        expect(actual).toEqual(expected);

        // Protege does not show this class as having sub classes. However,
        // from a set theoretical perspective it does have 3 sub classes.
        expected = true;
        actual = repository.hasSubClasses(gist, GIST.CoherentUnit);

        expect(actual).toEqual(expected);

        // As anonymous classes are mostly utilized as restrictions, they
        // should not appear as explicit classes in the class tree. 
        // Therefore, we ignore them.
        expected = false;
        actual = repository.hasSubClasses(blank, OWL.Class);

        expect(actual).toEqual(expected);

        // skos:Concept is an instance of a class, but not a class of classes.
        expected = false;
        actual = repository.hasSubClasses(lob, SKOS.Concept);

        expect(actual).toEqual(expected);
    });

    it('can indicate if defined sub classes exist for a given class', async () => {
        let expected = true;
        let actual = repository.hasSubClasses(owl, OWL.Class);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.hasSubClasses(owl, OWL.Class, { includeReferenced: false });

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.hasSubClasses(owl, RDFS.Datatype, { includeReferenced: false });

        expect(actual).toEqual(expected);
    });

    it("can indicate if a class has an equivalent class", async () => {
        let expected = false;
        let actual = repository.hasEquivalentClass(gist, GIST.Category);

        expect(actual).toEqual(expected);

        // This one has a owl:intersectionOf axiom.
        expected = true;
        actual = repository.hasEquivalentClass(gist, GIST.Commitment);

        expect(actual).toEqual(expected);

        // This one has a owl:unionOf axiom.
        expected = true;
        actual = repository.hasEquivalentClass(gist, GIST.CoherentUnit);

        expect(actual).toEqual(expected);

        expected = false;
        actual = repository.hasEquivalentClass(gist, GIST.UnitOfMeasure);

        expect(actual).toEqual(expected);

        // This one is only mentioned as an object. But owl:equivalentClass is symmetric.
        expected = true;
        actual = repository.hasEquivalentClass(schema, 'http://xmlns.com/foaf/0.1/Person');

        expect(actual).toEqual(expected);
    });

    it("can indicate if a class is sub class of another class", async () => {
        let expected = true;
        let actual = repository.isSubClassOf(gist, GIST.DurationUnit, GIST.UnitOfMeasure);

        expect(actual).toEqual(expected);

        expected = false;
        actual = repository.isSubClassOf(gist, GIST.UnitOfMeasure, GIST.DurationUnit);

        expect(actual).toEqual(expected);
    });

    it("can retrieve classes from the default graph", async () => {
        // Make sure that we do not repeatedly count the same resource.
        const resources = new Set<string>();

        for (let g of store.getGraphs()) {
            for (let c of repository.getClasses(g)) {
                resources.add(c);
            }
        }

        let actual = [...repository.getClasses(undefined)].length;
        let expected = resources.size;

        expect(actual).toEqual(expected);
    });

    it("can indicate if a class has individuals of it or of its sub classes", async () => {
        let expected = true;
        let actual = repository.hasIndividuals(gist, OWL.Thing);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.hasIndividuals(gist, GIST.CoherentUnit);

        expect(actual).toEqual(expected);

        expected = false;
        actual = repository.hasIndividuals(gist, GIST.Category);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.hasIndividuals(lob, SKOS.Concept);

        expect(actual).toEqual(expected);
    });

    it("can indicate if a class is the union of other classes", async () => {
        let expected = false;
        let actual = repository.isUnionOfClasses(gist, GIST.Category);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.isUnionOfClasses(gist, GIST.CoherentUnit);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.isUnionOfClasses(named, "file://valid-named-sets.ttl#NamedUnion");

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.isUnionOfClasses(named, "file://valid-named-sets.ttl#NamedDisjointUnion");

        expect(actual).toEqual(expected);
    });

    it("can indicate if a class is the intersection of other classes", async () => {
        let expected = false;
        let actual = repository.isIntersectionOfClasses(gist, GIST.Category);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.isIntersectionOfClasses(gist, GIST.Commitment);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.isIntersectionOfClasses(named, "file://valid-named-sets.ttl#NamedIntersection");

        expect(actual).toEqual(expected);
    });

    it("does not cause stack overflow for recursive sub class definitions", async () => {
        expect(repository.isSubClassOf(mentor, MENTOR.RecursiveClass, MENTOR.RecursiveClass)).toBeTruthy();

        const actual = [...repository.getSubClasses(mentor, MENTOR.RecursiveClass)];
        const expected = [MENTOR.RecursiveClass];

        expect(actual).toEqual(expected);
    });

    it("can handle cyclic subclass hierarchies", async () => {
        let expected = [MENTOR.RecursiveClass];
        let actual = [...repository.getRootClasses(cycle)];

        expect(actual).toEqual(expected);

        expected = [MENTOR.RecursiveClass];
        actual = [...repository.getSubClasses(cycle, MENTOR.RecursiveClass)];

        expect(actual).toEqual(expected);

        expected = [MENTOR.RecursiveClass];
        actual = [...repository.getSuperClasses(cycle, MENTOR.RecursiveClass)];

        expect(actual).toEqual(expected);

        expected = [MENTOR.RecursiveClass];
        actual = [...repository.getRootClassPath(cycle, MENTOR.RecursiveClass)];

        expect(actual).toEqual(expected);

        expect(repository.hasIndividuals(cycle, MENTOR.RecursiveClass)).toBeFalsy();
    });
});