import fs from 'fs'
import { dirname, join, resolve } from 'path'
import { optimize } from 'svgo'
import { fileURLToPath } from 'url'

import { generateIconArray } from './generateIconArray.mjs'
import { generateIconMap } from './generateIconMap.mjs'

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url))

// Define directories relative to the project root
console.log('🚀 Building icons...')
const srcDir = resolve(__dirname, '../packages/epicenter-icons/src')
const iconsSrcDir = join(srcDir, 'icons')
const iconMapFile = join(srcDir, 'iconMap.js')
const indexFile = join(srcDir, 'index.js')

const distDir = resolve(__dirname, '../packages/epicenter-icons/dist')
const distIconsDir = join(distDir, 'icons')

// Clean up existing dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true })
  console.log('Cleaned dist directory')
}

// Create the dist directories
fs.mkdirSync(distDir, { recursive: true })
fs.mkdirSync(distIconsDir, { recursive: true })

// 1. Generate the iconMap.js
generateIconMap()
console.log(`Icon map generated successfully at ${iconMapFile}`)

// 2. Recursively optimize SVGs and copy them to dist/icons
function processSvgFiles(srcFolder, destFolder) {
  const items = fs.readdirSync(srcFolder)
  items.forEach(item => {
    const srcPath = join(srcFolder, item)
    const stat = fs.statSync(srcPath)
    if (stat.isDirectory()) {
      // Create corresponding subfolder in destination
      const newDestFolder = join(destFolder, item)
      if (!fs.existsSync(newDestFolder)) {
        fs.mkdirSync(newDestFolder, { recursive: true })
      }
      processSvgFiles(srcPath, newDestFolder)
    } else if (item.endsWith('.svg')) {
      const svgData = fs.readFileSync(srcPath, 'utf-8')
      const optimizedResult = optimize(svgData, { path: srcPath })
      const optimizedSvg = optimizedResult.data
      const destPath = join(destFolder, item)
      fs.writeFileSync(destPath, optimizedSvg, 'utf-8')
      console.log(`Optimized and copied ${srcPath} to ${destPath}`)
    }
  })
}

processSvgFiles(iconsSrcDir, distIconsDir)

// 3. Copy iconMap.js and index.js from src to dist
fs.copyFileSync(iconMapFile, join(distDir, 'iconMap.js'))
fs.copyFileSync(indexFile, join(distDir, 'index.js'))
console.log('Copied iconMap.js and index.js to dist')


// 4. Generate the iconsArray.js
generateIconArray()
console.log(`Icon array generated successfully at ${join(srcDir, 'iconsArray.js')}`)

console.log('Build completed successfully.')