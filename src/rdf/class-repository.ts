import * as n3 from "n3";
import { rdf, rdfs } from "../ontologies";
import { RdfsReasoner } from "./rdfs-reasoner";

/**
 * A repository for retrieving classes.
 */
export class ClassRepository {
    private readonly _closureGraph: n3.Store;

    constructor(private _graph: n3.Store) {
        this._closureGraph = new RdfsReasoner().expand(_graph);
    }

    async getClasses(): Promise<string[]> {
        const result = new Set<string>();

        for (let q of this._closureGraph.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (s.termType != "NamedNode" || s.value.startsWith("http://www.w3.org")) {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }

    async getRootClasses(): Promise<string[]> {
        const result = new Set<string>();
        const subclasses = new Set<string>();

        for (let q of this._closureGraph.match(null, rdf.type, rdfs.Class)) {
            const s = q.subject;

            if (s.termType != "NamedNode" || s.value.startsWith("http://www.w3.org")) {
                continue;
            }

            result.add(s.value);

            if (q.predicate.equals(rdfs.subClassOf)) {
                subclasses.add(q.subject.value);
            }
        }

        return Array.from(result).filter(c => !subclasses.has(c));
    }
}