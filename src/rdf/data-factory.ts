import * as rdfjs from "@rdfjs/types";

/**
 * An RDF/JS compliant NamedNode implementation.
 */
export class NamedNode implements rdfjs.NamedNode {
    readonly termType = "NamedNode" as const;
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    equals(other: rdfjs.Term | null | undefined): boolean {
        return other?.termType === this.termType && other.value === this.value;
    }
}

/**
 * An RDF/JS compliant BlankNode implementation.
 */
export class BlankNode implements rdfjs.BlankNode {
    readonly termType = "BlankNode" as const;
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    equals(other: rdfjs.Term | null | undefined): boolean {
        return other?.termType === this.termType && other.value === this.value;
    }
}

/**
 * An RDF/JS compliant Literal implementation.
 */
export class Literal implements rdfjs.Literal {
    readonly termType = "Literal" as const;
    readonly value: string;
    readonly language: string;
    readonly datatype: rdfjs.NamedNode;

    constructor(value: string, languageOrDatatype?: string | rdfjs.NamedNode) {
        this.value = value;

        if (typeof languageOrDatatype === "string") {
            this.language = languageOrDatatype.toLowerCase();
            this.datatype = new NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString");
        } else if (languageOrDatatype) {
            this.language = "";
            this.datatype = languageOrDatatype;
        } else {
            this.language = "";
            this.datatype = new NamedNode("http://www.w3.org/2001/XMLSchema#string");
        }
    }

    equals(other: rdfjs.Term | null | undefined): boolean {
        if (other?.termType !== this.termType) {
            return false;
        }

        const otherLiteral = other as rdfjs.Literal;
        return (
            this.value === otherLiteral.value &&
            this.language === otherLiteral.language &&
            this.datatype.equals(otherLiteral.datatype)
        );
    }
}

/**
 * An RDF/JS compliant Variable implementation.
 */
export class Variable implements rdfjs.Variable {
    readonly termType = "Variable" as const;
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    equals(other: rdfjs.Term | null | undefined): boolean {
        return other?.termType === this.termType && other.value === this.value;
    }
}

/**
 * An RDF/JS compliant DefaultGraph implementation (singleton).
 */
export class DefaultGraph implements rdfjs.DefaultGraph {
    readonly termType = "DefaultGraph" as const;
    readonly value = "";

    equals(other: rdfjs.Term | null | undefined): boolean {
        return other?.termType === this.termType;
    }
}

/**
 * An RDF/JS compliant Quad implementation.
 */
export class Quad implements rdfjs.Quad {
    readonly termType = "Quad" as const;
    readonly value = "";
    readonly subject: rdfjs.Quad_Subject;
    readonly predicate: rdfjs.Quad_Predicate;
    readonly object: rdfjs.Quad_Object;
    readonly graph: rdfjs.Quad_Graph;

    constructor(
        subject: rdfjs.Quad_Subject,
        predicate: rdfjs.Quad_Predicate,
        object: rdfjs.Quad_Object,
        graph?: rdfjs.Quad_Graph
    ) {
        this.subject = subject;
        this.predicate = predicate;
        this.object = object;
        this.graph = graph ?? new DefaultGraph();
    }

    equals(other: rdfjs.Term | null | undefined): boolean {
        if (other?.termType !== this.termType) {
            return false;
        }

        const otherQuad = other as rdfjs.Quad;
        return (
            this.subject.equals(otherQuad.subject) &&
            this.predicate.equals(otherQuad.predicate) &&
            this.object.equals(otherQuad.object) &&
            this.graph.equals(otherQuad.graph)
        );
    }
}

// Singleton instance of DefaultGraph
const defaultGraphInstance = new DefaultGraph();

/**
 * An RDF/JS compliant DataFactory implementation.
 * 
 * This factory provides methods to create RDF terms (named nodes, blank nodes, literals, variables)
 * and quads according to the RDF/JS specification.
 * 
 * @see https://rdf.js.org/data-model-spec/
 */
