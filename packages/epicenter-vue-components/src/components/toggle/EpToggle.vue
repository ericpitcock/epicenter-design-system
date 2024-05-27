<template>
  <div
    :class="['toggle', classes]"
    @click="toggle"
  >
    <div class="toggle__track">
      <div class="toggle__thumb" />
    </div>
    <div class="toggle__label">
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
      'toggle--active': active.value,
      'toggle--disabled': props.disabled,
    }
  })

  const toggle = () => {
    active.value = !active.value
    emit('toggle', active.value)
  }
</script>
