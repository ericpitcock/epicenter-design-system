<script setup lang="ts">
  import { computed, useAttrs } from 'vue'

  import type { ButtonType, Size } from '../../types'

  interface EpButtonProps {
    /** The aria-label of the button. */
    ariaLabel?: string
    /** If `true`, the button will be disabled. */
    disabled?: boolean
    /** The size of the button. */
    size?: Size
    /** The type of the button. */
    type?: ButtonType
  }

  const props = withDefaults(defineProps<EpButtonProps>(), {
    size: 'default',
    ariaLabel: '',
    disabled: false,
    type: 'button',
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
    <!-- @slot Default slot for button text/content -->
    <span
      v-if="$slots.default"
      class="ep-button__label"
    >
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
