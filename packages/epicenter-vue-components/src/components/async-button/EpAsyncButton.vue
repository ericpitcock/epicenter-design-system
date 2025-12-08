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

<script setup>
  import { computed, nextTick, onMounted, ref, watch } from 'vue'

  const props = defineProps({
    /**
     * The current state of the button.
     * @values 'default', 'loading', 'success', 'failure'
     */
    status: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'loading', 'success', 'failure'].includes(value)
    },
    /**
     * The default button label text.
     */
    label: {
      type: String,
      default: 'Submit'
    },
    /**
     * Message displayed when status is 'success'. Falls back to label if not provided.
     */
    successMessage: {
      type: String,
      default: ''
    },
    /**
     * Message displayed when status is 'failure'. Falls back to label if not provided.
     */
    failureMessage: {
      type: String,
      default: ''
    },
    /**
     * Controls how the loading state is visually indicated.
     * @values 'text', 'spinner'
     */
    loadingIndicator: {
      type: String,
      default: 'text',
      validator: (v) => ['text', 'spinner'].includes(v)
    },
    /**
     * Text displayed during loading state (used for 'text' mode and screen reader text for spinner).
     */
    loadingText: {
      type: String,
      default: 'Loading…'
    },
    /**
     * If true, maintains consistent button width across state changes to prevent layout shift.
     */
    preserveWidth: {
      type: Boolean,
      default: true
    },
    /**
     * If true, disables the button during loading state to prevent multiple clicks.
     */
    disabledDuringLoading: {
      type: Boolean,
      default: true
    }
  })

  const emit = defineEmits(['click'])

  const onClick = (event) => {
    if (!(props.disabledDuringLoading && props.status === 'loading')) {
      emit('click', event)
    }
  }

  const currentText = computed(() => {
    if (props.status === 'success' && props.successMessage) {
      return props.successMessage
    } else if (props.status === 'failure' && props.failureMessage) {
      return props.failureMessage
    }
    return props.label
  })

  const buttonEl = ref(null)
  const buttonWidth = ref('')

  const updateWidth = () => {
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

  // Recalculate width if the visible texts change
  watch(
    () => [props.label, props.successMessage, props.failureMessage],
    () => updateWidth()
  )
</script>

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