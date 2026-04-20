---
description: Generate Vue 3 components following Epicenter conventions
mode: agent
---

# Vue 3 Component Generator

Generate Vue 3 components following strict conventions: Composition API with script setup,
Reactive Props Destructuring, defineModel(), scoped SCSS with locally-scoped
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

<style scoped lang="scss">
  .component-name {
    --component-bg: var(--color-surface, #ffffff);
    --component-border: var(--color-border, #e5e7eb);

    background: var(--component-bg);
    border: 1px solid var(--component-border);
  }
</style>
```

## Rules

- Arrow functions only (`const onFoo = () => {}`)
- Event handlers prefixed with `on` (`onSelect`, `onClear`, `onToggle`)
- `interface Props {}` + destructured `defineProps<Props>()` with inline defaults — no `withDefaults`
- `defineModel()` for all v-model bindings — never manual emits
- `defineOptions({ name: 'ComponentName' })` on every component
- Primitives: `ref()`. Large objects: `shallowRef()`. Derived: `computed()`
- Never destructure `reactive()` — breaks reactivity
- `<style scoped lang="scss">` — component tokens scoped to root class, never `:root`
- `rem` for spacing/typography. No Tailwind
- Semantic HTML elements, `aria-label` when needed, keyboard navigation for interactive elements
