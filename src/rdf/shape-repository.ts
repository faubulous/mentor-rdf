import * as n3 from "n3";
import { rdf, rdfs, sh, SH } from "../ontologies";
import { Store } from "./store";
import { DefinitionQueryOptions, TypedInstanceQueryOptions } from "./resource-repository";
import { IndividualRepository } from "./individual-repository";
import { Quad_Subject } from "@rdfjs/types";

const { namedNode } = n3.DataFactory;

/**
 * A repository for retrieving SHACL shapes from graphs.
 */
export class ShapeRepository extends IndividualRepository {
    constructor(store: Store) { super(store); }

    /**
     * Get all shapes in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shapes in the repository.
     */
    getShapes(graphUris: string | string[] | undefined, subjectUri?: string, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        if (!subjectUri) {
            for (let q of this.store.match(graphUris, null, rdf.type, sh.Shape, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }
        } else {
            const s = namedNode(subjectUri);

            for (let q of this.store.match(graphUris, s, rdf.type, sh.Shape, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            for (let q of this.store.match(graphUris, null, sh.targetClass, s, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }

            for (let q of this.store.match(graphUris, null, sh.path, s, options?.includeInferred)) {
                if (!this.skip(graphUris, q.subject, options)) {
                    result.add(q.subject.value);
                }
            }
        }

        return Array.from(result);
    }

    /**
     * Get all shape types in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shape types in the repository.
     */
    getShapeTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        for (let q of this.store.match(graphUris, null, rdf.type, sh.NodeShape)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                result.add(SH.NodeShape);
                break;
            }
        }

        for (let q of this.store.match(graphUris, null, rdf.type, sh.PropertyShape)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                result.add(SH.PropertyShape);
                break;
            }
        }

        return Array.from(result);
    }

    /**
     * Get all validator types in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all shape types in the repository.
     */
    getValidatorTypes(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        // Get all validators in the repository, including the inferred ones.
        if (this.store.has(graphUris, null, rdf.type, sh.Validator, options?.includeInferred)) {
            result.add(SH.Validator);
        }

        if (this.store.has(graphUris, null, rdf.type, sh.JSValidator, false)) {
            result.add(SH.JSValidator);
        }

        if (this.store.has(graphUris, null, rdf.type, sh.SPARQLAskValidator, false)) {
            result.add(SH.SPARQLAskValidator);
        }

        if (this.store.has(graphUris, null, rdf.type, sh.SPARQLSelectValidator, false)) {
            result.add(SH.SPARQLSelectValidator);
        }

        return Array.from(result);
    }

    /**
     * Get all target classes, nodes or properties of a given shape in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param shape The URI or blank id of the shape.
     * @param options Optional query parameters.
     * @returns A list of all targeted reesources in the repository.
     */
    getShapeTargets(graphUris: string | string[] | undefined, shape: Quad_Subject, options?: DefinitionQueryOptions): string[] {
        const result = new Set<string>();

        // Add the shape definition itself if it is a class.
        for (let q of this.store.match(graphUris, shape, rdf.type, rdfs.Class, true)) {
            result.add(q.subject.value);
        }

        for (let q of this.store.match(graphUris, shape, sh.targetClass, null, options?.includeInferred)) {
            result.add(q.object.value);
        }

        for (let q of this.store.match(graphUris, shape, sh.targetNode, null, options?.includeInferred)) {
            result.add(q.object.value);
        }

        for (let q of this.store.match(graphUris, shape, sh.path, null, options?.includeInferred)) {
            result.add(q.object.value);
        }

        return Array.from(result);
    }

    /**
     * Indicate if there are shapes for a subject in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns `true` if there are shapes for the subject, `false` otherwise.
     */
    hasShapes(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): boolean {
        const s = namedNode(subjectUri);

        for (let q of this.store.match(graphUris, s, rdf.type, sh.Shape)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                return true;
            }
        }

        for (let q of this.store.match(graphUris, null, sh.targetClass, s)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                return true;
            }
        }

        for (let q of this.store.match(graphUris, null, sh.path, s)) {
            if (!this.skip(graphUris, q.subject, options, { includeBlankNodes: true })) {
                return true;
            }
        }

