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
        class="ep-upset-plot-adapters__row"
      >
        {{ adapter }}
      </div>
    </div>
    <div class="ep-upset-plot-matrix-plot">
      <div
        v-for="(row, index) in adapters"
        :key="index"
        class="ep-upset-plot-matrix-plot__row"
      >
        <div
          v-for="(cell, cellIndex) in chartTotals"
          :key="cellIndex"
          class="ep-upset-plot-matrix-plot__cell"
        >
          <div class="plot-indicator" />
        </div>
      </div>
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
    --ep-upset-plot-row-stripe-color: hsl(0deg 0.84% 14.37%);
    // width: 100%;
    // height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    background: var(--interface-surface);
    padding: 30px;
    border: 1px solid var(--border-color);
    user-select: none;
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
    padding-left: 1rem;
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);

    &__column {
      // width: 3rem;
      flex: 1;
      // max-width: 3rem;
      // height: 100%;
      background: var(--primary-color-base);
    }
  }

  .ep-upset-plot-adapters {
    // place in first column second row
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;

    // gap: 2rem;
    // background: green;
    &__row {
      height: 3.1rem;
      display: flex;
      justify-content: flex-end;
      text-align: right;
      align-items: center;
      padding-right: 1rem;
      border-bottom: 1px solid var(--border-color);

      &:nth-child(even) {
        background: var(--ep-upset-plot-row-stripe-color);
      }
    }
  }

  .ep-upset-plot-matrix-plot {
    // place in second column second row
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    // align to bottom
    // gap: 2rem;
    // padding-left: 1rem;
    border-left: 1px solid var(--border-color);

    &__row {
      display: flex;
      gap: 2rem;
      border-bottom: 1px solid var(--border-color);
      padding-left: 1rem;

      &:nth-child(even) {
        background: var(--ep-upset-plot-row-stripe-color);
      }
    }

    &__cell {
      // width: 3rem;
      flex: 1;
      height: 3rem;
      // background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;

      .plot-indicator {
        width: 0.8rem;
        height: 0.8rem;
        background: var(--interface-overlay--accent);
        border-radius: 50%;
      }
    }
  }
</style>