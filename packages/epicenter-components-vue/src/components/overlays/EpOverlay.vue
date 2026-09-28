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

