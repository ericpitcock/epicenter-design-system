<template>
  <div
    class="ep-footer"
    :style="containerStyles"
  >
    <div
      class="ep-footer__content"
      :style="contentStyles"
    >
      <div
        v-if="$slots.left"
        class="ep-footer__content__left"
        :style="getStyles('left')"
      >
        <!-- @slot Content to display on the left side of the footer -->
        <slot name="left" />
      </div>
      <div
        v-if="$slots.center"
        class="ep-footer__content__center"
        :style="getStyles('center')"
      >
        <!-- @slot Content to display in the center of the footer -->
        <slot name="center" />
      </div>
      <div
        v-if="$slots.right"
        class="ep-footer__content__right"
        :style="getStyles('right')"
      >
        <!-- @slot Content to display on the right side of the footer -->
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpFooter',
    props: {
      /**
       * The width of the footer.
       */
      width: {
        type: String,
        default: '100%'
      },
      /**
       * The height of the footer.
       */
      height: {
        type: String,
        default: '5.1rem'
      },
      /**
       * The padding of the footer.
       */
      padding: {
        type: String,
        default: '0'
      },
      /**
       * The margin of the footer.
       */
      margin: {
        type: String,
        default: '0'
      },
      /**
       * The background color of the footer.
       */
      backgroundColor: {
        type: String,
        default: 'var(--interface-surface)'
      },
      /**
       * The border radius of the footer.
       */
      borderRadius: {
        type: String,
        default: 'var(--border-radius--large)'
      },
      /**
       * The border width of the footer.
       */
      borderWidth: {
        type: String,
        default: '0.1rem'
      },
      /**
       * The border style of the footer.
       */
      borderStyle: {
        type: String,
        default: 'solid'
      },
      /**
       * The border color of the footer.
       */
      borderColor: {
        type: String,
        default: 'var(--border-color)'
      },
      /**
       * The overflow behavior of the footer.
       */
      overflow: {
        type: String,
        default: 'hidden'
      },
      /**
       * The gap between items in the footer.
       */
      itemGap: {
        type: String,
        default: '3rem'
      },
      /**
       * The flex value for the left section.
       */
      leftFlex: {
        type: String,
        default: '1'
      },
      /**
       * The gap between items in the left section.
       */
      leftGap: {
        type: String,
        default: '3rem'
      },
      /**
       * The justify-content value for the left section.
       */
      leftJustify: {
        type: String,
        default: 'flex-start'
      },
      /**
       * The flex value for the center section.
       */
      centerFlex: {
        type: String,
        default: '1'
      },
      /**
       * The gap between items in the center section.
       */
      centerGap: {
        type: String,
        default: '3rem'
      },
      /**
       * The justify-content value for the center section.
       */
      centerJustify: {
        type: String,
        default: 'center'
      },
      /**
       * The flex value for the right section.
       */
      rightFlex: {
        type: String,
        default: '1'
      },
      /**
       * The gap between items in the right section.
       */
      rightGap: {
        type: String,
        default: '3rem'
      },
      /**
       * The justify-content value for the right section.
       */
      rightJustify: {
        type: String,
        default: 'flex-end'
      },
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
          gap: this.leftGap,
          justifyContent: this.leftJustify,
        }
      },
      centerStyles() {
        return {
          flex: this.centerFlex,
          gap: this.centerGap,
          justifyContent: this.centerJustify,
        }
      },
      rightStyles() {
        return {
          flex: this.rightFlex,
          gap: this.rightGap,
          justifyContent: this.rightJustify,
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
