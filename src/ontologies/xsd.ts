import { NamedNode } from '@rdfjs/types';

/** Namespace URI of the XSD vocabulary. */
export const _XSD = 'http://www.w3.org/2001/XMLSchema#';

export const XSD = {
	/** ENTITY represents the ENTITY attribute type from [XML].  The ·value space· of ENTITY is the set of all strings that ·match· the NCName production in [Namespaces in XML] and have been declared as an unparsed entity in a document type definition. The ·lexical space· of ENTITY is the set of all strings that ·match· the NCName production in [Namespaces in XML]. The ·base type· of ENTITY is NCName.  */
	'ENTITY': 'http://www.w3.org/2001/XMLSchema#ENTITY',
	/** ID represents the ID attribute type from [XML].  The ·value space· of ID is the set of all strings that ·match· the NCName production in [Namespaces in XML].  The ·lexical space· of ID is the set of all strings that ·match· the NCName production in [Namespaces in XML]. The ·base type· of ID is NCName. */
	'ID': 'http://www.w3.org/2001/XMLSchema#ID',
	/**  IDREF represents the IDREF attribute type from [XML]. The ·value space· of IDREF is the set of all strings that ·match· the NCName production in [Namespaces in XML].  The ·lexical space· of IDREF is the set of strings that ·match· the NCName production in [Namespaces in XML]. The ·base type· of IDREF is NCName. */
	'IDREF': 'http://www.w3.org/2001/XMLSchema#IDREF',
	'NCName': 'http://www.w3.org/2001/XMLSchema#NCName',
	/** NMTOKEN represents the NMTOKEN attribute type from [XML]. The ·value space· of NMTOKEN is the set of tokens that ·match· the Nmtoken production in [XML]. The ·lexical space· of NMTOKEN is the set of strings that ·match· the Nmtoken production in [XML]. The ·base type· of NMTOKEN is token. */
	'NMTOKEN': 'http://www.w3.org/2001/XMLSchema#NMTOKEN',
	'Name': 'http://www.w3.org/2001/XMLSchema#Name',
	/** QName represents XML qualified names. The ·value space· of QName is the set of tuples {namespace name, local part}, where namespace name is an anyURI and local part is an NCName. The ·lexical space· of QName is the set of strings that ·match· the QName production of [Namespaces in XML]. */
	'QName': 'http://www.w3.org/2001/XMLSchema#QName',
	/** The base class of any primitive XSD dataype. */
	'anySimpleType': 'http://www.w3.org/2001/XMLSchema#anySimpleType',
	/** anyURI represents an Internationalized Resource Identifier Reference (IRI). An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be an IRI Reference).  This type should be used when the value fulfills the role of an IRI, as defined in [RFC 3987] or its successor(s) in the IETF Standards Track. */
	'anyURI': 'http://www.w3.org/2001/XMLSchema#anyURI',
	/** base64Binary represents arbitrary Base64-encoded binary data. For base64Binary data the entire binary stream is encoded using the Base64 Encoding defined in [RFC 3548], which is derived from the encoding described in [RFC 2045]. */
	'base64Binary': 'http://www.w3.org/2001/XMLSchema#base64Binary',
	/** boolean represents the values of two-valued logic. */
	'boolean': 'http://www.w3.org/2001/XMLSchema#boolean',
	/** byte is ·derived· from short by setting the value of ·maxInclusive· to be 127 and ·minInclusive· to be -128. The ·base type· of byte is short. */
	'byte': 'http://www.w3.org/2001/XMLSchema#byte',
	/** date represents top-open intervals of exactly one day in length on the timelines of dateTime, beginning on the beginning moment of each day, up to but not including the beginning moment of the next day).  For non-timezoned values, the top-open intervals disjointly cover the non-timezoned timeline, one per day.  For timezoned values, the intervals begin at every minute and therefore overlap. */
	'date': 'http://www.w3.org/2001/XMLSchema#date',
	/** dateTime represents instants of time, optionally marked with a particular time zone offset.  Values representing the same instant but having different time zone offsets are equal but not identical. */
	'dateTime': 'http://www.w3.org/2001/XMLSchema#dateTime',
	/** The dateTimeStamp datatype is ·derived· from dateTime by giving the value required to its explicitTimezone facet. The result is that all values of dateTimeStamp are required to have explicit time zone offsets and the datatype is totally ordered. */
	'dateTimeStamp': 'http://www.w3.org/2001/XMLSchema#dateTimeStamp',
	/** decimal represents a subset of the real numbers, which can be represented by decimal numerals. The ·value space· of decimal is the set of numbers that can be obtained by dividing an integer by a non-negative power of ten, i.e., expressible as i / 10n where i and n are integers and n ≥ 0. Precision is not reflected in this value space; the number 2.0 is not distinct from the number 2.00. The order relation on decimal is the order relation on real numbers, restricted to this subset. */
	'decimal': 'http://www.w3.org/2001/XMLSchema#decimal',
	/** The double datatype is patterned after the IEEE double-precision 64-bit floating point datatype [IEEE 754-2008].  Each floating point datatype has a value space that is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'double': 'http://www.w3.org/2001/XMLSchema#double',
	/** duration is a datatype that represents durations of time.  The concept of duration being captured is drawn from those of [ISO 8601], specifically durations without fixed endpoints. */
	'duration': 'http://www.w3.org/2001/XMLSchema#duration',
	/** The float datatype is patterned after the IEEE single-precision 32-bit floating point datatype [IEEE 754-2008].  Its value space is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'float': 'http://www.w3.org/2001/XMLSchema#float',
	/** fractionDigits controls the size of the minimum difference between values in the value space of datatypes derived from decimal, by restricting the value space to numbers that are expressible as i x 10^-n where i and n are integers and 0 <= n <= fractionDigits. */
	'fractionDigits': 'http://www.w3.org/2001/XMLSchema#fractionDigits',
	'gDay': 'http://www.w3.org/2001/XMLSchema#gDay',
	'gMonth': 'http://www.w3.org/2001/XMLSchema#gMonth',
	'gMonthDay': 'http://www.w3.org/2001/XMLSchema#gMonthDay',
	'gYear': 'http://www.w3.org/2001/XMLSchema#gYear',
	'gYearMonth': 'http://www.w3.org/2001/XMLSchema#gYearMonth',
	/** Hex-encoded arbitrary binary data. */
	'hexBinary': 'http://www.w3.org/2001/XMLSchema#hexBinary',
	/** int is ·derived· from long by setting the value of ·maxInclusive· to be 2147483647 and ·minInclusive· to be -2147483648.  The ·base type· of int is long. */
	'int': 'http://www.w3.org/2001/XMLSchema#int',
	/** integer is ·derived· from decimal by fixing the value of ·fractionDigits· to be 0 and disallowing the trailing decimal point.  This results in the standard mathematical concept of the integer numbers.  The ·value space· of integer is the infinite set {...,-2,-1,0,1,2,...}.  The ·base type· of integer is decimal. */
	'integer': 'http://www.w3.org/2001/XMLSchema#integer',
	/** llanguage represents natural language identifiers as defined by by [RFC 3066] . The ·value space· of language is the set of all strings that are valid language identifiers as defined [RFC 3066] . The ·lexical space· of language is the set of all strings that conform to the pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})* . The ·base type· of language is token. */
	'language': 'http://www.w3.org/2001/XMLSchema#language',
	/** length is the number of units of length, where units of length varies depending on the type that is being derived from. */
	'length': 'http://www.w3.org/2001/XMLSchema#length',
	/** long is ·derived· from integer by setting the value of ·maxInclusive· to be 9223372036854775807 and ·minInclusive· to be -9223372036854775808. The ·base type· of long is integer. */
	'long': 'http://www.w3.org/2001/XMLSchema#long',
	/** maxExclusive is the exclusive upper bound of the value space for a datatype with the ordered property. The value of maxExclusive must be in the value space of the base type or be equal to {value} in {base type definition}. */
	'maxExclusive': 'http://www.w3.org/2001/XMLSchema#maxExclusive',
	/** maxInclusive is the inclusive upper bound of the value space for a datatype with the ordered property. The value of maxInclusive must be in the value space of the base type. */
	'maxInclusive': 'http://www.w3.org/2001/XMLSchema#maxInclusive',
	/** minLength is the minimum number of units of length, where units of length varies depending on the type that is being derived from. */
	'maxLength': 'http://www.w3.org/2001/XMLSchema#maxLength',
	/** minExclusive is the exclusive lower bound of the value space for a datatype with the ordered property. The value of minExclusive must be in the value space of the base type or be equal to {value} in {base type definition}. */
	'minExclusive': 'http://www.w3.org/2001/XMLSchema#minExclusive',
	/** minInclusive is the inclusive lower bound of the value space for a datatype with the ordered property. The value of minInclusive must be in the value space of the base type. */
	'minInclusive': 'http://www.w3.org/2001/XMLSchema#minInclusive',
	/** maxLength is the maximum number of units of length, where units of length varies depending on the type that is being derived from. */
	'minLength': 'http://www.w3.org/2001/XMLSchema#minLength',
	/** negativeInteger is ·derived· from nonPositiveInteger by setting the value of ·maxInclusive· to be -1.  This results in the standard mathematical concept of the negative integers.  The ·value space· of negativeInteger is the infinite set {...,-2,-1}.  The ·base type· of negativeInteger is nonPositiveInteger. */
	'negativeInteger': 'http://www.w3.org/2001/XMLSchema#negativeInteger',
	/** nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0. This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}. The ·base type· of nonNegativeInteger is integer. */
	'nonNegativeInteger': 'http://www.w3.org/2001/XMLSchema#nonNegativeInteger',
	/** nonPositiveInteger is ·derived· from integer by setting the value of ·maxInclusive· to be 0.  This results in the standard mathematical concept of the non-positive integers. The ·value space· of nonPositiveInteger is the infinite set {...,-2,-1,0}.  The ·base type· of nonPositiveInteger is integer. */
	'nonPositiveInteger': 'http://www.w3.org/2001/XMLSchema#nonPositiveInteger',
	/** The set of strings that do not contain the carriage return (#xD), line feed (#xA) nor tab (#x9) characters. */
	'normalizedString': 'http://www.w3.org/2001/XMLSchema#normalizedString',
	/** pattern is a constraint on the value space of a datatype which is achieved by constraining the lexical space to literals which match a specific pattern. The value of pattern must be a regular expression. */
	'pattern': 'http://www.w3.org/2001/XMLSchema#pattern',
	/** nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0.  This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}.  The ·base type· of nonNegativeInteger is integer. */
	'positiveInteger': 'http://www.w3.org/2001/XMLSchema#positiveInteger',
	/** short is ·derived· from int by setting the value of ·maxInclusive· to be 32767 and ·minInclusive· to be -32768.  The ·base type· of short is int. */
	'short': 'http://www.w3.org/2001/XMLSchema#short',
	/** The string datatype represents character strings in XML. */
	'string': 'http://www.w3.org/2001/XMLSchema#string',
	/** time represents instants of time that recur at the same point in each calendar day, or that occur in some arbitrary calendar day. */
	'time': 'http://www.w3.org/2001/XMLSchema#time',
	/** The set of strings that do not contain the carriage return (#xD), line feed (#xA) nor tab (#x9) characters, that have no leading or trailing spaces (#x20) and that have no internal sequences of two or more spaces. */
	'token': 'http://www.w3.org/2001/XMLSchema#token',
	/** totalDigits controls the maximum number of values in the value space of datatypes derived from decimal, by restricting it to numbers that are expressible as i x 10^-n where i and n are integers such that |i| < 10^totalDigits and 0 <= n <= totalDigits. */
	'totalDigits': 'http://www.w3.org/2001/XMLSchema#totalDigits',
	/** unsignedByte is ·derived· from unsignedShort by setting the value of ·maxInclusive· to be 255.  The ·base type· of unsignedByte is unsignedShort. */
	'unsignedByte': 'http://www.w3.org/2001/XMLSchema#unsignedByte',
	/** unsignedInt is ·derived· from unsignedLong by setting the value of ·maxInclusive· to be 4294967295.  The ·base type· of unsignedInt is unsignedLong. */
	'unsignedInt': 'http://www.w3.org/2001/XMLSchema#unsignedInt',
	/** unsignedLong is ·derived· from nonNegativeInteger by setting the value of ·maxInclusive· to be 18446744073709551615.  The ·base type· of unsignedLong is nonNegativeInteger. */
	'unsignedLong': 'http://www.w3.org/2001/XMLSchema#unsignedLong',
	/** unsignedShort is ·derived· from unsignedInt by setting the value of ·maxInclusive· to be 65535.  The ·base type· of unsignedShort is unsignedInt. */
	'unsignedShort': 'http://www.w3.org/2001/XMLSchema#unsignedShort',
	/** A string that describes whitespace normalization for a string type. */
	'whiteSpace': 'http://www.w3.org/2001/XMLSchema#whiteSpace',
}

