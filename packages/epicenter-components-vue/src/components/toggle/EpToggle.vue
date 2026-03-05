<script setup lang="ts">
  import { computed } from 'vue'

  interface EpToggleProps {
    /** If true, disables the toggle interaction. */
    disabled?: boolean
    /** If true, shows the toggle in the active/on state. */
    isActive?: boolean
    /** Label text displayed next to the toggle. */
    label?: string
    /** The size variant of the toggle. */
    size?: 'small' | 'default' | 'large'
  }

  const props = withDefaults(defineProps<EpToggleProps>(), {
    disabled: false,
    isActive: false,
    label: '',
    size: 'default',
  })

  const emit = defineEmits<{
    toggle: []
  }>()

  const classes = computed(() => {
    return {
      'ep-toggle--active': props.isActive,
      'ep-toggle--disabled': props.disabled,
    }
  })

  const toggle = (): void => {
    if (props.disabled) return
    emit('toggle')
  }
</script>

<template>
  <div
    :class="['ep-toggle', classes]"
    @click="toggle"
  >
    <div class="ep-toggle__track">
      <div class="ep-toggle__thumb" />
    </div>
    <div class="ep-toggle__label">
      {{ label }}
    </div>
  </div>
</template>
