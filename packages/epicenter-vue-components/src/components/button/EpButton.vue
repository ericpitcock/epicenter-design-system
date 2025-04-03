<template>
  <component
    :is="element"
    :type
    :class="['ep-button', computedClasses]"
    :aria-label="ariaLabel ? ariaLabel : label"
    :disabled="disabled"
  >
    <span
      v-if="iconLeft"
      class="ep-button__icon ep-button__icon--left"
    >
      <ep-icon v-bind="iconLeft" />
    </span>
    <span
      v-if="label"
      class="ep-button__label"
    >
      {{ label }}
    </span>
    <span
      v-if="iconRight"
      class="ep-button__icon ep-button__icon--right"
    >
      <ep-icon v-bind="iconRight" />
    </span>
  </component>
</template>

<script setup>
  import { computed, useAttrs } from 'vue'

  import EpIcon from '../icon/EpIcon.vue'

  defineOptions({
    name: 'EpButton'
  })

  const props = defineProps({
    /**
     * The size of the button.
     */
    size: {
      type: String,
      default: 'default',
      validator: (value) => [
        'small',
        'default',
        'large',
        'xlarge',
      ].includes(value)
    },
    /**
     * The aria-label of the button.
     */
    ariaLabel: {
      type: String,
      default: ''
    },
    /**
     * The label of the button.
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * The icon to display on the left side of the button.
     */
    iconLeft: {
      type: Object,
      default: undefined
    },
    /**
     * The icon to display on the right side of the button.
     */
    iconRight: {
      type: Object,
      default: undefined
    },
    /**
     * If `true`, the button will be disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * The  type of the button.
     */
    type: {
      type: String,
      default: 'button',
      validator: (value) => [
        'button',
        'submit',
      ].includes(value)
    },
  })

  const element = computed(() => {
    const { to, href } = useAttrs()
    return to ? 'router-link' : href ? 'a' : 'button'
  })

  const computedClasses = computed(() => ({
    [`ep-button--${props.size}`]: props.size !== 'default',
    'ep-button--icon-right': props.iconRight,
    'ep-button--icon-left': props.iconLeft,
    'ep-button--disabled': props.disabled,
  }))
</script>
