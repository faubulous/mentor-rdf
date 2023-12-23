import { OWL, RDF, RDFS } from "../ontologies";
import { GIST, SCHEMA } from "./tests/ontologies";
import { createFromFile } from "./tests/helpers";
import { ClassRepository } from "./class-repository";
import { OwlReasoner } from "./reasoners/owl-reasoner";

// See: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
jest.useFakeTimers();

describe("ClassRepository", () => {
    let gist: ClassRepository;

    let schema: ClassRepository;

    let owl: ClassRepository;

    beforeAll(async () => {
        const reasoner = new OwlReasoner();

        let store = await createFromFile('src/rdf/tests/ontologies/gist.ttl', { reasoner });

        gist = new ClassRepository(store);

        store = await createFromFile('src/rdf/tests/ontologies/schema.ttl', { reasoner });

        schema = new ClassRepository(store);

        store = await createFromFile('src/rdf/tests/ontologies/owl.ttl', { reasoner });

        owl = new ClassRepository(store);
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
        let actual = gist.getClasses().sort();

        expect(actual).toEqual(expected);

        // Only includes the OWL classes *described* in the ontlogy.
        actual = owl.getClasses().sort();
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
    });

    it('can retrieve only defined class nodes', async () => {
        // Only includes the OWL classes *defined* in the ontlogy.
        let actual = owl.getClasses({ includeReferencedClasses: false }).sort();
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
            OWL.TransitiveProperty,
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve all super class nodes', async () => {
        let expected = [GIST.GovernmentOrganization];
        let actual = gist.getSuperClasses(GIST.CountryGovernment);

        expect(actual).toEqual(expected);

        expected = [GIST.ContingentObligation];
        actual = gist.getSuperClasses(GIST.Offer);

        expect(actual).toEqual(expected);

        expected = [GIST.Artifact, GIST.PhysicalIdentifiableItem];
        actual = gist.getSuperClasses(GIST.Equipment);

        expect(actual).toEqual(expected);

        expected = [];
        actual = gist.getSuperClasses(GIST.Commitment);

        expect(actual).toEqual(expected);
    });

    it('can retrieve only defined super class nodes', async () => {
        let expected = [RDFS.Class];
        let actual = owl.getSuperClasses(OWL.Class, { includeReferencedClasses: true });

        expect(actual).toEqual(expected);

        expected = [];
        actual = owl.getSuperClasses(OWL.Class, { includeReferencedClasses: false });

        expect(actual).toEqual(expected);
    });

    it('can retrieve all sub class nodes', async () => {
        let actual = gist.getSubClasses(GIST.Artifact).sort();
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

        actual = gist.getSubClasses(GIST.Content).sort();
        expected = [
            GIST.Address,
            GIST.ContentExpression,
            GIST.ID,
            GIST.Text,
        ];

        expect(actual).toEqual(expected);

        actual = gist.getSubClasses(GIST.Commitment).sort();
        expected = [
            GIST.Agreement,
            GIST.ContingentObligation,
            GIST.Obligation
        ];

        expect(actual).toEqual(expected);

        actual = owl.getSubClasses(OWL.Thing).sort();
        expected = [
            // Includes all referenced classes.
            OWL.NamedIndividual,
            OWL.Nothing
        ].sort();

        expect(actual).toEqual(expected);

        actual = gist.getSubClasses(GIST.CoherentUnit);
        expected = [
            GIST.BaseUnit,
            GIST.CoherentProductUnit,
            GIST.CoherentRatioUnit
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve only defined sub class nodes', async () => {
        let actual = owl.getSubClasses(RDFS.Class).sort();
        let expected = [
            RDFS.Datatype,
            OWL.Class,
            OWL.DeprecatedClass
        ];

        expect(actual).toEqual(expected);

        actual = owl.getSubClasses(RDFS.Class, { includeReferencedClasses: false }).sort();
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
        let actual = gist.getRootClasses().sort();

        expect(actual).toEqual(expected);

        actual = gist.getSubClasses().sort();

        expect(actual).toEqual(expected);

        actual = schema.getRootClasses().sort();
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

        actual = owl.getRootClasses().sort();
        expected = [
            OWL.Thing,
            // RDF.List, // This one is only referenced via rdfs:range.
            RDF.Property,
            RDFS.Resource,
        ].sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve only defined root class nodes', async () => {
        let expected = [
            RDF.Property,
            RDFS.Resource,
            OWL.Thing
        ];
        let actual = owl.getRootClasses().sort();

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
        actual = owl.getRootClasses({ includeReferencedClasses: false }).sort();

        expect(actual).toEqual(expected);

        // This should be equivalent to the above.
        actual = owl.getSubClasses(undefined, {includeReferencedClasses: false}).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve root class path to all classes', async () => {
        let expected = [GIST.Equipment, GIST.Artifact];
        let actual = gist.getRootClassPath(GIST.Actuator);

        expect(actual).toEqual(expected);

        expected = [GIST.GovernedGeoRegion, GIST.GeoRegion, GIST.Place];
        actual = gist.getRootClassPath(GIST.CountryGeoRegion);

        expect(actual).toEqual(expected);

        expected = [];
        actual = gist.getRootClassPath(GIST.Artifact);

        expect(actual).toEqual(expected);
    });

    it('can retrieve root class path to defined classes only', async () => {
        let expected = [OWL.Class, RDFS.Class, RDFS.Resource];
        let actual = owl.getRootClassPath(OWL.Restriction);

        expect(actual).toEqual(expected);

        expected = [OWL.Class];
        actual = owl.getRootClassPath(OWL.Restriction);
    });

    it('can indicate if any sub classes exist for a given class', async () => {
        // This one is expliclity defined in the ontology.
        let expected = true;
        let actual = gist.hasSubClasses(GIST.Category);

        expect(actual).toEqual(expected);

        // This one is inferred from the owl:euivalentClass axiom.
        expected = true;
        actual = gist.hasSubClasses(GIST.Commitment);

        expect(actual).toEqual(expected);

        // There are no sub classes of this class.
        expected = false;
        actual = gist.hasSubClasses(GIST.TimeInterval);

        expect(actual).toEqual(expected);

        // Protege does not show this class as having sub classes. However,
        // from a set theoretical perspective it does have 3 sub classes.
        expected = true;
        actual = gist.hasSubClasses(GIST.CoherentUnit);

        expect(actual).toEqual(expected);
    });

    it('can indicate if defined sub classes exist for a given class', async () => {
        let expected = true;
        let actual = owl.hasSubClasses(OWL.Class);

        expect(actual).toEqual(expected);

        expected = true;
        actual = owl.hasSubClasses(OWL.Class, { includeReferencedClasses: false });

        expect(actual).toEqual(expected);

        expected = true;
        actual = owl.hasSubClasses(RDFS.Datatype, { includeReferencedClasses: false });

        expect(actual).toEqual(expected);
    });

    it("can indicate if a class has an equivalent class", async () => {
        let expected = false;
        let actual = gist.hasEquivalentClass(GIST.Category);

        expect(actual).toEqual(expected);

        // This one has a owl:intersectionOf axiom.
        expected = true;
        actual = gist.hasEquivalentClass(GIST.Commitment);

        expect(actual).toEqual(expected);

        // This one has a owl:unionOf axiom.
        expected = true;
        actual = gist.hasEquivalentClass(GIST.CoherentUnit);

        expect(actual).toEqual(expected);

        // This one is only mentioned as an object. But owl:equivalentClass is symmetric.
        expected = true;
        actual = schema.hasEquivalentClass('http://xmlns.com/foaf/0.1/Person');

        expect(actual).toEqual(expected);
    });
});