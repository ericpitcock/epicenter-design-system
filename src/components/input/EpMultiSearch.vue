<template>
  <div :class="['ep-input', classes]">
    <div v-if="icon" class="ep-input__icon">
      <ep-icon v-bind="icon" />
    </div>
    <div class="queries">
      <div
        v-for="(query, index) in query"
        :key="index"
        class="query"
        @click="onQueryClose(query, index)"
      >
        <span class="query__text font-size--small">{{ query }}</span>
        <ep-icon
          name="close"
          weight="bold"
          size="16"
          class="query__close"
        />
      </div>
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
      @keydown.enter="onEnter"
      @keydown.delete="onDelete"
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
    name: 'EpMultiSearch',
    components: {
      EpIcon
    },
    data() {
      return {
        hasError: false,
        hasFocus: false,
        // value is the value of the input
        value: '',
        // query is the array of values that have been added to the search
        query: []
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
        default: false
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
    emits: ['input', 'focus', 'esc', 'blur', 'enter', 'clear', 'query-close', 'delete'],
    methods: {
      onQueryClose(query, index) {
        this.query.splice(index, 1)
        this.$emit('query-close', query)
      },
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
      onEnter() {
        // on enter, add the value to the query array
        this.query.push(this.value)
        // then emit the query array
        this.$emit('enter', this.query)
        // then clear the input
        this.value = ''
      },
      onDelete(event) {
        // make sure there's nothing in the input
        if (event.target.value === '') {
          // find the last element in the query array and remove it
          this.query.splice(this.query.length - 1, 1)
          // then emit the query array
          this.$emit('delete', this.query)
        }
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
          // 'ep-input--error': this.error,
          // 'ep-input--success': this.success,
          // 'ep-input--warning': this.warning
        }
      }
    },
    watch: {
      query() {
        console.log('query', this.query)
      }
    },
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
    .queries {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: 0.3rem;
      padding-right: 0.6rem;
      .query {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 0.3rem;
        height: 100%;
        padding: 0 0.6rem 0 1rem;
        background-color: var(--color--primary);
        border-radius: var(--border-radius);
        &:hover {
          background-color: var(--primary-color--hover);
          cursor: pointer;
        }
        .query__text {
          line-height: 2rem;
        }
        .query__close {
          // background-color: red;
          // margin-left: 0.8rem;
          cursor: pointer;
        }
      }
    }
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
