<template>
  <div class="ep-input-styler__container">
    <label
      v-if="label"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <div
      :class="[
        'ep-input-styler',
        { 'ep-input-styler--disabled': disabled }
      ]"
      :style="containerStyles"
    >
      <div class="ep-input-styler__inner">
        <div
          v-if="$slots['icon-left']"
          :class="[
            'ep-input-styler__icon-left',
            `ep-input-styler__icon-left--${size}`
          ]"
        >
          <slot name="icon-left" />
        </div>
        <div
          v-if="$slots['icon-right']"
          :class="[
            'ep-input-styler__icon-right',
            `ep-input-styler__icon-right--${size}`
          ]"
        >
          <slot name="icon-right" />
          <Cancel01
            v-if="clearable && hasInput"
            class="ep-input-styler__icon-right--clickable"
            @click="$emit('click')"
          />
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import Cancel01 from '@ericpitcock/epicenter-icons/icons/Cancel01'
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
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // iconRightClickable: {
    //   type: Boolean,
    //   default: false
    // },
    // iconRightVisible: {
    //   type: Boolean,
    //   default: false
    // },
    size: {
      type: String,
      default: 'default'
    },
  })

  defineEmits(['click'])

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

  // const onClick = () => {
  //   if (!props.iconRightVisible) return
  //   emit('click')
  // }
</script>