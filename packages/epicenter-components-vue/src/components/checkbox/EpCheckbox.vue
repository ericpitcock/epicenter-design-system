<script setup lang="ts">
  import { computed } from 'vue'

  interface EpCheckboxProps {
    /** Whether the checkbox is checked. */
    checked?: boolean
    /** Whether the checkbox is disabled. */
    disabled?: boolean
    /** The ID of the checkbox. */
    id: string
    /** Whether the checkbox is indeterminate. */
    indeterminate?: boolean
    /** The label for the checkbox. */
    label: string
    /** The name of the checkbox. */
    name: string
    /** Whether the checkbox is required. */
    required?: boolean
    /** The value of the checkbox. */
    value: string
  }

  const {
    checked = false,
    disabled = false,
    indeterminate = false,
    required = false,
  } = defineProps<EpCheckboxProps>()

  const modelValue = defineModel<boolean>({ required: true })

  const classes = computed(() => {
    return {
      'ep-checkbox--checked': modelValue.value,
      'ep-checkbox--disabled': disabled,
      'ep-checkbox--indeterminate': indeterminate,
    }
  })
</script>

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
    <slot>
      {{ label }}
    </slot>
  </label>
</template>
