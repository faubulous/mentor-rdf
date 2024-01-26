export const owl = `@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix grddl: <http://www.w3.org/2003/g/data-view#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://www.w3.org/2002/07/owl#> a owl:Ontology ;
     dc:title "The OWL 2 Schema vocabulary (OWL 2)" ;
     rdfs:comment """
  This ontology partially describes the built-in classes and
  properties that together form the basis of the RDF/XML syntax of OWL 2.
  The content of this ontology is based on Tables 6.1 and 6.2
  in Section 6.4 of the OWL 2 RDF-Based Semantics specification,
  available at http://www.w3.org/TR/owl2-rdf-based-semantics/.
  Please note that those tables do not include the different annotations
  (labels, comments and rdfs:isDefinedBy links) used in this file.
  Also note that the descriptions provided in this ontology do not
  provide a complete and correct formal description of either the syntax
  or the semantics of the introduced terms (please see the OWL 2
  recommendations for the complete and normative specifications).
  Furthermore, the information provided by this ontology may be
  misleading if not used with care. This ontology SHOULD NOT be imported
  into OWL ontologies. Importing this file into an OWL 2 DL ontology
  will cause it to become an OWL 2 Full ontology and may have other,
  unexpected, consequences.
   """ ;
     rdfs:isDefinedBy
          <http://www.w3.org/TR/owl2-mapping-to-rdf/>,
          <http://www.w3.org/TR/owl2-rdf-based-semantics/>,
          <http://www.w3.org/TR/owl2-syntax/> ;
     rdfs:seeAlso   <http://www.w3.org/TR/owl2-rdf-based-semantics/#table-axiomatic-classes>,
                    <http://www.w3.org/TR/owl2-rdf-based-semantics/#table-axiomatic-properties> ;
     owl:imports <http://www.w3.org/2000/01/rdf-schema> ;
     owl:versionIRI <http://www.w3.org/2002/07/owl> ;
     owl:versionInfo "$Date: 2009/11/15 10:54:12 $" ;
     grddl:namespaceTransformation <http://dev.w3.org/cvsweb/2009/owl-grddl/owx2rdf.xsl> . 


owl:AllDifferent a rdfs:Class ;
     rdfs:label "AllDifferent" ;
     rdfs:comment "The class of collections of pairwise different individuals." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:AllDisjointClasses a rdfs:Class ;
     rdfs:label "AllDisjointClasses" ;
     rdfs:comment "The class of collections of pairwise disjoint classes." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:AllDisjointProperties a rdfs:Class ;
     rdfs:label "AllDisjointProperties" ;
     rdfs:comment "The class of collections of pairwise disjoint properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:Annotation a rdfs:Class ;
     rdfs:label "Annotation" ;
     rdfs:comment "The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:AnnotationProperty a rdfs:Class ;
     rdfs:label "AnnotationProperty" ;
     rdfs:comment "The class of annotation properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdf:Property .

owl:AsymmetricProperty a rdfs:Class ;
     rdfs:label "AsymmetricProperty" ;
     rdfs:comment "The class of asymmetric properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:ObjectProperty . 

owl:Axiom a rdfs:Class ;
     rdfs:label "Axiom" ;
     rdfs:comment "The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:Class a rdfs:Class ;
     rdfs:label "Class" ;
     rdfs:comment "The class of OWL classes." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Class . 

owl:DataRange a rdfs:Class ;
     rdfs:label "DataRange" ;
     rdfs:comment "The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Datatype . 

owl:DatatypeProperty a rdfs:Class ;
     rdfs:label "DatatypeProperty" ;
     rdfs:comment "The class of data properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdf:Property . 

owl:DeprecatedClass a rdfs:Class ;
     rdfs:label "DeprecatedClass" ;
     rdfs:comment "The class of deprecated classes." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Class . 

owl:DeprecatedProperty a rdfs:Class ;
     rdfs:label "DeprecatedProperty" ;
     rdfs:comment "The class of deprecated properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdf:Property . 

owl:FunctionalProperty a rdfs:Class ;
     rdfs:label "FunctionalProperty" ;
     rdfs:comment "The class of functional properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdf:Property . 

owl:InverseFunctionalProperty a rdfs:Class ;
     rdfs:label "InverseFunctionalProperty" ;
     rdfs:comment "The class of inverse-functional properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:ObjectProperty . 

owl:IrreflexiveProperty a rdfs:Class ;
     rdfs:label "IrreflexiveProperty" ;
     rdfs:comment "The class of irreflexive properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:ObjectProperty . 

owl:NamedIndividual a rdfs:Class ;
     rdfs:label "NamedIndividual" ;
     rdfs:comment "The class of named individuals." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:Thing . 

owl:NegativePropertyAssertion a rdfs:Class ;
     rdfs:label "NegativePropertyAssertion" ;
     rdfs:comment "The class of negative property assertions." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:Nothing a owl:Class ;
     rdfs:label "Nothing" ;
     rdfs:comment "This is the empty class." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:Thing . 

owl:ObjectProperty a rdfs:Class ;
     rdfs:label "ObjectProperty" ;
     rdfs:comment "The class of object properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdf:Property . 

owl:Ontology a rdfs:Class ;
     rdfs:label "Ontology" ;
     rdfs:comment "The class of ontologies." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdfs:Resource . 

owl:OntologyProperty a rdfs:Class ;
     rdfs:label "OntologyProperty" ;
     rdfs:comment "The class of ontology properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf rdf:Property . 

owl:ReflexiveProperty a rdfs:Class ;
     rdfs:label "ReflexiveProperty" ;
     rdfs:comment "The class of reflexive properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:ObjectProperty . 

owl:Restriction a rdfs:Class ;
     rdfs:label "Restriction" ;
     rdfs:comment "The class of property restrictions." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:Class . 

owl:SymmetricProperty a rdfs:Class ;
     rdfs:label "SymmetricProperty" ;
     rdfs:comment "The class of symmetric properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:ObjectProperty . 

owl:TransitiveProperty a rdfs:Class ;
     rdfs:label "TransitiveProperty" ;
     rdfs:comment "The class of transitive properties." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:subClassOf owl:ObjectProperty . 

owl:Thing a owl:Class ;
     rdfs:label "Thing" ;
     rdfs:comment "The class of OWL individuals." ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> .
     
owl:allValuesFrom a rdf:Property ;
     rdfs:label "allValuesFrom" ;
     rdfs:comment "The property that determines the class that a universal property restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Class . 

owl:annotatedProperty a rdf:Property ;
     rdfs:label "annotatedProperty" ;
     rdfs:comment "The property that determines the predicate of an annotated axiom or annotated annotation." ;
     rdfs:domain rdfs:Resource ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource . 

owl:annotatedSource a rdf:Property ;
     rdfs:label "annotatedSource" ;
     rdfs:comment "The property that determines the subject of an annotated axiom or annotated annotation." ;
     rdfs:domain rdfs:Resource ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource . 

owl:annotatedTarget a rdf:Property ;
     rdfs:label "annotatedTarget" ;
     rdfs:comment "The property that determines the object of an annotated axiom or annotated annotation." ;
     rdfs:domain rdfs:Resource ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource . 

owl:assertionProperty a rdf:Property ;
     rdfs:label "assertionProperty" ;
     rdfs:comment "The property that determines the predicate of a negative property assertion." ;
     rdfs:domain owl:NegativePropertyAssertion ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:Property . 

owl:backwardCompatibleWith a owl:AnnotationProperty, owl:OntologyProperty ;
     rdfs:label "backwardCompatibleWith" ;
     rdfs:comment "The annotation property that indicates that a given ontology is backward compatible with another ontology." ;
     rdfs:domain owl:Ontology ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Ontology . 

owl:bottomDataProperty a owl:DatatypeProperty ;
     rdfs:label "bottomDataProperty" ;
     rdfs:comment "The data property that does not relate any individual to any data value." ;
     rdfs:domain owl:Thing ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Literal . 

owl:bottomObjectProperty a owl:ObjectProperty ;
     rdfs:label "bottomObjectProperty" ;
     rdfs:comment "The object property that does not relate any two individuals." ;
     rdfs:domain owl:Thing ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Thing . 

owl:cardinality a rdf:Property ;
     rdfs:label "cardinality" ;
     rdfs:comment "The property that determines the cardinality of an exact cardinality restriction." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range xsd:nonNegativeInteger . 

owl:complementOf a rdf:Property ;
     rdfs:label "complementOf" ;
     rdfs:comment "The property that determines that a given class is the complement of another class." ;
     rdfs:domain owl:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Class . 

owl:datatypeComplementOf a rdf:Property ;
     rdfs:label "datatypeComplementOf" ;
     rdfs:comment "The property that determines that a given data range is the complement of another data range with respect to the data domain." ;
     rdfs:domain rdfs:Datatype ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Datatype . 

owl:deprecated a owl:AnnotationProperty ;
     rdfs:label "deprecated" ;
     rdfs:comment "The annotation property that indicates that a given entity has been deprecated." ;
     rdfs:domain rdfs:Resource ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource . 

owl:differentFrom a rdf:Property ;
     rdfs:label "differentFrom" ;
     rdfs:comment "The property that determines that two given individuals are different." ;
     rdfs:domain owl:Thing ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Thing . 

owl:disjointUnionOf a rdf:Property ;
     rdfs:label "disjointUnionOf" ;
     rdfs:comment "The property that determines that a given class is equivalent to the disjoint union of a collection of other classes." ;
     rdfs:domain owl:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:disjointWith a rdf:Property ;
     rdfs:label "disjointWith" ;
     rdfs:comment "The property that determines that two given classes are disjoint." ;
     rdfs:domain owl:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Class . 

owl:distinctMembers a rdf:Property ;
     rdfs:label "distinctMembers" ;
     rdfs:comment "The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom." ;
     rdfs:domain owl:AllDifferent ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:equivalentClass a rdf:Property ;
     rdfs:label "equivalentClass" ;
     rdfs:comment "The property that determines that two given classes are equivalent, and that is used to specify datatype definitions." ;
     rdfs:domain rdfs:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Class . 

owl:equivalentProperty a rdf:Property ;
     rdfs:label "equivalentProperty" ;
     rdfs:comment "The property that determines that two given properties are equivalent." ;
     rdfs:domain rdf:Property ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:Property . 

owl:hasKey a rdf:Property ;
     rdfs:label "hasKey" ;
     rdfs:comment "The property that determines the collection of properties that jointly build a key." ;
     rdfs:domain owl:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:hasSelf a rdf:Property ;
     rdfs:label "hasSelf" ;
     rdfs:comment "The property that determines the property that a self restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource . 

owl:hasValue a rdf:Property ;
     rdfs:label "hasValue" ;
     rdfs:comment "The property that determines the individual that a has-value restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource . 

owl:imports a owl:OntologyProperty ;
     rdfs:label "imports" ;
     rdfs:comment "The property that is used for importing other ontologies into a given ontology." ;
     rdfs:domain owl:Ontology ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Ontology . 

owl:incompatibleWith a owl:AnnotationProperty, owl:OntologyProperty ;
     rdfs:label "incompatibleWith" ;
     rdfs:comment "The annotation property that indicates that a given ontology is incompatible with another ontology." ;
     rdfs:domain owl:Ontology ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Ontology . 

owl:intersectionOf a rdf:Property ;
     rdfs:label "intersectionOf" ;
     rdfs:comment "The property that determines the collection of classes or data ranges that build an intersection." ;
     rdfs:domain rdfs:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:inverseOf a rdf:Property ;
     rdfs:label "inverseOf" ;
     rdfs:comment "The property that determines that two given properties are inverse." ;
     rdfs:domain owl:ObjectProperty ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:ObjectProperty . 

owl:maxCardinality a rdf:Property ;
     rdfs:label "maxCardinality" ;
     rdfs:comment "The property that determines the cardinality of a maximum cardinality restriction." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range xsd:nonNegativeInteger . 

owl:maxQualifiedCardinality a rdf:Property ;
     rdfs:label "maxQualifiedCardinality" ;
     rdfs:comment "The property that determines the cardinality of a maximum qualified cardinality restriction." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range xsd:nonNegativeInteger . 

owl:members a rdf:Property ;
     rdfs:label "members" ;
     rdfs:comment "The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom." ;
     rdfs:domain rdfs:Resource ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:minCardinality a rdf:Property ;
     rdfs:label "minCardinality" ;
     rdfs:comment "The property that determines the cardinality of a minimum cardinality restriction." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range xsd:nonNegativeInteger . 

owl:minQualifiedCardinality a rdf:Property ;
     rdfs:label "minQualifiedCardinality" ;
     rdfs:comment "The property that determines the cardinality of a minimum qualified cardinality restriction." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range xsd:nonNegativeInteger . 

owl:onClass a rdf:Property ;
     rdfs:label "onClass" ;
     rdfs:comment "The property that determines the class that a qualified object cardinality restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Class . 

owl:onDataRange a rdf:Property ;
     rdfs:label "onDataRange" ;
     rdfs:comment "The property that determines the data range that a qualified data cardinality restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Datatype . 

owl:onDatatype a rdf:Property ;
     rdfs:label "onDatatype" ;
     rdfs:comment "The property that determines the datatype that a datatype restriction refers to." ;
     rdfs:domain rdfs:Datatype ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Datatype . 

owl:oneOf a rdf:Property ;
     rdfs:label "oneOf" ;
     rdfs:comment "The property that determines the collection of individuals or data values that build an enumeration." ;
     rdfs:domain rdfs:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:onProperties a rdf:Property ;
     rdfs:label "onProperties" ;
     rdfs:comment "The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List .

owl:onProperty a rdf:Property ;
     rdfs:label "onProperty" ;
     rdfs:comment "The property that determines the property that a property restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:Property . 

owl:priorVersion a owl:AnnotationProperty, owl:OntologyProperty ;
     rdfs:label "priorVersion" ;
     rdfs:comment "The annotation property that indicates the predecessor ontology of a given ontology." ;
     rdfs:domain owl:Ontology ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Ontology . 

owl:propertyChainAxiom a rdf:Property ;
     rdfs:label "propertyChainAxiom" ;
     rdfs:comment "The property that determines the n-tuple of properties that build a sub property chain of a given property." ;
     rdfs:domain owl:ObjectProperty ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:propertyDisjointWith a rdf:Property ;
     rdfs:label "propertyDisjointWith" ;
     rdfs:comment "The property that determines that two given properties are disjoint." ;
     rdfs:domain rdf:Property ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:Property . 

owl:qualifiedCardinality a rdf:Property ;
     rdfs:label "qualifiedCardinality" ;
     rdfs:comment "The property that determines the cardinality of an exact qualified cardinality restriction." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range xsd:nonNegativeInteger . 

owl:sameAs a rdf:Property ;
     rdfs:label "sameAs" ;
     rdfs:comment "The property that determines that two given individuals are equal." ;
     rdfs:domain owl:Thing ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Thing . 

owl:someValuesFrom a rdf:Property ;
     rdfs:label "someValuesFrom" ;
     rdfs:comment "The property that determines the class that an existential property restriction refers to." ;
     rdfs:domain owl:Restriction ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Class . 

owl:sourceIndividual a rdf:Property ;
     rdfs:label "sourceIndividual" ;
     rdfs:comment "The property that determines the subject of a negative property assertion." ;
     rdfs:domain owl:NegativePropertyAssertion ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Thing . 

owl:targetIndividual a rdf:Property ;
     rdfs:label "targetIndividual" ;
     rdfs:comment "The property that determines the object of a negative object property assertion." ;
     rdfs:domain owl:NegativePropertyAssertion ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Thing . 

owl:targetValue a rdf:Property ;
     rdfs:label "targetValue" ;
     rdfs:comment "The property that determines the value of a negative data property assertion." ;
     rdfs:domain owl:NegativePropertyAssertion ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Literal . 

owl:topDataProperty a owl:DatatypeProperty ;
     rdfs:label "topDataProperty" ;
     rdfs:comment "The data property that relates every individual to every data value." ;
     rdfs:domain owl:Thing ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Literal . 

owl:topObjectProperty a owl:ObjectProperty ;
     rdfs:label "topObjectProperty" ;
     rdfs:comment "The object property that relates every two individuals." ;
     rdfs:domain owl:Thing ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Thing . 

owl:unionOf a rdf:Property ;
     rdfs:label "unionOf" ;
     rdfs:comment "The property that determines the collection of classes or data ranges that build a union." ;
     rdfs:domain rdfs:Class ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List . 

owl:versionInfo a owl:AnnotationProperty ;
     rdfs:label "versionInfo" ;
     rdfs:comment "The annotation property that provides version information for an ontology or another OWL construct." ;
     rdfs:domain rdfs:Resource ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdfs:Resource .
     
owl:versionIRI a owl:OntologyProperty ;
     rdfs:label "versionIRI" ;
     rdfs:comment "The property that identifies the version IRI of an ontology." ;
     rdfs:domain owl:Ontology ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range owl:Ontology . 

owl:withRestrictions a rdf:Property ;
     rdfs:label "withRestrictions" ;
     rdfs:comment "The property that determines the collection of facet-value pairs that define a datatype restriction." ;
     rdfs:domain rdfs:Datatype ;
     rdfs:isDefinedBy <http://www.w3.org/2002/07/owl#> ;
     rdfs:range rdf:List .
     `;

