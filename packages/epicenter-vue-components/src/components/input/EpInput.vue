<template>
  <ep-input-styler
    v-bind="stylerProps"
    @click="onClear"
  >
    <input
      :id="computedId"
      ref="input"
      :class="['ep-input', inputClasses]"
      :value="modelValue"
      :type="type"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :readonly="readonly"
      :required="required"
      v-bind="$attrs"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    >
  </ep-input-styler>
</template>

<script setup>
  import EpInputStyler from '../input-styler/EpInputStyler.vue'
  import { computed, ref } from 'vue'

  defineOptions({
    name: 'EpInput',
    inheritAttrs: false,
  })

  const computedId = computed(() => {
    const generateUniqueId = () => crypto.randomUUID()
    return props.inputId || generateUniqueId()
  })

  const props = defineProps({
    inputId: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    iconLeft: {
      type: Object,
      default: null
    },
    iconRight: {
      type: Object,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits([
    'update:modelValue',
    'focus',
    'esc',
    'blur',
    'enter',
    'clear'
  ])

  const hasFocus = ref(false)
  const hasInput = ref(false)
  const input = ref(null)

  const computedPlaceholder = computed(() => {
    return props.placeholder || props.label
  })

  const stylerProps = computed(() => {
    return {
      id: computedId.value,
      hasFocus: hasFocus.value,
      hasInput: hasInput.value,
      inputValue: modelValue.value,
      label: props.label,
      disabled: props.disabled,
      size: props.size,
      iconLeft: props.iconLeft,
      iconRight: props.clearable ? { ...props.iconRight, ...{ name: 'close' } } : props.iconRight,
      iconRightClickable: props.clearable,
      iconRightVisible: props.clearable && hasInput.value || !!props.iconRight,
    }
  })

  const inputClasses = computed(() => {
    return {
      [`ep-input--${props.size}`]: props.size,
      'ep-input--has-icon-left': props.iconLeft,
      'ep-input--has-icon-right': props.iconRight,
      'ep-input--disabled': props.disabled,
    }
  })

  const modelValue = defineModel({
    type: String,
    required: true
  })

  const onInput = (event) => {
    emit('update:modelValue', event.target.value)
    if (event.target.value) {
      hasInput.value = true
    } else {
      hasInput.value = false
    }
  }

  const onEsc = (event) => {
    input.value.blur()
    emit('esc', event.target.value)
  }

  const onFocus = (event) => {
    hasFocus.value = true
    emit('focus', event.target.value)
  }

  const onBlur = (event) => {
    hasFocus.value = false
    emit('blur', event.target.value)
  }

  const onKeyDown = (event) => {
    emit('enter', event.target.value)
  }

  const onClear = () => {
    input.value.value = ''
    hasInput.value = false
    input.value.focus()
    emit('clear', '')
  }
</script>
