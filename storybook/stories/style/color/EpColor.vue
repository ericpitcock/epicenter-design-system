<template>
  <div class="colors">
    <div class="colors__sidebar">
      <ep-menu
        class="colors__menu"
        menu-type="nav"
      >
        <ep-menu-item
          v-for="item in menuItems"
          :key="item.id"
          :type="item.type || 'item'"
        >
          <ep-button
            v-if="!item.type || item.type === 'item'"
            :class="['ep-button--menu-item', { 'ep-button--menu-item--selected': item.label === activeItem }]"
            @click="filterColorTable(item)"
          >
            {{ item.label }}
          </ep-button>
        </ep-menu-item>
      </ep-menu>
    </div>
    <div class="colors__content">
      <ep-container ref="epContainerComponent">
        <ep-table
          class="colors__table"
          :columns="tableColumns"
          :data="filteredData"
          v-bind="tableProps"
        >
          <template #thead="{ visibleColumns }">
            <ep-table-head :columns="visibleColumns" />
          </template>
          <template #cell-sample="{ row }">
            <div
              class="color-sample"
              :style="{ backgroundColor: row.sample }"
            />
          </template>
          <template #cell-color="{ row }">
            <span
              class="text--capitalize"
              :style="{ color: row.hsl }"
            >{{ row.color }}</span>
          </template>
          <template #cell-contrast="{ row }">
            <ep-flex class="align-center justify-center gap-3">
              <Tick02
                v-if="row.contrast === 'AA' || row.contrast === 'AAA'"
                style="stroke: var(--icon-color--success)"
              />
              <Alert02
                v-else-if="row.contrast === ''"
                style="stroke: var(--icon-color--error)"
              />
              <span>{{ row.contrast }}</span>
            </ep-flex>
          </template>
          <template #cell-css="{ row }">
            <ep-tooltip>
              <template #tooltip>
                <span v-if="copiedCell !== `css-${row.css}`">Copy</span>
                <span v-else>Copied!</span>
              </template>
              <span
                class="clickable"
                @click="copyToClipboard(`var(${row.css})`, `css-${row.css}`)"
              >
                {{ `var(${row.css})` }}
              </span>
            </ep-tooltip>
          </template>
          <template #cell-hsl="{ row }">
            <ep-tooltip>
              <template #tooltip>
                <span v-if="copiedCell !== `hsl-${row.css}`">Copy</span>
                <span v-else>Copied!</span>
              </template>
              <span
                class="clickable"
                @click="copyToClipboard(row.hsl, `hsl-${row.css}`)"
              >{{
                row.hsl }}</span>
            </ep-tooltip>
          </template>
        </ep-table>
      </ep-container>
    </div>
  </div>
</template>

