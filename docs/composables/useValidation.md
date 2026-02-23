# useValidation

`useValidation` is a composable for managing form validation in Vue applications. It provides a clean API for handling validation rules, errors, and submission state with optimal UX patterns.

## Features

- **Validation on submit**: Errors only show after the first submission attempt
- **Real-time validation**: After submission, errors update on blur
- **Instant error clearing**: Errors clear immediately when the user starts typing
- **Conditional rules**: Support for validation rules that depend on form state
- **Flexible rule definitions**: Accept any validation function

## Usage

### Basic Form Validation

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <ep-input
      v-model="model.name"
      label="Name"
      :error="errors.name"
      errorMessage="Name is required"
      @input="onInput('name')"
      @blur="validateField('name')"
    />
    
    <ep-input
      v-model="model.email"
      label="Email"
      type="email"
      :error="errors.email"
      errorMessage="Please enter a valid email"
      @input="onInput('email')"
      @blur="validateField('email')"
    />
    
    <ep-button type="submit">Submit</ep-button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useValidation from '@/composables/useValidation.js'
import { EpButton, EpInput } from '@ericpitcock/epicenter-components-vue'

const model = ref({
  name: '',
  email: ''
})

// Define validation rules
const rules = {
  name: (value) => value && value.trim() !== '',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const { errors, onInput, validateField, validateForm } = useValidation(model, rules)

const handleSubmit = () => {
  if (!validateForm()) {
    console.log('Form has errors')
    return
  }
  console.log('Form is valid!', model.value)
}
</script>
```

### Conditional Validation Rules

Use conditional rules for fields that are only required based on other form values:

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <ep-radio
      v-model="model.orderType"
      value="pickup"
      label="Pickup"
    />
    <ep-radio
      v-model="model.orderType"
      value="delivery"
      label="Delivery"
    />
    
    <ep-input
      v-if="model.orderType === 'delivery'"
      v-model="model.address"
      label="Delivery Address"
      :error="errors.address"
      errorMessage="Address is required for delivery"
      @input="onInput('address')"
      @blur="validateField('address')"
    />
    
    <ep-button type="submit">Submit Order</ep-button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useValidation from '@/composables/useValidation.js'
import { EpButton, EpInput, EpRadio } from '@ericpitcock/epicenter-components-vue'

const model = ref({
  orderType: 'pickup',
  address: ''
})

// Base rules (always validated)
const rules = {
  orderType: (value) => value !== ''
}

// Conditional rules (only validated when condition is met)
const conditionalRules = (modelValue) => {
  if (modelValue.orderType === 'delivery') {
    return {
      address: (value) => value && value.trim() !== ''
    }
  }
  return {}
}

const { errors, onInput, validateField, validateForm } = useValidation(
  model,
  rules,
  conditionalRules
)

const handleSubmit = () => {
  if (!validateForm()) {
    console.log('Form has errors')
    return
  }
  console.log('Order submitted!', model.value)
}
</script>
```

### Reusable Validation Rules

Create a utility file for commonly used validation rules:

```javascript
// utils/validationRules.js
export const isRequired = (value) => !!value?.trim()

export const isEmail = (value) => 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const isPhone = (value) => 
  /^\d{3}-\d{3}-\d{4}$/.test(value)

export const minLength = (min) => (value) => 
  value && value.length >= min

export const maxLength = (max) => (value) => 
  value && value.length <= max

export const isUrl = (value) => {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}
```

Then use them in your forms:

```vue
<script setup>
import { ref } from 'vue'
import useValidation from '@/composables/useValidation.js'
import { isRequired, isEmail, isPhone, minLength } from '@/utils/validationRules.js'

const model = ref({
  name: '',
  email: '',
  phone: '',
  bio: ''
})

const rules = {
  name: isRequired,
  email: (value) => isRequired(value) && isEmail(value),
  phone: isPhone,
  bio: minLength(10)
}

const { errors, onInput, validateField, validateForm } = useValidation(model, rules)
</script>
```

### Reset Validation

Use `resetValidation()` to clear all errors and reset the submitted state:

```vue
<script setup>
import { ref } from 'vue'
import useValidation from '@/composables/useValidation.js'

const model = ref({
  name: '',
  email: ''
})

const rules = {
  name: (value) => !!value?.trim(),
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const { errors, validateForm, resetValidation } = useValidation(model, rules)

const handleSubmit = () => {
  if (!validateForm()) return
  
  // Submit data...
  
  // Reset form
  model.value = { name: '', email: '' }
  resetValidation()
}
</script>
```

## API

### Parameters

| Name | Type | Description |
|------|------|-------------|
| `model` | `Ref<Object>` | The form model ref containing all form values |
| `rules` | `Object` | An object where keys are field names and values are validation functions. Each function receives `(value, modelValue)` and returns `true` if valid |
| `conditionalRules` | `Function` | Optional function that receives the model value and returns an object of validation rules. Used for fields that are conditionally required |

### Returns

| Name | Type | Description |
|------|------|-------------|
| `errors` | `Ref<Object>` | Reactive object containing error state for each field (boolean values) |
| `submitted` | `Ref<Boolean>` | Reactive boolean indicating if the form has been submitted |
| `onInput` | `Function` | Function to call on input events. Clears the error for the specified field |
| `validateField` | `Function` | Function to call on blur events. Validates the specified field (only after form submission) |
| `validateForm` | `Function` | Function to validate all fields. Returns `true` if valid, `false` otherwise. Sets `submitted` to `true` |
| `resetValidation` | `Function` | Resets all errors and the submitted state |

## Validation Functions

Validation functions should accept two parameters and return a boolean:

```javascript
const validationFunction = (value, modelValue) => {
  // value: the current value of the field being validated
  // modelValue: the entire form model (useful for cross-field validation)
  
  return true // or false
}
```

### Examples

```javascript
// Simple required check
const isRequired = (value) => !!value?.trim()

// Email validation
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

// Cross-field validation
const passwordMatch = (value, modelValue) => value === modelValue.password

// Custom validation with access to entire form
const isValidAge = (value, modelValue) => {
  if (modelValue.isMinor) {
    return value >= 13 && value < 18
  }
  return value >= 18
}
```

## UX Behavior

The composable follows best practices for form validation UX:

1. **No errors on first interaction**: Users can focus/blur fields without seeing errors before submitting
2. **Validate on submit**: All fields are validated when the form is submitted
3. **Real-time feedback after submit**: After the first submission attempt, fields validate on blur
4. **Instant error clearing**: As soon as a user starts typing in an errored field, the error clears
5. **Conditional validation**: Fields that become required based on other selections are properly validated

This pattern provides a frustration-free experience while still ensuring data quality.
