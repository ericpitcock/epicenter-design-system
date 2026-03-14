<script setup lang="ts">
  import { computed, ref, useId, watch } from 'vue'

  import type { Size } from '../../types'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  interface EpInputProps {
    autofocus?: boolean
    clearable?: boolean
    disabled?: boolean
    error?: boolean
    errorEnabled?: boolean
    errorMessage?: string
    inputId?: string
    label?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    size?: Size
    type?: string
  }

  const {
    autofocus = false,
    clearable = false,
    disabled = false,
    error = false,
    errorEnabled = false,
    errorMessage = '',
    inputId = '',
    label = '',
    placeholder = '',
    readonly = false,
    required = false,
    size = 'default',
    type = 'text',
  } = defineProps<EpInputProps>()

  const emit = defineEmits<{
    focus: [value: string]
    esc: [value: string]
    blur: [value: string]
    enter: [value: string]
    clear: [value: string]
  }>()

  const modelValue = defineModel<string>({ required: true })

  defineOptions({
    inheritAttrs: false,
  })

  const input = ref<HTMLInputElement | null>(null)

  const hasInput = ref(!!modelValue.value)
  const computedId = ref(inputId || useId())

  const computedPlaceholder = computed(() => placeholder || label)

  const stylerProps = computed(() => ({
    id: computedId.value,
    hasInput: hasInput.value,
    label: label,
    clearable: clearable,
    disabled: disabled,
    errorEnabled: errorEnabled,
    error: error,
    errorMessage: errorMessage,
    size: size,
  }))

  const inputClasses = computed(() => ({
    [`ep-input--${size}`]: size !== 'default',
    'ep-input--disabled': disabled
  }))

  watch(modelValue, (value) => {
    hasInput.value = !!value
  })

  const onEsc = (): void => {
    input.value?.blur()
    emit('esc', modelValue.value)
  }

  const onFocus = (): void => {
    emit('focus', modelValue.value)
  }

  const onBlur = (): void => {
    emit('blur', modelValue.value)
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      emit('enter', modelValue.value)
    }
  }

  const onClear = (): void => {
    modelValue.value = ''
    input.value?.focus()
    emit('clear', '')
  }
</script>

<template>
  <ep-input-styler
    v-bind="stylerProps"
    @click="onClear"
  >
    <template
      v-if="$slots['icon-left']"
      #icon-left
    >
      <!-- @slot Optional icon displayed on the left side of the input -->
      <slot name="icon-left" />
    </template>
    <input
      :id="computedId"
      ref="input"
      v-model="modelValue"
      :class="['ep-input', inputClasses]"
      :type="type"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :readonly="readonly"
      :required="required"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    >
    <template
      v-if="$slots['icon-right']"
      #icon-right
    >
      <!-- @slot Optional icon displayed on the right side of the input (overridden by clearable button if active) -->
      <slot name="icon-right" />
    </template>
  </ep-input-styler>
</template>