import { SHACL } from "../ontologies";
import { GIST, SCHEMA, OWL } from "./tests/ontologies";
import { loadFile } from "./tests/helpers";
import { OwlReasoner } from "./reasoners/owl-reasoner";
import { Store } from "./store";
import { IndividualRepository } from "./individual-repository";

describe("IndividualRepository", () => {
    /**
     * The RDF triple store.
     */
    const store = new Store(new OwlReasoner());

    /**
     * The repository under test.
     */
    const repository = new IndividualRepository(store);

    let gist: string[];
    let owl: string[];
    let schema: string[];
    let blank: string[];

    beforeAll(async () => {
        gist = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/gist.ttl'));
        schema = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/schema.ttl'));
        owl = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/ontologies/owl.ttl'));
        blank = store.getContextGraphs(await loadFile(store, 'src/rdf/tests/cases/blanknodes.ttl'));
    });

    it('can retrieve all individual nodes', async () => {
        let expected = [
            GIST._PrefixDeclaration_gist,
            GIST._USDollar,
            GIST._ampere,
            GIST._bit,
            GIST._candela,
            GIST._day,
            GIST._each,
            GIST._kelvin,
            GIST._kilogram,
            GIST._meter,
            GIST._millisecond,
            GIST._minute,
            GIST._mole,
            GIST._percent,
            GIST._second
        ].sort();
        let actual = repository.getIndividuals(gist).sort();

        expect(actual).toEqual(expected);

        expected = [
            SCHEMA.Abdomen,
            SCHEMA.ActivationFee,
            SCHEMA.ActiveActionStatus,
            SCHEMA.ActiveNotRecruiting,
            SCHEMA.AerobicActivity,
            SCHEMA.AlbumRelease,
            SCHEMA.AlcoholConsideration,
            SCHEMA.AllergiesHealthAspect,
            SCHEMA.AllWheelDriveConfiguration,
            SCHEMA.AnaerobicActivity,
            SCHEMA.AndroidPlatform,
            SCHEMA.Anesthesia,
            SCHEMA.Appearance,
            SCHEMA.AudiobookFormat,
            SCHEMA.AuthoritativeLegalValue,
            SCHEMA.Ayurvedic,
            SCHEMA.BackOrder,
            SCHEMA.Bacteria,
            SCHEMA.Balance,
            SCHEMA.BasicIncome,
            SCHEMA.BenefitsHealthAspect,
            SCHEMA.BodyMeasurementArm,
            SCHEMA.BodyMeasurementBust,
            SCHEMA.BodyMeasurementChest,
            SCHEMA.BodyMeasurementFoot,
            SCHEMA.BodyMeasurementHand,
            SCHEMA.BodyMeasurementHead,
            SCHEMA.BodyMeasurementHeight,
            SCHEMA.BodyMeasurementHips,
            SCHEMA.BodyMeasurementInsideLeg,
            SCHEMA.BodyMeasurementNeck,
            SCHEMA.BodyMeasurementUnderbust,
            SCHEMA.BodyMeasurementWaist,
            SCHEMA.BodyMeasurementWeight,
            SCHEMA.BroadcastRelease,
            SCHEMA.BusinessSupport,
            SCHEMA.Cardiovascular,
            SCHEMA.CardiovascularExam,
            SCHEMA.CaseSeries,
            SCHEMA.CassetteFormat,
            SCHEMA.CausesHealthAspect,
            SCHEMA.CDFormat,
            SCHEMA.CharitableIncorporatedOrganization,
            SCHEMA.Chiropractic,
            SCHEMA.CleaningFee,
            SCHEMA.Clinician,
            SCHEMA.CohortStudy,
            SCHEMA.CommentPermission,
            SCHEMA.CompilationAlbum,
            SCHEMA.Completed,
            SCHEMA.CompletedActionStatus,
            SCHEMA.ContagiousnessHealthAspect,
            SCHEMA.CoOp,
            SCHEMA.CrossSectional,
            SCHEMA.CT,
            SCHEMA.DamagedCondition,
            SCHEMA.DangerousGoodConsideration,
            SCHEMA.DecontextualizedContent,
            SCHEMA.DefinitiveLegalValue,
            SCHEMA.DemoAlbum,
            SCHEMA.DemoGameAvailability,
            SCHEMA.Dentistry,
            SCHEMA.Dermatologic,
            SCHEMA.DesktopWebPlatform,
            SCHEMA.DiabeticDiet,
            SCHEMA.Diagnostic,
            SCHEMA.DigitalAudioTapeFormat,
            SCHEMA.DigitalFormat,
            SCHEMA.DisabilitySupport,
            SCHEMA.Discontinued,
            SCHEMA.DistanceFee,
            SCHEMA.DJMixAlbum,
            SCHEMA.DoubleBlindedTrial,
            SCHEMA.Downpayment,
            SCHEMA.DrivingSchoolVehicleUsage,
            SCHEMA.DVDFormat,
            SCHEMA.Ear,
            SCHEMA.EBook,
            SCHEMA.EditedOrCroppedContent,
            SCHEMA.EffectivenessHealthAspect,
            SCHEMA.Endocrine,
            SCHEMA.EnergyStarCertified,
            SCHEMA.EnrollingByInvitation,
            SCHEMA.EPRelease,
            SCHEMA.EUEnergyEfficiencyCategoryA,
            SCHEMA.EUEnergyEfficiencyCategoryA1Plus,
            SCHEMA.EUEnergyEfficiencyCategoryA2Plus,
            SCHEMA.EUEnergyEfficiencyCategoryA3Plus,
            SCHEMA.EUEnergyEfficiencyCategoryB,
            SCHEMA.EUEnergyEfficiencyCategoryC,
            SCHEMA.EUEnergyEfficiencyCategoryD,
            SCHEMA.EUEnergyEfficiencyCategoryE,
            SCHEMA.EUEnergyEfficiencyCategoryF,
            SCHEMA.EUEnergyEfficiencyCategoryG,
            SCHEMA.EventCancelled,
            SCHEMA.EventMovedOnline,
            SCHEMA.EventPostponed,
            SCHEMA.EventRescheduled,
            SCHEMA.EventScheduled,
            SCHEMA.EvidenceLevelA,
            SCHEMA.EvidenceLevelB,
            SCHEMA.EvidenceLevelC,
            SCHEMA.ExampleMeasurementMethodEnum,
            SCHEMA.ExchangeRefund,
            SCHEMA.Eye,
            SCHEMA.FailedActionStatus,
            SCHEMA.False,
            SCHEMA.FDAcategoryA,
            SCHEMA.FDAcategoryB,
            SCHEMA.FDAcategoryC,
            SCHEMA.FDAcategoryD,
            SCHEMA.FDAcategoryX,
            SCHEMA.FDAnotEvaluated,
            SCHEMA.Female,
            SCHEMA.Flexibility,
            SCHEMA.FourWheelDriveConfiguration,
            SCHEMA.FreeReturn,
            SCHEMA.Friday,
            SCHEMA.FrontWheelDriveConfiguration,
            SCHEMA.FullGameAvailability,
            SCHEMA.FullRefund,
            SCHEMA.Fungus,
            SCHEMA.Gastroenterologic,
            SCHEMA.GenericWebPlatform,
            SCHEMA.Genetic,
            SCHEMA.Genitourinary,
            SCHEMA.GettingAccessHealthAspect,
            SCHEMA.GlutenFreeDiet,
            SCHEMA.GraphicNovel,
            SCHEMA.GroupBoardingPolicy,
            SCHEMA.HalalDiet,
            SCHEMA.Hardcover,
            SCHEMA.Head,
            SCHEMA.HealthCare,
            SCHEMA.HealthcareConsideration,
            SCHEMA.HearingImpairedSupported,
            SCHEMA.Hematologic,
            SCHEMA.HinduDiet,
            SCHEMA.Homeopathic,
            SCHEMA.HowItWorksHealthAspect,
            SCHEMA.HowOrWhereHealthAspect,
            SCHEMA.Infectious,
            SCHEMA.InForce,
            SCHEMA.IngredientsHealthAspect,
            SCHEMA.Installment,
            SCHEMA.InStock,
            SCHEMA.InStoreOnly,
            SCHEMA.InternationalTrial,
            SCHEMA.InvoicePrice,
            SCHEMA.IOSPlatform,
            SCHEMA.ItemListOrderAscending,
            SCHEMA.ItemListOrderDescending,
            SCHEMA.ItemListUnordered,
            SCHEMA.KosherDiet,
            SCHEMA.LaboratoryScience,
            SCHEMA.LaserDiscFormat,
            SCHEMA.LeftHandDriving,
            SCHEMA.LeisureTimeActivity,
            SCHEMA.LimitedAvailability,
            SCHEMA.LimitedByGuaranteeCharity,
            SCHEMA.ListPrice,
            SCHEMA.LiveAlbum,
            SCHEMA.LivingWithHealthAspect,
            SCHEMA.LockerDelivery,
            SCHEMA.Longitudinal,
            SCHEMA.LowCalorieDiet,
            SCHEMA.LowFatDiet,
            SCHEMA.LowLactoseDiet,
            SCHEMA.LowSaltDiet,
            SCHEMA.Lung,
            SCHEMA.Male,
            SCHEMA.MayTreatHealthAspect,
            SCHEMA.MedicalResearcher,
            SCHEMA.MerchantReturnFiniteReturnWindow,
            SCHEMA.MerchantReturnNotPermitted,
            SCHEMA.MerchantReturnUnlimitedWindow,
            SCHEMA.MerchantReturnUnspecified,
            SCHEMA.MinimumAdvertisedPrice,
            SCHEMA.MisconceptionsHealthAspect,
            SCHEMA.MixedEventAttendanceMode,
            SCHEMA.MixtapeAlbum,
            SCHEMA.MobileWebPlatform,
            SCHEMA.Monday,
            SCHEMA.MRI,
            SCHEMA.MSRP,
            SCHEMA.MulticellularParasite,
            SCHEMA.MultiCenterTrial,
            SCHEMA.MultiPlayer,
            SCHEMA.Musculoskeletal,
            SCHEMA.MusculoskeletalExam,
            SCHEMA.NarcoticConsideration,
            SCHEMA.Neck,
            SCHEMA.Neuro,
            SCHEMA.Neurologic,
            SCHEMA.NewCondition,
            SCHEMA.NoninvasiveProcedure,
            SCHEMA.Nonprofit501a,
            SCHEMA.Nonprofit501c1,
            SCHEMA.Nonprofit501c10,
            SCHEMA.Nonprofit501c11,
            SCHEMA.Nonprofit501c12,
            SCHEMA.Nonprofit501c13,
            SCHEMA.Nonprofit501c14,
            SCHEMA.Nonprofit501c15,
            SCHEMA.Nonprofit501c16,
            SCHEMA.Nonprofit501c17,
            SCHEMA.Nonprofit501c18,
            SCHEMA.Nonprofit501c19,
            SCHEMA.Nonprofit501c2,
            SCHEMA.Nonprofit501c20,
            SCHEMA.Nonprofit501c21,
            SCHEMA.Nonprofit501c22,
            SCHEMA.Nonprofit501c23,
            SCHEMA.Nonprofit501c24,
            SCHEMA.Nonprofit501c25,
            SCHEMA.Nonprofit501c26,
            SCHEMA.Nonprofit501c27,
            SCHEMA.Nonprofit501c28,
            SCHEMA.Nonprofit501c3,
            SCHEMA.Nonprofit501c4,
            SCHEMA.Nonprofit501c5,
            SCHEMA.Nonprofit501c6,
            SCHEMA.Nonprofit501c7,
            SCHEMA.Nonprofit501c8,
            SCHEMA.Nonprofit501c9,
            SCHEMA.Nonprofit501d,
            SCHEMA.Nonprofit501e,
            SCHEMA.Nonprofit501f,
            SCHEMA.Nonprofit501k,
            SCHEMA.Nonprofit501n,
            SCHEMA.Nonprofit501q,
            SCHEMA.Nonprofit527,
            SCHEMA.NonprofitANBI,
            SCHEMA.NonprofitSBBI,
            SCHEMA.Nose,
            SCHEMA.NotInForce,
            SCHEMA.NotYetRecruiting,
            SCHEMA.Observational,
            SCHEMA.OccupationalActivity,
            SCHEMA.OfficialLegalValue,
            SCHEMA.OfflineEventAttendanceMode,
            SCHEMA.OfflinePermanently,
            SCHEMA.OfflineTemporarily,
            SCHEMA.OneTimePayments,
            SCHEMA.Online,
            SCHEMA.OnlineEventAttendanceMode,
            SCHEMA.OnlineFull,
            SCHEMA.OnlineOnly,
            SCHEMA.OnSitePickup,
            SCHEMA.OpenTrial,
            SCHEMA.OrderCancelled,
            SCHEMA.OrderDelivered,
            SCHEMA.OrderInTransit,
            SCHEMA.OrderPaymentDue,
            SCHEMA.OrderPickupAvailable,
            SCHEMA.OrderProblem,
            SCHEMA.OrderProcessing,
            SCHEMA.OrderReturned,
            SCHEMA.OriginalMediaContent,
            SCHEMA.OriginalShippingFees,
            SCHEMA.Osteopathic,
            SCHEMA.OTC,
            SCHEMA.OutOfStock,
            SCHEMA.OverviewHealthAspect,
            SCHEMA.PaidLeave,
            SCHEMA.Paperback,
            SCHEMA.ParcelService,
            SCHEMA.ParentalSupport,
            SCHEMA.ParkingMap,
            SCHEMA.PartiallyInForce,
            SCHEMA.Pathology,
            SCHEMA.PatientExperienceHealthAspect,
            SCHEMA.PaymentAutomaticallyApplied,
            SCHEMA.PaymentComplete,
            SCHEMA.PaymentDeclined,
            SCHEMA.PaymentDue,
            SCHEMA.PaymentPastDue,
            SCHEMA.PercutaneousProcedure,
            SCHEMA.PET,
            SCHEMA.PharmacySpecialty,
            SCHEMA.PlaceboControlledTrial,
            SCHEMA.PotentialActionStatus,
            SCHEMA.PregnancyHealthAspect,
            SCHEMA.PreOrder,
            SCHEMA.PreSale,
            SCHEMA.PrescriptionOnly,
            SCHEMA.PreventionHealthAspect,
            SCHEMA.Prion,
            SCHEMA.PrognosisHealthAspect,
            SCHEMA.Protozoa,
            SCHEMA.PublicHolidays,
            SCHEMA.Pulmonary,
            SCHEMA.Radiography,
            SCHEMA.RandomizedTrial,
            SCHEMA.ReadPermission,
            SCHEMA.RearWheelDriveConfiguration,
            SCHEMA.Recruiting,
            SCHEMA.ReducedRelevanceForChildrenConsideration,
            SCHEMA.RefurbishedCondition,
            SCHEMA.Registry,
            SCHEMA.ReimbursementCap,
            SCHEMA.RelatedTopicsHealthAspect,
            SCHEMA.RemixAlbum,
            SCHEMA.Renal,
            SCHEMA.RentalVehicleUsage,
            SCHEMA.ReservationCancelled,
            SCHEMA.ReservationConfirmed,
            SCHEMA.ReservationHold,
            SCHEMA.ReservationPending,
            SCHEMA.RestockingFees,
            SCHEMA.ResultsAvailable,
            SCHEMA.ResultsNotAvailable,
            SCHEMA.Retail,
            SCHEMA.ReturnAtKiosk,
            SCHEMA.ReturnByMail,
            SCHEMA.ReturnFeesCustomerResponsibility,
            SCHEMA.ReturnInStore,
            SCHEMA.ReturnLabelCustomerResponsibility,
            SCHEMA.ReturnLabelDownloadAndPrint,
            SCHEMA.ReturnLabelInBox,
            SCHEMA.ReturnShippingFees,
            SCHEMA.Rheumatologic,
            SCHEMA.RightHandDriving,
            SCHEMA.RisksOrComplicationsHealthAspect,
            SCHEMA.RsvpResponseMaybe,
            SCHEMA.RsvpResponseNo,
            SCHEMA.RsvpResponseYes,
            SCHEMA.SafetyHealthAspect,
            SCHEMA.SalePrice,
            SCHEMA.SatireOrParodyContent,
            SCHEMA.Saturday,
            SCHEMA.ScreeningHealthAspect,
            SCHEMA.SeatingMap,
            SCHEMA.SeeDoctorHealthAspect,
            SCHEMA.SelfCareHealthAspect,
            SCHEMA.SexualContentConsideration,
            SCHEMA.SideEffectsHealthAspect,
            SCHEMA.SingleBlindedTrial,
            SCHEMA.SingleCenterTrial,
            SCHEMA.SinglePlayer,
            SCHEMA.SingleRelease,
            SCHEMA.SizeSystemImperial,
            SCHEMA.SizeSystemMetric,
            SCHEMA.Skin,
            SCHEMA.SoldOut,
            SCHEMA.SoundtrackAlbum,
            SCHEMA.SpeechPathology,
            SCHEMA.SpokenWordAlbum,
            SCHEMA.SRP,
            SCHEMA.StagedContent,
            SCHEMA.StagesHealthAspect,
            SCHEMA.StoreCreditRefund,
            SCHEMA.StrengthTraining,
            SCHEMA.StudioAlbum,
            SCHEMA.Subscription,
            SCHEMA.Sunday,
            SCHEMA.Surgical,
            SCHEMA.Suspended,
            SCHEMA.SymptomsHealthAspect,
            SCHEMA.TaxiVehicleUsage,
            SCHEMA.Terminated,
            SCHEMA.Therapeutic,
            SCHEMA.Throat,
            SCHEMA.Thursday,
            SCHEMA.TobaccoNicotineConsideration,
            SCHEMA.TollFree,
            SCHEMA.Toxicologic,
            SCHEMA.TraditionalChinese,
            SCHEMA.TransformedContent,
            SCHEMA.TransitMap,
            SCHEMA.TreatmentsHealthAspect,
            SCHEMA.TripleBlindedTrial,
            SCHEMA.True,
            SCHEMA.Tuesday,
            SCHEMA.TypesHealthAspect,
            SCHEMA.UKTrust,
            SCHEMA.Ultrasound,
            SCHEMA.UnclassifiedAdultConsideration,
            SCHEMA.UnemploymentSupport,
            SCHEMA.UnincorporatedAssociationCharity,
            SCHEMA.UnofficialLegalValue,
            SCHEMA.Urologic,
            SCHEMA.UsageOrScheduleHealthAspect,
            SCHEMA.UsedCondition,
            SCHEMA.VeganDiet,
            SCHEMA.VegetarianDiet,
            SCHEMA.VenueMap,
            SCHEMA.VinylFormat,
            SCHEMA.ViolenceConsideration,
            SCHEMA.Virus,
            SCHEMA.WeaponConsideration,
            SCHEMA.WearableMeasurementBack,
            SCHEMA.WearableMeasurementChestOrBust,
            SCHEMA.WearableMeasurementCollar,
            SCHEMA.WearableMeasurementCup,
            SCHEMA.WearableMeasurementHeight,
            SCHEMA.WearableMeasurementHips,
            SCHEMA.WearableMeasurementInseam,
            SCHEMA.WearableMeasurementLength,
            SCHEMA.WearableMeasurementOutsideLeg,
            SCHEMA.WearableMeasurementSleeve,
            SCHEMA.WearableMeasurementWaist,
            SCHEMA.WearableMeasurementWidth,
            SCHEMA.WearableSizeGroupBig,
            SCHEMA.WearableSizeGroupBoys,
            SCHEMA.WearableSizeGroupExtraShort,
            SCHEMA.WearableSizeGroupExtraTall,
            SCHEMA.WearableSizeGroupGirls,
            SCHEMA.WearableSizeGroupHusky,
            SCHEMA.WearableSizeGroupInfants,
            SCHEMA.WearableSizeGroupJuniors,
            SCHEMA.WearableSizeGroupMaternity,
            SCHEMA.WearableSizeGroupMens,
            SCHEMA.WearableSizeGroupMisses,
            SCHEMA.WearableSizeGroupPetite,
            SCHEMA.WearableSizeGroupPlus,
            SCHEMA.WearableSizeGroupRegular,
            SCHEMA.WearableSizeGroupShort,
            SCHEMA.WearableSizeGroupTall,
            SCHEMA.WearableSizeGroupWomens,
            SCHEMA.WearableSizeSystemAU,
            SCHEMA.WearableSizeSystemBR,
            SCHEMA.WearableSizeSystemCN,
            SCHEMA.WearableSizeSystemContinental,
            SCHEMA.WearableSizeSystemDE,
            SCHEMA.WearableSizeSystemEN13402,
            SCHEMA.WearableSizeSystemEurope,
            SCHEMA.WearableSizeSystemFR,
            SCHEMA.WearableSizeSystemGS1,
            SCHEMA.WearableSizeSystemIT,
            SCHEMA.WearableSizeSystemJP,
            SCHEMA.WearableSizeSystemMX,
            SCHEMA.WearableSizeSystemUK,
            SCHEMA.WearableSizeSystemUS,
            SCHEMA.Wednesday,
            SCHEMA.WesternConventional,
            SCHEMA.Wholesale,
            SCHEMA.Withdrawn,
            SCHEMA.WritePermission,
            SCHEMA.XRay,
            SCHEMA.ZoneBoardingPolicy
        ].sort();
        actual = repository.getIndividuals(schema).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getIndividuals(owl).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getIndividuals(blank).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve individual nodes of a given type', async () => {
        let expected = [
            GIST._USDollar,
            GIST._ampere,
            GIST._bit,
            GIST._candela,
            GIST._each,
            GIST._kelvin,
            GIST._kilogram,
            GIST._meter,
            GIST._mole,
            GIST._second
        ].sort();
        let actual = repository.getIndividuals(gist, GIST.BaseUnit).sort();

        expect(actual).toEqual(expected);

        expected = [
            GIST._USDollar,
            GIST._ampere,
            GIST._bit,
            GIST._candela,
            GIST._each,
            GIST._kelvin,
            GIST._kilogram,
            GIST._meter,
            GIST._mole,
            GIST._minute,
            GIST._second,
            GIST._millisecond,
            GIST._percent,
            GIST._day
        ].sort();
        actual = repository.getIndividuals(gist, GIST.UnitOfMeasure).sort();

        expect(actual).toEqual(expected);

        expected = [
            SCHEMA.Monday,
            SCHEMA.Tuesday,
            SCHEMA.Wednesday,
            SCHEMA.Thursday,
            SCHEMA.Friday,
            SCHEMA.Saturday,
            SCHEMA.Sunday,
            SCHEMA.PublicHolidays
        ].sort();
        actual = repository.getIndividuals(schema, SCHEMA.DayOfWeek).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getIndividuals(owl, OWL.Ontology).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve all individual types', async () => {
        let expected = [
            OWL.Thing,
            SHACL.PrefixDeclaration,
            GIST.BaseUnit,
            GIST.DurationUnit,
            GIST.UnitOfMeasure
        ].sort();
        let actual = repository.getIndividualTypes(gist).sort();

        expect(actual).toEqual(expected);

        expected = [
            SCHEMA.ActionStatusType,
            SCHEMA.AdultOrientedEnumeration,
            SCHEMA.BoardingPolicyType,
            SCHEMA.BodyMeasurementTypeEnumeration,
            SCHEMA.BookFormatType,
            SCHEMA.Boolean,
            SCHEMA.CarUsageType,
            SCHEMA.ContactPointOption,
            SCHEMA.DayOfWeek,
            SCHEMA.DeliveryMethod,
            SCHEMA.DigitalDocumentPermissionType,
            SCHEMA.DigitalPlatformEnumeration,
            SCHEMA.DriveWheelConfigurationValue,
            SCHEMA.DrugCostCategory,
            SCHEMA.DrugPregnancyCategory,
            SCHEMA.DrugPrescriptionStatus,
            SCHEMA.EUEnergyEfficiencyEnumeration,
            SCHEMA.EnergyStarEnergyEfficiencyEnumeration,
            SCHEMA.EventAttendanceModeEnumeration,
            SCHEMA.EventStatusType,
            SCHEMA.GameAvailabilityEnumeration,
            SCHEMA.GamePlayMode,
            SCHEMA.GameServerStatus,
            SCHEMA.GenderType,
            SCHEMA.GovernmentBenefitsType,
            SCHEMA.HealthAspectEnumeration,
            SCHEMA.InfectiousAgentClass,
            SCHEMA.ItemAvailability,
            SCHEMA.ItemListOrderType,
            SCHEMA.LegalForceStatus,
            SCHEMA.LegalValueLevel,
            SCHEMA.MapCategoryType,
            SCHEMA.MeasurementMethodEnum,
            SCHEMA.MediaManipulationRatingEnumeration,
            SCHEMA.MedicalAudienceType,
            SCHEMA.MedicalDevicePurpose,
            SCHEMA.MedicalEvidenceLevel,
            SCHEMA.MedicalImagingTechnique,
            SCHEMA.MedicalObservationalStudyDesign,
            SCHEMA.MedicalProcedureType,
            SCHEMA.MedicalSpecialty,
            SCHEMA.MedicalStudyStatus,
            SCHEMA.MedicalTrialDesign,
            SCHEMA.MedicineSystem,
            SCHEMA.MerchantReturnEnumeration,
            SCHEMA.MusicAlbumProductionType,
            SCHEMA.MusicAlbumReleaseType,
            SCHEMA.MusicReleaseFormatType,
            SCHEMA.NLNonprofitType,
            SCHEMA.OfferItemCondition,
            SCHEMA.OrderStatus,
            SCHEMA.PaymentStatusType,
            SCHEMA.PhysicalActivityCategory,
            SCHEMA.PhysicalExam,
            SCHEMA.PriceComponentTypeEnumeration,
            SCHEMA.PriceTypeEnumeration,
            SCHEMA.RefundTypeEnumeration,
            SCHEMA.ReservationStatusType,
            SCHEMA.RestrictedDiet,
            SCHEMA.ReturnFeesEnumeration,
            SCHEMA.ReturnLabelSourceEnumeration,
            SCHEMA.ReturnMethodEnumeration,
            SCHEMA.RsvpResponseType,
            SCHEMA.SizeSystemEnumeration,
            SCHEMA.SteeringPositionValue,
            SCHEMA.UKNonprofitType,
            SCHEMA.USNonprofitType,
            SCHEMA.WearableMeasurementTypeEnumeration,
            SCHEMA.WearableSizeGroupEnumeration,
            SCHEMA.WearableSizeSystemEnumeration
        ].sort();
        actual = repository.getIndividualTypes(schema).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getIndividualTypes(owl).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getIndividualTypes(blank).sort();

        expect(actual).toEqual(expected);
    });

    it('can retrieve all types of a given individual node', async () => {
        let expected = [
            OWL.Thing,
            GIST.BaseUnit
        ].sort();
        let actual = repository.getIndividualTypes(gist, GIST._second).sort();

        expect(actual).toEqual(expected);

        // This is not a named individual, so it should return an empty array.
        expected = [];
        actual = repository.getIndividualTypes(gist, GIST.accepts).sort();

        expect(actual).toEqual(expected);

        expected = [
            SCHEMA.DayOfWeek
        ].sort();
        actual = repository.getIndividualTypes(schema, SCHEMA.Monday).sort();

        expect(actual).toEqual(expected);

        expected = [];
        actual = repository.getIndividualTypes(owl, "http://www.w3.org/2002/07/owl#").sort();

        expect(actual).toEqual(expected);
    });

    it('can indicate if an individual node is an instance of a given type', async () => {
        let expected = true;
        let actual = repository.isInstanceOfType(schema, SCHEMA.Friday, SCHEMA.Enumeration);

        expect(actual).toEqual(expected);

        expected = true;
        actual = repository.isInstanceOfType(gist, GIST._day, GIST.UnitOfMeasure);

        expect(actual).toEqual(expected);
    });

    it("can retrieve individuals from the default graph", async () => {
        // Make sure that we do not repeatedly count the same resource.
        const resources = new Set<string>();

        for(let g of store.getGraphs()) {
            for(let c of repository.getIndividuals(g.id)) {
                resources.add(c);
            }
        }
        
        let actual = repository.getIndividuals(undefined).length;
        let expected = resources.size;

        expect(actual).toEqual(expected);
    });
});