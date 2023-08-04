import bun from 'bun';

const result = await bun.build({
	entrypoints: ['src/test.tsx'],
	outdir: './dist',
}).catch(console.error)


if (result) {
	console.log(`Success: ${result.success}`)
	console.log(`Output: ${result.outputs.map(o => o.path)}`)
	console.log(`Errors: ${result.logs.map(l => l.message)}`)
}