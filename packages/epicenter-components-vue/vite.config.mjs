import { readdirSync } from 'node:fs'
import { isAbsolute, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const packageDir = fileURLToPath(new URL('.', import.meta.url))
const srcDir = resolve(packageDir, 'src')

/**
 * Every source module is its own entry, so dist/ mirrors src/ one-to-one.
 *
 * That layout is what makes the declaration story cheap: vue-tsc emits into the
 * same shape, so each `.d.ts` lands next to the `.mjs` it describes and the
 * `./components/*` export pattern resolves both halves with one glob. Rollup
 * still dedupes — a module that is itself an entry becomes one chunk that the
 * other entries import, rather than being copied into each of them.
 */
const collectEntries = (dir) => {
  const entries = {}

  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, item.name)

    if (item.isDirectory()) {
      Object.assign(entries, collectEntries(fullPath))
      continue
    }

    // Stories and ambient declarations are development-only; `.d.ts` in
    // particular would collide with what vue-tsc emits.
    if (/\.stories\.[jt]s$/.test(item.name) || item.name.endsWith('.d.ts')) continue
    if (!/\.(ts|vue)$/.test(item.name)) continue

    const name = relative(srcDir, fullPath).replace(/\\/g, '/').replace(/\.(ts|vue)$/, '')
    entries[name] = fullPath
  }

  return entries
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
      // Externalise every bare specifier. A component library should ship none
      // of its dependencies — vue, @vueuse/core, the icon package and the five
      // optional peers all stay as imports for the consumer's bundler to resolve.
      external: (id) => !id.startsWith('.') && !id.startsWith('\0') && !isAbsolute(id),
      output: {
        // plugin-vue names its virtual modules after the query string it
        // compiled, so the default is `EpButton.vue_vue_type_script_setup_
        // true_lang-<hash>.mjs`. The chunk itself is fine — it is the shared
        // copy of a component that both its own entry and the barrel import —
        // but the name makes dist/ unreadable.
        chunkFileNames: (chunk) => `chunks/${chunk.name.replace(/\.vue.*$/, '')}-[hash].mjs`,
        entryFileNames: '[name].mjs',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [vue()],
})
