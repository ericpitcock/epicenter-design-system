<template>
  <div :class="['ep-select', classes]">
    <div class="ep-select__inner">
      <div
        v-if="iconLeft"
        class="ep-select__inner__icon-left"
        :style="iconStyles"
      >
        <ep-icon v-bind="iconLeft" />
      </div>
      <label
        v-if="label"
        :for="id"
        class="ep-select__inner__label"
      >{{ label }}</label>
      <div
        class="ep-select__inner__icon-right"
        :style="iconStyles"
      >
        <ep-icon name="chevron-down" />
      </div>
    </div>
    <select
      :id="id"
      :class="['ep-select__input', selectClasses]"
      :value="modelValue"
      @focus="onFocus"
      @blur="hasFocus = false"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        disabled
        value=""
      >{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
  import EpIcon from '../icon/EpIcon'
  export default {
    name: "EpSelect",
    components: {
      EpIcon
    },
    props: {
      height: {
        type: String,
        default: '4rem'
      },
      iconLeft: {
        type: Object,
        default: undefined
      },
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        // required: true,
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
      // [label, value]
    },
    emits: ['update:modelValue'],
    data() {
      return {
        hasFocus: false,
        selected: '',
      }
    },
    methods: {
      onChange() {
        this.hasFocus = false
        this.$emit('input', this.selected)
        console.log(this.selected)
      },
      onFocus() {
        this.hasFocus = true
        this.$emit('focus')
      }
    },
    computed: {
      iconStyles() {
        return {
          flex: `0 0 ${this.height}`,
          height: this.height,
        }
      },
      classes() {
        return {
          'ep-select--has-focus': this.hasFocus,
          'ep-select--has-icon': this.iconLeft,
          'ep-select--has-value': this.selected,
        }
      },
      selectClasses() {
        return {
          'select--has-icon': this.iconLeft
        }
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(value) {
          this.selected = value
        }
      }
    }
  }
</script>
