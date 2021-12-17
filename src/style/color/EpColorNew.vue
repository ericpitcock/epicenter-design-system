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

  export default {
    name: 'EpColor',
    data() {
      return {
        colors,
        filter: '',
        tableHeight: '',
        menuItems: [
          {
            label: 'All',
            command: () => {
              this.filter = ''
            }
          },
          {
            label: 'Red',
            command: () => {
              this.filter = 'red'
            }
          },
          {
            label: 'Orange',
            command: () => {
              this.filter = 'orange'
            }
          },
          {
            label: 'Amber',
            command: () => {
              this.filter = 'amber'
            }
          },
          {
            label: 'Yellow',
            command: () => {
              this.filter = 'yellow'
            }
          },
          {
            label: 'Lime',
            command: () => {
              this.filter = 'lime'
            }
          },
          {
            label: 'Green',
            command: () => {
              this.filter = 'green'
            }
          },
          {
            label: 'Emerald',
            command: () => {
              this.filter = 'emerald'
            }
          },
          {
            label: 'Teal',
            command: () => {
              this.filter = 'teal'
            }
          },
          {
            label: 'Cyan',
            command: () => {
              this.filter = 'cyan'
            }
          },
          {
            label: 'Sky',
            command: () => {
              this.filter = 'sky'
            }
          },
          {
            label: 'Blue',
            command: () => {
              this.filter = 'blue'
            }
          },
          {
            label: 'Indigo',
            command: () => {
              this.filter = 'indigo'
            }
          },
          {
            label: 'Violet',
            command: () => {
              this.filter = 'violet'
            }
          },
          {
            label: 'Purple',
            command: () => {
              this.filter = 'purple'
            }
          },
          {
            label: 'Fuchsia',
            command: () => {
              this.filter = 'fuchsia'
            }
          },
          {
            label: 'Pink',
            command: () => {
              this.filter = 'pink'
            }
          },
          {
            label: 'Rose',
            command: () => {
              this.filter = 'rose'
            }
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
            on: {
              click: () => console.log('click')
            },
            style: 'clickable'
          },
          {
            header: 'Hex',
            key: 'hex',
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
      // calculateHeight() {
      //   return `${window.innerHeight - 60}px`
      // },
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
        return data
      }
    },
    methods: {
      calculateHeight() {
        this.tableHeight = `${window.innerHeight - 60}px`
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
      // flex: 1 1 auto;
      overflow-y: auto;
      // height: v-bind(calculateHeight);
    }
  }
  // .ep-container {
  //   display: flex;
  //   width: calc(100vw - 60px);
  //   height: calc(100vh - 60px);
  //   overflow: scroll;
  // }
  .ep-menu {
    flex: 0 0 200px;
    position: sticky;
    top: 0;
  }
  .ep-table {
    // flex: 4;
  }
  .clickable:hover {
    position: relative;
    background-color: var(--background-4);
    outline: 6px solid var(--background-4);
    &::before {
      content: 'Click to copy';
      position: absolute;
      top: -150%;
      margin-left: -50%;
      width: 200%;
      height: 100%;
      color: white;
      font-size: var(--font-size--tiny);
      text-align: center;
      pointer-events: none;
      white-space: nowrap;
    }
  }
</style>
