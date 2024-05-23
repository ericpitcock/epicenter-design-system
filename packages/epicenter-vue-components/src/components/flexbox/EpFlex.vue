<template>
  <div
    class="ep-flex"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpFlex'
  })
  import { computed } from 'vue'

  const props = defineProps({
    flexProps: {
      type: String,
      required: true
    }
  })

  const styles = computed(() => {
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
