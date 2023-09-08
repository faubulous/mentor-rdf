import * as n3 from "n3";
import { owl, rdf, rdfs } from "../ontologies";

/**
 * Implements a simple RDFS reasoner that expands the graph with inferred triples.
 */
export class RdfsReasoner {
    public expand(store: n3.Store): n3.Store {
        const g = new n3.Store();

        for (let q of store.match(null, null, null)) {
            g.addQuad(q);

            this._inferClassAxioms(g, q as n3.Quad);
        }

        return g;
    }

    private _inferClassAxioms(graph: n3.Store, quad: n3.Quad) {
        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object;

        if (p.equals(rdf.type)) {
            if (o.equals(owl.Class)) {
                graph.addQuad(s, rdf.type, rdfs.Class);
            } else if (o instanceof n3.NamedNode) {
                graph.addQuad(o, rdf.type, rdfs.Class);
            }
        } else if (p.equals(rdfs.subClassOf)) {
            graph.addQuad(s, rdf.type, rdfs.Class);

            if (o instanceof n3.NamedNode) {
                graph.addQuad(o, rdf.type, rdfs.Class);
            }
        }
    }
}