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
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
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
  })

  const emit = defineEmits(['input', 'focus', 'blur'])

  const onInput = (event) => {
    emit('input', event.target.value)
  }

  const onFocus = (event) => {
    emit('focus', event)
  }

  const onBlur = (event) => {
    emit('blur', event)
  }
</script>
