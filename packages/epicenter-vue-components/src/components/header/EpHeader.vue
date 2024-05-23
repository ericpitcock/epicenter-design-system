<template>
  <div
    class="ep-header"
    :style="styles"
  >
    <div class="ep-header__content">
      <template v-for="slotName in ['left', 'center', 'right']">
        <div
          v-if="$slots[slotName]"
          :key="slotName"
          :class="`ep-header__content__${slotName}`"
        >
          <slot :name="slotName" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpHeader',
  })

  const props = defineProps({
    styles: {
      type: Object,
      default: () => ({})
    },
  })

  // const containerStyles = computed(() => {
  //   return {
  // position: headerPosition,
  // top: props.stickyTop,
  // width: props.width,
  // height: props.height,
  // padding: props.padding,
  // margin: props.margin,
  // ...(props.backgroundColor && { background: props.backgroundColor }),
  // borderBottom: `${props.borderWidth} ${props.borderStyle} ${props.borderColor}`,
  // zIndex: props.zIndex
  //   }
  // })

  // const contentStyles = computed(() => {
  //   return {
  //     gap: props.itemGap,
  //   }
  // })

  // eslint-disable-next-line no-unused-vars
  // const leftStyles = computed(() => {
  //   return {
  //     flex: props.leftFlex,
  //     gap: props.leftGap,
  //     justifyContent: props.leftJustify,
  //     padding: props.leftPadding,
  //   }
  // })

  // // eslint-disable-next-line no-unused-vars
  // const centerStyles = computed(() => {
  //   return {
  //     flex: props.centerFlex,
  //     gap: props.centerGap,
  //     justifyContent: props.centerJustify,
  //     padding: props.centerPadding,
  //   }
  // })

  // // eslint-disable-next-line no-unused-vars
  // const rightStyles = computed(() => {
  //   return {
  //     flex: props.rightFlex,
  //     gap: props.rightGap,
  //     justifyContent: props.rightJustify,
  //     padding: props.rightPadding,
  //   }
  // })

  // need to address this
  // eslint-disable-next-line no-unused-vars
  // const headerPosition = computed(() => {
  //   return props.sticky ? 'sticky' : 'relative'
  // })

  // const getStyles = (slotName) => {
  //   return [`${slotName}Styles`]
  // }
</script>
