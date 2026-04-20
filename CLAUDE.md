# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Companion documents

Additional conventions are already documented in repo files — read these when relevant rather than re-discovering:

- [AGENTS.md](AGENTS.md) — top-level overview, commands table, component conventions (Vue + React)
- [.github/instructions/epicenter-styles.instructions.md](.github/instructions/epicenter-styles.instructions.md) — token format, build pipeline, SCSS conventions for `packages/epicenter-styles`
- [.github/prompts/vue-component.prompt.md](.github/prompts/vue-component.prompt.md) — Vue 3 component anatomy and rules
- [.github/prompts/react-component.prompt.md](.github/prompts/react-component.prompt.md) — React component anatomy, polymorphic `as` pattern, story template
- [interface-custom-properties-guide.md](interface-custom-properties-guide.md) — semantic surface layering (`--interface-bg`, `--interface-surface`, etc.)

## Commands

Run from repo root unless noted:

| Task | Command |
|---|---|
| Vue Storybook dev | `npm run storybook` (port 6006) |
| React Storybook dev | `npm run storybook:react` (port 6007, config dir `.storybook-react`) |
| Build styles | `cd packages/epicenter-styles && npm run build` |
| Watch styles build | `cd packages/epicenter-styles && npm run build:watch` |
| Lint all | `npm run lint` |
| Lint Vue SFCs only | `npm run lint:vue` |
| Lint SCSS | `cd packages/epicenter-styles && npm run lint` (stylelint) |
| VitePress docs dev | `cd docs && npm run docs:dev` |
| Install every workspace | `npm run install-all` |
| Publish locally via yalc | `npm run yalc:publish-all` |

There is **no unit test suite** — Storybook is the development and validation environment. When making UI changes, run the relevant Storybook and verify visually.

## Architecture

Multi-framework component library (not a typical npm workspace monorepo — each `packages/*` has its own `package.json` and `node_modules`, installed independently via `install-all`).

```
packages/
├── epicenter-styles/           # Source of truth for tokens + SCSS → compiled CSS
├── epicenter-components-vue/   # Vue 3 components (script setup + TS)
├── epicenter-components-react/ # React 18 components (TSX)
├── epicenter-icons/            # Icon build pipeline (icons.json → SVG download/clean → framework components)
├── epicenter-icons-vue/        # GENERATED — do not hand-edit
├── epicenter-icons-react/      # GENERATED — do not hand-edit
└── storybook-shared/           # Helpers shared between both Storybook instances
```

### Styles pipeline (`packages/epicenter-styles/scripts/build.mjs`)

1. YAML tokens in `tokens/color/*.yaml` (HSL triplets like `red-500: 0 84% 60%`) →
2. Generated SCSS partials in `scss/color/` (generated, do not edit) →
3. `index.scss` compiled to `dist/epicenter-design-system.css` →
4. Also written to `static/epicenter-design-system.css` for the landing site

Themes use the CSS `light-dark()` function, toggled via `html.light-theme` / `html.dark-theme`. After editing any YAML token, run the styles build.

Component SCSS lives in `packages/epicenter-styles/scss/components/` as `_component-name.scss` (no `ep-` prefix on the filename) and must be registered in `_index.scss` via `@use`. Styles are **shared across Vue and React** — not duplicated inside each framework package. Vue SFCs use `<style scoped>` only for component-instance-scoped CSS variables, referencing the global classes by name.

### Framework parity

When changing a component, apply the change to **both** `epicenter-components-vue` and `epicenter-components-react`. Keep prop names, event signatures, and behavior aligned. The frameworks intentionally diverge on idiom only:

- Vue: `defineModel()` for v-model; named `<slot>`s; `<style scoped lang="scss">`
- React: controlled props + callbacks; `children` + specific `ReactNode` props (`iconLeft`, `iconRight`); no per-component SCSS — styles come from `epicenter-styles`

### Icons

Never edit files in `epicenter-icons-vue/` or `epicenter-icons-react/` — regenerate from `packages/epicenter-icons/icons.json`. Import per-icon from the framework package: `@ericpitcock/epicenter-icons-vue/ArrowDown01`. A helper `scripts/copy-icons-from-npm.sh` runs during Netlify builds to hydrate icon packages from npm.

### Naming

- Component prefix: `Ep` (e.g. `EpButton`, `EpTable`)
- CSS: modified BEM — `.ep-button`, `.ep-button--large`, `.ep-button__icon`
- Component custom properties scoped as `--ep-component-name-*`, referencing theme tokens (`--interface-*`, `--text-color`, `--border-color`) — never raw color values
- Every component must ship a story: `.stories.js` (Vue) or `.stories.tsx` (React) alongside the component

## File removal

If a file is tracked (`git ls-files <file>` returns it), use `git rm` — not plain `rm` — so the deletion is staged.
