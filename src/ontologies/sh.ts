import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the SH vocabulary. */
export const _SH = 'http://www.w3.org/ns/shacl#';

export const SH = {
	/** The base class of validation results, typically not instantiated directly. */
	'AbstractResult': 'http://www.w3.org/ns/shacl#AbstractResult',
	/** A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes. */
	'AndConstraintComponent': 'http://www.w3.org/ns/shacl#AndConstraintComponent',
	'AndConstraintComponent_and': 'http://www.w3.org/ns/shacl#AndConstraintComponent-and',
	/** The node kind of all blank nodes. */
	'BlankNode': 'http://www.w3.org/ns/shacl#BlankNode',
	/** The node kind of all blank nodes or IRIs. */
	'BlankNodeOrIRI': 'http://www.w3.org/ns/shacl#BlankNodeOrIRI',
	/** The node kind of all blank nodes or literals. */
	'BlankNodeOrLiteral': 'http://www.w3.org/ns/shacl#BlankNodeOrLiteral',
	/** A constraint component that can be used to verify that each value node is an instance of a given type. */
	'ClassConstraintComponent': 'http://www.w3.org/ns/shacl#ClassConstraintComponent',
	'ClassConstraintComponent_class': 'http://www.w3.org/ns/shacl#ClassConstraintComponent-class',
	/** A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path. */
	'ClosedConstraintComponent': 'http://www.w3.org/ns/shacl#ClosedConstraintComponent',
	'ClosedConstraintComponent_closed': 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed',
	'ClosedConstraintComponent_ignoredProperties': 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties',
	/** The class of constraint components. */
	'ConstraintComponent': 'http://www.w3.org/ns/shacl#ConstraintComponent',
	/** A constraint component that can be used to restrict the datatype of all value nodes. */
	'DatatypeConstraintComponent': 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent',
	'DatatypeConstraintComponent_datatype': 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype',
	/** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'DisjointConstraintComponent': 'http://www.w3.org/ns/shacl#DisjointConstraintComponent',
	'DisjointConstraintComponent_disjoint': 'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint',
	/** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'EqualsConstraintComponent': 'http://www.w3.org/ns/shacl#EqualsConstraintComponent',
	'EqualsConstraintComponent_equals': 'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals',
	/** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
	'ExpressionConstraintComponent': 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent',
	'ExpressionConstraintComponent_expression': 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression',
	/** The class of SHACL functions. */
	'Function': 'http://www.w3.org/ns/shacl#Function',
	/** A constraint component that can be used to verify that one of the value nodes is a given RDF node. */
	'HasValueConstraintComponent': 'http://www.w3.org/ns/shacl#HasValueConstraintComponent',
	'HasValueConstraintComponent_hasValue': 'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue',
	/** The node kind of all IRIs. */
	'IRI': 'http://www.w3.org/ns/shacl#IRI',
	/** The node kind of all IRIs or literals. */
	'IRIOrLiteral': 'http://www.w3.org/ns/shacl#IRIOrLiteral',
	/** A constraint component that can be used to exclusively enumerate the permitted value nodes. */
	'InConstraintComponent': 'http://www.w3.org/ns/shacl#InConstraintComponent',
	'InConstraintComponent_in': 'http://www.w3.org/ns/shacl#InConstraintComponent-in',
	/** The severity for an informational validation result. */
	'Info': 'http://www.w3.org/ns/shacl#Info',
	/** The class of constraints backed by a JavaScript function. */
	'JSConstraint': 'http://www.w3.org/ns/shacl#JSConstraint',
	'JSConstraint_js': 'http://www.w3.org/ns/shacl#JSConstraint-js',
	/** A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script. */
	'JSConstraintComponent': 'http://www.w3.org/ns/shacl#JSConstraintComponent',
	/** Abstract base class of resources that declare an executable JavaScript. */
	'JSExecutable': 'http://www.w3.org/ns/shacl#JSExecutable',
	/** The class of SHACL functions that execute a JavaScript function when called. */
	'JSFunction': 'http://www.w3.org/ns/shacl#JSFunction',
	/** Represents a JavaScript library, typically identified by one or more URLs of files to include. */
	'JSLibrary': 'http://www.w3.org/ns/shacl#JSLibrary',
	/** The class of SHACL rules expressed using JavaScript. */
	'JSRule': 'http://www.w3.org/ns/shacl#JSRule',
	/** The class of targets that are based on JavaScript functions. */
	'JSTarget': 'http://www.w3.org/ns/shacl#JSTarget',
	/** The (meta) class for parameterizable targets that are based on JavaScript functions. */
	'JSTargetType': 'http://www.w3.org/ns/shacl#JSTargetType',
	/** A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used. */
	'JSValidator': 'http://www.w3.org/ns/shacl#JSValidator',
	/** A constraint component that can be used to enumerate language tags that all value nodes must have. */
	'LanguageInConstraintComponent': 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent',
	'LanguageInConstraintComponent_languageIn': 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn',
	/** A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanConstraintComponent': 'http://www.w3.org/ns/shacl#LessThanConstraintComponent',
	'LessThanConstraintComponent_lessThan': 'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan',
	/** A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanOrEqualsConstraintComponent': 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent',
	'LessThanOrEqualsConstraintComponent_lessThanOrEquals': 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals',
	/** The node kind of all literals. */
	'Literal': 'http://www.w3.org/ns/shacl#Literal',
	/** A constraint component that can be used to restrict the maximum number of value nodes. */
	'MaxCountConstraintComponent': 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent',
	'MaxCountConstraintComponent_maxCount': 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount',
	/** A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value. */
	'MaxExclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent',
	'MaxExclusiveConstraintComponent_maxExclusive': 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive',
	/** A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value. */
	'MaxInclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent',
	'MaxInclusiveConstraintComponent_maxInclusive': 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive',
	/** A constraint component that can be used to restrict the maximum string length of value nodes. */
	'MaxLengthConstraintComponent': 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent',
	'MaxLengthConstraintComponent_maxLength': 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength',
	/** A constraint component that can be used to restrict the minimum number of value nodes. */
	'MinCountConstraintComponent': 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
	'MinCountConstraintComponent_minCount': 'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount',
	/** A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value. */
	'MinExclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent',
	'MinExclusiveConstraintComponent_minExclusive': 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive',
	/** A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value. */
	'MinInclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent',
	'MinInclusiveConstraintComponent_minInclusive': 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive',
	/** A constraint component that can be used to restrict the minimum string length of value nodes. */
	'MinLengthConstraintComponent': 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent',
	'MinLengthConstraintComponent_minLength': 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength',
	/** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
	'NodeConstraintComponent': 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
	'NodeConstraintComponent_node': 'http://www.w3.org/ns/shacl#NodeConstraintComponent-node',
	/** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
	'NodeKind': 'http://www.w3.org/ns/shacl#NodeKind',
	/** A constraint component that can be used to restrict the RDF node kind of each value node. */
	'NodeKindConstraintComponent': 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent',
	'NodeKindConstraintComponent_nodeKind': 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind',
	/** A node shape is a shape that specifies constraint that need to be met with respect to focus nodes. */
	'NodeShape': 'http://www.w3.org/ns/shacl#NodeShape',
	/** A constraint component that can be used to verify that value nodes do not conform to a given shape. */
	'NotConstraintComponent': 'http://www.w3.org/ns/shacl#NotConstraintComponent',
	'NotConstraintComponent_not': 'http://www.w3.org/ns/shacl#NotConstraintComponent-not',
	/** A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes. */
	'OrConstraintComponent': 'http://www.w3.org/ns/shacl#OrConstraintComponent',
	'OrConstraintComponent_or': 'http://www.w3.org/ns/shacl#OrConstraintComponent-or',
	/** The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics. */
	'Parameter': 'http://www.w3.org/ns/shacl#Parameter',
	/** Superclass of components that can take parameters, especially functions and constraint components. */
	'Parameterizable': 'http://www.w3.org/ns/shacl#Parameterizable',
	/** A constraint component that can be used to verify that every value node matches a given regular expression. */
	'PatternConstraintComponent': 'http://www.w3.org/ns/shacl#PatternConstraintComponent',
	'PatternConstraintComponent_flags': 'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags',
	'PatternConstraintComponent_pattern': 'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern',
	/** The class of prefix declarations, consisting of pairs of a prefix with a namespace. */
	'PrefixDeclaration': 'http://www.w3.org/ns/shacl#PrefixDeclaration',
	/** A constraint component that can be used to verify that all value nodes conform to the given property shape. */
	'PropertyConstraintComponent': 'http://www.w3.org/ns/shacl#PropertyConstraintComponent',
	'PropertyConstraintComponent_property': 'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property',
	/** Instances of this class represent groups of property shapes that belong together. */
	'PropertyGroup': 'http://www.w3.org/ns/shacl#PropertyGroup',
	/** A property shape is a shape that specifies constraints on the values of a focus node for a given property or path. */
	'PropertyShape': 'http://www.w3.org/ns/shacl#PropertyShape',
	/** A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape. */
	'QualifiedMaxCountConstraintComponent': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent',
	'QualifiedMaxCountConstraintComponent_qualifiedMaxCount': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount',
	'QualifiedMaxCountConstraintComponent_qualifiedValueShape': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape',
	'QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint',
	/** A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape. */
	'QualifiedMinCountConstraintComponent': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent',
	'QualifiedMinCountConstraintComponent_qualifiedMinCount': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount',
	'QualifiedMinCountConstraintComponent_qualifiedValueShape': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape',
	'QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint',
	/** A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result. */
	'ResultAnnotation': 'http://www.w3.org/ns/shacl#ResultAnnotation',
	/** The class of SHACL rules. Never instantiated directly. */
	'Rule': 'http://www.w3.org/ns/shacl#Rule',
	/** The class of SPARQL executables that are based on an ASK query. */
	'SPARQLAskExecutable': 'http://www.w3.org/ns/shacl#SPARQLAskExecutable',
	/** The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms. */
	'SPARQLAskValidator': 'http://www.w3.org/ns/shacl#SPARQLAskValidator',
	/** The class of constraints based on SPARQL SELECT queries. */
	'SPARQLConstraint': 'http://www.w3.org/ns/shacl#SPARQLConstraint',
	/** A constraint component that can be used to define constraints based on SPARQL queries. */
	'SPARQLConstraintComponent': 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent',
	'SPARQLConstraintComponent_sparql': 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql',
	/** The class of SPARQL executables that are based on a CONSTRUCT query. */
	'SPARQLConstructExecutable': 'http://www.w3.org/ns/shacl#SPARQLConstructExecutable',
	/** The class of resources that encapsulate a SPARQL query. */
	'SPARQLExecutable': 'http://www.w3.org/ns/shacl#SPARQLExecutable',
	/** A function backed by a SPARQL query - either ASK or SELECT. */
	'SPARQLFunction': 'http://www.w3.org/ns/shacl#SPARQLFunction',
	/** The class of SHACL rules based on SPARQL CONSTRUCT queries. */
	'SPARQLRule': 'http://www.w3.org/ns/shacl#SPARQLRule',
	/** The class of SPARQL executables based on a SELECT query. */
	'SPARQLSelectExecutable': 'http://www.w3.org/ns/shacl#SPARQLSelectExecutable',
	/** The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform. */
	'SPARQLSelectValidator': 'http://www.w3.org/ns/shacl#SPARQLSelectValidator',
	/** The class of targets that are based on SPARQL queries. */
	'SPARQLTarget': 'http://www.w3.org/ns/shacl#SPARQLTarget',
	/** The (meta) class for parameterizable targets that are based on SPARQL queries. */
	'SPARQLTargetType': 'http://www.w3.org/ns/shacl#SPARQLTargetType',
	/** The class of SPARQL executables based on a SPARQL UPDATE. */
	'SPARQLUpdateExecutable': 'http://www.w3.org/ns/shacl#SPARQLUpdateExecutable',
	/** The class of validation result severity levels, including violation and warning levels. */
	'Severity': 'http://www.w3.org/ns/shacl#Severity',
	/** A shape is a collection of constraints that may be targeted for certain nodes. */
	'Shape': 'http://www.w3.org/ns/shacl#Shape',
	/** The base class of targets such as those based on SPARQL queries. */
	'Target': 'http://www.w3.org/ns/shacl#Target',
	/** The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property. */
	'TargetType': 'http://www.w3.org/ns/shacl#TargetType',
	/** A rule based on triple (subject, predicate, object) pattern. */
	'TripleRule': 'http://www.w3.org/ns/shacl#TripleRule',
	/** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
	'UniqueLangConstraintComponent': 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent',
	'UniqueLangConstraintComponent_uniqueLang': 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang',
	/** The class of SHACL validation reports. */
	'ValidationReport': 'http://www.w3.org/ns/shacl#ValidationReport',
	/** The class of validation results. */
	'ValidationResult': 'http://www.w3.org/ns/shacl#ValidationResult',
	/** The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations. */
	'Validator': 'http://www.w3.org/ns/shacl#Validator',
	/** The severity for a violation validation result. */
	'Violation': 'http://www.w3.org/ns/shacl#Violation',
	/** The severity for a warning validation result. */
	'Warning': 'http://www.w3.org/ns/shacl#Warning',
	/** A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes. */
	'XoneConstraintComponent': 'http://www.w3.org/ns/shacl#XoneConstraintComponent',
	'XoneConstraintComponent_xone': 'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone',
	/** The (single) value of this property must be a list of path elements, representing the elements of alternative paths. */
	'alternativePath': 'http://www.w3.org/ns/shacl#alternativePath',
	/** RDF list of shapes to validate the value nodes against. */
	'and': 'http://www.w3.org/ns/shacl#and',
	/** The annotation property that shall be set. */
	'annotationProperty': 'http://www.w3.org/ns/shacl#annotationProperty',
	/** The (default) values of the annotation property. */
	'annotationValue': 'http://www.w3.org/ns/shacl#annotationValue',
	/** The name of the SPARQL variable from the SELECT clause that shall be used for the values. */
	'annotationVarName': 'http://www.w3.org/ns/shacl#annotationVarName',
	/** The SPARQL ASK query to execute. */
	'ask': 'http://www.w3.org/ns/shacl#ask',
	/** The type that all value nodes must have. */
	'class': 'http://www.w3.org/ns/shacl#class',
	/** If set to true then the shape is closed. */
	'closed': 'http://www.w3.org/ns/shacl#closed',
	/** The shapes that the focus nodes need to conform to before a rule is executed on them. */
	'condition': 'http://www.w3.org/ns/shacl#condition',
	/** True if the validation did not produce any validation results, and false otherwise. */
	'conforms': 'http://www.w3.org/ns/shacl#conforms',
	/** The SPARQL CONSTRUCT query to execute. */
	'construct': 'http://www.w3.org/ns/shacl#construct',
	/** Specifies an RDF datatype that all value nodes must have. */
	'datatype': 'http://www.w3.org/ns/shacl#datatype',
	/** If set to true then all nodes conform to this. */
	'deactivated': 'http://www.w3.org/ns/shacl#deactivated',
	/** Links a resource with its namespace prefix declarations. */
	'declare': 'http://www.w3.org/ns/shacl#declare',
	/** A default value for a property, for example for user interface tools to pre-populate input fields. */
	'defaultValue': 'http://www.w3.org/ns/shacl#defaultValue',
	/** Human-readable descriptions for the property in the context of the surrounding shape. */
	'description': 'http://www.w3.org/ns/shacl#description',
	/** Links a result with other results that provide more details, for example to describe violations against nested shapes. */
	'detail': 'http://www.w3.org/ns/shacl#detail',
	/** Specifies a property where the set of values must be disjoint with the value nodes. */
	'disjoint': 'http://www.w3.org/ns/shacl#disjoint',
	/** An entailment regime that indicates what kind of inferencing is required by a shapes graph. */
	'entailment': 'http://www.w3.org/ns/shacl#entailment',
	/** Specifies a property that must have the same values as the value nodes. */
	'equals': 'http://www.w3.org/ns/shacl#equals',
	/** The node expression that must return true for the value nodes. */
	'expression': 'http://www.w3.org/ns/shacl#expression',
	/** The shape that all input nodes of the expression need to conform to. */
	'filterShape': 'http://www.w3.org/ns/shacl#filterShape',
	/** An optional flag to be used with regular expression pattern matching. */
	'flags': 'http://www.w3.org/ns/shacl#flags',
	/** The focus node that was validated when the result was produced. */
	'focusNode': 'http://www.w3.org/ns/shacl#focusNode',
	/** Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes. */
	'group': 'http://www.w3.org/ns/shacl#group',
	/** Specifies a value that must be among the value nodes. */
	'hasValue': 'http://www.w3.org/ns/shacl#hasValue',
	/** An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path. */
	'ignoredProperties': 'http://www.w3.org/ns/shacl#ignoredProperties',
	/** Specifies a list of allowed values so that each value node must be among the members of the given list. */
	'in': 'http://www.w3.org/ns/shacl#in',
	/** A list of node expressions that shall be intersected. */
	'intersection': 'http://www.w3.org/ns/shacl#intersection',
	/** The (single) value of this property represents an inverse path (object to subject). */
	'inversePath': 'http://www.w3.org/ns/shacl#inversePath',
	/** Constraints expressed in JavaScript. */
	'js': 'http://www.w3.org/ns/shacl#js',
	/** The name of the JavaScript function to execute. */
	'jsFunctionName': 'http://www.w3.org/ns/shacl#jsFunctionName',
	/** Declares which JavaScript libraries are needed to execute this. */
	'jsLibrary': 'http://www.w3.org/ns/shacl#jsLibrary',
	/** Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files. */
	'jsLibraryURL': 'http://www.w3.org/ns/shacl#jsLibraryURL',
	/** Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter. */
	'labelTemplate': 'http://www.w3.org/ns/shacl#labelTemplate',
	/** Specifies a list of language tags that all value nodes must have. */
	'languageIn': 'http://www.w3.org/ns/shacl#languageIn',
	/** Specifies a property that must have smaller values than the value nodes. */
	'lessThan': 'http://www.w3.org/ns/shacl#lessThan',
	/** Specifies a property that must have smaller or equal values than the value nodes. */
	'lessThanOrEquals': 'http://www.w3.org/ns/shacl#lessThanOrEquals',
	/** Specifies the maximum number of values in the set of value nodes. */
	'maxCount': 'http://www.w3.org/ns/shacl#maxCount',
	/** Specifies the maximum exclusive value of each value node. */
	'maxExclusive': 'http://www.w3.org/ns/shacl#maxExclusive',
	/** Specifies the maximum inclusive value of each value node. */
	'maxInclusive': 'http://www.w3.org/ns/shacl#maxInclusive',
	/** Specifies the maximum string length of each value node. */
	'maxLength': 'http://www.w3.org/ns/shacl#maxLength',
	/** A human-readable message (possibly with placeholders for variables) explaining the cause of the result. */
	'message': 'http://www.w3.org/ns/shacl#message',
	/** Specifies the minimum number of values in the set of value nodes. */
	'minCount': 'http://www.w3.org/ns/shacl#minCount',
	/** Specifies the minimum exclusive value of each value node. */
	'minExclusive': 'http://www.w3.org/ns/shacl#minExclusive',
	/** Specifies the minimum inclusive value of each value node. */
	'minInclusive': 'http://www.w3.org/ns/shacl#minInclusive',
	/** Specifies the minimum string length of each value node. */
	'minLength': 'http://www.w3.org/ns/shacl#minLength',
	/** Human-readable labels for the property in the context of the surrounding shape. */
	'name': 'http://www.w3.org/ns/shacl#name',
	/** The namespace associated with a prefix in a prefix declaration. */
	'namespace': 'http://www.w3.org/ns/shacl#namespace',
	/** Specifies the node shape that all value nodes must conform to. */
	'node': 'http://www.w3.org/ns/shacl#node',
	/** Specifies the node kind (e.g. IRI or literal) each value node. */
	'nodeKind': 'http://www.w3.org/ns/shacl#nodeKind',
	/** The validator(s) used to evaluate a constraint in the context of a node shape. */
	'nodeValidator': 'http://www.w3.org/ns/shacl#nodeValidator',
	/** The node expression producing the input nodes of a filter shape expression. */
	'nodes': 'http://www.w3.org/ns/shacl#nodes',
	/** Specifies a shape that the value nodes must not conform to. */
	'not': 'http://www.w3.org/ns/shacl#not',
	/** An expression producing the nodes that shall be inferred as objects. */
	'object': 'http://www.w3.org/ns/shacl#object',
	/** The (single) value of this property represents a path that is matched one or more times. */
	'oneOrMorePath': 'http://www.w3.org/ns/shacl#oneOrMorePath',
	/** Indicates whether a parameter is optional. */
	'optional': 'http://www.w3.org/ns/shacl#optional',
	/** Specifies a list of shapes so that the value nodes must conform to at least one of the shapes. */
	'or': 'http://www.w3.org/ns/shacl#or',
	/** Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second. */
	'order': 'http://www.w3.org/ns/shacl#order',
	/** The parameters of a function or constraint component. */
	'parameter': 'http://www.w3.org/ns/shacl#parameter',
	/** Specifies the property path of a property shape. */
	'path': 'http://www.w3.org/ns/shacl#path',
	/** Specifies a regular expression pattern that the string representations of the value nodes must match. */
	'pattern': 'http://www.w3.org/ns/shacl#pattern',
	/** An expression producing the properties that shall be inferred as predicates. */
	'predicate': 'http://www.w3.org/ns/shacl#predicate',
	/** The prefix of a prefix declaration. */
	'prefix': 'http://www.w3.org/ns/shacl#prefix',
	/** The prefixes that shall be applied before parsing the associated SPARQL query. */
	'prefixes': 'http://www.w3.org/ns/shacl#prefixes',
	/** Links a shape to its property shapes. */
	'property': 'http://www.w3.org/ns/shacl#property',
	/** The validator(s) used to evaluate a constraint in the context of a property shape. */
	'propertyValidator': 'http://www.w3.org/ns/shacl#propertyValidator',
	/** The maximum number of value nodes that can conform to the shape. */
	'qualifiedMaxCount': 'http://www.w3.org/ns/shacl#qualifiedMaxCount',
	/** The minimum number of value nodes that must conform to the shape. */
	'qualifiedMinCount': 'http://www.w3.org/ns/shacl#qualifiedMinCount',
	/** The shape that a specified number of values must conform to. */
	'qualifiedValueShape': 'http://www.w3.org/ns/shacl#qualifiedValueShape',
	/** Can be used to mark the qualified value shape to be disjoint with its sibling shapes. */
	'qualifiedValueShapesDisjoint': 'http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint',
	/** The validation results contained in a validation report. */
	'result': 'http://www.w3.org/ns/shacl#result',
	/** Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query. */
	'resultAnnotation': 'http://www.w3.org/ns/shacl#resultAnnotation',
	/** Human-readable messages explaining the cause of the result. */
	'resultMessage': 'http://www.w3.org/ns/shacl#resultMessage',
	/** The path of a validation result, based on the path of the validated property shape. */
	'resultPath': 'http://www.w3.org/ns/shacl#resultPath',
	/** The severity of the result, e.g. warning. */
	'resultSeverity': 'http://www.w3.org/ns/shacl#resultSeverity',
	/** The expected type of values returned by the associated function. */
	'returnType': 'http://www.w3.org/ns/shacl#returnType',
	/** The rules linked to a shape. */
	'rule': 'http://www.w3.org/ns/shacl#rule',
	/** The SPARQL SELECT query to execute. */
	'select': 'http://www.w3.org/ns/shacl#select',
	/** Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation. */
	'severity': 'http://www.w3.org/ns/shacl#severity',
	/** Shapes graphs that should be used when validating this data graph. */
	'shapesGraph': 'http://www.w3.org/ns/shacl#shapesGraph',
	/** If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process. */
	'shapesGraphWellFormed': 'http://www.w3.org/ns/shacl#shapesGraphWellFormed',
	/** The constraint that was validated when the result was produced. */
	'sourceConstraint': 'http://www.w3.org/ns/shacl#sourceConstraint',
	/** The constraint component that is the source of the result. */
	'sourceConstraintComponent': 'http://www.w3.org/ns/shacl#sourceConstraintComponent',
	/** The shape that is was validated when the result was produced. */
	'sourceShape': 'http://www.w3.org/ns/shacl#sourceShape',
	/** Links a shape with SPARQL constraints. */
	'sparql': 'http://www.w3.org/ns/shacl#sparql',
	/** An expression producing the resources that shall be inferred as subjects. */
	'subject': 'http://www.w3.org/ns/shacl#subject',
	/** Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements. */
	'suggestedShapesGraph': 'http://www.w3.org/ns/shacl#suggestedShapesGraph',
	/** Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget. */
	'target': 'http://www.w3.org/ns/shacl#target',
	/** Links a shape to a class, indicating that all instances of the class must conform to the shape. */
	'targetClass': 'http://www.w3.org/ns/shacl#targetClass',
	/** Links a shape to individual nodes, indicating that these nodes must conform to the shape. */
	'targetNode': 'http://www.w3.org/ns/shacl#targetNode',
	/** Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape. */
	'targetObjectsOf': 'http://www.w3.org/ns/shacl#targetObjectsOf',
	/** Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape. */
	'targetSubjectsOf': 'http://www.w3.org/ns/shacl#targetSubjectsOf',
	/** A node expression that represents the current focus node. */
	'this': 'http://www.w3.org/ns/shacl#this',
	/** A list of node expressions that shall be used together. */
	'union': 'http://www.w3.org/ns/shacl#union',
	/** Specifies whether all node values must have a unique (or no) language tag. */
	'uniqueLang': 'http://www.w3.org/ns/shacl#uniqueLang',
	/** The SPARQL UPDATE to execute. */
	'update': 'http://www.w3.org/ns/shacl#update',
	/** The validator(s) used to evaluate constraints of either node or property shapes. */
	'validator': 'http://www.w3.org/ns/shacl#validator',
	/** An RDF node that has caused the result. */
	'value': 'http://www.w3.org/ns/shacl#value',
	/** Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes. */
	'xone': 'http://www.w3.org/ns/shacl#xone',
	/** The (single) value of this property represents a path that is matched zero or more times. */
	'zeroOrMorePath': 'http://www.w3.org/ns/shacl#zeroOrMorePath',
	/** The (single) value of this property represents a path that is matched zero or one times. */
	'zeroOrOnePath': 'http://www.w3.org/ns/shacl#zeroOrOnePath',
}