/** Namespace URI of the xsd vocabulary. */
export const _xsd = { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#' } as NamedNode;

export const xsd = {
	/** ENTITY represents the ENTITY attribute type from [XML].  The ·value space· of ENTITY is the set of all strings that ·match· the NCName production in [Namespaces in XML] and have been declared as an unparsed entity in a document type definition. The ·lexical space· of ENTITY is the set of all strings that ·match· the NCName production in [Namespaces in XML]. The ·base type· of ENTITY is NCName.  */
	'ENTITY': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#ENTITY', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#ENTITY' } as NamedNode,
	/** ID represents the ID attribute type from [XML].  The ·value space· of ID is the set of all strings that ·match· the NCName production in [Namespaces in XML].  The ·lexical space· of ID is the set of all strings that ·match· the NCName production in [Namespaces in XML]. The ·base type· of ID is NCName. */
	'ID': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#ID', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#ID' } as NamedNode,
	/**  IDREF represents the IDREF attribute type from [XML]. The ·value space· of IDREF is the set of all strings that ·match· the NCName production in [Namespaces in XML].  The ·lexical space· of IDREF is the set of strings that ·match· the NCName production in [Namespaces in XML]. The ·base type· of IDREF is NCName. */
	'IDREF': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#IDREF', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#IDREF' } as NamedNode,
	'NCName': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#NCName', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#NCName' } as NamedNode,
	/** NMTOKEN represents the NMTOKEN attribute type from [XML]. The ·value space· of NMTOKEN is the set of tokens that ·match· the Nmtoken production in [XML]. The ·lexical space· of NMTOKEN is the set of strings that ·match· the Nmtoken production in [XML]. The ·base type· of NMTOKEN is token. */
	'NMTOKEN': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#NMTOKEN', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#NMTOKEN' } as NamedNode,
	'Name': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#Name', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#Name' } as NamedNode,
	/** QName represents XML qualified names. The ·value space· of QName is the set of tuples {namespace name, local part}, where namespace name is an anyURI and local part is an NCName. The ·lexical space· of QName is the set of strings that ·match· the QName production of [Namespaces in XML]. */
	'QName': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#QName', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#QName' } as NamedNode,
	/** The base class of any primitive XSD dataype. */
	'anySimpleType': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#anySimpleType', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#anySimpleType' } as NamedNode,
	/** anyURI represents an Internationalized Resource Identifier Reference (IRI). An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be an IRI Reference).  This type should be used when the value fulfills the role of an IRI, as defined in [RFC 3987] or its successor(s) in the IETF Standards Track. */
	'anyURI': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#anyURI', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#anyURI' } as NamedNode,
	/** base64Binary represents arbitrary Base64-encoded binary data. For base64Binary data the entire binary stream is encoded using the Base64 Encoding defined in [RFC 3548], which is derived from the encoding described in [RFC 2045]. */
	'base64Binary': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#base64Binary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#base64Binary' } as NamedNode,
	/** boolean represents the values of two-valued logic. */
	'boolean': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#boolean', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#boolean' } as NamedNode,
	/** byte is ·derived· from short by setting the value of ·maxInclusive· to be 127 and ·minInclusive· to be -128. The ·base type· of byte is short. */
	'byte': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#byte', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#byte' } as NamedNode,
	/** date represents top-open intervals of exactly one day in length on the timelines of dateTime, beginning on the beginning moment of each day, up to but not including the beginning moment of the next day).  For non-timezoned values, the top-open intervals disjointly cover the non-timezoned timeline, one per day.  For timezoned values, the intervals begin at every minute and therefore overlap. */
	'date': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#date', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#date' } as NamedNode,
	/** dateTime represents instants of time, optionally marked with a particular time zone offset.  Values representing the same instant but having different time zone offsets are equal but not identical. */
	'dateTime': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#dateTime', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#dateTime' } as NamedNode,
	/** The dateTimeStamp datatype is ·derived· from dateTime by giving the value required to its explicitTimezone facet. The result is that all values of dateTimeStamp are required to have explicit time zone offsets and the datatype is totally ordered. */
	'dateTimeStamp': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#dateTimeStamp', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#dateTimeStamp' } as NamedNode,
	/** decimal represents a subset of the real numbers, which can be represented by decimal numerals. The ·value space· of decimal is the set of numbers that can be obtained by dividing an integer by a non-negative power of ten, i.e., expressible as i / 10n where i and n are integers and n ≥ 0. Precision is not reflected in this value space; the number 2.0 is not distinct from the number 2.00. The order relation on decimal is the order relation on real numbers, restricted to this subset. */
	'decimal': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#decimal', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#decimal' } as NamedNode,
	/** The double datatype is patterned after the IEEE double-precision 64-bit floating point datatype [IEEE 754-2008].  Each floating point datatype has a value space that is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'double': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#double', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#double' } as NamedNode,
	/** duration is a datatype that represents durations of time.  The concept of duration being captured is drawn from those of [ISO 8601], specifically durations without fixed endpoints. */
	'duration': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#duration', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#duration' } as NamedNode,
	/** The float datatype is patterned after the IEEE single-precision 32-bit floating point datatype [IEEE 754-2008].  Its value space is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'float': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#float', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#float' } as NamedNode,
	/** fractionDigits controls the size of the minimum difference between values in the value space of datatypes derived from decimal, by restricting the value space to numbers that are expressible as i x 10^-n where i and n are integers and 0 <= n <= fractionDigits. */
	'fractionDigits': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#fractionDigits', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#fractionDigits' } as NamedNode,
	'gDay': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#gDay', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#gDay' } as NamedNode,
	'gMonth': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#gMonth', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#gMonth' } as NamedNode,
	'gMonthDay': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#gMonthDay', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#gMonthDay' } as NamedNode,
	'gYear': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#gYear', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#gYear' } as NamedNode,
	'gYearMonth': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#gYearMonth', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#gYearMonth' } as NamedNode,
	/** Hex-encoded arbitrary binary data. */
	'hexBinary': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#hexBinary', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#hexBinary' } as NamedNode,
	/** int is ·derived· from long by setting the value of ·maxInclusive· to be 2147483647 and ·minInclusive· to be -2147483648.  The ·base type· of int is long. */
	'int': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#int', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#int' } as NamedNode,
	/** integer is ·derived· from decimal by fixing the value of ·fractionDigits· to be 0 and disallowing the trailing decimal point.  This results in the standard mathematical concept of the integer numbers.  The ·value space· of integer is the infinite set {...,-2,-1,0,1,2,...}.  The ·base type· of integer is decimal. */
	'integer': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#integer', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#integer' } as NamedNode,
	/** llanguage represents natural language identifiers as defined by by [RFC 3066] . The ·value space· of language is the set of all strings that are valid language identifiers as defined [RFC 3066] . The ·lexical space· of language is the set of all strings that conform to the pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})* . The ·base type· of language is token. */
	'language': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#language', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#language' } as NamedNode,
	/** length is the number of units of length, where units of length varies depending on the type that is being derived from. */
	'length': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#length', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#length' } as NamedNode,
	/** long is ·derived· from integer by setting the value of ·maxInclusive· to be 9223372036854775807 and ·minInclusive· to be -9223372036854775808. The ·base type· of long is integer. */
	'long': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#long', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#long' } as NamedNode,
	/** maxExclusive is the exclusive upper bound of the value space for a datatype with the ordered property. The value of maxExclusive must be in the value space of the base type or be equal to {value} in {base type definition}. */
	'maxExclusive': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#maxExclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#maxExclusive' } as NamedNode,
	/** maxInclusive is the inclusive upper bound of the value space for a datatype with the ordered property. The value of maxInclusive must be in the value space of the base type. */
	'maxInclusive': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#maxInclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#maxInclusive' } as NamedNode,
	/** minLength is the minimum number of units of length, where units of length varies depending on the type that is being derived from. */
	'maxLength': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#maxLength', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#maxLength' } as NamedNode,
	/** minExclusive is the exclusive lower bound of the value space for a datatype with the ordered property. The value of minExclusive must be in the value space of the base type or be equal to {value} in {base type definition}. */
	'minExclusive': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#minExclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#minExclusive' } as NamedNode,
	/** minInclusive is the inclusive lower bound of the value space for a datatype with the ordered property. The value of minInclusive must be in the value space of the base type. */
	'minInclusive': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#minInclusive', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#minInclusive' } as NamedNode,
	/** maxLength is the maximum number of units of length, where units of length varies depending on the type that is being derived from. */
	'minLength': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#minLength', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#minLength' } as NamedNode,
	/** negativeInteger is ·derived· from nonPositiveInteger by setting the value of ·maxInclusive· to be -1.  This results in the standard mathematical concept of the negative integers.  The ·value space· of negativeInteger is the infinite set {...,-2,-1}.  The ·base type· of negativeInteger is nonPositiveInteger. */
	'negativeInteger': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#negativeInteger', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#negativeInteger' } as NamedNode,
	/** nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0. This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}. The ·base type· of nonNegativeInteger is integer. */
	'nonNegativeInteger': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#nonNegativeInteger', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#nonNegativeInteger' } as NamedNode,
	/** nonPositiveInteger is ·derived· from integer by setting the value of ·maxInclusive· to be 0.  This results in the standard mathematical concept of the non-positive integers. The ·value space· of nonPositiveInteger is the infinite set {...,-2,-1,0}.  The ·base type· of nonPositiveInteger is integer. */
	'nonPositiveInteger': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#nonPositiveInteger', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#nonPositiveInteger' } as NamedNode,
	/** The set of strings that do not contain the carriage return (#xD), line feed (#xA) nor tab (#x9) characters. */
	'normalizedString': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#normalizedString', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#normalizedString' } as NamedNode,
	/** pattern is a constraint on the value space of a datatype which is achieved by constraining the lexical space to literals which match a specific pattern. The value of pattern must be a regular expression. */
	'pattern': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#pattern', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#pattern' } as NamedNode,
	/** nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0.  This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}.  The ·base type· of nonNegativeInteger is integer. */
	'positiveInteger': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#positiveInteger', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#positiveInteger' } as NamedNode,
	/** short is ·derived· from int by setting the value of ·maxInclusive· to be 32767 and ·minInclusive· to be -32768.  The ·base type· of short is int. */
	'short': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#short', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#short' } as NamedNode,
	/** The string datatype represents character strings in XML. */
	'string': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#string', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#string' } as NamedNode,
	/** time represents instants of time that recur at the same point in each calendar day, or that occur in some arbitrary calendar day. */
	'time': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#time', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#time' } as NamedNode,
	/** The set of strings that do not contain the carriage return (#xD), line feed (#xA) nor tab (#x9) characters, that have no leading or trailing spaces (#x20) and that have no internal sequences of two or more spaces. */
	'token': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#token', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#token' } as NamedNode,
	/** totalDigits controls the maximum number of values in the value space of datatypes derived from decimal, by restricting it to numbers that are expressible as i x 10^-n where i and n are integers such that |i| < 10^totalDigits and 0 <= n <= totalDigits. */
	'totalDigits': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#totalDigits', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#totalDigits' } as NamedNode,
	/** unsignedByte is ·derived· from unsignedShort by setting the value of ·maxInclusive· to be 255.  The ·base type· of unsignedByte is unsignedShort. */
	'unsignedByte': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#unsignedByte', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#unsignedByte' } as NamedNode,
	/** unsignedInt is ·derived· from unsignedLong by setting the value of ·maxInclusive· to be 4294967295.  The ·base type· of unsignedInt is unsignedLong. */
	'unsignedInt': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#unsignedInt', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#unsignedInt' } as NamedNode,
	/** unsignedLong is ·derived· from nonNegativeInteger by setting the value of ·maxInclusive· to be 18446744073709551615.  The ·base type· of unsignedLong is nonNegativeInteger. */
	'unsignedLong': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#unsignedLong', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#unsignedLong' } as NamedNode,
	/** unsignedShort is ·derived· from unsignedInt by setting the value of ·maxInclusive· to be 65535.  The ·base type· of unsignedShort is unsignedInt. */
	'unsignedShort': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#unsignedShort', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#unsignedShort' } as NamedNode,
	/** A string that describes whitespace normalization for a string type. */
	'whiteSpace': { termType: 'NamedNode', value: 'http://www.w3.org/2001/XMLSchema#whiteSpace', equals: (other: any) => other && (other.termType === 'NamedNode' || other.type === 'NamedNode') && other.value === 'http://www.w3.org/2001/XMLSchema#whiteSpace' } as NamedNode,
}