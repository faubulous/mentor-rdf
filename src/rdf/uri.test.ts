import { Uri } from "./uri";

describe("Uri", () => {
	it('can get namespace URIs', async () => {
		const u0 = null;

		expect(u0).toBe(null);

		const u1 = undefined;

		expect(u1).toBe(undefined);

		const u3 = Uri.getNamespaceUri("http://www.w3.org/2000/01/rdf-schema#Class");

		expect(u3).toBe('http://www.w3.org/2000/01/rdf-schema#');

		const u4 = Uri.getNamespaceUri("https://schema.org/Thing");

		expect(u4).toBe('https://schema.org/');

		const u5 = Uri.getNamespaceUri("https://schema.org/Thing?foo=bar");

		expect(u5).toBe('https://schema.org/');

		const u6 = Uri.getNamespaceUri("https://schema.org");

		expect(u6).toBe('https://schema.org/');
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