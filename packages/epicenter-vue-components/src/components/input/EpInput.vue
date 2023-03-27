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
        default: () => { }
      },
      iconRight: {
        type: Object,
        default: () => { }
      },
      clearable: {
        type: Boolean,
        default: true
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
      // height: {
      //   type: String,
      //   default: '5rem'
      // },
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
      color: {
        type: String,
        default: 'var(--text-color)'
      }
    },
    emits: ['update:modelValue', 'focus', 'esc', 'blur', 'enter', 'clear'],
    data() {
      return {
        hasError: false,
        hasInput: false,
        // hasFocus: false
      }
    },
    computed: {
      stylerProps() {
        return {
          size: this.size,
          iconLeft: this.iconLeft,
          iconRight: this.iconRight,
          iconRightVisible: this.clearable && this.hasInput,
        }
      },
      inputClasses() {
        return {
          [`ep-input--${this.size}`]: this.size,
          'ep-input--has-icon-left': this.iconLeft,
          'ep-input--has-icon-right': this.iconRight,
          // 'ep-input--focus': this.hasFocus,
          'ep-input--disabled': this.disabled,
          // 'ep-input--error': this.error,
          // 'ep-input--success': this.success,
          // 'ep-input--warning': this.warning
        }
      },
      inputStyles() {
        return {
          width: this.width,
          // borderWidth: this.borderWidth,
          // borderStyle: this.borderStyle,
          // borderColor: this.borderColor,
          borderRadius: this.borderRadius,
          backgroundColor: this.backgroundColor,
          color: this.color
        }
      },
      // iconStyles() {
      //   return {
      //     flex: `0 0 ${this.height}`,
      //     height: this.height,
      //   }
      // },
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
        // console.log('onEsc', event.target.value)
      },
      onFocus(event) {
        // this.hasFocus = true
        this.$emit('focus', event.target.value)
        // console.log('onFocus', event.target.value)
      },
      onBlur(event) {
        // this.hasFocus = false
        this.$emit('blur', event.target.value)
        // console.log('onBlur', event.target.value)
      },
      onKeyDown(event) {
        // use event.key
        this.$emit('enter', event.target.value)
        // console.log('onKeyDown', event.target.value)
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
