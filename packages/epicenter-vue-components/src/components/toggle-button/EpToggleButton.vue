<template>
  <button
    :class="['ep-button ep-toggle-button', computedClasses]"
    :aria-label="ariaLabel || label"
    :disabled="disabled"
    @click="onClick"
  >
    <span
      v-if="icon"
      class="ep-toggle-button__icon"
    >
      <ep-icon v-bind="icon" />
    </span>
    <span
      v-if="label"
      class="ep-toggle-button__label"
    >
      {{ label }}
    </span>
  </button>
</template>

<script setup>
  import { computed } from 'vue'

  import EpIcon from '../icon/EpIcon.vue'

  const model = defineModel({
    type: Boolean,
    default: false
  })

  const props = defineProps({
    /**
     * The label to display inside the button.
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * An icon configuration object to pass to the EpIcon component.
     */
    icon: {
      type: Object,
      default: null,
    },
    /**
     * The class to apply when the button is active.
     */
    activeClass: {
      type: String,
      default: ''
    },
    /**
     * If true, the button is disabled.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The aria-label for accessibility.
     */
    ariaLabel: {
      type: String,
      default: '',
    },
    /**
     * The size of the button.
     */
    size: {
      type: String,
      default: 'default',
      validator: (value) => ['small', 'default', 'large', 'xlarge'].includes(value)
    },
  })

  function onClick() {
    if (props.disabled) return
    model.value = !model.value
  }

  const computedClasses = computed(() => ({
    [`ep-button--${props.size}`]: props.size !== 'default',
    [`${props.activeClass} ep-button--active`]: model.value && !props.disabled,
    'ep-button--disabled': props.disabled,
  }))
</script>
