import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the SPARQL vocabulary. */
export const _SPARQL = 'https://w3id.org/sparql-syntax#';

export const SPARQL = {
	/** A vocabulary for representing the syntax of SPARQL 1.2 queries and updates as RDF. */
	'sparql_syntax': 'https://w3id.org/sparql-syntax',
	'ABS': 'https://w3id.org/sparql-syntax#ABS',
	/** An ADD operation. SPARQL 1.2 Update grammar production [37]. */
	'Add': 'https://w3id.org/sparql-syntax#Add',
	/** An arithmetic + expression. */
	'Addition': 'https://w3id.org/sparql-syntax#Addition',
	/** Abstract superclass of the SPARQL aggregates. SPARQL 1.2 grammar production [137]. */
	'Aggregate': 'https://w3id.org/sparql-syntax#Aggregate',
	/** An (expression AS ?variable) alias in a SELECT clause or GROUP BY condition. */
	'Alias': 'https://w3id.org/sparql-syntax#Alias',
	/** All graphs as target of CLEAR or DROP (ALL keyword). */
	'AllGraphs': 'https://w3id.org/sparql-syntax#AllGraphs',
	/** A property path alternative (elt1 | elt2). SPARQL 1.2 grammar production [92]. */
	'AltPath': 'https://w3id.org/sparql-syntax#AltPath',
	/** A logical && expression. */
	'And': 'https://w3id.org/sparql-syntax#And',
	/** An explicit ASC(...) order condition. */
	'Asc': 'https://w3id.org/sparql-syntax#Asc',
	/** An ASK query. SPARQL 1.2 grammar production [14]. */
	'AskQuery': 'https://w3id.org/sparql-syntax#AskQuery',
	'Avg': 'https://w3id.org/sparql-syntax#Avg',
	'BNODE': 'https://w3id.org/sparql-syntax#BNODE',
	'BOUND': 'https://w3id.org/sparql-syntax#BOUND',
	/** A BIND assignment. SPARQL 1.2 grammar production [63]. */
	'Bind': 'https://w3id.org/sparql-syntax#Bind',
	/** A blank node written in query syntax (_:label, [], [...] or a collection cell), as opposed to the structural blank nodes of the representation itself. */
	'BlankNode': 'https://w3id.org/sparql-syntax#BlankNode',
	/** A call of a SPARQL built-in function; sparql:function points to the built-in function individual. SPARQL 1.2 grammar production [131]. */
	'BuiltInCall': 'https://w3id.org/sparql-syntax#BuiltInCall',
	/** The class of SPARQL built-in function individuals. */
	'BuiltInFunction': 'https://w3id.org/sparql-syntax#BuiltInFunction',
	'CEIL': 'https://w3id.org/sparql-syntax#CEIL',
	'COALESCE': 'https://w3id.org/sparql-syntax#COALESCE',
	'CONCAT': 'https://w3id.org/sparql-syntax#CONCAT',
	'CONTAINS': 'https://w3id.org/sparql-syntax#CONTAINS',
	/** A CLEAR operation. SPARQL 1.2 Update grammar production [34]. */
	'Clear': 'https://w3id.org/sparql-syntax#Clear',
	/** A CONSTRUCT query. SPARQL 1.2 grammar production [12]. */
	'ConstructQuery': 'https://w3id.org/sparql-syntax#ConstructQuery',
	/** A COPY operation. SPARQL 1.2 Update grammar production [39]. */
	'Copy': 'https://w3id.org/sparql-syntax#Copy',
	'Count': 'https://w3id.org/sparql-syntax#Count',
	/** A CREATE operation. SPARQL 1.2 Update grammar production [36]. */
	'Create': 'https://w3id.org/sparql-syntax#Create',
	'DATATYPE': 'https://w3id.org/sparql-syntax#DATATYPE',
	'DAY': 'https://w3id.org/sparql-syntax#DAY',
	/** The default graph as target of an update operation (DEFAULT keyword). */
	'DefaultGraph': 'https://w3id.org/sparql-syntax#DefaultGraph',
	/** A DELETE DATA operation. SPARQL 1.2 Update grammar production [41]. */
	'DeleteData': 'https://w3id.org/sparql-syntax#DeleteData',
	/** A DELETE WHERE operation. SPARQL 1.2 Update grammar production [42]. */
	'DeleteWhere': 'https://w3id.org/sparql-syntax#DeleteWhere',
	/** A DESC(...) order condition. */
	'Desc': 'https://w3id.org/sparql-syntax#Desc',
	/** A DESCRIBE query. SPARQL 1.2 grammar production [13]. */
	'DescribeQuery': 'https://w3id.org/sparql-syntax#DescribeQuery',
	/** An arithmetic / expression. */
	'Division': 'https://w3id.org/sparql-syntax#Division',
	/** A DROP operation. SPARQL 1.2 Update grammar production [35]. */
	'Drop': 'https://w3id.org/sparql-syntax#Drop',
	'ENCODE_FOR_URI': 'https://w3id.org/sparql-syntax#ENCODE_FOR_URI',
	/** An = comparison. */
	'Eq': 'https://w3id.org/sparql-syntax#Eq',
	/** An EXISTS expression with an embedded graph pattern. SPARQL 1.2 grammar production [135]. */
	'Exists': 'https://w3id.org/sparql-syntax#Exists',
	/** Abstract superclass of all compound SPARQL expressions. Atomic expressions (variables, IRIs, literals) appear directly as terms. */
	'Expression': 'https://w3id.org/sparql-syntax#Expression',
	'FLOOR': 'https://w3id.org/sparql-syntax#FLOOR',
	/** A FILTER constraint. SPARQL 1.2 grammar production [71]. */
	'Filter': 'https://w3id.org/sparql-syntax#Filter',
	/** A call of a custom function identified by IRI. SPARQL 1.2 grammar production [73]. */
	'FunctionCall': 'https://w3id.org/sparql-syntax#FunctionCall',
	/** A >= comparison. */
	'Geq': 'https://w3id.org/sparql-syntax#Geq',
	/** A GRAPH graph pattern, also used for GRAPH blocks inside update quad templates. SPARQL 1.2 grammar production [61]. */
	'Graph': 'https://w3id.org/sparql-syntax#Graph',
	/** An explicit nested group graph pattern { ... }, including the branches of a UNION. SPARQL 1.2 grammar production [55]. */
	'Group': 'https://w3id.org/sparql-syntax#Group',
	'GroupConcat': 'https://w3id.org/sparql-syntax#GroupConcat',
	/** A > comparison. */
	'Gt': 'https://w3id.org/sparql-syntax#Gt',
	'HOURS': 'https://w3id.org/sparql-syntax#HOURS',
	'IF': 'https://w3id.org/sparql-syntax#IF',
	'IRI': 'https://w3id.org/sparql-syntax#IRI',
	/** An IN expression; sparql:arg1 holds the tested expression, sparql:args the list of candidates. */
	'In': 'https://w3id.org/sparql-syntax#In',
	/** An INSERT DATA operation. SPARQL 1.2 Update grammar production [40]. */
	'InsertData': 'https://w3id.org/sparql-syntax#InsertData',
	/** An inverse property path (^elt). SPARQL 1.2 grammar production [95]. */
	'InversePath': 'https://w3id.org/sparql-syntax#InversePath',
	'LANG': 'https://w3id.org/sparql-syntax#LANG',
	'LANGDIR': 'https://w3id.org/sparql-syntax#LANGDIR',
	'LANGMATCHES': 'https://w3id.org/sparql-syntax#LANGMATCHES',
	'LCASE': 'https://w3id.org/sparql-syntax#LCASE',
	/** A <= comparison. */
	'Leq': 'https://w3id.org/sparql-syntax#Leq',
	/** A LOAD operation. SPARQL 1.2 Update grammar production [33]. */
	'Load': 'https://w3id.org/sparql-syntax#Load',
	/** A < comparison. */
	'Lt': 'https://w3id.org/sparql-syntax#Lt',
	'MD5': 'https://w3id.org/sparql-syntax#MD5',
	'MINUTES': 'https://w3id.org/sparql-syntax#MINUTES',
	'MONTH': 'https://w3id.org/sparql-syntax#MONTH',
	'Max': 'https://w3id.org/sparql-syntax#Max',
	'Min': 'https://w3id.org/sparql-syntax#Min',
	/** A MINUS graph pattern. SPARQL 1.2 grammar production [69]. */
	'Minus': 'https://w3id.org/sparql-syntax#Minus',
	/** A DELETE/INSERT operation with a WHERE clause. SPARQL 1.2 Update grammar production [43]. */
	'Modify': 'https://w3id.org/sparql-syntax#Modify',
	/** A MOVE operation. SPARQL 1.2 Update grammar production [38]. */
	'Move': 'https://w3id.org/sparql-syntax#Move',
	/** An arithmetic * expression. */
	'Multiplication': 'https://w3id.org/sparql-syntax#Multiplication',
	'NOW': 'https://w3id.org/sparql-syntax#NOW',
	/** All named graphs as target of CLEAR or DROP (NAMED keyword). */
	'NamedGraphs': 'https://w3id.org/sparql-syntax#NamedGraphs',
	/** A negated property set (!iri or !(iri1 | ^iri2 | ...)). SPARQL 1.2 grammar production [98]. */
	'NegatedPath': 'https://w3id.org/sparql-syntax#NegatedPath',
	/** A != comparison. */
	'Neq': 'https://w3id.org/sparql-syntax#Neq',
	/** A NOT EXISTS expression with an embedded graph pattern. SPARQL 1.2 grammar production [136]. */
	'NotExists': 'https://w3id.org/sparql-syntax#NotExists',
	/** A NOT IN expression; sparql:arg1 holds the tested expression, sparql:args the list of candidates. */
	'NotIn': 'https://w3id.org/sparql-syntax#NotIn',
	'OBJECT': 'https://w3id.org/sparql-syntax#OBJECT',
	/** A property path with the + modifier. SPARQL 1.2 grammar production [96]. */
	'OneOrMorePath': 'https://w3id.org/sparql-syntax#OneOrMorePath',
	/** An OPTIONAL graph pattern. SPARQL 1.2 grammar production [60]. */
	'Optional': 'https://w3id.org/sparql-syntax#Optional',
	/** A logical || expression. */
	'Or': 'https://w3id.org/sparql-syntax#Or',
	'PREDICATE': 'https://w3id.org/sparql-syntax#PREDICATE',
	/** Abstract superclass of the four SPARQL query forms. */
	'Query': 'https://w3id.org/sparql-syntax#Query',
	'RAND': 'https://w3id.org/sparql-syntax#RAND',
	'REGEX': 'https://w3id.org/sparql-syntax#REGEX',
	'REPLACE': 'https://w3id.org/sparql-syntax#REPLACE',
	'ROUND': 'https://w3id.org/sparql-syntax#ROUND',
	'SECONDS': 'https://w3id.org/sparql-syntax#SECONDS',
	'SHA1': 'https://w3id.org/sparql-syntax#SHA1',
	'SHA256': 'https://w3id.org/sparql-syntax#SHA256',
	'SHA384': 'https://w3id.org/sparql-syntax#SHA384',
	'SHA512': 'https://w3id.org/sparql-syntax#SHA512',
	'STR': 'https://w3id.org/sparql-syntax#STR',
	'STRAFTER': 'https://w3id.org/sparql-syntax#STRAFTER',
	'STRBEFORE': 'https://w3id.org/sparql-syntax#STRBEFORE',
	'STRDT': 'https://w3id.org/sparql-syntax#STRDT',
	'STRENDS': 'https://w3id.org/sparql-syntax#STRENDS',
	'STRLANG': 'https://w3id.org/sparql-syntax#STRLANG',
	'STRLANGDIR': 'https://w3id.org/sparql-syntax#STRLANGDIR',
	'STRLEN': 'https://w3id.org/sparql-syntax#STRLEN',
	'STRSTARTS': 'https://w3id.org/sparql-syntax#STRSTARTS',
	'STRUUID': 'https://w3id.org/sparql-syntax#STRUUID',
	'SUBJECT': 'https://w3id.org/sparql-syntax#SUBJECT',
	'SUBSTR': 'https://w3id.org/sparql-syntax#SUBSTR',
	'Sample': 'https://w3id.org/sparql-syntax#Sample',
	/** A SELECT query. SPARQL 1.2 grammar production [9]. */
	'SelectQuery': 'https://w3id.org/sparql-syntax#SelectQuery',
	/** A property path sequence (elt1 / elt2). SPARQL 1.2 grammar production [93]. */
	'SeqPath': 'https://w3id.org/sparql-syntax#SeqPath',
	/** A SERVICE graph pattern. SPARQL 1.2 grammar production [62]. */
	'Service': 'https://w3id.org/sparql-syntax#Service',
	/** A sub-select appearing as a group graph pattern element. SPARQL 1.2 grammar production [10]. */
	'SubSelect': 'https://w3id.org/sparql-syntax#SubSelect',
	/** An arithmetic - expression. */
	'Subtraction': 'https://w3id.org/sparql-syntax#Subtraction',
	'Sum': 'https://w3id.org/sparql-syntax#Sum',
	'TIMEZONE': 'https://w3id.org/sparql-syntax#TIMEZONE',
	'TRIPLE': 'https://w3id.org/sparql-syntax#TRIPLE',
	'TZ': 'https://w3id.org/sparql-syntax#TZ',
	/** A single subject-predicate-object pattern or template triple. */
	'TriplePattern': 'https://w3id.org/sparql-syntax#TriplePattern',
	/** An RDF 1.2 triple term <<( s p o )>>. Represented structurally because its components may be variables. SPARQL 1.2 grammar production [113]. */
	'TripleTerm': 'https://w3id.org/sparql-syntax#TripleTerm',
	'UCASE': 'https://w3id.org/sparql-syntax#UCASE',
	'URI': 'https://w3id.org/sparql-syntax#URI',
	'UUID': 'https://w3id.org/sparql-syntax#UUID',
	/** A unary - expression. */
	'UnaryMinus': 'https://w3id.org/sparql-syntax#UnaryMinus',
	/** A unary ! expression. */
	'UnaryNot': 'https://w3id.org/sparql-syntax#UnaryNot',
	/** A unary + expression. */
	'UnaryPlus': 'https://w3id.org/sparql-syntax#UnaryPlus',
	/** A UNION of two or more group graph patterns. SPARQL 1.2 grammar production [70]. */
	'Union': 'https://w3id.org/sparql-syntax#Union',
	/** The root node of a SPARQL update request; holds the ordered sequence of update operations. SPARQL 1.2 Update grammar production [31]. */
	'Update': 'https://w3id.org/sparql-syntax#Update',
	/** An inline data block (VALUES), either inside a group graph pattern or trailing a query. SPARQL 1.2 grammar productions [64]-[67]. */
	'Values': 'https://w3id.org/sparql-syntax#Values',
	/** A SPARQL variable (?name or $name). One node is shared per distinct variable name within a query. */
	'Variable': 'https://w3id.org/sparql-syntax#Variable',
	'YEAR': 'https://w3id.org/sparql-syntax#YEAR',
	/** A property path with the * modifier. SPARQL 1.2 grammar production [96]. */
	'ZeroOrMorePath': 'https://w3id.org/sparql-syntax#ZeroOrMorePath',
	/** A property path with the ? modifier. SPARQL 1.2 grammar production [96]. */
	'ZeroOrOnePath': 'https://w3id.org/sparql-syntax#ZeroOrOnePath',
	/** The operand of a unary operator expression. */
	'arg': 'https://w3id.org/sparql-syntax#arg',
	/** The left operand of a binary operator expression. */
	'arg1': 'https://w3id.org/sparql-syntax#arg1',
	/** The right operand of a binary operator expression. */
	'arg2': 'https://w3id.org/sparql-syntax#arg2',
	/** The ordered arguments of a function call, built-in call, or IN/NOT IN expression: an rdf:List. */
	'args': 'https://w3id.org/sparql-syntax#args',
	/** The binding rows of a VALUES block: an rdf:List of rows, each row an rdf:List of terms or sparql:undef. */
	'bindings': 'https://w3id.org/sparql-syntax#bindings',
	/** True for COUNT(*). */
	'countStar': 'https://w3id.org/sparql-syntax#countStar',
	/** The quad data of an INSERT DATA or DELETE DATA operation: an rdf:List of sparql:TriplePattern and sparql:Graph nodes. */
	'data': 'https://w3id.org/sparql-syntax#data',
	/** The DELETE template of a DELETE/INSERT operation: an rdf:List of sparql:TriplePattern and sparql:Graph nodes. */
	'deleteTemplate': 'https://w3id.org/sparql-syntax#deleteTemplate',
	/** The targets of a DESCRIBE query: an rdf:List of sparql:Variable nodes or IRIs. */
	'describeTargets': 'https://w3id.org/sparql-syntax#describeTargets',
	/** True if the SELECT clause, aggregate or argument list carries the DISTINCT modifier. */
	'distinct': 'https://w3id.org/sparql-syntax#distinct',
	/** The ordered elements of a group, OPTIONAL, MINUS, GRAPH, SERVICE, EXISTS, NOT EXISTS or UNION: an rdf:List. */
	'elements': 'https://w3id.org/sparql-syntax#elements',
	/** The endpoint (variable or IRI) of a SERVICE pattern. */
	'endpoint': 'https://w3id.org/sparql-syntax#endpoint',
	/** The expression of a FILTER, BIND, alias, order condition or aggregate. */
	'expression': 'https://w3id.org/sparql-syntax#expression',
	/** A FROM dataset clause IRI (repeated for multiple clauses). */
	'from': 'https://w3id.org/sparql-syntax#from',
	/** The source graph of an ADD, MOVE or COPY operation: a graph IRI or sparql:DefaultGraph. */
	'fromGraph': 'https://w3id.org/sparql-syntax#fromGraph',
	/** A FROM NAMED dataset clause IRI (repeated for multiple clauses). */
	'fromNamed': 'https://w3id.org/sparql-syntax#fromNamed',
	/** The function of a call: an IRI for custom functions, a sparql:BuiltInFunction individual for built-ins. */
	'function': 'https://w3id.org/sparql-syntax#function',
	/** The graph name (variable or IRI) of a GRAPH pattern or graph block, or the IRI of a CREATE or GRAPH reference. */
	'graph': 'https://w3id.org/sparql-syntax#graph',
	/** The target of a CLEAR or DROP operation: a graph IRI, sparql:DefaultGraph, sparql:NamedGraphs or sparql:AllGraphs. */
	'graphTarget': 'https://w3id.org/sparql-syntax#graphTarget',
	/** The GROUP BY conditions: an rdf:List of variables, expressions or sparql:Alias nodes. */
	'groupBy': 'https://w3id.org/sparql-syntax#groupBy',
	'hasLANG': 'https://w3id.org/sparql-syntax#hasLANG',
	'hasLANGDIR': 'https://w3id.org/sparql-syntax#hasLANGDIR',
	/** The HAVING conditions: an rdf:List of expressions. */
	'having': 'https://w3id.org/sparql-syntax#having',
	/** The INSERT template of a DELETE/INSERT operation: an rdf:List of sparql:TriplePattern and sparql:Graph nodes. */
	'insertTemplate': 'https://w3id.org/sparql-syntax#insertTemplate',
	/** The target graph IRI of a LOAD ... INTO GRAPH operation. */
	'into': 'https://w3id.org/sparql-syntax#into',
	'isBLANK': 'https://w3id.org/sparql-syntax#isBLANK',
	'isIRI': 'https://w3id.org/sparql-syntax#isIRI',
	'isLITERAL': 'https://w3id.org/sparql-syntax#isLITERAL',
	'isNUMERIC': 'https://w3id.org/sparql-syntax#isNUMERIC',
	'isTRIPLE': 'https://w3id.org/sparql-syntax#isTRIPLE',
	'isURI': 'https://w3id.org/sparql-syntax#isURI',
	/** The label of a syntactic blank node, without the _: prefix. Absent for anonymous blank nodes. */
	'label': 'https://w3id.org/sparql-syntax#label',
	/** The LIMIT of a query. */
	'limit': 'https://w3id.org/sparql-syntax#limit',
	/** The object of a triple pattern or triple term. */
	'object': 'https://w3id.org/sparql-syntax#object',
	/** The OFFSET of a query. */
	'offset': 'https://w3id.org/sparql-syntax#offset',
	/** The ordered update operations of an update request: an rdf:List. */
	'operations': 'https://w3id.org/sparql-syntax#operations',
	/** The ORDER BY conditions: an rdf:List of variables, expressions, or sparql:Asc/sparql:Desc nodes. */
	'orderBy': 'https://w3id.org/sparql-syntax#orderBy',
	/** The sub-path of an inverse or modified property path. */
	'path': 'https://w3id.org/sparql-syntax#path',
	/** The ordered sub-paths of a sequence, alternative or negated property path: an rdf:List. */
	'pathElements': 'https://w3id.org/sparql-syntax#pathElements',
	/** The predicate of a triple pattern or triple term: an IRI, sparql:Variable, or property path node. */
	'predicate': 'https://w3id.org/sparql-syntax#predicate',
	/** The projection of a SELECT query: an rdf:List of sparql:Variable or sparql:Alias nodes. */
	'projection': 'https://w3id.org/sparql-syntax#projection',
	/** True if the SELECT clause carries the REDUCED modifier. */
	'reduced': 'https://w3id.org/sparql-syntax#reduced',
	'sameTerm': 'https://w3id.org/sparql-syntax#sameTerm',
	/** The SEPARATOR of a GROUP_CONCAT aggregate. */
	'separator': 'https://w3id.org/sparql-syntax#separator',
	/** True if the operation or SERVICE pattern carries the SILENT modifier. */
	'silent': 'https://w3id.org/sparql-syntax#silent',
	/** The source document IRI of a LOAD operation. */
	'source': 'https://w3id.org/sparql-syntax#source',
	/** True if the query uses SELECT * or DESCRIBE *. */
	'star': 'https://w3id.org/sparql-syntax#star',
	/** The subject of a triple pattern or triple term. */
	'subject': 'https://w3id.org/sparql-syntax#subject',
	/** The template of a CONSTRUCT query: an rdf:List of sparql:TriplePattern nodes. */
	'template': 'https://w3id.org/sparql-syntax#template',
	/** The target graph of an ADD, MOVE or COPY operation: a graph IRI or sparql:DefaultGraph. */
	'toGraph': 'https://w3id.org/sparql-syntax#toGraph',
	/** The UNDEF marker in a VALUES binding row. */
	'undef': 'https://w3id.org/sparql-syntax#undef',
	/** A USING clause IRI of a DELETE/INSERT operation (repeated for multiple clauses). */
	'using': 'https://w3id.org/sparql-syntax#using',
	/** A USING NAMED clause IRI of a DELETE/INSERT operation (repeated for multiple clauses). */
	'usingNamed': 'https://w3id.org/sparql-syntax#usingNamed',
	/** The trailing VALUES clause of a query or sub-select. */
	'values': 'https://w3id.org/sparql-syntax#values',
	/** The name of a variable, without the ? or $ sigil. */
	'varName': 'https://w3id.org/sparql-syntax#varName',
	/** The target variable of a BIND or alias. */
	'variable': 'https://w3id.org/sparql-syntax#variable',
	/** The variables of a VALUES block: an rdf:List of sparql:Variable nodes. */
	'variables': 'https://w3id.org/sparql-syntax#variables',
	/** The version string of a VERSION declaration. SPARQL 1.2 grammar production [7]. */
	'version': 'https://w3id.org/sparql-syntax#version',
	/** The WHERE clause of a query, sub-select, DELETE/INSERT or DELETE WHERE operation: an rdf:List of graph pattern elements. */
	'where': 'https://w3id.org/sparql-syntax#where',
	/** The WITH graph IRI of a DELETE/INSERT operation. */
	'withGraph': 'https://w3id.org/sparql-syntax#withGraph',
}

