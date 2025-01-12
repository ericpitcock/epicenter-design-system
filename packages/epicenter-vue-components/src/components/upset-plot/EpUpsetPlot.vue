<template>
  <div class="ep-upset-plot-container">
    <div class="ep-upset-plot-chart">
      <div
        v-for="(total, index) in chartTotals"
        :key="index"
        class="ep-upset-plot-chart__column"
        :style="{ height: `${total}px` }"
      />
    </div>
    <div class="ep-upset-plot-adapters">
      <div
        v-for="(adapter, index) in adapters"
        :key="index"
        class="ep-upset-plot-matrix__row"
      >
        {{ adapter }}
      </div>
    </div>
    <div class="
        ep-upset-plot-matrix-plot">
      this is the plot
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { faker } from '@faker-js/faker'

  defineOptions({
    name: 'EpUpsetPlot',
  })

  // const chartTotals = [10, 20, 30, 40, 50]
  // chartTotals is a computed property that returns an array of random numbers
  // and then orders them in ascending order
  const chartTotals = computed(() => {
    return Array.from({ length: 14 }, () => faker.number.int({ min: 10, max: 200 }))
      .sort((a, b) => a - b)
  })



  const adapters = [
    'CrowdStrike',
    'CarbonBlack Response',
    'CarbonBlack Defense',
    'Defender ATP',
    'eSentire JSON',
    'Sumo Logic',
    'Tenable.io',
    'Qualys Scans',
    'Rapid7 InsightVM',
    'Azure AD',
  ]
</script>

<style lang="scss" scoped>
  .ep-upset-plot-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    background: red;
    padding: 30px;
  }

  .ep-upset-plot-chart {
    // place in second column first row
    grid-column: 2;
    grid-row: 1;
    display: flex;
    // align to bottom
    align-items: flex-end;
    gap: 2rem;
    height: 20rem;
    background: blue;

    &__column {
      width: 3rem;
      max-width: 3rem;
      height: 100%;
      background-color: #000;
    }
  }

  .ep-upset-plot-adapters {
    // place in first column second row
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: green;

    &__row {
      height: 30px;
      background-color: #000;
    }
  }

  .ep-upset-plot-matrix-plot {
    // place in second column second row
    grid-column: 2;
    grid-row: 2;
    background: yellow;
  }
</style>