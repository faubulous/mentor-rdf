import * as n3 from "n3";
import { rdf, sh } from "../../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A simple SKOS reasoner that expands the graph with inferred triples.
 */
export class ShaclReasoner extends RdfsReasoner {
    protected classes: Set<string> = new Set();

    protected isClass(id: string): boolean {
        return this.classes.has(id) || super.isClass(id);
    }

    applyInference(quad: n3.Quad): void {
        super.applyInference(quad);

        this.inferShapeAxioms(quad);
    }

    protected override resetState(): void {
        super.resetState();

        this.classes.clear();
    }

    protected assertShape(subject: n3.BlankNode | n3.NamedNode | n3.Variable, type?: n3.NamedNode) {
        this.store.addQuad(subject, rdf.type, sh.Shape, this.targetGraph);

        if (type) {
            this.store.addQuad(subject, rdf.type, type, this.targetGraph);
        }

        this.classes.add(subject.id);
    }

    protected assertValidator(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, sh.Validator, this.targetGraph);

        this.classes.add(subject.id);
    }

    protected assertParameterizable(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, sh.Parameterizable, this.targetGraph);

        this.classes.add(subject.id);
    }

    protected assertRule(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, sh.Rule, this.targetGraph);

        this.classes.add(subject.id);
    }

    protected isShapeType(subject: n3.Term): boolean {
        switch (subject.id) {
            case sh.Shape.id:
            case sh.NodeShape.id:
            case sh.PropertyShape.id:
            case sh.Parameter.id: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isRuleType(subject: n3.Term): boolean {
        switch (subject.id) {
            case sh.Rule.id:
            case sh.JSRule.id:
            case sh.SPARQLRule.id:
            case sh.TripleRule.id: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isValidatorType(subject: n3.Term): boolean {
        switch (subject.id) {
            case sh.Validator.id:
            case sh.JSValidator.id:
            case sh.SPARQLAskValidator.id:
            case sh.SPARQLSelectValidator.id: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isParameterizableType(subject: n3.Term): boolean {
        switch (subject.id) {
            case sh.Parameter.id:
            case sh.ConstraintComponent.id:
            case sh.Function.id:
            case sh.JSFunction.id:
            case sh.SPARQLFunction.id:
            case sh.TargetType.id:
            case sh.JSTargetType.id:
            case sh.SPARQLTargetType.id: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    inferShapeAxioms(quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        if (!o) {
            return;
        }

        switch (p.id) {
            case rdf.type.id: {
                if (o.equals(sh.Shape) || o.equals(sh.Parameterizable)) {
                    // No need to infer the type, as it is already asserted.
                    this.classes.add(s.id);
                } else if (this.isShapeType(o)) {
                    this.assertShape(s, o as n3.NamedNode);
                } else if (this.isParameterizableType(o)) {
                    this.assertParameterizable(s);
                } else if (this.isValidatorType(o)) {
                    this.assertValidator(s);
                } else if (this.isRuleType(o)) {
                    this.assertRule(s);
                }
                return;
            }
            case sh.targetClass.id: {
                this.assertShape(s, sh.NodeShape);
                this.assertClass(o);
                return;
            }
            case sh.class.id: {
                this.assertShape(s, sh.PropertyShape);
                this.assertClass(o);
                return;
            }
            case sh.path.id: {
                this.assertShape(s, sh.PropertyShape);
                this.assertProperty(o);
                return;
            }
            case sh.property.id: {
                this.assertShape(s, sh.NodeShape);
                this.assertShape(o, sh.PropertyShape);
                return;
            }
            case sh.parameter.id: {
                this.assertShape(o, sh.Parameter);
                this.assertParameterizable(s);
                return;
            }
            case sh.labelTemplate.id: {
                this.assertParameterizable(s);
                return;
            }
            case sh.validator.id: {
                this.assertValidator(o);
                return;
            }
            case sh.rule.id: {
                this.assertRule(o);
                return;
            }
            case sh.subject.id:
            case sh.predicate.id:
            case sh.object.id: {
                this.assertRule(s);
                return;
            }
        }
    }
}