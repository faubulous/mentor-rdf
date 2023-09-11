import * as n3 from "n3";
import { rdf, rdfs } from "../ontologies";
import { OwlReasoner } from "./owl-reasoner";

/**
 * A repository for retrieving classes.
 */
export class ClassRepository {
    private readonly _closureGraph: n3.Store;

    constructor(private _graph: n3.Store) {
        this._closureGraph = new OwlReasoner().expand(_graph);
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

    async getSuperClasses(subject: string): Promise<string[]> {
        const result = new Set<string>();
        const s = n3.DataFactory.namedNode(subject);

        for (let q of this._closureGraph.match(s, rdfs.subClassOf, null)) {
            const o = q.object;

            if (o.termType != "NamedNode") {
                continue;
            }

            result.add(o.value);
        }

        return Array.from(result);
    }

    async getSubClasses(subject: string): Promise<string[]> {
        const result = new Set<string>();
        const o = n3.DataFactory.namedNode(subject);

        for (let q of this._closureGraph.match(null, rdfs.subClassOf, o)) {
            const s = q.subject;

            if (s.termType != "NamedNode") {
                continue;
            }

            result.add(s.value);
        }

        return Array.from(result);
    }


    async getRootClasses(): Promise<string[]> {
        const classes = await this.getClasses();
        const subclasses = new Set<string>();

        for (let q of this._closureGraph.match(null, rdfs.subClassOf, null)) {
            const s = q.subject;
            const o = q.object;

            if (s.termType != "NamedNode" || o.termType != "NamedNode") {
                continue;
            }

            subclasses.add(s.value);
        }

        return Array.from(classes).filter(c => !subclasses.has(c));
    }
}