import * as n3 from "n3";
import { owl, rdf, rdfs } from "../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A simple OWL reasoner that expands the graph with inferred triples.
 */
export class OwlReasoner extends RdfsReasoner {

    protected inferClassAxioms(graph: n3.Store, lists: Record<string, n3.Term[]>, quad: n3.Quad) {
        super.inferClassAxioms(graph, lists, quad);

        let s = quad.subject;
        let p = quad.predicate;
        let o = quad.object.termType != "Literal" ? quad.object : undefined;

        // See: https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules
        switch (p.id) {
            case owl.equivalentClass.id:
            case owl.complementOf.id:
            case owl.disjointWith.id: {
                graph.addQuad(s, rdf.type, rdfs.Class);

                if (o) {
                    graph.addQuad(o, rdf.type, rdfs.Class);
                }

                break;
            }
            case owl.intersectionOf.id: {
                let equivalentSubjects = [...graph.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-int
                for (let c of lists[o.value]) {
                    if (c.termType != "NamedNode") continue;

                    graph.addQuad(s, rdfs.subClassOf, c);

                    for (let es of equivalentSubjects) {
                        graph.addQuad(es, rdfs.subClassOf, c);
                    }
                }
                break;
            }
            case owl.unionOf.id: {
                let equivalentSubjects = [...graph.match(null, owl.equivalentClass, s)]
                    .map(q => q.subject)
                    .filter(q => q.termType == "NamedNode");

                // Rule #scm-uni
                for (let c of lists[o.value]) {
                    if (c.termType != "NamedNode") continue;

                    graph.addQuad(c, rdfs.subClassOf, s);

                    for (let es of equivalentSubjects) {
                        graph.addQuad(c, rdfs.subClassOf, es);
                    }
                }
                break;
            }
        }
    }
}