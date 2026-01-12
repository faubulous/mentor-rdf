import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
        environment: 'node',
        globals: true,
        // These tests load local TTL files using relative paths.
        root: process.cwd(),
        testTimeout: 30_000,
        hookTimeout: 30_000,
    },
});
