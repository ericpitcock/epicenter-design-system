<template>
  <component
    :is="element"
    :type
    :class="['ep-button', computedClasses, classes]"
    :style="styles"
    :title="title"
    :aria-label="ariaLabel ? ariaLabel : label"
    :disabled="disabled"
    v-bind="$attrs"
    @click="onClick"
  >
    <span
      v-if="iconLeft"
      class="ep-button__icon ep-button__icon--left"
    >
      <ep-icon v-bind="iconLeft" />
    </span>
    <span
      v-if="label"
      class="ep-button__label"
    >
      {{ label }}
    </span>
    <span
      v-if="iconRight"
      class="ep-button__icon ep-button__icon--right"
    >
      <ep-icon v-bind="iconRight" />
    </span>
  </component>
</template>

<script setup>
  import { computed, useAttrs } from 'vue'
  import EpIcon from '../icon/EpIcon.vue'

  const props = defineProps({
    size: {
      type: String,
      default: 'default',
      validator: (value) => [
        'small',
        'default',
        'large',
        'xlarge'
      ].includes(value)
    },
    title: {
      type: String,
      default: ''
    },
    ariaLabel: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    iconLeft: {
      type: Object,
      default: undefined
    },
    iconRight: {
      type: Object,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isMenuItem: {
      type: Boolean,
      default: false
    },
    isActiveMenuItem: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit'].includes(value)
    },
    styles: {
      type: Array,
      default: () => []
    },
    classes: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['click'])
  const onClick = () => emit('click')

  const element = computed(() => {
    const attrs = useAttrs()

    if (attrs.to) {
      return 'router-link'
    }
    if (attrs.href) {
      return 'a'
    }
    return 'button'
  })

  // const defaultIconProps = {
  //   styles: {
  //     '--ep-icon-width': '100%',
  //     '--ep-icon-height': '100%'
  //   }
  // }

  // const computedIconLeftProps = computed(() => {
  //   if (props.iconLeft) {
  //     return {
  //       ...defaultIconProps,
  //       ...props.iconLeft
  //     }
  //   }
  //   return undefined
  // })

  // const computedIconRightProps = computed(() => {
  //   if (props.iconRight) {
  //     return {
  //       ...defaultIconProps,
  //       ...props.iconRight
  //     }
  //   }
  //   return undefined
  // })

  const computedClasses = computed(() => ({
    [`ep-button--${props.size}`]: props.size != 'default',
    'ep-button--icon-right': props.iconRight,
    'ep-button--icon-left': props.iconLeft,
    'ep-button--disabled': props.disabled,
    'ep-button--menu-item': props.isMenuItem,
    'ep-button--menu-item--active': props.isActiveMenuItem
  }))
</script>
