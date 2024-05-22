<template>
  <div class="colors">
    <ep-menu
      :menu-items="menuItems"
      menu-type="nav"
      :active-item="activeItem"
      :container-props="containerProps"
      @click="filterColorTable"
    />
    <ep-container
      id="colors__table"
      class="colors__table"
      :styles="{
        '--ep-container-width': 'fit-content',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-overflow': 'hidden',
      }"
      calculate-height
      :calculate-height-offset="30"
    >
      <ep-table
        :columns="tableColumns"
        :data="filteredData"
        :exclude="['style']"
        bordered
        sticky-header
        calculate-height
        :calculate-height-offset="30"
        padding="0 3rem 10rem 3rem"
      />
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpMenu from '@/components/menu/EpMenu.vue'
  import EpTable from '@/components/table/EpTable.vue'
  import colors from './color.json'
  import grayscale from './grayscale.json'
  import copyToClipboard from '@/mixins/copyToClipboard.js'
  import chroma from 'chroma-js'

  export default {
    name: 'EpColor',
    components: {
      EpContainer,
      EpMenu,
      EpTable
    },
    mixins: [copyToClipboard],
    props: {
      theme: {
        type: String,
        default: 'dark'
      }
    },
    data() {
      return {
        activeItem: 'All',
        filter: '',
        menuItems: [
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
        ],
        tableColumns: [
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
            command: (value) => this.copyToClipboard(value),
            style: 'text--copyable'
          },
          {
            label: 'HSL',
            key: 'hsl',
            command: (value) => this.copyToClipboard(value),
            style: 'text--copyable'
          }
        ],
        containerProps: {
          styles: {
            '--ep-container-width': '20rem',
            '--ep-container-bg-color': 'var(--interface-surface)',
            '--ep-container-height': 'fit-content',
          }
        }
      }
    },
    computed: {
      backgroundColor() {
        return this.theme === 'dark' ? '#1f1f1f' : '#ebebeb'
      },
      filteredData() {
        if (this.filter === 'all') {
          return this.tableData
        } else {
          return this.tableData.filter(item => item.color.includes(this.filter))
        }
      },
      tableData() {
        let data = []
        // get colors from tokens
        for (const hue in colors) {
          for (const level in colors[hue]) {
            data.push({
              sample: colors[hue][level].value,
              color: `${hue} ${level}`,
              contrast: this.contrast(colors[hue][level].value),
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
              contrast: this.contrast(grayscale[gray][level].value),
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
      }
    },
    watch: {
      filteredData() {
        // scroll color table to the top when filter changes
        const colorTableContainer = document.querySelector('.ep-table-container')
        colorTableContainer.scrollTop = 0
      }
    },
    methods: {
      contrast(color) {
        const background = this.backgroundColor
        const contrast = chroma.contrast(color, background)

        if (contrast < 4.5) {
          return '&#x26A0;'
        } else if (contrast >= 4.5 && contrast < 7) {
          return 'AA &check;'
        } else if (contrast >= 7) {
          return 'AAA &check;'
        }
      },
      filterColorTable(item) {
        console.log(item)
        this.activeItem = item.label

        let filter = item.label.toLowerCase()
        if (item.label === 'Chart Sequence') {
          filter = 'Chart'
        }
        if (item.label === 'Grayscale') {
          filter = 'gray'
        }

        this.filter = filter
      }
    },
  }
</script>

<style lang="scss" scoped>
  .colors {
    display: flex;
    gap: 2rem;

    &__menu {
      flex: 0 0 20rem;
      position: sticky;
      top: 3rem;
    }

    &__table {
      overflow-y: scroll;
      -ms-overflow-style: none; // Internet Explorer, Edge
      scrollbar-width: none; // Firefox

      &::-webkit-scrollbar {
        display: none; // Chrome, Safari, Opera
      }
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
