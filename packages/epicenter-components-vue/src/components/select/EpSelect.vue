<script setup lang="ts">
  import ArrowDown01 from '@ericpitcock/epicenter-icons-vue/ArrowDown01'
  import { computed, ref, useId } from 'vue'

  import type { SelectOption, Size } from '../../types'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  interface EpSelectProps {
    autofocus?: boolean
    disabled?: boolean
    error?: boolean
    errorEnabled?: boolean
    errorMessage?: string
    label?: string
    options: SelectOption[]
    placeholder?: string
    readonly?: boolean
    required?: boolean
    selectId: string
    size?: Size
  }

  const {
    selectId,
    autofocus = false,
    disabled = false,
    error = false,
    errorEnabled = false,
    errorMessage = '',
    label = '',
    placeholder = 'Select an option',
    readonly = false,
    required = false,
    size = 'default',
  } = defineProps<EpSelectProps>()

  const emit = defineEmits<{
    'update:modelValue': [value: string | number]
    blur: []
    focus: []
  }>()

  const modelValue = defineModel<string | number>({ default: '' })

  const selectClasses = computed(() => ({
    [`ep-select--${size}`]: size !== 'default',
    'ep-select--disabled': disabled,
    'ep-select--error': error,
  }))

  const computedId = ref(selectId || useId())

  const stylerProps = computed(() => ({
    id: computedId.value,
    label: label,
    disabled: disabled,
    size: size,
    errorEnabled: errorEnabled,
    error: error,
    errorMessage: errorMessage,
    iconRightClickable: false,
    iconRightVisible: true
  }))

  const onBlur = (): void => emit('blur')
  const onChange = (event: Event): void => {
    const target = event.target as HTMLSelectElement
    target.blur()
    modelValue.value = target.value
  }
  const onFocus = (): void => emit('focus')
</script>

<template>
  <ep-input-styler v-bind="stylerProps">
    <template #icon-left>
      <!-- @slot Optional icon displayed on the left side of the select -->
      <slot name="icon-left" />
    </template>
    <select
      :id="computedId"
      v-model="modelValue"
      :class="['ep-select', selectClasses]"
      :disabled="disabled"
      :autofocus="autofocus"
      :required="required"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    >
      <option
        v-if="placeholder"
        disabled
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <template #icon-right>
      <ArrowDown01 />
    </template>
  </ep-input-styler>
</template>
