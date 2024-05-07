<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    :is="type"
    class="ep-icon"
    v-html="svgContent"
  />
</template>

<script setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    weight: {
      type: [String, Number],
      default: 'regular',
    },
    size: {
      type: Number,
      default: 20,
    },
    type: {
      type: String,
      default: 'span'
    }
  })

  const weights = {
    'extra-light': 0.5,
    'light': 1,
    'regular': 1.5,
    'bold': 2,
  }

  const processWeight = (weight) => {
    // Check if weight is a string, if so, return the corresponding value from weights object
    if (typeof weight === 'string') {
      return weights[weight]
    }
    // If weight is a number or not recognized, return it as is
    return weight
  }

  // Define async component with processed SVG content
  const icon = import(`./icons/${props.name}.svg?raw`)

  const processSVG = (content) => {
    return content.replace(
      /<svg([^>]*)width=\S+/,
      `<svg$1width="${props.size}"`
    ).replace(
      /<svg([^>]*)height=\S+/,
      `<svg$1height="${props.size}"`
    ).replace(
      /stroke=\S+/g,
      `stroke="${props.color}"`
    ).replace(
      /stroke-width=\S+/g,
      `stroke-width="${processWeight(props.weight)}"`
    )
  }

  const svgContent = ref('')

  watchEffect(async () => {
    const { default: rawSvg } = await icon
    svgContent.value = processSVG(rawSvg)
  })
</script>

<style lang="scss" scoped>
  .ep-icon {
    display: inline-flex;
    color: inherit;
  }
</style>
