# Vue Components Build Process

This document explains how the Vue components package is built and prepared for distribution.

## Build Script

### build.mjs

The build script that:
1. Generates component export statements in `src/components/index.js`
2. Copies components from `src/components/` to `dist/components/`
3. Copies composables from `src/composables/` to `dist/composables/`
4. Excludes `.notes.md` and `.stories.js` files from distribution
5. Creates the final package structure

**Location**: `scripts/build.mjs`

**Usage**:
```bash
npm run build
```

**Key Features**:
- Recursively finds all `.vue` files in `src/components/` and generates export statements
- Filters out documentation files (`.notes.md`) and story files (`.stories.js`)
- Preserves directory structure

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
3. Run `npm run build` to prepare for distribution
4. The build process automatically:
   - Updates export statements
   - Copies files to dist/
   - Excludes documentation files

## Notes

- `.notes.md` and `.stories.js` files are intentionally excluded from the build
- These files are used for documentation and Storybook but aren't needed in the distributed package
- The build script preserves the original file structure for easy navigation
