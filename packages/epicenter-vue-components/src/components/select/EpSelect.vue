<template>
  <ep-input-styler v-bind="stylerProps">
    <template #icon-left>
      <!-- @slot Optional icon displayed on the left side of the select -->
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
  import { ArrowDown01 } from '@ericpitcock/epicenter-icons'
  import { computed } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  const props = defineProps({
    /**
     * If true, disables the select element.
     */
    disabled: { type: Boolean, default: false },
    /**
     * If true, automatically focuses the select on mount.
     */
    autofocus: { type: Boolean, default: false },
    /**
     * If true, makes the select read-only.
     */
    readonly: { type: Boolean, default: false },
    /**
     * If true, marks the select as a required field.
     */
    required: { type: Boolean, default: false },
    /**
     * The ID attribute for the select element.
     */
    selectId: { type: String, required: true },
    /**
     * The size variant of the select.
     * @values 'small', 'default', 'large'
     */
    size: { type: String, default: 'default' },
    /**
     * Array of option objects with 'label', 'value', and optional 'disabled' properties.
     */
    options: { type: Array, required: true },
    /**
     * Placeholder text shown when no option is selected.
     */
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
