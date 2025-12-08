<template>
  <component
    :is="element"
    :type
    :class="['ep-button', computedClasses]"
    :aria-label="ariaLabel ? ariaLabel : null"
    :disabled="disabled"
  >
    <span
      v-if="$slots['icon-left']"
      class="ep-button__icon ep-button__icon--left"
    >
      <!-- @slot Icon displayed on the left side of the button label -->
      <slot name="icon-left" />
    </span>
    <span
      v-if="$slots.default"
      class="ep-button__label"
    >
      <!-- @slot Default slot for button text/content -->
      <slot />
    </span>
    <span
      v-if="$slots['icon-right']"
      class="ep-button__icon ep-button__icon--right"
    >
      <!-- @slot Icon displayed on the right side of the button label -->
      <slot name="icon-right" />
    </span>
  </component>
</template>

<script setup>
  import { computed, useAttrs } from 'vue'

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
    'ep-button--disabled': props.disabled,
  }))
</script>
