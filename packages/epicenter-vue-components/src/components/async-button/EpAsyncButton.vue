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
    status: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'loading', 'success', 'failure'].includes(value)
    },
    label: {
      type: String,
      default: 'Submit'
    },
    successMessage: {
      type: String,
      default: ''
    },
    failureMessage: {
      type: String,
      default: ''
    },
    // NEW: control how loading is shown
    loadingIndicator: {
      type: String,
      default: 'text', // 'text' | 'spinner'
      validator: (v) => ['text', 'spinner'].includes(v)
    },
    // NEW: customizable loading text (used for 'text' mode and SR text for spinner)
    loadingText: {
      type: String,
      default: 'Loading…'
    },
    // NEW: keep button width stable across states
    preserveWidth: {
      type: Boolean,
      default: true
    },
    // NEW: optionally allow clicks during loading
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