export const rdf = `@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .

<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a owl:Ontology ;
	dc:title "The RDF Concepts Vocabulary (RDF)" ;
	dc:date "2019-12-16" ;
	dc:description "This is the RDF Schema for the RDF vocabulary terms in the RDF Namespace, defined in RDF 1.1 Concepts." .

rdf:HTML a rdfs:Datatype ;
	rdfs:subClassOf rdfs:Literal ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-html> ;
	rdfs:label "HTML" ;
	rdfs:comment "The datatype of RDF literals storing fragments of HTML content" .

rdf:langString a rdfs:Datatype ;
	rdfs:subClassOf rdfs:Literal ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal> ;
	rdfs:label "langString" ;
	rdfs:comment "The datatype of language-tagged string values" .

rdf:PlainLiteral a rdfs:Datatype ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:subClassOf rdfs:Literal ;
	rdfs:seeAlso <http://www.w3.org/TR/rdf-plain-literal/> ;
	rdfs:label "PlainLiteral" ;
	rdfs:comment "The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2" .

rdf:type a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "type" ;
	rdfs:comment "The subject is an instance of a class." ;
	rdfs:range rdfs:Class ;
	rdfs:domain rdfs:Resource .

rdf:Property a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "Property" ;
	rdfs:comment "The class of RDF properties." ;
	rdfs:subClassOf rdfs:Resource .

rdf:Statement a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "Statement" ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:comment "The class of RDF statements." .

rdf:subject a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "subject" ;
	rdfs:comment "The subject of the subject RDF statement." ;
	rdfs:domain rdf:Statement ;
	rdfs:range rdfs:Resource .

rdf:predicate a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "predicate" ;
	rdfs:comment "The predicate of the subject RDF statement." ;
	rdfs:domain rdf:Statement ;
	rdfs:range rdfs:Resource .

rdf:object a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "object" ;
	rdfs:comment "The object of the subject RDF statement." ;
	rdfs:domain rdf:Statement ;
	rdfs:range rdfs:Resource .

rdf:Bag a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "Bag" ;
	rdfs:comment "The class of unordered containers." ;
	rdfs:subClassOf rdfs:Container .

rdf:Seq a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "Seq" ;
	rdfs:comment "The class of ordered containers." ;
	rdfs:subClassOf rdfs:Container .

rdf:Alt a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "Alt" ;
	rdfs:comment "The class of containers of alternatives." ;
	rdfs:subClassOf rdfs:Container .

rdf:value a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "value" ;
	rdfs:comment "Idiomatic property used for structured values." ;
	rdfs:domain rdfs:Resource ;
	rdfs:range rdfs:Resource .

rdf:List a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "List" ;
	rdfs:comment "The class of RDF Lists." ;
	rdfs:subClassOf rdfs:Resource .

rdf:nil a rdf:List ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "nil" ;
	rdfs:comment "The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it." .

rdf:first a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "first" ;
	rdfs:comment "The first item in the subject RDF list." ;
	rdfs:domain rdf:List ;
	rdfs:range rdfs:Resource .

rdf:rest a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "rest" ;
	rdfs:comment "The rest of the subject RDF list after the first item." ;
	rdfs:domain rdf:List ;
	rdfs:range rdf:List .

rdf:XMLLiteral a rdfs:Datatype ;
	rdfs:subClassOf rdfs:Literal ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:label "XMLLiteral" ;
	rdfs:comment "The datatype of XML literal values." .

rdf:JSON a rdfs:Datatype ;
	rdfs:label "JSON" ;
	rdfs:comment "The datatype of RDF literals storing JSON content." ;
	rdfs:subClassOf rdfs:Literal ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:seeAlso <https://www.w3.org/TR/json-ld11/#the-rdf-json-datatype> .

rdf:CompoundLiteral a rdfs:Class ;
	rdfs:label "CompoundLiteral" ;
	rdfs:comment "A class representing a compound literal." ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:seeAlso <https://www.w3.org/TR/json-ld11/#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties> .

rdf:language a rdf:Property ;
	rdfs:label "language" ;
	rdfs:comment "The language component of a CompoundLiteral." ;
	rdfs:domain rdf:CompoundLiteral ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:seeAlso <https://www.w3.org/TR/json-ld11/#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties> .

rdf:direction a rdf:Property ;
	rdfs:label "direction" ;
	rdfs:comment "The base direction component of a CompoundLiteral." ;
	rdfs:domain rdf:CompoundLiteral ;
	rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ;
	rdfs:seeAlso <https://www.w3.org/TR/json-ld11/#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties> .
`;

export const rdfa = `@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfa: <http://www.w3.org/ns/rdfa#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

rdfa:PGClass a rdfs:Class,
        owl:Class;
    dcterms:description "is the top level class of the hierarchy" .

rdfa:Pattern a rdfs:Class,
        owl:Class;
    dcterms:description "Class to identify an (RDF) resource whose properties are to be copied to another resource" .

rdfa:PrefixOrTermMapping a rdfs:Class,
        owl:Class;
    dcterms:description "is the top level class for prefix or term mappings" .

rdfa: a owl:Ontology;
    dcterms:creator <http://www.ivan-herman.net/foaf#me>;
    dcterms:date "2013-01-18";
    dcterms:description "This document describes the RDFa Vocabulary for Term and Prefix Assignment. The Vocabulary is used to modify RDFa 1.1 processing behavior.";
    dcterms:publisher <http://www.w3.org/data#W3C>;
    dcterms:title "RDFa Vocabulary for Term and Prefix Assignment, and for Processor Graph Reporting";
    rdfs:isDefinedBy <http://www.w3.org/TR/rdfa-core/#s_initialcontexts>;
    owl:versionInfo "$Date: 2013-03-11 07:54:23 $" .

rdfa:DocumentError dcterms:description "error condition; to be used when the document fails to be fully processed as a result of non-conformant host language markup";
    rdfs:subClassOf rdfa:Error .

rdfa:Info dcterms:description "is the class for all informations";
    rdfs:subClassOf rdfa:PGClass .

rdfa:PrefixRedefinition dcterms:description "warning; to be used when a prefix, either from the initial context or inherited from an ancestor node, is redefined in an element";
    rdfs:subClassOf rdfa:Warning .

rdfa:UnresolvedCURIE dcterms:description "warning; to be used when a CURIE prefix fails to be resolved";
    rdfs:subClassOf rdfa:Warning .

rdfa:UnresolvedTerm dcterms:description "warning; to be used when a Term fails to be resolved";
    rdfs:subClassOf rdfa:Warning .

rdfa:VocabReferenceError dcterms:description "warning; to be used when the value of a @vocab attribute cannot be dereferenced, hence the vocabulary expansion cannot be completed";
    rdfs:subClassOf rdfa:Warning .

rdfa:context a rdf:Property,
        owl:ObjectProperty;
    dcterms:description "provides extra context for the error, eg, http response, an XPointer/XPath information, or simply the URI that created the error";
    rdfs:domain rdfa:PGClass .

rdfa:copy a rdf:Property,
        owl:ObjectProperty;
    dcterms:description "identifies the resource (i.e., pattern) whose properties and values should be copied to replace the current triple (retaining the subject of the triple)." .

rdfa:prefix a rdf:Property,
        owl:DatatypeProperty;
    dcterms:description "defines a prefix mapping for a URI; the value is supposed to be a NMTOKEN";
    rdfs:domain rdfa:PrefixMapping .

rdfa:term a rdf:Property,
        owl:DatatypeProperty;
    dcterms:description "defines a term mapping for a URI; the value is supposed to be a NMTOKEN";
    rdfs:domain rdfa:TermMapping .

rdfa:uri a rdf:Property,
        owl:DatatypeProperty;
    dcterms:description "defines the URI for either a prefix or a term mapping; the value is supposed to be an absolute URI";
    rdfs:domain rdfa:PrefixOrTermMapping .

rdfa:usesVocabulary a rdf:Property,
        owl:ObjectProperty;
    dcterms:description """provides a relationship between the host document and a vocabulary
	defined using the @vocab facility of RDFa1.1""" .

rdfa:vocabulary a rdf:Property,
        owl:DatatypeProperty;
    dcterms:description "defines an absolute URI to be used as a default vocabulary; the value is can be any string; for documentation purposes it is advised to use the string 'true' or 'True'." .

<http://www.ivan-herman.net/foaf#me> a foaf:Person;
    rdfs:seeAlso <http://www.ivan-herman.net/foaf>;
    foaf:mbox <mailto:ivan@w3.org>;
    foaf:name "Ivan Herman";
    foaf:title "Semantic Web Activity Lead";
    foaf:workplaceHomepage <http://www.w3.org> .

rdfa:Error dcterms:description "is the class for all error conditions";
    rdfs:subClassOf rdfa:PGClass .

rdfa:PrefixMapping dcterms:description "is the class for prefix mappings";
    rdfs:subClassOf rdfa:PrefixOrTermMapping .

rdfa:TermMapping dcterms:description "is the class for term mappings";
    rdfs:subClassOf rdfa:PrefixOrTermMapping .

rdfa:Warning dcterms:description "is the class for all warnings";
    rdfs:subClassOf rdfa:PGClass .


`;

