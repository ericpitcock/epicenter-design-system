<template>
  <div class="ep-input">
    <label
      v-show="isFocused"
      :for="id"
      class="ep-input__label"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :class="['ep-input__input', { 'is-invalid': error }]"
      :placeholder="label"
      :type="type"
      :value="value"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
    />
  </div>
</template>

<script>
  export default {
    name: 'EpInput',
    props: {
      id: {
        type: String,
        default: 'ep-input'
      },
      error: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: 'Default Label'
      },
    },
    data () {
      return {
        isFocused: false
      }
    },
    computed: {
      hasInput() {
        return this.value.length > 0
      }
    },
    methods: {
      clear() {
        this.$emit('input', '')
      },
      onInput(event) {
        console.log('input')
        this.$emit('input', event.target.value)
      },
      onFocus() {
        console.log('focus')
        this.isFocused = true
        this.$emit('focus')
      },
      onBlur() {
        console.log('blur')
        this.isFocused = false
        this.$emit('blur')
      },
      onKeyDown(event) {
        console.log('keydown')
        this.$emit('keydown', event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-input {
    position: relative;
    display: block;
    &__label {
      position: absolute;
      top: 0;
      left: 0;
      // padding: 0.4rem 0.8rem;
      font-size: var(--font-size--tiny);
      color: var(--text-color--subtle);
      pointer-events: none;
      transition: all 0.2s ease;
    }
    &__input {
      // -webkit-appearance: none;
      appearance: none;
      width: 100%;
      padding: 1.2rem;
      font-size: var(--font-size--small);
      background: var(--background-4);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      // vertical-align: top;
      // text-indent: 3.2rem;
      // on focus show label
      // &:focus + .ep-input__label {
      //   display: block;
      // }
      &::placeholder {
        color: var(--text-color);
      }
      &:focus::placeholder {
        color: transparent;
      }
      &--invalid {
        border-color: var(--error-color);
        border-color: red;
      }
    }
  }
</style>