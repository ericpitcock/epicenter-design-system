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
</script>

<template>
  <Teleport
    defer
    to="#app"
  >
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

<style lang="scss" scoped>
  .ep-dialog {
    position: absolute;
    top: 3rem;
    right: 3rem;

    &::backdrop {
      background: var(--overlay-color);
      cursor: pointer;
    }
  }
</style>
```