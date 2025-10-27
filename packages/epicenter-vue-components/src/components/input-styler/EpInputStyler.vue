<template>
  <div
    :class="['ep-input-styler', { 'ep-input-styler--disabled': disabled }]"
    :style="containerStyles"
  >
    <div class="ep-input-styler__inner">
      <div
        v-if="$slots['icon-left']"
        :class="['ep-input-styler__icon-left', `ep-input-styler__icon-left--${size}`]"
      >
        <slot name="icon-left" />
      </div>
      <div
        v-if="$slots['icon-right']"
        :class="[
          'ep-input-styler__icon-right',
          `ep-input-styler__icon-right--${size}`,
          { 'ep-input-styler__icon-right--clickable': iconRightClickable }
        ]"
        @click="onClick"
      >
        <slot name="icon-right" />
      </div>
    </div>
    <label
      v-show="label && hasInput || label && inputValue || hasFocus"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpInputStyler',
  })

  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    hasFocus: {
      type: Boolean,
      default: false
    },
    hasInput: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconRightClickable: {
      type: Boolean,
      default: false
    },
    iconRightVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['click'])

  const sizes = {
    small: '22',
    default: '30',
    large: '38',
    xlarge: '46'
  }

  const containerStyles = computed(() => {
    return {
      height: `${sizes[props.size]}px`
    }
  })

  const onClick = () => {
    if (!props.iconRightVisible) return
    emit('click')
  }
</script>