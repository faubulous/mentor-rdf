import { test, expect } from 'vitest';
import * as N3 from 'n3';
import { rdfs, owl, rdf } from '../ontologies';
import { Store } from './store';
import { OwlReasoner } from './reasoners/owl-reasoner';
import { ClassRepository } from './class-repository';
import { loadFile } from './tests/helpers';

test('equals check', () => {
  const n3 = N3.DataFactory;
  
  // Create a NamedNode using N3
  const n3Class = n3.namedNode('http://www.w3.org/2000/01/rdf-schema#Class');
  const n3Datatype = n3.namedNode('http://www.w3.org/2000/01/rdf-schema#Datatype');
  const n3Resource = n3.namedNode('http://www.w3.org/2000/01/rdf-schema#Resource');
  
  // Check equals
  console.log('n3Class.equals(rdfs.Class):', n3Class.equals(rdfs.Class));
  console.log('n3Datatype.equals(rdfs.Datatype):', n3Datatype.equals(rdfs.Datatype));
  console.log('n3Resource.equals(rdfs.Resource):', n3Resource.equals(rdfs.Resource));
  
  // Check termType
  console.log('rdfs.Class.termType:', rdfs.Class.termType);
  console.log('rdfs.Datatype.termType:', rdfs.Datatype.termType);
  console.log('rdfs.Resource.termType:', rdfs.Resource.termType);
  
  expect(n3Class.equals(rdfs.Class)).toBe(true);
  expect(n3Datatype.equals(rdfs.Datatype)).toBe(true);
  expect(n3Resource.equals(rdfs.Resource)).toBe(true);
});

test('debug inference', async () => {
  const store = new Store(new OwlReasoner());
  const repository = new ClassRepository(store);
  
  const owlGraph = await loadFile(store, 'src/rdf/tests/vocabularies/owl.ttl');
  
  // Check inferred triples for rdfs:Class
  console.log('\\nChecking rdfs:Class triples:');
  const rdfsClassTriples = [...store.matchAll(owlGraph, rdfs.Class, null, null, true)];
  for (const q of rdfsClassTriples) {
    console.log(`  ${q.subject.value} ${q.predicate.value} ${q.object.value}`);
  }
  
  // Check inferred triples for rdfs:Datatype
  console.log('\\nChecking rdfs:Datatype triples:');
  const rdfsDatatypeTriples = [...store.matchAll(owlGraph, rdfs.Datatype, null, null, true)];
  for (const q of rdfsDatatypeTriples) {
    console.log(`  ${q.subject.value} ${q.predicate.value} ${q.object.value}`);
  }
  
  // Check inferred triples for rdfs:Resource
  console.log('\\nChecking rdfs:Resource triples:');
  const rdfsResourceTriples = [...store.matchAll(owlGraph, rdfs.Resource, null, null, true)];
  for (const q of rdfsResourceTriples) {
    console.log(`  ${q.subject.value} ${q.predicate.value} ${q.object.value}`);
  }
  
  // Check all triples where rdfs:Class is the object of rdf:type
  console.log('\\nAll rdfs:Class instances (rdf:type rdfs:Class):');
  const allClassInstances = [...store.matchAll(owlGraph, null, rdf.type, rdfs.Class, true)];
  for (const q of allClassInstances) {
    console.log(`  ${q.subject.value}`);
  }
  
  // Check classes from repository
  console.log('\\nClasses from repository with includeReferenced:true:');
  const classes = [...repository.getClasses(owlGraph, { includeReferenced: true })].sort();
  for (const c of classes) {
    console.log(`  ${c}`);
  }
});

