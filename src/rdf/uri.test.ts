import { Uri } from "./uri";

describe("Uri", () => {
	it('can get label fragments from URIs', async () => {
		const u0 = Uri.getLocalPart("http://www.w3.org/2000/01/rdf-schema#Class");

		expect(u0).toBe('Class');

		const u1 = Uri.getLocalPart("https://schema.org/Thing");

		expect(u1).toBe('Thing');

		const u2 = Uri.getLocalPart("https://schema.org/Thing?q=foo");

		expect(u2).toBe('Thing');

		const u3 = Uri.getLocalPart("http://www.w3.org/2000/01/rdf-schema#Class/Test");

		expect(u3).toBe('Class/Test');

		const u4 = Uri.getLocalPart("http://");

		expect(u4).toBeUndefined();

		const u5 = Uri.getLocalPart("https://");

		expect(u5).toBeUndefined();

		const u6 = Uri.getLocalPart("https://example.org");

		expect(u6).toBeUndefined();
	});

	it('can get namespace URIs', async () => {
		const u0 = null;

		expect(u0).toBe(null);

		const u1 = undefined;

		expect(u1).toBe(undefined);

		const u2 = Uri.getNamespaceIri("http://www.w3.org/2000/01/rdf-schema#");

		expect(u2).toBe('http://www.w3.org/2000/01/rdf-schema#');

		const u3 = Uri.getNamespaceIri("http://www.w3.org/2000/01/rdf-schema#Class");

		expect(u3).toBe('http://www.w3.org/2000/01/rdf-schema#');

		const u4 = Uri.getNamespaceIri("https://schema.org/Thing");

		expect(u4).toBe('https://schema.org/');

		const u5 = Uri.getNamespaceIri("https://schema.org/");

		expect(u5).toBe('https://schema.org/');

		const u6 = Uri.getNamespaceIri("https://schema.org/Thing?foo=bar");

		expect(u6).toBe('https://schema.org/');

		const u7 = Uri.getNamespaceIri("https://schema.org");

		expect(u7).toBe('https://schema.org/');
	});

	it('can generate JSON ids', async () => {
		const u0 = null;

		expect(u0).toBe(null);

		const u1 = undefined;

		expect(u1).toBe(undefined);

		const u2 = Uri.toJsonId("http://www.w3.org/2000/01/rdf-schema#");

		expect(u2).toBe('www.w3.org.2000.01.rdf.schema');

		const u3 = Uri.toJsonId("https://schema.org/");

		expect(u3).toBe('schema.org');

		const u4 = Uri.toJsonId("https://schema.org");

		expect(u4).toBe('schema.org');

		const u5 = Uri.toJsonId("https://schema.org/Thing?foo=bar");

		expect(u5).toBe('schema.org.Thing.foo.bar');

		const u6 = Uri.toJsonId("https");

		expect(u6).toBeUndefined();
	});

	it('can normalize URIs', async () => {
		const u0 = null;

		expect(u0).toBe(null);

		const u1 = undefined;

		expect(u1).toBe(undefined);

		const u2 = Uri.getNormalizedUri("http://www.w3.org/2000/01/rdf-schema#");

		expect(u2).toBe('http://www.w3.org/2000/01/rdf-schema');

		const u3 = Uri.getNormalizedUri("https://schema.org/");

		expect(u3).toBe('https://schema.org');

		const u4 = Uri.getNormalizedUri("https://schema.org");

		expect(u4).toBe('https://schema.org');

		const u5 = Uri.getNormalizedUri("https://schema.org/Thing?foo=bar");

		expect(u5).toBe('https://schema.org/Thing');

		const u6 = Uri.getNormalizedUri("https://schema.org/?foo=bar");

		expect(u6).toBe('https://schema.org');
	});
});