# Mentor RDF API

A TypeScript library for working with RDF vocabularies in Node.js and browsers. It powers the [Mentor](https://github.com/faubulous/mentor-vscode) VS Code extension, providing structured access to ontologies through a repository pattern and lightweight structural reasoning.

[![License: LGPL-2.1](https://img.shields.io/badge/License-LGPL--2.1-blue.svg)](https://opensource.org/licenses/LGPL-2.1)
[![API Docs](https://img.shields.io/badge/API-docs-blue.svg)](https://faubulous.github.io/mentor-rdf/)
[![Coverage](https://img.shields.io/endpoint?url=https://faubulous.github.io/mentor-rdf/coverage-badge.json)](https://faubulous.github.io/mentor-rdf/coverage/)
[![npm downloads](https://img.shields.io/npm/dm/@faubulous/mentor-rdf.svg)](https://www.npmjs.com/package/@faubulous/mentor-rdf)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)

## Features

### Repository Pattern
Access RDF resources through specialized repositories that provide type-safe, SPARQL-free querying:

- **VocabularyRepository** – Query ontologies and SKOS concept schemes
- **ClassRepository** – Retrieve OWL/RDFS classes with hierarchy traversal
- **PropertyRepository** – Access object, datatype, and annotation properties
- **IndividualRepository** – Query class instances and their properties
- **ShapeRepository** – Work with SHACL node and property shapes

### Structural Reasoning
Built-in reasoners expand your RDF graphs with inferred triples:

- **RdfsReasoner** – `rdfs:subClassOf`, `rdfs:subPropertyOf`, domain/range inference
- **OwlReasoner** – OWL class expressions, property characteristics, equivalences
- **SkosReasoner** – SKOS concept hierarchies and semantic relations
- **ShaclReasoner** – SHACL shape target inference

### RDF Store
An [RDF.js](https://rdf.js.org/)-compatible triple store with:

- Multiple format support: Turtle, N3, N-Triples, N-Quads, TriG, RDF/XML
- Named graph management
- Bundled W3C ontologies (RDF, RDFS, OWL, SKOS, SHACL, XSD)

## SKOS Concept Schemes and Collections

SKOS hierarchies are not trees, and the standard does not require them to stay inside a concept scheme. The repository therefore applies explicit rules so that hierarchical views neither lose resources nor show them in the wrong place.

### Which concepts belong to a scheme

A concept is **associated** with a scheme when it carries `skos:inScheme` or `skos:topConceptOf` for it — `skos:broader` and `skos:narrower` are deliberately *not* considered, because they may cross scheme boundaries.

`getTopConcepts` returns the concepts designated by `skos:hasTopConcept`/`skos:topConceptOf`, **plus** every concept of the scheme that has no broader concept *within the same scheme*. The second part matters for vocabularies like this one:

```turtle
:TaskScheme a skos:ConceptScheme ; skos:hasTopConcept :task--root .

:task--paint a skos:Concept ;
    skos:inScheme :TaskScheme ;           # belongs to the task scheme …
    skos:broader  :group--finishing .     # … but hangs off a concept of another scheme
```

Following only `skos:broader` would leave `:task--paint` reachable exclusively under `:GroupScheme`, and `:TaskScheme` would appear to contain nothing but `:task--root`. Because the broader concept is not of `:TaskScheme`, `:task--paint` is a top concept of the scheme that declares it.

When expanding, `getNarrowerConcepts(graphs, conceptUri, { inScheme })` returns narrower concepts that are of that scheme, or that are associated with **no** scheme at all. The second clause keeps concepts visible in vocabularies that only annotate some of their concepts — a strict filter would hide them. It does not feed the top-concept rule, so an unscoped concept never becomes a top concept on its own; it is displayed wherever it is reached from.

### Three different questions

| Method | Answers |
|---|---|
| `getConcepts(graphs)` | Every `skos:Concept` in the graphs, regardless of scheme. |
| `getConceptsOfScheme(graphs, scheme)` | Concepts **associated** with the scheme (`skos:inScheme`/`skos:topConceptOf`). One index scan. |
| `getAllConceptsInScheme(graphs, scheme)` | Concepts a hierarchical view of the scheme can **reach** — the top concepts plus everything narrower that may be displayed below them. |

A UI that shows a count next to a scheme should use `getAllConceptsInScheme`, so the number matches what expanding the scheme reveals. Using `getConcepts` reports the document-wide total under every scheme. The traversal indexes the hierarchical relations once per call rather than querying each concept, which keeps it usable on large thesauri (~37 ms for the 4,577-concept UNESCO thesaurus, versus ~6 ms for `getConceptsOfScheme`).

### Nested collections

A `skos:Collection` may have other collections as members, so collections form a hierarchy too:

- `getCollections` returns every collection; `getRootCollections` returns only those that are not a member of another collection, which is what a hierarchical view should show at the top level.
- `getSubCollections` returns the members that are collections themselves; `getCollectionMembers` returns all members. Both resolve `skos:member` **and** `skos:memberList`, and preserve member list order for a `skos:OrderedCollection`.
- `getSuperCollections` resolves the inverse direction. For `skos:memberList` it walks the `rdf:rest` chain backwards from the member, so it also finds collections that share a list.
- All of these accept `inScheme` to restrict the result to the collections of one concept scheme, or `inScheme: null` for those associated with none.

### Cycles and self-references

SKOS forbids hierarchical cycles, but real vocabularies contain them, so the traversals are defensive:

- A resource that is its own broader concept or its own member is still a root or top concept — `:A skos:member :A` does not remove `:A` from `getRootCollections`.
- Every collection returned by `getCollections` is either a root collection or reachable below one. If a group of collections is only reachable through a membership cycle, one of them is returned as a root so that none is lost.
- Traversals are guarded by a visited set and always terminate, including cyclic `rdf:rest` chains in a member list.

`src/rdf/tests/cases/valid-concept-cycle.ttl` and `valid-collection-cycle.ttl` pin this behaviour.

**Known limitations:**

- A collection identified by a blank node cannot be queried for its members, so it is always reported as a root collection.
- The "nothing is lost" guarantee above applies to collections. Concepts of a scheme whose broader relations form a *closed* cycle with no top concept have no entry point and are not reached by `getTopConcepts` or `getAllConceptsInScheme`.

## Installation

Works in Node.js (>=22) and modern browsers:

```bash
npm install @faubulous/mentor-rdf
```

## Quick Start

```typescript
import { Store, VocabularyRepository, OwlReasoner } from '@faubulous/mentor-rdf';

const graph = 'http://example.org/test';

// Create a store with OWL reasoning
const store = new Store(new OwlReasoner());

// Load an ontology
await store.loadFromTurtleStream(turtleData, graph);

// Query using repositories
const repository = new VocabularyRepository(store);

// Get all classes defined in the ontology
for (const classUri of repository.getClasses(graph)) {
  console.log(classUri);
}

// Get class hierarchy (includes inferred subclass relationships)
const subClasses = repository.getSubClasses(graph, 'http://example.org/MyClass');
```