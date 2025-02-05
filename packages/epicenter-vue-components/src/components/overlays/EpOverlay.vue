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
    type: {
      type: String,
      default: 'modal', // modal or toast
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    autoDismiss: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
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