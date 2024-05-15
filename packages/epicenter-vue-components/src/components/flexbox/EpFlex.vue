<template>
  <div
    class="ep-flex"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    flexProps: {
      type: String,
      required: true
    }
  })

  const [
    width,
    height,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    padding
  ] = props.flexProps.split(',')

  const styles = computed(() => {
    return {
      display: 'flex',
      ...width && { width },
      ...height && { height },
      ...flexDirection && { flexDirection },
      ...flexWrap && { flexWrap },
      ...justifyContent && { justifyContent },
      ...alignItems && { alignItems },
      ...alignContent && { alignContent },
      ...gap && { gap },
      ...padding && { padding },
    }
  })
</script>
