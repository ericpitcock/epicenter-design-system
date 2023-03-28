<template>
  <ep-input-styler
    v-bind="stylerProps"
    @click="onClear"
  >
    <input
      ref="input"
      v-model="value"
      :class="['ep-input', inputClasses]"
      :style="inputStyles"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    >
  </ep-input-styler>
</template>

<script>
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  export default {
    name: 'EpInput',
    components: {
      EpInputStyler
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      modelValue: {
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
        default: 'var(--background-2)'
      },
    },
    emits: ['update:modelValue', 'focus', 'esc', 'blur', 'enter', 'clear'],
    data() {
      return {
        hasError: false,
        hasInput: false,
        hasWarning: false,
        hasSuccess: false,
      }
    },
    computed: {
      computedBackgroundColor() {
        if (this.disabled) {
          return 'transparent'
        }
        return this.backgroundColor
      },
      computedBorderColor() {
        if (this.hasError) {
          return 'red'
        }
        if (this.hasWarning) {
          return 'yellow'
        }
        if (this.hasSuccess) {
          return 'green'
        }
        if (this.disabled) {
          return 'var(--border-color--disabled)'
        }
        return this.borderColor || 'var(--border-color)'
      },
      stylerProps() {
        return {
          disabled: this.disabled,
          width: this.width,
          size: this.size,
          iconLeft: this.iconLeft,
          iconRight: this.clearable ? { ...this.iconRight, ...{ name: 'close' } } : this.iconRight,
          iconRightVisible: this.clearable && this.hasInput || this.iconRight,
        }
      },
      inputClasses() {
        return {
          [`ep-input--${this.size}`]: this.size,
          'ep-input--has-icon-left': this.iconLeft,
          'ep-input--has-icon-right': this.iconRight,
          'ep-input--disabled': this.disabled,
          'ep-input--error': this.hasError,
          'ep-input--success': this.hasSuccess,
          'ep-input--warning': this.hasWarning,
        }
      },
      inputStyles() {
        return {
          borderStyle: this.borderStyle,
          borderWidth: this.borderWidth,
          borderColor: this.computedBorderColor,
          borderRadius: this.borderRadius,
          backgroundColor: this.computedBackgroundColor,
        }
      },
      value: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    },
    methods: {
      onInput(event) {
        this.$emit('update:modelValue', event.target.value)
        if (event.target.value) {
          this.hasInput = true
        } else {
          this.hasInput = false
        }
      },
      onEsc(event) {
        this.$refs.input.blur()
        this.$emit('esc', event.target.value)
      },
      onFocus(event) {
        this.$emit('focus', event.target.value)
      },
      onBlur(event) {
        this.$emit('blur', event.target.value)
      },
      onKeyDown(event) {
        // use event.key
        this.$emit('enter', event.target.value)
      },
      onClear() {
        this.$refs.input.value = ''
        this.hasInput = false
        this.$refs.input.focus()
        this.$emit('clear', '')
      }
    }
  }
</script>
