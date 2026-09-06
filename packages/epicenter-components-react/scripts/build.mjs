import { execFileSync } from 'child_process'
import fs from 'fs'
import { dirname, join, relative, resolve } from 'path'
import { fileURLToPath } from 'url'

const packageDir = resolve(fileURLToPath(import.meta.url), '../..')

const run = (command, args) => execFileSync(command, args, { cwd: packageDir, stdio: 'inherit' })

/**
 * Vite leaves `import './Kmd.css'` in the output (the config externalises it),
 * so the file has to be there for the consumer's bundler to resolve.
 */
const copyStylesheets = (dir) => {
  let copied = 0

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, item.name)

    if (item.isDirectory()) {
      copied += copyStylesheets(fullPath)
    } else if (item.name.endsWith('.css')) {
      const target = join(packageDir, 'dist', relative(join(packageDir, 'src'), fullPath))
      fs.mkdirSync(dirname(target), { recursive: true })
      fs.copyFileSync(fullPath, target)
      copied++
    }
  }

  return copied
}

console.log('🚀 Building package...')

// Unlike the Vue package there is no barrel to generate — src/index.ts is
// hand-maintained, and the grouping and comments in it are worth keeping.

console.log('📦 Compiling with Vite...')
run('npx', ['vite', 'build'])

console.log(`🎨 Copied ${copyStylesheets(join(packageDir, 'src'))} stylesheet(s)`)

console.log('🧾 Emitting declarations with tsc...')
run('npx', ['tsc', '-p', 'tsconfig.build.json'])

run('node', ['scripts/verify-dist.mjs'])

console.log('✅ Build complete!')
