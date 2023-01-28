<template>
  <div class="ep-spark-bar" :style="{ width: `${bar[5]}%` }">
    <div
      v-for="segment in segmentWidth"
      class="ep-spark-bar__segment"
      :style="{ width: `${segment}%` }"
    ></div>
    <p class="ep-spark-bar__label font-size--tiny">{{ bar[4] }}</p>
  </div>
</template>

<script>
export default {
  name: 'EpSparkBar',
  props: {
    bar: {
      // value is an array that consists of [low, medium, high, critical, sum, percentage (of largest vuln total)]
      type: Array,
      required: true
    }
  },
  computed: {
    // return the first four in this.bar array
    // and the sum of the rest
    segments() {
      return this.bar.slice(0, 4)
    },
    // return percentage of the sum for each segment
    // to be used as width
    segmentWidth() {
      const sum = this.bar.slice(4).reduce((acc, curr) => {
        return acc + curr
      }, 0)
      return this.bar.slice(0, 4).map((segment) => {
        return (segment / sum) * 100
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ep-spark-bar {
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  height: 0.8rem;
  width: 100px;
  &__segment {
    height: 100%;
    // width: 1px;
    // margin: 0 1px;
    // color each segment by selecting child index
    &:nth-child(1) {
      background-color: gray;
      border-radius: 0.4rem 0 0 0.4rem;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: orange;
    }
    &:nth-child(4) {
      background-color: red;
      border-radius: 0 0.4rem 0.4rem 0;
    }
  }
  &__label {
    margin-left: 0.5rem;
  }
}
</style>