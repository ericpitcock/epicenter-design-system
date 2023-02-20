<!-- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ -->
<template>
  <div :style="flexContainerStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpFlexContainer',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      // shorthand for flex-direction and flex-wrap
      // flex-direction: row | row-reverse | column | column-reverse;
      // flex-wrap: nowrap | wrap | wrap-reverse;
      flexFlow: {
        type: String,
        default: 'row nowrap'
      },
      // justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
      justifyContent: {
        type: String,
        default: 'flex-start'
      },
      // align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
      alignItems: {
        type: String,
        default: 'stretch'
      },
      // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
      // Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.
      alignContent: {
        type: String,
        default: 'normal'
      },
      gap: {
        type: String,
        default: '0'
      }
    },
    computed: {
      flexContainerStyle() {
        return {
          display: 'flex',
          width: this.width,
          height: this.height,
          flexFlow: this.flexFlow,
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
          alignContent: this.alignContent,
          gap: this.gap
        }
      }
    }
  }
</script>