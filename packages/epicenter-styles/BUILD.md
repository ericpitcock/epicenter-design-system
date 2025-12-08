# Build Styles Script

## Overview

The `buildStyles.mjs` script compiles and packages the Epicenter Design System styles for distribution. It handles SCSS compilation and copies necessary mixins to the distribution directory.

## Usage

From the `packages/epicenter-styles` directory:

```bash
npm run build-styles
```

## What It Does

### 1. SCSS Compilation
- Compiles `index.scss` to compressed CSS
- Outputs to `dist/epicenter-design-system.css`
- Uses the local `sass` binary from `node_modules/.bin/`
- Applies compressed output style for production

### 2. Mixin Distribution
Copies SCSS mixins to the `dist/mixins/` directory for consumers who need them:
- `_generate-color-variants.scss` - Mixin for generating color variant classes

## Output Structure

```
dist/
├── epicenter-design-system.css    # Compiled and compressed CSS
└── mixins/
    └── _generate-color-variants.scss
```

## Build Process

1. **Ensures dist directory exists** - Creates the output directory if needed
2. **Compiles SCSS** - Runs Sass compiler on `index.scss`
3. **Copies mixins** - Copies specified SCSS mixins to dist for consumer use
4. **Logs progress** - Provides console feedback for each step

## Requirements

- Node.js with ES modules support
- `sass` package installed in `node_modules`
- `fs-extra` for file operations

## Error Handling

If SCSS compilation fails, the script will:
- Log the error to console with details
- Reject the promise to stop the build process
- Display the stderr output from the Sass compiler

## Integration

This script is typically run:
- Before publishing the package to npm
- As part of a CI/CD pipeline
- When making changes to SCSS source files

## Related Scripts

- `sass:watch` - Development script that watches for SCSS changes and recompiles
