import * as rdfjs from "@rdfjs/types";
import { rdf, sh } from "../../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";
import { GraphUriGenerator, DefaultInferenceGraphHandler } from "./reasoner";
import { dataFactory } from "../data-factory";

const { quad } = dataFactory;

/**
 * A simple SKOS reasoner that expands the graph with inferred triples.
 */
export class ShaclReasoner extends RdfsReasoner {
    protected classes: Set<string> = new Set();

    constructor(targetUriGenerator: GraphUriGenerator = new DefaultInferenceGraphHandler()) {
        super(targetUriGenerator);
    }

    protected isClass(id: string): boolean {
        return this.classes.has(id) || super.isClass(id);
    }

    applyInference(quad: rdfjs.Quad): void {
        super.applyInference(quad);

        this.inferShapeAxioms(quad);
    }

    protected override resetState(): void {
        super.resetState();

        this.classes.clear();
    }

    protected assertShape(subject: rdfjs.Quad_Subject, type?: rdfjs.NamedNode) {
        this.store.add(quad(subject, rdf.type, sh.Shape, this.targetGraph));

        if (type) {
            this.store.add(quad(subject, rdf.type, type, this.targetGraph));
        }

        this.classes.add(subject.value);
    }

    protected assertValidator(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, sh.Validator, this.targetGraph));

        this.classes.add(subject.value);
    }

    protected assertParameterizable(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, sh.Parameterizable, this.targetGraph));

        this.classes.add(subject.value);
    }

    protected assertRule(subject: rdfjs.Quad_Subject) {
        this.store.add(quad(subject, rdf.type, sh.Rule, this.targetGraph));

        this.classes.add(subject.value);
    }

    protected isShapeType(subject: rdfjs.Quad_Subject): boolean {
        switch (subject.value) {
            case sh.Shape.value:
            case sh.NodeShape.value:
            case sh.PropertyShape.value:
            case sh.Parameter.value: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isRuleType(subject: rdfjs.Quad_Subject): boolean {
        switch (subject.value) {
            case sh.Rule.value:
            case sh.JSRule.value:
            case sh.SPARQLRule.value:
            case sh.TripleRule.value: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isValidatorType(subject: rdfjs.Quad_Subject): boolean {
        switch (subject.value) {
            case sh.Validator.value:
            case sh.JSValidator.value:
            case sh.SPARQLAskValidator.value:
            case sh.SPARQLSelectValidator.value: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isParameterizableType(subject: rdfjs.Quad_Subject): boolean {
        switch (subject.value) {
            case sh.Parameter.value:
            case sh.ConstraintComponent.value:
            case sh.Function.value:
            case sh.JSFunction.value:
            case sh.SPARQLFunction.value:
            case sh.TargetType.value:
            case sh.JSTargetType.value:
            case sh.SPARQLTargetType.value: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    inferShapeAxioms(quad: rdfjs.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.value) {
            case rdf.type.value: {
                if (o.equals(sh.Shape) || o.equals(sh.Parameterizable)) {
                    // No need to infer the type, as it is already asserted.
                    this.classes.add(s.value);
                } else if (this.isShapeType(o)) {
                    this.assertShape(s, o as rdfjs.NamedNode);
                } else if (this.isParameterizableType(o)) {
                    this.assertParameterizable(s);
                } else if (this.isValidatorType(o)) {
                    this.assertValidator(s);
                } else if (this.isRuleType(o)) {
                    this.assertRule(s);
                }
                return;
            }
            case sh.targetClass.value: {
                this.assertShape(s, sh.NodeShape);
                this.assertClass(o);
                return;
            }
            case sh.class.value: {
                this.assertShape(s, sh.PropertyShape);
                this.assertClass(o);
                return;
            }
            case sh.path.value: {
                this.assertShape(s, sh.PropertyShape);
                this.assertProperty(o);
                return;
            }
            case sh.property.value: {
                this.assertShape(s, sh.NodeShape);
                this.assertShape(o, sh.PropertyShape);
                return;
            }
            case sh.parameter.value: {
                this.assertShape(o, sh.Parameter);
                this.assertParameterizable(s);
                return;
            }
            case sh.labelTemplate.value: {
                this.assertParameterizable(s);
                return;
            }
            case sh.validator.value: {
                this.assertValidator(o);
                return;
            }
            case sh.rule.value: {
                this.assertRule(o);
                return;
            }
            case sh.subject.value:
            case sh.predicate.value:
            case sh.object.value: {
                this.assertRule(s);
                return;
            }
        }
    }
}