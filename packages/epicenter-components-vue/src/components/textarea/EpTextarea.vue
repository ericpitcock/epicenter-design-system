<script setup lang="ts">

  interface EpTextareaProps {
    autocomplete?: string
    autofocus?: boolean
    cols?: number
    disabled?: boolean
    id?: string
    maxlength?: number
    minlength?: number
    name?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    rows?: number
    spellcheck?: boolean
    wrap?: string
  }

  const props = withDefaults(defineProps<EpTextareaProps>(), {
    autocomplete: 'on',
    autofocus: false,
    cols: 20,
    disabled: false,
    id: undefined,
    maxlength: undefined,
    minlength: undefined,
    name: undefined,
    placeholder: undefined,
    readonly: false,
    required: false,
    rows: 2,
    spellcheck: false,
    wrap: 'soft',
  })

  const emit = defineEmits<{
    'update:modelValue': [value: string]
    focus: [event: FocusEvent]
    blur: [event: FocusEvent]
  }>()

  const modelValue = defineModel<string>({ default: '' })

  const onFocus = (event: FocusEvent): void => {
    emit('focus', event)
  }

  const onBlur = (event: FocusEvent): void => {
    emit('blur', event)
  }
</script>

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
