import * as rdfjs from "@rdfjs/types";
import { rdf, skos } from "../../ontologies";
import { DefaultInferenceGraphHandler, GraphUriGenerator, ReasonerBase } from "./reasoner";
import { dataFactory } from "../data-factory";

const { quad } = dataFactory

/**
 * A simple SKOS reasoner that expands the graph with inferred triples.
 */
export class SkosReasoner extends ReasonerBase {
    protected concepts: Set<string> = new Set();

    protected conceptSchemes: Set<string> = new Set();

    protected collections: Set<string> = new Set();

    /**
     * Subjects of `skos:inScheme` triples, keyed by their value. Whether they are concepts can only
     * be decided once all triples of the graph were processed, see {@link afterInference}.
     */
    private readonly _inSchemeSubjects: Map<string, rdfjs.Quad_Subject> = new Map();

    constructor(targetUriGenerator: GraphUriGenerator = new DefaultInferenceGraphHandler()) {
        super(targetUriGenerator);
    }

    applyInference(quad: rdfjs.Quad): void {
        this.inferConceptAxioms(quad);
        this.inferCollectionAxioms(quad);
    }

    /**
     * Infers the subjects of `skos:inScheme` triples to be concepts, unless they are collections.
     * `skos:inScheme` has no domain, and `skos:Collection` is disjoint with `skos:Concept`. The
     * type of a collection may be processed after its `skos:inScheme` triple, so this is done after
     * all triples of the graph were processed.
     */
    protected afterInference(): void {
        super.afterInference();

        for (let [id, subject] of this._inSchemeSubjects) {
            if (!this.collections.has(id)) {
                this.assertConcept(subject);
            }
        }
    }

    /**
     * Clears the state that was collected for the graph, so it does not affect the next graph.
     */
    protected resetState(): void {
        super.resetState();

        this.concepts.clear();
        this.conceptSchemes.clear();
        this.collections.clear();
        this._inSchemeSubjects.clear();
    }

    protected assertConcept(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, skos.Concept, this.targetGraph));

        this.concepts.add(subject.value);
    }

    protected assertConceptScheme(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, skos.ConceptScheme, this.targetGraph));

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
            case rdf.type.value: {
                if (o.equals(skos.Concept)) {
                    // No need to infer the type, as it is already asserted.
                    this.concepts.add(s.value);
                } else if (o.equals(skos.ConceptScheme)) {
                    // No need to infer the type, as it is already asserted.
                    this.conceptSchemes.add(s.value);
                }
                return;
            }
            case skos.inScheme.value: {
                // The subject may be a collection, so it is only inferred to be a concept after
                // all triples were processed.
                this._inSchemeSubjects.set(s.value, s);
                this.assertConceptScheme(o);
                return;
            }
            case skos.topConceptOf.value: {
                this.assertConcept(s);
                this.assertConceptScheme(o);
                return;
            }
            case skos.hasTopConcept.value: {
                this.assertConcept(o);
                this.assertConceptScheme(s);
                return;
            }
        }
    }

    protected assertCollection(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, skos.Collection, this.targetGraph));

        this.collections.add(subject.value);
    }

    protected assertOrderedCollection(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, skos.OrderedCollection, this.targetGraph));

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
            case rdf.type.value: {
                if (o.equals(skos.Collection)) {
                    // No need to infer the type, as it is already asserted.
                    this.collections.add(s.value);
                } else if (o.equals(skos.OrderedCollection)) {
                    // No need to infer the type, as it is already asserted.
                    this.collections.add(s.value);
                }
                return;
            }
            case skos.member.value: {
                this.assertCollection(s);
                return;
            }
            case skos.memberList.value: {
                this.assertOrderedCollection(s);
                return;
            }
        }
    }
}