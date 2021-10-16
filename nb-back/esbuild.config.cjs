require('esbuild').buildSync({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: 'node',
  target: ['node14'],
  resolveExtensions: ['.ts', '.js'],
  outdir: './dist',
})