<script setup lang="ts">
  import { computed } from 'vue'

  type ToggleButtonSize = 'small' | 'default' | 'large' | 'xlarge'

  interface EpToggleButtonProps {
    activeClass?: string
    ariaLabel?: string
    disabled?: boolean
    icon?: boolean
    label?: string
    size?: ToggleButtonSize
  }

  const props = withDefaults(defineProps<EpToggleButtonProps>(), {
    activeClass: '',
    ariaLabel: '',
    disabled: false,
    icon: false,
    label: '',
    size: 'default',
  })

  const model = defineModel<boolean>({ default: false })

  function onClick(): void {
    if (props.disabled) return

    model.value = !model.value
  }

  const computedClasses = computed(() => ({
    [`ep-button--${props.size}`]: props.size !== 'default',
    [`${props.activeClass} ep-button--selected`]: model.value && !props.disabled,
    'ep-button--disabled': props.disabled,
  }))
</script>

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
      icon span
    </span>
    <span
      v-if="label"
      class="ep-toggle-button__label"
    >
      {{ label }}
    </span>
  </button>
</template>
