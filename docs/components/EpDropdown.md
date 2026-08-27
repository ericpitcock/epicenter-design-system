# EpDropdown



## Usage Patterns

`EpDropdown` is a flexible dropdown component that supports both click and hover interactions, with customizable trigger and content slots.

### Basic Example

```vue
<template>
  <ep-dropdown>
    <template #trigger="{ attrs, on }">
      <button v-bind="attrs" v-on="on">
        Open Menu
      </button>
    </template>
    <template #content="{ close }">
      <ul>
        <li @click="close">Option 1</li>
        <li @click="close">Option 2</li>
        <li @click="close">Option 3</li>
      </ul>
    </template>
  </ep-dropdown>
</template>
```

### Scoped Slot Props

#### Trigger Slot
The `trigger` slot provides several useful scoped props:

- `isOpen` - Boolean indicating if dropdown is currently open
- `open` - Function to programmatically open the dropdown
- `close` - Function to programmatically close the dropdown
- `toggle` - Function to toggle the dropdown state
- `attrs` - Object with ARIA attributes for accessibility
- `on` - Event listeners object for click, mouseover, and keydown

#### Content Slot
The `content` slot provides:

- `close` - Function to close the dropdown (useful for menu items)

### Alignment

By default, the dropdown aligns to the left edge of the trigger. Use `alignRight` to align to the right:

```vue
<ep-dropdown align-right>
  <!-- ... -->
</ep-dropdown>
```

### Hover Interaction

Enable hover-to-open with the `showOnHover` prop:

```vue
<ep-dropdown show-on-hover>
  <!-- ... -->
</ep-dropdown>
```

### Programmatic Control

You can access the component's methods via template ref:

```vue
<template>
  <ep-dropdown ref="dropdownRef">
    <!-- ... -->
  </ep-dropdown>
  <button @click="dropdownRef.openDropdown()">
    Open from outside
  </button>
</template>

<script setup>
import { ref } from 'vue'

const dropdownRef = ref(null)
</script>
```

### Positioning

The dropdown panel is a native popover rendered in the browser's top layer and
tethered to the trigger with CSS anchor positioning. That means:

- It is never clipped by ancestor `overflow: hidden`/`auto` containers (tables,
  scrolling containers, headers) and needs no z-index management.
- It flips automatically at every viewport edge: near the bottom it opens
  above, near the right edge it aligns right, and corners flip both axes.
- Placement is customizable through CSS custom properties:
  `--ep-dropdown-position-area` (default `block-end span-inline-end`) sets the
  preferred side/alignment, and `--ep-dropdown-position-try-fallbacks`
  (default `flip-block, flip-inline, flip-block flip-inline`) controls the
  flip behavior when space runs out.

### Browser Support

Positioning relies on CSS anchor positioning and `showPopover({ source })`,
which are Baseline 2026: Chrome/Edge 137+, Safari 26+, Firefox 147+. There is
no fallback for older browsers — in an unsupported browser the panel still
opens and light-dismisses, but appears centered in the viewport instead of
attached to the trigger.

### Accessibility Features

- Automatic ARIA attributes for screen readers
- Keyboard navigation (Enter, Space, Arrow keys, Escape)
- ArrowDown on the trigger always moves focus to the first enabled menu item —
  opening the dropdown first if needed — even when `autoFocus` is `false`
  (`autoFocus` only controls whether opening by click moves focus)
- Native light dismiss: clicking outside or pressing Escape closes the popover
- Focus management

### Important Considerations

- The dropdown closes automatically when clicking outside (native popover
  light dismiss — no JavaScript listeners involved)
- Use the `close` function provided in the content slot to close after selection
- Keyboard navigation is built-in for accessibility

    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `alignRight` | - | `boolean` | `-` |
| `autoFocus` | - | `boolean` | `-` |
| `disabled` | - | `boolean` | `-` |
| `showOnHover` | - | `boolean` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |
| `close` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `trigger` | Trigger element that opens/closes the dropdown. Provides scoped props for custom triggers. |
| `content` | Content displayed inside the dropdown panel when open |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-dropdown` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-dropdown {
  --ep-dropdown-min-width: /* … */;
}
```

### Box

