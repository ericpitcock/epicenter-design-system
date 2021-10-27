<template>
  <div class="colors">
    <ep-container
      :fullWidth="true"
      :connected="true"
      :padding="'60px'"
      v-for="(hue, index) in hues"
      :key="index"
    >
      <div class="category">
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
              {{ `${hue} ${level}` }}
            </div>
          </div>
        </div>
      </div>
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'EpColor',
    data: () => ({
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
        // excluding 1000 as the easy fix for grays that lack is
        // '1000'
      ]
    }),
    components: {
      EpContainer
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    flex-direction: column;
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
    &__chip {
      width: 100px;
      height: 100px;
      border-radius: 3px;
    }
    &__name {
      text-transform: capitalize;
      font-size: 12px;
      padding-top: 10px;
    }
  }
</style>
