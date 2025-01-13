<template>
  <div class="ep-upset-plot-container">
    <div class="ep-upset-plot-chart">
      <div
        v-for="(intersection, index) in sortedIntersections"
        :key="index"
        class="ep-upset-plot-chart__column-container"
        @mouseover="highlightAdapters(index)"
        @mouseleave="highlightAdapters(-1)"
      >
        <div class="ep-upset-plot-chart__count">
          {{ intersection.total }}
        </div>
        <div
          class="ep-upset-plot-chart__column"
          :style="{ height: `${(intersection.total / maxTotal) * 100}%` }"
          :title="`Total: ${intersection.total}`"
        />
      </div>
    </div>
    <div class="ep-upset-plot-adapters">
      <div
        v-for="(adapter, adapterIndex) in adapters"
        :key="adapter"
        class="ep-upset-plot-adapters__row"
        :data-index="adapterIndex"
      >
        {{ adapter }}
      </div>
    </div>
    <div class="ep-upset-plot-matrix-plot">
      <div
        v-for="(adapter, adapterIndex) in adapters"
        :key="adapterIndex"
        class="ep-upset-plot-matrix-plot__row"
      >
        <div
          v-for="(intersection, columnIndex) in sortedIntersections"
          :key="columnIndex"
          class="ep-upset-plot-matrix-plot__cell"
        >
          <div
            :class="['plot-indicator', { 'plot-indicator--included': intersection.combination[adapterIndex] === '1' }]"
            :data-index="columnIndex"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpUpsetPlot',
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

  const intersections = [
    { combination: '1010101010', total: 15, missing_adapters: ['CarbonBlack Response', 'Sumo Logic'] },
    { combination: '1101101101', total: 25, missing_adapters: ['Qualys Scans'] },
    { combination: '0001111111', total: 10, missing_adapters: ['CrowdStrike'] },
    { combination: '1111111110', total: 20, missing_adapters: ['Azure AD'] },
    { combination: '1111110000', total: 18, missing_adapters: ['Tenable.io', 'Qualys Scans'] },
    { combination: '0110111010', total: 14, missing_adapters: ['Defender ATP', 'CrowdStrike'] },
    { combination: '1001001001', total: 9, missing_adapters: ['Sumo Logic', 'CarbonBlack Response'] },
    { combination: '1110001111', total: 12, missing_adapters: ['CarbonBlack Defense'] },
    { combination: '0000000000', total: 5, missing_adapters: ['All adapters'] },
    { combination: '1111111111', total: 30, missing_adapters: [] },
    { combination: '1100000000', total: 8, missing_adapters: ['eSentire JSON', 'Azure AD'] },
    { combination: '1010111111', total: 17, missing_adapters: ['CarbonBlack Response'] },
    { combination: '1001010101', total: 6, missing_adapters: ['Defender ATP', 'Sumo Logic'] },
    { combination: '0111110001', total: 11, missing_adapters: ['CarbonBlack Defense', 'CrowdStrike'] },
  ]

  const maxTotal = computed(() => {
    return Math.max(...intersections.map((intersection) => intersection.total))
  })

  const sortedIntersections = computed(() => {
    return [...intersections].sort((a, b) => {
      return b.total - a.total
    })
  })

  const highlightAdapters = (index) => {
    if (index === -1) {
      // remove all highlighted classes
      const elements = document.querySelectorAll('.highlighted')
      elements.forEach((element) => {
        element.classList.remove('highlighted')
      })
      return
    }
    // find elemenst with data-index equal to index and add a class to it
    const elements = document.querySelectorAll(`[data-index="${index}"]`)
    elements.forEach((element) => {
      element.classList.add('highlighted')
    })
  }
</script>

<style lang="scss" scoped>
  .ep-upset-plot-container {
    --ep-upset-plot-row-stripe-color: hsl(0deg 0.84% 14.37%);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    background: var(--interface-surface);
    padding: 30px;
    border: 1px solid var(--border-color);
    user-select: none;
  }

  .ep-upset-plot-chart {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    height: 20rem;
    padding-left: 1rem;
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);

    &__column-container {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    &__column {
      // flex: 1;
      width: 100%;
      background: var(--primary-color-base);
    }
  }

  .ep-upset-plot-adapters {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;

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

      &.highlighted {
        color: green;
      }
    }
  }

  .ep-upset-plot-matrix-plot {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
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
      flex: 1;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .plot-indicator {
        width: 0.8rem;
        height: 0.8rem;
        background: var(--interface-overlay);
        border-radius: 50%;

        &--included {
          background: var(--primary-color-base);

          &.highlighted {
            background: green;
          }
        }
      }
    }
  }
</style>