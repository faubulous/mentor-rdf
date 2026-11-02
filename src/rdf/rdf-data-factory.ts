import { DataFactory } from 'rdf-data-factory';

/**
 * The RDF/JS data factory mentor-rdf creates its terms with. It is the factory of
 * `rdf-data-factory`, which the store (rdf-stores), the Mentor parsers and serializers use as
 * well, so the terms of mentor-rdf compare equal to those of the store.
 */
export const RdfDataFactory = new DataFactory();