export const rdfs = `@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .

<http://www.w3.org/2000/01/rdf-schema#> a owl:Ontology ;
	dc:title "The RDF Schema vocabulary (RDFS)" .

rdfs:Resource a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "Resource" ;
	rdfs:comment "The class resource, everything." .

rdfs:Class a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "Class" ;
	rdfs:comment "The class of classes." ;
	rdfs:subClassOf rdfs:Resource .

rdfs:subClassOf a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "subClassOf" ;
	rdfs:comment "The subject is a subclass of a class." ;
	rdfs:range rdfs:Class ;
	rdfs:domain rdfs:Class .

rdfs:subPropertyOf a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "subPropertyOf" ;
	rdfs:comment "The subject is a subproperty of a property." ;
	rdfs:range rdf:Property ;
	rdfs:domain rdf:Property .

rdfs:comment a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "comment" ;
	rdfs:comment "A description of the subject resource." ;
	rdfs:domain rdfs:Resource ;
	rdfs:range rdfs:Literal .

rdfs:label a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "label" ;
	rdfs:comment "A human-readable name for the subject." ;
	rdfs:domain rdfs:Resource ;
	rdfs:range rdfs:Literal .

rdfs:domain a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "domain" ;
	rdfs:comment "A domain of the subject property." ;
	rdfs:range rdfs:Class ;
	rdfs:domain rdf:Property .

rdfs:range a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "range" ;
	rdfs:comment "A range of the subject property." ;
	rdfs:range rdfs:Class ;
	rdfs:domain rdf:Property .

rdfs:seeAlso a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "seeAlso" ;
	rdfs:comment "Further information about the subject resource." ;
	rdfs:range rdfs:Resource ;
	rdfs:domain rdfs:Resource .

rdfs:isDefinedBy a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:subPropertyOf rdfs:seeAlso ;
	rdfs:label "isDefinedBy" ;
	rdfs:comment "The defininition of the subject resource." ;
	rdfs:range rdfs:Resource ;
	rdfs:domain rdfs:Resource .

rdfs:Literal a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "Literal" ;
	rdfs:comment "The class of literal values, eg. textual strings and integers." ;
	rdfs:subClassOf rdfs:Resource .

rdfs:Container a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "Container" ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:comment "The class of RDF containers." .

rdfs:ContainerMembershipProperty a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "ContainerMembershipProperty" ;
	rdfs:comment """The class of container membership properties, rdf:_1, rdf:_2, ...,
                    all of which are sub-properties of 'member'.""" ;
	rdfs:subClassOf rdf:Property .

rdfs:member a rdf:Property ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "member" ;
	rdfs:comment "A member of the subject resource." ;
	rdfs:domain rdfs:Resource ;
	rdfs:range rdfs:Resource .

rdfs:Datatype a rdfs:Class ;
	rdfs:isDefinedBy <http://www.w3.org/2000/01/rdf-schema#> ;
	rdfs:label "Datatype" ;
	rdfs:comment "The class of RDF datatypes." ;
	rdfs:subClassOf rdfs:Class .

<http://www.w3.org/2000/01/rdf-schema#> rdfs:seeAlso <http://www.w3.org/2000/01/rdf-schema-more> .
`;

