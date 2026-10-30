import * as esbuild from 'esbuild';

const isProduction = process.env.NODE_ENV === 'production';

/** @type {esbuild.BuildOptions} */
const config = {
    // The vocabulary constants get an entry point of their own, so that a bundle needing only
    // them (such as a webview) does not take in the whole library. Splitting puts the code both
    // entry points share into one chunk instead of copying it into each.
    entryPoints: ['src/index.ts', 'src/ontologies/index.ts'],
    outdir: 'dist',
    outbase: 'src',
    splitting: true,
    chunkNames: 'chunks/[name]-[hash]',
    bundle: true,
    platform: 'browser',
    target: 'es2020',
    format: 'esm',
    sourcemap: true,
    minify: isProduction,
    external: [
        // Mark all dependencies as external (they'll be installed via npm)
        '@faubulous/mentor-rdf-parsers',
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
