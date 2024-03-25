import { VocabularyGenerator } from './src/rdf/vocabulary-generator';

module.exports = async () => {
    await new VocabularyGenerator().parseDirectory('src/rdf/tests/vocabularies', true);
};