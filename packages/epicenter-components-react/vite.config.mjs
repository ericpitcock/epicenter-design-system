import { readdirSync } from 'node:fs'
import { isAbsolute, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const packageDir = fileURLToPath(new URL('.', import.meta.url))
const srcDir = resolve(packageDir, 'src')

/**
 * Every source module is its own entry, so dist/ mirrors src/ one-to-one and
 * each `.d.ts` tsc emits lands next to the `.mjs` it describes. See the Vue
 * package's config — same reasoning, same layout.
 */
const collectEntries = (dir) => {
  const entries = {}

  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, item.name)

    if (item.isDirectory()) {
      Object.assign(entries, collectEntries(fullPath))
      continue
    }

    if (/\.stories\.[jt]sx?$/.test(item.name) || item.name.endsWith('.d.ts')) continue
    if (!/\.(ts|tsx)$/.test(item.name)) continue

    const name = relative(srcDir, fullPath).replace(/\\/g, '/').replace(/\.tsx?$/, '')
    entries[name] = fullPath
  }

  return entries
}

// A dependency's stylesheet is the dependency's to ship. Bundling
// `mapbox-gl/dist/mapbox-gl.css` would inline a copy that consumers cannot
// dedupe against their own.
//
// Local stylesheets are external for a different reason: lib mode extracts CSS
// to a standalone asset and *drops the import*, which would ship Kmd
// unstyled. Left external, `import './Kmd.css'` survives into the output and
// resolves against the copy build.mjs places beside it — the same arrangement
// the consumer's bundler already handles for every other dependency.
const isExternal = (id) => {
  if (id.endsWith('.css')) return true
  return !id.startsWith('.') && !id.startsWith('\0') && !isAbsolute(id)
}

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: collectEntries(srcDir),
      formats: ['es'],
    },
    minify: false,
    outDir: 'dist',
    rollupOptions: {
      external: isExternal,
      output: {
        chunkFileNames: 'chunks/[name]-[hash].mjs',
        entryFileNames: '[name].mjs',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [react()],
})
