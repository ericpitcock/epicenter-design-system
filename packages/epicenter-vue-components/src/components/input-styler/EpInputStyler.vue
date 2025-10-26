<template>
  <div
    :class="['ep-input-styler', { 'ep-input-styler--disabled': disabled }]"
    :style="containerStyles"
  >
    <div class="ep-input-styler__inner">
      <div
        v-if="iconLeft"
        :class="['ep-input-styler__icon-left', `ep-input-styler__icon-left--${size}`]"
      >
        icon left
      </div>
      <div
        v-if="iconRight"
        :class="[
          'ep-input-styler__icon-right',
          `ep-input-styler__icon-right--${size}`,
          { 'ep-input-styler__icon-right--clickable': iconRightClickable }
        ]"
        @click="onClick"
      >
        icon right
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
  import { computed, ref } from 'vue'

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
    iconLeft: {
      type: Object,
      default: null
    },
    iconRight: {
      type: Object,
      default: null
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

  const sizes = ref({
    small: '22',
    default: '30',
    large: '38',
    xlarge: '46'
  })

  const containerStyles = computed(() => {
    return {
      height: `${sizes.value[props.size]}px`
    }
  })

  const onClick = () => {
    if (!props.iconRightVisible) return
    emit('click')
  }
</script>