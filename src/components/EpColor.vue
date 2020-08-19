<template>
  <div class="colors">
    <div
      v-for="(hue, index) in hues"
      :key="index"
      class="hue"
    >
      <div class="swatches">
        <div
          v-for="n of 9"
          :key="n"
          class="swatch"
        >
          <div :class="['chip', `${hue}-${n * 100}`]"></div>
          <div class="name">{{ `${hue} ${n * 100}` }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpColor',
    data() {
      return {
        hues: [
          'red',
          'orange',
          'yellow',
          'green',
          'teal',
          'blue',
          'indigo',
          'purple',
          'pink'
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @each $color, $value in $base-colors {
    // tints
    $indexValue: 4;
    @while $indexValue > 0 {
      .#{$color}-#{$indexValue * 100} {
        background-color: tint($value, 80% / $indexValue);
      }
      $indexValue: $indexValue - 1;
    }

    .#{$color}-500 {
      background-color: $value;
    }
    
    // shades
    @for $i from 1 through 4 {
      .#{$color}-#{($i + 5) * 100} {
        // higher the %, darker end
        background-color: shade($value, $i * 12%);
      }
    }
  }

  .colors {
    padding: 30px;
  }
  .hue {
    display: flex;
    justify-content: center;
    width: 100%;
    & + .hue {
      margin-top: 30px;
    }
  }
  .swatches {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .swatch {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
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