export const shacl = `# W3C Shapes Constraint Language (SHACL) Vocabulary
# Version from 2017-07-20

@prefix owl:  <http://www.w3.org/2002/07/owl#> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix sh:   <http://www.w3.org/ns/shacl#> .

sh:
	a owl:Ontology ;
	rdfs:label "W3C Shapes Constraint Language (SHACL) Vocabulary"@en ;
	rdfs:comment "This vocabulary defines terms used in SHACL, the W3C Shapes Constraint Language."@en ;
	sh:declare [
		sh:prefix "sh" ;
		sh:namespace "http://www.w3.org/ns/shacl#" ;
	] ;
	sh:suggestedShapesGraph <http://www.w3.org/ns/shacl-shacl#> .


# Shapes vocabulary -----------------------------------------------------------

sh:Shape
	a rdfs:Class ;
	rdfs:label "Shape"@en ;
	rdfs:comment "A shape is a collection of constraints that may be targeted for certain nodes."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:NodeShape
	a rdfs:Class ;
	rdfs:label "Node shape"@en ;
	rdfs:comment "A node shape is a shape that specifies constraint that need to be met with respect to focus nodes."@en ;
	rdfs:subClassOf sh:Shape ;
	rdfs:isDefinedBy sh: .

sh:PropertyShape
	a rdfs:Class ;
	rdfs:label "Property shape"@en ;
	rdfs:comment "A property shape is a shape that specifies constraints on the values of a focus node for a given property or path."@en ;
	rdfs:subClassOf sh:Shape ;
	rdfs:isDefinedBy sh: .

sh:deactivated
	a rdf:Property ;
	rdfs:label "deactivated"@en ;
	rdfs:comment "If set to true then all nodes conform to this."@en ;
	# rdfs:domain sh:Shape or sh:SPARQLConstraint
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .

sh:targetClass 
	a rdf:Property ;
	rdfs:label "target class"@en ;
	rdfs:comment "Links a shape to a class, indicating that all instances of the class must conform to the shape."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range rdfs:Class ;
	rdfs:isDefinedBy sh: .

sh:targetNode 
	a rdf:Property ;
	rdfs:label "target node"@en ;
	rdfs:comment "Links a shape to individual nodes, indicating that these nodes must conform to the shape."@en ;
	rdfs:domain sh:Shape ;
	rdfs:isDefinedBy sh: .

sh:targetObjectsOf
	a rdf:Property ;
	rdfs:label "target objects of"@en ;
	rdfs:comment "Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .

sh:targetSubjectsOf
	a rdf:Property ;
	rdfs:label "target subjects of"@en ;
	rdfs:comment "Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .

sh:message
	a rdf:Property ;
	# domain: sh:Shape or sh:SPARQLConstraint or sh:SPARQLSelectValidator or sh:SPARQLAskValidator
	# range: xsd:string or rdf:langString
	rdfs:label "message"@en ;
	rdfs:comment "A human-readable message (possibly with placeholders for variables) explaining the cause of the result."@en ;
	rdfs:isDefinedBy sh: .

sh:severity
	a rdf:Property ;
	rdfs:label "severity"@en ;
	rdfs:comment "Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range sh:Severity ;
	rdfs:isDefinedBy sh: .


# Node kind vocabulary --------------------------------------------------------

sh:NodeKind
	a rdfs:Class ;
	rdfs:label "Node kind"@en ;
	rdfs:comment "The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:BlankNode
	a sh:NodeKind ;
	rdfs:label "Blank node"@en ;
	rdfs:comment "The node kind of all blank nodes."@en ;
	rdfs:isDefinedBy sh: .

sh:BlankNodeOrIRI
	a sh:NodeKind ;
	rdfs:label "Blank node or IRI"@en ;
	rdfs:comment "The node kind of all blank nodes or IRIs."@en ;
	rdfs:isDefinedBy sh: .

sh:BlankNodeOrLiteral
	a sh:NodeKind ;
	rdfs:label "Blank node or literal"@en ;
	rdfs:comment "The node kind of all blank nodes or literals."@en ;
	rdfs:isDefinedBy sh: .

sh:IRI
	a sh:NodeKind ;
	rdfs:label "IRI"@en ;
	rdfs:comment "The node kind of all IRIs."@en ;
	rdfs:isDefinedBy sh: .

sh:IRIOrLiteral
	a sh:NodeKind ;
	rdfs:label "IRI or literal"@en ;
	rdfs:comment "The node kind of all IRIs or literals."@en ;
	rdfs:isDefinedBy sh: .

sh:Literal
	a sh:NodeKind ;
	rdfs:label "Literal"@en ;
	rdfs:comment "The node kind of all literals."@en ;
	rdfs:isDefinedBy sh: .


# Results vocabulary ----------------------------------------------------------

sh:ValidationReport
	a rdfs:Class ;
	rdfs:label "Validation report"@en ;
	rdfs:comment "The class of SHACL validation reports."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:conforms
	a rdf:Property ;
	rdfs:label "conforms"@en ;
	rdfs:comment "True if the validation did not produce any validation results, and false otherwise."@en ;
	rdfs:domain sh:ValidationReport ;
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .

sh:result
	a rdf:Property ;
	rdfs:label "result"@en ;
	rdfs:comment "The validation results contained in a validation report."@en ;
	rdfs:domain sh:ValidationReport ;
	rdfs:range sh:ValidationResult ;
	rdfs:isDefinedBy sh: .

sh:shapesGraphWellFormed
	a rdf:Property ;
	rdfs:label "shapes graph well-formed"@en ;
	rdfs:comment "If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process."@en ;
	rdfs:domain sh:ValidationReport ;
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .

sh:AbstractResult
	a rdfs:Class ;
	rdfs:label "Abstract result"@en ;
	rdfs:comment "The base class of validation results, typically not instantiated directly."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:ValidationResult
	a rdfs:Class ;
	rdfs:label "Validation result"@en ;
	rdfs:comment "The class of validation results."@en ;
	rdfs:subClassOf sh:AbstractResult ;
	rdfs:isDefinedBy sh: .

sh:Severity
	a rdfs:Class ;
	rdfs:label "Severity"@en ;
	rdfs:comment "The class of validation result severity levels, including violation and warning levels."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:Info
	a sh:Severity ;
	rdfs:label "Info"@en ;
	rdfs:comment "The severity for an informational validation result."@en ;
	rdfs:isDefinedBy sh: .

sh:Violation
	a sh:Severity ;
	rdfs:label "Violation"@en ;
	rdfs:comment "The severity for a violation validation result."@en ;
	rdfs:isDefinedBy sh: .

sh:Warning
	a sh:Severity ;
	rdfs:label "Warning"@en ;
	rdfs:comment "The severity for a warning validation result."@en ;
	rdfs:isDefinedBy sh: .

sh:detail
	a rdf:Property ;
	rdfs:label "detail"@en ;
	rdfs:comment "Links a result with other results that provide more details, for example to describe violations against nested shapes."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:range sh:AbstractResult ;
	rdfs:isDefinedBy sh: .

sh:focusNode
	a rdf:Property ;
	rdfs:label "focus node"@en ;
	rdfs:comment "The focus node that was validated when the result was produced."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:isDefinedBy sh: .

sh:resultMessage
	a rdf:Property ;
	rdfs:label "result message"@en ;
	rdfs:comment "Human-readable messages explaining the cause of the result."@en ;
	rdfs:domain sh:AbstractResult ;
	# range: xsd:string or rdf:langString
	rdfs:isDefinedBy sh: .

sh:resultPath
	a rdf:Property ;
	rdfs:label "result path"@en ;
	rdfs:comment "The path of a validation result, based on the path of the validated property shape."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:resultSeverity
	a rdf:Property ;
	rdfs:label "result severity"@en ;
	rdfs:comment "The severity of the result, e.g. warning."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:range sh:Severity ;
	rdfs:isDefinedBy sh: .

sh:sourceConstraint
	a rdf:Property ;
	rdfs:label "source constraint"@en ;
	rdfs:comment "The constraint that was validated when the result was produced."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:isDefinedBy sh: .

sh:sourceShape
	a rdf:Property ;
	rdfs:label "source shape"@en ;
	rdfs:comment "The shape that is was validated when the result was produced."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:range sh:Shape ;
	rdfs:isDefinedBy sh: .

sh:sourceConstraintComponent
	a rdf:Property ;
	rdfs:label "source constraint component"@en ;
	rdfs:comment "The constraint component that is the source of the result."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:range sh:ConstraintComponent ;
	rdfs:isDefinedBy sh: .

sh:value
	a rdf:Property ;
	rdfs:label "value"@en ;
	rdfs:comment "An RDF node that has caused the result."@en ;
	rdfs:domain sh:AbstractResult ;
	rdfs:isDefinedBy sh: .

	
# Graph properties ------------------------------------------------------------

sh:shapesGraph
	a rdf:Property ;
	rdfs:label "shapes graph"@en ;
	rdfs:comment "Shapes graphs that should be used when validating this data graph."@en ;
	rdfs:domain owl:Ontology ;
	rdfs:range owl:Ontology ;
	rdfs:isDefinedBy sh: .

sh:suggestedShapesGraph
	a rdf:Property ;
	rdfs:label "suggested shapes graph"@en ;
	rdfs:comment "Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements."@en ;
	rdfs:domain owl:Ontology ;
	rdfs:range owl:Ontology ;
	rdfs:isDefinedBy sh: .

sh:entailment
	a rdf:Property ;
	rdfs:label "entailment"@en ;
	rdfs:comment "An entailment regime that indicates what kind of inferencing is required by a shapes graph."@en ;
	rdfs:domain owl:Ontology ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .


# Path vocabulary -------------------------------------------------------------

sh:path
	a rdf:Property ;
	rdfs:label "path"@en ;
	rdfs:comment "Specifies the property path of a property shape."@en ;
	rdfs:domain sh:PropertyShape ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:inversePath
	a rdf:Property ;
	rdfs:label "inverse path"@en ;
	rdfs:comment "The (single) value of this property represents an inverse path (object to subject)."@en ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:alternativePath
	a rdf:Property ;
	rdfs:label "alternative path"@en ;
	rdfs:comment "The (single) value of this property must be a list of path elements, representing the elements of alternative paths."@en ;
	rdfs:range rdf:List ;
	rdfs:isDefinedBy sh: .

sh:zeroOrMorePath
	a rdf:Property ;
	rdfs:label "zero or more path"@en ;
	rdfs:comment "The (single) value of this property represents a path that is matched zero or more times."@en ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:oneOrMorePath
	a rdf:Property ;
	rdfs:label "one or more path"@en ;
	rdfs:comment "The (single) value of this property represents a path that is matched one or more times."@en ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:zeroOrOnePath
	a rdf:Property ;
	rdfs:label "zero or one path"@en ;
	rdfs:comment "The (single) value of this property represents a path that is matched zero or one times."@en ;
	rdfs:range rdfs:Resource ;
	rdfs:isDefinedBy sh: .


# Parameters metamodel --------------------------------------------------------

sh:Parameterizable
	a rdfs:Class ;
	rdfs:label "Parameterizable"@en ;
	rdfs:comment "Superclass of components that can take parameters, especially functions and constraint components."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:parameter
	a rdf:Property ;
	rdfs:label "parameter"@en ;
	rdfs:comment "The parameters of a function or constraint component."@en ;
	rdfs:domain sh:Parameterizable ;
	rdfs:range sh:Parameter ;
	rdfs:isDefinedBy sh: .

sh:labelTemplate
	a rdf:Property ;
	rdfs:label "label template"@en ;
	rdfs:comment "Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter."@en ;
	rdfs:domain sh:Parameterizable ;
	# range: xsd:string or rdf:langString
	rdfs:isDefinedBy sh: .

sh:Parameter
	a rdfs:Class ;
	rdfs:label "Parameter"@en ;
	rdfs:comment "The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics."@en ;
	rdfs:subClassOf sh:PropertyShape ;
	rdfs:isDefinedBy sh: .

sh:optional
	a rdf:Property ;
	rdfs:label "optional"@en ;
	rdfs:comment "Indicates whether a parameter is optional."@en ;
	rdfs:domain sh:Parameter ;
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .


# Constraint components metamodel ---------------------------------------------

sh:ConstraintComponent
	a rdfs:Class ;
	rdfs:label "Constraint component"@en ;
	rdfs:comment "The class of constraint components."@en ;
	rdfs:subClassOf sh:Parameterizable ;
	rdfs:isDefinedBy sh: .

sh:validator
	a rdf:Property ;
	rdfs:label "validator"@en ;
	rdfs:comment "The validator(s) used to evaluate constraints of either node or property shapes."@en ;
	rdfs:domain sh:ConstraintComponent ;
	rdfs:range sh:Validator ;
	rdfs:isDefinedBy sh: .

sh:nodeValidator
	a rdf:Property ;
	rdfs:label "shape validator"@en ;
	rdfs:comment "The validator(s) used to evaluate a constraint in the context of a node shape."@en ;
	rdfs:domain sh:ConstraintComponent ;
	rdfs:range sh:Validator ;
	rdfs:isDefinedBy sh: .

sh:propertyValidator
	a rdf:Property ;
	rdfs:label "property validator"@en ;
	rdfs:comment "The validator(s) used to evaluate a constraint in the context of a property shape."@en ;
	rdfs:domain sh:ConstraintComponent ;
	rdfs:range sh:Validator ;
	rdfs:isDefinedBy sh: .

sh:Validator
	a rdfs:Class ;
	rdfs:label "Validator"@en ;
	rdfs:comment "The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:SPARQLAskValidator
	a rdfs:Class ;
	rdfs:label "SPARQL ASK validator"@en ;
	rdfs:comment "The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms."@en ;
	rdfs:subClassOf sh:Validator ;
	rdfs:subClassOf sh:SPARQLAskExecutable ;
	rdfs:isDefinedBy sh: .

sh:SPARQLSelectValidator
	a rdfs:Class ;
	rdfs:label "SPARQL SELECT validator"@en ;
	rdfs:comment "The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform."@en ;
	rdfs:subClassOf sh:Validator ;
	rdfs:subClassOf sh:SPARQLSelectExecutable ;
	rdfs:isDefinedBy sh: .


# Library of Core Constraint Components and their properties ------------------

sh:AndConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "And constraint component"@en ;
	rdfs:comment "A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes."@en ;
	sh:parameter sh:AndConstraintComponent-and ;
	rdfs:isDefinedBy sh: .

sh:AndConstraintComponent-and
	a sh:Parameter ;
	sh:path sh:and ;
	rdfs:isDefinedBy sh: .

sh:and
	a rdf:Property ;
	rdfs:label "and"@en ;
	rdfs:comment "RDF list of shapes to validate the value nodes against."@en ;
	rdfs:range rdf:List ;
	rdfs:isDefinedBy sh: .


sh:ClassConstraintComponent 
	a sh:ConstraintComponent ;
	rdfs:label "Class constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that each value node is an instance of a given type."@en ;
	sh:parameter sh:ClassConstraintComponent-class ;
	rdfs:isDefinedBy sh: .

sh:ClassConstraintComponent-class
	a sh:Parameter ;
	sh:path sh:class ;
	sh:nodeKind sh:IRI ;
	rdfs:isDefinedBy sh: .

sh:class
	a rdf:Property ;
	rdfs:label "class"@en ;
	rdfs:comment "The type that all value nodes must have."@en ;
	rdfs:range rdfs:Class ;
	rdfs:isDefinedBy sh: .


sh:ClosedConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Closed constraint component"@en ;
	rdfs:comment "A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path."@en ;
	sh:parameter sh:ClosedConstraintComponent-closed ;
	sh:parameter sh:ClosedConstraintComponent-ignoredProperties ;
	rdfs:isDefinedBy sh: .

sh:ClosedConstraintComponent-closed
	a sh:Parameter ; 
	sh:path sh:closed ;
	sh:datatype xsd:boolean ;
	rdfs:isDefinedBy sh: .

sh:ClosedConstraintComponent-ignoredProperties
	a sh:Parameter ;
	sh:path sh:ignoredProperties ;
	sh:optional true ;
	rdfs:isDefinedBy sh: .

sh:closed
	a rdf:Property ;
	rdfs:label "closed"@en ;
	rdfs:comment "If set to true then the shape is closed."@en ;
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .

sh:ignoredProperties
	a rdf:Property ;
	rdfs:label "ignored properties"@en ;
	rdfs:comment "An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path."@en ;
	rdfs:range rdf:List ;    # members: rdf:Property
	rdfs:isDefinedBy sh: .


sh:DatatypeConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Datatype constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the datatype of all value nodes."@en ;
	sh:parameter sh:DatatypeConstraintComponent-datatype ;
	rdfs:isDefinedBy sh: .

sh:DatatypeConstraintComponent-datatype
	a sh:Parameter ;
	sh:path sh:datatype ;
	sh:nodeKind sh:IRI ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:datatype
	a rdf:Property ;
	rdfs:label "datatype"@en ;
	rdfs:comment "Specifies an RDF datatype that all value nodes must have."@en ;
	rdfs:range rdfs:Datatype ;
	rdfs:isDefinedBy sh: .


sh:DisjointConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Disjoint constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate."@en ;
	sh:parameter sh:DisjointConstraintComponent-disjoint ;
	rdfs:isDefinedBy sh: .

sh:DisjointConstraintComponent-disjoint
	a sh:Parameter ;
	sh:path sh:disjoint ;
	sh:nodeKind sh:IRI ;
	rdfs:isDefinedBy sh: .

sh:disjoint
	a rdf:Property ;
	rdfs:label "disjoint"@en ;
	rdfs:comment "Specifies a property where the set of values must be disjoint with the value nodes."@en ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .


sh:EqualsConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Equals constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate."@en ;
	sh:parameter sh:EqualsConstraintComponent-equals ;
	rdfs:isDefinedBy sh: .

sh:EqualsConstraintComponent-equals
	a sh:Parameter ;
	sh:path sh:equals ;
	sh:nodeKind sh:IRI ;
	rdfs:isDefinedBy sh: .

sh:equals
	a rdf:Property ;
	rdfs:label "equals"@en ;
	rdfs:comment "Specifies a property that must have the same values as the value nodes."@en ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .


sh:HasValueConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Has-value constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that one of the value nodes is a given RDF node."@en ;
	sh:parameter sh:HasValueConstraintComponent-hasValue ;
	rdfs:isDefinedBy sh: .

sh:HasValueConstraintComponent-hasValue
	a sh:Parameter ;
	sh:path sh:hasValue ;
	rdfs:isDefinedBy sh: .

sh:hasValue
	a rdf:Property ;
	rdfs:label "has value"@en ;
	rdfs:comment "Specifies a value that must be among the value nodes."@en ;
	rdfs:isDefinedBy sh: .


sh:InConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "In constraint component"@en ;
	rdfs:comment "A constraint component that can be used to exclusively enumerate the permitted value nodes."@en ;
	sh:parameter sh:InConstraintComponent-in ;
	rdfs:isDefinedBy sh: .

sh:InConstraintComponent-in
	a sh:Parameter ;
	sh:path sh:in ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:in
	a rdf:Property ;
	rdfs:label "in"@en ;
	rdfs:comment "Specifies a list of allowed values so that each value node must be among the members of the given list."@en ;
	rdfs:range rdf:List ;
	rdfs:isDefinedBy sh: .


sh:LanguageInConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Language-in constraint component"@en ;
	rdfs:comment "A constraint component that can be used to enumerate language tags that all value nodes must have."@en ;
	sh:parameter sh:LanguageInConstraintComponent-languageIn ;
	rdfs:isDefinedBy sh: .

sh:LanguageInConstraintComponent-languageIn
	a sh:Parameter ;
	sh:path sh:languageIn ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:languageIn
	a rdf:Property ;
	rdfs:label "language in"@en ;
	rdfs:comment "Specifies a list of language tags that all value nodes must have."@en ;
	rdfs:range rdf:List ;   # members: xsd:string
	rdfs:isDefinedBy sh: .


sh:LessThanConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Less-than constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate."@en ;
	sh:parameter sh:LessThanConstraintComponent-lessThan ;
	rdfs:isDefinedBy sh: .

sh:LessThanConstraintComponent-lessThan
	a sh:Parameter ;
	sh:path sh:lessThan ;
	sh:nodeKind sh:IRI ;
	rdfs:isDefinedBy sh: .

sh:lessThan
	a rdf:Property ;
	rdfs:label "less than"@en ;
	rdfs:comment "Specifies a property that must have smaller values than the value nodes."@en ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .


sh:LessThanOrEqualsConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "less-than-or-equals constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate."@en ;
	sh:parameter sh:LessThanOrEqualsConstraintComponent-lessThanOrEquals ;
	rdfs:isDefinedBy sh: .

sh:LessThanOrEqualsConstraintComponent-lessThanOrEquals
	a sh:Parameter ;
	sh:path sh:lessThanOrEquals ;
	sh:nodeKind sh:IRI ;
	rdfs:isDefinedBy sh: .

sh:lessThanOrEquals
	a rdf:Property ;
	rdfs:label "less than or equals"@en ;
	rdfs:comment "Specifies a property that must have smaller or equal values than the value nodes."@en ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .


sh:MaxCountConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Max-count constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the maximum number of value nodes."@en ;
	sh:parameter sh:MaxCountConstraintComponent-maxCount ;
	rdfs:isDefinedBy sh: .

sh:MaxCountConstraintComponent-maxCount
	a sh:Parameter ;
	sh:path sh:maxCount ;
	sh:datatype xsd:integer ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:maxCount
	a rdf:Property ;
	rdfs:label "max count"@en ;
	rdfs:comment "Specifies the maximum number of values in the set of value nodes."@en ;
	rdfs:range xsd:integer ;
	rdfs:isDefinedBy sh: .


sh:MaxExclusiveConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Max-exclusive constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value."@en ;
	sh:parameter sh:MaxExclusiveConstraintComponent-maxExclusive ;
	rdfs:isDefinedBy sh: .

sh:MaxExclusiveConstraintComponent-maxExclusive
	a sh:Parameter ;
	sh:path sh:maxExclusive ;
	sh:maxCount 1 ;
	sh:nodeKind sh:Literal ;
	rdfs:isDefinedBy sh: .

sh:maxExclusive
	a rdf:Property ;
	rdfs:label "max exclusive"@en ;
	rdfs:comment "Specifies the maximum exclusive value of each value node."@en ;
	rdfs:isDefinedBy sh: .


sh:MaxInclusiveConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Max-inclusive constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value."@en ;
	sh:parameter sh:MaxInclusiveConstraintComponent-maxInclusive ;
	rdfs:isDefinedBy sh: .

sh:MaxInclusiveConstraintComponent-maxInclusive
	a sh:Parameter ;
	sh:path sh:maxInclusive ;
	sh:maxCount 1 ;
	sh:nodeKind sh:Literal ;
	rdfs:isDefinedBy sh: .

sh:maxInclusive
	a rdf:Property ;
	rdfs:label "max inclusive"@en ;
	rdfs:comment "Specifies the maximum inclusive value of each value node."@en ;
	rdfs:isDefinedBy sh: .


sh:MaxLengthConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Max-length constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the maximum string length of value nodes."@en ;
	sh:parameter sh:MaxLengthConstraintComponent-maxLength ;
	rdfs:isDefinedBy sh: .

sh:MaxLengthConstraintComponent-maxLength
	a sh:Parameter ;
	sh:path sh:maxLength ;
	sh:datatype xsd:integer ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:maxLength
	a rdf:Property ;
	rdfs:label "max length"@en ;
	rdfs:comment "Specifies the maximum string length of each value node."@en ;
	rdfs:range xsd:integer ;
	rdfs:isDefinedBy sh: .


sh:MinCountConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Min-count constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the minimum number of value nodes."@en ;
	sh:parameter sh:MinCountConstraintComponent-minCount ;
	rdfs:isDefinedBy sh: .

sh:MinCountConstraintComponent-minCount
	a sh:Parameter ;
	sh:path sh:minCount ;
	sh:datatype xsd:integer ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:minCount
	a rdf:Property ;
	rdfs:label "min count"@en ;
	rdfs:comment "Specifies the minimum number of values in the set of value nodes."@en ;
	rdfs:range xsd:integer ;
	rdfs:isDefinedBy sh: .


sh:MinExclusiveConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Min-exclusive constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value."@en ;
	sh:parameter sh:MinExclusiveConstraintComponent-minExclusive ;
	rdfs:isDefinedBy sh: .

sh:MinExclusiveConstraintComponent-minExclusive
	a sh:Parameter ;
	sh:path sh:minExclusive ;
	sh:maxCount 1 ;
	sh:nodeKind sh:Literal ;
	rdfs:isDefinedBy sh: .

sh:minExclusive
	a rdf:Property ;
	rdfs:label "min exclusive"@en ;
	rdfs:comment "Specifies the minimum exclusive value of each value node."@en ;
	rdfs:isDefinedBy sh: .


sh:MinInclusiveConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Min-inclusive constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value."@en ;
	sh:parameter sh:MinInclusiveConstraintComponent-minInclusive ;
	rdfs:isDefinedBy sh: .

sh:MinInclusiveConstraintComponent-minInclusive
	a sh:Parameter ;
	sh:path sh:minInclusive ;
	sh:maxCount 1 ;
	sh:nodeKind sh:Literal ;
	rdfs:isDefinedBy sh: .

sh:minInclusive
	a rdf:Property ;
	rdfs:label "min inclusive"@en ;
	rdfs:comment "Specifies the minimum inclusive value of each value node."@en ;
	rdfs:isDefinedBy sh: .


sh:MinLengthConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Min-length constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the minimum string length of value nodes."@en ;
	sh:parameter sh:MinLengthConstraintComponent-minLength ;
	rdfs:isDefinedBy sh: .

sh:MinLengthConstraintComponent-minLength
	a sh:Parameter ;
	sh:path sh:minLength ;
	sh:datatype xsd:integer ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:minLength
	a rdf:Property ;
	rdfs:label "min length"@en ;
	rdfs:comment "Specifies the minimum string length of each value node."@en ;
	rdfs:range xsd:integer ;
	rdfs:isDefinedBy sh: .


sh:NodeConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Node constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that all value nodes conform to the given node shape."@en ;
	sh:parameter sh:NodeConstraintComponent-node ;
	rdfs:isDefinedBy sh: .

sh:NodeConstraintComponent-node
	a sh:Parameter ;
	sh:path sh:node ;
	rdfs:isDefinedBy sh: .

sh:node
	a rdf:Property ;
	rdfs:label "node"@en ;
	rdfs:comment "Specifies the node shape that all value nodes must conform to."@en ;
	rdfs:range sh:NodeShape ;
	rdfs:isDefinedBy sh: .


sh:NodeKindConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Node-kind constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the RDF node kind of each value node."@en ;
	sh:parameter sh:NodeKindConstraintComponent-nodeKind ;
	rdfs:isDefinedBy sh: .

sh:NodeKindConstraintComponent-nodeKind
	a sh:Parameter ;
	sh:path sh:nodeKind ;
	sh:in ( sh:BlankNode sh:IRI sh:Literal sh:BlankNodeOrIRI sh:BlankNodeOrLiteral sh:IRIOrLiteral ) ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:nodeKind
	a rdf:Property ;
	rdfs:label "node kind"@en ;
	rdfs:comment "Specifies the node kind (e.g. IRI or literal) each value node."@en ;
	rdfs:range sh:NodeKind ;
	rdfs:isDefinedBy sh: .


sh:NotConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Not constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that value nodes do not conform to a given shape."@en ;
	sh:parameter sh:NotConstraintComponent-not ;
	rdfs:isDefinedBy sh: .

sh:NotConstraintComponent-not
	a sh:Parameter ;
	sh:path sh:not ;
	rdfs:isDefinedBy sh: .

sh:not
	a rdf:Property ;
	rdfs:label "not"@en ;
	rdfs:comment "Specifies a shape that the value nodes must not conform to."@en ;
	rdfs:range sh:Shape ;
	rdfs:isDefinedBy sh: .


sh:OrConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Or constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes."@en ;
	sh:parameter sh:OrConstraintComponent-or ;
	rdfs:isDefinedBy sh: .

sh:OrConstraintComponent-or
	a sh:Parameter ;
	sh:path sh:or ;
	rdfs:isDefinedBy sh: .

sh:or
	a rdf:Property ;
	rdfs:label "or"@en ;
	rdfs:comment "Specifies a list of shapes so that the value nodes must conform to at least one of the shapes."@en ;
	rdfs:range rdf:List ;    # members: sh:Shape ;
	rdfs:isDefinedBy sh: .


sh:PatternConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Pattern constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that every value node matches a given regular expression."@en ;
	sh:parameter sh:PatternConstraintComponent-pattern ;
	sh:parameter sh:PatternConstraintComponent-flags ;
	rdfs:isDefinedBy sh: .

sh:PatternConstraintComponent-pattern
	a sh:Parameter ;
	sh:path sh:pattern ;
	sh:datatype xsd:string ;
	rdfs:isDefinedBy sh: .

sh:PatternConstraintComponent-flags
	a sh:Parameter ;
	sh:path sh:flags ;
	sh:datatype xsd:string ;
	sh:optional true ;
	rdfs:isDefinedBy sh: .

sh:flags
	a rdf:Property ;
	rdfs:label "flags"@en ;
	rdfs:comment "An optional flag to be used with regular expression pattern matching."@en ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

sh:pattern
	a rdf:Property ;
	rdfs:label "pattern"@en ;
	rdfs:comment "Specifies a regular expression pattern that the string representations of the value nodes must match."@en ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .


sh:PropertyConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Property constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that all value nodes conform to the given property shape."@en ;
	sh:parameter sh:PropertyConstraintComponent-property ;
	rdfs:isDefinedBy sh: .

sh:PropertyConstraintComponent-property
	a sh:Parameter ;
	sh:path sh:property ;
	rdfs:isDefinedBy sh: .

sh:property
	a rdf:Property ;
	rdfs:label "property"@en ;
	rdfs:comment "Links a shape to its property shapes."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range sh:PropertyShape ;
	rdfs:isDefinedBy sh: .


sh:QualifiedMaxCountConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Qualified-max-count constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape."@en ;
	sh:parameter sh:QualifiedMaxCountConstraintComponent-qualifiedMaxCount ;
	sh:parameter sh:QualifiedMaxCountConstraintComponent-qualifiedValueShape ;
	sh:parameter sh:QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint ;
	rdfs:isDefinedBy sh: .

sh:QualifiedMaxCountConstraintComponent-qualifiedMaxCount
	a sh:Parameter ;
	sh:path sh:qualifiedMaxCount ;
	sh:datatype xsd:integer ;
	rdfs:isDefinedBy sh: .

sh:QualifiedMaxCountConstraintComponent-qualifiedValueShape
	a sh:Parameter ;
	sh:path sh:qualifiedValueShape ;
	rdfs:isDefinedBy sh: .

sh:QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint
	a sh:Parameter ;
	sh:path sh:qualifiedValueShapesDisjoint ;
	sh:datatype xsd:boolean ;
	sh:optional true ;
	rdfs:isDefinedBy sh: .


sh:QualifiedMinCountConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Qualified-min-count constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape."@en ;
	sh:parameter sh:QualifiedMinCountConstraintComponent-qualifiedMinCount ;
	sh:parameter sh:QualifiedMinCountConstraintComponent-qualifiedValueShape ;
	sh:parameter sh:QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint ;
	rdfs:isDefinedBy sh: .

sh:QualifiedMinCountConstraintComponent-qualifiedMinCount
	a sh:Parameter ;
	sh:path sh:qualifiedMinCount ;
	sh:datatype xsd:integer ;
	rdfs:isDefinedBy sh: .

sh:QualifiedMinCountConstraintComponent-qualifiedValueShape
	a sh:Parameter ;
	sh:path sh:qualifiedValueShape ;
	rdfs:isDefinedBy sh: .

sh:QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint
	a sh:Parameter ;
	sh:path sh:qualifiedValueShapesDisjoint ;
	sh:datatype xsd:boolean ;
	sh:optional true ;
	rdfs:isDefinedBy sh: .

sh:qualifiedMaxCount
	a rdf:Property ;
	rdfs:label "qualified max count"@en ;
	rdfs:comment "The maximum number of value nodes that can conform to the shape."@en ;
	rdfs:range xsd:integer ;
	rdfs:isDefinedBy sh: .

sh:qualifiedMinCount
	a rdf:Property ;
	rdfs:label "qualified min count"@en ;
	rdfs:comment "The minimum number of value nodes that must conform to the shape."@en ;
	rdfs:range xsd:integer ;
	rdfs:isDefinedBy sh: .

sh:qualifiedValueShape
	a rdf:Property ;
	rdfs:label "qualified value shape"@en ;
	rdfs:comment "The shape that a specified number of values must conform to."@en ;
	rdfs:range sh:Shape ;
	rdfs:isDefinedBy sh: .
	
sh:qualifiedValueShapesDisjoint
	a rdf:Property ;
	rdfs:label "qualified value shapes disjoint"@en ;
	rdfs:comment "Can be used to mark the qualified value shape to be disjoint with its sibling shapes."@en ;
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .


sh:UniqueLangConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Unique-languages constraint component"@en ;
	rdfs:comment "A constraint component that can be used to specify that no pair of value nodes may use the same language tag."@en ;
	sh:parameter sh:UniqueLangConstraintComponent-uniqueLang ;
	rdfs:isDefinedBy sh: .

sh:UniqueLangConstraintComponent-uniqueLang
	a sh:Parameter ;
	sh:path sh:uniqueLang ;
	sh:datatype xsd:boolean ;
	sh:maxCount 1 ;
	rdfs:isDefinedBy sh: .

sh:uniqueLang
	a rdf:Property ;
	rdfs:label "unique languages"@en ;
	rdfs:comment "Specifies whether all node values must have a unique (or no) language tag."@en ;
	rdfs:range xsd:boolean ;
	rdfs:isDefinedBy sh: .


sh:XoneConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Exactly one constraint component"@en ;
	rdfs:comment "A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes."@en ;
	sh:parameter sh:XoneConstraintComponent-xone ;
	rdfs:isDefinedBy sh: .

sh:XoneConstraintComponent-xone
	a sh:Parameter ;
	sh:path sh:xone ;
	rdfs:isDefinedBy sh: .

sh:xone
	a rdf:Property ;
	rdfs:label "exactly one"@en ;
	rdfs:comment "Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes."@en ;
	rdfs:range rdf:List ;    # members: sh:Shape ;
	rdfs:isDefinedBy sh: .


# General SPARQL execution support --------------------------------------------

sh:SPARQLExecutable
	a rdfs:Class ;
	rdfs:label "SPARQL executable"@en ;
	rdfs:comment "The class of resources that encapsulate a SPARQL query."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:SPARQLAskExecutable
	a rdfs:Class ;
	rdfs:label "SPARQL ASK executable"@en ;
	rdfs:comment "The class of SPARQL executables that are based on an ASK query."@en ;
	rdfs:subClassOf sh:SPARQLExecutable ;
	rdfs:isDefinedBy sh: .

sh:ask
	a rdf:Property ;
	rdfs:label "ask"@en ;
	rdfs:comment "The SPARQL ASK query to execute."@en ;
	rdfs:domain sh:SPARQLAskExecutable ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

sh:SPARQLConstructExecutable
	a rdfs:Class ;
	rdfs:label "SPARQL CONSTRUCT executable"@en ;
	rdfs:comment "The class of SPARQL executables that are based on a CONSTRUCT query."@en ;
	rdfs:subClassOf sh:SPARQLExecutable ;
	rdfs:isDefinedBy sh: .

sh:construct
	a rdf:Property ;
	rdfs:label "construct"@en ;
	rdfs:comment "The SPARQL CONSTRUCT query to execute."@en ;
	rdfs:domain sh:SPARQLConstructExecutable ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

sh:SPARQLSelectExecutable
	a rdfs:Class ;
	rdfs:label "SPARQL SELECT executable"@en ;
	rdfs:comment "The class of SPARQL executables based on a SELECT query."@en ;
	rdfs:subClassOf sh:SPARQLExecutable ;
	rdfs:isDefinedBy sh: .

sh:select
	a rdf:Property ;
	rdfs:label "select"@en ;
	rdfs:comment "The SPARQL SELECT query to execute."@en ;
	rdfs:range xsd:string ;
	rdfs:domain sh:SPARQLSelectExecutable ;
	rdfs:isDefinedBy sh: .

sh:SPARQLUpdateExecutable
	a rdfs:Class ;
	rdfs:label "SPARQL UPDATE executable"@en ;
	rdfs:comment "The class of SPARQL executables based on a SPARQL UPDATE."@en ;
	rdfs:subClassOf sh:SPARQLExecutable ;
	rdfs:isDefinedBy sh: .

sh:update
	a rdf:Property ;
	rdfs:label "update"@en ;
	rdfs:comment "The SPARQL UPDATE to execute."@en ;
	rdfs:domain sh:SPARQLUpdateExecutable ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

sh:prefixes
	a rdf:Property ;
	rdfs:label "prefixes"@en ;
	rdfs:comment "The prefixes that shall be applied before parsing the associated SPARQL query."@en ;
	rdfs:domain sh:SPARQLExecutable ;
	rdfs:range owl:Ontology ;
	rdfs:isDefinedBy sh: .

sh:PrefixDeclaration
	a rdfs:Class ;
	rdfs:label "Prefix declaration"@en ;
	rdfs:comment "The class of prefix declarations, consisting of pairs of a prefix with a namespace."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:declare
	a rdf:Property ;
	rdfs:label "declare"@en ;
	rdfs:comment "Links a resource with its namespace prefix declarations."@en ;
	rdfs:domain owl:Ontology ;
	rdfs:range sh:PrefixDeclaration ;
	rdfs:isDefinedBy sh: .

sh:prefix
	a rdf:Property ;
	rdfs:label "prefix"@en ;
	rdfs:comment "The prefix of a prefix declaration."@en ;
	rdfs:domain sh:PrefixDeclaration ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

sh:namespace
	a rdf:Property ;
	rdfs:label "namespace"@en ;
	rdfs:comment "The namespace associated with a prefix in a prefix declaration."@en ;
	rdfs:domain sh:PrefixDeclaration ;
	rdfs:range xsd:anyURI ;
	rdfs:isDefinedBy sh: .
	

# SPARQL-based Constraints support --------------------------------------------

sh:SPARQLConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "SPARQL constraint component"@en ;
	rdfs:comment "A constraint component that can be used to define constraints based on SPARQL queries."@en ;
	sh:parameter sh:SPARQLConstraintComponent-sparql ;
	rdfs:isDefinedBy sh: .

sh:SPARQLConstraintComponent-sparql
	a sh:Parameter ;
	sh:path sh:sparql ;
	rdfs:isDefinedBy sh: .

sh:sparql
	a rdf:Property ;
	rdfs:label "constraint (in SPARQL)"@en ;
	rdfs:comment "Links a shape with SPARQL constraints."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range sh:SPARQLConstraint ;
	rdfs:isDefinedBy sh: .

sh:SPARQLConstraint
	a rdfs:Class ;
	rdfs:label "SPARQL constraint"@en ;
	rdfs:comment "The class of constraints based on SPARQL SELECT queries."@en ;
	rdfs:subClassOf sh:SPARQLSelectExecutable ;
	rdfs:isDefinedBy sh: .


# Non-validating constraint properties ----------------------------------------

sh:defaultValue
	a rdf:Property ;
	rdfs:label "default value"@en ;
	rdfs:comment "A default value for a property, for example for user interface tools to pre-populate input fields."@en ;
	rdfs:domain sh:PropertyShape ;
	rdfs:isDefinedBy sh: .

sh:description
	a rdf:Property ;
	rdfs:label "description"@en ;
	rdfs:comment "Human-readable descriptions for the property in the context of the surrounding shape."@en ;
	rdfs:domain sh:PropertyShape ;
	# range: xsd:string or rdf:langString
	rdfs:isDefinedBy sh: .

sh:group
	a rdf:Property ;
	rdfs:label "group"@en ;
	rdfs:comment "Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes."@en ;
	rdfs:domain sh:PropertyShape ;
	rdfs:range sh:PropertyGroup ;
	rdfs:isDefinedBy sh: .

sh:name
	a rdf:Property ;
	rdfs:label "name"@en ;
	rdfs:comment "Human-readable labels for the property in the context of the surrounding shape."@en ;
	rdfs:domain sh:PropertyShape ;
	# range: xsd:string or rdf:langString
	rdfs:isDefinedBy sh: .

sh:order
	a rdf:Property ;
	rdfs:label "order"@en ;
	rdfs:comment "Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second."@en ;
	# range: xsd:decimal or xsd:integer ;
	rdfs:isDefinedBy sh: .

sh:PropertyGroup
	a rdfs:Class ;
	rdfs:label "Property group"@en ;
	rdfs:comment "Instances of this class represent groups of property shapes that belong together."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .


# -----------------------------------------------------------------------------
# SHACL ADVANCED FEATURES -----------------------------------------------------
# -----------------------------------------------------------------------------
	

# Advanced Target vocabulary --------------------------------------------------

sh:target
	a rdf:Property ;
	rdfs:label "target"@en ;
	rdfs:comment "Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range sh:Target ;
	rdfs:isDefinedBy sh: .

sh:Target
	a rdfs:Class ;
	rdfs:label "Target"@en ;
	rdfs:comment "The base class of targets such as those based on SPARQL queries."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:TargetType
	a rdfs:Class ;
	rdfs:label "Target type"@en ;
	rdfs:comment "The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property."@en ;
	rdfs:subClassOf rdfs:Class ;
	rdfs:subClassOf sh:Parameterizable ;
	rdfs:isDefinedBy sh: .

sh:SPARQLTarget
	a rdfs:Class ;
	rdfs:label "SPARQL target"@en ;
	rdfs:comment "The class of targets that are based on SPARQL queries."@en ;
	rdfs:subClassOf sh:Target ;
	rdfs:subClassOf sh:SPARQLAskExecutable ;
	rdfs:subClassOf sh:SPARQLSelectExecutable ;
	rdfs:isDefinedBy sh: .

sh:SPARQLTargetType
	a rdfs:Class ;
	rdfs:label "SPARQL target type"@en ;
	rdfs:comment "The (meta) class for parameterizable targets that are based on SPARQL queries."@en ;
	rdfs:subClassOf sh:TargetType ;
	rdfs:subClassOf sh:SPARQLAskExecutable ;
	rdfs:subClassOf sh:SPARQLSelectExecutable ;
	rdfs:isDefinedBy sh: .


# Functions Vocabulary --------------------------------------------------------

sh:Function
	a rdfs:Class ;
	rdfs:label "Function"@en ;
	rdfs:comment "The class of SHACL functions."@en ;
	rdfs:subClassOf sh:Parameterizable ;
	rdfs:isDefinedBy sh: .

sh:returnType
	a rdf:Property ;
	rdfs:label "return type"@en ;
	rdfs:comment "The expected type of values returned by the associated function."@en ;
	rdfs:domain sh:Function ;
	rdfs:range rdfs:Class ;
	rdfs:isDefinedBy sh: .

sh:SPARQLFunction
	a rdfs:Class ;
	rdfs:label "SPARQL function"@en ;
	rdfs:comment "A function backed by a SPARQL query - either ASK or SELECT."@en ;
	rdfs:subClassOf sh:Function ;
	rdfs:subClassOf sh:SPARQLAskExecutable ;
	rdfs:subClassOf sh:SPARQLSelectExecutable ;
	rdfs:isDefinedBy sh: .


# Result Annotations ----------------------------------------------------------

sh:resultAnnotation
	a rdf:Property ;
	rdfs:label "result annotation"@en ;
	rdfs:comment "Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query."@en ;
	rdfs:domain sh:SPARQLSelectValidator ;
	rdfs:range sh:ResultAnnotation ;
	rdfs:isDefinedBy sh: .

sh:ResultAnnotation
	a rdfs:Class ;
	rdfs:label "Result annotation"@en ;
	rdfs:comment "A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:annotationProperty
	a rdf:Property ;
	rdfs:label "annotation property"@en ;
	rdfs:comment "The annotation property that shall be set."@en ;
	rdfs:domain sh:ResultAnnotation ;
	rdfs:range rdf:Property ;
	rdfs:isDefinedBy sh: .

sh:annotationValue
	a rdf:Property ;
	rdfs:label "annotation value"@en ;
	rdfs:comment "The (default) values of the annotation property."@en ;
	rdfs:domain sh:ResultAnnotation ;
	rdfs:isDefinedBy sh: .

sh:annotationVarName
	a rdf:Property ;
	rdfs:label "annotation variable name"@en ;
	rdfs:comment "The name of the SPARQL variable from the SELECT clause that shall be used for the values."@en ;
	rdfs:domain sh:ResultAnnotation ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

	
# Node Expressions ------------------------------------------------------------

sh:this
	a rdfs:Resource ;
	rdfs:label "this"@en ;
	rdfs:comment "A node expression that represents the current focus node."@en ;
	rdfs:isDefinedBy sh: .

sh:filterShape
	a rdf:Property ;
	rdfs:label "filter shape"@en ;
	rdfs:comment "The shape that all input nodes of the expression need to conform to."@en ;
	rdfs:range sh:Shape ;
	rdfs:isDefinedBy sh: .

sh:nodes
	a rdf:Property ;
	rdfs:label "nodes"@en ;
	rdfs:comment "The node expression producing the input nodes of a filter shape expression."@en ;
	rdfs:isDefinedBy sh: .

sh:intersection
	a rdf:Property ;
	rdfs:label "intersection"@en ;
	rdfs:comment "A list of node expressions that shall be intersected."@en ;
	rdfs:isDefinedBy sh: .

sh:union
	a rdf:Property ;
	rdfs:label "union"@en ;
	rdfs:comment "A list of node expressions that shall be used together."@en ;
	rdfs:isDefinedBy sh: .


# Expression Constraints ------------------------------------------------------

sh:ExpressionConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "Expression constraint component"@en ;
	rdfs:comment "A constraint component that can be used to verify that a given node expression produces true for all value nodes."@en ;
	sh:parameter sh:ExpressionConstraintComponent-expression ;
	rdfs:isDefinedBy sh: .

sh:ExpressionConstraintComponent-expression
	a sh:Parameter ;
	sh:path sh:expression ;
	rdfs:isDefinedBy sh: .

sh:expression
	a rdf:Property ;
	rdfs:label "expression"@en ;
	rdfs:comment "The node expression that must return true for the value nodes."@en ;
	rdfs:isDefinedBy sh: .


# Rules -----------------------------------------------------------------------

sh:Rule
	a rdfs:Class ;
	rdfs:label "Rule"@en ;
	rdfs:comment "The class of SHACL rules. Never instantiated directly."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:rule
	a rdf:Property ;
	rdfs:label "rule"@en ;
	rdfs:comment "The rules linked to a shape."@en ;
	rdfs:domain sh:Shape ;
	rdfs:range sh:Rule ;
	rdfs:isDefinedBy sh:  .

sh:condition
	a rdf:Property ;
	rdfs:label "condition"@en ;
	rdfs:comment "The shapes that the focus nodes need to conform to before a rule is executed on them."@en ;
	rdfs:domain sh:Rule ;
	rdfs:range sh:Shape ;
	rdfs:isDefinedBy sh: .

sh:TripleRule
	a rdfs:Class ;
	rdfs:label "A rule based on triple (subject, predicate, object) pattern."@en ;
	rdfs:subClassOf sh:Rule ;
	rdfs:isDefinedBy sh: .

sh:subject
	a rdf:Property ;
	rdfs:label "subject"@en ;
	rdfs:comment "An expression producing the resources that shall be inferred as subjects."@en ;
	rdfs:domain sh:TripleRule ;
	rdfs:isDefinedBy sh: .

sh:predicate
	a rdf:Property ;
	rdfs:label "predicate"@en ;
	rdfs:comment "An expression producing the properties that shall be inferred as predicates."@en ;
	rdfs:domain sh:TripleRule ;
	rdfs:isDefinedBy sh: .

sh:object
	a rdf:Property ;
	rdfs:label "object"@en ;
	rdfs:comment "An expression producing the nodes that shall be inferred as objects."@en ;
	rdfs:domain sh:TripleRule ;
	rdfs:isDefinedBy sh: .

sh:SPARQLRule
	a rdfs:Class ;
	rdfs:label "SPARQL CONSTRUCT rule"@en ;
	rdfs:comment "The class of SHACL rules based on SPARQL CONSTRUCT queries."@en ;
	rdfs:subClassOf sh:Rule ;
	rdfs:subClassOf sh:SPARQLConstructExecutable ;
	rdfs:isDefinedBy sh: .


# SHACL-JS --------------------------------------------------------------------

sh:JSExecutable
	a rdfs:Class ;
	rdfs:label "JavaScript executable"@en ;
	rdfs:comment "Abstract base class of resources that declare an executable JavaScript."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:JSTarget
	a rdfs:Class ;
	rdfs:label "JavaScript target"@en ;
	rdfs:comment "The class of targets that are based on JavaScript functions."@en ;
	rdfs:subClassOf sh:Target ;
	rdfs:subClassOf sh:JSExecutable ;
	rdfs:isDefinedBy sh: .

sh:JSTargetType
	a rdfs:Class ;
	rdfs:label "JavaScript target type"@en ;
	rdfs:comment "The (meta) class for parameterizable targets that are based on JavaScript functions."@en ;
	rdfs:subClassOf sh:TargetType ;
	rdfs:subClassOf sh:JSExecutable ;
	rdfs:isDefinedBy sh: .

sh:JSConstraint
	a rdfs:Class ;
	rdfs:label "JavaScript-based constraint"@en ;
	rdfs:comment "The class of constraints backed by a JavaScript function."@en ;
	rdfs:subClassOf sh:JSExecutable ;
	rdfs:isDefinedBy sh: .
	
sh:JSConstraintComponent
	a sh:ConstraintComponent ;
	rdfs:label "JavaScript constraint component"@en ;
	rdfs:comment "A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script."@en ;
  	sh:parameter sh:JSConstraint-js ;
	rdfs:isDefinedBy sh: .
 
sh:JSConstraint-js
	a sh:Parameter ;
	sh:path sh:js ;
	rdfs:isDefinedBy sh: .
	
sh:js
	a rdf:Property ;
	rdfs:label "JavaScript constraint"@en ;
	rdfs:comment "Constraints expressed in JavaScript." ;
  	rdfs:range sh:JSConstraint ;
	rdfs:isDefinedBy sh: .

sh:jsFunctionName
	a rdf:Property ;
	rdfs:label "JavaScript function name"@en ;
	rdfs:comment "The name of the JavaScript function to execute."@en ;
	rdfs:domain sh:JSExecutable ;
	rdfs:range xsd:string ;
	rdfs:isDefinedBy sh: .

sh:jsLibrary
	a rdf:Property ;
	rdfs:label "JavaScript library"@en ;
  	rdfs:comment "Declares which JavaScript libraries are needed to execute this."@en ;
	rdfs:range sh:JSLibrary ;
	rdfs:isDefinedBy sh: .

sh:jsLibraryURL
	a rdf:Property ;
	rdfs:label "JavaScript library URL"@en ;
	rdfs:comment "Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files."@en ;
	rdfs:domain sh:JSLibrary ;
	rdfs:range xsd:anyURI ;
	rdfs:isDefinedBy sh: .
	
sh:JSFunction
	a rdfs:Class ;
  	rdfs:label "JavaScript function"@en ;
	rdfs:comment "The class of SHACL functions that execute a JavaScript function when called."@en ;
	rdfs:subClassOf sh:Function ;
	rdfs:subClassOf sh:JSExecutable ;
	rdfs:isDefinedBy sh: .

sh:JSLibrary
	a rdfs:Class ;
	rdfs:label "JavaScript library"@en ;
	rdfs:comment "Represents a JavaScript library, typically identified by one or more URLs of files to include."@en ;
	rdfs:subClassOf rdfs:Resource ;
	rdfs:isDefinedBy sh: .

sh:JSRule
	a rdfs:Class ;
	rdfs:label "JavaScript rule"@en ;
	rdfs:comment "The class of SHACL rules expressed using JavaScript."@en ;
	rdfs:subClassOf sh:JSExecutable ;
	rdfs:subClassOf sh:Rule ;
	rdfs:isDefinedBy sh: .

sh:JSValidator
	a rdfs:Class ;
  	rdfs:label "JavaScript validator"@en ;
	rdfs:comment "A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used."@en ;
  	rdfs:subClassOf sh:JSExecutable ;
  	rdfs:subClassOf sh:Validator ;
  	rdfs:isDefinedBy sh: .
`;

