<template>
  <div class="ep-textarea">
    <textarea
      :id="id"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :cols="cols"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
      :wrap="wrap"
      :class="classes"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script>
  export default {
    name: 'EpTextarea',
    props: {
      id: {
        type: String,
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      value: {
        type: String,
        default: null,
      },
      placeholder: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      rows: {
        type: Number,
        default: 2,
      },
      cols: {
        type: Number,
        default: 20,
      },
      maxlength: {
        type: Number,
        default: null,
      },
      minlength: {
        type: Number,
        default: null,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      autofocus: {
        type: Boolean,
        default: false,
      },
      autocomplete: {
        type: String,
        default: 'on',
      },
      spellcheck: {
        type: Boolean,
        default: false,
      },
      wrap: {
        type: String,
        default: 'soft',
      },
      classes: {
        type: String,
        default: null,
      },
    },
    emits: ['input', 'focus', 'blur'],
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value)
      },
      onFocus(event) {
        this.$emit('focus', event)
      },
      onBlur(event) {
        this.$emit('blur', event)
      },
    },
  }
</script>