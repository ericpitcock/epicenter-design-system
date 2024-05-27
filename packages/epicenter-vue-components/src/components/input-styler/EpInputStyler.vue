<template>
  <div
    :class="['ep-input-styler', { 'ep-input-styler--disabled': disabled }]"
    :style="containerStyles"
  >
    <div class="ep-input-styler__inner">
      <div
        v-if="iconLeft"
        :class="['ep-input-styler__icon-left', `ep-input-styler__icon-left--${size}`]"
        :style="iconStyles"
      >
        <ep-icon v-bind="iconLeft" />
      </div>
      <div
        v-if="iconRight"
        :class="[
          'ep-input-styler__icon-right',
          `ep-input-styler__icon-right--${size}`,
          { 'ep-input-styler__icon-right--clickable': iconRightClickable }
        ]"
        :style="iconStyles"
        @click="onClick"
      >
        <ep-icon
          v-show="iconRightVisible"
          v-bind="iconRight"
        />
      </div>
    </div>
    <label
      v-show="label && hasInput || hasFocus"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup>
  import EpIcon from '../icon/EpIcon.vue'
  import { ref, computed } from 'vue'

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
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
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
      width: props.width,
      // height is small 22px, default 30px, large 38px
      height: `${sizes.value[props.size]}px`
    }
  })

  const iconStyles = computed(() => {
    return {
      cursor: 'pointer'
    }
  })

  const onClick = () => {
    if (!props.iconRightVisible) return
    emit('click')
  }
</script>