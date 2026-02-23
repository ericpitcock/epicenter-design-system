# Vue Components Build Process

This document explains how the Vue components package is built and prepared for distribution.

## Build Scripts

### buildVueComponents.mjs

The main build script that:
1. Generates component exports via `generateExports.mjs`
2. Copies components from `src/components/` to `dist/components/`
3. Copies composables from `src/composables/` to `dist/composables/`
4. Excludes `.notes.md` files from distribution
5. Creates the final package structure

**Location**: `scripts/buildVueComponents.mjs`

**Usage**:
```bash
npm run build-components
```

**Key Features**:
- Filters out documentation files (`.notes.md`)
- Preserves directory structure
- Automatically generates export statements

### generateExports.mjs

Helper script that automatically generates component export statements.

**Location**: `scripts/generateExports.mjs`

**Usage**:
```bash
npm run generate-exports
```

**What it does**:
- Recursively finds all `.vue` files in `src/components/`
- Generates export statements in `src/components/index.js`
- Creates named exports for each component
- Maintains alphabetical order

**Note**: This script is called automatically by `buildVueComponents.mjs`, so you typically don't need to run it manually.

## Distribution Structure

After building, the `dist/` directory contains:

```
dist/
├── components/
│   ├── index.js          # Auto-generated exports
│   ├── EpButton.vue
│   ├── EpInput.vue
│   └── ...
└── composables/
    ├── useResizeObserver.js
    ├── useClickOutside.js
    └── ...
```

## Development Workflow

1. Add or modify components in `src/components/`
2. Add or modify composables in `src/composables/`
3. Run `npm run build-components` to prepare for distribution
4. The build process automatically:
   - Updates export statements
   - Copies files to dist/
   - Excludes documentation files

## Notes

- `.notes.md` files are intentionally excluded from the build
- These documentation files are used by the documentation generator but aren't needed in the distributed package
- The build script preserves the original file structure for easy navigation