export const skos = `@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

<http://www.w3.org/2004/02/skos/core>
  a owl:Ontology ;
  dc:title "SKOS Vocabulary"@en ;
  dc:contributor "Dave Beckett", "Nikki Rogers", "Participants in W3C's Semantic Web Deployment Working Group." ;
  dc:description "An RDF vocabulary for describing the basic structure and content of concept schemes such as thesauri, classification schemes, subject heading lists, taxonomies, 'folksonomies', other types of controlled vocabulary, and also concept schemes embedded in glossaries and terminologies."@en ;
  dc:creator "Alistair Miles", "Sean Bechhofer" ;
  rdfs:seeAlso <http://www.w3.org/TR/skos-reference/> .

skos:Concept
  rdfs:label "Concept"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "An idea or notion; a unit of thought."@en ;
  a owl:Class .

skos:ConceptScheme
  rdfs:label "Concept Scheme"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A set of concepts, optionally including statements about semantic relationships between those concepts."@en ;
  skos:scopeNote "A concept scheme may be defined to include concepts from different sources."@en ;
  skos:example "Thesauri, classification schemes, subject heading lists, taxonomies, 'folksonomies', and other types of controlled vocabulary are all examples of concept schemes. Concept schemes are also embedded in glossaries and terminologies."@en ;
  a owl:Class ;
  owl:disjointWith skos:Concept .

skos:Collection
  rdfs:label "Collection"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A meaningful collection of concepts."@en ;
  skos:scopeNote "Labelled collections can be used where you would like a set of concepts to be displayed under a 'node label' in the hierarchy."@en ;
  a owl:Class ;
  owl:disjointWith skos:Concept, skos:ConceptScheme .

skos:OrderedCollection
  rdfs:label "Ordered Collection"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "An ordered collection of concepts, where both the grouping and the ordering are meaningful."@en ;
  skos:scopeNote "Ordered collections can be used where you would like a set of concepts to be displayed in a specific order, and optionally under a 'node label'."@en ;
  a owl:Class ;
  rdfs:subClassOf skos:Collection .

skos:inScheme
  rdfs:label "is in scheme"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates a resource (for example a concept) to a concept scheme in which it is included."@en ;
  skos:scopeNote "A concept may be a member of more than one concept scheme."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:range skos:ConceptScheme .

skos:hasTopConcept
  rdfs:label "has top concept"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates, by convention, a concept scheme to a concept which is topmost in the broader/narrower concept hierarchies for that scheme, providing an entry point to these hierarchies."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:domain skos:ConceptScheme ;
  rdfs:range skos:Concept ;
  owl:inverseOf skos:topConceptOf .

skos:topConceptOf
  rdfs:label "is top concept in scheme"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates a concept to the concept scheme that it is a top level concept of."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:subPropertyOf skos:inScheme ;
  owl:inverseOf skos:hasTopConcept ;
  rdfs:domain skos:Concept ;
  rdfs:range skos:ConceptScheme .

skos:prefLabel
  rdfs:label "preferred label"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "The preferred lexical label for a resource, in a given language."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf rdfs:label ;
  rdfs:comment "A resource has no more than one value of skos:prefLabel per language tag, and no more than one value of skos:prefLabel without language tag."@en, "The range of skos:prefLabel is the class of RDF plain literals."@en, """skos:prefLabel, skos:altLabel and skos:hiddenLabel are pairwise
      disjoint properties."""@en .

skos:altLabel
  rdfs:label "alternative label"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "An alternative lexical label for a resource."@en ;
  skos:example "Acronyms, abbreviations, spelling variants, and irregular plural/singular forms may be included among the alternative labels for a concept. Mis-spelled terms are normally included as hidden labels (see skos:hiddenLabel)."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf rdfs:label ;
  rdfs:comment "The range of skos:altLabel is the class of RDF plain literals."@en, "skos:prefLabel, skos:altLabel and skos:hiddenLabel are pairwise disjoint properties."@en .

skos:hiddenLabel
  rdfs:label "hidden label"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A lexical label for a resource that should be hidden when generating visual displays of the resource, but should still be accessible to free text search operations."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf rdfs:label ;
  rdfs:comment "The range of skos:hiddenLabel is the class of RDF plain literals."@en, "skos:prefLabel, skos:altLabel and skos:hiddenLabel are pairwise disjoint properties."@en .

skos:notation
  rdfs:label "notation"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A notation, also known as classification code, is a string of characters such as 'T58.5' or '303.4833' used to uniquely identify a concept within the scope of a given concept scheme."@en ;
  skos:scopeNote "By convention, skos:notation is used with a typed literal in the object position of the triple."@en ;
  a owl:DatatypeProperty, rdf:Property .

skos:note
  rdfs:label "note"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A general note, for any purpose."@en ;
  skos:scopeNote "This property may be used directly, or as a super-property for more specific note types."@en ;
  a owl:AnnotationProperty, rdf:Property .

skos:changeNote
  rdfs:label "change note"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A note about a modification to a concept."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf skos:note .

skos:definition
  rdfs:label "definition"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A statement or formal explanation of the meaning of a concept."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf skos:note .

skos:editorialNote
  rdfs:label "editorial note"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A note for an editor, translator or maintainer of the vocabulary."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf skos:note .

skos:example
  rdfs:label "example"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "An example of the use of a concept."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf skos:note .

skos:historyNote
  rdfs:label "history note"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A note about the past state/use/meaning of a concept."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf skos:note .

skos:scopeNote
  rdfs:label "scope note"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "A note that helps to clarify the meaning and/or the use of a concept."@en ;
  a owl:AnnotationProperty, rdf:Property ;
  rdfs:subPropertyOf skos:note .

skos:semanticRelation
  rdfs:label "is in semantic relation with"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Links a concept to a concept related by meaning."@en ;
  skos:scopeNote "This property should not be used directly, but as a super-property for all properties denoting a relationship of meaning between concepts."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:domain skos:Concept ;
  rdfs:range skos:Concept .

skos:broader
  rdfs:label "has broader"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates a concept to a concept that is more general in meaning."@en ;
  rdfs:comment "Broader concepts are typically rendered as parents in a concept hierarchy (tree)."@en ;
  skos:scopeNote "By convention, skos:broader is only used to assert an immediate (i.e. direct) hierarchical link between two conceptual resources."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:subPropertyOf skos:broaderTransitive ;
  owl:inverseOf skos:narrower .

skos:narrower
  rdfs:label "has narrower"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates a concept to a concept that is more specific in meaning."@en ;
  skos:scopeNote "By convention, skos:broader is only used to assert an immediate (i.e. direct) hierarchical link between two conceptual resources."@en ;
  rdfs:comment "Narrower concepts are typically rendered as children in a concept hierarchy (tree)."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:subPropertyOf skos:narrowerTransitive ;
  owl:inverseOf skos:broader .

skos:related
  rdfs:label "has related"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates a concept to a concept with which there is an associative semantic relationship."@en ;
  a owl:ObjectProperty, owl:SymmetricProperty, rdf:Property ;
  rdfs:subPropertyOf skos:semanticRelation ;
  rdfs:comment "skos:related is disjoint with skos:broaderTransitive"@en .

skos:broaderTransitive
  rdfs:label "has broader transitive"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:broaderTransitive is a transitive superproperty of skos:broader." ;
  skos:scopeNote "By convention, skos:broaderTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application."@en ;
  a owl:ObjectProperty, owl:TransitiveProperty, rdf:Property ;
  rdfs:subPropertyOf skos:semanticRelation ;
  owl:inverseOf skos:narrowerTransitive .

skos:narrowerTransitive
  rdfs:label "has narrower transitive"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:narrowerTransitive is a transitive superproperty of skos:narrower." ;
  skos:scopeNote "By convention, skos:narrowerTransitive is not used to make assertions. Rather, the properties can be used to draw inferences about the transitive closure of the hierarchical relation, which is useful e.g. when implementing a simple query expansion algorithm in a search application."@en ;
  a owl:ObjectProperty, owl:TransitiveProperty, rdf:Property ;
  rdfs:subPropertyOf skos:semanticRelation ;
  owl:inverseOf skos:broaderTransitive .

skos:member
  rdfs:label "has member"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates a collection to one of its members."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:domain skos:Collection ;
  rdfs:range [
    a owl:Class ;
    owl:unionOf (
     skos:Concept
     skos:Collection
   )
  ] .

skos:memberList
  rdfs:label "has member list"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates an ordered collection to the RDF list containing its members."@en ;
  a owl:ObjectProperty, owl:FunctionalProperty, rdf:Property ;
  rdfs:domain skos:OrderedCollection ;
  rdfs:range rdf:List ;
  rdfs:comment """For any resource, every item in the list given as the value of the
      skos:memberList property is also a value of the skos:member property."""@en .

skos:mappingRelation
  rdfs:label "is in mapping relation with"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "Relates two concepts coming, by convention, from different schemes, and that have comparable meanings"@en ;
  rdfs:comment "These concept mapping relations mirror semantic relations, and the data model defined below is similar (with the exception of skos:exactMatch) to the data model defined for semantic relations. A distinct vocabulary is provided for concept mapping relations, to provide a convenient way to differentiate links within a concept scheme from links between concept schemes. However, this pattern of usage is not a formal requirement of the SKOS data model, and relies on informal definitions of best practice."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:subPropertyOf skos:semanticRelation .

skos:broadMatch
  rdfs:label "has broader match"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:broadMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:subPropertyOf skos:mappingRelation, skos:broader ;
  owl:inverseOf skos:narrowMatch .

skos:narrowMatch
  rdfs:label "has narrower match"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:narrowMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes."@en ;
  a owl:ObjectProperty, rdf:Property ;
  rdfs:subPropertyOf skos:mappingRelation, skos:narrower ;
  owl:inverseOf skos:broadMatch .

skos:relatedMatch
  rdfs:label "has related match"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:relatedMatch is used to state an associative mapping link between two conceptual resources in different concept schemes."@en ;
  a owl:ObjectProperty, owl:SymmetricProperty, rdf:Property ;
  rdfs:subPropertyOf skos:mappingRelation, skos:related .

skos:exactMatch
  rdfs:label "has exact match"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:exactMatch is used to link two concepts, indicating a high degree of confidence that the concepts can be used interchangeably across a wide range of information retrieval applications. skos:exactMatch is a transitive property, and is a sub-property of skos:closeMatch."@en ;
  a owl:ObjectProperty, owl:SymmetricProperty, owl:TransitiveProperty, rdf:Property ;
  rdfs:subPropertyOf skos:closeMatch ;
  rdfs:comment "skos:exactMatch is disjoint with each of the properties skos:broadMatch and skos:relatedMatch."@en .

skos:closeMatch
  rdfs:label "has close match"@en ;
  rdfs:isDefinedBy <http://www.w3.org/2004/02/skos/core> ;
  skos:definition "skos:closeMatch is used to link two concepts that are sufficiently similar that they can be used interchangeably in some information retrieval applications. In order to avoid the possibility of 'compound errors' when combining mappings across more than two concept schemes, skos:closeMatch is not declared to be a transitive property."@en ;
  a owl:ObjectProperty, owl:SymmetricProperty, rdf:Property ;
  rdfs:subPropertyOf skos:mappingRelation .`;

