# EpAsyncButton



## Usage Patterns

`EpAsyncButton` is designed for handling asynchronous operations with visual feedback. It automatically manages button state transitions during async operations like API calls.

### Basic Example

```vue
<template>
  <ep-async-button
    :status="buttonStatus"
    label="Save"
    success-message="Saved!"
    failure-message="Error saving"
    @click="handleSave"
  />
</template>

<script setup>
import { ref } from 'vue'

const buttonStatus = ref('default')

const handleSave = async () => {
  buttonStatus.value = 'loading'
  
  try {
    await saveData()
    buttonStatus.value = 'success'
    setTimeout(() => buttonStatus.value = 'default', 2000)
  } catch (error) {
    buttonStatus.value = 'failure'
    setTimeout(() => buttonStatus.value = 'default', 2000)
  }
}
</script>
```

### Loading Indicators

The component supports two loading indicator modes:

- **`text`** (default): Shows the `loadingText` message
- **`spinner`**: Displays an animated spinner with screen-reader text

```vue
<ep-async-button
  loading-indicator="spinner"
  loading-text="Saving..."
/>
```

### Width Preservation

By default, the button maintains a consistent width across state changes to prevent layout shift. You can disable this behavior if needed:

```vue
<ep-async-button
  :preserve-width="false"
/>
```

### Important Considerations

- Always manage the `status` prop externally - the component is controlled
- Reset status to `'default'` after showing success/failure messages
- Use `disabledDuringLoading` to prevent multiple submissions (enabled by default)
- Provide meaningful `successMessage` and `failureMessage` for user feedback
- The component automatically handles ARIA attributes for accessibility

    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `status` | The current state of the button. | `string` | `'default'` |
| `label` | The default button label text. | `string` | `'Submit'` |
| `successMessage` | Message displayed when status is 'success'. Falls back to label if not provided. | `string` | `''` |
| `failureMessage` | Message displayed when status is 'failure'. Falls back to label if not provided. | `string` | `''` |
| `loadingIndicator` | Controls how the loading state is visually indicated. | `string` | `'text'` |
| `loadingText` | Text displayed during loading state (used for 'text' mode and screen reader text for spinner). | `string` | `'Loading…'` |
| `preserveWidth` | If true, maintains consistent button width across state changes to prevent layout shift. | `boolean` | `true` |
| `disabledDuringLoading` | If true, disables the button during loading state to prevent multiple clicks. | `boolean` | `true` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
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
```