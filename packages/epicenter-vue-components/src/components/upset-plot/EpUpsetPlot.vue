<template>
  <div class="ep-upset-plot-container">
    <div class="ep-upset-plot-controls">
      <button @click="sortDir = 'asc'">
        Sort Asc
      </button>
      <button @click="sortDir = 'desc'">
        Sort Desc
      </button>
    </div>
    <!-- Top Bar Chart -->
    <div class="ep-upset-plot-chart">
      <div
        v-for="(intersection, index) in sortedIntersections"
        :key="index"
        class="ep-upset-plot-chart__column"
        :style="{ height: `${intersection.total * 10}px` }"
        :title="`Total: ${intersection.total}`"
      />
    </div>

    <!-- Adapter Labels -->
    <div class="ep-upset-plot-adapters">
      <div
        v-for="adapter in data.adapters"
        :key="adapter"
        class="ep-upset-plot-adapters__row"
      >
        {{ adapter }}
      </div>
    </div>

    <!-- Intersection Matrix -->
    <div class="ep-upset-plot-matrix-plot">
      <div
        v-for="(adapter, adapterIndex) in data.adapters"
        :key="adapterIndex"
        class="ep-upset-plot-matrix-plot__row"
      >
        <div
          v-for="(intersection, columnIndex) in sortedIntersections"
          :key="columnIndex"
          class="ep-upset-plot-matrix-plot__cell"
        >
          <div
            v-if="intersection.combination[adapterIndex] === '1'"
            class="plot-indicator"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'

  defineOptions({
    name: 'EpUpsetPlot',
  })

  // Intersection-based data structure
  const data = ref({
    adapters: [
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
    ],
    intersections: [
      { combination: "1010101010", total: 15, missing_adapters: ["carbonblack_response_adapter", "sumo_logic_adapter"] },
      { combination: "1101101101", total: 25, missing_adapters: ["qualys_scans_adapter"] },
      { combination: "0001111111", total: 10, missing_adapters: ["crowd_strike_adapter"] },
      { combination: "1111111110", total: 20, missing_adapters: ["azure_ad_adapter"] },
      { combination: "1111110000", total: 18, missing_adapters: ["tenable_io_adapter", "qualys_scans_adapter"] },
      { combination: "0110111010", total: 14, missing_adapters: ["defender_atp_adapter", "crowd_strike_adapter"] },
      { combination: "1001001001", total: 9, missing_adapters: ["sumo_logic_adapter", "carbonblack_response_adapter"] },
      { combination: "1110001111", total: 12, missing_adapters: ["carbonblack_defense_adapter"] },
      { combination: "0000000000", total: 5, missing_adapters: ["All adapters"] },
      { combination: "1111111111", total: 30, missing_adapters: [] },
      { combination: "1100000000", total: 8, missing_adapters: ["esentire_json_adapter", "azure_ad_adapter"] },
      { combination: "1010111111", total: 17, missing_adapters: ["carbonblack_response_adapter"] },
      { combination: "1001010101", total: 6, missing_adapters: ["defender_atp_adapter", "sumo_logic_adapter"] },
      { combination: "0111110001", total: 11, missing_adapters: ["carbonblack_defense_adapter", "crowd_strike_adapter"] },
    ],
  })

  const sortDir = ref('asc')

  const sortedIntersections = computed(() => {
    return [...data.value.intersections].sort((a, b) => {
      if (sortDir.value === 'asc') {
        return a.total - b.total
      } else {
        return b.total - a.total
      }
    })
  })
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

    &__column {
      flex: 1;
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
        background: var(--primary-color-base);
        border-radius: 50%;
      }
    }
  }
</style>