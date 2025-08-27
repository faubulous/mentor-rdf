import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

/** Namespace URI of the XSD vocabulary. */
export const _XSD = 'http://www.w3.org/2001/XMLSchema#';

export const XSD = {
	/** anyURI represents an Internationalized Resource Identifier Reference (IRI).  An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be an IRI Reference).  This type should be used when the value fulfills the role of an IRI, as defined in [RFC 3987] or its successor(s) in the IETF Standards Track. */
	'anyURI': 'http://www.w3.org/2001/XMLSchema#anyURI',
	/** base64Binary represents arbitrary Base64-encoded binary data.  For base64Binary data the entire binary stream is encoded using the Base64 Encoding defined in [RFC 3548], which is derived from the encoding described in [RFC 2045]. */
	'base64Binary': 'http://www.w3.org/2001/XMLSchema#base64Binary',
	/** boolean represents the values of two-valued logic. */
	'boolean': 'http://www.w3.org/2001/XMLSchema#boolean',
	/** byte is ·derived· from short by setting the value of ·maxInclusive· to be 127 and ·minInclusive· to be -128. The ·base type· of byte is short. */
	'byte': 'http://www.w3.org/2001/XMLSchema#byte',
	/** date represents top-open intervals of exactly one day in length on the timelines of dateTime, beginning on the beginning moment of each day, up to but not including the beginning moment of the next day).  For non-timezoned values, the top-open intervals disjointly cover the non-timezoned timeline, one per day.  For timezoned values, the intervals begin at every minute and therefore overlap. */
	'date': 'http://www.w3.org/2001/XMLSchema#date',
	/** dateTime represents instants of time, optionally marked with a particular time zone offset.  Values representing the same instant but having different time zone offsets are equal but not identical. */
	'dateTime': 'http://www.w3.org/2001/XMLSchema#dateTime',
	/** decimal represents a subset of the real numbers, which can be represented by decimal numerals. The ·value space· of decimal is the set of numbers that can be obtained by dividing an integer by a non-negative power of ten, i.e., expressible as i / 10n where i and n are integers and n ≥ 0. Precision is not reflected in this value space; the number 2.0 is not distinct from the number 2.00. The order relation on decimal is the order relation on real numbers, restricted to this subset. */
	'decimal': 'http://www.w3.org/2001/XMLSchema#decimal',
	/** The double datatype is patterned after the IEEE double-precision 64-bit floating point datatype [IEEE 754-2008].  Each floating point datatype has a value space that is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'double': 'http://www.w3.org/2001/XMLSchema#double',
	/** duration is a datatype that represents durations of time.  The concept of duration being captured is drawn from those of [ISO 8601], specifically durations without fixed endpoints. */
	'duration': 'http://www.w3.org/2001/XMLSchema#duration',
	/** The float datatype is patterned after the IEEE single-precision 32-bit floating point datatype [IEEE 754-2008].  Its value space is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'float': 'http://www.w3.org/2001/XMLSchema#float',
	/** int is ·derived· from long by setting the value of ·maxInclusive· to be 2147483647 and ·minInclusive· to be -2147483648.  The ·base type· of int is long. */
	'int': 'http://www.w3.org/2001/XMLSchema#int',
	/** integer is ·derived· from decimal by fixing the value of ·fractionDigits· to be 0 and disallowing the trailing decimal point.  This results in the standard mathematical concept of the integer numbers.  The ·value space· of integer is the infinite set {...,-2,-1,0,1,2,...}.  The ·base type· of integer is decimal. */
	'integer': 'http://www.w3.org/2001/XMLSchema#integer',
	/** long is ·derived· from integer by setting the value of ·maxInclusive· to be 9223372036854775807 and ·minInclusive· to be -9223372036854775808. The ·base type· of long is integer. */
	'long': 'http://www.w3.org/2001/XMLSchema#long',
	/** negativeInteger is ·derived· from nonPositiveInteger by setting the value of ·maxInclusive· to be -1.  This results in the standard mathematical concept of the negative integers.  The ·value space· of negativeInteger is the infinite set {...,-2,-1}.  The ·base type· of negativeInteger is nonPositiveInteger. */
	'negativeInteger': 'http://www.w3.org/2001/XMLSchema#negativeInteger',
	'nonNegativeInteger': 'http://www.w3.org/2001/XMLSchema#nonNegativeInteger',
	/** nonPositiveInteger is ·derived· from integer by setting the value of ·maxInclusive· to be 0.  This results in the standard mathematical concept of the non-positive integers. The ·value space· of nonPositiveInteger is the infinite set {...,-2,-1,0}.  The ·base type· of nonPositiveInteger is integer. */
	'nonPositiveInteger': 'http://www.w3.org/2001/XMLSchema#nonPositiveInteger',
	/** nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0.  This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}.  The ·base type· of nonNegativeInteger is integer. */
	'positiveInteger': 'http://www.w3.org/2001/XMLSchema#positiveInteger',
	/** short is ·derived· from int by setting the value of ·maxInclusive· to be 32767 and ·minInclusive· to be -32768.  The ·base type· of short is int. */
	'short': 'http://www.w3.org/2001/XMLSchema#short',
	/** The string datatype represents character strings in XML. */
	'string': 'http://www.w3.org/2001/XMLSchema#string',
	/** time represents instants of time that recur at the same point in each calendar day, or that occur in some arbitrary calendar day. */
	'time': 'http://www.w3.org/2001/XMLSchema#time',
	/** unsignedInt is ·derived· from unsignedLong by setting the value of ·maxInclusive· to be 4294967295.  The ·base type· of unsignedInt is unsignedLong. */
	'unsignedInt': 'http://www.w3.org/2001/XMLSchema#unsignedInt',
	/** unsignedShort is ·derived· from unsignedInt by setting the value of ·maxInclusive· to be 65535.  The ·base type· of unsignedShort is unsignedInt. */
	'unsignedShort': 'http://www.w3.org/2001/XMLSchema#unsignedShort',
	/** unsignedLong is ·derived· from nonNegativeInteger by setting the value of ·maxInclusive· to be 18446744073709551615.  The ·base type· of unsignedLong is nonNegativeInteger. */
	'unsingedLong': 'http://www.w3.org/2001/XMLSchema#unsingedLong',
	/** unsignedByte is ·derived· from unsignedShort by setting the value of ·maxInclusive· to be 255.  The ·base type· of unsignedByte is unsignedShort. */
	'usignedByte': 'http://www.w3.org/2001/XMLSchema#usignedByte',
}

