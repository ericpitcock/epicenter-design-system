<template>
  <div class="ep-upset-plot-container">
    <ep-header class="ep-upset-plot-header">
      <template #left>
        <h2>Endpoint coverage</h2>
      </template>
      <template #center>
        <h2>
          {{ percentageCovered }}% coverage <span
            class="text-color--subtle">(1132 / {{ totalAssets }})</span>
        </h2>
      </template>
      <template #right>
        export
      </template>
    </ep-header>
    <div class="ep-upset-plot-controls ep-flex flex-col gap-40">
      <ep-flex class="flex-col gap-10">
        Highlight:
        <ep-radio
          id="uncovered"
          v-model="highlightType"
          label="Uncovered"
          name="uncovered"
          value="uncovered"
        />
        <ep-radio
          id="covered"
          v-model="highlightType"
          label="Covered"
          name="covered"
          value="covered"
        />
      </ep-flex>
      <ep-toggle
        :is-active="hideFullyCovered"
        label="Hide fully covered"
        @toggle="hideFullyCovered = $event"
      />
    </div>
    <div class="ep-upset-plot-chart">
      <div
        v-for="(intersection, index) in sortedIntersections"
        :key="index"
        class="ep-upset-plot-chart__column-container"
        @mouseover="highlightIntersection(index)"
        @mouseleave="clearHighlights"
      >
        <div class="ep-upset-plot-chart__count font-size--xsmall">
          {{ intersection.total }}
        </div>
        <div
          class="ep-upset-plot-chart__column"
          :style="{ height: `${(intersection.total / maxTotal) * 100}%` }"
        />
      </div>
    </div>
    <div class="ep-upset-plot-adapters">
      <div
        v-for="(adapter, adapterIndex) in adapters"
        :key="adapter"
        class="ep-upset-plot-adapters__row"
        :class="{ [`highlighted--${highlightType}`]: isAdapterHighlighted(adapterIndex) }"
      >
        <div class="adapter-label">{{ adapter }}</div>
        <ep-dropdown v-bind="adapterActionsMenuProps(adapter)" />
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
          :class="{ highlighted: isCellHighlighted(adapterIndex, columnIndex) }"
        >
          <div
            class="plot-indicator"
            :class="getPlotIndicatorClass(intersection.combination, adapterIndex)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { faker } from '@faker-js/faker'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpHeader from '../header/EpHeader.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import EpRadio from '../radio/EpRadio.vue'
  import EpToggle from '../toggle/EpToggle.vue'
  import { useActionsMenu } from '../../composables'

  defineOptions({
    name: 'EpUpSetPlot',
  })

  const adapters = [
    'CrowdStrike',
    'CarbonBlack Response',
    'CarbonBlack Defense',
    'Defender ATP',
    'eSentire',
    'Sumo Logic',
    'Tenable.io',
    'Qualys Scans',
    'Rapid7 InsightVM',
    'Azure AD',
  ]

  const generateAssetTotal = () => faker.number.int({ min: 0, max: 200 })

  const intersections = [
    { combination: '1111111111', total: 1132, uncovered_adapters: [] },
    { combination: '1010101010', total: generateAssetTotal(), uncovered_adapters: ['CarbonBlack Response', 'Sumo Logic'] },
    { combination: '1101101101', total: generateAssetTotal(), uncovered_adapters: ['Qualys Scans'] },
    { combination: '0001111111', total: generateAssetTotal(), uncovered_adapters: ['CrowdStrike'] },
    { combination: '1111111110', total: generateAssetTotal(), uncovered_adapters: ['Azure AD'] },
    { combination: '1111110000', total: generateAssetTotal(), uncovered_adapters: ['Tenable.io', 'Qualys Scans'] },
    { combination: '0110111010', total: generateAssetTotal(), uncovered_adapters: ['Defender ATP', 'CrowdStrike'] },
    { combination: '1001001001', total: generateAssetTotal(), uncovered_adapters: ['Sumo Logic', 'CarbonBlack Response'] },
    { combination: '1110001111', total: generateAssetTotal(), uncovered_adapters: ['CarbonBlack Defense'] },
    { combination: '0000000000', total: generateAssetTotal(), uncovered_adapters: ['All adapters'] },
    { combination: '1100000000', total: generateAssetTotal(), uncovered_adapters: ['eSentire', 'Azure AD'] },
    { combination: '1010111111', total: generateAssetTotal(), uncovered_adapters: ['CarbonBlack Response'] },
    { combination: '1001010101', total: generateAssetTotal(), uncovered_adapters: ['Defender ATP', 'Sumo Logic'] },
    { combination: '0111110001', total: generateAssetTotal(), uncovered_adapters: ['CarbonBlack Defense', 'CrowdStrike'] },
  ]

  const totalAssets = computed(() => intersections.reduce((acc, i) => acc + i.total, 0))

  // get percentage that 1132 is of totalAssets
  const percentageCovered = computed(() => (1132 / totalAssets.value) * 100).value.toFixed()

  const maxTotal = computed(() => Math.max(...sortedIntersections.value.map((i) => i.total)))

  const hideFullyCovered = ref(false)

  const sortedIntersections = computed(() => {
    const sorted = [...intersections].sort((a, b) => b.total - a.total)
    if (!hideFullyCovered.value) return sorted
    // return all but first
    return sorted.slice(1)
  })

  const highlightedIntersection = ref(-1)

  const highlightIntersection = (index) => {
    highlightedIntersection.value = index
  }

  const clearHighlights = () => {
    highlightedIntersection.value = -1
  }

  const isAdapterHighlighted = (adapterIndex) => {
    if (highlightedIntersection.value === -1) return false
    const combination = sortedIntersections.value[highlightedIntersection.value]?.combination
    if (highlightType.value === 'covered') return combination[adapterIndex] === '1'
    return combination[adapterIndex] === '0'
  }

  const isCellHighlighted = (adapterIndex, columnIndex) => {
    if (highlightedIntersection.value === -1) return false
    return highlightedIntersection.value === columnIndex
  }

  const getPlotIndicatorClass = (combination, adapterIndex) => {
    if (highlightType.value === 'uncovered' && combination[adapterIndex] === '0') {
      return 'plot-indicator--uncovered'
    }
    if (highlightType.value === 'covered' && combination[adapterIndex] === '1') {
      return 'plot-indicator--covered'
    }
    return ''
  }

  const highlightType = ref('uncovered')

  const { generateActionMenuProps } = useActionsMenu()

  const menuItems = [
    // {
    //   section: true,
    //   label: 'Asset report',
    // },
    // {
    //   divider: true,
    // },
    (adapter) => ({
      label: 'Uncovered',
      iconRight: { name: 'chevron-right' },
      onClick: () => {
        console.log(adapter)
      },
      children: [
        {
          label: 'View assets',
          iconLeft: { name: 'f-table' },
          onClick: () => {
            console.log(adapter)
          },
        },
        {
          divider: true,
        },
        {
          label: 'Export JSON',
          iconLeft: { name: 'f-file-text' },
          onClick: () => {
            console.log(adapter)
          },
        },
        {
          label: 'Export CSV',
          iconLeft: { name: 'f-file-text' },
          onClick: () => {
            console.log(adapter)
          },
        },
      ],
    }),
    (adapter) => ({
      label: 'Covered',
      iconRight: { name: 'chevron-right' },
      onClick: () => {
        console.log(adapter)
      },
      children: [
        {
          label: 'View assets',
          iconLeft: { name: 'f-table' },
          onClick: () => {
            console.log(adapter)
          },
        },
        {
          divider: true,
        },
        {
          label: 'Export JSON',
          iconLeft: { name: 'f-file-text' },
          onClick: () => {
            console.log(adapter)
          },
        },
        {
          label: 'Export CSV',
          iconLeft: { name: 'f-file-text' },
          onClick: () => {
            console.log(adapter)
          },
        },
      ],
    }),
  ]

  const adapterActionsMenuProps = (context) =>
    generateActionMenuProps({
      context,
      menuItems,
      alignRight: false,
    })
