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
  </div>
</template>

<script>
  import EpIcon from '../icon/EpIcon.vue'

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
      }
    },
    emits: ['update:modelValue', 'blur', 'input', 'focus'],
    data() {
      return {
        selected: '',
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
          'ep-select--has-icon': this.iconLeft,
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
