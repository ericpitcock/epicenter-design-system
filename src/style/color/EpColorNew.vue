<template>
  <div class="colors">
    <div v-for="(colors, name) in colors" :key="name">
      <h1>{{ name }}</h1>
      <div class="swatches">
          <div
            v-for="(value, name) in colors"
            :key="name"
            class="swatch"
          >
            <div class="chip" :style="{ background: value }"></div>
            <div class="name">{{ name.replaceAll('-', ' ') }}</div>
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
  .colors {
    padding: 30px;
  }
  // .hue {
  //   display: flex;
  //   justify-content: center;
  //   width: 100%;
  //   & + .hue {
  //     margin-top: 30px;
  //   }
  // }
  .swatches {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .swatch {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    // margin: 0 10px;
    background: $white;
    overflow: hidden;
  }
  .chip {
    width: 100px;
    height: 100px;
  }
  .name {
    text-transform: capitalize;
    font-size: 12px;
    padding: 5px 0 10px 0;
  }
</style>