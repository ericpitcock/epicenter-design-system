# Epicenter Styles Scripts

This directory contains the build script for the Epicenter Design System styles package.

## Scripts

### build.mjs

**Purpose:** Builds the complete styles package — generates color tokens from YAML, compiles SCSS to CSS, and copies assets to dist.

**What it does:**
1. Reads the theme seeds in `../tokens/theme.yaml` and writes `../scss/theme/_seeds.scss`,
   the `@property` registrations, and the consumer starter `dist/theme.css`
2. Converts YAML design tokens in `../tokens/color/` to SCSS files in `../scss/color/`
   (`neutral(N)` values become `oklch(from var(--neutral-color) …)` with the lightness of `gray-N`)
3. Compiles each layer group to compressed CSS, wrapped in cascade layers, at `dist/epicenter-design-system.css`
4. Validates the custom-property contract and writes `dist/custom-properties.json`
5. Copies the shared SCSS mixins to `dist/mixins/`

**Usage:**
```bash
# Full build (tokens + SCSS compilation + copy to dist)
npm run build

# Full build + watch YAML token files for changes
npm run build:watch
```

**Output:**
```
dist/
├── epicenter-design-system.css
├── theme.css
├── custom-properties.json
└── mixins/
    └── _mixins.scss
```

**Token file format:**
- Simple properties: `property-name: value`
- Theme-specific: `property-name: { dark: value1, light: value2 }` — any file with that shape becomes `light-dark()` pairs
- `neutral(N)` / `neutral(N, alpha)` in a themed value: the lightness of `gray-N` on the `--neutral-color` seed
- Relative-color derivations must originate from a seed declared in `tokens/theme.yaml`; the build fails otherwise

**Dependencies:**
- `chokidar` - File watching (loaded only in watch mode)
- `fs-extra` - Enhanced file system operations
- `glob` - File pattern matching
- `js-yaml` - YAML parsing
- `sass` - SCSS compilation

---

## Development Workflow

1. **Token Development:**
   - Edit YAML files in `tokens/color/`
   - Run `npm run build:watch` to auto-rebuild on changes

2. **Distribution Build:**
   - Run `npm run build` to generate the full dist package

3. **SCSS Watch Mode:**
   - Run `npm run sass:watch` to recompile on SCSS changes (without token regeneration)

## Notes

- All scripts use ESM (`.mjs` extension)
- Paths are relative to the script location
- Generated token files include `/* DO NOT EDIT DIRECTLY */` headers
