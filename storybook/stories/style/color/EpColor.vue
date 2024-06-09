<template>
  <div class="colors">
    <div class="colors__sidebar">
      <ep-menu
        :menu-items="menuItems"
        menu-type="nav"
        :active-item="activeItem"
        :container-props="containerProps"
        @click="filterColorTable"
      />
    </div>
    <div class="colors__content">
      <ep-container :styles="{
        '--ep-container-width': 'fit-content',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-overflow': 'unset',
      }">
        <ep-table
          :columns="tableColumns"
          :data="filteredData"
          v-bind="tableProps"
        />
      </ep-container>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, watch } from 'vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpMenu from '@/components/menu/EpMenu.vue'
  import EpTable from '@/components/table/EpTable.vue'
  import colors from './color.json'
  import grayscale from './grayscale.json'
  // import copyToClipboard from '@/mixins/copyToClipboard.js'
  import chroma from 'chroma-js'

  defineOptions({
    name: 'EpColor',
  })

  const props = defineProps({
    theme: {
      type: String,
      default: 'dark'
    }
  })
  const activeItem = ref('All')
  const filter = ref('')

  const tableProps = {
    bordered: true,
    stickyHeader: true,
    // calculateHeight: true,
    // calculateHeightOffset: 30,
    styles: {
      '--ep-table-width': '100%',
      '--ep-table-container-padding': '1rem 3rem 20rem 3rem',
      '--ep-table-sticky-top': '0',
      '--ep-table-container-overflow': 'unset',
    },
  }

  // bordered
  //       sticky-header
  //       calculate-height
  //       :calculate-height-offset="30"

  const menuItems = [
    { label: 'Chart Sequence', },
    { divider: true },
    { label: 'All' },
    { label: 'Grayscale' },
    { label: 'Red' },
    { label: 'Orange' },
    { label: 'Amber' },
    { label: 'Yellow' },
    { label: 'Lime' },
    { label: 'Green' },
    { label: 'Emerald' },
    { label: 'Teal' },
    { label: 'Cyan' },
    { label: 'Sky' },
    { label: 'Blue' },
    { label: 'Indigo' },
    { label: 'Violet' },
    { label: 'Purple' },
    { label: 'Fuchsia' },
    { label: 'Pink', },
    { label: 'Rose' }
  ]

  const tableColumns = [
    {
      label: 'Sample',
      key: 'sample',
      formatter: value => {
        return `<div class="color-sample" style="background-color: ${value};" />`
      }
    },
    {
      label: 'Color',
      key: 'color',
      style: 'capitalize',
      formatter: value => {
        return `<span style="color: ${value};">${value}</span>`
      }
    },
    {
      label: 'Text Contrast',
      key: 'contrast',
      formatter: value => {
        return value === 'AAA &check;' || value === 'AA &check;'
          ? `<span class="ep-badge" style="color: var(--success-green--border);">${value}</span>`
          : `<span class="ep-badge" style="color: var(--danger-red--border);">${value}</span>`
      }
    },
    {
      label: 'CSS Custom Property',
      key: 'css',
      // command: (value) => this.copyToClipboard(value),
      style: 'text--copyable'
    },
    {
      label: 'HSL',
      key: 'hsl',
      // command: (value) => this.copyToClipboard(value),
      style: 'text--copyable'
    }
  ]

  const containerProps = {
    styles: {
      '--ep-container-width': '20rem',
      '--ep-container-bg-color': 'var(--interface-surface)',
      '--ep-container-height': 'fit-content',
      '--ep-container-overflow': 'unset',
    }
  }

  const backgroundColor = computed(() => {
    return props.theme === 'dark' ? '#1f1f1f' : '#ebebeb'
  })

  const filteredData = computed(() => {
    if (filter.value === 'all') {
      return tableData.value
    } else {
      return tableData.value.filter(item => item.color.includes(filter.value))
    }
  })

  const tableData = computed(() => {
    let data = []
    // get colors from tokens
    for (const hue in colors) {
      for (const level in colors[hue]) {
        data.push({
          sample: colors[hue][level].value,
          color: `${hue} ${level}`,
          contrast: contrast(colors[hue][level].value),
          css: `--${hue}-${level}`,
          hsl: chroma(colors[hue][level].value).css('hsl')
        })
      }
    }
    // get grayscale colors from tokens
    for (const gray in grayscale) {
      for (const level in grayscale[gray]) {
        data.push({
          sample: grayscale[gray][level].value,
          color: `${gray} ${level}`,
          contrast: contrast(grayscale[gray][level].value),
          css: `--${gray}-${level}`,
          hsl: chroma(grayscale[gray][level].value).css('hsl')
        })
      }
    }
    // get chart sequence colors from css variables
    const htmlStyles = window.getComputedStyle(document.querySelector('html'))
    for (let index = 0; index < 14; index++) {
      const cssVar = index < 10 ? `--chart-sequence-0${index}` : `--chart-sequence-${index}`
      let hexValue = htmlStyles.getPropertyValue(cssVar)

      data.push({
        sample: hexValue,
        color: `Chart Sequence ${index}`,
        contrast: 'n/a',
        css: cssVar,
        hsl: chroma(hexValue).css('hsl')
      })
    }
    return data
  })

  watch(() => filteredData, () => {
    const colorTableContainer = document.querySelector('.ep-table-container')
    colorTableContainer.scrollTop = 0
  })

  const contrast = (color) => {
    const background = backgroundColor.value
    const contrast = chroma.contrast(color, background)

    if (contrast < 4.5) {
      return '&#x26A0;'
    } else if (contrast >= 4.5 && contrast < 7) {
      return 'AA &check;'
    } else if (contrast >= 7) {
      return 'AAA &check;'
    }
  }

  const filterColorTable = (item) => {
    console.log(item)
    activeItem.value = item.label

    let filterr = item.label.toLowerCase()
    if (item.label === 'Chart Sequence') {
      filterr = 'Chart'
    }
    if (item.label === 'Grayscale') {
      filterr = 'gray'
    }

    filter.value = filterr
  }
</script>

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

    &__content {
      flex: 1;
      // overflow-y: scroll;
      // -ms-overflow-style: none; // Internet Explorer, Edge
      // scrollbar-width: none; // Firefox
      // &::-webkit-scrollbar {
      //   display: none; // Chrome, Safari, Opera
      // }
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