/** Namespace URI of the sparql vocabulary. */
export const _sparql = { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#' } as NamedNode;

export const sparql = {
	/** A vocabulary for representing the syntax of SPARQL 1.2 queries and updates as RDF. */
	'sparql_syntax': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax' } as NamedNode,
	'ABS': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#ABS', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#ABS' } as NamedNode,
	/** An ADD operation. SPARQL 1.2 Update grammar production [37]. */
	'Add': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Add', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Add' } as NamedNode,
	/** An arithmetic + expression. */
	'Addition': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Addition', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Addition' } as NamedNode,
	/** Abstract superclass of the SPARQL aggregates. SPARQL 1.2 grammar production [137]. */
	'Aggregate': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Aggregate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Aggregate' } as NamedNode,
	/** An (expression AS ?variable) alias in a SELECT clause or GROUP BY condition. */
	'Alias': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Alias', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Alias' } as NamedNode,
	/** All graphs as target of CLEAR or DROP (ALL keyword). */
	'AllGraphs': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#AllGraphs', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#AllGraphs' } as NamedNode,
	/** A property path alternative (elt1 | elt2). SPARQL 1.2 grammar production [92]. */
	'AltPath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#AltPath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#AltPath' } as NamedNode,
	/** A logical && expression. */
	'And': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#And', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#And' } as NamedNode,
	/** An explicit ASC(...) order condition. */
	'Asc': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Asc', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Asc' } as NamedNode,
	/** An ASK query. SPARQL 1.2 grammar production [14]. */
	'AskQuery': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#AskQuery', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#AskQuery' } as NamedNode,
	'Avg': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Avg', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Avg' } as NamedNode,
	'BNODE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#BNODE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#BNODE' } as NamedNode,
	'BOUND': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#BOUND', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#BOUND' } as NamedNode,
	/** A BIND assignment. SPARQL 1.2 grammar production [63]. */
	'Bind': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Bind', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Bind' } as NamedNode,
	/** A blank node written in query syntax (_:label, [], [...] or a collection cell), as opposed to the structural blank nodes of the representation itself. */
	'BlankNode': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#BlankNode', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#BlankNode' } as NamedNode,
	/** A call of a SPARQL built-in function; sparql:function points to the built-in function individual. SPARQL 1.2 grammar production [131]. */
	'BuiltInCall': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#BuiltInCall', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#BuiltInCall' } as NamedNode,
	/** The class of SPARQL built-in function individuals. */
	'BuiltInFunction': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#BuiltInFunction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#BuiltInFunction' } as NamedNode,
	'CEIL': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#CEIL', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#CEIL' } as NamedNode,
	'COALESCE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#COALESCE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#COALESCE' } as NamedNode,
	'CONCAT': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#CONCAT', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#CONCAT' } as NamedNode,
	'CONTAINS': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#CONTAINS', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#CONTAINS' } as NamedNode,
	/** A CLEAR operation. SPARQL 1.2 Update grammar production [34]. */
	'Clear': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Clear', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Clear' } as NamedNode,
	/** A CONSTRUCT query. SPARQL 1.2 grammar production [12]. */
	'ConstructQuery': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#ConstructQuery', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#ConstructQuery' } as NamedNode,
	/** A COPY operation. SPARQL 1.2 Update grammar production [39]. */
	'Copy': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Copy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Copy' } as NamedNode,
	'Count': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Count', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Count' } as NamedNode,
	/** A CREATE operation. SPARQL 1.2 Update grammar production [36]. */
	'Create': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Create', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Create' } as NamedNode,
	'DATATYPE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#DATATYPE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#DATATYPE' } as NamedNode,
	'DAY': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#DAY', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#DAY' } as NamedNode,
	/** The default graph as target of an update operation (DEFAULT keyword). */
	'DefaultGraph': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#DefaultGraph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#DefaultGraph' } as NamedNode,
	/** A DELETE DATA operation. SPARQL 1.2 Update grammar production [41]. */
	'DeleteData': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#DeleteData', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#DeleteData' } as NamedNode,
	/** A DELETE WHERE operation. SPARQL 1.2 Update grammar production [42]. */
	'DeleteWhere': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#DeleteWhere', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#DeleteWhere' } as NamedNode,
	/** A DESC(...) order condition. */
	'Desc': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Desc', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Desc' } as NamedNode,
	/** A DESCRIBE query. SPARQL 1.2 grammar production [13]. */
	'DescribeQuery': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#DescribeQuery', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#DescribeQuery' } as NamedNode,
	/** An arithmetic / expression. */
	'Division': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Division', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Division' } as NamedNode,
	/** A DROP operation. SPARQL 1.2 Update grammar production [35]. */
	'Drop': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Drop', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Drop' } as NamedNode,
	'ENCODE_FOR_URI': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#ENCODE_FOR_URI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#ENCODE_FOR_URI' } as NamedNode,
	/** An = comparison. */
	'Eq': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Eq', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Eq' } as NamedNode,
	/** An EXISTS expression with an embedded graph pattern. SPARQL 1.2 grammar production [135]. */
	'Exists': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Exists', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Exists' } as NamedNode,
	/** Abstract superclass of all compound SPARQL expressions. Atomic expressions (variables, IRIs, literals) appear directly as terms. */
	'Expression': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Expression', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Expression' } as NamedNode,
	'FLOOR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#FLOOR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#FLOOR' } as NamedNode,
	/** A FILTER constraint. SPARQL 1.2 grammar production [71]. */
	'Filter': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Filter', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Filter' } as NamedNode,
	/** A call of a custom function identified by IRI. SPARQL 1.2 grammar production [73]. */
	'FunctionCall': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#FunctionCall', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#FunctionCall' } as NamedNode,
	/** A >= comparison. */
	'Geq': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Geq', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Geq' } as NamedNode,
	/** A GRAPH graph pattern, also used for GRAPH blocks inside update quad templates. SPARQL 1.2 grammar production [61]. */
	'Graph': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Graph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Graph' } as NamedNode,
	/** An explicit nested group graph pattern { ... }, including the branches of a UNION. SPARQL 1.2 grammar production [55]. */
	'Group': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Group', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Group' } as NamedNode,
	'GroupConcat': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#GroupConcat', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#GroupConcat' } as NamedNode,
	/** A > comparison. */
	'Gt': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Gt', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Gt' } as NamedNode,
	'HOURS': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#HOURS', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#HOURS' } as NamedNode,
	'IF': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#IF', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#IF' } as NamedNode,
	'IRI': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#IRI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#IRI' } as NamedNode,
	/** An IN expression; sparql:arg1 holds the tested expression, sparql:args the list of candidates. */
	'In': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#In', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#In' } as NamedNode,
	/** An INSERT DATA operation. SPARQL 1.2 Update grammar production [40]. */
	'InsertData': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#InsertData', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#InsertData' } as NamedNode,
	/** An inverse property path (^elt). SPARQL 1.2 grammar production [95]. */
	'InversePath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#InversePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#InversePath' } as NamedNode,
	'LANG': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#LANG', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#LANG' } as NamedNode,
	'LANGDIR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#LANGDIR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#LANGDIR' } as NamedNode,
	'LANGMATCHES': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#LANGMATCHES', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#LANGMATCHES' } as NamedNode,
	'LCASE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#LCASE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#LCASE' } as NamedNode,
	/** A <= comparison. */
	'Leq': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Leq', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Leq' } as NamedNode,
	/** A LOAD operation. SPARQL 1.2 Update grammar production [33]. */
	'Load': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Load', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Load' } as NamedNode,
	/** A < comparison. */
	'Lt': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Lt', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Lt' } as NamedNode,
	'MD5': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#MD5', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#MD5' } as NamedNode,
	'MINUTES': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#MINUTES', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#MINUTES' } as NamedNode,
	'MONTH': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#MONTH', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#MONTH' } as NamedNode,
	'Max': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Max', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Max' } as NamedNode,
	'Min': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Min', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Min' } as NamedNode,
	/** A MINUS graph pattern. SPARQL 1.2 grammar production [69]. */
	'Minus': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Minus', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Minus' } as NamedNode,
	/** A DELETE/INSERT operation with a WHERE clause. SPARQL 1.2 Update grammar production [43]. */
	'Modify': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Modify', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Modify' } as NamedNode,
	/** A MOVE operation. SPARQL 1.2 Update grammar production [38]. */
	'Move': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Move', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Move' } as NamedNode,
	/** An arithmetic * expression. */
	'Multiplication': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Multiplication', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Multiplication' } as NamedNode,
	'NOW': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#NOW', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#NOW' } as NamedNode,
	/** All named graphs as target of CLEAR or DROP (NAMED keyword). */
	'NamedGraphs': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#NamedGraphs', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#NamedGraphs' } as NamedNode,
	/** A negated property set (!iri or !(iri1 | ^iri2 | ...)). SPARQL 1.2 grammar production [98]. */
	'NegatedPath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#NegatedPath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#NegatedPath' } as NamedNode,
	/** A != comparison. */
	'Neq': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Neq', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Neq' } as NamedNode,
	/** A NOT EXISTS expression with an embedded graph pattern. SPARQL 1.2 grammar production [136]. */
	'NotExists': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#NotExists', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#NotExists' } as NamedNode,
	/** A NOT IN expression; sparql:arg1 holds the tested expression, sparql:args the list of candidates. */
	'NotIn': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#NotIn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#NotIn' } as NamedNode,
	'OBJECT': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#OBJECT', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#OBJECT' } as NamedNode,
	/** A property path with the + modifier. SPARQL 1.2 grammar production [96]. */
	'OneOrMorePath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#OneOrMorePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#OneOrMorePath' } as NamedNode,
	/** An OPTIONAL graph pattern. SPARQL 1.2 grammar production [60]. */
	'Optional': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Optional', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Optional' } as NamedNode,
	/** A logical || expression. */
	'Or': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Or', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Or' } as NamedNode,
	'PREDICATE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#PREDICATE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#PREDICATE' } as NamedNode,
	/** Abstract superclass of the four SPARQL query forms. */
	'Query': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Query', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Query' } as NamedNode,
	'RAND': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#RAND', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#RAND' } as NamedNode,
	'REGEX': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#REGEX', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#REGEX' } as NamedNode,
	'REPLACE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#REPLACE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#REPLACE' } as NamedNode,
	'ROUND': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#ROUND', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#ROUND' } as NamedNode,
	'SECONDS': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SECONDS', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SECONDS' } as NamedNode,
	'SHA1': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SHA1', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SHA1' } as NamedNode,
	'SHA256': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SHA256', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SHA256' } as NamedNode,
	'SHA384': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SHA384', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SHA384' } as NamedNode,
	'SHA512': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SHA512', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SHA512' } as NamedNode,
	'STR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STR' } as NamedNode,
	'STRAFTER': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRAFTER', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRAFTER' } as NamedNode,
	'STRBEFORE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRBEFORE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRBEFORE' } as NamedNode,
	'STRDT': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRDT', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRDT' } as NamedNode,
	'STRENDS': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRENDS', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRENDS' } as NamedNode,
	'STRLANG': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRLANG', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRLANG' } as NamedNode,
	'STRLANGDIR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRLANGDIR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRLANGDIR' } as NamedNode,
	'STRLEN': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRLEN', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRLEN' } as NamedNode,
	'STRSTARTS': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRSTARTS', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRSTARTS' } as NamedNode,
	'STRUUID': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#STRUUID', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#STRUUID' } as NamedNode,
	'SUBJECT': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SUBJECT', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SUBJECT' } as NamedNode,
	'SUBSTR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SUBSTR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SUBSTR' } as NamedNode,
	'Sample': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Sample', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Sample' } as NamedNode,
	/** A SELECT query. SPARQL 1.2 grammar production [9]. */
	'SelectQuery': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SelectQuery', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SelectQuery' } as NamedNode,
	/** A property path sequence (elt1 / elt2). SPARQL 1.2 grammar production [93]. */
	'SeqPath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SeqPath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SeqPath' } as NamedNode,
	/** A SERVICE graph pattern. SPARQL 1.2 grammar production [62]. */
	'Service': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Service', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Service' } as NamedNode,
	/** A sub-select appearing as a group graph pattern element. SPARQL 1.2 grammar production [10]. */
	'SubSelect': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#SubSelect', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#SubSelect' } as NamedNode,
	/** An arithmetic - expression. */
	'Subtraction': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Subtraction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Subtraction' } as NamedNode,
	'Sum': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Sum', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Sum' } as NamedNode,
	'TIMEZONE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#TIMEZONE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#TIMEZONE' } as NamedNode,
	'TRIPLE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#TRIPLE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#TRIPLE' } as NamedNode,
	'TZ': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#TZ', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#TZ' } as NamedNode,
	/** A single subject-predicate-object pattern or template triple. */
	'TriplePattern': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#TriplePattern', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#TriplePattern' } as NamedNode,
	/** An RDF 1.2 triple term <<( s p o )>>. Represented structurally because its components may be variables. SPARQL 1.2 grammar production [113]. */
	'TripleTerm': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#TripleTerm', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#TripleTerm' } as NamedNode,
	'UCASE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#UCASE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#UCASE' } as NamedNode,
	'URI': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#URI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#URI' } as NamedNode,
	'UUID': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#UUID', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#UUID' } as NamedNode,
	/** A unary - expression. */
	'UnaryMinus': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#UnaryMinus', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#UnaryMinus' } as NamedNode,
	/** A unary ! expression. */
	'UnaryNot': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#UnaryNot', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#UnaryNot' } as NamedNode,
	/** A unary + expression. */
	'UnaryPlus': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#UnaryPlus', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#UnaryPlus' } as NamedNode,
	/** A UNION of two or more group graph patterns. SPARQL 1.2 grammar production [70]. */
	'Union': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Union', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Union' } as NamedNode,
	/** The root node of a SPARQL update request; holds the ordered sequence of update operations. SPARQL 1.2 Update grammar production [31]. */
	'Update': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Update', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Update' } as NamedNode,
	/** An inline data block (VALUES), either inside a group graph pattern or trailing a query. SPARQL 1.2 grammar productions [64]-[67]. */
	'Values': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Values', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Values' } as NamedNode,
	/** A SPARQL variable (?name or $name). One node is shared per distinct variable name within a query. */
	'Variable': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#Variable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#Variable' } as NamedNode,
	'YEAR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#YEAR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#YEAR' } as NamedNode,
	/** A property path with the * modifier. SPARQL 1.2 grammar production [96]. */
	'ZeroOrMorePath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#ZeroOrMorePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#ZeroOrMorePath' } as NamedNode,
	/** A property path with the ? modifier. SPARQL 1.2 grammar production [96]. */
	'ZeroOrOnePath': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#ZeroOrOnePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#ZeroOrOnePath' } as NamedNode,
	/** The operand of a unary operator expression. */
	'arg': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#arg', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#arg' } as NamedNode,
	/** The left operand of a binary operator expression. */
	'arg1': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#arg1', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#arg1' } as NamedNode,
	/** The right operand of a binary operator expression. */
	'arg2': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#arg2', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#arg2' } as NamedNode,
	/** The ordered arguments of a function call, built-in call, or IN/NOT IN expression: an rdf:List. */
	'args': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#args', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#args' } as NamedNode,
	/** The binding rows of a VALUES block: an rdf:List of rows, each row an rdf:List of terms or sparql:undef. */
	'bindings': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#bindings', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#bindings' } as NamedNode,
	/** True for COUNT(*). */
	'countStar': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#countStar', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#countStar' } as NamedNode,
	/** The quad data of an INSERT DATA or DELETE DATA operation: an rdf:List of sparql:TriplePattern and sparql:Graph nodes. */
	'data': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#data', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#data' } as NamedNode,
	/** The DELETE template of a DELETE/INSERT operation: an rdf:List of sparql:TriplePattern and sparql:Graph nodes. */
	'deleteTemplate': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#deleteTemplate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#deleteTemplate' } as NamedNode,
	/** The targets of a DESCRIBE query: an rdf:List of sparql:Variable nodes or IRIs. */
	'describeTargets': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#describeTargets', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#describeTargets' } as NamedNode,
	/** True if the SELECT clause, aggregate or argument list carries the DISTINCT modifier. */
	'distinct': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#distinct', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#distinct' } as NamedNode,
	/** The ordered elements of a group, OPTIONAL, MINUS, GRAPH, SERVICE, EXISTS, NOT EXISTS or UNION: an rdf:List. */
	'elements': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#elements', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#elements' } as NamedNode,
	/** The endpoint (variable or IRI) of a SERVICE pattern. */
	'endpoint': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#endpoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#endpoint' } as NamedNode,
	/** The expression of a FILTER, BIND, alias, order condition or aggregate. */
	'expression': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#expression', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#expression' } as NamedNode,
	/** A FROM dataset clause IRI (repeated for multiple clauses). */
	'from': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#from', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#from' } as NamedNode,
	/** The source graph of an ADD, MOVE or COPY operation: a graph IRI or sparql:DefaultGraph. */
	'fromGraph': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#fromGraph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#fromGraph' } as NamedNode,
	/** A FROM NAMED dataset clause IRI (repeated for multiple clauses). */
	'fromNamed': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#fromNamed', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#fromNamed' } as NamedNode,
	/** The function of a call: an IRI for custom functions, a sparql:BuiltInFunction individual for built-ins. */
	'function': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#function', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#function' } as NamedNode,
	/** The graph name (variable or IRI) of a GRAPH pattern or graph block, or the IRI of a CREATE or GRAPH reference. */
	'graph': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#graph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#graph' } as NamedNode,
	/** The target of a CLEAR or DROP operation: a graph IRI, sparql:DefaultGraph, sparql:NamedGraphs or sparql:AllGraphs. */
	'graphTarget': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#graphTarget', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#graphTarget' } as NamedNode,
	/** The GROUP BY conditions: an rdf:List of variables, expressions or sparql:Alias nodes. */
	'groupBy': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#groupBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#groupBy' } as NamedNode,
	'hasLANG': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#hasLANG', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#hasLANG' } as NamedNode,
	'hasLANGDIR': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#hasLANGDIR', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#hasLANGDIR' } as NamedNode,
	/** The HAVING conditions: an rdf:List of expressions. */
	'having': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#having', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#having' } as NamedNode,
	/** The INSERT template of a DELETE/INSERT operation: an rdf:List of sparql:TriplePattern and sparql:Graph nodes. */
	'insertTemplate': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#insertTemplate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#insertTemplate' } as NamedNode,
	/** The target graph IRI of a LOAD ... INTO GRAPH operation. */
	'into': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#into', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#into' } as NamedNode,
	'isBLANK': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#isBLANK', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#isBLANK' } as NamedNode,
	'isIRI': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#isIRI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#isIRI' } as NamedNode,
	'isLITERAL': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#isLITERAL', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#isLITERAL' } as NamedNode,
	'isNUMERIC': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#isNUMERIC', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#isNUMERIC' } as NamedNode,
	'isTRIPLE': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#isTRIPLE', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#isTRIPLE' } as NamedNode,
	'isURI': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#isURI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#isURI' } as NamedNode,
	/** The label of a syntactic blank node, without the _: prefix. Absent for anonymous blank nodes. */
	'label': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#label', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#label' } as NamedNode,
	/** The LIMIT of a query. */
	'limit': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#limit', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#limit' } as NamedNode,
	/** The object of a triple pattern or triple term. */
	'object': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#object', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#object' } as NamedNode,
	/** The OFFSET of a query. */
	'offset': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#offset', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#offset' } as NamedNode,
	/** The ordered update operations of an update request: an rdf:List. */
	'operations': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#operations', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#operations' } as NamedNode,
	/** The ORDER BY conditions: an rdf:List of variables, expressions, or sparql:Asc/sparql:Desc nodes. */
	'orderBy': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#orderBy', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#orderBy' } as NamedNode,
	/** The sub-path of an inverse or modified property path. */
	'path': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#path', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#path' } as NamedNode,
	/** The ordered sub-paths of a sequence, alternative or negated property path: an rdf:List. */
	'pathElements': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#pathElements', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#pathElements' } as NamedNode,
	/** The predicate of a triple pattern or triple term: an IRI, sparql:Variable, or property path node. */
	'predicate': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#predicate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#predicate' } as NamedNode,
	/** The projection of a SELECT query: an rdf:List of sparql:Variable or sparql:Alias nodes. */
	'projection': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#projection', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#projection' } as NamedNode,
	/** True if the SELECT clause carries the REDUCED modifier. */
	'reduced': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#reduced', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#reduced' } as NamedNode,
	'sameTerm': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#sameTerm', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#sameTerm' } as NamedNode,
	/** The SEPARATOR of a GROUP_CONCAT aggregate. */
	'separator': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#separator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#separator' } as NamedNode,
	/** True if the operation or SERVICE pattern carries the SILENT modifier. */
	'silent': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#silent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#silent' } as NamedNode,
	/** The source document IRI of a LOAD operation. */
	'source': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#source', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#source' } as NamedNode,
	/** True if the query uses SELECT * or DESCRIBE *. */
	'star': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#star', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#star' } as NamedNode,
	/** The subject of a triple pattern or triple term. */
	'subject': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#subject', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#subject' } as NamedNode,
	/** The template of a CONSTRUCT query: an rdf:List of sparql:TriplePattern nodes. */
	'template': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#template', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#template' } as NamedNode,
	/** The target graph of an ADD, MOVE or COPY operation: a graph IRI or sparql:DefaultGraph. */
	'toGraph': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#toGraph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#toGraph' } as NamedNode,
	/** The UNDEF marker in a VALUES binding row. */
	'undef': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#undef', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#undef' } as NamedNode,
	/** A USING clause IRI of a DELETE/INSERT operation (repeated for multiple clauses). */
	'using': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#using', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#using' } as NamedNode,
	/** A USING NAMED clause IRI of a DELETE/INSERT operation (repeated for multiple clauses). */
	'usingNamed': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#usingNamed', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#usingNamed' } as NamedNode,
	/** The trailing VALUES clause of a query or sub-select. */
	'values': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#values', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#values' } as NamedNode,
	/** The name of a variable, without the ? or $ sigil. */
	'varName': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#varName', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#varName' } as NamedNode,
	/** The target variable of a BIND or alias. */
	'variable': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#variable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#variable' } as NamedNode,
	/** The variables of a VALUES block: an rdf:List of sparql:Variable nodes. */
	'variables': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#variables', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#variables' } as NamedNode,
	/** The version string of a VERSION declaration. SPARQL 1.2 grammar production [7]. */
	'version': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#version', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#version' } as NamedNode,
	/** The WHERE clause of a query, sub-select, DELETE/INSERT or DELETE WHERE operation: an rdf:List of graph pattern elements. */
	'where': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#where', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#where' } as NamedNode,
	/** The WITH graph IRI of a DELETE/INSERT operation. */
	'withGraph': { termType: 'NamedNode', value: 'https://w3id.org/sparql-syntax#withGraph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'https://w3id.org/sparql-syntax#withGraph' } as NamedNode,
}