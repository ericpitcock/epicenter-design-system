<template>
  <div class="colors">
    <ep-menu
      :menu-items="menuItems"
      menuType="nav"
      :activeItem="activeItem"
      :containerProps="containerProps"
      @item-click="item => (activeItem = item.label)"
    />
    <ep-container
      id="colors__table"
      class="colors__table"
      width="fit-content"
      padding="0 2rem"
      style="overscroll-behavior: contain"
      calculate-height
      :calculate-height-offset="30"
      overflow="hidden"
    >
      <ep-table
        :columns="tableColumns"
        :data="filteredData"
        :exclude="['style']"
        bordered
        sticky-header
        calculate-height
        :calculate-height-offset="30"
        padding="0 0 10rem 0"
      />
    </ep-container>
  </div>
</template>

<script>
  import EpBadge from '@/components/badge/EpBadge'
  import EpContainer from '@/components/container/EpContainer'
  import EpMenu from '@/components/menu/EpMenu'
  import EpTable from '@/components/table/EpTable'
  import colors from '../../../../packages/epicenter-styles/tokens/color/color'
  import grayscale from '../../../../packages/epicenter-styles/tokens/color/grayscale'
  import copyToClipboard from '@/mixins/copyToClipboard'
  import { mapState } from 'vuex'

  export default {
    name: 'EpColor',
    mixins: [copyToClipboard],
    data() {
      return {
        activeItem: 'All',
        filter: '',
        menuItems: [
          {
            section: true,
            label: 'Specific Use'
          },
          {
            label: 'Alert (Coming Soon)',
          },
          {
            label: 'Chart Sequence',
            command: () => (this.filter = 'Chart')
          },
          {
            label: 'Chart Sequence Expanded (Coming Soon)',
          },
          {
            divider: true
          },
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
              return `<div
                                      class="color-sample"
                                      style="width: 50px;
                                      height: 50px;
                                      background-color: ${value};
                                      border-radius: var(--border-radius);"
                                    />`
            }
          },
          {
            header: 'Color',
            key: 'color',
            style: 'capitalize',
            formatter: (value, key, row) => {
              return `<span style="color: ${row.hex};">${value}</span>`
            }
          },
          {
            header: 'Text Contrast',
            key: 'contrast',
            formatter: value => {
              return value === 'AAA &check;' || value === 'AA &check;'
                ? `<span class="ep-badge" style="color: var(--green-500);">${value}</span>`
                : `<span class="ep-badge" style="color: var(--red-500);">${value}</span>`
            }
          },
          {
            header: 'CSS Custom Property',
            key: 'css',
            command: (value, key) => this.copyToClipboard(value),
            style: 'text--copyable'
          },
          {
            header: 'Hex',
            key: 'hex',
            command: (value, key) => this.copyToClipboard(value),
            style: 'text--copyable'
          }
        ],
        containerProps: {
          width: 'fit-content',
          height: 'fit-content',
          containerPadding: '1rem 0'
        }
      }
    },
    components: {
      EpBadge,
      EpContainer,
      EpMenu,
      EpTable
    },
    methods: {
      contrast(color) {
        // const background = window.getComputedStyle(document.querySelector('html')).getPropertyValue('--background-1')
        const background = this.backgroundColor
        var rgb = function (color) {
          if (color.indexOf('rgb') === 0) {
            var arr = color.match(/\d+/g)
            return {
              r: arr[0],
              g: arr[1],
              b: arr[2]
            }
          } else if (color.indexOf('#') === 0) {
            var hex = color.length === 4 ? color.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])/i, '#$1$1$2$2$3$3') : color
            return {
              r: parseInt(hex.substr(1, 2), 16),
              g: parseInt(hex.substr(3, 2), 16),
              b: parseInt(hex.substr(5, 2), 16)
            }
          } else {
            return {
              r: 0,
              g: 0,
              b: 0
            }
          }
        }
        var luminance = function (color) {
          var c = rgb(color)
          var r = c.r / 255
          var g = c.g / 255
          var b = c.b / 255
          var R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
          var G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
          var B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
          return 0.2126 * R + 0.7152 * G + 0.0722 * B
        }
        var contrast = function (color, background) {
          var l1 = luminance(color)
          var l2 = luminance(background)
          return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05)
        }
        var c = contrast(color, background)
        if (c < 4.5) {
          return '&#x26A0;'
        }
        // if c is greater than or equal to 4.5 but less than 7, return 'AA'
        else if (c >= 4.5 && c < 7) {
          return 'AA &check;'
        } else if (c >= 7) {
          return 'AAA &check;'
        }
        // return false;
      }
    },
    computed: {
      ...mapState(['theme']),
      backgroundColor() {
        // return window.getComputedStyle(document.querySelector('html')).getPropertyValue('--background-2')
        return this.theme === 'dark' ? '#242424' : '#fff'
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
              hex: colors[hue][level].value
              // style: { color: colors[hue][level].value },
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
              hex: grayscale[gray][level].value
              // style: { color: grayscale[gray][level].value },
            })
          }
        }
        // get chart sequence colors from css variables
        const htmlStyles = window.getComputedStyle(document.querySelector('html'))
        for (let index = 0; index < 14; index++) {
          const cssVar = index < 10 ? `--chart-sequence-0${index}` : `--chart-sequence-${index}`
          const hexValue = htmlStyles.getPropertyValue(cssVar)
          data.push({
            sample: hexValue,
            color: `Chart Sequence ${index}`,
            contrast: this.contrast(hexValue),
            css: cssVar,
            hex: hexValue
            // style: { color: hexValue },
          })
        }
        return data
      }
      // chartSequence() {
      //   let data = []
      //   const htmlStyles = window.getComputedStyle(document.querySelector('html'))
      //   for (let index = 0; index < 14; index++) {
      //     const cssVar = `--chart-sequence-${index}`
      //     const hexValue = htmlStyles.getPropertyValue('--chart-sequence-' + index)
      //     data.push({
      //       sample: hexValue,
      //       color: `Chart Sequence ${index}`,
      //       css: cssVar,
      //       hex: hexValue
      //     })
      //   }
      //   return data
      // }
    },
    watch: {
      // watch theme from mapState
      // $theme() {
      //   this.tableData()
      //   console.log('theme changed')
      // },

      // theme() {
      //   this.tableData()
      //   console.log('theme changed')
      // },
      filteredData() {
        // scroll color table to the top when filter changes
        const colorTableContainer = document.querySelector('.ep-table-container')
        colorTableContainer.scrollTop = 0
      }
    }
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
