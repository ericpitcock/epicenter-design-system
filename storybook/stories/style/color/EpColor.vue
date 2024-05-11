<template>
  <div class="colors">
    <ep-menu
      :menu-items="menuItems"
      menu-type="nav"
      :active-item="activeItem"
      :container-props="containerProps"
      @click="item => (activeItem = item.label)"
    />
    <ep-container
      id="colors__table"
      class="colors__table"
      width="fit-content"
      style="overscroll-behavior: contain"
      calculate-height
      :calculate-height-offset="30"
      overflow="hidden"
      background-color="var(--interface-surface)"
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
          // {
          //   section: true,
          //   label: 'Specific Use'
          // },
          // { label: 'Alert (Coming Soon)', },
          {
            label: 'Chart Sequence',
            command: () => (this.filter = 'Chart')
          },
          // { label: 'Chart Sequence Expanded (Coming Soon)', },
          { divider: true },
          {
            label: 'All',
            command: () => (this.filter = '')
          },
          {
            label: 'Grayscale',
            command: () => (this.filter = 'gray')
          },
          {
            label: 'Red',
            command: () => (this.filter = 'red')
          },
          {
            label: 'Orange',
            command: () => (this.filter = 'orange')
          },
          {
            label: 'Amber',
            command: () => (this.filter = 'amber')
          },
          {
            label: 'Yellow',
            command: () => (this.filter = 'yellow')
          },
          {
            label: 'Lime',
            command: () => (this.filter = 'lime')
          },
          {
            label: 'Green',
            command: () => (this.filter = 'green')
          },
          {
            label: 'Emerald',
            command: () => (this.filter = 'emerald')
          },
          {
            label: 'Teal',
            command: () => (this.filter = 'teal')
          },
          {
            label: 'Cyan',
            command: () => (this.filter = 'cyan')
          },
          {
            label: 'Sky',
            command: () => (this.filter = 'sky')
          },
          {
            label: 'Blue',
            command: () => (this.filter = 'blue')
          },
          {
            label: 'Indigo',
            command: () => (this.filter = 'indigo')
          },
          {
            label: 'Violet',
            command: () => (this.filter = 'violet')
          },
          {
            label: 'Purple',
            command: () => (this.filter = 'purple')
          },
          {
            label: 'Fuchsia',
            command: () => (this.filter = 'fuchsia')
          },
          {
            label: 'Pink',
            command: () => (this.filter = 'pink')
          },
          {
            label: 'Rose',
            command: () => (this.filter = 'rose')
          }
        ],
        tableColumns: [
          {
            header: 'Sample',
            key: 'sample',
            formatter: value => {
              return `<div class="color-sample" style="background-color: ${value};" />`
            }
          },
          {
            header: 'Color',
            key: 'color',
            style: 'capitalize',
            formatter: (value, key, row) => {
              return `<span style="color: ${row.hsl};">${value}</span>`
            }
          },
          {
            header: 'Text Contrast',
            key: 'contrast',
            formatter: value => {
              return value === 'AAA &check;' || value === 'AA &check;'
                ? `<span class="ep-badge" style="color: var(--success-green--border);">${value}</span>`
                : `<span class="ep-badge" style="color: var(--danger-red--border);">${value}</span>`
            }
          },
          {
            header: 'CSS Custom Property',
            key: 'css',
            command: (value) => this.copyToClipboard(value),
            style: 'text--copyable'
          },
          {
            header: 'HSL',
            key: 'hsl',
            command: (value) => this.copyToClipboard(value),
            style: 'text--copyable'
          }
        ],
        containerProps: {
          width: '20rem',
          height: 'fit-content',
          backgroundColor: 'var(--interface-surface)',
        }
      }
    },
    computed: {
      backgroundColor() {
        return this.theme === 'dark' ? '#1f1f1f' : '#ebebeb'
      },
      filteredData() {
        if (this.filter === '') {
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
        for (let index = 0; index < 17; index++) {
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
