<template>
  <ep-input-styler v-bind="stylerProps">
    <template #icon-left>
      <slot name="icon-left" />
    </template>
    <select
      :id="computedId"
      v-model="modelValue"
      :class="['ep-select', selectClasses]"
      :disabled="disabled"
      :autofocus="autofocus"
      :required="required"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    >
      <option
        disabled
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <template #icon-right>
      <ArrowDown01 />
    </template>
  </ep-input-styler>
</template>

<script setup>
  import ArrowDown01 from '@ericpitcock/epicenter-icons/icons/ArrowDown01'
  import { computed } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  const props = defineProps({
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    selectId: { type: String, required: true },
    size: { type: String, default: 'default' },
    options: { type: Array, required: true },
    placeholder: { type: String, default: 'Select an option' },
  })

  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
  const modelValue = defineModel({ type: [String, Number], default: '' })

  const selectClasses = computed(() => ({
    [`ep-select--${props.size}`]: props.size,
    'ep-select--disabled': props.disabled,
  }))

  const computedId = computed(() => props.selectId || crypto.randomUUID())

  const stylerProps = computed(() => ({
    id: computedId.value,
    disabled: props.disabled,
    size: props.size,
    iconRightClickable: false,
    iconRightVisible: true
  }))

  const onBlur = () => emit('blur')
  const onChange = (event) => {
    event.target.blur()
    modelValue.value = event.target.value
  }
  const onFocus = () => emit('focus')
</script>
