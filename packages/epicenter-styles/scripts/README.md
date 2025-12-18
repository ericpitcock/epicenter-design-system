# Epicenter Styles Scripts

This directory contains build and development scripts for the Epicenter Design System styles package.

## Scripts

### buildColorTokens.mjs

**Purpose:** Converts YAML design tokens to SCSS files with CSS custom properties.

**What it does:**
- Watches YAML files in `../tokens/color/` for changes
- Automatically regenerates SCSS files when tokens are updated
- Outputs files to `../scss/color/` with `_filename.scss` naming convention
- Handles both simple properties and theme-specific properties (dark/light modes)
- Generates appropriate CSS selectors for theming (`:root`, `.dark-theme`, `.light-theme`)

**Usage:**
```bash
node buildColorTokens.mjs
```

The script runs in watch mode and will continue to monitor for changes until stopped.

**Token file format:**
- Simple properties: `property-name: value`
- Theme-specific: `property-name: { dark: value1, light: value2 }`
- Special handling for `themes.yaml` file with dual root/theme class selectors

**Dependencies:**
- `chokidar` - File watching
- `glob` - File pattern matching
- `js-yaml` - YAML parsing

---

### buildDistribution.mjs

**Purpose:** Compiles SCSS to CSS and prepares the distribution package.

**What it does:**
- Compiles `index.scss` to compressed CSS
- Outputs to `dist/epicenter-design-system.css`
- Copies essential SCSS mixins to `dist/mixins/` for consumers who need them
- Uses the local Sass compiler from `node_modules`

**Usage:**
```bash
node buildDistribution.mjs
```

This is typically run as part of the package build process before publishing.

**Output:**
- `dist/epicenter-design-system.css` - Compiled and compressed CSS
- `dist/mixins/` - SCSS mixins for package consumers

**Dependencies:**
- `sass` - SCSS compilation
- `fs-extra` - Enhanced file system operations

---

## Development Workflow

1. **Token Development:**
   - Edit YAML files in `tokens/color/`
   - Run `buildColorTokens.mjs` in watch mode
   - SCSS files are automatically generated

2. **Distribution Build:**
   - Run `buildDistribution.mjs` to compile final CSS
   - Package is ready for publishing or consumption

## Notes

- Both scripts use ESM (`.mjs` extension)
- Paths are relative to the script location
- Generated files include `/* DO NOT EDIT DIRECTLY */` headers