</script>

<style lang="scss" scoped>
  .ep-upset-plot-container {
    --ep-upset-plot-row-stripe-color: hsl(0deg 0.84% 14.37%);
    --ep-upset-plot-error-bg-color: hsl(342deg 45.82% 54.76%);
    --ep-upset-plot-covered-bg-color: rgb(85, 170, 125);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr;
    background: var(--interface-surface);
    padding: 0 3rem 3rem 3rem;
    border: 1px solid var(--border-color);
    user-select: none;
  }

  .ep-upset-plot-header {
    grid-column: 1/3;
    grid-row: 1;
    // background: red;
    // --ep-header-height: 3.5rem;
  }

  .ep-upset-plot-chart {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    height: 20rem;
    padding: 3rem 0 0 1rem;
    border-bottom: 1px solid var(--border-color);

    &__column-container {
      flex: 1;
      max-width: 4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    &__column {
      width: 100%;
      background: linear-gradient(0, var(--primary-color-down-15-base) 30%, var(--primary-color-base) 80%);
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }
  }

  .ep-upset-plot-adapters {
    grid-column: 1;
    grid-row: 3;
    display: flex;
    flex-direction: column;

    &__row {
      height: 3.1rem;
      display: flex;
      justify-content: flex-end;
      text-align: right;
      align-items: center;
      gap: 0.5rem;
      padding-inline: 1rem;
      border-bottom: 1px solid var(--border-color);

      &:nth-child(even) {
        background: var(--ep-upset-plot-row-stripe-color);
      }

      &.highlighted--uncovered .adapter-label {
        color: var(--ep-upset-plot-error-bg-color);
      }

      &.highlighted--covered .adapter-label {
        color: var(--ep-upset-plot-covered-bg-color)
      }
    }
  }

  .ep-upset-plot-matrix-plot {
    grid-column: 2;
    grid-row: 3;
    display: flex;
    flex-direction: column;

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
      max-width: 4rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .plot-indicator {
        width: 0.8rem;
        height: 0.8rem;
        background: var(--interface-overlay);
        border-radius: 50%;

        &--uncovered {
          background: var(--ep-upset-plot-error-bg-color);
        }

        &--covered {
          background: var(--ep-upset-plot-covered-bg-color);
        }
      }
    }
  }

  .ep-upset-plot-matrix-plot__cell.highlighted {
    // background: var(--interface-overlay);
    background: hsl(0, 0%, 18%);
  }

  .plot-indicator--included.highlighted {
    background: green;
  }

  .ep-upset-plot-controls {
    grid-column: 1;
    grid-row: 2;
    padding-top: 3rem;
    // display: flex;
    // flex-direction: column;
    // gap: 1rem;
  }
</style>
