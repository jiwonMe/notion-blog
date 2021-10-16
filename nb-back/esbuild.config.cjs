require('esbuild').build({
  entryPoints: ['./server/index.ts'],
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: 'node',
  target: ['node14'],
  resolveExtensions: ['.ts', '.js'],
  outdir: './dist',
  watch: true,
});
