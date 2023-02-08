<template>
  <div :class="['ep-checkbox', classes]">
    <input
      type="checkbox"
      ref="input"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :tabindex="tabindex"
      @change="onChange(command, $event)"
    >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'EpCheckbox',
    props: {
      id: {
        type: String,
        default: 'default'
      },
      name: {
        type: String,
        default: null
      },
      value: {
        type: String,
        default: null
      },
      checked: {
        type: Boolean,
        default: false
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'Checkbox'
      },
      required: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      tabindex: {
        type: Number,
        default: null
      },
      command: {
        type: Function,
        default: null
      }
    },
    computed: {
      classes() {
        return {
          'ep-checkbox--disabled': this.disabled
        }
      }
    },
    watch: {
      indeterminate() {
        this.$refs.input.indeterminate = this.indeterminate
      }
    },
    methods: {
      onChange(command, event) {
        // console.log('onChange', event.target.checked)
        this.$emit('checkchange', event.target.checked)
        if (command) {
          command(event.target.checked)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-checkbox {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    user-select: none;
    &--disabled {
      color: var(--text-color--disabled);
      cursor: default;
    }
    input {
      appearance: auto;
      cursor: inherit;
    }
    label {
      color: inherit;
      cursor: inherit;
    }
  }
</style>