# Agents

## File Removal

When removing a file, first check if it is tracked by version control (`git ls-files <file>`). If the file is tracked, use `git rm` instead of `rm` so the deletion is properly staged.

# Vue 3 Component Generator

Generate Vue 3 components following strict conventions: Composition API with script setup,
Reactive Props Destructuring, defineModel(), Pinia 3 setup stores, scoped SCSS with locally-scoped
CSS variables, arrow functions only, and full TypeScript strictness. Use this skill whenever the user
asks to create, scaffold, or generate a Vue component, composable, Pinia store, or any .vue file —
even if they don't mention conventions explicitly. Also trigger when the user mentions Vue patterns
like "script setup", "composable", "defineProps", "defineModel", or asks for help
structuring a Vue feature module.

This skill produces Vue 3 components, composables, and Pinia stores that follow a specific, modern set of conventions. Every piece of code you generate under this skill should feel like it came from the same codebase — consistent patterns, no guesswork.

## Why these conventions matter

These aren't arbitrary rules. Reactive Props Destructuring keeps component APIs clean and avoids the verbosity of `withDefaults`. Scoped SCSS with locally-scoped CSS variables gives you encapsulation without specificity wars or global scope pollution. Arrow functions and consistent naming conventions make the codebase scannable — you can tell what a function does and when it fires just from its signature. The goal is a codebase that's fast, type-safe, and pleasant to maintain.

## Component anatomy

Every `.vue` component follows this structure, in this order. Note the indentation: all content inside `<script>` and `<style>` blocks is indented one level from the tag.

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
    // component-scoped design tokens here, NOT on :root
    --component-bg: var(--color-surface, #ffffff);
    --component-border: var(--color-border, #e5e7eb);

    background: var(--component-bg);
    border: 1px solid var(--component-border);
  }
</style>
```

## Function style: arrow functions only

All functions in components, composables, and stores use `const` arrow function syntax. No `function` declarations.

```typescript
  // Correct
  const onClear = () => {
    modelValue.value = ''
  }

  const formatPrice = (cents: number): string => {
    return (cents / 100).toFixed(2)
  }

  // Wrong — never use function declarations
  function onClear() { ... }
  function formatPrice(cents: number) { ... }
```

## Event handler naming: `on` prefix

All event handler functions use the `on` prefix.

```typescript
  const onClear = () => { ... }
  const onToggle = () => { ... }
  const onSearch = (query: string) => { ... }
  const onSelect = (item: T) => { ... }
```

## Props: Reactive Props Destructuring

Always define a `Props` interface and destructure with defaults inline. No `withDefaults`, no runtime prop declarations.

```typescript
  interface Props {
    title: string
    count?: number
    variant?: 'primary' | 'secondary'
  }

  const { title, count = 0, variant = 'primary' } = defineProps<Props>()
```

## Two-way binding: defineModel — the only pattern

For any component that supports `v-model`, use `defineModel()`. Never define manual emits for v-model updates.

```typescript
  const modelValue = defineModel<string>({ required: true })
  // Named models:
  const selected = defineModel<string>('selected')
```

For debounce/transform, use a computed setter or custom ref composable — never `watch` to sync local state.

## Component metadata: defineOptions — always include

```typescript
  defineOptions({
    name: 'SearchInput',
  })
```

## Typed slots: defineSlots

```typescript
  const slots = defineSlots<{
    default(props: { item: Product }): any
    header(): any
  }>()
```

## Reactivity

- Primitives: `ref()`. Large/nested objects: `shallowRef()`. Derived values: `computed()`.
- Never destructure `reactive()` — breaks reactivity.
- Pass reactive state to composables as getter functions: `() => value`.
- Never use `watch` to sync local state with props or model values.

## Pinia stores (Setup Store syntax)

```typescript
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  const addItem = (product: Product, quantity = 1) => {
    const existing = items.value.find(i => i.productId === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ productId: product.id, price: product.price, quantity })
    }
  }

  return { items: readonly(items), total, addItem }
})
```

## Styling

- `<style scoped lang="scss">` on every component.
- Component tokens scoped to root class, never `:root` inside scoped blocks.
- CSS variables for state changes preferred over toggling classes.
- `rem` for spacing/typography. No Tailwind. All CSS inside `<style>` indented one level.

## TypeScript

- `strict: true` in `tsconfig.json`.
- Explicit interfaces for all Props, Emits, Slots, and API response shapes.
- Use `generic` attribute for collection-based components:

```vue
<script setup lang="ts" generic="T extends { id: string }">
```

## Accessibility baseline

- Semantic HTML elements (`button`, `nav`, `dialog` — not `div` with click handlers).
- `aria-label` or `aria-labelledby` when semantics aren't sufficient.
- Keyboard navigation for all interactive elements.