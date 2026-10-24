import * as rdfjs from "@rdfjs/types";
import { owl, rdf, rdfs, skos, sh } from "../../ontologies";
import { SkosReasoner } from "./skos-reasoner";
import { GraphUriGenerator, DefaultInferenceGraphHandler } from "./reasoner";
import { dataFactory } from "../data-factory";

const { quad } = dataFactory;

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner extends SkosReasoner {
    protected ontologies: Set<string> = new Set();

    protected classes: Set<string> = new Set();

    protected properties: Set<string> = new Set();

    protected individuals: Set<rdfjs.Quad_Subject> = new Set();

    /**
     * The super properties of each property, as asserted with `rdfs:subPropertyOf`.
     */
    private readonly _superProperties: Map<string, { property: rdfjs.Quad_Subject, superProperties: Set<string> }> = new Map();

    /**
     * The ranges asserted for each property.
     */
    private readonly _ranges: Map<string, rdfjs.Quad_Object[]> = new Map();

    /**
     * The domains asserted for each property.
     */
    private readonly _domains: Map<string, rdfjs.Quad_Object[]> = new Map();

    constructor(targetUriGenerator: GraphUriGenerator = new DefaultInferenceGraphHandler()) {
        super(targetUriGenerator);
    }

    protected isIgnoredNode(term: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        switch (term.value) {
            case skos.Concept.value:
            case skos.ConceptScheme.value:
            case skos.Collection.value:
            case skos.OrderedCollection.value:
            case sh.Shape.value:
            case sh.NodeShape.value:
            case sh.PropertyShape.value:
                return true;
            default:
                return false;
        }
    }

    protected isClass(id: string): boolean {
        return super.isClass(id) ||
            this.classes.has(id) ||
            this.properties.has(id) ||
            this.ontologies.has(id);
    }

    protected afterInference() {
        super.afterInference();

        // After all axioms have been inferred, add the inferred individuals to the graph.
        const individuals = [...this.individuals].filter(x => !this.isClass(x.value));

        for (let individual of individuals) {
            this.store.add(quad(individual, rdf.type, owl.NamedIndividual, this.targetGraph));
        }

        this._inferInheritedRangesAndDomains();
    }

    /**
     * Infers the ranges and domains that properties inherit from their super properties
     * (OWL 2 RL rules scm-rng2 and scm-dom2), following `rdfs:subPropertyOf` chains.
     */
    private _inferInheritedRangesAndDomains() {
        for (const { property, superProperties } of this._superProperties.values()) {
            for (const superProperty of this._getAncestorProperties(property.value, superProperties)) {
                for (const range of this._ranges.get(superProperty) ?? []) {
                    this.store.add(quad(property, rdfs.range, range, this.targetGraph));
                }

                for (const domain of this._domains.get(superProperty) ?? []) {
                    this.store.add(quad(property, rdfs.domain, domain, this.targetGraph));
                }
            }
        }
    }

    /**
     * Gets the transitive super properties of a property, nearest first. Cycles in the
     * property hierarchy are followed only once.
     * @param property The IRI or blank node id of a property.
     * @param superProperties The direct super properties of the property.
     * @returns The IRIs of all super properties, excluding the property itself.
     */
    private _getAncestorProperties(property: string, superProperties: Set<string>): string[] {
        const result: string[] = [];
        const visited = new Set<string>([property]);
        const queue = [...superProperties];

        while (queue.length > 0) {
            const current = queue.shift()!;

            if (visited.has(current)) {
                continue;
            }

            visited.add(current);
            result.push(current);

            for (const next of this._superProperties.get(current)?.superProperties ?? []) {
                queue.push(next);
            }
        }

        return result;
    }

    protected override resetState(): void {
        super.resetState();

        this.ontologies.clear();
        this.classes.clear();
        this.properties.clear();
        this.individuals.clear();
        this._superProperties.clear();
        this._ranges.clear();
        this._domains.clear();
    }

    override applyInference(quad: rdfjs.Quad) {
        super.applyInference(quad);

        // Treat all named nodes with rdf:type definitions as potential individuals.
        if (quad.subject.termType == "NamedNode" && quad.predicate.equals(rdf.type)) {
            // Only consider individuals that are not of a type that is ignored such as skos:Concept.
            if (!this.isIgnoredNode(quad.object)) {
                this.individuals.add(quad.subject);
            }

            if (quad.object.value == owl.Ontology.value) {
                this.ontologies.add(quad.subject.value);
            }
        }

        this.inferClassAxioms(quad as rdfjs.Quad);
        this.inferPropertyAxioms(quad as rdfjs.Quad);
    }

    protected assertClass(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, rdfs.Class, this.targetGraph));

        this.classes.add(subject.value);
    }

    protected inferClassAxioms(q: rdfjs.Quad) {
        let s = q.subject;
        let p = q.predicate;
        let o = q.object.termType != "Literal" ? q.object : undefined;

        if (!o) {
            return;
        }

        switch (p.value) {
            case rdf.type.value: {
                if (o.equals(rdfs.Class)) {
                    // No need to infer the class type, as it is already asserted.
                    this.classes.add(s.value);
                } else if (o.equals(owl.Class)) {
                    this.assertClass(s);
                } else if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                }
                return;
            }
            case rdfs.subClassOf.value: {
                this.assertClass(s);

                if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                } else if (o.equals(rdfs.Resource)) {
                    this.store.add(quad(rdfs.Resource, rdf.type, rdfs.Class, this.targetGraph));
                } else if (o.equals(rdfs.Class)) {
                    this.store.add(quad(rdfs.Class, rdf.type, rdfs.Class, this.targetGraph));
                    this.store.add(quad(rdfs.Class, rdfs.subClassOf, rdfs.Resource, this.targetGraph));
                } else if (o.equals(rdfs.Datatype)) {
                    this.store.add(quad(rdfs.Datatype, rdf.type, rdfs.Class, this.targetGraph));
                    this.store.add(quad(rdfs.Datatype, rdfs.subClassOf, rdfs.Class, this.targetGraph));
                } else if (o.equals(owl.Class)) {
                    this.store.add(quad(owl.Class, rdf.type, rdfs.Class, this.targetGraph));
                    this.store.add(quad(owl.Class, rdfs.subClassOf, rdfs.Class, this.targetGraph));
                }
                return;
            }
            case rdfs.range.value:
            case rdfs.domain.value: {
                if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                }
                return;
            }
        }
    }

    protected assertProperty(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, rdf.Property, this.targetGraph));

        this.properties.add(subject.value);
    }

    /**
     * Assert that a predicate denotes a property (RDFS entailment rule rdf1). Predicates of the
     * W3C vocabularies are left out, mirroring how classes are inferred from usage.
     * @param predicate The predicate of a statement.
     */
    protected assertPropertyFromUsage(predicate: rdfjs.Quad_Predicate) {
        if (predicate.termType != "NamedNode" || this.isW3CNode(predicate)) {
            return;
        }

        this.assertProperty(predicate);
    }

    protected inferPropertyAxioms(quad: rdfjs.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        // Note: A predicate denotes a property even if the statement has a literal object, so this
        // is asserted before the literals are filtered out below. Without it, a data document that
        // only *uses* the predicates of an ontology would not show any properties.
        this.assertPropertyFromUsage(p);

        if (!o) {
            return;
        }

        switch (p.value) {
            case rdf.type.value: {
                if (o.equals(rdf.Property)) {
                    // No need to infer the property type, as it is already asserted.
                    this.properties.add(s.value);
                }

                return;
            }
            case rdfs.subPropertyOf.value: {
                this._addSuperProperty(s, o);

                return;
            }
            case rdfs.range.value: {
                this.assertProperty(s);
                this._addToList(this._ranges, s.value, o);

                return;
            }
            case rdfs.domain.value: {
                this.assertProperty(s);
                this._addToList(this._domains, s.value, o);

                return;
            }
        }
    }

    /**
     * Records that a property is a sub property of another property.
     * @param property The sub property.
     * @param superProperty The super property.
     */
    private _addSuperProperty(property: rdfjs.Quad_Subject, superProperty: rdfjs.Quad_Object) {
        let entry = this._superProperties.get(property.value);

        if (!entry) {
            entry = { property, superProperties: new Set() };

            this._superProperties.set(property.value, entry);
        }

        entry.superProperties.add(superProperty.value);
    }

    /**
     * Adds a value to the list stored under a key.
     * @param map The map of lists.
     * @param key The key of the list.
     * @param value The value to add.
     */
    private _addToList(map: Map<string, rdfjs.Quad_Object[]>, key: string, value: rdfjs.Quad_Object) {
        const list = map.get(key);

        if (list) {
            list.push(value);
        } else {
            map.set(key, [value]);
        }
    }
}