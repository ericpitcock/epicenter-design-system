<template>
  <div class="color-test">
    <div class="color-chip" :style="`background-color: ${primaryColor};`"></div>
    <ep-button
      label="Button"
      kind="primary"
      :style="{ backgroundColor: primaryColor }"
    />
    <ep-button
      label="Button"
      :outlined="true"
      :style="{ borderColor: primaryColor }"
    />
    <div class="copy-block">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      <a :style="{ color: primaryColor }" href="#">ligula in lacus.</a> Nulla facilisi. In hac habitasse platea dictumst.
      Aliquam eu nunc. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    </div>


    <!-- <div class="primary-color" v-for="variant in variants" :key="variant">
      <div class="color" :style="`background-color: var(--color--primary--${variant})`"></div>
      <div class="name">{{ variant }}</div>
    </div> -->
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'

  export default {
    name: 'EpColorTest',
    data() {
      return {
        variants: [
          'lightest',
          'lighter',
          'light',
          'dark',
          'darker',
          'darkest'
        ]
      }
    },
    props: {
      hue: {
        type: Number,
        default: 223
      },
      saturation: {
        type: Number,
        default: 100
      },
      lightness: {
        type: Number,
        default: 65
      }
    },
    components: {
      EpButton
    },
    computed: {
      primaryColor() {
        return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
      }
    },
    watch: {

    }
  }
</script>

<style lang="scss" scoped>
  .color-chip {
    width: 100px;
    height: 100px;
  }
  .color-test {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    * + * {
      margin-top: 2rem;
    }
  }
</style>
