<template>
  <div class="color-test">
    <div class="copy-block">
      <p>
        A color that works for a large background or button doesn't always work
        for borders or
        <a
          :style="{ color: primaryColor }"
          href="#"
        >Text links</a>, especially across dark and light themes. When you want
        to
        keep the colors in the same family, but
        adjust for a particualar use case, this tool will help with that.
      </p>
    </div>
    <div
      class="color-chip"
      :style="`background: ${primaryColor};`"
    />
    <ep-button
      label="Button"
      variant="primary"
      :style="{ background: primaryColor, borderColor: primaryColor }"
    />
    <ep-button
      label="Button"
      :outlined="true"
      :style="{ borderColor: primaryColor }"
    />
    <ep-badge
      label="Badge"
      background-color=""
      :border-color="primaryColor"
    />
    <!-- <div class="primary-color" v-for="variant in variants" :key="variant">
      <div class="color" :style="`background-color: var(--color--primary--${variant})`"></div>
      <div class="name">{{ variant }}</div>
    </div> -->
  </div>
</template>

<script>
  import EpBadge from '@/components/badge/EpBadge.vue'
  import EpButton from '@/components/button/EpButton.vue'

  export default {
    name: 'EpColorTest',
    components: {
      EpBadge,
      EpButton
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
