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
  import colors from '@/style/tokens/color/color'

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
        ]
      }
    },
    components: {
      EpContainer,
      EpTable
    },
    computed: {
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
    }
  }
</script>

<style lang="scss">
  .clickable:hover {
    position: relative;
    background-color: var(--background-4);
    outline: 6px solid var(--background-4);
    &::before {
      content: "Click to copy";
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
