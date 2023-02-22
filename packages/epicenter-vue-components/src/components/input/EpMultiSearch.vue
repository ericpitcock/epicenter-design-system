<template>
  <div
    :class="['ep-multi-search', classes]"
    :style="inputStyles"
  >
    <div
      v-if="icon"
      class="ep-multi-search__icon"
      :style="iconStyles"
    >
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
          :size="16"
          class="query__close"
        />
      </div>
    </div>
    <input
      ref="input"
      type="text"
      :placeholder="placeholderValue"
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
      class="ep-multi-search__clear"
      :style="iconStyles"
      @click="onClear"
    >
      <ep-icon name="close" />
    </div>
  </div>
</template>

<script>
  import EpIcon from '../icon/EpIcon.vue'

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
        query: [],
      }
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      icon: {
        type: Object,
        default: () => { }
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
      onDelete() {
        // make sure there's nothing in the input
        if (this.value === '') {
          // find the last element in the query array and remove it
          this.query.splice(this.query.length - 1, 1)
          // then emit the query array
          this.$emit('delete', this.query)
        }
      },
      onClear() {
        this.query = []
        this.value = ''
        this.$refs.input.focus()
        this.$emit('clear', this.query)
      }
    },
    computed: {
      classes() {
        return {
          'ep-multi-search--has-icon': this.icon,
          'ep-multi-search--focus': this.hasFocus,
          'ep-multi-search--disabled': this.disabled,
          // 'ep-input--error': this.error,
          // 'ep-input--success': this.success,
          // 'ep-input--warning': this.warning
        }
      },
      clearable() {
        // if value and query is not empty, then clearable is true
        // if value is empty and query is not empty, then clearable is true
        // if value is not empty and query is empty, then clearable is true
        // if value and query is empty, then clearable is false
        return (this.value && this.query.length > 0) || (!this.value && this.query.length > 0) || (this.value && this.query.length === 0)
      },
      iconStyles() {
        return {
          flex: `0 0 ${this.height}`,
          height: this.height,
        }
      },
      inputStyles() {
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius,
          backgroundColor: this.backgroundColor,
          color: this.color
        }
      },
      placeholderValue() {
        // if the input is empty, no value and no query, show the prop placeholder
        // if the query isn't empty, show "add to your search"
        return this.value === '' && this.query.length === 0 ? this.placeholder : 'Add to your search'
      }
    },
    watch: {
      query() {
        console.log('query', this.query)
      }
    },
  }
</script>

<style lang="scss" scoped></style>
