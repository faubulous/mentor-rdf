import { VocabularyGenerator } from './src/rdf/vocabulary-generator';

(async () => {
    await new VocabularyGenerator().parseDirectory('src/rdf/tests/ontologies', true);
})();