        return false;
    }

    /**
     * Indicate if there validators defined in the vocabulary.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all validators in the repository.
     */
    hasValidators(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): boolean {
        return this.hasSubjectsOfType(graphUris, SH.Validator, options);
    }

    /**
     * Get all validators in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all validators in the repository.
     */
    getValidators(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): string[] {
        return this.getSubjectsOfType(graphUris, SH.Validator, options);
    }

    /**
     * Indicate if there are rules in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns `true` if there are rules for the subject, `false` otherwise.
     */
    hasRules(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): boolean {
        return this.hasSubjectsOfType(graphUris, SH.Rule, options);
    }

    /**
     * Get all rules in the repository.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param options Optional query parameters.
     * @returns A list of all rules in the repository.
     */
    getRules(graphUris: string | string[] | undefined, options?: DefinitionQueryOptions & TypedInstanceQueryOptions): string[] {
        return this.getSubjectsOfType(graphUris, SH.Rule, options);
    }

    /**
     * Get the SHACL datatype of a given property.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns A datatype URI on success, `xsd:anyURI` otherwise.
     */
    getDatatype(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): string | undefined {
        for (let q of this.store.match(graphUris, null, sh.path, namedNode(subjectUri), options?.includeInferred)) {
            for (let x of this.store.match(graphUris, q.subject, sh.datatype, null, options?.includeInferred)) {
                return x.object.value;
            }
        }
    }

    /**
     * Get the SHACL cardinality constraints of a given property.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subjectUri The URI of the subject.
     * @param options Optional query parameters.
     * @returns An object with the minimum and maximum cardinalities; values are `-1` if not found.
     */
    getCardinalites(graphUris: string | string[] | undefined, subjectUri: string, options?: DefinitionQueryOptions): { minCount: number, maxCount: number } {
        let minCount = -1;
        let maxCount = -1;

        for (let q of this.store.match(graphUris, null, sh.path, namedNode(subjectUri), options?.includeInferred)) {
            for (let x of this.store.match(graphUris, q.subject, sh.minCount, null, options?.includeInferred)) {
                minCount = parseInt(x.object.value);
                break;
            }

            for (let x of this.store.match(graphUris, q.subject, sh.maxCount, null, options?.includeInferred)) {
                maxCount = parseInt(x.object.value);
                break;
            }
        }

        return { minCount, maxCount };
    }

    /**
     * Get the RDF property path representation of the given SHACL property path. This method parses the SHACL property path and 
     * returns the RDF property path as a combination of nodes and strings.
     * @param graphUris URIs of the graphs to search, `undefined` for the default graph.
     * @param subject The URI or blank id of the node referred to by sh:path.
     * @param options Optional query parameters.
     * @returns A flattened list of all path components, either as URIs or as strings.
     */
    getPropertyPathTokens(graphUris: string | string[] | undefined, subject: Quad_Subject) {
        const visitedNodes = new Set<string>();

        /**
         * Parse the given subject node and return the path components.
         * @param subject The currently parsed focus node.
         * @param level The nesting level of the current path.
         * @param separator The separator to use to separate path components.
         * @param i The index of the current node in a list.
         * @returns The sub path of the current node.
         */
        const parse = (subject: Quad_Subject, level: number, separator: string = '/', i: number = 0): Array<Quad_Subject | string> => {
            if (visitedNodes.has(subject.value)) {
                return [];
            }

            visitedNodes.add(subject.value);

            if (subject.termType === 'NamedNode') {
                // If we have a terminal node, we add it to the path.
                return [subject];
            } else {
                // Determine if we are looking at an item in a collection.
                const first = this.store.match(graphUris, subject, rdf.first, null, false).next().value;

                if (first) {
                    // Note: We increase the nesting level as nested nodes in paths need to be wrapped in parentheses.
                    const path = parse(first.object as Quad_Subject, level + 1);

                    const rest = this.store.match(graphUris, subject, rdf.rest, null, false).next().value;

                    if (rest && rest.object.value !== rdf.nil.id) {
                        // The first item of the list sees the complete recursively parsed sub path.
                        const tail = parse(rest.object as Quad_Subject, level, separator, i + 1);

                        // If there is no tail we return the current item's path.
                        if (tail.length === 0) {
                            return path;
                        }

                        // For nested paths, we wrap the path in parentheses if it contains more than one item.
                        if (i === 0 && level > 0) {
                            return ['(', ...path, separator, ...tail, ')']
                        } else {
                            return [...path, separator, ...tail];
                        }
                    }

                    return path;
                } else {
                    // Blank nodes that are not lists contain SHACL path predicates.
                    for (let q of this.store.match(graphUris, subject, null, null, false)) {
                        switch (q.predicate.value) {
                            case sh.inversePath.id: {
                                return ['^', ...parse(q.object as Quad_Subject, level)];
                            }
                            case sh.zeroOrOnePath.id: {
                                return [...parse(q.object as Quad_Subject, level), '?'];
                            }
                            case sh.zeroOrMorePath.id: {
                                return [...parse(q.object as Quad_Subject, level), '*'];
                            }
                            case sh.oneOrMorePath.id: {
                                return [...parse(q.object as Quad_Subject, level), '+'];
                            }
                            case sh.alternativePath.id: {
                                return parse(q.object as Quad_Subject, level, '|');
                            }
                            default:
                                throw new Error(`Unsupported path predicate: ${q.predicate.value}`);
                        }
                    }

                    throw new Error(`Unsupported path subject: ${subject}`);
                }
            }
        }

        return parse(subject, 0);
    }
}