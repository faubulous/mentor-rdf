import { GIST } from "./test/ontologies";
import { StoreFactory } from "./store-factory"
import { ClassRepository } from "./class-repository";

describe("ClassRepository", () => {
    let repository: ClassRepository;

    beforeAll(async () => {
        const store = await StoreFactory.createFromFile('src/rdf/test/gist.ttl');

        repository = new ClassRepository(store);
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

        const actual = (await repository.getClasses()).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve super class nodes', async () => {
        let expected = [GIST.GovernmentOrganization];
        let actual = await repository.getSuperClasses(GIST.CountryGovernment);

        expect(actual).toEqual(expected);

        expected = [GIST.ContingentObligation];
        actual = await repository.getSuperClasses(GIST.Offer);

        expect(actual).toEqual(expected);

        expected = [GIST.Artifact, GIST.PhysicalIdentifiableItem];
        actual = await repository.getSuperClasses(GIST.Equipment);

        expect(actual).toEqual(expected);

        expected = [];
        actual = await repository.getSuperClasses(GIST.Commitment);

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
        let actual = (await repository.getSubClasses(GIST.Artifact)).sort();

        expect(actual).toEqual(expected);

        expected = [
            GIST.Address,
            GIST.ContentExpression,
            GIST.ID,
            GIST.Text,
        ];
        actual = (await repository.getSubClasses(GIST.Content)).sort();

        expect(actual).toEqual(expected);

        expected = [
            GIST.Agreement,
            GIST.ContingentObligation,
            GIST.Obligation
        ];
        actual = (await repository.getSubClasses(GIST.Commitment)).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve root class nodes', async () => {
        const expected = [
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
        ].sort();

        const actual = (await repository.getRootClasses()).sort();

        expect(actual.length).toEqual(expected.length);

        for (let i = 0; i < expected.length - 1; i++) {
            expect(actual[i]).toEqual(expected[i]);
        }
    });

    it('can retrieve root class path', async () => {
        let expected = [GIST.Equipment, GIST.Artifact];
        let actual = await repository.getRootClassPath(GIST.Actuator);

        expect(actual).toEqual(expected);

        expected = [GIST.GovernedGeoRegion, GIST.GeoRegion, GIST.Place];
        actual = await repository.getRootClassPath(GIST.CountryGeoRegion);

        expect(actual).toEqual(expected);

        expected = [];
        actual = await repository.getRootClassPath(GIST.Artifact);

        expect(actual).toEqual(expected);
    });
});