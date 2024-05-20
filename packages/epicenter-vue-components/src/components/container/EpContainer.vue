<template>
  <div
    ref="epContainer"
    :class="['ep-container', containerClasses]"
    :style="containerStyles"
  >
    <div
      v-if="$slots.header"
      class="ep-container__header"
    >
      <slot name="header" />
    </div>
    <div
      class="ep-container__content"
      :style="contentStyles"
    >
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-container__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import useCalculatedHeight from '../../composables/useCalculatedHeight.js'
  import { computed, ref } from 'vue'

  const props = defineProps({
    width: {
      type: String,
      default: '100%'
    },
    minWidth: {
      type: String,
      default: '0'
    },
    maxWidth: {
      type: String,
      default: 'none'
    },
    height: {
      type: String,
      default: 'auto'
    },
    minHeight: {
      type: String,
      default: 'auto'
    },
    maxHeight: {
      type: String,
      default: 'none'
    },
    containerPadding: {
      type: String,
      default: null
    },
    contentPadding: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    borderRadius: {
      type: String,
      default: 'var(--border-radius--large)'
    },
    borderWidth: {
      type: String,
      default: '0.1rem'
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderColor: {
      type: String,
      default: 'var(--border-color)'
    },
    overflow: {
      type: String,
      default: 'visible'
    },
    stickyHeader: {
      type: Boolean,
      default: false
    },
    calculateHeight: {
      type: Boolean,
      default: false
    },
    calculateHeightOffset: {
      type: Number,
      default: 0
    },
  })

  const containerClasses = computed(() => ({
    'ep-container--sticky-header': props.stickyHeader
  }))

  const epContainer = ref(null)
  const { containerHeight } = useCalculatedHeight(epContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => ({
    width: props.width,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    ...(props.calculateHeight && containerHeight.value),
    ...(!props.calculateHeight && { height: props.height }),
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    ...(props.backgroundColor && { background: props.backgroundColor }),
    padding: props.containerPadding,
    borderRadius: props.borderRadius,
    border: `${props.borderWidth} ${props.borderStyle} ${props.borderColor}`,
    overflow: props.overflow
  }))

  const contentStyles = computed(() => ({
    padding: props.contentPadding,
    // overflow: props.overflow
  }))
</script>
