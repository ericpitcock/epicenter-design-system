<template>
  <div class="colors">
    <ep-container
      width="fit-content"
      :padding="'30px 40px 40px'"
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
              return `<div class="color-sample" style="width: 50px; height: 50px; background-color: ${value};" />`
            }
          },
          {
            header: 'Color',
            key: 'color',
            style: 'capitalize'
          },
          {
            header: 'CSS Custom Property',
            key: 'css'
          },
          {
            header: 'Hex',
            key: 'hex'
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
        // const hues = Object.keys(colors)
        // const levels = Object.keys(colors.red)
        let data = []
        for (const huee in colors) {
          for (const level in colors[huee]) {
            data.push({
              // level,
              // huee,
              sample: colors[huee][level],
              color: `${huee} ${level}`,
              css: `var(--${huee}-${level})`,
              hex: colors[huee][level]
            })
          }
        }
        return data
        // let data = []
        // colors.forEach((level, index) => {
        //   // levels.forEach((level) => {
        //     data.push({
        //       color: index + ' ' + level,
        //       css: `--${index}-${level}`,
        //       hex: colors[index][level]
        //       // color: {
        //       //   hue,
        //       //   level
        //       // }
        //     })
        //   // })
        // })
        // return data
      }
    },
    created () {
      console.log(this.tableData)
    }
  }
</script>

<style lang="scss" scoped>
  .color-sample {
    width: 50px;
    height: 50px;
  }
</style>
