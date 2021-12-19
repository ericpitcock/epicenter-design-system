<template>
  <div class="colors">
    <ep-container class="colors__menu" width="fit-content" height="fit-content" padding="1rem 0">
      <ep-menu :menuItems="menuItems" />
    </ep-container>
    <ep-container class="colors__table" width="542px" :height="tableHeight" padding="0 2rem 2rem">
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

  export default {
    name: 'EpColor',
    data() {
      return {
        // colors,
        filter: '',
        tableHeight: '',
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
            style: 'clickable'
          },
          {
            header: 'Hex',
            key: 'hex',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'clickable'
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
        return data
      }
    },
    methods: {
      calculateHeight() {
        this.tableHeight = `${window.innerHeight - 60}px`
      },
      copyToClipboard(value) {
        // console.log('copy', value)
        navigator.clipboard.writeText(value)
          .then(() => {
          // console.log("Text copied to clipboard...")
        })
          .catch(err => {
          console.log('Something went wrong', err);
        })
      }
    },
    mounted() {
      this.calculateHeight()
      window.addEventListener('resize', this.calculateHeight)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.calculateHeight)
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
    }
  }
  // need ::v-deep to affect children when using scoped styles
  ::v-deep .clickable:hover {
    position: relative;
    background-color: var(--text-color--highlight);
    outline: 6px solid var(--text-color--highlight);
    &::before {
      content: 'Click to copy';
      position: absolute;
      top: -150%;
      margin-left: -50%;
      width: 200%;
      height: 100%;
      color: var(--text-color);
      font-size: var(--font-size--tiny);
      text-align: center;
      pointer-events: none;
      white-space: nowrap;
    }
  }
</style>
