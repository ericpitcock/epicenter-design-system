<template>
  <div class="colors">
    <ep-container
      class="colors__menu"
      width="fit-content"
      height="fit-content"
      padding="1rem 0"
    >
      <ep-menu :menuItems="menuItems" :activeItem="filter" />
    </ep-container>
    <ep-container
      id="colors__table"
      class="colors__table"
      width="542px"
      padding="0 2rem 2rem"
      calculateHeight
    >
      <ep-table
        :columns="tableColumns"
        :data="filteredData"
        bordered
        stickyHeader
      />
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer'
  import EpMenu from '@/components/menu/EpMenu'
  import EpTable from '@/components/table/EpTable'
  import colors from '@/style/tokens/color/color'
  import grayscale from '@/style/tokens/color/grayscale'
  import copyToClipboard from '@/mixins/copyToClipboard'

  export default {
    name: 'EpColor',
    mixins: [copyToClipboard],
    data() {
      return {
        filter: '',
        menuItems: [
          {
            label: 'All',
            command: () => this.filter = ''
          },
          {
            label: 'Grayscale',
            command: () => this.filter = 'gray'
          },
          {
            label: 'Red',
            command: () => this.filter = 'red'
          },
          {
            label: 'Orange',
            command: () => this.filter = 'orange'
          },
          {
            label: 'Amber',
            command: () => this.filter = 'amber'
          },
          {
            label: 'Yellow',
            command: () => this.filter = 'yellow'
          },
          {
            label: 'Lime',
            command: () => this.filter = 'lime'
          },
          {
            label: 'Green',
            command: () => this.filter = 'green'
          },
          {
            label: 'Emerald',
            command: () => this.filter = 'emerald'
          },
          {
            label: 'Teal',
            command: () => this.filter = 'teal'
          },
          {
            label: 'Cyan',
            command: () => this.filter = 'cyan'
          },
          {
            label: 'Sky',
            command: () => this.filter = 'sky'
          },
          {
            label: 'Blue',
            command: () => this.filter = 'blue'
          },
          {
            label: 'Indigo',
            command: () => this.filter = 'indigo'
          },
          {
            label: 'Violet',
            command: () => this.filter = 'violet'
          },
          {
            label: 'Purple',
            command: () => this.filter = 'purple'
          },
          {
            label: 'Fuchsia',
            command: () => this.filter = 'fuchsia'
          },
          {
            label: 'Pink',
            command: () => this.filter = 'pink'
          },
          {
            label: 'Rose',
            command: () => this.filter = 'rose'
          },
          {
            divider: true
          },
          {
            section: true,
            label: 'Special Use'
          },
          {
            label: 'Chart Sequence',
            command: () => this.filter = 'Chart'
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
            style: 'capitalize'
          },
          {
            header: 'CSS Custom Property',
            key: 'css',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'text--copyable'
          },
          {
            header: 'Hex',
            key: 'hex',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'text--copyable'
          }
        ]
      }
    },
    components: {
      EpContainer,
      EpMenu,
      EpTable
    },
    computed: {
      filteredData() {
        if (this.filter === '') {
          return this.tableData
        } else {
          return this.tableData.filter(item => item.color.includes(this.filter))
        }
      },
      tableData() {
        let data = []
        for (const hue in colors) {
          for (const level in colors[hue]) {
            data.push({
              sample: colors[hue][level].value,
              color: `${hue} ${level}`,
              css: `var(--${hue}-${level})`,
              hex: colors[hue][level].value
            })
          }
        }
        for (const gray in grayscale) {
          for (const level in grayscale[gray]) {
            data.push({
              sample: grayscale[gray][level].value,
              color: `${gray} ${level}`,
              css: `var(--${gray}-${level})`,
              hex: grayscale[gray][level].value
            })
          }
        }
        const htmlStyles = window.getComputedStyle(document.querySelector('html'))
        for (let index = 0; index < 14; index++) {
          const cssVar = (index < 10) ? `--chart-sequence-0${index}` : `--chart-sequence-${index}`
          const hexValue = htmlStyles.getPropertyValue(cssVar)
          data.push({
            sample: hexValue,
            color: `Chart Sequence ${index}`,
            css: cssVar,
            hex: hexValue
          })
        }
        return data
      },
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
      filteredData() {
        // scroll color table to the top when filter changes
        const colorTableContainer = document.getElementById('colors__table')
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
      @include scrollable-container;
    }
  }
</style>
