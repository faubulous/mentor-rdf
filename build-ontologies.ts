require('ts-node').register({
    transpileOnly: true,
});

import { VocabularyGenerator } from './src/rdf/vocabulary-generator';

const buildTask = async () => {
    console.log("Building src/ontologies..")
    await new VocabularyGenerator().parseDirectory('src/ontologies', true, true);

    console.log("Building src/rdf/tests/vocabularies..")
    await new VocabularyGenerator().parseDirectory('src/rdf/tests/vocabularies', true);
};

buildTask().then(() => {
    console.log("Done building ontologies.");
}).catch((err) => {
    console.error(err);
    process.exit(1);
});