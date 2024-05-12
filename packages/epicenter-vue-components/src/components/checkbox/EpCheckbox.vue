<template>
  <label
    :for="id"
    :class="['ep-checkbox', classes]"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="checkbox"
      :name
      :value
      :checked
      :disabled
      :indeterminate
      :required
    >
    {{ label }}
  </label>
</template>

<script setup>
  import { computed } from 'vue'

  const modelValue = defineModel({
    type: Boolean,
    required: true
  })

  const props = defineProps({
    // required
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    // optional
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
  })

  const classes = computed(() => {
    return {
      'ep-checkbox--checked': modelValue.value,
      'ep-checkbox--disabled': props.disabled,
      'ep-checkbox--indeterminate': props.indeterminate,
    }
  })
</script>