<script setup>
  import Alert02 from '@ericpitcock/epicenter-icons/icons/Alert02'
  import Tick02 from '@ericpitcock/epicenter-icons/icons/Tick02'
  import { faker } from '@faker-js/faker'
  import { useClipboard } from '@vueuse/core'
  import chroma from 'chroma-js'
  import { computed, ref } from 'vue'

  import EpButton from '@/components/button/EpButton.vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpMenu from '@/components/menu/EpMenu.vue'
  import EpMenuItem from '@/components/menu/EpMenuItem.vue'
  import EpTable from '@/components/table/EpTable.vue'
  import EpTableHead from '@/components/table/EpTableHead.vue'
  import EpTooltip from '@/components/tooltip/EpTooltip.vue'

  import chartSeq from '../../../../packages/epicenter-styles/tokens/color/chart-sequence.yaml'
  import colors from '../../../../packages/epicenter-styles/tokens/color/color.yaml'
  import grayscale from '../../../../packages/epicenter-styles/tokens/color/grayscale.yaml'

  defineOptions({
    name: 'EpColor',
  })

  const props = defineProps({
    theme: {
      type: String,
      default: 'dark'
    }
  })

  const tableProps = {
    bordered: true,
    stickyHeader: true,
  }

  const menuItems = [
    { id: faker.string.uuid(), label: 'Chart Sequence', },
    { type: 'divider' },
    { id: faker.string.uuid(), label: 'All' },
    { id: faker.string.uuid(), label: 'Grayscale' },
    { id: faker.string.uuid(), label: 'Red' },
    { id: faker.string.uuid(), label: 'Orange' },
    { id: faker.string.uuid(), label: 'Amber' },
    { id: faker.string.uuid(), label: 'Yellow' },
    { id: faker.string.uuid(), label: 'Lime' },
    { id: faker.string.uuid(), label: 'Green' },
    { id: faker.string.uuid(), label: 'Emerald' },
    { id: faker.string.uuid(), label: 'Teal' },
    { id: faker.string.uuid(), label: 'Cyan' },
    { id: faker.string.uuid(), label: 'Sky' },
    { id: faker.string.uuid(), label: 'Blue' },
    { id: faker.string.uuid(), label: 'Indigo' },
    { id: faker.string.uuid(), label: 'Violet' },
    { id: faker.string.uuid(), label: 'Purple' },
    { id: faker.string.uuid(), label: 'Fuchsia' },
    { id: faker.string.uuid(), label: 'Pink', },
    { id: faker.string.uuid(), label: 'Rose' }
  ]

  const tableColumns = [
    {
      label: 'Sample',
      key: 'sample',
    },
    {
      label: 'Color',
      key: 'color',
    },
    {
      label: 'Text Contrast',
      key: 'contrast',
    },
    {
      label: 'CSS Custom Property',
      key: 'css',
    },
    {
      label: 'HSL',
      key: 'hsl',
    }
  ]

  const THEME_COLORS = {
    dark: '#1f1f1f',
    light: '#ebebeb'
  }

  const backgroundColor = computed(() => {
    return THEME_COLORS[props.theme] || THEME_COLORS.dark
  })

  // Helper to extract color family from name (e.g., "red-500" → "red")
  const getColorFamily = (name) => {
    const match = name.match(/^([a-z]+)-/)
    return match ? match[1] : ''
  }

  const tableData = computed(() => {

    const createColorEntry = (name, hsl, source = '') => {
      const colorValue = `hsl(${hsl})`
      return {
        sample: colorValue,
        color: name.replace(/-/g, ' '),
        contrast: checkContrast(colorValue),
        css: `--${name}`,
        hsl: colorValue,
        source
      }
    }

    return [
      // Base
      ...Object.entries(colors).map(([name, hsl]) =>
        createColorEntry(name, hsl, getColorFamily(name))
      ),

      // Grayscale
      ...Object.entries(grayscale).map(([name, hsl]) =>
        createColorEntry(name, hsl, 'grayscale')
      ),

      // Chart sequence
      ...Object.entries(chartSeq).map(([name, value]) => {
        const themeBasedValue = value[props.theme] || value.dark
        return createColorEntry(name, themeBasedValue, 'chartsequence')
      })
    ]
  })

  const activeItem = ref('All')
  const filter = ref('')

  const filteredData = computed(() => {
    if (!filter.value || filter.value === 'all') {
      return tableData.value
    }
    return tableData.value.filter(item => item.color.includes(filter.value))
  })

  const source = ref('')
  const { copy } = useClipboard({ source })
  const copiedCell = ref(null)

  const copyToClipboard = async (text, cellId) => {
    await copy(text)
    copiedCell.value = cellId
    setTimeout(() => {
      copiedCell.value = null
    }, 2000)
  }

  const epContainerComponent = ref(null)

  const filterColorTable = (item) => {
    activeItem.value = item.label
    let filterValue = item.label.toLowerCase()

    if (item.label === 'Grayscale') {
      filterValue = 'gray'
    }

    filter.value = filterValue

    // Reset scroll to top when filtering
    if (epContainerComponent.value?.epContainer) {
      epContainerComponent.value.epContainer.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  const checkContrast = (color) => {
    const background = backgroundColor.value
    const contrast = chroma.contrast(color, background)

    if (contrast < 4.5) {
      return ''
    } else if (contrast >= 4.5 && contrast < 7) {
      return 'AA'
    } else if (contrast >= 7) {
      return 'AAA'
    }
  }
</script>

<style lang="scss" scoped>
  .colors {
    --icon-color--success: hsl(var(--emerald-400));
    --icon-color--error: hsl(var(--rose-400));
    display: flex;
    justify-content: stretch;
    gap: 3rem;

    &__sidebar {
      flex: 0 0 20rem;
      position: sticky;
      align-self: flex-start;
      top: 3rem;
    }

    &__menu {
      --ep-menu-bg-color: var(--interface-surface);
      --ep-menu-border-radius: var(--border-radius--large);
      height: calc(100vh - 60px);
      overflow: auto;
    }

    &__content {
      flex: 1;

      .ep-container {
        --ep-container-height: calc(100vh - 60px);
        --ep-container-width: fit-content;
        --ep-container-bg-color: var(--interface-surface);
        --ep-container-border-width: 0.1rem;
        --ep-container-overflow: auto;
      }
    }

    &__table {
      --ep-table-width: 100%;
      --ep-table-container-padding: 0 3rem 20rem 3rem;
      --ep-table-sticky-top: 0;
      --ep-table-container-overflow: unset;
    }
  }

  .ep-menu__item {
    --ep-button-menu-item-hover-bg-color: var(--interface-surface--accent);
    --ep-button-menu-item-hover-border-color: var(--ep-button-menu-item-hover-bg-color);
  }

  .color-sample {
    width: 5rem;
    height: 5rem;
    border-radius: var(--border-radius);
  }

  html[data-color-theme='light'] .colors,
  .light-theme .colors {
    --icon-color--success: hsl(var(--emerald-600));
    --icon-color--error: hsl(var(--rose-600));
  }
</style>
