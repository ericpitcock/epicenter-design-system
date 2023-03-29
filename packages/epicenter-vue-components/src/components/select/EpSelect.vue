<template>
  <ep-input-styler v-bind="stylerProps">
    <select
      :id="id"
      :class="['ep-select', selectClasses]"
      :style="selectStyles"
      :value="modelValue"
      :disabled="disabled"
      :autofocus="autofocus"
      :required="required"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    >
      <option
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
  </ep-input-styler>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin.js'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  export default {
    name: "EpSelect",
    components: {
      EpInputStyler
    },
    mixins: [inputMixin],
    props: {
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
      iconLeft: {
        type: Object,
        default: null
      },
      id: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true,
      },
      modelValue: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Select an option'
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
    emits: ['update:modelValue', 'blur', 'input', 'focus'],
    data() {
      return {
        selected: '',
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
      iconStyles() {
        return {
          flex: `0 0 ${this.height}`,
          height: this.height,
        }
      },
      selectClasses() {
        return {
          [`ep-select--${this.size}`]: this.size,
          'ep-select--has-icon': this.iconLeft,
          'ep-select--disabled': this.disabled,
          'ep-select--error': this.hasError,
          'ep-select--success': this.hasSuccess,
          'ep-select--warning': this.hasWarning,
        }
      },
      selectStyles() {
        return {
          borderStyle: this.borderStyle,
          borderWidth: this.borderWidth,
          borderColor: this.computedBorderColor,
          borderRadius: this.borderRadius,
          backgroundColor: this.computedBackgroundColor,
          lineHeight: `${this.sizes[this.size] - 2}px`,
        }
      },
      stylerProps() {
        return {
          disabled: this.disabled,
          width: this.width,
          size: this.size,
          iconLeft: this.iconLeft,
          iconRight: { name: 'chevron-down' },
          iconRightClickable: false,
          iconRightVisible: true,
        }
      },
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(value) {
          this.selected = value
        }
      }
    },
    methods: {
      onBlur() {
        this.$emit('blur')
      },
      onChange(event) {
        event.target.blur()
        this.$emit('update:modelValue', event.target.value)
      },
      onFocus() {
        this.$emit('focus')
      }
    }
  }
</script>
