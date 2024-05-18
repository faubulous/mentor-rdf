require('ts-node').register({
    transpileOnly: true,
});

import { VocabularyGenerator } from './src/rdf/vocabulary-generator';

const setup = () => {
    module.exports = async () => {
        console.log("Building src/ontologies..")
        await new VocabularyGenerator().parseDirectory('src/ontologies', true, true);

        console.log("Building src/rdf/tests/vocabularies..")
        await new VocabularyGenerator().parseDirectory('src/rdf/tests/vocabularies', true);
    };
};

export default setup;