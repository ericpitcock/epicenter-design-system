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

  defineOptions({
    name: 'EpFlex'
  })

  const props = defineProps({
    flexProps: {
      type: String,
      required: true
    }
  })

  const defaultFlexProps = {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'normal',
    gap: '0',
    padding: '0'
  }

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
      width: width || defaultFlexProps.width,
      height: height || defaultFlexProps.height,
      flexDirection: flexDirection || defaultFlexProps.flexDirection,
      flexWrap: flexWrap || defaultFlexProps.flexWrap,
      justifyContent: justifyContent || defaultFlexProps.justifyContent,
      alignItems: alignItems || defaultFlexProps.alignItems,
      alignContent: alignContent || defaultFlexProps.alignContent,
      gap: gap || defaultFlexProps.gap,
      padding: padding || defaultFlexProps.padding,
    }
  })
</script>