export class DataFactory implements rdfjs.DataFactory<rdfjs.Quad, rdfjs.Quad> {
    blankNodeCounter: number = 0;

    /**
     * Creates a new named node with the given IRI.
     * @param value The IRI of the named node.
     * @returns A new NamedNode instance.
     */
    namedNode<Iri extends string = string>(value: Iri): rdfjs.NamedNode<Iri> {
        return new NamedNode(value) as rdfjs.NamedNode<Iri>;
    }

    /**
     * Creates a new blank node with the given identifier.
     * If no identifier is provided, a unique one will be generated.
     * @param value Optional blank node identifier.
     * @returns A new BlankNode instance.
     */
    blankNode(value?: string): rdfjs.BlankNode {
        return new BlankNode(value ?? `b${++this.blankNodeCounter}`);
    }

    /**
     * Creates a new literal with the given value and optional language tag or datatype.
     * @param value The lexical value of the literal.
     * @param languageOrDatatype Either a language tag (string) or a datatype (NamedNode).
     * @returns A new Literal instance.
     */
    literal(value: string, languageOrDatatype?: string | rdfjs.NamedNode): rdfjs.Literal {
        return new Literal(value, languageOrDatatype);
    }

    /**
     * Creates a new variable with the given name.
     * @param value The name of the variable (without the leading '?').
     * @returns A new Variable instance.
     */
    variable(value: string): rdfjs.Variable {
        return new Variable(value);
    }

    /**
     * Returns the singleton default graph instance.
     * @returns The default graph instance.
     */
    defaultGraph(): rdfjs.DefaultGraph {
        return defaultGraphInstance;
    }

    /**
     * Creates a new quad with the given subject, predicate, object, and optional graph.
     * @param subject The subject of the quad.
     * @param predicate The predicate of the quad.
     * @param object The object of the quad.
     * @param graph The graph of the quad (defaults to the default graph).
     * @returns A new Quad instance.
     */
    quad(
        subject: rdfjs.Quad_Subject,
        predicate: rdfjs.Quad_Predicate,
        object: rdfjs.Quad_Object,
        graph?: rdfjs.Quad_Graph
    ): rdfjs.Quad {
        return new Quad(subject, predicate, object, graph);
    }

    /**
     * Creates a copy of an existing term.
     * @param original The term to copy.
     * @returns A new term instance with the same value.
     */
    fromTerm<T extends rdfjs.Term>(original: T): T {
        switch (original.termType) {
            case "NamedNode":
                return this.namedNode(original.value) as unknown as T;
            case "BlankNode":
                return this.blankNode(original.value) as unknown as T;
            case "Literal": {
                const literal = original as rdfjs.Literal;
                if (literal.language) {
                    return this.literal(literal.value, literal.language) as unknown as T;
                }
                return this.literal(literal.value, this.fromTerm(literal.datatype)) as unknown as T;
            }
            case "Variable":
                return this.variable(original.value) as unknown as T;
            case "DefaultGraph":
                return this.defaultGraph() as unknown as T;
            case "Quad": {
                const quad = original as unknown as rdfjs.Quad;
                return this.fromQuad(quad) as unknown as T;
            }
            default:
                throw new Error(`Unknown term type: ${(original as rdfjs.Term).termType}`);
        }
    }

    /**
     * Creates a copy of an existing quad.
     * @param original The quad to copy.
     * @returns A new quad instance with the same values.
     */
    fromQuad(original: rdfjs.Quad): rdfjs.Quad {
        return this.quad(
            this.fromTerm(original.subject),
            this.fromTerm(original.predicate),
            this.fromTerm(original.object),
            this.fromTerm(original.graph)
        );
    }

    /**
     * Resets the blank node counter. Useful for testing.
     */
    resetBlankNodeCounter(): void {
        this.blankNodeCounter = 0;
    }
}

/**
 * A default DataFactory instance for convenient use.
 */
export const dataFactory = new DataFactory();
