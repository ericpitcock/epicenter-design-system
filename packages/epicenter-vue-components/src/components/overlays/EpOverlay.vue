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

<script setup>
  import { ref, watch } from 'vue'

  defineOptions({
    name: 'EpOverlay'
  })

  const props = defineProps({
    /**
     * The type of overlay to display.
     * @values 'modal', 'toast'
     */
    type: {
      type: String,
      default: 'modal',
    },
    /**
     * Controls the visibility of the overlay (use with v-model).
     */
    modelValue: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, automatically dismisses the overlay after the specified duration.
     */
    autoDismiss: {
      type: Boolean,
      default: false,
    },
    /**
     * Duration in milliseconds before auto-dismissing (when autoDismiss is true).
     */
    duration: {
      type: Number,
      default: 3000,
    },
    /**
     * If true, clicking the backdrop will close the overlay.
     */
    backdropClose: {
      type: Boolean,
      default: true,
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const dialog = ref(null)

  watch(() => props.modelValue, (newVal) => {
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

  const onBackdropClick = () => {
    if (!props.backdropClose) return

    emit('update:modelValue', false)
    dialog.value.close()
  }
</script>

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