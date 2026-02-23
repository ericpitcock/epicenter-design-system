# Epicenter Icons — Build Pipeline

This package contains the build pipeline that generates the published icon packages:

- **[@ericpitcock/epicenter-icons-vue](../epicenter-icons-vue/)** — Vue 3 icon components
- **[@ericpitcock/epicenter-icons-react](../epicenter-icons-react/)** — React icon components

This package itself is **not published** to npm (`"private": true`).

## Directory Structure

```
packages/epicenter-icons/
├── scripts/
│   ├── shared.py                      # Shared naming utilities
│   ├── download_svgs.py               # Download SVGs from CDN
│   ├── clean_svgs.py                  # Strip/normalize SVG attributes
│   ├── generate_vue_components.py     # Generate Vue 3 components → ../epicenter-icons-vue/
│   ├── generate_react_components.py   # Generate React components → ../epicenter-icons-react/
│   ├── generate-vue-types.js          # Generate Vue .d.ts files
│   └── generate-react-types.js        # Generate React .d.ts files
├── icons.json                         # Icon metadata catalog (names, tags, categories)
├── base.scss                          # Shared icon styles (copied to both packages during build)
├── downloaded_svgs/                   # Raw SVGs (gitignored)
└── cleaned_svgs/                      # Processed SVGs (gitignored)
```

## Build

```bash
# Full build — generates all components, types, and copies assets
npm run build

# Individual steps
npm run download          # Download SVGs from CDN → downloaded_svgs/
npm run clean             # Process SVGs → cleaned_svgs/
npm run generate:vue      # Generate Vue components → ../epicenter-icons-vue/
npm run generate:vue-types  # Generate Vue .d.ts files
npm run generate:react    # Generate React components → ../epicenter-icons-react/
npm run generate:react-types  # Generate React .d.ts files
npm run copy:assets       # Copy base.scss to both output packages
```

## Pipeline

1. **Download** — `download_svgs.py` reads `icons.json` and fetches SVGs from `cdn.hugeicons.com` into `downloaded_svgs/`
2. **Clean** — `clean_svgs.py` strips width/height, normalizes fill/stroke attributes, and minifies SVGs into `cleaned_svgs/`
3. **Generate** — Framework-specific scripts convert cleaned SVGs into Vue (`defineComponent` + `h()`) and React (JSX functional components)
4. **Types** — TypeScript declaration files are generated for both packages
5. **Assets** — `base.scss` is copied into both output packages

## Naming

The `shared.py` module contains `svg_filename_to_component_name()` which converts kebab-case SVG filenames to PascalCase component names. It handles numeric prefixes, special characters, and naming conflicts. Both Vue and React generation scripts use this shared function.
