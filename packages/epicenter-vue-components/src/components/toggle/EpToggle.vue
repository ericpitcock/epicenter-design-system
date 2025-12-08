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

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpToggle',
  })

  const props = defineProps({
    /**
     * If true, shows the toggle in the active/on state.
     */
    isActive: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, disables the toggle interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Label text displayed next to the toggle.
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The size variant of the toggle.
     * @values 'small', 'default', 'large'
     */
    size: {
      type: String,
      default: 'default',
    },
  })

  const emit = defineEmits(['toggle'])

  const classes = computed(() => {
    return {
      'ep-toggle--active': props.isActive,
      'ep-toggle--disabled': props.disabled,
    }
  })

  const toggle = () => {
    if (props.disabled) return
    emit('toggle')
  }
</script>
