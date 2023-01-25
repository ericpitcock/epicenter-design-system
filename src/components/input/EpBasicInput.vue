<template>
  <div :class="['ep-input', classes]">
    <div v-if="icon" class="ep-input__icon">
      <ep-icon v-bind="icon" />
    </div>
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="value"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    />
    <div
      v-if="clearable"
      :class="[
        'ep-input__clear',
        { 'ep-input__clear--disabled': !value }
      ]"
      @click="onClear"
    >
      <ep-icon v-show="value" name="close" />
    </div>
  </div>
</template>

<script>
  import EpIcon from '@/components/icon/EpIcon'
  
  export default {
    name: 'EpBasicInput',
    components: {
      EpIcon
    },
    data() {
      return {
        hasError: false,
        hasFocus: false,
        value: ''
      }
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
      icon: {
        type: Object,
        default: () => {}
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
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value)
      },
      onEsc(event) {
        this.$refs.input.blur()
        this.$emit('esc', event.target.value)
      },
      onFocus(event) {
        this.hasFocus = true
        this.$emit('focus', event.target.value)
      },
      onBlur(event) {
        this.hasFocus = false
        this.$emit('blur', event.target.value)
      },
      onKeyDown(event) {
        // use event.key
        this.$emit('enter', event.target.value)
      },
      onClear() {
        this.value = ''
        this.$refs.input.focus()
        this.$emit('clear', '')
      }
    },
    computed: {
      classes() {
        return {
          'ep-input--has-icon': this.icon,
          'ep-input--focus': this.hasFocus,
          'ep-input--disabled': this.disabled,
          'ep-input--error': this.error,
          'ep-input--success': this.success,
          'ep-input--warning': this.warning
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-input {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: v-bind(width);
    height: v-bind(height);
    border: v-bind(borderWidth) v-bind(borderStyle) v-bind(borderColor);
    border-radius: v-bind(borderRadius);
    background-color: v-bind(backgroundColor);
    color: v-bind(color);
    overflow: hidden;
    input {
      flex: 1;
      height: 100%;
      padding: 0 1.2rem;
      &::placeholder {
        color: var(--text-color);
      }
      &:focus {
        &::placeholder {
          color: transparent;
        }
      }
    }
    &--has-icon input {
      padding-left: 0;
    }
    &--focus {
      border-color: var(--color--primary);
    }
    &--disabled {
      color: var(--text-color--disabled);
      border-color: var(--border-color--disabled);
      input::placeholder {
        opacity: 0.3;
      }
    }
    &__icon, &__clear {
      flex: 0 0 v-bind(height);
      display: flex;
      justify-content: center;
      align-items: center;
      height: v-bind(height);
    }
    &__clear {
      cursor: pointer;
      &--disabled {
        cursor: default;
      }
    }
  }
</style>
