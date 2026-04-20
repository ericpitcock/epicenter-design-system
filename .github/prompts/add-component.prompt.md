---
description: Scaffold a new Epicenter component across Vue, React, styles, and stories
mode: agent
---

# Add Component

Scaffold a new `Ep`-prefixed component across the monorepo, enforcing framework parity from the start.

## What this creates

Given a component name (e.g., `EpToggle`):

1. **Vue component** — `packages/epicenter-components-vue/src/components/toggle/EpToggle.vue`
2. **Vue story** — `packages/epicenter-components-vue/src/components/toggle/EpToggle.stories.js`
3. **React component** — `packages/epicenter-components-react/src/components/toggle/EpToggle.tsx`
4. **React story** — `packages/epicenter-components-react/src/components/toggle/EpToggle.stories.tsx`
5. **SCSS** — `packages/epicenter-styles/scss/components/_toggle.scss`
6. **SCSS index** — Add `@use 'toggle'` to `packages/epicenter-styles/scss/components/_index.scss`
7. **Package exports** — Add to `packages/epicenter-components-vue/src/index.ts` and `packages/epicenter-components-react/src/index.ts`

## Steps

1. Ask the user for the component name if not provided (must start with `Ep`)
2. Ask what props the component needs
3. Generate all files following the conventions in [vue-component.prompt.md](vue-component.prompt.md) and [react-component.prompt.md](react-component.prompt.md)
4. Register the SCSS file in the components index
5. Export the component from both package entry points
6. Confirm all files created

## Conventions

- Directory name: lowercase kebab-case without `ep-` prefix (e.g., `EpToggle` → `toggle/`)
- SCSS file: `_toggle.scss` with `.ep-toggle` as root class
- Props and behavior must match across Vue and React
- Vue uses `<slot />` where React uses `children` prop
- Vue uses `defineModel()` where React uses controlled `value` + `onChange`
- Both stories should demonstrate the same variants and states

## SCSS scaffold

```scss
.ep-component-name {
  // Component-scoped custom properties
  --ep-component-name-bg: var(--interface-surface);
  --ep-component-name-border-color: var(--border-color);

  background: var(--ep-component-name-bg);
  border: 1px solid var(--ep-component-name-border-color);
}
```
