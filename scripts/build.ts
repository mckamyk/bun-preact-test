import bun from 'bun';

bun.build({
	entrypoints: ['src/test.tsx'],
	outdir: './dist',
})