<template>
  <div
    :id="font.family.toLowerCase().split(' ').join('-')"
    class="font-container"
  >
    <div
      v-if="error"
      class="error"
    >
      <p>There was an error loading this font</p>
    </div>
    <!-- <div
      v-if="!loading"
      class="font"
    > -->
    <div
      v-if="!loading"
      class="font__sample"
      :style="{ fontFamily: font.family, fontSize: `${fontSize}px` }"
    >
      {{ sample }}
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
  import WebFont from 'webfontloader'

  export default {
    name: 'FontContainer',
    props: {
      font: {
        type: Object,
        default: () => { }
      },
      fontSize: {
        type: String,
        default: '32'
      },
      sample: {
        type: String,
        default: 'The quick brown fox jumps over the lazy dog'
      },
    },
    emits: ['font-loaded'],
    data() {
      return {
        loading: true,
        error: false,
        observer: null,
        // getGlobalFontSize: 32,
      }
    },
    mounted() {
      this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadFont(this.font)
            observer.disconnect()
          }
        })
      })
      this.observer.observe(this.$el)
    },
    unmounted() {
      this.observer.disconnect()
    },
    methods: {
      loadFont(font) {
        let fontStack = ''
        if (font.variants.length > 1) {
          fontStack = `${font.family}:${font.variants.join(',')}`
        } else {
          fontStack = font.family
        }
        WebFont.load({
          google: {
            families: [fontStack]
          },
          classes: false,
          loading: () => {
          },
          active: () => {
          },
          inactive: () => {
          },
          fontloading: (familyName, fvd) => {
            this.loading = true
          },
          fontactive: (familyName, fvd) => {
            this.loading = false
            this.$emit('font-loaded', familyName)
          },
          fontinactive: (familyName, fvd) => {
            this.loading = false
            this.error = true
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .font-container {
    position: relative;

    // &:hover {
    //   box-shadow: 0 0 20px rgba(0,0,0,0.05);
    // }
    .loading,
    .error {
      position: absolute;
      top: 1px;
      right: 0;
      bottom: 0;
      left: 0;
      // padding-right: 200px;
      display: flex;
      // justify-content: center;
      align-items: center;
      background: var(--background-2);
    }

    .loading img {
      height: 100%;
    }

    .error {
      color: red;
    }
  }

  .font-container a {
    color: black;
    text-decoration: none;
  }

  .font {
    display: flex;
    align-items: center;

    // padding: 0 30px;
    .font-container & {
      border: 1px solid transparent;
      // border-left: 1px solid transparent;
    }

    // &:hover {
    //   cursor: pointer;
    //   border-color: #e6e6e6;
    // }
    .font-container:not(:first-child) & {
      // border-top: 1px solid #e6e6e6;
    }

    .font-container:last-child & {
      // border-bottom: 1px solid #e6e6e6;
    }

    & + & {
      margin-top: 20px;
    }

    &__sample {
      flex: 1 1 auto;
      align-self: stretch;
      line-height: 1.2;

      // padding: 60px 30px;
      // margin-left: 30px;
      // background: lightgray;
      &:hover {
        // color: red;
        // cursor: pointer;
      }

      .json {
        padding-top: 30px;
        font-size: 12px;
      }
    }

    &__compare-button {
      display: flex;
      align-items: center;
      display: flex;
      align-items: center;
      // height: 29px;
      // padding: 3px 10px 0 10px;
      // border: 1px solid red;
      font-size: 11px;
      border-radius: 15px;
      color: red;

      &:hover {
        color: black;
        cursor: pointer;
      }
    }
  }
</style>