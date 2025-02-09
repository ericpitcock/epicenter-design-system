import fs from 'fs'
import path from 'path'
import { optimize } from 'svgo'

import { generateIconMap } from './generateIconMap.mjs'

// Define directories relative to the package root
const srcDir = path.resolve('../packages/epicenter-icons/src')
const iconsSrcDir = path.join(srcDir, 'icons')
const iconMapFile = path.join(srcDir, 'iconMap.js')
const indexFile = path.join(srcDir, 'index.js')

const distDir = path.resolve('../packages/epicenter-icons/dist')
const distIconsDir = path.join(distDir, 'icons')

// Create the dist directories if they don't exist.
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}
if (!fs.existsSync(distIconsDir)) {
  fs.mkdirSync(distIconsDir, { recursive: true })
}

// 1. Generate the iconMap.js
generateIconMap()
console.log(`Icon map generated successfully at ${iconMapFile}`)

// 2. Optimize SVGs and copy them to dist/icons
const svgFiles = fs.readdirSync(iconsSrcDir).filter(file => file.endsWith('.svg'))

for (const file of svgFiles) {
  const filePath = path.join(iconsSrcDir, file)
  const svgData = fs.readFileSync(filePath, 'utf-8')

  // Optimize the SVG using SVGO
  const optimizedResult = optimize(svgData, { path: filePath })
  const optimizedSvg = optimizedResult.data

  // Write the optimized SVG to the dist/icons folder
  const outFile = path.join(distIconsDir, file)
  fs.writeFileSync(outFile, optimizedSvg, 'utf-8')
  console.log(`Optimized and copied ${file} to dist/icons`)
}

// 3. Copy iconMap.js and index.js from src to dist
fs.copyFileSync(iconMapFile, path.join(distDir, 'iconMap.js'))
fs.copyFileSync(indexFile, path.join(distDir, 'index.js'))
console.log('Copied iconMap.js and index.js to dist')

console.log('Build completed successfully.')