<template>
  <div
    ref="epContainer"
    :class="['ep-container', containerClasses]"
    :style="[styles, containerStyles]"
  >
    <div
      v-if="$slots.header"
      class="ep-container__header"
    >
      <slot name="header" />
    </div>
    <div class="ep-container__content">
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
  defineOptions({
    name: 'EpContainer'
  })
  import useCalculatedHeight from '../../composables/useCalculatedHeight.js'
  import { computed, ref } from 'vue'

  const props = defineProps({
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
    styles: {
      type: Object,
      default: () => ({})
    }
  })

  const containerClasses = computed(() => ({
    'ep-container--sticky-header': props.stickyHeader
  }))

  const epContainer = ref(null)
  const { containerHeight } = useCalculatedHeight(epContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => ({
    ...(props.calculateHeight && containerHeight.value),
  }))
</script>
