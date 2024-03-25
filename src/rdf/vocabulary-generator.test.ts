import * as fs from "fs";
import { VocabularyGenerator } from "./vocabulary-generator";

describe("VocabularyGenerator", () => {
    it('can generate vocabulary from file', async () => {
        const generator = new VocabularyGenerator();

        const file = await generator.parseFile('src/rdf/tests/generator/skos.ttl');

        expect(fs.existsSync(file)).toBeTruthy();

        const stats = fs.statSync(file);

        expect(stats.size).toBeGreaterThan(0);

        fs.unlinkSync(file);
    });

    it('can generate vocabulary from directory', async () => {
        const generator = new VocabularyGenerator();

        const files = await generator.parseDirectory('src/rdf/tests/generator/w3c');

        expect(fs.existsSync('src/rdf/tests/generator/w3c/index.ts')).toBeFalsy();
        expect(files.length).toBe(3);

        for (let file of files) {
            expect(fs.existsSync(file)).toBeTruthy();

            const stats = fs.statSync(file);

            expect(stats.size).toBeGreaterThan(0);

            fs.unlinkSync(file);
        }
    });

    it('can generate vocabulary modules', async () => {
        const generator = new VocabularyGenerator();

        let files = await generator.parseDirectory('src/ontologies', true);

        expect(files.length).toBeGreaterThan(0);
        expect(fs.existsSync("src/ontologies/index.ts")).toBeTruthy();

        files = await generator.parseDirectory('src/rdf/tests/vocabularies', true);

        expect(files.length).toBeGreaterThan(0);
        expect(fs.existsSync("src/rdf/tests/vocabularies/index.ts")).toBeTruthy();
    });

    it('can generate the vocabulary sources as a variable', async () => {
        const generator = new VocabularyGenerator();

        const files = await generator.parseDirectory('src/ontologies', true, true);

        expect(files.length).toBeGreaterThan(0);
        expect(fs.existsSync("src/ontologies/index.ts")).toBeTruthy();
        expect(fs.existsSync("src/ontologies/src.ts")).toBeTruthy();
    });
});