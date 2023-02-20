<template>
  <div
    class="ep-header"
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
        default: '0 3rem'
      },
      margin: {
        type: String,
        default: '0'
      },
      backgroundColor: {
        type: String,
        default: 'var(--background-2)'
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
      centerFlex: {
        type: String,
        default: '1'
      },
      rightFlex: {
        type: String,
        default: '1'
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
          backgroundColor: this.backgroundColor,
          borderBottom: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`
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
          gap: this.itemGap,
        }
      },
      centerStyles() {
        return {
          flex: this.centerFlex,
          gap: this.itemGap,
        }
      },
      rightStyles() {
        return {
          flex: this.rightFlex,
          gap: this.itemGap,
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
