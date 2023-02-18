<template>
  <div
    class="ep-spark-bar"
    :style="{ width: `${bar[5]}%` }"
  >
    <div
      v-for="(segment, index) in segmentWidth"
      class="ep-spark-bar__segment"
      :style="{ width: `${segment}%` }"
    >
      <span class="ep-spark-bar__segment__info">
        {{ segmentHoverInfo(index) }}
      </span>
    </div>
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
    },
    methods: {
      segmentHoverInfo(index) {
        switch (index) {
          case 0:
            return `${this.segments[index]} low vulnerabilities`
          case 1:
            return `${this.segments[index]} medium vulnerabilities`
          case 2:
            return `${this.segments[index]} high vulnerabilities`
          case 3:
            return `${this.segments[index]} critical vulnerabilities`
      }
    }
  }
}
</script>
