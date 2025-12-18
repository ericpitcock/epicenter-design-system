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

### buildStyles.mjs

**Purpose:** Compiles and packages the Epicenter Design System styles for distribution.

**What it does:**
- Compiles `index.scss` to compressed CSS
- Outputs to `dist/epicenter-design-system.css`
- Copies necessary SCSS mixins to the distribution directory
- Uses the local `sass` binary from `node_modules/.bin/`
- Ensures dist directory exists before compilation

**Usage:**
```bash
npm run build-styles
```

or directly:

```bash
node buildStyles.mjs
```

This is typically run before publishing the package or as part of a CI/CD pipeline.

**Output structure:**
```
dist/
├── epicenter-design-system.css    # Compiled and compressed CSS
└── mixins/
    └── _generate-color-variants.scss
```

**Build process:**
1. Ensures dist directory exists
2. Compiles SCSS using Sass compiler
3. Copies specified SCSS mixins to dist for consumer use
4. Logs progress for each step

**Error handling:**
- Logs detailed error messages if compilation fails
- Displays stderr output from the Sass compiler
- Rejects the build process on failure

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
   - Run `buildDistribution.mjs` or `buildStyles.mjs` to compile final CSS
   - Package is ready for publishing or consumption

3. **Watch Mode (Development):**
   - Run `npm run sass:watch` to automatically recompile on SCSS changes

## Notes

- All scripts use ESM (`.mjs` extension)
- Paths are relative to the script location
- Generated files include `/* DO NOT EDIT DIRECTLY */` headers
- The `buildDistribution.mjs` and `buildStyles.mjs` scripts perform similar functions
