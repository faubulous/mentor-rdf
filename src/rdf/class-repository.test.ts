import { GIST, SCHEMA } from "./test/ontologies";
import { StoreFactory } from "./store-factory"
import { ClassRepository } from "./class-repository";

describe("ClassRepository", () => {
    let gist: ClassRepository;

    let schema: ClassRepository;

    beforeAll(async () => {
        let store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl');

        gist = new ClassRepository(store);

        store = await StoreFactory.createFromFile('src/rdf/test/schema.ttl');

        schema = new ClassRepository(store);
    });

    it('can retrieve class nodes', async () => {
        // This is the class list generated from Protege using DL query which 
        // comprises 137 classes, including owl:Nothing. However, in the ontology
        // stats Protege counts 138 classes which I cannot explain.
        const expected = [
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

        const actual = gist.getClasses().sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve super class nodes', async () => {
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

    it('can retrieve sub class nodes', async () => {
        let expected = [
            GIST.Building,
            GIST.Component,
            GIST.Content,
            GIST.Equipment,
            GIST.IntellectualProperty,
            GIST.Network,
            GIST.System,
        ];
        let actual = gist.getSubClasses(GIST.Artifact).sort();

        expect(actual).toEqual(expected);

        expected = [
            GIST.Address,
            GIST.ContentExpression,
            GIST.ID,
            GIST.Text,
        ];
        actual = gist.getSubClasses(GIST.Content).sort();

        expect(actual).toEqual(expected);

        expected = [
            GIST.Agreement,
            GIST.ContingentObligation,
            GIST.Obligation
        ];
        actual = gist.getSubClasses(GIST.Commitment).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve root class nodes', async () => {
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
        let actual = gist.getSubClasses().sort();

        expect(actual).toEqual(expected);

        actual = schema.getSubClasses().sort();
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
    });

    it('can retrieve root class path', async () => {
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

    it('can indicate if sub classes exist for a given class', async () => {
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
    });
});