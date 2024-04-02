module.exports = {
    globalSetup: "./build-ontologies.ts",
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};