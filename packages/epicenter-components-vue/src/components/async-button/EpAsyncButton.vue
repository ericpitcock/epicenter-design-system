<script setup lang="ts">
  import { computed, nextTick, onMounted, ref, watch } from 'vue'

  type AsyncButtonStatus = 'default' | 'loading' | 'success' | 'failure'
  type LoadingIndicator = 'text' | 'spinner'

  interface EpAsyncButtonProps {
    disabledDuringLoading?: boolean
    failureMessage?: string
    label?: string
    loadingIndicator?: LoadingIndicator
    loadingText?: string
    preserveWidth?: boolean
    status?: AsyncButtonStatus
    successMessage?: string
  }

  const props = withDefaults(defineProps<EpAsyncButtonProps>(), {
    disabledDuringLoading: true,
    failureMessage: '',
    label: 'Submit',
    loadingIndicator: 'text',
    loadingText: 'Loading…',
    preserveWidth: true,
    status: 'default',
    successMessage: '',
  })

  const emit = defineEmits<{
    click: [event: MouseEvent]
  }>()

  const onClick = (event: MouseEvent): void => {
    if (!(props.disabledDuringLoading && props.status === 'loading')) {
      emit('click', event)
    }
  }

  const currentText = computed((): string => {
    if (props.status === 'success' && props.successMessage) {
      return props.successMessage
    } else if (props.status === 'failure' && props.failureMessage) {
      return props.failureMessage
    }
    return props.label
  })

  const buttonEl = ref<HTMLButtonElement | null>(null)
  const buttonWidth = ref('')

  const updateWidth = (): void => {
    if (!props.preserveWidth) return
    nextTick(() => {
      if (buttonEl.value) {
        buttonWidth.value = buttonEl.value.offsetWidth + 'px'
      }
    })
  }

  onMounted(() => {
    updateWidth()
  })

  watch(
    () => [props.label, props.successMessage, props.failureMessage],
    () => updateWidth()
  )
</script>

<template>
  <button
    ref="buttonEl"
    class="ep-button"
    :disabled="disabledDuringLoading && status === 'loading'"
    :style="preserveWidth ? { width: buttonWidth } : undefined"
    :aria-busy="status === 'loading' ? 'true' : 'false'"
    @click="onClick"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <span
        :key="status"
        :aria-live="status === 'loading' ? 'polite' : 'off'"
      >
        <template v-if="status === 'loading'">
          <template v-if="loadingIndicator === 'text'">
            {{ loadingText }}
          </template>
          <template v-else>
            <svg
              class="ep-spinner"
              viewBox="0 0 50 50"
              role="img"
              aria-hidden="true"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            <span class="sr-only">{{ loadingText }}</span>
          </template>
        </template>
        <template v-else>
          {{ currentText }}
        </template>
      </span>
    </transition>
  </button>
</template>

<style scoped>
  .ep-button {
    display: inline-block;
    max-width: unset;
    text-align: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Minimal spinner styles (can be moved externally later) */
  .ep-spinner {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
    animation: ep-spin 1s linear infinite;
  }

  @keyframes ep-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* For screen reader-only text (spinner mode) */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>