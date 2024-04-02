require('ts-node').register({
    transpileOnly: true,
});

import { VocabularyGenerator } from './src/rdf/vocabulary-generator';

const setup = () => {
    module.exports = async () => {
        await new VocabularyGenerator().parseDirectory('src/ontologies', true, true);
        await new VocabularyGenerator().parseDirectory('src/rdf/tests/vocabularies', true);
    };
};

export default setup;