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
  import { computed, ref } from 'vue'

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

  const active = ref(props.isActive)

  const classes = computed(() => {
    return {
      'ep-toggle--active': active.value,
      'ep-toggle--disabled': props.disabled,
    }
  })

  const toggle = () => {
    active.value = !active.value
    emit('toggle', active.value)
  }
</script>
