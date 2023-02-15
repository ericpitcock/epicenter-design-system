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
      v-model="selected"
      @change="onChange"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
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
        required: true,
      },
      options: {
        type: Array,
        required: true,
      }
      // [label, value]
    },
    data() {
      return {
        selected: '',
      }
    },
    methods: {
      onChange() {
        this.$emit('input', this.selected)
        console.log(this.selected)
      }
    },
    computed: {
      classes() {
        return {
          'ep-select--has-icon': this.iconLeft,
          'ep-select--has-value': this.selected,
        }
      },
      selectClasses() {
        return {
          'select--has-icon': this.iconLeft
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
    cursor: pointer;
    &__inner {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      pointer-events: none;
      // background: red;
      &__icon-left, &__icon-right {
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
        padding: 1.3rem 1.2rem;
        line-height: 1.1;
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
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      &.select--has-icon {
        padding-left: 4rem;
      }
    }
  }
</style>