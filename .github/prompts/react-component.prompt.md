---
description: Generate React 18 components following Epicenter conventions
mode: agent
---

# React Component Generator

Generate React 18 components following Epicenter Design System conventions: functional components with TypeScript, exported props types, arrow functions, polymorphic rendering, and BEM class composition.

## Component anatomy

```tsx
import { type ReactNode, type ElementType, type Ref, forwardRef } from 'react'

// 1. Types — exported from the component file
export type ComponentSize = 'small' | 'default' | 'large'

export interface EpComponentProps {
  /** Additional CSS classes */
  className?: string
  /** Whether the component is disabled */
  disabled?: boolean
  /** The size variant */
  size?: ComponentSize
}

// 2. Component — named export, arrow function or function declaration
export const EpComponent = forwardRef<HTMLDivElement, EpComponentProps>(({
  className = '',
  disabled = false,
  size = 'default',
  ...rest
}, ref) => {
  // 3. Class composition — array filter pattern
  const classes = [
    'ep-component',
    size !== 'default' && `ep-component--${size}`,
    disabled && 'ep-component--disabled',
    className,
  ].filter(Boolean).join(' ')

  // 4. Event handlers — arrow functions
  const handleClick = () => { /* ... */ }

  return (
    <div ref={ref} className={classes} {...rest}>
      {/* content */}
    </div>
  )
})

EpComponent.displayName = 'EpComponent'
```

## Rules

- Export props type/interface from the component file (`export type EpFooProps = { ... }` or `export interface EpFooProps { ... }`)
- Use `forwardRef` when the component wraps a focusable/measurable element
- Always set `displayName` on components using `forwardRef` or arrow-function exports
- Spread `...rest` onto the root element for HTML attribute passthrough
- Class composition: array of conditional strings → `.filter(Boolean).join(' ')`
- Arrow functions for all handlers and utilities
- Polymorphic rendering via `as` prop pattern (see EpButton for reference)
- Icons as `ReactNode` props (`iconLeft`, `iconRight`) — NOT named slots
- Floating panels (dropdowns, tooltips, popovers) use the native Popover API (`popover="auto"` + `showPopover({ source })`) with CSS anchor positioning from `epicenter-styles` (`anchor-name`/`anchor-scope` on the component root, `position-area` + `position-try-fallbacks` on the panel) — no JS positioning libraries
- Use `framer-motion` for animation
- No inline styles except for dynamic values (width, position calculations)
- Semantic HTML, `aria-*` attributes, keyboard event handlers

## Storybook story pattern

```tsx
import { EpComponent } from '@ericpitcock/epicenter-components-react'
import type { EpComponentProps } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<EpComponentProps> = {
  title: 'Components/ComponentName',
  component: EpComponent,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<EpComponentProps>

export const Default: Story = {
  args: {
    size: 'default',
  },
}
```

## Key differences from Vue

| Vue | React |
|---|---|
| `<slot />` / named slots | `children` + specific props (`iconLeft`, `iconRight`) |
| `defineModel()` / `v-model` | Controlled props (`value` + `onChange`) |
| `defineEmits()` | Callback props (`onClick`, `onChange`) |
| `computed()` | `useMemo()` / derived in render |
| `ref()` / `reactive()` | `useState()` / `useRef()` |
| `<style scoped lang="scss">` | SCSS in `packages/epicenter-styles/scss/components/` |
