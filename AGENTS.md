# Agents

## Overview

Epicenter Design System — a multi-framework (Vue 3 + React 18) component library for enterprise applications. Monorepo with shared styles, 45+ components per framework, 4000+ icons, and documentation via Storybook and VitePress.

## Repository Structure

```
packages/
├── epicenter-styles/          # SCSS + YAML design tokens → CSS custom properties
├── epicenter-components-vue/  # Vue 3 components (Composition API, script setup, TS)
├── epicenter-components-react/ # React 18 components (TypeScript, TSX)
├── epicenter-icons/           # Icon build pipeline (source SVGs → framework components)
├── epicenter-icons-vue/       # Generated Vue icon components (do NOT edit manually)
├── epicenter-icons-react/     # Generated React icon components (do NOT edit manually)
└── storybook-shared/          # Shared Storybook helpers
docs/                          # VitePress documentation site
.storybook/                    # Vue Storybook config
.storybook-react/              # React Storybook config
```

## Commands

| Task | Command |
|---|---|
| Vue Storybook (dev) | `npm run storybook` (port 6006) |
| React Storybook (dev) | `npm run storybook:react` (port 6007) |
| Build styles | `cd packages/epicenter-styles && npm run build` |
| Lint | `npm run lint` |
| Lint Vue only | `npm run lint:vue` |
| VitePress docs | `cd docs && npm run docs:dev` |
| Install all packages | `npm run install-all` |
| Local publish (yalc) | `npm run yalc:publish-all` |

## Framework Parity

When adding or modifying a component, check if the change should apply to **both** Vue and React versions. Maintain consistent prop names, event signatures, and behavior across frameworks.

## Naming Conventions

- All components prefixed with `Ep` (e.g., `EpButton`, `EpTable`)
- Vue: PascalCase SFCs (`EpButton.vue`) in `packages/epicenter-components-vue/src/components/<name>/`
- React: PascalCase TSX (`EpButton.tsx`) in `packages/epicenter-components-react/src/components/<name>/`
- CSS classes: modified BEM (`.ep-button`, `.ep-button--large`, `.ep-button__icon`)

## Styles & Theming

- Design tokens defined as YAML in `packages/epicenter-styles/tokens/color/`
- Build pipeline (`packages/epicenter-styles/scripts/build.mjs`) converts YAML → SCSS → `dist/epicenter-design-system.css`
- Themes: `html.light-theme` / `html.dark-theme` classes; uses CSS `light-dark()` function
- Custom property contract: see [packages/epicenter-styles/NAMING.md](packages/epicenter-styles/NAMING.md)
- Interface-level custom properties: see [interface-custom-properties-guide.md](interface-custom-properties-guide.md)
- Component SCSS lives in `packages/epicenter-styles/scss/components/`

## Icons

Generated from `packages/epicenter-icons/icons.json`. **Never manually edit** files in `epicenter-icons-vue` or `epicenter-icons-react`. Import from the framework package:
- Vue: `@ericpitcock/epicenter-icons-vue/ArrowDown01`
- React: `@ericpitcock/epicenter-icons-react/ArrowDown01`

## Storybook

Every component **must** have a story file:
- Vue: `.stories.js` alongside the component
- React: `.stories.tsx` alongside the component

## File Removal

Check if the file is tracked by version control (`git ls-files <file>`). If tracked, use `git rm` instead of `rm`.

## Vue Component Conventions

Full Vue 3 component generator: [vue-component.prompt.md](.github/prompts/vue-component.prompt.md). Key points:

- `<script setup lang="ts">` with content indented one level
- `defineOptions({ name: 'ComponentName' })` on every component
- `interface Props {}` + destructured `defineProps<Props>()` with inline defaults
- `defineModel()` for all v-model bindings — never manual emits
- Arrow functions only (`const onFoo = () => {}`)
- Event handlers prefixed with `on` (`onSelect`, `onClear`, `onToggle`)
- No `<style>` block — component CSS lives in `packages/epicenter-styles/scss/components/`
- Composables in `packages/epicenter-components-vue/src/composables/`

## React Component Conventions

- Functional components with TypeScript
- Props type exported from component file (`export type EpButtonProps = { ... }`)
- Arrow functions for handlers and utilities
- Polymorphic rendering via `as` prop pattern
- `children` + specific slot props (`iconLeft`, `iconRight`) instead of Vue's named slots
- `@floating-ui/react` for positioning, `framer-motion` for animation

## Linting

ESLint config in `.eslintrc.cjs`:
- `plugin:vue/vue3-recommended` + `plugin:react/recommended`
- `plugin:perfectionist` for import sorting (natural, ascending)
- TypeScript: unused vars flagged (ignores `_` prefix)