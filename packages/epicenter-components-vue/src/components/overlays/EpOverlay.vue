<script setup lang="ts">
  import { ref, watch } from 'vue'

  type OverlayType = 'modal' | 'toast'

  interface EpOverlayProps {
    autoDismiss?: boolean
    backdropClose?: boolean
    duration?: number
    modelValue?: boolean
    type?: OverlayType
  }

  const props = withDefaults(defineProps<EpOverlayProps>(), {
    autoDismiss: false,
    backdropClose: true,
    duration: 3000,
    modelValue: false,
    type: 'modal',
  })

  const emit = defineEmits<{
    'update:modelValue': [value: boolean]
  }>()

  const dialog = ref<HTMLDialogElement | null>(null)

  watch(() => props.modelValue, (newVal: boolean) => {
    if (!dialog.value) return

    if (newVal === true) {
      if (props.type === 'modal') {
        dialog.value.showModal()
      } else {
        dialog.value.show()
      }
    } else if (newVal === false) {
      dialog.value.close()
    }
  },
    { immediate: true }
  )

  const onBackdropClick = (): void => {
    if (!props.backdropClose) return

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