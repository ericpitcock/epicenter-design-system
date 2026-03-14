<script setup lang="ts">
  import { computed } from 'vue'

  interface EpRadioProps {
    /** If true, disables the radio button. */
    disabled?: boolean
    /** The ID attribute for the radio input element. */
    id: string
    /** Label text displayed next to the radio button. */
    label: string
    /** The name attribute for the radio input (groups radios together). */
    name: string
    /** If true, marks the radio as required. */
    required?: boolean
    /** The value for this radio option. */
    value: string
  }

  const { value, disabled = false, required = false } = defineProps<EpRadioProps>()

  const modelValue = defineModel<string>({ required: true })

  const classes = computed(() => ({
    'ep-radio--checked': modelValue.value === value,
    'ep-radio--disabled': disabled,
  }))
</script>

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
    <slot>
      {{ label }}
    </slot>
  </label>
</template>
