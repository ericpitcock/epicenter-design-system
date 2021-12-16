<template>
  <div class="colors">
    <ep-container
      width="fit-content"
      padding="0.4rem 2rem 2rem"
    >
      <ep-table :columns="tableColumns" :data="tableData" bordered stickyHeader />
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer'
  import EpTable from '@/components/table/EpTable'
  import colors from './colors'

  export default {
    name: 'EpColor',
    data() {
      return {
        tableColumns: [
          {
            header: 'Sample',
            key: 'sample',
            formatter: (value) => {
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
        ],
        hues: Object.keys(colors),
        levels: Object.keys(colors.red)
      }
    },
    components: {
      EpContainer,
      EpTable
    },
    computed: {
      tableData() {
        let data = []
        for (const huee in colors) {
          for (const level in colors[huee]) {
            data.push({
              sample: colors[huee][level],
              color: `${huee} ${level}`,
              css: `var(--${huee}-${level})`,
              hex: colors[huee][level]
            })
          }
        }
        return data
      }
    }
  }
</script>

<style lang="scss" scoped>
  .color-sample {
    width: 50px;
    height: 50px;
  }
</style>
