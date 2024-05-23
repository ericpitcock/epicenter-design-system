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
      :style="inputStyles"
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
  defineOptions({
    name: 'EpInput',
    inheritAttrs: false,
  })

  // import inputMixin from '../../mixins/inputMixin.js'
  // import uuidMixin from '../../mixins/uuidMixin.js'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'
  import { computed, ref } from 'vue'


  // mixins: [inputMixin, uuidMixin], // convert to composables


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
    placeholderColor: {
      type: String,
      default: ''
    },
    // modelValue: {
    //   type: String,
    //   default: ''
    // },
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
    width: {
      type: String,
      default: '100%'
    },
    size: {
      type: String,
      default: 'default'
    },
    borderWidth: {
      type: String,
      default: '0.1rem'
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderColor: {
      type: String,
      default: 'var(--border-color)'
    },
    borderRadius: {
      type: String,
      default: 'var(--border-radius)'
    },
    backgroundColor: {
      type: String,
      default: 'var(--interface-foreground)'
    },
  })

  const emit = defineEmits(['update:modelValue', 'focus', 'esc', 'blur', 'enter', 'clear'])

  const hasError = ref(false)
  const hasFocus = ref(false)
  const hasInput = ref(false)
  const hasWarning = ref(false)
  const hasSuccess = ref(false)
  const input = ref(null)


  const computedBackgroundColor = computed(() => {
    if (props.disabled) {
      return 'transparent'
    }
    return props.backgroundColor
  })

  const computedPlaceholder = computed(() => {
    return props.placeholder || props.label
  })

  const computedBorderColor = computed(() => {
    if (hasError.value) {
      return 'red'
    }
    if (hasWarning.value) {
      return 'yellow'
    }
    if (hasSuccess.value) {
      return 'green'
    }
    if (props.disabled) {
      return 'var(--border-color--disabled)'
    }
    return props.borderColor || 'var(--border-color)'
  })

  const computedId = computed(() => {
    // return props.inputId || `input-${this.generateUUID()}`
    return 'NEEDS_UUID'
  })

  const stylerProps = computed(() => {
    return {
      id: 'NEEDS_UUID',
      hasFocus: hasFocus.value,
      hasInput: hasInput.value,
      label: props.label,
      disabled: props.disabled,
      width: props.width,
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
      'ep-input--error': props.hasError,
      'ep-input--success': props.hasSuccess,
      'ep-input--warning': props.hasWarning,
    }
  })

  const inputStyles = computed(() => {
    const styles = {
      borderStyle: props.borderStyle,
      borderWidth: props.borderWidth,
      borderColor: computedBorderColor,
      borderRadius: props.borderRadius,
      backgroundColor: computedBackgroundColor,
      '--text-color--placeholder': props.placeholderColor,
    }

    return styles
  })

  // const value = computed({
  //   get() {
  //     return this.modelValue
  //   },
  //   set(value) {
  //     emit('update:modelValue', value)
  //   }
  // })

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
    // use event.key
    emit('enter', event.target.value)
  }

  const onClear = () => {
    input.value.value = ''
    hasInput.value = false
    input.value.focus()
    emit('clear', '')
  }
</script>
