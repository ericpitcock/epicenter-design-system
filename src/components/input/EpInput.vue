<template>
  <div class="ep-input-container">
    <ep-icon name="zoom-in" />
    <input
      :class="['ep-input', { 'is-invalid': error }]"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
    />
    <ep-button
      v-if="value !== ''"
      @click="clear()"
      kind="ghost"
      iconLeft="close"
    />
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpIcon from '@/components/icon/EpIcon'

  export default {
    name: 'EpInput',
    components: {
      EpButton,
      EpIcon
    },
    props: {
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
      }
    },
    data () {
      return {
        isFocused: false
      }
    },
    methods: {
      clear() {
        this.$emit('input', '')
      },
      onInput(event) {
        this.$emit('input', event.target.value)
      },
      onFocus() {
        this.isFocused = true
        this.$emit('focus')
      },
      onBlur() {
        this.isFocused = false
        this.$emit('blur')
      },
      onKeyDown(event) {
        this.$emit('keydown', event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-input-container {
    display: flex;
    align-items: center;
    background: var(--background-4);
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    .ep-input {
      width: 100%;
      padding-left: 0.6rem;
      font-size: var(--font-size--small);
      &::placeholder {
        color: var(--text-color);
      }
      &:focus::placeholder {
        color: transparent;
      }
      &--invalid {
        border-color: var(--error-color);
      }
    }
  }
</style>