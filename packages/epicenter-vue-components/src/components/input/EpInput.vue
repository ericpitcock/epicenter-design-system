<template>
  <ep-input-styler
    v-bind="stylerProps"
    @click="onClear"
  >
    <template #icon-left>
      <slot name="icon-left" />
    </template>
    <input
      :id="computedId"
      ref="input"
      v-model="modelValue"
      :class="['ep-input', inputClasses]"
      :type="type"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :readonly="readonly"
      :required="required"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    >
    <template #icon-right>
      <slot name="icon-right" />
    </template>
  </ep-input-styler>
</template>

<script setup>
  import { computed, ref, useSlots, watch } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  defineOptions({
    name: 'EpInput',
    inheritAttrs: false,
  })

  const props = defineProps({
    inputId: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
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
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['focus', 'esc', 'blur', 'enter', 'clear'])

  const hasFocus = ref(false)
  const hasInput = ref(false)
  const input = ref(null)

  const modelValue = defineModel({
    type: String,
    required: true
  })

  const computedId = ref(props.inputId || crypto.randomUUID())

  const computedPlaceholder = computed(() => props.placeholder || props.label)

  const slots = useSlots()
  const hasIconLeft = computed(() => !!slots['icon-left'])
  const hasIconRight = computed(() => !!slots['icon-right'])

  const stylerProps = computed(() => ({
    id: computedId.value,
    hasFocus: hasFocus.value,
    hasInput: hasInput.value,
    label: props.label,
    clearable: props.clearable,
    disabled: props.disabled,
    size: props.size,
    iconRightClickable: props.clearable,
    iconRightVisible: props.clearable && hasInput.value || !!hasIconRight.value
  }))

  const inputClasses = computed(() => ({
    [`ep-input--${props.size}`]: props.size,
    'ep-input--has-icon-left': hasIconLeft.value,
    'ep-input--has-icon-right': hasIconRight.value,
    'ep-input--disabled': props.disabled
  }))

  watch(modelValue, (value) => {
    hasInput.value = !!value
  })

  const onEsc = () => {
    input.value?.blur()
    emit('esc', modelValue.value)
  }

  const onFocus = () => {
    hasFocus.value = true
    emit('focus', modelValue.value)
  }

  const onBlur = () => {
    hasFocus.value = false
    emit('blur', modelValue.value)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      emit('enter', modelValue.value)
    }
  }

  const onClear = () => {
    modelValue.value = ''
    hasInput.value = false
    input.value?.focus()
    emit('clear', '')
  }
</script>