/** Namespace URI of the sh vocabulary. */
export const _sh = { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#' } as NamedNode;

export const sh = {
	/** The base class of validation results, typically not instantiated directly. */
	'AbstractResult': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#AbstractResult', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#AbstractResult' } as NamedNode,
	/** A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes. */
	'AndConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#AndConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#AndConstraintComponent' } as NamedNode,
	'AndConstraintComponent_and': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#AndConstraintComponent-and', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#AndConstraintComponent-and' } as NamedNode,
	/** The node kind of all blank nodes. */
	'BlankNode': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#BlankNode', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#BlankNode' } as NamedNode,
	/** The node kind of all blank nodes or IRIs. */
	'BlankNodeOrIRI': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#BlankNodeOrIRI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#BlankNodeOrIRI' } as NamedNode,
	/** The node kind of all blank nodes or literals. */
	'BlankNodeOrLiteral': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#BlankNodeOrLiteral', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#BlankNodeOrLiteral' } as NamedNode,
	/** A constraint component that can be used to verify that each value node is an instance of a given type. */
	'ClassConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ClassConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ClassConstraintComponent' } as NamedNode,
	'ClassConstraintComponent_class': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ClassConstraintComponent-class', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ClassConstraintComponent-class' } as NamedNode,
	/** A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path. */
	'ClosedConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ClosedConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ClosedConstraintComponent' } as NamedNode,
	'ClosedConstraintComponent_closed': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed' } as NamedNode,
	'ClosedConstraintComponent_ignoredProperties': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties' } as NamedNode,
	/** The class of constraint components. */
	'ConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ConstraintComponent' } as NamedNode,
	/** A constraint component that can be used to restrict the datatype of all value nodes. */
	'DatatypeConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent' } as NamedNode,
	'DatatypeConstraintComponent_datatype': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype' } as NamedNode,
	/** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'DisjointConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#DisjointConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#DisjointConstraintComponent' } as NamedNode,
	'DisjointConstraintComponent_disjoint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint' } as NamedNode,
	/** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'EqualsConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#EqualsConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#EqualsConstraintComponent' } as NamedNode,
	'EqualsConstraintComponent_equals': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals' } as NamedNode,
	/** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
	'ExpressionConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent' } as NamedNode,
	'ExpressionConstraintComponent_expression': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression' } as NamedNode,
	/** The class of SHACL functions. */
	'Function': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Function', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Function' } as NamedNode,
	/** A constraint component that can be used to verify that one of the value nodes is a given RDF node. */
	'HasValueConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#HasValueConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#HasValueConstraintComponent' } as NamedNode,
	'HasValueConstraintComponent_hasValue': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue' } as NamedNode,
	/** The node kind of all IRIs. */
	'IRI': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#IRI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#IRI' } as NamedNode,
	/** The node kind of all IRIs or literals. */
	'IRIOrLiteral': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#IRIOrLiteral', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#IRIOrLiteral' } as NamedNode,
	/** A constraint component that can be used to exclusively enumerate the permitted value nodes. */
	'InConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#InConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#InConstraintComponent' } as NamedNode,
	'InConstraintComponent_in': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#InConstraintComponent-in', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#InConstraintComponent-in' } as NamedNode,
	/** The severity for an informational validation result. */
	'Info': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Info', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Info' } as NamedNode,
	/** The class of constraints backed by a JavaScript function. */
	'JSConstraint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSConstraint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSConstraint' } as NamedNode,
	'JSConstraint_js': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSConstraint-js', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSConstraint-js' } as NamedNode,
	/** A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script. */
	'JSConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSConstraintComponent' } as NamedNode,
	/** Abstract base class of resources that declare an executable JavaScript. */
	'JSExecutable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSExecutable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSExecutable' } as NamedNode,
	/** The class of SHACL functions that execute a JavaScript function when called. */
	'JSFunction': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSFunction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSFunction' } as NamedNode,
	/** Represents a JavaScript library, typically identified by one or more URLs of files to include. */
	'JSLibrary': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSLibrary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSLibrary' } as NamedNode,
	/** The class of SHACL rules expressed using JavaScript. */
	'JSRule': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSRule', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSRule' } as NamedNode,
	/** The class of targets that are based on JavaScript functions. */
	'JSTarget': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSTarget', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSTarget' } as NamedNode,
	/** The (meta) class for parameterizable targets that are based on JavaScript functions. */
	'JSTargetType': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSTargetType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSTargetType' } as NamedNode,
	/** A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used. */
	'JSValidator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#JSValidator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#JSValidator' } as NamedNode,
	/** A constraint component that can be used to enumerate language tags that all value nodes must have. */
	'LanguageInConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent' } as NamedNode,
	'LanguageInConstraintComponent_languageIn': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn' } as NamedNode,
	/** A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#LessThanConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#LessThanConstraintComponent' } as NamedNode,
	'LessThanConstraintComponent_lessThan': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan' } as NamedNode,
	/** A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanOrEqualsConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent' } as NamedNode,
	'LessThanOrEqualsConstraintComponent_lessThanOrEquals': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals' } as NamedNode,
	/** The node kind of all literals. */
	'Literal': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Literal', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Literal' } as NamedNode,
	/** A constraint component that can be used to restrict the maximum number of value nodes. */
	'MaxCountConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent' } as NamedNode,
	'MaxCountConstraintComponent_maxCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount' } as NamedNode,
	/** A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value. */
	'MaxExclusiveConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent' } as NamedNode,
	'MaxExclusiveConstraintComponent_maxExclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive' } as NamedNode,
	/** A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value. */
	'MaxInclusiveConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent' } as NamedNode,
	'MaxInclusiveConstraintComponent_maxInclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive' } as NamedNode,
	/** A constraint component that can be used to restrict the maximum string length of value nodes. */
	'MaxLengthConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent' } as NamedNode,
	'MaxLengthConstraintComponent_maxLength': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength' } as NamedNode,
	/** A constraint component that can be used to restrict the minimum number of value nodes. */
	'MinCountConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinCountConstraintComponent' } as NamedNode,
	'MinCountConstraintComponent_minCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount' } as NamedNode,
	/** A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value. */
	'MinExclusiveConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent' } as NamedNode,
	'MinExclusiveConstraintComponent_minExclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive' } as NamedNode,
	/** A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value. */
	'MinInclusiveConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent' } as NamedNode,
	'MinInclusiveConstraintComponent_minInclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive' } as NamedNode,
	/** A constraint component that can be used to restrict the minimum string length of value nodes. */
	'MinLengthConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent' } as NamedNode,
	'MinLengthConstraintComponent_minLength': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength' } as NamedNode,
	/** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
	'NodeConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NodeConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NodeConstraintComponent' } as NamedNode,
	'NodeConstraintComponent_node': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NodeConstraintComponent-node', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NodeConstraintComponent-node' } as NamedNode,
	/** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
	'NodeKind': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NodeKind', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NodeKind' } as NamedNode,
	/** A constraint component that can be used to restrict the RDF node kind of each value node. */
	'NodeKindConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent' } as NamedNode,
	'NodeKindConstraintComponent_nodeKind': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind' } as NamedNode,
	/** A node shape is a shape that specifies constraint that need to be met with respect to focus nodes. */
	'NodeShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NodeShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NodeShape' } as NamedNode,
	/** A constraint component that can be used to verify that value nodes do not conform to a given shape. */
	'NotConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NotConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NotConstraintComponent' } as NamedNode,
	'NotConstraintComponent_not': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#NotConstraintComponent-not', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#NotConstraintComponent-not' } as NamedNode,
	/** A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes. */
	'OrConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#OrConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#OrConstraintComponent' } as NamedNode,
	'OrConstraintComponent_or': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#OrConstraintComponent-or', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#OrConstraintComponent-or' } as NamedNode,
	/** The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics. */
	'Parameter': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Parameter', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Parameter' } as NamedNode,
	/** Superclass of components that can take parameters, especially functions and constraint components. */
	'Parameterizable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Parameterizable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Parameterizable' } as NamedNode,
	/** A constraint component that can be used to verify that every value node matches a given regular expression. */
	'PatternConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PatternConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PatternConstraintComponent' } as NamedNode,
	'PatternConstraintComponent_flags': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags' } as NamedNode,
	'PatternConstraintComponent_pattern': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern' } as NamedNode,
	/** The class of prefix declarations, consisting of pairs of a prefix with a namespace. */
	'PrefixDeclaration': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PrefixDeclaration', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PrefixDeclaration' } as NamedNode,
	/** A constraint component that can be used to verify that all value nodes conform to the given property shape. */
	'PropertyConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PropertyConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PropertyConstraintComponent' } as NamedNode,
	'PropertyConstraintComponent_property': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property' } as NamedNode,
	/** Instances of this class represent groups of property shapes that belong together. */
	'PropertyGroup': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PropertyGroup', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PropertyGroup' } as NamedNode,
	/** A property shape is a shape that specifies constraints on the values of a focus node for a given property or path. */
	'PropertyShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#PropertyShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#PropertyShape' } as NamedNode,
	/** A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape. */
	'QualifiedMaxCountConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent' } as NamedNode,
	'QualifiedMaxCountConstraintComponent_qualifiedMaxCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount' } as NamedNode,
	'QualifiedMaxCountConstraintComponent_qualifiedValueShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape' } as NamedNode,
	'QualifiedMaxCountConstraintComponent_qualifiedValueShapesDisjoint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint' } as NamedNode,
	/** A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape. */
	'QualifiedMinCountConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent' } as NamedNode,
	'QualifiedMinCountConstraintComponent_qualifiedMinCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount' } as NamedNode,
	'QualifiedMinCountConstraintComponent_qualifiedValueShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape' } as NamedNode,
	'QualifiedMinCountConstraintComponent_qualifiedValueShapesDisjoint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint' } as NamedNode,
	/** A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result. */
	'ResultAnnotation': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ResultAnnotation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ResultAnnotation' } as NamedNode,
	/** The class of SHACL rules. Never instantiated directly. */
	'Rule': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Rule', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Rule' } as NamedNode,
	/** The class of SPARQL executables that are based on an ASK query. */
	'SPARQLAskExecutable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLAskExecutable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLAskExecutable' } as NamedNode,
	/** The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms. */
	'SPARQLAskValidator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLAskValidator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLAskValidator' } as NamedNode,
	/** The class of constraints based on SPARQL SELECT queries. */
	'SPARQLConstraint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLConstraint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLConstraint' } as NamedNode,
	/** A constraint component that can be used to define constraints based on SPARQL queries. */
	'SPARQLConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent' } as NamedNode,
	'SPARQLConstraintComponent_sparql': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql' } as NamedNode,
	/** The class of SPARQL executables that are based on a CONSTRUCT query. */
	'SPARQLConstructExecutable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLConstructExecutable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLConstructExecutable' } as NamedNode,
	/** The class of resources that encapsulate a SPARQL query. */
	'SPARQLExecutable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLExecutable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLExecutable' } as NamedNode,
	/** A function backed by a SPARQL query - either ASK or SELECT. */
	'SPARQLFunction': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLFunction', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLFunction' } as NamedNode,
	/** The class of SHACL rules based on SPARQL CONSTRUCT queries. */
	'SPARQLRule': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLRule', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLRule' } as NamedNode,
	/** The class of SPARQL executables based on a SELECT query. */
	'SPARQLSelectExecutable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLSelectExecutable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLSelectExecutable' } as NamedNode,
	/** The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform. */
	'SPARQLSelectValidator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLSelectValidator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLSelectValidator' } as NamedNode,
	/** The class of targets that are based on SPARQL queries. */
	'SPARQLTarget': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLTarget', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLTarget' } as NamedNode,
	/** The (meta) class for parameterizable targets that are based on SPARQL queries. */
	'SPARQLTargetType': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLTargetType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLTargetType' } as NamedNode,
	/** The class of SPARQL executables based on a SPARQL UPDATE. */
	'SPARQLUpdateExecutable': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#SPARQLUpdateExecutable', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#SPARQLUpdateExecutable' } as NamedNode,
	/** The class of validation result severity levels, including violation and warning levels. */
	'Severity': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Severity', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Severity' } as NamedNode,
	/** A shape is a collection of constraints that may be targeted for certain nodes. */
	'Shape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Shape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Shape' } as NamedNode,
	/** The base class of targets such as those based on SPARQL queries. */
	'Target': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Target', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Target' } as NamedNode,
	/** The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property. */
	'TargetType': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#TargetType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#TargetType' } as NamedNode,
	/** A rule based on triple (subject, predicate, object) pattern. */
	'TripleRule': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#TripleRule', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#TripleRule' } as NamedNode,
	/** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
	'UniqueLangConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent' } as NamedNode,
	'UniqueLangConstraintComponent_uniqueLang': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang' } as NamedNode,
	/** The class of SHACL validation reports. */
	'ValidationReport': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ValidationReport', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ValidationReport' } as NamedNode,
	/** The class of validation results. */
	'ValidationResult': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ValidationResult', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ValidationResult' } as NamedNode,
	/** The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations. */
	'Validator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Validator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Validator' } as NamedNode,
	/** The severity for a violation validation result. */
	'Violation': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Violation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Violation' } as NamedNode,
	/** The severity for a warning validation result. */
	'Warning': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#Warning', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#Warning' } as NamedNode,
	/** A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes. */
	'XoneConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#XoneConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#XoneConstraintComponent' } as NamedNode,
	'XoneConstraintComponent_xone': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone' } as NamedNode,
	/** The (single) value of this property must be a list of path elements, representing the elements of alternative paths. */
	'alternativePath': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#alternativePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#alternativePath' } as NamedNode,
	/** RDF list of shapes to validate the value nodes against. */
	'and': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#and', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#and' } as NamedNode,
	/** The annotation property that shall be set. */
	'annotationProperty': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#annotationProperty', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#annotationProperty' } as NamedNode,
	/** The (default) values of the annotation property. */
	'annotationValue': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#annotationValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#annotationValue' } as NamedNode,
	/** The name of the SPARQL variable from the SELECT clause that shall be used for the values. */
	'annotationVarName': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#annotationVarName', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#annotationVarName' } as NamedNode,
	/** The SPARQL ASK query to execute. */
	'ask': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ask', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ask' } as NamedNode,
	/** The type that all value nodes must have. */
	'class': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#class', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#class' } as NamedNode,
	/** If set to true then the shape is closed. */
	'closed': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#closed', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#closed' } as NamedNode,
	/** The shapes that the focus nodes need to conform to before a rule is executed on them. */
	'condition': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#condition', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#condition' } as NamedNode,
	/** True if the validation did not produce any validation results, and false otherwise. */
	'conforms': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#conforms', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#conforms' } as NamedNode,
	/** The SPARQL CONSTRUCT query to execute. */
	'construct': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#construct', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#construct' } as NamedNode,
	/** Specifies an RDF datatype that all value nodes must have. */
	'datatype': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#datatype', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#datatype' } as NamedNode,
	/** If set to true then all nodes conform to this. */
	'deactivated': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#deactivated', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#deactivated' } as NamedNode,
	/** Links a resource with its namespace prefix declarations. */
	'declare': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#declare', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#declare' } as NamedNode,
	/** A default value for a property, for example for user interface tools to pre-populate input fields. */
	'defaultValue': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#defaultValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#defaultValue' } as NamedNode,
	/** Human-readable descriptions for the property in the context of the surrounding shape. */
	'description': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#description', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#description' } as NamedNode,
	/** Links a result with other results that provide more details, for example to describe violations against nested shapes. */
	'detail': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#detail', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#detail' } as NamedNode,
	/** Specifies a property where the set of values must be disjoint with the value nodes. */
	'disjoint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#disjoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#disjoint' } as NamedNode,
	/** An entailment regime that indicates what kind of inferencing is required by a shapes graph. */
	'entailment': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#entailment', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#entailment' } as NamedNode,
	/** Specifies a property that must have the same values as the value nodes. */
	'equals': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#equals', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#equals' } as NamedNode,
	/** The node expression that must return true for the value nodes. */
	'expression': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#expression', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#expression' } as NamedNode,
	/** The shape that all input nodes of the expression need to conform to. */
	'filterShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#filterShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#filterShape' } as NamedNode,
	/** An optional flag to be used with regular expression pattern matching. */
	'flags': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#flags', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#flags' } as NamedNode,
	/** The focus node that was validated when the result was produced. */
	'focusNode': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#focusNode', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#focusNode' } as NamedNode,
	/** Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes. */
	'group': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#group', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#group' } as NamedNode,
	/** Specifies a value that must be among the value nodes. */
	'hasValue': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#hasValue', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#hasValue' } as NamedNode,
	/** An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path. */
	'ignoredProperties': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#ignoredProperties', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#ignoredProperties' } as NamedNode,
	/** Specifies a list of allowed values so that each value node must be among the members of the given list. */
	'in': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#in', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#in' } as NamedNode,
	/** A list of node expressions that shall be intersected. */
	'intersection': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#intersection', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#intersection' } as NamedNode,
	/** The (single) value of this property represents an inverse path (object to subject). */
	'inversePath': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#inversePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#inversePath' } as NamedNode,
	/** Constraints expressed in JavaScript. */
	'js': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#js', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#js' } as NamedNode,
	/** The name of the JavaScript function to execute. */
	'jsFunctionName': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#jsFunctionName', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#jsFunctionName' } as NamedNode,
	/** Declares which JavaScript libraries are needed to execute this. */
	'jsLibrary': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#jsLibrary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#jsLibrary' } as NamedNode,
	/** Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files. */
	'jsLibraryURL': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#jsLibraryURL', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#jsLibraryURL' } as NamedNode,
	/** Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter. */
	'labelTemplate': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#labelTemplate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#labelTemplate' } as NamedNode,
	/** Specifies a list of language tags that all value nodes must have. */
	'languageIn': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#languageIn', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#languageIn' } as NamedNode,
	/** Specifies a property that must have smaller values than the value nodes. */
	'lessThan': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#lessThan', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#lessThan' } as NamedNode,
	/** Specifies a property that must have smaller or equal values than the value nodes. */
	'lessThanOrEquals': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#lessThanOrEquals', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#lessThanOrEquals' } as NamedNode,
	/** Specifies the maximum number of values in the set of value nodes. */
	'maxCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#maxCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#maxCount' } as NamedNode,
	/** Specifies the maximum exclusive value of each value node. */
	'maxExclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#maxExclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#maxExclusive' } as NamedNode,
	/** Specifies the maximum inclusive value of each value node. */
	'maxInclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#maxInclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#maxInclusive' } as NamedNode,
	/** Specifies the maximum string length of each value node. */
	'maxLength': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#maxLength', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#maxLength' } as NamedNode,
	/** A human-readable message (possibly with placeholders for variables) explaining the cause of the result. */
	'message': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#message', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#message' } as NamedNode,
	/** Specifies the minimum number of values in the set of value nodes. */
	'minCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#minCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#minCount' } as NamedNode,
	/** Specifies the minimum exclusive value of each value node. */
	'minExclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#minExclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#minExclusive' } as NamedNode,
	/** Specifies the minimum inclusive value of each value node. */
	'minInclusive': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#minInclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#minInclusive' } as NamedNode,
	/** Specifies the minimum string length of each value node. */
	'minLength': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#minLength', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#minLength' } as NamedNode,
	/** Human-readable labels for the property in the context of the surrounding shape. */
	'name': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#name', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#name' } as NamedNode,
	/** The namespace associated with a prefix in a prefix declaration. */
	'namespace': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#namespace', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#namespace' } as NamedNode,
	/** Specifies the node shape that all value nodes must conform to. */
	'node': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#node', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#node' } as NamedNode,
	/** Specifies the node kind (e.g. IRI or literal) each value node. */
	'nodeKind': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#nodeKind', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#nodeKind' } as NamedNode,
	/** The validator(s) used to evaluate a constraint in the context of a node shape. */
	'nodeValidator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#nodeValidator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#nodeValidator' } as NamedNode,
	/** The node expression producing the input nodes of a filter shape expression. */
	'nodes': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#nodes', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#nodes' } as NamedNode,
	/** Specifies a shape that the value nodes must not conform to. */
	'not': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#not', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#not' } as NamedNode,
	/** An expression producing the nodes that shall be inferred as objects. */
	'object': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#object', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#object' } as NamedNode,
	/** The (single) value of this property represents a path that is matched one or more times. */
	'oneOrMorePath': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#oneOrMorePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#oneOrMorePath' } as NamedNode,
	/** Indicates whether a parameter is optional. */
	'optional': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#optional', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#optional' } as NamedNode,
	/** Specifies a list of shapes so that the value nodes must conform to at least one of the shapes. */
	'or': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#or', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#or' } as NamedNode,
	/** Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second. */
	'order': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#order', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#order' } as NamedNode,
	/** The parameters of a function or constraint component. */
	'parameter': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#parameter', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#parameter' } as NamedNode,
	/** Specifies the property path of a property shape. */
	'path': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#path', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#path' } as NamedNode,
	/** Specifies a regular expression pattern that the string representations of the value nodes must match. */
	'pattern': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#pattern', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#pattern' } as NamedNode,
	/** An expression producing the properties that shall be inferred as predicates. */
	'predicate': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#predicate', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#predicate' } as NamedNode,
	/** The prefix of a prefix declaration. */
	'prefix': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#prefix', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#prefix' } as NamedNode,
	/** The prefixes that shall be applied before parsing the associated SPARQL query. */
	'prefixes': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#prefixes', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#prefixes' } as NamedNode,
	/** Links a shape to its property shapes. */
	'property': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#property', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#property' } as NamedNode,
	/** The validator(s) used to evaluate a constraint in the context of a property shape. */
	'propertyValidator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#propertyValidator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#propertyValidator' } as NamedNode,
	/** The maximum number of value nodes that can conform to the shape. */
	'qualifiedMaxCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#qualifiedMaxCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#qualifiedMaxCount' } as NamedNode,
	/** The minimum number of value nodes that must conform to the shape. */
	'qualifiedMinCount': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#qualifiedMinCount', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#qualifiedMinCount' } as NamedNode,
	/** The shape that a specified number of values must conform to. */
	'qualifiedValueShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#qualifiedValueShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#qualifiedValueShape' } as NamedNode,
	/** Can be used to mark the qualified value shape to be disjoint with its sibling shapes. */
	'qualifiedValueShapesDisjoint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint' } as NamedNode,
	/** The validation results contained in a validation report. */
	'result': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#result', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#result' } as NamedNode,
	/** Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query. */
	'resultAnnotation': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#resultAnnotation', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#resultAnnotation' } as NamedNode,
	/** Human-readable messages explaining the cause of the result. */
	'resultMessage': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#resultMessage', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#resultMessage' } as NamedNode,
	/** The path of a validation result, based on the path of the validated property shape. */
	'resultPath': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#resultPath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#resultPath' } as NamedNode,
	/** The severity of the result, e.g. warning. */
	'resultSeverity': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#resultSeverity', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#resultSeverity' } as NamedNode,
	/** The expected type of values returned by the associated function. */
	'returnType': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#returnType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#returnType' } as NamedNode,
	/** The rules linked to a shape. */
	'rule': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#rule', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#rule' } as NamedNode,
	/** The SPARQL SELECT query to execute. */
	'select': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#select', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#select' } as NamedNode,
	/** Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation. */
	'severity': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#severity', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#severity' } as NamedNode,
	/** Shapes graphs that should be used when validating this data graph. */
	'shapesGraph': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#shapesGraph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#shapesGraph' } as NamedNode,
	/** If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process. */
	'shapesGraphWellFormed': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#shapesGraphWellFormed', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#shapesGraphWellFormed' } as NamedNode,
	/** The constraint that was validated when the result was produced. */
	'sourceConstraint': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#sourceConstraint', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#sourceConstraint' } as NamedNode,
	/** The constraint component that is the source of the result. */
	'sourceConstraintComponent': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#sourceConstraintComponent', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#sourceConstraintComponent' } as NamedNode,
	/** The shape that is was validated when the result was produced. */
	'sourceShape': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#sourceShape', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#sourceShape' } as NamedNode,
	/** Links a shape with SPARQL constraints. */
	'sparql': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#sparql', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#sparql' } as NamedNode,
	/** An expression producing the resources that shall be inferred as subjects. */
	'subject': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#subject', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#subject' } as NamedNode,
	/** Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements. */
	'suggestedShapesGraph': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#suggestedShapesGraph', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#suggestedShapesGraph' } as NamedNode,
	/** Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget. */
	'target': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#target', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#target' } as NamedNode,
	/** Links a shape to a class, indicating that all instances of the class must conform to the shape. */
	'targetClass': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#targetClass', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#targetClass' } as NamedNode,
	/** Links a shape to individual nodes, indicating that these nodes must conform to the shape. */
	'targetNode': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#targetNode', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#targetNode' } as NamedNode,
	/** Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape. */
	'targetObjectsOf': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#targetObjectsOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#targetObjectsOf' } as NamedNode,
	/** Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape. */
	'targetSubjectsOf': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#targetSubjectsOf', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#targetSubjectsOf' } as NamedNode,
	/** A node expression that represents the current focus node. */
	'this': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#this', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#this' } as NamedNode,
	/** A list of node expressions that shall be used together. */
	'union': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#union', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#union' } as NamedNode,
	/** Specifies whether all node values must have a unique (or no) language tag. */
	'uniqueLang': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#uniqueLang', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#uniqueLang' } as NamedNode,
	/** The SPARQL UPDATE to execute. */
	'update': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#update', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#update' } as NamedNode,
	/** The validator(s) used to evaluate constraints of either node or property shapes. */
	'validator': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#validator', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#validator' } as NamedNode,
	/** An RDF node that has caused the result. */
	'value': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#value', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#value' } as NamedNode,
	/** Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes. */
	'xone': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#xone', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#xone' } as NamedNode,
	/** The (single) value of this property represents a path that is matched zero or more times. */
	'zeroOrMorePath': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#zeroOrMorePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#zeroOrMorePath' } as NamedNode,
	/** The (single) value of this property represents a path that is matched zero or one times. */
	'zeroOrOnePath': { termType: 'NamedNode', value: 'http://www.w3.org/ns/shacl#zeroOrOnePath', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/ns/shacl#zeroOrOnePath' } as NamedNode,
}