# EpOverlay



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `autoDismiss` | - | `boolean` | `-` |
| `backdropClose` | - | `boolean` | `-` |
| `duration` | - | `number` | `-` |
| `modelValue` | - | `boolean` | `-` |
| `type` | - | `OverlayType` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `default` | Content to display inside the overlay dialog |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-dialog` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-dialog {
  --ep-overlay-backdrop-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-overlay-backdrop-bg-color` | `var(--overlay-color)` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-overlay-bottom` | `auto` | — |
| `--ep-overlay-left` | `50%` | — |
| `--ep-overlay-right` | `auto` | — |
| `--ep-overlay-top` | `50%` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-overlay-translate-x` | `-50%` | — |
| `--ep-overlay-translate-y` | `-50%` | — |

## Component Code

```vue
<script setup lang="ts">
  import { onMounted, onUpdated, ref, useTemplateRef } from 'vue'

  type OverlayType = 'modal' | 'toast'

  interface Props {
    autoDismiss?: boolean
    backdropClose?: boolean
    duration?: number
    modelValue?: boolean
    type?: OverlayType
  }

  const {
    backdropClose = true,
    modelValue = false,
    type = 'modal',
  } = defineProps<Props>()

  const emit = defineEmits<{
    'update:modelValue': [value: boolean]
  }>()

  defineOptions({ name: 'EpOverlay' })

  const dialog = useTemplateRef<HTMLDialogElement>('dialog')
  const lastOpenState = ref<boolean | null>(null)

  const syncDialogState = (): void => {
    if (!dialog.value) return

    if (lastOpenState.value === modelValue) return

    lastOpenState.value = modelValue

    if (modelValue === true) {
      if (type === 'modal') {
        dialog.value.showModal()
      } else {
        dialog.value.show()
      }
    } else {
      dialog.value.close()
    }
  }

  onMounted(syncDialogState)
  onUpdated(syncDialogState)

  const onBackdropClick = (): void => {
    if (!backdropClose) return

    emit('update:modelValue', false)
    dialog.value?.close()
  }

  /*
   * The dialog is teleported to the body, as the React component's portal does
   * — not to `#app`.
   *
   * `#app` was an assumption about the consumer: that their mount element has
   * that id. It is also usually the element the app itself renders into, which
   * made every dialog a sibling of the consumer's own root. In an app whose root
   * is a bare <router-view>, that put a dialog next to the routed page; on a
   * route change Vue took it as the place to insert the next page, it left with
   * the old page, and `insertBefore` threw — a blank page, in production builds
   * only. Nothing an app renders is a direct child of <body>, so there the
   * dialog can never be anyone's insertion anchor.
   *
   * No `defer` on the Teleport: that was there to wait for `#app` to exist. The
   * body always does.
   *
   * This note is in the script rather than the template on purpose. A comment at
   * the template root survives in dev builds and is stripped in production, so
   * it changes the rendered tree between the two — which is how the bug above
   * stayed hidden in the app that found it.
   */
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      class="ep-dialog"
      role="dialog"
      :aria-modal="type === 'modal' ? 'true' : undefined"
      @click.self="onBackdropClick"
    >
      <!-- @slot Content to display inside the overlay dialog -->
      <slot />
    </dialog>
  </Teleport>
</template>


```

## Styles (SCSS)

```scss
// @block overlay
// @root .ep-dialog
// Moved out of EpOverlay.vue's scoped block, where `top: 3rem; right: 3rem` was
// baked in — every modal in every consuming app was pinned to the top right with
// no way out short of :deep(). The default is now centred, which is what a
// dialog without explicit positioning should be.
.ep-dialog {
  --ep-overlay-top: 50%;
  --ep-overlay-right: auto;
  --ep-overlay-bottom: auto;
  --ep-overlay-left: 50%;
  --ep-overlay-translate-x: -50%;
  --ep-overlay-translate-y: -50%;
  --ep-overlay-backdrop-bg-color: var(--overlay-color);

  position: absolute;
  top: var(--ep-overlay-top);
  right: var(--ep-overlay-right);
  bottom: var(--ep-overlay-bottom);
  left: var(--ep-overlay-left);
  transform: translate(var(--ep-overlay-translate-x), var(--ep-overlay-translate-y));

  &::backdrop {
    background: var(--ep-overlay-backdrop-bg-color);
    cursor: pointer;
  }
}

```