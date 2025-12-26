<script setup>
  import ArrowDown01 from '@ericpitcock/epicenter-icons/epicenter-icons/ArrowDown01'
  import { computed, ref, useId } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  const props = defineProps({
    /**
     * Label text for the select (used as placeholder when no option is selected).
     */
    label: { type: String, default: '' },
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
     * @values 'small', 'default', 'large', 'xlarge'
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
    /**
     * If true, enables error state styling and message display.
     */
    errorEnabled: {
      type: Boolean,
      default: false
    },
    /**
     * If true, displays the select in error state.
     */
    error: { type: Boolean, default: false },
    /**
     * Error message to display below the select.
     */
    errorMessage: { type: String, default: '' },
  })

  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
  const modelValue = defineModel({ type: [String, Number], default: '' })

  const selectClasses = computed(() => ({
    [`ep-select--${props.size}`]: props.size !== 'default',
    'ep-select--disabled': props.disabled,
    'ep-select--error': props.error,
  }))

  const computedId = ref(props.selectId || useId())

  const stylerProps = computed(() => ({
    id: computedId.value,
    label: props.label,
    disabled: props.disabled,
    size: props.size,
    errorEnabled: props.errorEnabled,
    error: props.error,
    errorMessage: props.errorMessage,
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
        v-if="placeholder"
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
