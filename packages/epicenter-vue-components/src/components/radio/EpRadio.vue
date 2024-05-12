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
    <span class="radio-dot" />
    {{ label }}
  </label>
</template>

<script setup>
  import { computed } from 'vue'

  const modelValue = defineModel({
    type: String,
    required: true
  })

  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    // required
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    // optional
    disabled: {
      type: Boolean,
      default: false,
    },
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
