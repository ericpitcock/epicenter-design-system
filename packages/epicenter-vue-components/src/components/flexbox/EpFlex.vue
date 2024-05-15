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

  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    flexProps: {
      type: String,
      required: true
    }
  })

  const [
    width,
    height,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    padding
  ] = props.flexProps.split(',').map(str => str.trim())

  const styles = computed(() => {
    return {
      display: 'flex',
      width: width || '100%',
      height: height || '100%',
      flexFlow: flexFlow || 'row nowrap',
      justifyContent: justifyContent || 'flex-start',
      alignItems: alignItems || 'stretch',
      alignContent: alignContent || 'normal',
      gap: gap || '0',
      padding: padding || '0',
      ...props
    }
  })
</script>
