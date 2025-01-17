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
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
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
