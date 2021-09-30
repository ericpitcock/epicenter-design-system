<template>
  <div class="colors">
    <container
      v-for="(hue, index) in hues"
      :key="index"
      class="category spaced--large"
    >
      <div class="category__label">
        <h1>{{ hue.replaceAll('-', ' ') }}</h1>
      </div>
      <div class="category__swatches">
        <div v-for="(level, index) in levels" :key="index" class="swatch">
          <div
            class="swatch__chip"
            :style="{ background: `var(--${hue}-${level})` }"
          ></div>
          <div class="swatch__name">
            {{ `--${hue}-${level}`.replaceAll('-', ' ') }}
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
  import { colors } from './colors'
  import Container from '../../components/Container'

  export default {
    name: 'EpColor',
    data: () => ({
      colors,
      hues: [
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'rose',
        'blue-gray',
        'cool-gray',
        'gray',
        'true-gray',
        'warm-gray'
      ],
      levels: [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000'
      ]
    }),
    components: {
      Container
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    & + & {
      margin-top: 20px;
    }
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
      gap: 20px 20px;
    }
  }
  .swatch {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    background: var(--background-level-2);
    padding: 10px;
    border-radius: 3px;
    border: 1px solid var(--border-color);
    // box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
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
