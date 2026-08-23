---
description: Generate Vue 3 components following Epicenter conventions
mode: agent
---

# Vue 3 Component Generator

Generate Vue 3 components following strict conventions: Composition API with script setup,
Reactive Props Destructuring, defineModel(), shared SCSS with component-scoped
CSS variables, arrow functions only, and full TypeScript strictness.

## Component anatomy

Every `.vue` component follows this structure, in this order. All content inside `<script>` and `<style>` blocks is indented one level from the tag.

```vue
<script setup lang="ts">
  import type { SomeType } from './types'

  // 1. Options (defineOptions) — always include for devtools
  defineOptions({
    name: 'ComponentName',
  })

  // 2. Type interfaces
  interface Props {
    title: string
    count?: number
  }

  // 3. Props (Reactive Props Destructuring)
  const { title, count = 0 } = defineProps<Props>()

  // 4. Models (defineModel) — no manual emits for v-model
  const modelValue = defineModel<string>({ required: true })

  // 5. Slots (defineSlots) — if needed
  // 6. Emits (defineEmits) — only for non-v-model events
  // 7. Composables and injections
  // 8. Local state (ref, shallowRef, computed)
  // 9. Event handlers and methods (arrow functions, `on` prefix)
  // 10. Lifecycle hooks
</script>

<template>
  <!-- Semantic HTML, accessible markup -->
</template>

<!-- No <style> block. Component CSS lives in
     packages/epicenter-styles/scss/components/_component-name.scss: -->
```

```scss
.ep-component-name {
  --ep-component-name-bg-color: var(--interface-surface);
  --ep-component-name-border-width: var(--border-width--hairline);
  --ep-component-name-border-style: solid;
  --ep-component-name-border-color: var(--border-color);

  background: var(--ep-component-name-bg-color);
  border-width: var(--ep-component-name-border-width);
  border-style: var(--ep-component-name-border-style);
  border-color: var(--ep-component-name-border-color);
}
```

## Rules

- Arrow functions only (`const onFoo = () => {}`)
- Event handlers prefixed with `on` (`onSelect`, `onClear`, `onToggle`)
- `interface Props {}` + destructured `defineProps<Props>()` with inline defaults — no `withDefaults`
- `defineModel()` for all v-model bindings — never manual emits
- `defineOptions({ name: 'ComponentName' })` on every component
- Primitives: `ref()`. Large objects: `shallowRef()`. Derived: `computed()`
- Never destructure `reactive()` — breaks reactivity
- **No `<style>` block.** Component CSS goes in `packages/epicenter-styles/scss/components/`,
  so it is shared with the React package and reachable by consumers without `:deep()`.
  Naming and structure: [NAMING.md](../../packages/epicenter-styles/NAMING.md)
- `rem` for spacing/typography. No Tailwind
- Semantic HTML elements, `aria-label` when needed, keyboard navigation for interactive elements