export const xsd = `@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix vann: <http://purl.org/vocab/vann/> .

xsd: a owl:Ontology ;
    rdfs:label "W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes" ;
    rdfs:seeAlso <https://www.w3.org/TR/xmlschema11-2/#built-in-primitive-datatypes> .

xsd:anyURI a rdfs:Datatype ;
    rdfs:comment "anyURI represents an Internationalized Resource Identifier Reference (IRI).  An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be an IRI Reference).  This type should be used when the value fulfills the role of an IRI, as defined in [RFC 3987] or its successor(s) in the IETF Standards Track." .

xsd:base64Binary a rdfs:Datatype ;
    rdfs:comment "base64Binary represents arbitrary Base64-encoded binary data.  For base64Binary data the entire binary stream is encoded using the Base64 Encoding defined in [RFC 3548], which is derived from the encoding described in [RFC 2045]." .

xsd:boolean a rdfs:Datatype ;
    rdfs:comment "boolean represents the values of two-valued logic." .

xsd:byte a rdfs:Datatype ;
    rdfs:comment "byte is ·derived· from short by setting the value of ·maxInclusive· to be 127 and ·minInclusive· to be -128. The ·base type· of byte is short." .

xsd:date a rdfs:Datatype ;
    rdfs:comment "date represents top-open intervals of exactly one day in length on the timelines of dateTime, beginning on the beginning moment of each day, up to but not including the beginning moment of the next day).  For non-timezoned values, the top-open intervals disjointly cover the non-timezoned timeline, one per day.  For timezoned values, the intervals begin at every minute and therefore overlap." .

xsd:dateTime a rdfs:Datatype ;
    rdfs:comment "dateTime represents instants of time, optionally marked with a particular time zone offset.  Values representing the same instant but having different time zone offsets are equal but not identical." .

xsd:decimal a rdfs:Datatype ;
    rdfs:comment "decimal represents a subset of the real numbers, which can be represented by decimal numerals. The ·value space· of decimal is the set of numbers that can be obtained by dividing an integer by a non-negative power of ten, i.e., expressible as i / 10n where i and n are integers and n ≥ 0. Precision is not reflected in this value space; the number 2.0 is not distinct from the number 2.00. The order relation on decimal is the order relation on real numbers, restricted to this subset." .

xsd:double a rdfs:Datatype ;
    rdfs:comment "The double datatype is patterned after the IEEE double-precision 64-bit floating point datatype [IEEE 754-2008].  Each floating point datatype has a value space that is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers." .

xsd:duration a rdfs:Datatype ;
    rdfs:comment "duration is a datatype that represents durations of time.  The concept of duration being captured is drawn from those of [ISO 8601], specifically durations without fixed endpoints." .

xsd:float a rdfs:Datatype ;
    rdfs:comment "The float datatype is patterned after the IEEE single-precision 32-bit floating point datatype [IEEE 754-2008].  Its value space is a subset of the rational numbers.  Floating point numbers are often used to approximate arbitrary real numbers." .

xsd:int a rdfs:Datatype ;
    rdfs:comment "int is ·derived· from long by setting the value of ·maxInclusive· to be 2147483647 and ·minInclusive· to be -2147483648.  The ·base type· of int is long." .

xsd:integer a rdfs:Datatype ;
    rdfs:comment "integer is ·derived· from decimal by fixing the value of ·fractionDigits· to be 0 and disallowing the trailing decimal point.  This results in the standard mathematical concept of the integer numbers.  The ·value space· of integer is the infinite set {...,-2,-1,0,1,2,...}.  The ·base type· of integer is decimal." .

xsd:long a rdfs:Datatype ;
    rdfs:comment "long is ·derived· from integer by setting the value of ·maxInclusive· to be 9223372036854775807 and ·minInclusive· to be -9223372036854775808. The ·base type· of long is integer." .

xsd:negativeInteger a rdfs:Datatype ;
    rdfs:comment "negativeInteger is ·derived· from nonPositiveInteger by setting the value of ·maxInclusive· to be -1.  This results in the standard mathematical concept of the negative integers.  The ·value space· of negativeInteger is the infinite set {...,-2,-1}.  The ·base type· of negativeInteger is nonPositiveInteger." .

xsd:nonNegativeInteger a rdfs:Datatype .

xsd:nonPositiveInteger a rdfs:Datatype ;
    rdfs:comment "nonPositiveInteger is ·derived· from integer by setting the value of ·maxInclusive· to be 0.  This results in the standard mathematical concept of the non-positive integers. The ·value space· of nonPositiveInteger is the infinite set {...,-2,-1,0}.  The ·base type· of nonPositiveInteger is integer." .

xsd:positiveInteger a rdfs:Datatype ;
    rdfs:comment "nonNegativeInteger is ·derived· from integer by setting the value of ·minInclusive· to be 0.  This results in the standard mathematical concept of the non-negative integers. The ·value space· of nonNegativeInteger is the infinite set {0,1,2,...}.  The ·base type· of nonNegativeInteger is integer." .

xsd:short a rdfs:Datatype ;
    rdfs:comment "short is ·derived· from int by setting the value of ·maxInclusive· to be 32767 and ·minInclusive· to be -32768.  The ·base type· of short is int." .

xsd:string a rdfs:Datatype ;
    rdfs:comment "The string datatype represents character strings in XML." .

xsd:time a rdfs:Datatype ;
    rdfs:comment "time represents instants of time that recur at the same point in each calendar day, or that occur in some arbitrary calendar day." .

xsd:unsignedInt a rdfs:Datatype ;
    rdfs:comment "unsignedInt is ·derived· from unsignedLong by setting the value of ·maxInclusive· to be 4294967295.  The ·base type· of unsignedInt is unsignedLong." .

xsd:unsignedShort a rdfs:Datatype ;
    rdfs:comment "unsignedShort is ·derived· from unsignedInt by setting the value of ·maxInclusive· to be 65535.  The ·base type· of unsignedShort is unsignedInt." .

xsd:unsingedLong a rdfs:Datatype ;
    rdfs:comment "unsignedLong is ·derived· from nonNegativeInteger by setting the value of ·maxInclusive· to be 18446744073709551615.  The ·base type· of unsignedLong is nonNegativeInteger." .

xsd:usignedByte a rdfs:Datatype ;
    rdfs:comment "unsignedByte is ·derived· from unsignedShort by setting the value of ·maxInclusive· to be 255.  The ·base type· of unsignedByte is unsignedShort." .`;

