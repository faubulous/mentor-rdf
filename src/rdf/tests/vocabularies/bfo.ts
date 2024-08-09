import * as n3 from "n3";

/** Namespace URI of the BFO vocabulary. */
export const _BFO = 'http://purl.obolibrary.org/obo/';

export const BFO = {
	/** (Elucidation) An entity is anything that exists or has existed or will exist */
	'BFO_0000001': 'http://purl.obolibrary.org/obo/BFO_0000001',
	/** (Elucidation) A continuant is an entity that persists, endures, or continues to exist through time while maintaining its identity */
	'BFO_0000002': 'http://purl.obolibrary.org/obo/BFO_0000002',
	/** (Elucidation) An occurrent is an entity that unfolds itself in time or it is the start or end of such an entity or it is a temporal or spatiotemporal region */
	'BFO_0000003': 'http://purl.obolibrary.org/obo/BFO_0000003',
	/** b is an independent continuant =Def b is a continuant which is such that there is no c such that b s-depends on c and no c such that b g-depends on c */
	'BFO_0000004': 'http://purl.obolibrary.org/obo/BFO_0000004',
	/** (Elucidation) A spatial region is a continuant entity that is a continuant part of the spatial projection of a portion of spacetime at a given time */
	'BFO_0000006': 'http://purl.obolibrary.org/obo/BFO_0000006',
	/** (Elucidation) A temporal region is an occurrent over which processes can unfold */
	'BFO_0000008': 'http://purl.obolibrary.org/obo/BFO_0000008',
	/** (Elucidation) A two-dimensional spatial region is a spatial region that is a whole consisting of a surface together with zero or more surfaces and/or spatial regions of lower dimension as parts */
	'BFO_0000009': 'http://purl.obolibrary.org/obo/BFO_0000009',
	/** 'Spacetime' here refers to the maximal instance of the universal spatiotemporal region. */
	'BFO_0000011': 'http://purl.obolibrary.org/obo/BFO_0000011',
	/** (Elucidation) p is a process means p is an occurrent that has some temporal proper part and for some time t, p has some material entity as participant at t */
	'BFO_0000015': 'http://purl.obolibrary.org/obo/BFO_0000015',
	/** (Elucidation) b is a disposition means: b is a realizable entity & b is such that if it ceases to exist, then its bearer is physically changed, & b's realization occurs when and because this bearer is in some special physical circumstances, & this realization occurs in virtue of the bearer's physical make-up */
	'BFO_0000016': 'http://purl.obolibrary.org/obo/BFO_0000016',
	/** (Elucidation) b is a realizable entity means: b is a specifically dependent continuant that inheres in some independent continuant which is not a spatial region and is of a type some instances of which are realized in processes of a correlated type */
	'BFO_0000017': 'http://purl.obolibrary.org/obo/BFO_0000017',
	/** (Elucidation) A zero-dimensional spatial region is one or a collection of more than one spatially disjoint points in space */
	'BFO_0000018': 'http://purl.obolibrary.org/obo/BFO_0000018',
	/** (Elucidation) a quality is a specifically dependent continuant that, in contrast to roles and dispositions, does not require any further process in order to be realized */
	'BFO_0000019': 'http://purl.obolibrary.org/obo/BFO_0000019',
	/** On the multiple bearers case, see relational quality. */
	'BFO_0000020': 'http://purl.obolibrary.org/obo/BFO_0000020',
	/** (Elucidation) b is a role means: b is a realizable entity & b exists because there is some single bearer that is in some special physical, social, or institutional set of circumstances in which this bearer does not have to be & b is not such that, if it ceases to exist, then the physical make-up of the bearer is thereby changed */
	'BFO_0000023': 'http://purl.obolibrary.org/obo/BFO_0000023',
	/** (Elucidation) a fiat object part b is a material entity which is such that for all times t, if b exists at t then there is some object c such that b is a proper continuant part of c at t and b is demarcated from the remainder of c by one or more fiat surfaces */
	'BFO_0000024': 'http://purl.obolibrary.org/obo/BFO_0000024',
	/** (Elucidation) A one-dimensional spatial region is a whole consisting of a line together with zero or more lines and/or points as parts */
	'BFO_0000026': 'http://purl.obolibrary.org/obo/BFO_0000026',
	/** (Elucidation) an object aggregate is a material entity consisting exactly of a plurality (≥1) of objects as member parts which together form a unit */
	'BFO_0000027': 'http://purl.obolibrary.org/obo/BFO_0000027',
	/** (Elucidation) A three-dimensional spatial region is a whole consisting of a spatial volume together with zero or more spatial volumes and/or spatial regions of lower dimension as parts */
	'BFO_0000028': 'http://purl.obolibrary.org/obo/BFO_0000028',
	/** (Elucidation) b is a site means: b is a three-dimensional immaterial entity whose boundaries either (1) (partially or wholly) coincide with the boundaries of one or more material entities or (2) have locations determined in relation to some material entity */
	'BFO_0000029': 'http://purl.obolibrary.org/obo/BFO_0000029',
	/** A description of three primary sorts of causal unity is provided in Basic Formal Ontology 2.0. Specification and User’s Guide */
	'BFO_0000030': 'http://purl.obolibrary.org/obo/BFO_0000030',
	/** (Elucidation) a generically dependent continuant is an entity that exists in virtue of the fact that there is at least one of what may be multiple copies; it is the content or the pattern that the multiple copies share */
	'BFO_0000031': 'http://purl.obolibrary.org/obo/BFO_0000031',
	/** (Elucidation) A function is a disposition that exists in virtue of the bearer's physical make-up and this physical make-up is something the bearer possesses because it came into being either through evolution (in the case of natural biological entities) or through intentional design (in the case of artefacts), in order to realize processes of a certain sort */
	'BFO_0000034': 'http://purl.obolibrary.org/obo/BFO_0000034',
	/** p is a process boundary =Def p is a temporal part of a process & p has no proper temporal parts */
	'BFO_0000035': 'http://purl.obolibrary.org/obo/BFO_0000035',
	/** (Elucidation) A one-dimensional temporal region is a temporal region is a whole that has a temporal interval and zero or more temporal intervals and temporal instants as parts */
	'BFO_0000038': 'http://purl.obolibrary.org/obo/BFO_0000038',
	/** (Elucidation) A material entity is an independent continuant that at all times at which it exists has some portion of matter as continuant part */
	'BFO_0000040': 'http://purl.obolibrary.org/obo/BFO_0000040',
	/** b has realization c =Def c realizes b */
	'BFO_0000054': 'http://purl.obolibrary.org/obo/BFO_0000054',
	/** (Elucidation) b realizes c means: b is a process & c is a realizable entity that inheres in d & for all t, if b has participant d at t then c exists at t & the type instantiated by b is correlated with the type instantiated by c */
	'BFO_0000055': 'http://purl.obolibrary.org/obo/BFO_0000055',
	/** b participates in p at some time =Def for some time t (p has participant b at t) */
	'BFO_0000056': 'http://purl.obolibrary.org/obo/BFO_0000056',
	/** p has participant c at some time =Def for some time t (p is a process, c is a continuant, and c participates in p some way at t) */
	'BFO_0000057': 'http://purl.obolibrary.org/obo/BFO_0000057',
	/** a g-dependent continuant c is concretized at some time by an s-dependent continuant or process b =Def for some time t, b concretizes c at t) */
	'BFO_0000058': 'http://purl.obolibrary.org/obo/BFO_0000058',
	/** an s-dependent continuant b concretizes a g-dependent continuant c at some time =Def for some time t (c is the pattern or content which b shares at t with actual or potential copies) */
	'BFO_0000059': 'http://purl.obolibrary.org/obo/BFO_0000059',
	/** b preceded by c =Def b precedes c */
	'BFO_0000062': 'http://purl.obolibrary.org/obo/BFO_0000062',
	/** (Elucidation) If o, o' are occurrents and t is the temporal extent of o and t' is the temporal extent of o' then o precedes o' means: either last instant of o is before first instant of o'  or last instant of o = first instant of o' and neither o nor o' are temporal instants */
	'BFO_0000063': 'http://purl.obolibrary.org/obo/BFO_0000063',
	/** b occurs in c =Def b is a process or a process boundary and c is a material entity or immaterial entity & there exists a spatiotemporal region r and b occupies spatiotemporal region r & for all t, if b exists at t then c exists at t & there exist spatial regions s and s' where b spatially projects onto s at t & c occupies spatial region s' at t & s is a continuant part of s' at t */
	'BFO_0000066': 'http://purl.obolibrary.org/obo/BFO_0000066',
	/** b located in c at all times =Def for all times t, b exists at t implies (b and c are independent continuants and not spatial regions, and the spatial region which b occupies at t is a (proper or improper) continuant part of the spatial region which c occupies at t) */
	'BFO_0000082': 'http://purl.obolibrary.org/obo/BFO_0000082',
	/** a g-dependent continuant b g-depends on an independent continuant c at some time =Def for some time t (there inheres in c an s-dependent continuant which concretizes b at t) */
	'BFO_0000084': 'http://purl.obolibrary.org/obo/BFO_0000084',
	/** b is carrier of c at some time =Def for some time t (c g-depends on b at t) */
	'BFO_0000101': 'http://purl.obolibrary.org/obo/BFO_0000101',
	/** (Elucidation) exists at is a relation between a particular and some temporal region at which the particular exists */
	'BFO_0000108': 'http://purl.obolibrary.org/obo/BFO_0000108',
	/** b has continuant part c at all times =Def for all times t, b exists at t implies (b and c are continuants & b is a part of c at t) */
	'BFO_0000110': 'http://purl.obolibrary.org/obo/BFO_0000110',
	/** b has proper continuant part c at all times =Def c proper continuant part of b at all times */
	'BFO_0000111': 'http://purl.obolibrary.org/obo/BFO_0000111',
	/** b has material basis c at all times =Def For all times t, b exists at t implies (b is a disposition & c is a material entity & there is some d bearer of b & c continuant part of d at t & d has disposition b because c continuant part of d at t) */
	'BFO_0000113': 'http://purl.obolibrary.org/obo/BFO_0000113',
	/** b has member part c at some time =Def for some time t (c member part of b at t) */
	'BFO_0000115': 'http://purl.obolibrary.org/obo/BFO_0000115',
	/** (Elucidation) b has occurrent part c means: c is a part of b & b and c are occurrents */
	'BFO_0000117': 'http://purl.obolibrary.org/obo/BFO_0000117',
	/** b has proper occurrent part c =Def b has occurrent part c & b and c are not identical */
	'BFO_0000118': 'http://purl.obolibrary.org/obo/BFO_0000118',
	/** b has temporal part c =Def c temporal part of b */
	'BFO_0000121': 'http://purl.obolibrary.org/obo/BFO_0000121',
	/** b location of c at some time =Def for some time t (c located in b at t) */
	'BFO_0000124': 'http://purl.obolibrary.org/obo/BFO_0000124',
	/** b material basis of c at some time =Def at some time t (c has material basis b at t) */
	'BFO_0000127': 'http://purl.obolibrary.org/obo/BFO_0000127',
	/** b member part of c at some time =Def for some time t (b is an object & there is at t a mutually exhaustive and pairwise disjoint partition of c into objects x1, ..., xn (for some n ≠ 1) with b = xi (for some 1 <= i <= n)) */
	'BFO_0000129': 'http://purl.obolibrary.org/obo/BFO_0000129',
	/** (Elucidation) b occurrent part of c =Def c has occurrent part b */
	'BFO_0000132': 'http://purl.obolibrary.org/obo/BFO_0000132',
	/** b proper temporal part of c =Def b temporal part of c & not (b = c) */
	'BFO_0000136': 'http://purl.obolibrary.org/obo/BFO_0000136',
	/** b proper continuant part of c at all times =Def for all times t, b exists at t implies (b continuant part of c at t & not (c proper continuant part of b at t)) */
	'BFO_0000137': 'http://purl.obolibrary.org/obo/BFO_0000137',
	/** b proper occurrent part of c =Def b occurrent part of c & b and c are not identical */
	'BFO_0000138': 'http://purl.obolibrary.org/obo/BFO_0000138',
	/** b temporal part of c =Def b occurrent part of c & either b and c are temporal regions or b and c are spatiotemporal regions & b temporally projects onto an occurrent part of the temporal region that c temporally projects onto or b and c are processes or process boundaries & b occupies a temporal region that is an occurrent part of the temporal region that c occupies */
	'BFO_0000139': 'http://purl.obolibrary.org/obo/BFO_0000139',
	/** (Elucidation) b is a continuant fiat boundary means: b is an immaterial entity that is of zero, one or two dimensions, which is such that there is no time t when b has a spatial region as continuant part at t, and whose location is determined in relation to some material entity */
	'BFO_0000140': 'http://purl.obolibrary.org/obo/BFO_0000140',
	/** a is an immaterial entity =Def a is an independent continuant which is such that there is no time t when it has a material entity as continuant part at t */
	'BFO_0000141': 'http://purl.obolibrary.org/obo/BFO_0000141',
	/** (Elucidation) a fiat line is a one-dimensional continuant fiat boundary that is continuous */
	'BFO_0000142': 'http://purl.obolibrary.org/obo/BFO_0000142',
	/** b is a relational quality =Def b is a quality and there exists c and d such that b and c are not identical, & b s-depends on c & b s-depends on d */
	'BFO_0000145': 'http://purl.obolibrary.org/obo/BFO_0000145',
	/** (Elucidation) a fiat surface is a two-dimensional continuant fiat boundary that is self-connected */
	'BFO_0000146': 'http://purl.obolibrary.org/obo/BFO_0000146',
	/** (Elucidation) a fiat point is a zero-dimensional continuant fiat boundary that consists of a single point */
	'BFO_0000147': 'http://purl.obolibrary.org/obo/BFO_0000147',
	/** (Elucidation) A zero-dimensional temporal region is a temporal region that is a whole consisting of one or more separated temporal instants as parts */
	'BFO_0000148': 'http://purl.obolibrary.org/obo/BFO_0000148',
	/** (Elucidation) temporally projects onto is a relation between a spatiotemporal region s and some temporal region which is the temporal extent of s */
	'BFO_0000153': 'http://purl.obolibrary.org/obo/BFO_0000153',
	/** b material basis of c at all times =Def for all times t, b exists at t implies (c has material basis b at t) */
	'BFO_0000163': 'http://purl.obolibrary.org/obo/BFO_0000163',
	/** an s-dependent continuant b concretizes a g-dependent continuant c at all times =Def for all times t, b exists at t implies (c is the pattern or content which b shares at t with actual or potential copies) */
	'BFO_0000164': 'http://purl.obolibrary.org/obo/BFO_0000164',
	/** a g-dependent continuant c is concretized by an s-dependent continuant or process b at all times =Def for all times t, b exists at t implies (b concretizes c at t) */
	'BFO_0000165': 'http://purl.obolibrary.org/obo/BFO_0000165',
	/** b participates in p at all times =Def for all times t, b exists at t implies (p has participant b at t) */
	'BFO_0000166': 'http://purl.obolibrary.org/obo/BFO_0000166',
	/** p has participant c at all times =Def for all times t, p exists at t implies (p is a process, c is a continuant, and c participates in p some way at t) */
	'BFO_0000167': 'http://purl.obolibrary.org/obo/BFO_0000167',
	/** b location of c at all times =Def for all times t, b exists at t implies (c located in b at t) */
	'BFO_0000170': 'http://purl.obolibrary.org/obo/BFO_0000170',
	/** b located in c at some time =Def for some time t (b and c are independent continuants and not spatial regions, and the spatial region which b occupies at t is a (proper or improper) continuant part of the spatial region which c occupies at t) */
	'BFO_0000171': 'http://purl.obolibrary.org/obo/BFO_0000171',
	/** b has member part c at all times =Def for all times t, b exists at t implies (c member part b at t) */
	'BFO_0000172': 'http://purl.obolibrary.org/obo/BFO_0000172',
	/** b member part of c at all times =Def for all times t, b exists at t implies (b is an object & c is an object aggregate & there is at t a mutually exhaustive and pairwise disjoint partition of c into objects x1,..., xn (for some n ≠ 1) with b = xi (for some 1 <= i <= n)) */
	'BFO_0000173': 'http://purl.obolibrary.org/obo/BFO_0000173',
	/** b has proper continuant part c at some time =Def c proper continuant part of b at some time */
	'BFO_0000174': 'http://purl.obolibrary.org/obo/BFO_0000174',
	/** b proper continuant part of c at some time =Def for some time t (b continuant part of c at t & not (c continuant part of b at t) */
	'BFO_0000175': 'http://purl.obolibrary.org/obo/BFO_0000175',
	/** b continuant part of c at some time =Def for some time t (b exists at t and c exists at t and b continuant part of c at t & t is a temporal region & b and c are continuants) */
	'BFO_0000176': 'http://purl.obolibrary.org/obo/BFO_0000176',
	/** b continuant part of c at all times =Def for all times t, (b exists at t, implies b continuant part of c at t & t is a temporal region & b and c are continuants) */
	'BFO_0000177': 'http://purl.obolibrary.org/obo/BFO_0000177',
	/** b has continuant part c at some time =Def for some time t (b and c are continuants & b is a part of c at t) */
	'BFO_0000178': 'http://purl.obolibrary.org/obo/BFO_0000178',
	/** b has proper temporal part c =Def c proper temporal part of b */
	'BFO_0000181': 'http://purl.obolibrary.org/obo/BFO_0000181',
	/** (Elucidation) A history is a process that is the sum of the totality of processes taking place in the spatiotemporal region occupied by the material part of a material entity */
	'BFO_0000182': 'http://purl.obolibrary.org/obo/BFO_0000182',
	/** b environs c =Def c occurs in b */
	'BFO_0000183': 'http://purl.obolibrary.org/obo/BFO_0000183',
	/** (Elucidation) b history of c if c is a material entity and b is a history that is the unique history of c */
	'BFO_0000184': 'http://purl.obolibrary.org/obo/BFO_0000184',
	/** b has history c =Def c history of b */
	'BFO_0000185': 'http://purl.obolibrary.org/obo/BFO_0000185',
	/** b s-depended on by c =Def c specifically depends on b */
	'BFO_0000194': 'http://purl.obolibrary.org/obo/BFO_0000194',
	/** (Elucidation) b specifically depends on c means: b and c do not share common parts & b is of a nature such that at all times t it cannot exist at t unless c exists at t & b is not a boundary of c */
	'BFO_0000195': 'http://purl.obolibrary.org/obo/BFO_0000195',
	/** b bearer of c =Def c inheres in b */
	'BFO_0000196': 'http://purl.obolibrary.org/obo/BFO_0000196',
	/** b inheres in c =Def b is a specifically dependent continuant & c is an independent continuant that is not a spatial region & b s-depends on c */
	'BFO_0000197': 'http://purl.obolibrary.org/obo/BFO_0000197',
	/** p occupies temporal region t =Def the spatiotemporal region occupied by p temporally projects onto t */
	'BFO_0000199': 'http://purl.obolibrary.org/obo/BFO_0000199',
	/** (Elucidation) p occupies spatiotemporal region s is a relation between an occurrent p and the spatiotemporal region s which is its spatiotemporal extent */
	'BFO_0000200': 'http://purl.obolibrary.org/obo/BFO_0000200',
	/** A one-dimensional temporal region can include as parts not only temporal intervals but also temporal instants separated from other parts by gaps. */
	'BFO_0000202': 'http://purl.obolibrary.org/obo/BFO_0000202',
	/** (Elucidation) a temporal instant is a zero-dimensional temporal region that has no proper temporal part */
	'BFO_0000203': 'http://purl.obolibrary.org/obo/BFO_0000203',
	/** an independent continuant c that is not a spatial region occupies spatial region r at some time =Def for some time t (every continuant part of c occupies some continuant part of r at t and no continuant part of c occupies any spatial region that is not a continuant part of r at t) */
	'BFO_0000210': 'http://purl.obolibrary.org/obo/BFO_0000210',
	/** an independent continuant c that is not a spatial region occupies spatial region r at all times =Def for all times t, b exists at t implies (every continuant part of c occupies some continuant part of r at t and no continuant part of c occupies any spatial region that is not a continuant part of r at t) */
	'BFO_0000211': 'http://purl.obolibrary.org/obo/BFO_0000211',
	/** b spatially projects onto c at some time =Def for some time t (b is a spatiotemporal region and c is a spatial region and c is the spatial extent of b at t) */
	'BFO_0000216': 'http://purl.obolibrary.org/obo/BFO_0000216',
	/** b spatially projects onto c at all times =Def for all times t, b exists at t implies (b is a spatiotemporal region and c is a spatial region and c is the spatial extent of b at t) */
	'BFO_0000217': 'http://purl.obolibrary.org/obo/BFO_0000217',
	/** b has material basis c at some time =Def For some time t (b is a disposition & c is a material entity & there is some d bearer of b & c continuant part of d at t & d has disposition b because c continuant part of d at t) */
	'BFO_0000218': 'http://purl.obolibrary.org/obo/BFO_0000218',
	/** a g-dependent continuant b g-depends on an independent continuant c at all times =Def for all times t, b exists at t implies (there inheres in c an s-dependent continuant which concretizes b at t) */
	'BFO_0000219': 'http://purl.obolibrary.org/obo/BFO_0000219',
	/** b is carrier of c at all times =Def for all times t, b exists at t implies (c g-depends on b at t) */
	'BFO_0000220': 'http://purl.obolibrary.org/obo/BFO_0000220',
	/** temporal instant t first instant of temporal region t' =Def t precedes all temporal parts of t' other than t */
	'BFO_0000221': 'http://purl.obolibrary.org/obo/BFO_0000221',
	/** t has first instant t' =Def t' first instant of t */
	'BFO_0000222': 'http://purl.obolibrary.org/obo/BFO_0000222',
	/** temporal instant t last instant of temporal region t' =Def all temporal parts of t' other than t precede t */
	'BFO_0000223': 'http://purl.obolibrary.org/obo/BFO_0000223',
	/** t has last instant t' =Def t' last instant of t */
	'BFO_0000224': 'http://purl.obolibrary.org/obo/BFO_0000224',
	/** The most recent version of this file will always be in the GitHub repository https://github.com/bfo-ontology/bfo-2020 */
	'bfo_owl': 'http://purl.obolibrary.org/obo/bfo.owl',
}

