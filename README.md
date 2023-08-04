This is a simple test repo to test using Preact with the Bun bundler.

Currently `v0.7.0`, Bun's bundler nor the package manager seems to respect the `package.json` entries that the Preact project recommends as aliasing `react` to `@preact/compat`

```json
{
	"dependecies": {
    "@preact/compat": "^17.1.2",
    "preact": "^10.16.0",
		"react": "npm:@preact/compat",
		"react-dom": "npm:@preact/compat"
	}
}
```
Bundling with bun ([scripts/build.ts](build.ts)) a simple function component ([src/test.tsx](test.tsx)) initially will cause a bundle error, reporting that Bun cannot find the `react` package, and suggests running `bun install`.

Running `bun install` appears to scan files in the repositry to look for files needed to install. Despite the fact that `react` and `react-dom` are not in the `package.json` bun will install the packages and add them into the lockfile (`bun.lockb`) as well has place the files in the `node_modules` folder. Running the build script after this, the bundling will success, but will use `react` library, rather than the aliased `@preact/compat`

Thus, it appears `bun`'s package manager and bundler do not respect `package.json`'s `"package": "npm:alias"` directives.

I do not see any informat in Bun's docs [https://bun.sh/docs](bun), that refer to aliasing package, either for the package manager, nor the bundler configurations.