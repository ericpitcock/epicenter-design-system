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

<script setup>
  import { computed, ref, useId, watch } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  defineOptions({
    inheritAttrs: false,
  })

  const props = defineProps({
    /**
     * The ID attribute for the input element. Auto-generated if not provided.
     */
    inputId: {
      type: String,
      default: ''
    },
    /**
     * Label text for the input (used as placeholder when empty).
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * The input type attribute.
     * @values 'text', 'email', 'password', 'number', 'tel', etc.
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * Placeholder text shown when the input is empty.
     */
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * If true, displays a clear button when input has a value.
     */
    clearable: {
      type: Boolean,
      default: false
    },
    /**
     * If true, disables the input element.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * If true, automatically focuses the input on mount.
     */
    autofocus: {
      type: Boolean,
      default: false
    },
    /**
     * If true, marks the input as required.
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * If true, makes the input read-only.
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * The size variant of the input.
     * @values 'default', 'large', 'xlarge'
     */
    size: {
      type: String,
      default: 'default'
    },
    /**
     * If true, displays the input in error state.
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Error message to display below the input.
     */
    errorMessage: {
      type: String,
      default: ''
    },
  })

  const emit = defineEmits(['focus', 'esc', 'blur', 'enter', 'clear'])

  const input = ref(null)

  const modelValue = defineModel({
    type: String,
    required: true
  })

  const hasInput = ref(!!modelValue.value)
  const computedId = ref(props.inputId || useId())

  const computedPlaceholder = computed(() => props.placeholder || props.label)

  const stylerProps = computed(() => ({
    id: computedId.value,
    hasInput: hasInput.value,
    label: props.label,
    clearable: props.clearable,
    disabled: props.disabled,
    error: props.error,
    errorMessage: props.errorMessage,
    size: props.size,
  }))

  const inputClasses = computed(() => ({
    [`ep-input--${props.size}`]: props.size !== 'default',
    'ep-input--disabled': props.disabled
  }))

  watch(modelValue, (value) => {
    hasInput.value = !!value
  })

  const onEsc = () => {
    input.value?.blur()
    emit('esc', modelValue.value)
  }

  const onFocus = () => {
    emit('focus', modelValue.value)
  }

  const onBlur = () => {
    emit('blur', modelValue.value)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      emit('enter', modelValue.value)
    }
  }

  const onClear = () => {
    modelValue.value = ''
    input.value?.focus()
    emit('clear', '')
  }
</script>