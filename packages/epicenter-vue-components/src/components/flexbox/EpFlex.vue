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
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    padding
  ] = props.flexProps.split(',')

  const styles = computed(() => {
    return {
      display: 'flex',
      width: width !== undefined ? width : '100%',
      height: height !== undefined ? height : '100%',
      flexFlow: flexFlow !== undefined ? flexFlow : 'row nowrap',
      justifyContent: justifyContent !== undefined ? justifyContent : 'flex-start',
      alignItems: alignItems !== undefined ? alignItems : 'stretch',
      alignContent: alignContent !== undefined ? alignContent : 'normal',
      gap: gap !== undefined ? gap : '0',
      padding: padding !== undefined ? padding : '0',
    }
  })
</script>
