import * as n3 from "n3";
import * as rdfjs from "@rdfjs/types";
import { rdf, skos } from "../../ontologies";
import { ReasonerBase } from "./reasoner";

const { quad } = n3.DataFactory

/**
 * A simple SKOS reasoner that expands the graph with inferred triples.
 */
export class SkosReasoner extends ReasonerBase {
    protected concepts: Set<string> = new Set();

    protected conceptSchemes: Set<string> = new Set();

    protected collections: Set<string> = new Set();

    applyInference(quad: rdfjs.Quad): void {
        this.inferConceptAxioms(quad);
        this.inferCollectionAxioms(quad);
    }

    protected assertConcept(subject: rdfjs.Quad_Subject) {
        this.store.addQuad(quad(subject, rdf.type, skos.Concept, this.targetGraph));

        this.concepts.add(subject.value);
    }

    protected assertConceptScheme(subject: rdfjs.Quad_Subject) {
        this.store.addQuad(quad(subject, rdf.type, skos.ConceptScheme, this.targetGraph));

        this.conceptSchemes.add(subject.value);
    }

    protected isClass(id: string): boolean {
        return this.concepts.has(id) ||
            this.conceptSchemes.has(id) ||
            this.collections.has(id);
    }

    inferConceptAxioms(quad: rdfjs.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.value) {
            case rdf.type.id: {
                if (o.equals(skos.Concept)) {
                    // No need to infer the type, as it is already asserted.
                    this.concepts.add(s.value);
                } else if (o.equals(skos.ConceptScheme)) {
                    // No need to infer the type, as it is already asserted.
                    this.conceptSchemes.add(s.value);
                }
                return;
            }
            case skos.inScheme.id: {
                this.assertConcept(s);
                this.assertConceptScheme(o);
                return;
            }
            case skos.topConceptOf.id: {
                this.assertConcept(s);
                this.assertConceptScheme(o);
                return;
            }
            case skos.hasTopConcept.id: {
                this.assertConcept(o);
                this.assertConceptScheme(s);
                return;
            }
        }
    }

    protected assertCollection(subject: rdfjs.Quad_Subject) {
        this.store.addQuad(quad(subject, rdf.type, skos.Collection, this.targetGraph));

        this.collections.add(subject.value);
    }

    protected assertOrderedCollection(subject: rdfjs.Quad_Subject) {
        this.store.addQuad(quad(subject, rdf.type, skos.OrderedCollection, this.targetGraph));

        // We do not make a distinction between collections and ordered collections here.
        this.collections.add(subject.value);
    }

    inferCollectionAxioms(quad: rdfjs.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.value) {
            case rdf.type.id: {
                if (o.equals(skos.Collection)) {
                    // No need to infer the type, as it is already asserted.
                    this.collections.add(s.value);
                } else if (o.equals(skos.OrderedCollection)) {
                    // No need to infer the type, as it is already asserted.
                    this.collections.add(s.value);
                }
                return;
            }
            case skos.member.id: {
                this.assertCollection(s);
                return;
            }
            case skos.memberList.id: {
                this.assertOrderedCollection(s);
                return;
            }
        }
    }
}