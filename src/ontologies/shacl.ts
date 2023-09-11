import * as n3 from "n3";

export const SHACL = {
	/** The base class of validation results, typically not instantiated directly. */
	'AbstractResult': 'http://www.w3.org/ns/shacl#AbstractResult',
	/** A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes. */
	'AndConstraintComponent': 'http://www.w3.org/ns/shacl#AndConstraintComponent',
	'AndConstraintComponent-and': 'http://www.w3.org/ns/shacl#AndConstraintComponent-and',
	/** The node kind of all blank nodes. */
	'BlankNode': 'http://www.w3.org/ns/shacl#BlankNode',
	/** The node kind of all blank nodes or IRIs. */
	'BlankNodeOrIRI': 'http://www.w3.org/ns/shacl#BlankNodeOrIRI',
	/** The node kind of all blank nodes or literals. */
	'BlankNodeOrLiteral': 'http://www.w3.org/ns/shacl#BlankNodeOrLiteral',
	/** A constraint component that can be used to verify that each value node is an instance of a given type. */
	'ClassConstraintComponent': 'http://www.w3.org/ns/shacl#ClassConstraintComponent',
	'ClassConstraintComponent-class': 'http://www.w3.org/ns/shacl#ClassConstraintComponent-class',
	/** A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path. */
	'ClosedConstraintComponent': 'http://www.w3.org/ns/shacl#ClosedConstraintComponent',
	'ClosedConstraintComponent-closed': 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed',
	'ClosedConstraintComponent-ignoredProperties': 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties',
	/** The class of constraint components. */
	'ConstraintComponent': 'http://www.w3.org/ns/shacl#ConstraintComponent',
	/** A constraint component that can be used to restrict the datatype of all value nodes. */
	'DatatypeConstraintComponent': 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent',
	'DatatypeConstraintComponent-datatype': 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype',
	/** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'DisjointConstraintComponent': 'http://www.w3.org/ns/shacl#DisjointConstraintComponent',
	'DisjointConstraintComponent-disjoint': 'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint',
	/** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'EqualsConstraintComponent': 'http://www.w3.org/ns/shacl#EqualsConstraintComponent',
	'EqualsConstraintComponent-equals': 'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals',
	/** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
	'ExpressionConstraintComponent': 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent',
	'ExpressionConstraintComponent-expression': 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression',
	/** The class of SHACL functions. */
	'Function': 'http://www.w3.org/ns/shacl#Function',
	/** A constraint component that can be used to verify that one of the value nodes is a given RDF node. */
	'HasValueConstraintComponent': 'http://www.w3.org/ns/shacl#HasValueConstraintComponent',
	'HasValueConstraintComponent-hasValue': 'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue',
	/** The node kind of all IRIs. */
	'IRI': 'http://www.w3.org/ns/shacl#IRI',
	/** The node kind of all IRIs or literals. */
	'IRIOrLiteral': 'http://www.w3.org/ns/shacl#IRIOrLiteral',
	/** A constraint component that can be used to exclusively enumerate the permitted value nodes. */
	'InConstraintComponent': 'http://www.w3.org/ns/shacl#InConstraintComponent',
	'InConstraintComponent-in': 'http://www.w3.org/ns/shacl#InConstraintComponent-in',
	/** The severity for an informational validation result. */
	'Info': 'http://www.w3.org/ns/shacl#Info',
	/** The class of constraints backed by a JavaScript function. */
	'JSConstraint': 'http://www.w3.org/ns/shacl#JSConstraint',
	'JSConstraint-js': 'http://www.w3.org/ns/shacl#JSConstraint-js',
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
	'LanguageInConstraintComponent-languageIn': 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn',
	/** A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanConstraintComponent': 'http://www.w3.org/ns/shacl#LessThanConstraintComponent',
	'LessThanConstraintComponent-lessThan': 'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan',
	/** A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanOrEqualsConstraintComponent': 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent',
	'LessThanOrEqualsConstraintComponent-lessThanOrEquals': 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals',
	/** The node kind of all literals. */
	'Literal': 'http://www.w3.org/ns/shacl#Literal',
	/** A constraint component that can be used to restrict the maximum number of value nodes. */
	'MaxCountConstraintComponent': 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent',
	'MaxCountConstraintComponent-maxCount': 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount',
	/** A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value. */
	'MaxExclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent',
	'MaxExclusiveConstraintComponent-maxExclusive': 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive',
	/** A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value. */
	'MaxInclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent',
	'MaxInclusiveConstraintComponent-maxInclusive': 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive',
	/** A constraint component that can be used to restrict the maximum string length of value nodes. */
	'MaxLengthConstraintComponent': 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent',
	'MaxLengthConstraintComponent-maxLength': 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength',
	/** A constraint component that can be used to restrict the minimum number of value nodes. */
	'MinCountConstraintComponent': 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
	'MinCountConstraintComponent-minCount': 'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount',
	/** A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value. */
	'MinExclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent',
	'MinExclusiveConstraintComponent-minExclusive': 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive',
	/** A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value. */
	'MinInclusiveConstraintComponent': 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent',
	'MinInclusiveConstraintComponent-minInclusive': 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive',
	/** A constraint component that can be used to restrict the minimum string length of value nodes. */
	'MinLengthConstraintComponent': 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent',
	'MinLengthConstraintComponent-minLength': 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength',
	/** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
	'NodeConstraintComponent': 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
	'NodeConstraintComponent-node': 'http://www.w3.org/ns/shacl#NodeConstraintComponent-node',
	/** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
	'NodeKind': 'http://www.w3.org/ns/shacl#NodeKind',
	/** A constraint component that can be used to restrict the RDF node kind of each value node. */
	'NodeKindConstraintComponent': 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent',
	'NodeKindConstraintComponent-nodeKind': 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind',
	/** A node shape is a shape that specifies constraint that need to be met with respect to focus nodes. */
	'NodeShape': 'http://www.w3.org/ns/shacl#NodeShape',
	/** A constraint component that can be used to verify that value nodes do not conform to a given shape. */
	'NotConstraintComponent': 'http://www.w3.org/ns/shacl#NotConstraintComponent',
	'NotConstraintComponent-not': 'http://www.w3.org/ns/shacl#NotConstraintComponent-not',
	/** A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes. */
	'OrConstraintComponent': 'http://www.w3.org/ns/shacl#OrConstraintComponent',
	'OrConstraintComponent-or': 'http://www.w3.org/ns/shacl#OrConstraintComponent-or',
	/** The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics. */
	'Parameter': 'http://www.w3.org/ns/shacl#Parameter',
	/** Superclass of components that can take parameters, especially functions and constraint components. */
	'Parameterizable': 'http://www.w3.org/ns/shacl#Parameterizable',
	/** A constraint component that can be used to verify that every value node matches a given regular expression. */
	'PatternConstraintComponent': 'http://www.w3.org/ns/shacl#PatternConstraintComponent',
	'PatternConstraintComponent-flags': 'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags',
	'PatternConstraintComponent-pattern': 'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern',
	/** The class of prefix declarations, consisting of pairs of a prefix with a namespace. */
	'PrefixDeclaration': 'http://www.w3.org/ns/shacl#PrefixDeclaration',
	/** A constraint component that can be used to verify that all value nodes conform to the given property shape. */
	'PropertyConstraintComponent': 'http://www.w3.org/ns/shacl#PropertyConstraintComponent',
	'PropertyConstraintComponent-property': 'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property',
	/** Instances of this class represent groups of property shapes that belong together. */
	'PropertyGroup': 'http://www.w3.org/ns/shacl#PropertyGroup',
	/** A property shape is a shape that specifies constraints on the values of a focus node for a given property or path. */
	'PropertyShape': 'http://www.w3.org/ns/shacl#PropertyShape',
	/** A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape. */
	'QualifiedMaxCountConstraintComponent': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent',
	'QualifiedMaxCountConstraintComponent-qualifiedMaxCount': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount',
	'QualifiedMaxCountConstraintComponent-qualifiedValueShape': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape',
	'QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint': 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint',
	/** A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape. */
	'QualifiedMinCountConstraintComponent': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent',
	'QualifiedMinCountConstraintComponent-qualifiedMinCount': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount',
	'QualifiedMinCountConstraintComponent-qualifiedValueShape': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape',
	'QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint': 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint',
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
	'SPARQLConstraintComponent-sparql': 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql',
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
	'TripleRule': 'http://www.w3.org/ns/shacl#TripleRule',
	/** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
	'UniqueLangConstraintComponent': 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent',
	'UniqueLangConstraintComponent-uniqueLang': 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang',
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
	'XoneConstraintComponent-xone': 'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone',
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

export const shacl = {
	/** The base class of validation results, typically not instantiated directly. */
	'AbstractResult': new n3.NamedNode('http://www.w3.org/ns/shacl#AbstractResult'),
	/** A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes. */
	'AndConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#AndConstraintComponent'),
	'AndConstraintComponent-and': new n3.NamedNode('http://www.w3.org/ns/shacl#AndConstraintComponent-and'),
	/** The node kind of all blank nodes. */
	'BlankNode': new n3.NamedNode('http://www.w3.org/ns/shacl#BlankNode'),
	/** The node kind of all blank nodes or IRIs. */
	'BlankNodeOrIRI': new n3.NamedNode('http://www.w3.org/ns/shacl#BlankNodeOrIRI'),
	/** The node kind of all blank nodes or literals. */
	'BlankNodeOrLiteral': new n3.NamedNode('http://www.w3.org/ns/shacl#BlankNodeOrLiteral'),
	/** A constraint component that can be used to verify that each value node is an instance of a given type. */
	'ClassConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#ClassConstraintComponent'),
	'ClassConstraintComponent-class': new n3.NamedNode('http://www.w3.org/ns/shacl#ClassConstraintComponent-class'),
	/** A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path. */
	'ClosedConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#ClosedConstraintComponent'),
	'ClosedConstraintComponent-closed': new n3.NamedNode('http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed'),
	'ClosedConstraintComponent-ignoredProperties': new n3.NamedNode('http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties'),
	/** The class of constraint components. */
	'ConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#ConstraintComponent'),
	/** A constraint component that can be used to restrict the datatype of all value nodes. */
	'DatatypeConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#DatatypeConstraintComponent'),
	'DatatypeConstraintComponent-datatype': new n3.NamedNode('http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype'),
	/** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'DisjointConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#DisjointConstraintComponent'),
	'DisjointConstraintComponent-disjoint': new n3.NamedNode('http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint'),
	/** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate. */
	'EqualsConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#EqualsConstraintComponent'),
	'EqualsConstraintComponent-equals': new n3.NamedNode('http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals'),
	/** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
	'ExpressionConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#ExpressionConstraintComponent'),
	'ExpressionConstraintComponent-expression': new n3.NamedNode('http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression'),
	/** The class of SHACL functions. */
	'Function': new n3.NamedNode('http://www.w3.org/ns/shacl#Function'),
	/** A constraint component that can be used to verify that one of the value nodes is a given RDF node. */
	'HasValueConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#HasValueConstraintComponent'),
	'HasValueConstraintComponent-hasValue': new n3.NamedNode('http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue'),
	/** The node kind of all IRIs. */
	'IRI': new n3.NamedNode('http://www.w3.org/ns/shacl#IRI'),
	/** The node kind of all IRIs or literals. */
	'IRIOrLiteral': new n3.NamedNode('http://www.w3.org/ns/shacl#IRIOrLiteral'),
	/** A constraint component that can be used to exclusively enumerate the permitted value nodes. */
	'InConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#InConstraintComponent'),
	'InConstraintComponent-in': new n3.NamedNode('http://www.w3.org/ns/shacl#InConstraintComponent-in'),
	/** The severity for an informational validation result. */
	'Info': new n3.NamedNode('http://www.w3.org/ns/shacl#Info'),
	/** The class of constraints backed by a JavaScript function. */
	'JSConstraint': new n3.NamedNode('http://www.w3.org/ns/shacl#JSConstraint'),
	'JSConstraint-js': new n3.NamedNode('http://www.w3.org/ns/shacl#JSConstraint-js'),
	/** A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script. */
	'JSConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#JSConstraintComponent'),
	/** Abstract base class of resources that declare an executable JavaScript. */
	'JSExecutable': new n3.NamedNode('http://www.w3.org/ns/shacl#JSExecutable'),
	/** The class of SHACL functions that execute a JavaScript function when called. */
	'JSFunction': new n3.NamedNode('http://www.w3.org/ns/shacl#JSFunction'),
	/** Represents a JavaScript library, typically identified by one or more URLs of files to include. */
	'JSLibrary': new n3.NamedNode('http://www.w3.org/ns/shacl#JSLibrary'),
	/** The class of SHACL rules expressed using JavaScript. */
	'JSRule': new n3.NamedNode('http://www.w3.org/ns/shacl#JSRule'),
	/** The class of targets that are based on JavaScript functions. */
	'JSTarget': new n3.NamedNode('http://www.w3.org/ns/shacl#JSTarget'),
	/** The (meta) class for parameterizable targets that are based on JavaScript functions. */
	'JSTargetType': new n3.NamedNode('http://www.w3.org/ns/shacl#JSTargetType'),
	/** A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used. */
	'JSValidator': new n3.NamedNode('http://www.w3.org/ns/shacl#JSValidator'),
	/** A constraint component that can be used to enumerate language tags that all value nodes must have. */
	'LanguageInConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#LanguageInConstraintComponent'),
	'LanguageInConstraintComponent-languageIn': new n3.NamedNode('http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn'),
	/** A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#LessThanConstraintComponent'),
	'LessThanConstraintComponent-lessThan': new n3.NamedNode('http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan'),
	/** A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
	'LessThanOrEqualsConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent'),
	'LessThanOrEqualsConstraintComponent-lessThanOrEquals': new n3.NamedNode('http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals'),
	/** The node kind of all literals. */
	'Literal': new n3.NamedNode('http://www.w3.org/ns/shacl#Literal'),
	/** A constraint component that can be used to restrict the maximum number of value nodes. */
	'MaxCountConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxCountConstraintComponent'),
	'MaxCountConstraintComponent-maxCount': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount'),
	/** A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value. */
	'MaxExclusiveConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent'),
	'MaxExclusiveConstraintComponent-maxExclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive'),
	/** A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value. */
	'MaxInclusiveConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent'),
	'MaxInclusiveConstraintComponent-maxInclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive'),
	/** A constraint component that can be used to restrict the maximum string length of value nodes. */
	'MaxLengthConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxLengthConstraintComponent'),
	'MaxLengthConstraintComponent-maxLength': new n3.NamedNode('http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength'),
	/** A constraint component that can be used to restrict the minimum number of value nodes. */
	'MinCountConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MinCountConstraintComponent'),
	'MinCountConstraintComponent-minCount': new n3.NamedNode('http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount'),
	/** A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value. */
	'MinExclusiveConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent'),
	'MinExclusiveConstraintComponent-minExclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive'),
	/** A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value. */
	'MinInclusiveConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent'),
	'MinInclusiveConstraintComponent-minInclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive'),
	/** A constraint component that can be used to restrict the minimum string length of value nodes. */
	'MinLengthConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#MinLengthConstraintComponent'),
	'MinLengthConstraintComponent-minLength': new n3.NamedNode('http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength'),
	/** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
	'NodeConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#NodeConstraintComponent'),
	'NodeConstraintComponent-node': new n3.NamedNode('http://www.w3.org/ns/shacl#NodeConstraintComponent-node'),
	/** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
	'NodeKind': new n3.NamedNode('http://www.w3.org/ns/shacl#NodeKind'),
	/** A constraint component that can be used to restrict the RDF node kind of each value node. */
	'NodeKindConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#NodeKindConstraintComponent'),
	'NodeKindConstraintComponent-nodeKind': new n3.NamedNode('http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind'),
	/** A node shape is a shape that specifies constraint that need to be met with respect to focus nodes. */
	'NodeShape': new n3.NamedNode('http://www.w3.org/ns/shacl#NodeShape'),
	/** A constraint component that can be used to verify that value nodes do not conform to a given shape. */
	'NotConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#NotConstraintComponent'),
	'NotConstraintComponent-not': new n3.NamedNode('http://www.w3.org/ns/shacl#NotConstraintComponent-not'),
	/** A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes. */
	'OrConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#OrConstraintComponent'),
	'OrConstraintComponent-or': new n3.NamedNode('http://www.w3.org/ns/shacl#OrConstraintComponent-or'),
	/** The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics. */
	'Parameter': new n3.NamedNode('http://www.w3.org/ns/shacl#Parameter'),
	/** Superclass of components that can take parameters, especially functions and constraint components. */
	'Parameterizable': new n3.NamedNode('http://www.w3.org/ns/shacl#Parameterizable'),
	/** A constraint component that can be used to verify that every value node matches a given regular expression. */
	'PatternConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#PatternConstraintComponent'),
	'PatternConstraintComponent-flags': new n3.NamedNode('http://www.w3.org/ns/shacl#PatternConstraintComponent-flags'),
	'PatternConstraintComponent-pattern': new n3.NamedNode('http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern'),
	/** The class of prefix declarations, consisting of pairs of a prefix with a namespace. */
	'PrefixDeclaration': new n3.NamedNode('http://www.w3.org/ns/shacl#PrefixDeclaration'),
	/** A constraint component that can be used to verify that all value nodes conform to the given property shape. */
	'PropertyConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#PropertyConstraintComponent'),
	'PropertyConstraintComponent-property': new n3.NamedNode('http://www.w3.org/ns/shacl#PropertyConstraintComponent-property'),
	/** Instances of this class represent groups of property shapes that belong together. */
	'PropertyGroup': new n3.NamedNode('http://www.w3.org/ns/shacl#PropertyGroup'),
	/** A property shape is a shape that specifies constraints on the values of a focus node for a given property or path. */
	'PropertyShape': new n3.NamedNode('http://www.w3.org/ns/shacl#PropertyShape'),
	/** A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape. */
	'QualifiedMaxCountConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent'),
	'QualifiedMaxCountConstraintComponent-qualifiedMaxCount': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount'),
	'QualifiedMaxCountConstraintComponent-qualifiedValueShape': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape'),
	'QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint'),
	/** A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape. */
	'QualifiedMinCountConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent'),
	'QualifiedMinCountConstraintComponent-qualifiedMinCount': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount'),
	'QualifiedMinCountConstraintComponent-qualifiedValueShape': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape'),
	'QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint': new n3.NamedNode('http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint'),
	/** A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result. */
	'ResultAnnotation': new n3.NamedNode('http://www.w3.org/ns/shacl#ResultAnnotation'),
	/** The class of SHACL rules. Never instantiated directly. */
	'Rule': new n3.NamedNode('http://www.w3.org/ns/shacl#Rule'),
	/** The class of SPARQL executables that are based on an ASK query. */
	'SPARQLAskExecutable': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLAskExecutable'),
	/** The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms. */
	'SPARQLAskValidator': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLAskValidator'),
	/** The class of constraints based on SPARQL SELECT queries. */
	'SPARQLConstraint': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLConstraint'),
	/** A constraint component that can be used to define constraints based on SPARQL queries. */
	'SPARQLConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLConstraintComponent'),
	'SPARQLConstraintComponent-sparql': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql'),
	/** The class of SPARQL executables that are based on a CONSTRUCT query. */
	'SPARQLConstructExecutable': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLConstructExecutable'),
	/** The class of resources that encapsulate a SPARQL query. */
	'SPARQLExecutable': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLExecutable'),
	/** A function backed by a SPARQL query - either ASK or SELECT. */
	'SPARQLFunction': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLFunction'),
	/** The class of SHACL rules based on SPARQL CONSTRUCT queries. */
	'SPARQLRule': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLRule'),
	/** The class of SPARQL executables based on a SELECT query. */
	'SPARQLSelectExecutable': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLSelectExecutable'),
	/** The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform. */
	'SPARQLSelectValidator': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLSelectValidator'),
	/** The class of targets that are based on SPARQL queries. */
	'SPARQLTarget': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLTarget'),
	/** The (meta) class for parameterizable targets that are based on SPARQL queries. */
	'SPARQLTargetType': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLTargetType'),
	/** The class of SPARQL executables based on a SPARQL UPDATE. */
	'SPARQLUpdateExecutable': new n3.NamedNode('http://www.w3.org/ns/shacl#SPARQLUpdateExecutable'),
	/** The class of validation result severity levels, including violation and warning levels. */
	'Severity': new n3.NamedNode('http://www.w3.org/ns/shacl#Severity'),
	/** A shape is a collection of constraints that may be targeted for certain nodes. */
	'Shape': new n3.NamedNode('http://www.w3.org/ns/shacl#Shape'),
	/** The base class of targets such as those based on SPARQL queries. */
	'Target': new n3.NamedNode('http://www.w3.org/ns/shacl#Target'),
	/** The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property. */
	'TargetType': new n3.NamedNode('http://www.w3.org/ns/shacl#TargetType'),
	'TripleRule': new n3.NamedNode('http://www.w3.org/ns/shacl#TripleRule'),
	/** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
	'UniqueLangConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#UniqueLangConstraintComponent'),
	'UniqueLangConstraintComponent-uniqueLang': new n3.NamedNode('http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang'),
	/** The class of SHACL validation reports. */
	'ValidationReport': new n3.NamedNode('http://www.w3.org/ns/shacl#ValidationReport'),
	/** The class of validation results. */
	'ValidationResult': new n3.NamedNode('http://www.w3.org/ns/shacl#ValidationResult'),
	/** The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations. */
	'Validator': new n3.NamedNode('http://www.w3.org/ns/shacl#Validator'),
	/** The severity for a violation validation result. */
	'Violation': new n3.NamedNode('http://www.w3.org/ns/shacl#Violation'),
	/** The severity for a warning validation result. */
	'Warning': new n3.NamedNode('http://www.w3.org/ns/shacl#Warning'),
	/** A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes. */
	'XoneConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#XoneConstraintComponent'),
	'XoneConstraintComponent-xone': new n3.NamedNode('http://www.w3.org/ns/shacl#XoneConstraintComponent-xone'),
	/** The (single) value of this property must be a list of path elements, representing the elements of alternative paths. */
	'alternativePath': new n3.NamedNode('http://www.w3.org/ns/shacl#alternativePath'),
	/** RDF list of shapes to validate the value nodes against. */
	'and': new n3.NamedNode('http://www.w3.org/ns/shacl#and'),
	/** The annotation property that shall be set. */
	'annotationProperty': new n3.NamedNode('http://www.w3.org/ns/shacl#annotationProperty'),
	/** The (default) values of the annotation property. */
	'annotationValue': new n3.NamedNode('http://www.w3.org/ns/shacl#annotationValue'),
	/** The name of the SPARQL variable from the SELECT clause that shall be used for the values. */
	'annotationVarName': new n3.NamedNode('http://www.w3.org/ns/shacl#annotationVarName'),
	/** The SPARQL ASK query to execute. */
	'ask': new n3.NamedNode('http://www.w3.org/ns/shacl#ask'),
	/** The type that all value nodes must have. */
	'class': new n3.NamedNode('http://www.w3.org/ns/shacl#class'),
	/** If set to true then the shape is closed. */
	'closed': new n3.NamedNode('http://www.w3.org/ns/shacl#closed'),
	/** The shapes that the focus nodes need to conform to before a rule is executed on them. */
	'condition': new n3.NamedNode('http://www.w3.org/ns/shacl#condition'),
	/** True if the validation did not produce any validation results, and false otherwise. */
	'conforms': new n3.NamedNode('http://www.w3.org/ns/shacl#conforms'),
	/** The SPARQL CONSTRUCT query to execute. */
	'construct': new n3.NamedNode('http://www.w3.org/ns/shacl#construct'),
	/** Specifies an RDF datatype that all value nodes must have. */
	'datatype': new n3.NamedNode('http://www.w3.org/ns/shacl#datatype'),
	/** If set to true then all nodes conform to this. */
	'deactivated': new n3.NamedNode('http://www.w3.org/ns/shacl#deactivated'),
	/** Links a resource with its namespace prefix declarations. */
	'declare': new n3.NamedNode('http://www.w3.org/ns/shacl#declare'),
	/** A default value for a property, for example for user interface tools to pre-populate input fields. */
	'defaultValue': new n3.NamedNode('http://www.w3.org/ns/shacl#defaultValue'),
	/** Human-readable descriptions for the property in the context of the surrounding shape. */
	'description': new n3.NamedNode('http://www.w3.org/ns/shacl#description'),
	/** Links a result with other results that provide more details, for example to describe violations against nested shapes. */
	'detail': new n3.NamedNode('http://www.w3.org/ns/shacl#detail'),
	/** Specifies a property where the set of values must be disjoint with the value nodes. */
	'disjoint': new n3.NamedNode('http://www.w3.org/ns/shacl#disjoint'),
	/** An entailment regime that indicates what kind of inferencing is required by a shapes graph. */
	'entailment': new n3.NamedNode('http://www.w3.org/ns/shacl#entailment'),
	/** Specifies a property that must have the same values as the value nodes. */
	'equals': new n3.NamedNode('http://www.w3.org/ns/shacl#equals'),
	/** The node expression that must return true for the value nodes. */
	'expression': new n3.NamedNode('http://www.w3.org/ns/shacl#expression'),
	/** The shape that all input nodes of the expression need to conform to. */
	'filterShape': new n3.NamedNode('http://www.w3.org/ns/shacl#filterShape'),
	/** An optional flag to be used with regular expression pattern matching. */
	'flags': new n3.NamedNode('http://www.w3.org/ns/shacl#flags'),
	/** The focus node that was validated when the result was produced. */
	'focusNode': new n3.NamedNode('http://www.w3.org/ns/shacl#focusNode'),
	/** Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes. */
	'group': new n3.NamedNode('http://www.w3.org/ns/shacl#group'),
	/** Specifies a value that must be among the value nodes. */
	'hasValue': new n3.NamedNode('http://www.w3.org/ns/shacl#hasValue'),
	/** An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path. */
	'ignoredProperties': new n3.NamedNode('http://www.w3.org/ns/shacl#ignoredProperties'),
	/** Specifies a list of allowed values so that each value node must be among the members of the given list. */
	'in': new n3.NamedNode('http://www.w3.org/ns/shacl#in'),
	/** A list of node expressions that shall be intersected. */
	'intersection': new n3.NamedNode('http://www.w3.org/ns/shacl#intersection'),
	/** The (single) value of this property represents an inverse path (object to subject). */
	'inversePath': new n3.NamedNode('http://www.w3.org/ns/shacl#inversePath'),
	/** Constraints expressed in JavaScript. */
	'js': new n3.NamedNode('http://www.w3.org/ns/shacl#js'),
	/** The name of the JavaScript function to execute. */
	'jsFunctionName': new n3.NamedNode('http://www.w3.org/ns/shacl#jsFunctionName'),
	/** Declares which JavaScript libraries are needed to execute this. */
	'jsLibrary': new n3.NamedNode('http://www.w3.org/ns/shacl#jsLibrary'),
	/** Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files. */
	'jsLibraryURL': new n3.NamedNode('http://www.w3.org/ns/shacl#jsLibraryURL'),
	/** Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter. */
	'labelTemplate': new n3.NamedNode('http://www.w3.org/ns/shacl#labelTemplate'),
	/** Specifies a list of language tags that all value nodes must have. */
	'languageIn': new n3.NamedNode('http://www.w3.org/ns/shacl#languageIn'),
	/** Specifies a property that must have smaller values than the value nodes. */
	'lessThan': new n3.NamedNode('http://www.w3.org/ns/shacl#lessThan'),
	/** Specifies a property that must have smaller or equal values than the value nodes. */
	'lessThanOrEquals': new n3.NamedNode('http://www.w3.org/ns/shacl#lessThanOrEquals'),
	/** Specifies the maximum number of values in the set of value nodes. */
	'maxCount': new n3.NamedNode('http://www.w3.org/ns/shacl#maxCount'),
	/** Specifies the maximum exclusive value of each value node. */
	'maxExclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#maxExclusive'),
	/** Specifies the maximum inclusive value of each value node. */
	'maxInclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#maxInclusive'),
	/** Specifies the maximum string length of each value node. */
	'maxLength': new n3.NamedNode('http://www.w3.org/ns/shacl#maxLength'),
	/** A human-readable message (possibly with placeholders for variables) explaining the cause of the result. */
	'message': new n3.NamedNode('http://www.w3.org/ns/shacl#message'),
	/** Specifies the minimum number of values in the set of value nodes. */
	'minCount': new n3.NamedNode('http://www.w3.org/ns/shacl#minCount'),
	/** Specifies the minimum exclusive value of each value node. */
	'minExclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#minExclusive'),
	/** Specifies the minimum inclusive value of each value node. */
	'minInclusive': new n3.NamedNode('http://www.w3.org/ns/shacl#minInclusive'),
	/** Specifies the minimum string length of each value node. */
	'minLength': new n3.NamedNode('http://www.w3.org/ns/shacl#minLength'),
	/** Human-readable labels for the property in the context of the surrounding shape. */
	'name': new n3.NamedNode('http://www.w3.org/ns/shacl#name'),
	/** The namespace associated with a prefix in a prefix declaration. */
	'namespace': new n3.NamedNode('http://www.w3.org/ns/shacl#namespace'),
	/** Specifies the node shape that all value nodes must conform to. */
	'node': new n3.NamedNode('http://www.w3.org/ns/shacl#node'),
	/** Specifies the node kind (e.g. IRI or literal) each value node. */
	'nodeKind': new n3.NamedNode('http://www.w3.org/ns/shacl#nodeKind'),
	/** The validator(s) used to evaluate a constraint in the context of a node shape. */
	'nodeValidator': new n3.NamedNode('http://www.w3.org/ns/shacl#nodeValidator'),
	/** The node expression producing the input nodes of a filter shape expression. */
	'nodes': new n3.NamedNode('http://www.w3.org/ns/shacl#nodes'),
	/** Specifies a shape that the value nodes must not conform to. */
	'not': new n3.NamedNode('http://www.w3.org/ns/shacl#not'),
	/** An expression producing the nodes that shall be inferred as objects. */
	'object': new n3.NamedNode('http://www.w3.org/ns/shacl#object'),
	/** The (single) value of this property represents a path that is matched one or more times. */
	'oneOrMorePath': new n3.NamedNode('http://www.w3.org/ns/shacl#oneOrMorePath'),
	/** Indicates whether a parameter is optional. */
	'optional': new n3.NamedNode('http://www.w3.org/ns/shacl#optional'),
	/** Specifies a list of shapes so that the value nodes must conform to at least one of the shapes. */
	'or': new n3.NamedNode('http://www.w3.org/ns/shacl#or'),
	/** Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second. */
	'order': new n3.NamedNode('http://www.w3.org/ns/shacl#order'),
	/** The parameters of a function or constraint component. */
	'parameter': new n3.NamedNode('http://www.w3.org/ns/shacl#parameter'),
	/** Specifies the property path of a property shape. */
	'path': new n3.NamedNode('http://www.w3.org/ns/shacl#path'),
	/** Specifies a regular expression pattern that the string representations of the value nodes must match. */
	'pattern': new n3.NamedNode('http://www.w3.org/ns/shacl#pattern'),
	/** An expression producing the properties that shall be inferred as predicates. */
	'predicate': new n3.NamedNode('http://www.w3.org/ns/shacl#predicate'),
	/** The prefix of a prefix declaration. */
	'prefix': new n3.NamedNode('http://www.w3.org/ns/shacl#prefix'),
	/** The prefixes that shall be applied before parsing the associated SPARQL query. */
	'prefixes': new n3.NamedNode('http://www.w3.org/ns/shacl#prefixes'),
	/** Links a shape to its property shapes. */
	'property': new n3.NamedNode('http://www.w3.org/ns/shacl#property'),
	/** The validator(s) used to evaluate a constraint in the context of a property shape. */
	'propertyValidator': new n3.NamedNode('http://www.w3.org/ns/shacl#propertyValidator'),
	/** The maximum number of value nodes that can conform to the shape. */
	'qualifiedMaxCount': new n3.NamedNode('http://www.w3.org/ns/shacl#qualifiedMaxCount'),
	/** The minimum number of value nodes that must conform to the shape. */
	'qualifiedMinCount': new n3.NamedNode('http://www.w3.org/ns/shacl#qualifiedMinCount'),
	/** The shape that a specified number of values must conform to. */
	'qualifiedValueShape': new n3.NamedNode('http://www.w3.org/ns/shacl#qualifiedValueShape'),
	/** Can be used to mark the qualified value shape to be disjoint with its sibling shapes. */
	'qualifiedValueShapesDisjoint': new n3.NamedNode('http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint'),
	/** The validation results contained in a validation report. */
	'result': new n3.NamedNode('http://www.w3.org/ns/shacl#result'),
	/** Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query. */
	'resultAnnotation': new n3.NamedNode('http://www.w3.org/ns/shacl#resultAnnotation'),
	/** Human-readable messages explaining the cause of the result. */
	'resultMessage': new n3.NamedNode('http://www.w3.org/ns/shacl#resultMessage'),
	/** The path of a validation result, based on the path of the validated property shape. */
	'resultPath': new n3.NamedNode('http://www.w3.org/ns/shacl#resultPath'),
	/** The severity of the result, e.g. warning. */
	'resultSeverity': new n3.NamedNode('http://www.w3.org/ns/shacl#resultSeverity'),
	/** The expected type of values returned by the associated function. */
	'returnType': new n3.NamedNode('http://www.w3.org/ns/shacl#returnType'),
	/** The rules linked to a shape. */
	'rule': new n3.NamedNode('http://www.w3.org/ns/shacl#rule'),
	/** The SPARQL SELECT query to execute. */
	'select': new n3.NamedNode('http://www.w3.org/ns/shacl#select'),
	/** Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation. */
	'severity': new n3.NamedNode('http://www.w3.org/ns/shacl#severity'),
	/** Shapes graphs that should be used when validating this data graph. */
	'shapesGraph': new n3.NamedNode('http://www.w3.org/ns/shacl#shapesGraph'),
	/** If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process. */
	'shapesGraphWellFormed': new n3.NamedNode('http://www.w3.org/ns/shacl#shapesGraphWellFormed'),
	/** The constraint that was validated when the result was produced. */
	'sourceConstraint': new n3.NamedNode('http://www.w3.org/ns/shacl#sourceConstraint'),
	/** The constraint component that is the source of the result. */
	'sourceConstraintComponent': new n3.NamedNode('http://www.w3.org/ns/shacl#sourceConstraintComponent'),
	/** The shape that is was validated when the result was produced. */
	'sourceShape': new n3.NamedNode('http://www.w3.org/ns/shacl#sourceShape'),
	/** Links a shape with SPARQL constraints. */
	'sparql': new n3.NamedNode('http://www.w3.org/ns/shacl#sparql'),
	/** An expression producing the resources that shall be inferred as subjects. */
	'subject': new n3.NamedNode('http://www.w3.org/ns/shacl#subject'),
	/** Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements. */
	'suggestedShapesGraph': new n3.NamedNode('http://www.w3.org/ns/shacl#suggestedShapesGraph'),
	/** Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget. */
	'target': new n3.NamedNode('http://www.w3.org/ns/shacl#target'),
	/** Links a shape to a class, indicating that all instances of the class must conform to the shape. */
	'targetClass': new n3.NamedNode('http://www.w3.org/ns/shacl#targetClass'),
	/** Links a shape to individual nodes, indicating that these nodes must conform to the shape. */
	'targetNode': new n3.NamedNode('http://www.w3.org/ns/shacl#targetNode'),
	/** Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape. */
	'targetObjectsOf': new n3.NamedNode('http://www.w3.org/ns/shacl#targetObjectsOf'),
	/** Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape. */
	'targetSubjectsOf': new n3.NamedNode('http://www.w3.org/ns/shacl#targetSubjectsOf'),
	/** A node expression that represents the current focus node. */
	'this': new n3.NamedNode('http://www.w3.org/ns/shacl#this'),
	/** A list of node expressions that shall be used together. */
	'union': new n3.NamedNode('http://www.w3.org/ns/shacl#union'),
	/** Specifies whether all node values must have a unique (or no) language tag. */
	'uniqueLang': new n3.NamedNode('http://www.w3.org/ns/shacl#uniqueLang'),
	/** The SPARQL UPDATE to execute. */
	'update': new n3.NamedNode('http://www.w3.org/ns/shacl#update'),
	/** The validator(s) used to evaluate constraints of either node or property shapes. */
	'validator': new n3.NamedNode('http://www.w3.org/ns/shacl#validator'),
	/** An RDF node that has caused the result. */
	'value': new n3.NamedNode('http://www.w3.org/ns/shacl#value'),
	/** Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes. */
	'xone': new n3.NamedNode('http://www.w3.org/ns/shacl#xone'),
	/** The (single) value of this property represents a path that is matched zero or more times. */
	'zeroOrMorePath': new n3.NamedNode('http://www.w3.org/ns/shacl#zeroOrMorePath'),
	/** The (single) value of this property represents a path that is matched zero or one times. */
	'zeroOrOnePath': new n3.NamedNode('http://www.w3.org/ns/shacl#zeroOrOnePath'),
}