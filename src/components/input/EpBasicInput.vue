<template>
  <div :class="['ep-input', classes]">
    <div class="ep-input__icon">
      <ep-icon v-if="icon" v-bind="icon" />
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
    emits: ['input', 'focus', 'blur', 'enter', 'clear'],
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value)
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
      // background-color: red;
    }
    input {
      flex: 1;
      height: 100%;
      &::placeholder {
        color: var(--text-color);
      }
      &:focus {
        &::placeholder {
          color: transparent;
        }
      }
    }
    &__clear {
      &--disabled {
        // normal cursor
        cursor: default;
      }
      cursor: pointer;
      // width: v-bind(height);
      // background-color: blue;
    }
  }
  // .ep-input {
  //   display: flex;
  //   flex-flow: row nowrap;
  //   align-items: center;
  //   width: 100%;
  //   height: 5rem;
  //   background-color: #fff;
  //   color: #000;
  //   border: none;
  //   border-radius: 5rem;
  //   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  //   .ep-input__left-icon,
  //   .ep-input__right-icon {
  //     display: flex;
  //     flex-flow: row nowrap;
  //     align-items: center;
  //     justify-content: center;
  //     width: 5rem;
  //     height: 100%;
  //     color: #000;
  //     background-color: red;
  //     border: none;
  //     border-radius: 5rem;
  //     svg {
  //       width: 2rem;
  //       height: 2rem;
  //     }
  //   }
  //   input {
  //     flex: 1;
  //     height: 100%;
  //     background-color: transparent;
  //     border: none;
  //     outline: none;
  //     font-size: 2rem;
  //     padding: 0 2rem;
  //     background-color: green;
  //   }
  // }
</style>
