<template>
  <button
    ref="buttonEl"
    class="ep-button"
    :disabled="status === 'loading'"
    :style="{ width: buttonWidth }"
    @click="handleClick"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <!-- Use the status as the key to trigger transitions -->
      <span :key="status">
        <template v-if="status === 'loading'">
          Loading…
          <!-- Loader SVG completely replaces the text -->
          <!-- <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentcolor"
          >
            <g
              fill="none"
              fill-rule="evenodd"
            >
              <g
                transform="translate(1 1)"
                stroke-width="2"
              >
                <circle
                  stroke-opacity=".5"
                  cx="18"
                  cy="18"
                  r="18"
                />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg> -->
        </template>
        <template v-else>
          {{ currentText }}
        </template>
      </span>
    </transition>
  </button>
</template>

<script setup>
  import { computed, nextTick, onMounted, ref } from 'vue'

  /*
    Props:
    - status: external state of the button ("default", "loading", "success", "failure")
    - label: the default text displayed on the button
    - successMessage: optional success message to show when status === "success"
    - failureMessage: optional failure message to show when status === "failure"
  */
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
    }
  })

  // Emit the click event to let the parent trigger the async operation.
  // The parent should also update the button’s status externally.
  const emit = defineEmits(['click'])
  const handleClick = (event) => {
    // Only emit if not already loading
    if (props.status !== 'loading') {
      emit('click', event)
    }
  }

  // Compute the current text to display based on the status and optional messages.
  const currentText = computed(() => {
    if (props.status === 'success' && props.successMessage) {
      return props.successMessage
    } else if (props.status === 'failure' && props.failureMessage) {
      return props.failureMessage
    }
    return props.label
  })

  // Reference to the button element and a reactive value to store its width.
  const buttonEl = ref(null)
  const buttonWidth = ref('')

  // Measure the natural width after the component is mounted.
  onMounted(() => {
    nextTick(() => {
      if (buttonEl.value) {
        buttonWidth.value = buttonEl.value.offsetWidth + 'px'
      }
    })
    console.log('buttonWidth', buttonEl.value.offsetWidth)
  })
</script>

<style scoped>

  /* Ensure the button is inline-block so that the fixed width is respected */
  .ep-button {
    display: inline-block;
    max-width: unset;
    text-align: center;
  }

  /* Example fade transition for smooth text/loader changes */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Spinner styling if needed */
  .spinner {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  .path {
    stroke: #fff;
    /* Adjust color as needed */
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>