| Property | Default | State |
|---|---|---|
| `--ep-dropdown-min-width` | `anchor-size(width)` | — |
| `--ep-dropdown-width` | `fit-content` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-dropdown-offset` | `0.4rem` | — |
| `--ep-dropdown-position-area` | `block-end span-inline-end` | — |
| `--ep-dropdown-position-try-fallbacks` | `flip-block, flip-inline, flip-block flip-inline` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-dropdown-transition` | `opacity var(--duration--fast) ease, display var(--duration--fast) allow-discrete, overlay var(--duration--fast) allow-discrete` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, nextTick, ref, useId, useTemplateRef } from 'vue'

  interface Props {
    alignRight?: boolean
    autoFocus?: boolean
    disabled?: boolean
    showOnHover?: boolean
  }

  const {
    alignRight = false,
    autoFocus = true,
    disabled = false,
    showOnHover = false,
  } = defineProps<Props>()

  const emit = defineEmits<{
    click: []
    close: []
  }>()

  defineOptions({ name: 'EpDropdown' })

  const uniqueId = useId()
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': dropdownVisible.value,
    'aria-controls': contentId,
    disabled: disabled || undefined
  }))

  const triggerListeners = computed(() => ({
    click: onTriggerClick,
    pointerdown: onTriggerPointerdown,
    mouseover: onMouseover,
    keydown: onKeydown
  }))

  const dropdownVisible = ref(false)

  const dropdownRef = useTemplateRef<HTMLDivElement>('dropdown')
  const panelRef = useTemplateRef<HTMLDivElement>('panel')

  // TS 5.9's lib.dom predates the `source` option on showPopover().
  type PopoverPanel = HTMLElement & {
    showPopover(options?: { source?: HTMLElement }): void
  }

  const showPanel = (): void => {
    const panel = panelRef.value
    if (!panel || panel.matches(':popover-open')) return

    // `source` makes the trigger the popover's invoker: exempt from light
    // dismiss, and focus returns to it natively when Escape closes the panel.
    const trigger = dropdownRef.value?.querySelector(`#${triggerId}`) as HTMLElement | null
    ;(panel as PopoverPanel).showPopover({ source: trigger ?? undefined })
  }

  const hidePanel = (): void => {
    const panel = panelRef.value
    if (!panel || !panel.matches(':popover-open')) return

    panel.hidePopover()
  }

  const focusFirstMenuItem = async (): Promise<void> => {
    await nextTick()

    // Skip disabled items: EpMenu excludes them from roving focus, so landing
    // on one would strand arrow-key navigation.
    const firstMenuItem = dropdownRef.value?.querySelector('[role="menuitem"]:not([aria-disabled="true"])') as HTMLElement | null
    firstMenuItem?.focus()
  }

  const focusTrigger = async (): Promise<void> => {
    await nextTick()

    const trigger = dropdownRef.value?.querySelector(`#${triggerId}`) as HTMLElement | null
    trigger?.focus()
  }

  const openDropdown = (): void => {
    if (disabled || dropdownVisible.value) return

    cancelHoverClose()
    dropdownVisible.value = true
    showPanel()
    if (autoFocus) void focusFirstMenuItem()
  }

  // Closing is always safe, so unlike open this is not gated on `disabled`.
  const closeDropdown = (): void => {
    if (!dropdownVisible.value) return

    // State goes false before hidePopover() so onBeforeToggle knows this
    // close was explicit and doesn't emit a second `close`.
    dropdownVisible.value = false
    hidePanel()
    emit('close')
    void focusTrigger()
  }

  const toggleDropdown = (): void => {
    if (disabled || showOnHover) return

    if (dropdownVisible.value) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  // Light dismiss and native Escape close the popover without going through
  // closeDropdown — sync state here. No focus move: on light dismiss the user
  // just clicked somewhere else, and on Escape the browser restores focus to
  // the invoker itself.
  const onBeforeToggle = (event: ToggleEvent): void => {
    if (event.newState === 'closed' && dropdownVisible.value) {
      dropdownVisible.value = false
      emit('close')
    } else if (event.newState === 'open' && !dropdownVisible.value) {
      dropdownVisible.value = true
    }
  }

  // A custom trigger that doesn't spread `attrs` has no invoker relationship,
  // so pointerdown on it light-dismisses the popover before click fires —
  // without this guard the click would immediately reopen it.
  let wasOpenOnPointerDown = false

  const onTriggerPointerdown = (): void => {
    wasOpenOnPointerDown = dropdownVisible.value
  }

  const onTriggerClick = (): void => {
    const closedByLightDismiss = wasOpenOnPointerDown && !dropdownVisible.value
    wasOpenOnPointerDown = false

    if (closedByLightDismiss) return

    toggleDropdown()
  }

  const onKeydown = (event: KeyboardEvent): void => {
    if (disabled) return
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      toggleDropdown()
    } else if (key === 'ArrowDown') {
      event.preventDefault()
      // Explicit keyboard navigation: move focus into the menu even when
      // autoFocus is off (which only governs focus-steal on open) or the
      // dropdown is already open.
      openDropdown()
      void focusFirstMenuItem()
    } else if (key === 'Escape') {
      event.preventDefault()
      closeDropdown()
    }
  }

  const onMouseover = (): void => {
    if (!disabled && showOnHover) {
      openDropdown()
    }
  }

  // The old padding-top hover bridge is gone (the gap is a margin now, and the
  // panel may flip above the trigger), so hover-close gets a grace period that
  // survives the pointer crossing the gap. Re-entering anywhere in the root —
  // including the panel, which still bubbles to it — cancels the close.
  const HOVER_CLOSE_DELAY = 150
  let hoverCloseTimer: ReturnType<typeof setTimeout> | undefined

  const cancelHoverClose = (): void => {
    if (hoverCloseTimer === undefined) return

    clearTimeout(hoverCloseTimer)
    hoverCloseTimer = undefined
  }

  const onMouseleave = (): void => {
    if (!disabled && showOnHover) {
      hoverCloseTimer = setTimeout(closeDropdown, HOVER_CLOSE_DELAY)
    }
  }

  defineExpose({ openDropdown, closeDropdown, toggleDropdown })
