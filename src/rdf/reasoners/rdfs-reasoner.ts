import * as n3 from "n3";
import { owl, rdf, rdfs, skos, shacl } from "../../ontologies";
import { SkosReasoner } from "./skos-reasoner";

/**
 * A simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner extends SkosReasoner {
    protected ontologies: Set<n3.Term> = new Set();

    protected classes: Set<n3.Term> = new Set();

    protected properties: Set<n3.Term> = new Set();

    protected invididuals: Set<n3.NamedNode> = new Set();

    protected isIgnoredNode(term: n3.Term): boolean {
        switch (term.id) {
            case skos.Concept.id:
            case skos.ConceptScheme.id:
            case skos.Collection.id:
            case skos.OrderedCollection.id:
            case shacl.Shape.id:
            case shacl.NodeShape.id:
            case shacl.PropertyShape.id:
                return true;
            default:
                return false;
        }
    }

    protected afterInference() {
        super.afterInference();

        // After all axioms have been inferred, add the inferred individuals to the graph.
        const individuals = [...this.invididuals].filter(x =>
            !this.classes.has(x) &&
            !this.properties.has(x) &&
            !this.ontologies.has(x) &&
            !this.concepts.has(x) &&
            !this.conceptSchemes.has(x) &&
            !this.collections.has(x));

        for (let individual of individuals) {
            this.store.addQuad(individual, rdf.type, owl.NamedIndividual, this.targetGraph);
        }
    }

    override applyInference(quad: n3.Quad) {
        super.applyInference(quad);

        // Treat all named nodes with rdf:type definitions as potential individuals.
        if (quad.subject.termType == "NamedNode" && quad.predicate.equals(rdf.type)) {
            // Only consider individuals that are not of a type that is ignored such as skos:Concept.
            if (!this.isIgnoredNode(quad.object)) {
                this.invididuals.add(quad.subject);
            }

            if (quad.object.id == owl.Ontology.id) {
                this.ontologies.add(quad.subject);
            }
        }

        this.inferClassAxioms(quad as n3.Quad);
        this.inferPropertyAxioms(quad as n3.Quad);
    }

    protected assertClass(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, rdfs.Class, this.targetGraph);

        this.classes.add(subject);
    }

    protected inferClassAxioms(quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(rdfs.Class)) {
                    // No need to infer the class type, as it is already asserted.
                    this.classes.add(s);
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
                    this.store.addQuad(rdfs.Resource, rdf.type, rdfs.Class, this.targetGraph);
                } else if (o.equals(rdfs.Class)) {
                    this.store.addQuad(rdfs.Class, rdf.type, rdfs.Class, this.targetGraph);
                    this.store.addQuad(rdfs.Class, rdfs.subClassOf, rdfs.Resource, this.targetGraph);
                } else if (o.equals(rdfs.Datatype)) {
                    this.store.addQuad(rdfs.Datatype, rdf.type, rdfs.Class, this.targetGraph);
                    this.store.addQuad(rdfs.Datatype, rdfs.subClassOf, rdfs.Class, this.targetGraph);
                } else if (o.equals(owl.Class)) {
                    this.store.addQuad(owl.Class, rdf.type, rdfs.Class, this.targetGraph);
                    this.store.addQuad(owl.Class, rdfs.subClassOf, rdfs.Class, this.targetGraph);
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

    protected assertProperty(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, rdf.Property, this.targetGraph);

        this.properties.add(subject);
    }

    protected inferPropertyAxioms(quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(rdf.Property)) {
                    // No need to infer the property type, as it is already asserted.
                    this.properties.add(s);
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