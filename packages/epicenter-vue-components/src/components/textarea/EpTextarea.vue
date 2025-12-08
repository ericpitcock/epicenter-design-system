<template>
  <div class="ep-textarea">
    <textarea
      :id="id"
      v-model="modelValue"
      :name="name"
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
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTextarea',
  })

  const props = defineProps({
    /**
     * The ID attribute for the textarea element.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * The name attribute for the textarea.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * Placeholder text shown when textarea is empty.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * If true, disables the textarea.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, marks the textarea as required.
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Number of visible text rows.
     */
    rows: {
      type: Number,
      default: 2,
    },
    /**
     * Number of visible text columns (width).
     */
    cols: {
      type: Number,
      default: 20,
    },
    /**
     * Maximum character length allowed.
     */
    maxlength: {
      type: Number,
      default: null,
    },
    /**
     * Minimum character length required.
     */
    minlength: {
      type: Number,
      default: null,
    },
    /**
     * If true, makes the textarea read-only.
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, automatically focuses on mount.
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Controls autocomplete behavior.
     * @values 'on', 'off'
     */
    autocomplete: {
      type: String,
      default: 'on',
    },
    /**
     * If true, enables spellcheck.
     */
    spellcheck: {
      type: Boolean,
      default: false,
    },
    /**
     * Controls how text wraps.
     * @values 'soft', 'hard'
     */
    wrap: {
      type: String,
      default: 'soft',
    },
  })

  const modelValue = defineModel({
    type: String,
    default: '',
  })

  const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

  const onFocus = (event) => {
    emit('focus', event)
  }

  const onBlur = (event) => {
    emit('blur', event)
  }
</script>
