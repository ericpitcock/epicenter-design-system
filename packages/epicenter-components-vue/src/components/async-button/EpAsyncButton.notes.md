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
