<template>
  <div class="color-test">
    <div class="copy-block">
      <p>
        A color that works for backgrounds or buttons may not suit borders or
        <a
          :style="{ color: primaryColor }"
          href="#"
          @click.prevent
        >text links</a>
        across themes. This tool helps you adjust colors within the same family
        for each use case.
      </p>
    </div>
    <div
      class="color-chip"
      :style="`background: ${primaryColor};`"
    />
    <ep-button
      class="ep-button-var--color-test"
      :style="{ background: primaryColor, borderColor: primaryColor }"
    >
      Button
    </ep-button>
    <ep-button
      :outlined="true"
      :style="{ borderColor: primaryColor }"
    >
      Button
    </ep-button>
    <ep-badge
      label="Badge"
      background-color=""
      :style="{ borderColor: primaryColor }"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  import EpBadge from '@/components/badge/EpBadge.vue'
  import EpButton from '@/components/button/EpButton.vue'

  const props = defineProps({
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
  })

  const primaryColor = computed(() => {
    return `hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%)`
  })
</script>

<style lang="scss" scoped>
  .copy-block p {
    text-wrap: balance;
  }

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

  .ep-button-var--color-test {
    color: #fff;
  }
</style>
