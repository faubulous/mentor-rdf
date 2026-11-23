import { DCAT, _DCAT, SCHEMA, _SCHEMA, schema } from './index';

describe('Vocabulary constants', () => {
	it('names the terms of schema.org by their local names in its namespace', () => {
		expect(_SCHEMA).toBe('https://schema.org/');
		expect(SCHEMA.rangeIncludes).toBe('https://schema.org/rangeIncludes');
		expect(SCHEMA.Date).toBe('https://schema.org/Date');
		expect(schema.Text.value).toBe('https://schema.org/Text');
	});

	it('holds only the terms of a vocabulary, not those of other vocabularies its file describes', () => {
		expect(Object.values(SCHEMA).every(iri => iri.startsWith(_SCHEMA))).toBe(true);
		expect(Object.values(DCAT).every(iri => iri.startsWith(_DCAT) || iri === _DCAT.replace(/[#/]$/, ''))).toBe(true);
	});
});
