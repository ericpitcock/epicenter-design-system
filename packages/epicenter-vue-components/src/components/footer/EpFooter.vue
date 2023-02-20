<template>
  <div
    class="ep-footer"
    :style="containerStyles"
  >
    <div
      class="ep-footer__content"
      :style="contentStyles"
    >
      <template v-for="slotName in ['left', 'center', 'right']">
        <div
          v-if="$slots[slotName]"
          :key="slotName"
          :class="`ep-footer__content__${slotName}`"
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
    name: 'EpFooter',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '5.1rem'
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
      }
    },
    computed: {
      // footerStyles() {
      //   return {
      //     height: this.height,
      //     padding: this.padding,
      //     margin: this.margin,
      //     backgroundColor: this.backgroundColor,
      //     borderTop: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`
      //   }
      // }
      containerStyles() {
        return {
          width: this.width,
          height: this.height,
          padding: this.padding,
          backgroundColor: this.backgroundColor,
          borderTop: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`,
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
      }
    },
    methods: {
      getStyles(slotName) {
        return this[`${slotName}Styles`]
      }
    }
  }
</script>
