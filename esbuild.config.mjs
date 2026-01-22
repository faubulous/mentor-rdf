import * as esbuild from 'esbuild';

const isProduction = process.env.NODE_ENV === 'production';

/** @type {esbuild.BuildOptions} */
const config = {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'browser',
    target: 'es2020',
    format: 'esm',
    sourcemap: true,
    minify: isProduction,
    external: [
        // Mark all dependencies as external (they'll be installed via npm)
        'n3',
        'rdflib',
        'rdf-stores',
        'rdfxml-streaming-parser',
        'rxjs',
        'millan',
        'quadstore',
        'memory-level',
    ],
};

await esbuild.build(config);

console.log(`✓ Build complete (${isProduction ? 'production' : 'development'})`);
