<template>
  <div :class="['ep-select', classes]">
    <div class="ep-select__inner">
      <div
        v-if="iconLeft"
        class="ep-select__inner__icon-left"
      >
        <ep-icon v-bind="iconLeft" />
      </div>
      <label
        v-if="label"
        :for="id"
        class="ep-select__inner__label"
      >{{ label }}</label>
      <div class="ep-select__inner__icon-right">
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

<style lang="scss" scoped>
  .ep-select {
    position: relative;
    display: flex;
    flex-direction: column;
    // font-size: var(--font-size--small);
    line-height: 1;
    background: var(--background-2);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;

    &--has-focus {
      border-color: var(--color--primary);
    }

    &__inner {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      pointer-events: none;

      // background: red;
      &__icon-left,
      &__icon-right {
        flex: 0 0 v-bind(height);
        display: flex;
        justify-content: center;
        align-items: center;
        height: v-bind(height);
        // background: black;
        // pointer-events: none;
      }

      &__label {
        // position: absolute;
        // width: 100%;
        // height: 100%;
        flex: 1;
        display: flex;
        // justify-content: center;
        align-items: center;
        padding: 1.2rem;

        // line-height: 1.1;
        // pointer-events: none;
        // background: blue;
        .ep-select--has-value & {
          visibility: hidden;
        }

        .ep-select--has-icon & {
          padding-left: 0;
        }
      }
    }

    select {
      padding: 1.25rem 1.2rem;

      &:focus {
        outline: none;
      }

      &.select--has-icon {
        padding-left: 4rem;
      }
    }
  }
</style>