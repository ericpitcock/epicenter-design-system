<template>
  <label
    :for="id"
    :class="['ep-radio', classes]"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="radio"
      :name
      :value
      :disabled
      :required
    >
    <span class="ep-radio__dot" />
    {{ label }}
  </label>
</template>

<script setup>
  import { computed } from 'vue'

  const modelValue = defineModel({
    type: String,
    required: true
  })

  const props = defineProps({
    /**
     * The ID attribute for the radio input element.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Label text displayed next to the radio button.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * The name attribute for the radio input (groups radios together).
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The value for this radio option.
     */
    value: {
      type: String,
      required: true,
    },
    /**
     * If true, disables the radio button.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, marks the radio as required.
     */
    required: {
      type: Boolean,
      default: false,
    },
  })

  const classes = computed(() => ({
    'ep-radio--checked': modelValue.value === props.value,
    'ep-radio--disabled': props.disabled,
  }))
</script>
