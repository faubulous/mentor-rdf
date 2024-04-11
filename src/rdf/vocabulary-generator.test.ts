import * as fs from "fs";
import path from "path";
import { VocabularyGenerator } from "./vocabulary-generator";

// See: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
jest.useFakeTimers();

describe("VocabularyGenerator", () => {
    /**
     * Delete all files with the specified extension in the target directory.
     * @param directory Relative path to the target directory.
     * @param extension Delete all files with this extension ('.ts')
     */
    function cleanDirectory(directory: string, extension: string) {
        const files = fs.readdirSync(directory);

        for (let file of files) {
            if (path.extname(file) === extension) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
        }
    }

    /**
     * Check if the files exist and have a size greater than 0.
     * @param files A list of files to check.
     * @param deleteFiles Delete the files after checking.
     */
    function checkFiles(files: string[], deleteFiles: boolean = true) {
        try {
            for (let file of files) {
                const exists = fs.existsSync(file);

                expect(exists).toBeTruthy();

                const stats = fs.statSync(file);

                expect(stats.size).toBeGreaterThan(0);
            }
        }
        catch (error) {
            throw error;
        }
        finally {
            if (deleteFiles) {
                for (let file of files.filter(f => fs.existsSync(f))) {
                    fs.unlinkSync(file);
                }
            }
        }
    }

    it('can generate vocabulary modules from files', async () => {
        cleanDirectory('src/rdf/tests/generator', '.ts');

        const generator = new VocabularyGenerator();

        let file = await generator.parseFile('src/rdf/tests/generator/skos.ttl');

        checkFiles([file], true);

        file = await generator.parseFile('src/rdf/tests/cases/valid-number-label.ttl');

        checkFiles([file], true);

        try {
            file = await generator.parseFile('src/rdf/tests/cases/invalid-missing-semicolon.ttl');

            fail();
        } catch (error) {
            expect(error).toBeDefined();

            expect(fs.existsSync('src/rdf/tests/cases/invalid-missing-semicolon.ts')).toBeFalsy();
        }
    });

    it('can generate vocabulary modules from directories', async () => {
        cleanDirectory('src/rdf/tests/generator/w3c', '.ts');

        const generator = new VocabularyGenerator();

        let files = await generator.parseDirectory('src/rdf/tests/generator/w3c');

        expect(files.length).toBe(3);
        expect(fs.existsSync('src/rdf/tests/generator/w3c/index.ts')).toBeFalsy();

        checkFiles(files);

        files = await generator.parseDirectory('src/rdf/tests/generator/w3c', true);
        files.push('src/rdf/tests/generator/w3c/index.ts');

        expect(files.length).toBe(4);

        checkFiles(files);

        files = await generator.parseDirectory('src/rdf/tests/generator/w3c', true, true);
        files.push('src/rdf/tests/generator/w3c/index.ts');
        files.push('src/rdf/tests/generator/w3c/src.ts');

        expect(files.length).toBe(5);

        checkFiles(files);
    });
});