</script>

<template>
  <div
    ref="dropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
    @mouseover="cancelHoverClose"
  >
    <!-- @slot Trigger element that opens/closes the dropdown. Provides scoped props for custom triggers. -->
    <slot
      name="trigger"
      :is-open="dropdownVisible"
      :open="openDropdown"
      :close="closeDropdown"
      :toggle="toggleDropdown"
      :attrs="triggerAttrs"
      :on="triggerListeners"
    >
      <button
        type="button"
        v-bind="triggerAttrs"
        v-on="triggerListeners"
      >
        Default dropdown
      </button>
    </slot>
    <div
      :id="contentId"
      ref="panel"
      popover="auto"
      :class="['ep-dropdown__container', { 'ep-dropdown__container--align-right': alignRight }]"
      role="region"
      :aria-labelledby="triggerId"
      @beforetoggle="onBeforeToggle"
    >
      <div
        class="ep-dropdown__content"
        tabindex="-1"
      >
        <!-- @slot Content displayed inside the dropdown panel when open -->
        <slot
          name="content"
          :close="closeDropdown"
        />
      </div>
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-dropdown {
  --ep-dropdown-width: fit-content;
  --ep-dropdown-offset: 0.4rem;
  --ep-dropdown-min-width: anchor-size(width);
  --ep-dropdown-position-area: block-end span-inline-end;
  --ep-dropdown-position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
  --ep-dropdown-transition:
    opacity var(--duration--fast) ease,
    display var(--duration--fast) allow-discrete,
    overlay var(--duration--fast) allow-discrete;

  position: relative;
  width: var(--ep-dropdown-width);
  anchor-name: --ep-dropdown-anchor;
  anchor-scope: --ep-dropdown-anchor;

  // The panel is a [popover]: it renders in the top layer (never clipped by
  // ancestor overflow, no z-index needed) and is anchor-positioned back onto
  // the .ep-dropdown root, which wraps the trigger at fit-content width.
  &__container {
    // overflow/padding/border/margin/background/color/inset reset the UA
    // [popover] sheet. overflow must be visible: submenus and the enrichment
    // preview hang outside the panel box.
    overflow: visible;
    // position must be declared here, not inherited from the UA [popover]
    // sheet: Safari only applies the UA position while the popover is open,
    // so during the allow-discrete close fade the panel would fall into
    // normal flow — a ghost panel that shoves the layout until display flips.
    position: fixed;
    min-width: var(--ep-dropdown-min-width);
    padding: 0;
    border: 0;
    margin: 0;
    background: transparent;
    color: inherit;
    inset: auto;
    // The gap must be margin, not padding: position-try flip tactics mirror
    // margins to the opposite side, so it stays between trigger and panel
    // when the panel flips above.
    margin-block-start: var(--ep-dropdown-offset);
    opacity: 0;
    position-anchor: --ep-dropdown-anchor;
    position-area: var(--ep-dropdown-position-area);
    position-try-fallbacks: var(--ep-dropdown-position-try-fallbacks);
    transition: var(--ep-dropdown-transition);

    &:popover-open {
      opacity: 1;

      @starting-style {
        opacity: 0;
      }

      // Safari (detectable as no `overlay` support) glitches popover ENTRY
      // animations two ways: a discrete display transition blanks the panel
      // for one frame at transition end, and on the first open after a page
      // load even a plain opacity fade re-runs — fade in, collapse for a
      // frame, fade in again. Transitions read from the destination state, so
      // `none` here makes only the entry instant (native macOS menus open the
      // same way); the exit keeps the base fade — its end-of-transition
      // artifacts land at opacity 0, where they are invisible.
      @supports not (overlay: auto) {
        transition: none;
      }
    }

    &--align-right {
      --ep-dropdown-position-area: block-end span-inline-start;
    }
  }

  &__content {
    // Containing block for absolutely positioned flyouts nested in the panel
    // (.ep-menu__item__sub-menu, .enrichment-preview).
    position: relative;
  }
}

```