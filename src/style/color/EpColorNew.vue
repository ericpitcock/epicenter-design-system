<template>
  <div class="colors">
    <div
      v-for="(colors, name) in colors"
      :key="name"
      class="category spaced--large"
    >
      <div class="category__label">
        <h1>{{ name }}</h1>
      </div>
      <div class="category__swatches">
          <div
            v-for="(value, name) in colors"
            :key="name"
            class="swatch"
          >
            <div class="swatch__chip" :style="{ background: value }"></div>
            <div class="swatch__name">{{ name.replaceAll('-', ' ') }}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { colors } from './colors'

  export default {
    name: 'EpColor',
    data: () => ({
      colors
    })
  }
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    &__label {
      flex: 0 0 140px;
      h1 {
        text-transform: capitalize;
      }
    }
    &__swatches {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 0 10px;
    }
  }
  .swatch {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    background: $white;
    overflow: hidden;
    &__chip {
      width: 100px;
      height: 100px;
    }
    &__name {
      text-transform: capitalize;
      font-size: 12px;
      padding: 5px 0 10px 0;
    }
  }
</style>