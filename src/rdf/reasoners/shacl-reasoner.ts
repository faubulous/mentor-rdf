import * as n3 from "n3";
import { rdf, shacl } from "../../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A simple SKOS reasoner that expands the graph with inferred triples.
 */
export class ShaclReasoner extends RdfsReasoner {
    protected shapes: Set<string> = new Set();

    protected validators: Set<string> = new Set();

    protected parameterizables: Set<string> = new Set();

    protected isClass(id: string): boolean {
        return super.isClass(id) ||
            this.shapes.has(id) ||
            this.validators.has(id) ||
            this.parameterizables.has(id);
    }

    applyInference(quad: n3.Quad): void {
        super.applyInference(quad);

        this.inferShapeAxioms(quad);
    }

    protected assertShape(subject: n3.BlankNode | n3.NamedNode | n3.Variable, type?: n3.NamedNode) {
        this.store.addQuad(subject, rdf.type, shacl.Shape, this.targetGraph);

        if (type) {
            this.store.addQuad(subject, rdf.type, type, this.targetGraph);
        }

        this.shapes.add(subject.id);
    }

    protected assertValidator(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, shacl.Validator, this.targetGraph);

        this.validators.add(subject.id);
    }

    protected assertParameterizable(subject: n3.BlankNode | n3.NamedNode | n3.Variable) {
        this.store.addQuad(subject, rdf.type, shacl.Parameterizable, this.targetGraph);

        this.parameterizables.add(subject.id);
    }

    protected isShapeType(subject: n3.Term): boolean {
        switch (subject.id) {
            case shacl.Shape.id:
            case shacl.NodeShape.id:
            case shacl.PropertyShape.id:
            case shacl.Parameter.id: {
                return true;
            }
            default: {
                return false;
            }
        }
    }

    protected isParameterizableType(subject: n3.Term): boolean {
        switch (subject.id) {
            case shacl.Parameter.id:
            case shacl.ConstraintComponent.id:
            case shacl.Function.id:
            case shacl.JSFunction.id:
            case shacl.SPARQLFunction.id:
            case shacl.TargetType.id:
            case shacl.JSTargetType.id:
            case shacl.SPARQLTargetType.id: {
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
                if (o.equals(shacl.Shape)) {
                    // No need to infer the type, as it is already asserted.
                    this.shapes.add(s.id);
                } else if (this.isShapeType(o)) {
                    this.assertShape(s, o as n3.NamedNode);
                } else if (o.equals(shacl.Parameterizable)) {
                    // No need to infer the type, as it is already asserted.
                    this.parameterizables.add(s.id);
                } else if (this.isParameterizableType(o)) {
                    this.assertParameterizable(s);
                }
                return;
            }
            case shacl.targetClass.id: {
                this.assertShape(s, shacl.NodeShape);
                this.assertClass(o);
                return;
            }
            case shacl.class.id: {
                this.assertShape(s, shacl.PropertyShape);
                this.assertClass(o);
                return;
            }
            case shacl.path.id: {
                this.assertShape(s, shacl.PropertyShape);
                this.assertProperty(o);
                return;
            }
            case shacl.property.id: {
                this.assertShape(s, shacl.NodeShape);
                this.assertShape(o, shacl.PropertyShape);
                return;
            }
            case shacl.parameter.id: {
                this.assertShape(o, shacl.Parameter);
                this.assertParameterizable(s);
                return;
            }
            case shacl.labelTemplate.id: {
                this.assertParameterizable(s);
                return;
            }
            case shacl.validator.id: {
                this.assertValidator(o);
                return;
            }
        }
    }
}