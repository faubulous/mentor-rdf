import * as n3 from "n3";
import { rdf, shacl } from "../../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A simple SKOS reasoner that expands the graph with inferred triples.
 */
export class ShaclReasoner extends RdfsReasoner {
    protected shapes: Set<n3.Term> = new Set();

    applyInference(quad: n3.Quad): void {
        super.applyInference(quad);

        this.inferShapeAxioms(quad);
    }

    protected assertShape(subject: n3.BlankNode | n3.NamedNode | n3.Variable, type?: n3.NamedNode) {
        this.store.addQuad(subject, rdf.type, shacl.Shape, this.targetGraph);

        if (type) {
            this.store.addQuad(subject, rdf.type, type, this.targetGraph);
        }

        this.shapes.add(subject);
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
                    this.shapes.add(s);
                } else if (o.equals(shacl.NodeShape) || o.equals(shacl.PropertyShape)) {
                    this.assertShape(s, o as n3.NamedNode);
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
        }
    }
}