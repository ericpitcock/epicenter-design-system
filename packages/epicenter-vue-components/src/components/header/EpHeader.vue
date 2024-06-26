<template>
  <div
    :class="['ep-header', { 'ep-header--shadowed': shadowed }]"
    :style="containerStyles"
  >
    <div
      class="ep-header__content"
      :style="contentStyles"
    >
      <template v-for="slotName in ['left', 'center', 'right']">
        <div
          v-if="$slots[slotName]"
          :key="slotName"
          :class="`ep-header__content__${slotName}`"
          :style="getStyles(slotName)"
        >
          <slot :name="slotName" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpHeader',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '6.1rem'
      },
      padding: {
        type: String,
        default: '0'
      },
      margin: {
        type: String,
        default: '0'
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
        default: 'hidden'
      },
      itemGap: {
        type: String,
        default: '3rem'
      },
      leftFlex: {
        type: String,
        default: '1'
      },
      leftGap: {
        type: String,
        default: '3rem'
      },
      leftJustify: {
        type: String,
        default: 'flex-start'
      },
      leftPadding: {
        type: String,
        default: '0'
      },
      centerFlex: {
        type: String,
        default: '1'
      },
      centerGap: {
        type: String,
        default: '3rem'
      },
      centerJustify: {
        type: String,
        default: 'center'
      },
      centerPadding: {
        type: String,
        default: '0'
      },
      rightFlex: {
        type: String,
        default: '1'
      },
      rightGap: {
        type: String,
        default: '3rem'
      },
      rightJustify: {
        type: String,
        default: 'flex-end'
      },
      rightPadding: {
        type: String,
        default: '0'
      },
      sticky: {
        type: Boolean,
        default: false
      },
      stickyTop: {
        type: String,
        default: '0'
      },
      zIndex: {
        type: String,
        default: '1'
      },
      shadowed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      containerStyles() {
        return {
          position: this.headerPosition,
          top: this.stickyTop,
          width: this.width,
          height: this.height,
          padding: this.padding,
          margin: this.margin,
          ...(this.backgroundColor && { background: this.backgroundColor }),
          borderBottom: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`,
          zIndex: this.zIndex
        }
      },
      contentStyles() {
        return {
          gap: this.itemGap,
        }
      },
      leftStyles() {
        return {
          flex: this.leftFlex,
          gap: this.leftGap,
          justifyContent: this.leftJustify,
          padding: this.leftPadding,
        }
      },
      centerStyles() {
        return {
          flex: this.centerFlex,
          gap: this.centerGap,
          justifyContent: this.centerJustify,
          padding: this.centerPadding,
        }
      },
      rightStyles() {
        return {
          flex: this.rightFlex,
          gap: this.rightGap,
          justifyContent: this.rightJustify,
          padding: this.rightPadding,
        }
      },
      // need to address this
      headerPosition() {
        return this.sticky ? 'sticky' : 'relative'
      }
    },
    methods: {
      getStyles(slotName) {
        return this[`${slotName}Styles`]
      }
    }
  }
</script>
