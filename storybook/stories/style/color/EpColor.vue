<template>
  <div class="colors">
    <div class="colors__sidebar">
      <ep-menu
        class="colors__menu"
        :menu-items="menuItems"
        menu-type="nav"
        :active-item="activeItem"
        @click="filterColorTable"
      />
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
            <ep-flex class="align-center gap-3">
              <ep-icon :name="contrastIcon(row.contrast)" />
              {{ row.contrast }}
            </ep-flex>
          </template>
          <template #cell-css="{ row }">
            <ep-tooltip>
              <template #tooltip>
                <span v-if="!copied">Copy</span>
                <span v-else>Copied!</span>
              </template>
              <span
                class="clickable"
                @click="copy(`var(${row.css})`)"
              >
                {{ `var(${row.css})` }}
              </span>
            </ep-tooltip>
          </template>
          <template #cell-hsl="{ row }">
            <span
              class="text--copyable"
              @click="copy(row.hsl)"
            >{{ row.hsl }}</span>
          </template>
        </ep-table>
      </ep-container>
    </div>
  </div>
</template>

<script setup>
  import { faker } from '@faker-js/faker'
  import { useClipboard } from '@vueuse/core'
  import chroma from 'chroma-js'
  import { computed, ref, watch } from 'vue'

  import EpContainer from '@/components/container/EpContainer.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpIcon from '@/components/icon/EpIcon.vue'
  import EpMenu from '@/components/menu/EpMenu.vue'
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
    { divider: true },
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
      class: 'text--copyable'
    },
    {
      label: 'HSL',
      key: 'hsl',
      class: 'text--copyable'
    }
  ]

  const backgroundColor = computed(() => {
    return props.theme === 'dark' ? '#1f1f1f' : '#ebebeb'
  })

  const tableData = computed(() => {
    let data = []

    for (const [name, hsl] of Object.entries(colors)) {
      data.push({
        sample: `hsl(${hsl})`,
        color: `${name.replace(/-/g, ' ')}`,
        contrast: contrast(`hsl(${hsl})`),
        css: `--${name}`,
        hsl: `hsl(${hsl})`
      })
    }
    // get grayscale colors from tokens
    for (const [name, hsl] of Object.entries(grayscale)) {
      data.push({
        sample: `hsl(${hsl})`,
        color: `${name.replace(/-/g, ' ')}`,
        contrast: contrast(`hsl(${hsl})`),
        css: `--${name}`,
        hsl: `hsl(${hsl})`
      })
    }
    for (const [name, value] of Object.entries(chartSeq)) {
      // if props.theme is light, use the light value if it exists
      // otherwise use the dark value
      const themeBasedValue = value[props.theme] ? value[props.theme] : value.dark
      data.push({
        sample: `hsl(${themeBasedValue})`,
        color: `${name.replace(/-/g, ' ')}`,
        contrast: contrast(`hsl(${themeBasedValue})`),
        css: `--${name}`,
        hsl: `hsl(${themeBasedValue})`
      })
    }
    return data
  })

  const activeItem = ref('All')
  const filter = ref('')

  const filteredData = computed(() => {
    if (filter.value === 'all') {
      return tableData.value
    } else {
      return tableData.value.filter(item => item.color.includes(filter.value))
    }
  })

  const source = ref('')
  const { copy, copied } = useClipboard({ source })

  watch(() => filteredData, () => {
    const colorTableContainer = document.querySelector('.ep-table-container')
    colorTableContainer.scrollTop = 0
  })

  const epContainerComponent = ref(null)

  const filterColorTable = (item) => {
    activeItem.value = item.label
    let filterr = item.label.toLowerCase()

    if (item.label === 'Grayscale') {
      filterr = 'gray'
    }

    filter.value = filterr

    // Reset scroll to top when filtering
    if (epContainerComponent.value?.epContainer) {
      epContainerComponent.value.epContainer.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  const contrast = (color) => {
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

  const contrastIcon = (value) => {
    return value === '' ? 'f-alert-triangle' : 'f-check'
  }
</script>

<style>
  html {
    overflow: hidden;
  }
</style>

<style lang="scss" scoped>
  .colors {
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
</style>

<style>
  .color-sample {
    width: 5rem;
    height: 5rem;
    border-radius: var(--border-radius);
  }
</style>
