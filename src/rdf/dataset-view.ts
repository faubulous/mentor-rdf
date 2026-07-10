import * as rdfjs from "@rdfjs/types";
import type { Store } from "./store";

/**
 * Options for creating a {@link DatasetView}.
 */
export interface DatasetViewOptions {
    /**
     * URIs of the named graphs to scope the view to. If undefined, the view spans all quads in the store.
     */
    graphUris?: readonly string[];

    /**
     * Graph terms to scope the view to. Takes precedence over `graphUris`. Use this to scope
     * the view to graphs that cannot be expressed as URIs, such as the default graph.
     */
    graphs?: readonly rdfjs.Quad_Graph[];

    /**
     * Restrict the view to quads with this subject.
     */
    subject?: rdfjs.Term | null;

    /**
     * Restrict the view to quads with this predicate.
     */
    predicate?: rdfjs.Term | null;

    /**
     * Restrict the view to quads with this object.
     */
    object?: rdfjs.Term | null;

    /**
     * Whether to include inferred triples from the inference graphs associated with the scoped
     * graphs. If undefined, inferred triples are included when a reasoner is available. If `true`
     * without a reasoner, an error is thrown. Only applies when the view is scoped to graphs.
     */
    includeInferred?: boolean;
}

/**
 * A lazy, read-only RDF/JS DatasetCore view over a {@link Store}, optionally scoped to a set
 * of graphs and a quad pattern. The view does not copy any quads: iteration, counting and
 * containment checks delegate to the store's indexes, so the view always reflects the current
 * contents of the store.
 */
export class DatasetView implements rdfjs.DatasetCore<rdfjs.Quad> {
    private readonly _store: Store;

    private readonly _s: rdfjs.Term | null;

    private readonly _p: rdfjs.Term | null;

    private readonly _o: rdfjs.Term | null;

    /**
     * The graph terms the view is scoped to, including inference graphs if enabled.
     * `undefined` means the view spans all graphs; an empty array means the view is provably empty.
     */
    private readonly _scope?: readonly rdfjs.Quad_Graph[];

    private _cachedSize?: number;

    private _cachedSizeVersion = -1;

    constructor(store: Store, options: DatasetViewOptions = {}) {
        if (options.includeInferred === true && !store.reasoner) {
            throw new Error('Reasoner is not available to include inferred triples.');
        }

        this._store = store;
        this._s = options.subject ?? null;
        this._p = options.predicate ?? null;
        this._o = options.object ?? null;
        this._scope = DatasetView._resolveScope(store, options);
    }

    private static _resolveScope(store: Store, options: DatasetViewOptions): rdfjs.Quad_Graph[] | undefined {
        const graphs = options.graphs ?? options.graphUris?.map(uri => store.dataFactory.namedNode(uri));

        if (graphs === undefined) {
            return undefined;
        }

        const scope: rdfjs.Quad_Graph[] = [];
        const seen = new Set<string>();

        const push = (graph: rdfjs.Quad_Graph) => {
            const key = graph.termType + ':' + graph.value;

            if (!seen.has(key)) {
                seen.add(key);
                scope.push(graph);
            }
        };

        for (const graph of graphs) {
            push(graph);

            if (options.includeInferred !== false && store.reasoner && graph.termType === 'NamedNode') {
                push(store.dataFactory.namedNode(store.reasoner.targetUriGenerator.getGraphUri(graph.value)));
            }
        }

        return scope;
    }

    /**
     * Get the number of quads in the view. Computed from the store's indexes and memoized
     * until the store is modified.
     */
    get size(): number {
        if (this._cachedSizeVersion === this._store.version && this._cachedSize !== undefined) {
            return this._cachedSize;
        }

        let n = 0;

        if (this._scope === undefined) {
            n = this._store.countQuads(this._s, this._p, this._o, null);
        } else {
            for (const graph of this._scope) {
                n += this._store.countQuads(this._s, this._p, this._o, graph);
            }
        }

        this._cachedSize = n;
        this._cachedSizeVersion = this._store.version;

        return n;
    }

    /**
     * Not supported: the view is read-only.
     * @throws An error indicating that the view is read-only.
     */
    add(_quad: rdfjs.Quad): this {
        throw new Error('DatasetView is read-only. Mutate the underlying Store instead.');
    }

    /**
     * Not supported: the view is read-only.
     * @throws An error indicating that the view is read-only.
     */
    delete(_quad: rdfjs.Quad): this {
        throw new Error('DatasetView is read-only. Mutate the underlying Store instead.');
    }

    /**
     * Indicates if the view contains a specific quad.
     * @param quad The quad to be checked.
     * @returns `true` if the quad matches the view's pattern and scope and exists in the store.
     */
    has(quad: rdfjs.Quad): boolean {
        if (this._s && !this._s.equals(quad.subject)) {
            return false;
        }

        if (this._p && !this._p.equals(quad.predicate)) {
            return false;
        }

        if (this._o && !this._o.equals(quad.object)) {
            return false;
        }

        if (this._scope !== undefined && !this._scope.some(graph => graph.equals(quad.graph))) {
            return false;
        }

        return this._store.has(quad);
    }

    /**
     * Get a new view narrowed to the quads matching the given pattern. The constraints of this
     * view are intersected with the given pattern: a term that conflicts with an existing
     * constraint results in an empty view.
     * @param subject The optional subject.
     * @param predicate The optional predicate.
     * @param object The optional object.
     * @param graph The optional graph.
     * @returns A new read-only dataset view of the matching quads.
     */
    match(subject?: rdfjs.Term | null, predicate?: rdfjs.Term | null, object?: rdfjs.Term | null, graph?: rdfjs.Term | null): DatasetView {
        const s = DatasetView._intersectTerm(this._s, subject);
        const p = DatasetView._intersectTerm(this._p, predicate);
        const o = DatasetView._intersectTerm(this._o, object);

        let scope = this._scope;

        if (graph != null) {
            if (scope === undefined || scope.some(g => g.equals(graph))) {
                scope = [graph as rdfjs.Quad_Graph];
            } else {
                scope = [];
            }
        }

        // A conflicting term constraint makes the view provably empty.
        if (s === undefined || p === undefined || o === undefined) {
            scope = [];
        }

        return new DatasetView(this._store, {
            subject: s ?? this._s,
            predicate: p ?? this._p,
            object: o ?? this._o,
            graphs: scope,
            includeInferred: false
        });
    }

    /**
     * Intersect an existing term constraint with an incoming one.
     * @returns The effective term constraint, or `undefined` if the terms conflict.
     */
    private static _intersectTerm(current: rdfjs.Term | null, incoming?: rdfjs.Term | null): rdfjs.Term | null | undefined {
        if (incoming == null) {
            return current;
        }

        if (current == null) {
            return incoming;
        }

        return current.equals(incoming) ? current : undefined;
    }

    [Symbol.iterator](): Iterator<rdfjs.Quad> {
        return this._iterate();
    }

    private *_iterate(): Generator<rdfjs.Quad> {
        if (this._scope === undefined) {
            yield* this._store.matchQuads(this._s, this._p, this._o, null);
        } else {
            for (const graph of this._scope) {
                yield* this._store.matchQuads(this._s, this._p, this._o, graph);
            }
        }
    }
}