/** Namespace URI of the bfo vocabulary. */
export const _bfo = new n3.NamedNode('http://purl.obolibrary.org/obo/');

export const bfo = {
	/** (Elucidation) An entity is anything that exists or has existed or will exist */
	'BFO_0000001': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000001'),
	/** (Elucidation) A continuant is an entity that persists, endures, or continues to exist through time while maintaining its identity */
	'BFO_0000002': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000002'),
	/** (Elucidation) An occurrent is an entity that unfolds itself in time or it is the start or end of such an entity or it is a temporal or spatiotemporal region */
	'BFO_0000003': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000003'),
	/** b is an independent continuant =Def b is a continuant which is such that there is no c such that b s-depends on c and no c such that b g-depends on c */
	'BFO_0000004': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000004'),
	/** (Elucidation) A spatial region is a continuant entity that is a continuant part of the spatial projection of a portion of spacetime at a given time */
	'BFO_0000006': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000006'),
	/** (Elucidation) A temporal region is an occurrent over which processes can unfold */
	'BFO_0000008': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000008'),
	/** (Elucidation) A two-dimensional spatial region is a spatial region that is a whole consisting of a surface together with zero or more surfaces and/or spatial regions of lower dimension as parts */
	'BFO_0000009': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000009'),
	/** 'Spacetime' here refers to the maximal instance of the universal spatiotemporal region. */
	'BFO_0000011': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000011'),
	/** (Elucidation) p is a process means p is an occurrent that has some temporal proper part and for some time t, p has some material entity as participant at t */
	'BFO_0000015': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000015'),
	/** (Elucidation) b is a disposition means: b is a realizable entity & b is such that if it ceases to exist, then its bearer is physically changed, & b's realization occurs when and because this bearer is in some special physical circumstances, & this realization occurs in virtue of the bearer's physical make-up */
	'BFO_0000016': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000016'),
	/** (Elucidation) b is a realizable entity means: b is a specifically dependent continuant that inheres in some independent continuant which is not a spatial region and is of a type some instances of which are realized in processes of a correlated type */
	'BFO_0000017': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000017'),
	/** (Elucidation) A zero-dimensional spatial region is one or a collection of more than one spatially disjoint points in space */
	'BFO_0000018': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000018'),
	/** (Elucidation) a quality is a specifically dependent continuant that, in contrast to roles and dispositions, does not require any further process in order to be realized */
	'BFO_0000019': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000019'),
	/** On the multiple bearers case, see relational quality. */
	'BFO_0000020': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000020'),
	/** (Elucidation) b is a role means: b is a realizable entity & b exists because there is some single bearer that is in some special physical, social, or institutional set of circumstances in which this bearer does not have to be & b is not such that, if it ceases to exist, then the physical make-up of the bearer is thereby changed */
	'BFO_0000023': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000023'),
	/** (Elucidation) a fiat object part b is a material entity which is such that for all times t, if b exists at t then there is some object c such that b is a proper continuant part of c at t and b is demarcated from the remainder of c by one or more fiat surfaces */
	'BFO_0000024': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000024'),
	/** (Elucidation) A one-dimensional spatial region is a whole consisting of a line together with zero or more lines and/or points as parts */
	'BFO_0000026': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000026'),
	/** (Elucidation) an object aggregate is a material entity consisting exactly of a plurality (≥1) of objects as member parts which together form a unit */
	'BFO_0000027': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000027'),
	/** (Elucidation) A three-dimensional spatial region is a whole consisting of a spatial volume together with zero or more spatial volumes and/or spatial regions of lower dimension as parts */
	'BFO_0000028': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000028'),
	/** (Elucidation) b is a site means: b is a three-dimensional immaterial entity whose boundaries either (1) (partially or wholly) coincide with the boundaries of one or more material entities or (2) have locations determined in relation to some material entity */
	'BFO_0000029': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000029'),
	/** A description of three primary sorts of causal unity is provided in Basic Formal Ontology 2.0. Specification and User’s Guide */
	'BFO_0000030': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000030'),
	/** (Elucidation) a generically dependent continuant is an entity that exists in virtue of the fact that there is at least one of what may be multiple copies; it is the content or the pattern that the multiple copies share */
	'BFO_0000031': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000031'),
	/** (Elucidation) A function is a disposition that exists in virtue of the bearer's physical make-up and this physical make-up is something the bearer possesses because it came into being either through evolution (in the case of natural biological entities) or through intentional design (in the case of artefacts), in order to realize processes of a certain sort */
	'BFO_0000034': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000034'),
	/** p is a process boundary =Def p is a temporal part of a process & p has no proper temporal parts */
	'BFO_0000035': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000035'),
	/** (Elucidation) A one-dimensional temporal region is a temporal region is a whole that has a temporal interval and zero or more temporal intervals and temporal instants as parts */
	'BFO_0000038': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000038'),
	/** (Elucidation) A material entity is an independent continuant that at all times at which it exists has some portion of matter as continuant part */
	'BFO_0000040': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000040'),
	/** b has realization c =Def c realizes b */
	'BFO_0000054': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000054'),
	/** (Elucidation) b realizes c means: b is a process & c is a realizable entity that inheres in d & for all t, if b has participant d at t then c exists at t & the type instantiated by b is correlated with the type instantiated by c */
	'BFO_0000055': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000055'),
	/** b participates in p at some time =Def for some time t (p has participant b at t) */
	'BFO_0000056': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000056'),
	/** p has participant c at some time =Def for some time t (p is a process, c is a continuant, and c participates in p some way at t) */
	'BFO_0000057': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000057'),
	/** a g-dependent continuant c is concretized at some time by an s-dependent continuant or process b =Def for some time t, b concretizes c at t) */
	'BFO_0000058': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000058'),
	/** an s-dependent continuant b concretizes a g-dependent continuant c at some time =Def for some time t (c is the pattern or content which b shares at t with actual or potential copies) */
	'BFO_0000059': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000059'),
	/** b preceded by c =Def b precedes c */
	'BFO_0000062': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000062'),
	/** (Elucidation) If o, o' are occurrents and t is the temporal extent of o and t' is the temporal extent of o' then o precedes o' means: either last instant of o is before first instant of o'  or last instant of o = first instant of o' and neither o nor o' are temporal instants */
	'BFO_0000063': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000063'),
	/** b occurs in c =Def b is a process or a process boundary and c is a material entity or immaterial entity & there exists a spatiotemporal region r and b occupies spatiotemporal region r & for all t, if b exists at t then c exists at t & there exist spatial regions s and s' where b spatially projects onto s at t & c occupies spatial region s' at t & s is a continuant part of s' at t */
	'BFO_0000066': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000066'),
	/** b located in c at all times =Def for all times t, b exists at t implies (b and c are independent continuants and not spatial regions, and the spatial region which b occupies at t is a (proper or improper) continuant part of the spatial region which c occupies at t) */
	'BFO_0000082': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000082'),
	/** a g-dependent continuant b g-depends on an independent continuant c at some time =Def for some time t (there inheres in c an s-dependent continuant which concretizes b at t) */
	'BFO_0000084': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000084'),
	/** b is carrier of c at some time =Def for some time t (c g-depends on b at t) */
	'BFO_0000101': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000101'),
	/** (Elucidation) exists at is a relation between a particular and some temporal region at which the particular exists */
	'BFO_0000108': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000108'),
	/** b has continuant part c at all times =Def for all times t, b exists at t implies (b and c are continuants & b is a part of c at t) */
	'BFO_0000110': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000110'),
	/** b has proper continuant part c at all times =Def c proper continuant part of b at all times */
	'BFO_0000111': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000111'),
	/** b has material basis c at all times =Def For all times t, b exists at t implies (b is a disposition & c is a material entity & there is some d bearer of b & c continuant part of d at t & d has disposition b because c continuant part of d at t) */
	'BFO_0000113': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000113'),
	/** b has member part c at some time =Def for some time t (c member part of b at t) */
	'BFO_0000115': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000115'),
	/** (Elucidation) b has occurrent part c means: c is a part of b & b and c are occurrents */
	'BFO_0000117': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000117'),
	/** b has proper occurrent part c =Def b has occurrent part c & b and c are not identical */
	'BFO_0000118': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000118'),
	/** b has temporal part c =Def c temporal part of b */
	'BFO_0000121': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000121'),
	/** b location of c at some time =Def for some time t (c located in b at t) */
	'BFO_0000124': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000124'),
	/** b material basis of c at some time =Def at some time t (c has material basis b at t) */
	'BFO_0000127': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000127'),
	/** b member part of c at some time =Def for some time t (b is an object & there is at t a mutually exhaustive and pairwise disjoint partition of c into objects x1, ..., xn (for some n ≠ 1) with b = xi (for some 1 <= i <= n)) */
	'BFO_0000129': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000129'),
	/** (Elucidation) b occurrent part of c =Def c has occurrent part b */
	'BFO_0000132': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000132'),
	/** b proper temporal part of c =Def b temporal part of c & not (b = c) */
	'BFO_0000136': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000136'),
	/** b proper continuant part of c at all times =Def for all times t, b exists at t implies (b continuant part of c at t & not (c proper continuant part of b at t)) */
	'BFO_0000137': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000137'),
	/** b proper occurrent part of c =Def b occurrent part of c & b and c are not identical */
	'BFO_0000138': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000138'),
	/** b temporal part of c =Def b occurrent part of c & either b and c are temporal regions or b and c are spatiotemporal regions & b temporally projects onto an occurrent part of the temporal region that c temporally projects onto or b and c are processes or process boundaries & b occupies a temporal region that is an occurrent part of the temporal region that c occupies */
	'BFO_0000139': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000139'),
	/** (Elucidation) b is a continuant fiat boundary means: b is an immaterial entity that is of zero, one or two dimensions, which is such that there is no time t when b has a spatial region as continuant part at t, and whose location is determined in relation to some material entity */
	'BFO_0000140': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000140'),
	/** a is an immaterial entity =Def a is an independent continuant which is such that there is no time t when it has a material entity as continuant part at t */
	'BFO_0000141': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000141'),
	/** (Elucidation) a fiat line is a one-dimensional continuant fiat boundary that is continuous */
	'BFO_0000142': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000142'),
	/** b is a relational quality =Def b is a quality and there exists c and d such that b and c are not identical, & b s-depends on c & b s-depends on d */
	'BFO_0000145': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000145'),
	/** (Elucidation) a fiat surface is a two-dimensional continuant fiat boundary that is self-connected */
	'BFO_0000146': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000146'),
	/** (Elucidation) a fiat point is a zero-dimensional continuant fiat boundary that consists of a single point */
	'BFO_0000147': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000147'),
	/** (Elucidation) A zero-dimensional temporal region is a temporal region that is a whole consisting of one or more separated temporal instants as parts */
	'BFO_0000148': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000148'),
	/** (Elucidation) temporally projects onto is a relation between a spatiotemporal region s and some temporal region which is the temporal extent of s */
	'BFO_0000153': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000153'),
	/** b material basis of c at all times =Def for all times t, b exists at t implies (c has material basis b at t) */
	'BFO_0000163': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000163'),
	/** an s-dependent continuant b concretizes a g-dependent continuant c at all times =Def for all times t, b exists at t implies (c is the pattern or content which b shares at t with actual or potential copies) */
	'BFO_0000164': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000164'),
	/** a g-dependent continuant c is concretized by an s-dependent continuant or process b at all times =Def for all times t, b exists at t implies (b concretizes c at t) */
	'BFO_0000165': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000165'),
	/** b participates in p at all times =Def for all times t, b exists at t implies (p has participant b at t) */
	'BFO_0000166': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000166'),
	/** p has participant c at all times =Def for all times t, p exists at t implies (p is a process, c is a continuant, and c participates in p some way at t) */
	'BFO_0000167': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000167'),
	/** b location of c at all times =Def for all times t, b exists at t implies (c located in b at t) */
	'BFO_0000170': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000170'),
	/** b located in c at some time =Def for some time t (b and c are independent continuants and not spatial regions, and the spatial region which b occupies at t is a (proper or improper) continuant part of the spatial region which c occupies at t) */
	'BFO_0000171': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000171'),
	/** b has member part c at all times =Def for all times t, b exists at t implies (c member part b at t) */
	'BFO_0000172': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000172'),
	/** b member part of c at all times =Def for all times t, b exists at t implies (b is an object & c is an object aggregate & there is at t a mutually exhaustive and pairwise disjoint partition of c into objects x1,..., xn (for some n ≠ 1) with b = xi (for some 1 <= i <= n)) */
	'BFO_0000173': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000173'),
	/** b has proper continuant part c at some time =Def c proper continuant part of b at some time */
	'BFO_0000174': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000174'),
	/** b proper continuant part of c at some time =Def for some time t (b continuant part of c at t & not (c continuant part of b at t) */
	'BFO_0000175': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000175'),
	/** b continuant part of c at some time =Def for some time t (b exists at t and c exists at t and b continuant part of c at t & t is a temporal region & b and c are continuants) */
	'BFO_0000176': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000176'),
	/** b continuant part of c at all times =Def for all times t, (b exists at t, implies b continuant part of c at t & t is a temporal region & b and c are continuants) */
	'BFO_0000177': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000177'),
	/** b has continuant part c at some time =Def for some time t (b and c are continuants & b is a part of c at t) */
	'BFO_0000178': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000178'),
	/** b has proper temporal part c =Def c proper temporal part of b */
	'BFO_0000181': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000181'),
	/** (Elucidation) A history is a process that is the sum of the totality of processes taking place in the spatiotemporal region occupied by the material part of a material entity */
	'BFO_0000182': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000182'),
	/** b environs c =Def c occurs in b */
	'BFO_0000183': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000183'),
	/** (Elucidation) b history of c if c is a material entity and b is a history that is the unique history of c */
	'BFO_0000184': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000184'),
	/** b has history c =Def c history of b */
	'BFO_0000185': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000185'),
	/** b s-depended on by c =Def c specifically depends on b */
	'BFO_0000194': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000194'),
	/** (Elucidation) b specifically depends on c means: b and c do not share common parts & b is of a nature such that at all times t it cannot exist at t unless c exists at t & b is not a boundary of c */
	'BFO_0000195': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000195'),
	/** b bearer of c =Def c inheres in b */
	'BFO_0000196': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000196'),
	/** b inheres in c =Def b is a specifically dependent continuant & c is an independent continuant that is not a spatial region & b s-depends on c */
	'BFO_0000197': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000197'),
	/** p occupies temporal region t =Def the spatiotemporal region occupied by p temporally projects onto t */
	'BFO_0000199': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000199'),
	/** (Elucidation) p occupies spatiotemporal region s is a relation between an occurrent p and the spatiotemporal region s which is its spatiotemporal extent */
	'BFO_0000200': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000200'),
	/** A one-dimensional temporal region can include as parts not only temporal intervals but also temporal instants separated from other parts by gaps. */
	'BFO_0000202': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000202'),
	/** (Elucidation) a temporal instant is a zero-dimensional temporal region that has no proper temporal part */
	'BFO_0000203': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000203'),
	/** an independent continuant c that is not a spatial region occupies spatial region r at some time =Def for some time t (every continuant part of c occupies some continuant part of r at t and no continuant part of c occupies any spatial region that is not a continuant part of r at t) */
	'BFO_0000210': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000210'),
	/** an independent continuant c that is not a spatial region occupies spatial region r at all times =Def for all times t, b exists at t implies (every continuant part of c occupies some continuant part of r at t and no continuant part of c occupies any spatial region that is not a continuant part of r at t) */
	'BFO_0000211': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000211'),
	/** b spatially projects onto c at some time =Def for some time t (b is a spatiotemporal region and c is a spatial region and c is the spatial extent of b at t) */
	'BFO_0000216': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000216'),
	/** b spatially projects onto c at all times =Def for all times t, b exists at t implies (b is a spatiotemporal region and c is a spatial region and c is the spatial extent of b at t) */
	'BFO_0000217': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000217'),
	/** b has material basis c at some time =Def For some time t (b is a disposition & c is a material entity & there is some d bearer of b & c continuant part of d at t & d has disposition b because c continuant part of d at t) */
	'BFO_0000218': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000218'),
	/** a g-dependent continuant b g-depends on an independent continuant c at all times =Def for all times t, b exists at t implies (there inheres in c an s-dependent continuant which concretizes b at t) */
	'BFO_0000219': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000219'),
	/** b is carrier of c at all times =Def for all times t, b exists at t implies (c g-depends on b at t) */
	'BFO_0000220': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000220'),
	/** temporal instant t first instant of temporal region t' =Def t precedes all temporal parts of t' other than t */
	'BFO_0000221': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000221'),
	/** t has first instant t' =Def t' first instant of t */
	'BFO_0000222': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000222'),
	/** temporal instant t last instant of temporal region t' =Def all temporal parts of t' other than t precede t */
	'BFO_0000223': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000223'),
	/** t has last instant t' =Def t' last instant of t */
	'BFO_0000224': new n3.NamedNode('http://purl.obolibrary.org/obo/BFO_0000224'),
	/** The most recent version of this file will always be in the GitHub repository https://github.com/bfo-ontology/bfo-2020 */
	'bfo_owl': new n3.NamedNode('http://purl.obolibrary.org/obo/bfo.owl'),
}