/** Namespace URI of the xsd vocabulary. */
export const _xsd = namedNode('http://www.w3.org/2001/XMLSchema#');

export const xsd = {
	/** anyURI represents an Internationalized Resource Identifier Reference (IRI).  An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be an IRI Reference).  This type should be used when the value fulfills the role of an IRI, as defined in [RFC 3987] or its successor(s) in the IETF Standards Track. */
	'anyURI': namedNode('http://www.w3.org/2001/XMLSchema#anyURI'),
	/** base64Binary represents arbitrary Base64-encoded binary data.  For base64Binary data the entire binary stream is encoded using the Base64 Encoding defined in [RFC 3548], which is derived from the encoding described in [RFC 2045]. */
	'base64Binary': namedNode('http://www.w3.org/2001/XMLSchema#base64Binary'),
	/** boolean represents the values of two-valued logic. */
	'boolean': namedNode('http://www.w3.org/2001/XMLSchema#boolean'),
	/** byte is ·derived· from short by setting the value of ·maxInclusive· to be 127 and ·minInclusive· to be -128. The ·base type· of byte is short. */
	'byte': namedNode('http://www.w3.org/2001/XMLSchema#byte'),
	/** date represents top-open intervals of exactly one day in length on the timelines of dateTime, beginning on the beginning moment of each day, up to but not including the beginning moment of the next day).  For non-timezoned values, the top-open intervals disjointly cover the non-timezoned timeline, one per day.  For timezoned values, the intervals begin at every minute and therefore overlap. */
	'date': namedNode('http://www.w3.org/2001/XMLSchema#date'),
	/** dateTime represents instants of time, optionally marked with a particular time zone offset.  Values representing the same instant but having different time zone offsets are equal but not identical. */
	'dateTime': namedNode('http://www.w3.org/2001/XMLSchema#dateTime'),
	/** decimal represents a subset of the real numbers, which can be represented by decimal numerals. The ·value space· of decimal is the set of numbers that can be obtained by dividing an integer by a non-negative power of ten, i.e., expressible as i / 10n where i and n are integers and n ≥ 0. Precision is not reflected in this value space; the number 2.0 is not distinct from the number 2.00. The order relation on decimal is the order relation on real numbers, restricted to this subset. */
	'decimal': namedNode('http://www.w3.org/2001/XMLSchema#decimal'),
	/** The double datatype is patterned after the IEEE double-precision 64-bit floating point datatype [IEEE 754-2008].  Each floating point datatype has a value space that is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'double': namedNode('http://www.w3.org/2001/XMLSchema#double'),
	/** duration is a datatype that represents durations of time.  The concept of duration being captured is drawn from those of [ISO 8601], specifically durations without fixed endpoints. */
	'duration': namedNode('http://www.w3.org/2001/XMLSchema#duration'),
	/** The float datatype is patterned after the IEEE single-precision 32-bit floating point datatype [IEEE 754-2008].  Its value space is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers. */
	'float': namedNode('http://www.w3.org/2001/XMLSchema#float'),
	/** int is ·derived· from long by setting the value of ·maxInclusive· to be 2147483647 and ·minInclusive· to be -2147483648.  The ·base type· of int is long. */
	'int': namedNode('http://www.w3.org/2001/XMLSchema#int'),
	/** integer is ·derived· from decimal by fixing the value of ·fractionDigits· to be 0 and disallowing the trailing decimal point.  This results in the standard mathematical concept of the integer numbers.  The ·value space· of integer is the infinite set {...,-2,-1,0,1,2,...}.  The ·base type· of integer is decimal. */
	'integer': namedNode('http://www.w3.org/2001/XMLSchema#integer'),
	/** long is ·derived· from integer by setting the value of ·maxInclusive· to be 9223372036854775807 and ·minInclusive· to be -9223372036854775808. The ·base type· of long is integer. */
	'long': namedNode('http://www.w3.org/2001/XMLSchema#long'),
	/** negativeInteger is ·derived· from nonPositiveInteger by setting the value of ·maxInclusive· to be -1.  This results in the standard mathematical concept of the negative integers.  The ·value space· of negativeInteger is the infinite set {...,-2,-1}.  The ·base type· of negativeInteger is nonPositiveInteger. */
	'negativeInteger': namedNode('http://www.w3.org/2001/XMLSchema#negativeInteger'),
	'nonNegativeInteger': namedNode('http://www.w3.org/2001/XMLSchema#nonNegativeInteger'),
	/** nonPositiveInteger is ·derived· from integer by setting the value of ·maxInclusive· to be 0.  This results in the standard mathematical concept of the non-positive integers. The ·value space· of nonPositiveInteger is the infinite set {...,-2,-1,0}.  The ·base type· of nonPositiveInteger is integer. */
	'nonPositiveInteger': namedNode('http://www.w3.org/2001/XMLSchema#nonPositiveInteger'),
	/** nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0.  This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}.  The ·base type· of nonNegativeInteger is integer. */
	'positiveInteger': namedNode('http://www.w3.org/2001/XMLSchema#positiveInteger'),
	/** short is ·derived· from int by setting the value of ·maxInclusive· to be 32767 and ·minInclusive· to be -32768.  The ·base type· of short is int. */
	'short': namedNode('http://www.w3.org/2001/XMLSchema#short'),
	/** The string datatype represents character strings in XML. */
	'string': namedNode('http://www.w3.org/2001/XMLSchema#string'),
	/** time represents instants of time that recur at the same point in each calendar day, or that occur in some arbitrary calendar day. */
	'time': namedNode('http://www.w3.org/2001/XMLSchema#time'),
	/** unsignedInt is ·derived· from unsignedLong by setting the value of ·maxInclusive· to be 4294967295.  The ·base type· of unsignedInt is unsignedLong. */
	'unsignedInt': namedNode('http://www.w3.org/2001/XMLSchema#unsignedInt'),
	/** unsignedShort is ·derived· from unsignedInt by setting the value of ·maxInclusive· to be 65535.  The ·base type· of unsignedShort is unsignedInt. */
	'unsignedShort': namedNode('http://www.w3.org/2001/XMLSchema#unsignedShort'),
	/** unsignedLong is ·derived· from nonNegativeInteger by setting the value of ·maxInclusive· to be 18446744073709551615.  The ·base type· of unsignedLong is nonNegativeInteger. */
	'unsingedLong': namedNode('http://www.w3.org/2001/XMLSchema#unsingedLong'),
	/** unsignedByte is ·derived· from unsignedShort by setting the value of ·maxInclusive· to be 255.  The ·base type· of unsignedByte is unsignedShort. */
	'usignedByte': namedNode('http://www.w3.org/2001/XMLSchema#usignedByte'),
}