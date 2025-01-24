# EpSelect



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `size` | - | `string` | `'default'` |
| `disabled` | - | `boolean` | `false` |
| `autofocus` | - | `boolean` | `false` |
| `readonly` | - | `boolean` | `false` |
| `required` | - | `boolean` | `false` |
| `width` | - | `string` | `'100%'` |
| `iconLeft` | - | `object` | `null` |
| `selectId` | - | `string` | `-` |
| `options` | - | `array` | `-` |
| `modelValue` | - | `string|number` | `''` |
| `placeholder` | - | `string` | `'Select an option'` |
| `borderWidth` | - | `string` | `'0.1rem'` |
| `borderStyle` | - | `string` | `'solid'` |
| `borderColor` | - | `string` | `'var(--border-color)'` |
| `borderRadius` | - | `string` | `'var(--border-radius)'` |
| `backgroundColor` | - | `string` | `'var(--interface-foreground)'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |
| `blur` | - | - |
| `input` | - | - |
| `focus` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <ep-input-styler v-bind="stylerProps">
    <select
      :id="computedId"
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
      readonly: {
        type: Boolean,
        default: false
      },
      required: {
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
      selectId: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true,
      },
      modelValue: {
        type: [String, Number],
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
        default: 'var(--interface-foreground)'
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
      computedId() {
        const generateUniqueId = () => crypto.randomUUID()
        return this.selectId || generateUniqueId()
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
          id: this.computedId,
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

```


## Styles

```scss
select.ep-select {
  width: 100%;
  height: 100%;
  background: var(--background-2);
  padding: 0 2.8rem 0 1.4rem;
  cursor: pointer;
  user-select: none;

  &.ep-select--has-icon {
    padding-left: 2.8rem;
  }

  &:focus {
    border-color: var(--primary-color-base) !important;
  }

  &--small {
    padding: 0 2.5rem 0 0.8rem;
    font-size: var(--font-size--tiny);

    &.ep-select--has-icon {
      padding-left: 2.5rem;
    }
  }

  &--large {
    padding: 0 3.6rem 0 1.6rem;
    font-size: var(--font-size--default);

    &.ep-select--has-icon {
      padding-left: 3.6rem;
    }
  }

  &--xlarge {
    padding: 0 4.4rem 0 1.8rem;
    font-size: var(--font-size--body);

    &.ep-select--has-icon {
      padding-left: 4.4rem;
    }
  }

  &--disabled {
    color: var(--text-color--disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
}
```