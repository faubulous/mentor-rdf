# Mentor RDF API

A TypeScript library for working with RDF vocabularies in Node.js and browsers. It powers the [Mentor](https://github.com/faubulous/mentor-vscode) VS Code extension, providing structured access to ontologies through a repository pattern and lightweight structural reasoning.

[![License: LGPL-2.1](https://img.shields.io/badge/License-LGPL--2.1-blue.svg)](https://opensource.org/licenses/LGPL-2.1)
[![Coverage](https://img.shields.io/endpoint?url=https://faubulous.github.io/mentor-rdf/coverage-badge.json)](https://faubulous.github.io/mentor-rdf/)
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

## Installation

Works in Node.js (>=16) and modern browsers:

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