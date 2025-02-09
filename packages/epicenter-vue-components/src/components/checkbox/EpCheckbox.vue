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

  defineOptions({
    name: 'EpCheckbox'
  })

  const modelValue = defineModel({
    type: Boolean,
    required: true
  })

  const props = defineProps({
    /**
     * The ID of the checkbox.
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The label for the checkbox.
     */
    label: {
      type: String,
      required: true
    },
    /**
     * The name of the checkbox.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * The value of the checkbox.
     */
    value: {
      type: String,
      required: true
    },
    /**
     * Whether the checkbox is checked.
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the checkbox is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the checkbox is indeterminate.
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the checkbox is required.
     */
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
