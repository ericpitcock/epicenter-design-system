<template>
  <div
    :class="['ep-input', inputClasses]"
    :style="inputStyles"
  >
    <div
      v-if="icon"
      class="ep-input__icon"
      :style="iconStyles"
    >
      <ep-icon v-bind="icon" />
    </div>
    <input
      ref="input"
      v-model="currentValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    >
    <div
      v-if="clearable"
      :class="[
        'ep-input__clear',
        { 'ep-input__clear--disabled': !currentValue }
      ]"
      :style="iconStyles"
      @click="onClear"
    >
      <ep-icon
        v-show="currentValue"
        name="close"
      />
    </div>
  </div>
</template>

<script>
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpInput',
    components: {
      EpIcon
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
      value: {
        type: String,
        default: ''
      },
      icon: {
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
      height: {
        type: String,
        default: '5rem'
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
    emits: ['input', 'focus', 'esc', 'blur', 'enter', 'clear'],
    data() {
      return {
        hasError: false,
        hasFocus: false,
        currentValue: this.value
      }
    },
    computed: {
      inputClasses() {
        return {
          'ep-input--has-icon': this.icon,
          'ep-input--focus': this.hasFocus,
          'ep-input--disabled': this.disabled,
          // 'ep-input--error': this.error,
          // 'ep-input--success': this.success,
          // 'ep-input--warning': this.warning
        }
      },
      inputStyles() {
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius,
          backgroundColor: this.backgroundColor,
          color: this.color
        }
      },
      iconStyles() {
        return {
          flex: `0 0 ${this.height}`,
          height: this.height,
        }
      }
      // currentValue() {
      //   return this.value
      // }
    },
    watch: {
      value(val) {
        this.currentValue = val
      }
    },
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value)
        // console.log('onInput', event.target.value)
      },
      onEsc(event) {
        this.$refs.input.blur()
        this.$emit('esc', event.target.value)
        // console.log('onEsc', event.target.value)
      },
      onFocus(event) {
        this.hasFocus = true
        this.$emit('focus', event.target.value)
        // console.log('onFocus', event.target.value)
      },
      onBlur(event) {
        this.hasFocus = false
        this.$emit('blur', event.target.value)
        // console.log('onBlur', event.target.value)
      },
      onKeyDown(event) {
        // use event.key
        this.$emit('enter', event.target.value)
        // console.log('onKeyDown', event.target.value)
      },
      onClear() {
        this.currentValue = ''
        this.$refs.input.focus()
        this.$emit('clear', '')
        // console.log('onClear')
      }
    }
  }
</script>
