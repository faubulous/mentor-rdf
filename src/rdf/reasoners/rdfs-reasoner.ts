import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import { owl, rdf, rdfs, skos, sh } from "../../ontologies";
import { SkosReasoner } from "./skos-reasoner";

const { quad } = n3.DataFactory;

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner extends SkosReasoner {
    protected ontologies: Set<string> = new Set();

    protected classes: Set<string> = new Set();

    protected properties: Set<string> = new Set();

    protected invididuals: Set<rdfjs.Quad_Subject> = new Set();

    protected isIgnoredNode(term: rdfjs.Quad_Subject | rdfjs.Quad_Object): boolean {
        switch (term.value) {
            case skos.Concept.id:
            case skos.ConceptScheme.id:
            case skos.Collection.id:
            case skos.OrderedCollection.id:
            case sh.Shape.id:
            case sh.NodeShape.id:
            case sh.PropertyShape.id:
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
        const individuals = [...this.invididuals].filter(x => !this.isClass(x.value));

        for (let individual of individuals) {
            this.store.addQuad(quad(individual, rdf.type, owl.NamedIndividual, this.targetGraph));
        }
    }

    protected override resetState(): void {
        this.ontologies.clear();
        this.classes.clear();
        this.properties.clear();
        this.invididuals.clear();
    }

    override applyInference(quad: rdfjs.Quad) {
        super.applyInference(quad);

        // Treat all named nodes with rdf:type definitions as potential individuals.
        if (quad.subject.termType == "NamedNode" && quad.predicate.equals(rdf.type)) {
            // Only consider individuals that are not of a type that is ignored such as skos:Concept.
            if (!this.isIgnoredNode(quad.object)) {
                this.invididuals.add(quad.subject);
            }

            if (quad.object.value == owl.Ontology.id) {
                this.ontologies.add(quad.subject.value);
            }
        }

        this.inferClassAxioms(quad as rdfjs.Quad);
        this.inferPropertyAxioms(quad as rdfjs.Quad);
    }

    protected assertClass(subject: rdfjs.Quad_Subject) {
        this.store.addQuad(quad(subject, rdf.type, rdfs.Class, this.targetGraph));

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
            case rdf.type.id: {
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
            case rdfs.subClassOf.id: {
                this.assertClass(s);

                if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                } else if (o.equals(rdfs.Resource)) {
                    this.store.addQuad(quad(rdfs.Resource, rdf.type, rdfs.Class, this.targetGraph));
                } else if (o.equals(rdfs.Class)) {
                    this.store.addQuad(quad(rdfs.Class, rdf.type, rdfs.Class, this.targetGraph));
                    this.store.addQuad(quad(rdfs.Class, rdfs.subClassOf, rdfs.Resource, this.targetGraph));
                } else if (o.equals(rdfs.Datatype)) {
                    this.store.addQuad(quad(rdfs.Datatype, rdf.type, rdfs.Class, this.targetGraph));
                    this.store.addQuad(quad(rdfs.Datatype, rdfs.subClassOf, rdfs.Class, this.targetGraph));
                } else if (o.equals(owl.Class)) {
                    this.store.addQuad(quad(owl.Class, rdf.type, rdfs.Class, this.targetGraph));
                    this.store.addQuad(quad(owl.Class, rdfs.subClassOf, rdfs.Class, this.targetGraph));
                }
                return;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                if (!this.isW3CNode(o)) {
                    this.assertClass(o);
                }
                return;
            }
        }
    }

    protected assertProperty(subject: rdfjs.Quad_Subject) {
        this.store.addQuad(quad(subject, rdf.type, rdf.Property, this.targetGraph));

        this.properties.add(subject.value);
    }

    protected inferPropertyAxioms(quad: rdfjs.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.value) {
            case rdf.type.id: {
                if (o.equals(rdf.Property)) {
                    // No need to infer the property type, as it is already asserted.
                    this.properties.add(s.value);
                }

                return;
            }
            case rdfs.range.id:
            case rdfs.domain.id: {
                this.assertProperty(s);

                return;
            }
        }
    }
}