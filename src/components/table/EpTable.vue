<template>
  <div class="ep-table-container">
  <table :class="['ep-table', classes]">
    <thead>
      <tr>
        <template
          v-for="(column, index) in columns"
          :key="index"
        >
        <th
          v-if="!excluded(column.key)"
          @click="sort(column.key)"
          :class="headClasses(column.key)"
        >
          <div>
            <span class="label">{{ column.header }}</span>
            <ep-icon :name="arrowIcon" />
          </div>
        </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in filteredData"
        :key="row.id"
        @click="rowClick(row)"
        :class="{ 'ep-table-row--selected': isSelected(row.id) }"
        :style="row.style"
        :ref="`row-${index}`"
      >
        <template v-for="(value, key) in row" :key="key">
        <td v-if="!excluded(key) && !isComponent(key)">
          <span
            @click.stop="cellClick(value, key)"
            v-html="formatCell(value, key, row)"
            :class="cellStyle(key)"
          ></span>
        </td>
        <td v-else-if="isComponent(key)">
          <component :is="value.component" v-bind="value.props" />
        </td>
        </template>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import EpIcon from '@/components/icon/EpIcon'
  import EpBadge from '@/components/badge/EpBadge'
  import EpSparkBar from '@/templates/insight/components/EpSparkBar'

  export default {
    name: 'EpTable',
    data() {
      return {
        currentSort: this.sortKey || this.getInitialSort(),
        currentSortDir: this.sortDir,
        // the spread operator clones the arrray, making it non-reactive
        // so when you mutate the data (sort function, etc)
        // it won't affect other components
        // tableData: [...this.data]
      }
    },
    components: {
      EpIcon,
      EpBadge,
      EpSparkBar
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      width: {
        type: String,
        default: 'auto'
      },
      // dateFilter: {
      //   type: Object,
      //   default: null
      // },
      exclude: {
        type: Array,
        default: () => []
      },
      bordered: {
        type: Boolean,
        default: false
      },
      compact: {
        type: Boolean,
        default: false
      },
      selectable: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Number,
        default: null
      },
      sortable: {
        type: Boolean,
        default: false
      },
      sortKey: {
        type: String,
        default: ''
      },
      sortDir: {
        type: String,
        default: 'desc'
      },
      stickyHeader: {
        type: Boolean,
        default: false
      },
      stickyTop: {
        type: String,
        default: '0'
      },
      striped: {
        type: Boolean,
        default: false
      },
      search: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      rowClick(row) {
        this.$emit('row-click', row)
        console.log('row-click')
      },
      isComponent(key) {
        // if column cellType is component, return true
        return this.columns.find(column => column.key === key)?.cellType === 'component'
      },
      cellClick(value, key) {
        const command = this.columns.find(column => column.key === key)?.command
        const to = this.columns.find(column => column.key === key)?.to
        if (command) {
          command(value)
        }
        if (to) {
          this.$router.push(to)
        }
      },
      // cellAction(key) {
      //   const column = this.columns.find(column => column.key === key)?.on
      //   return column ? column : {}
      // },
      cellStyle(key) {
        const style = this.columns.find(column => column.key === key)?.style
        return style ? style : ''
      },
      headClasses(key) {
        if (this.sortable && key === this.currentSort) {
          return key === this.currentSort
            ? ['active', `active--${this.currentSortDir}`]
            : null
        }
      },
      excluded(key) {
        return this.exclude.includes(key)
      },
      getInitialSort() {
        // if the column isn't excluded, return the first column
        // otherwise, return the next column
        const column = this.columns.find(column => !this.exclude.includes(column.key))
        return column ? column.key : this.columns[1].key
      },
      formatCell(value, key, row) {
        const formatter = this.columns.find(column => column.key == key)?.formatter
        return formatter ? formatter(value, key, row) : value
      },
      isSelected(rowID) {
        // return rowID === null ? false : rowID == this.selected
        // FIX THIS
        return false
      },
      sort(key) {
        if (!this.sortable) return
        if (key === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
        }
        this.currentSort = key
      }
    },
    computed: {
      arrowIcon() {
        return this.currentSortDir == 'desc' ? 'arrow-up' : 'arrow-down'
      },
      classes() {
        return {
          'ep-table--selectable': this.selectable,
          'ep-table--bordered': this.bordered,
          'ep-table--compact': this.compact,
          'ep-table--sticky': this.stickyHeader,
          'ep-table--striped': this.striped,
          'ep-table--sortable': this.sortable
        }
      },
      filteredData() {
        // if there are no search terms, return the data
        if (!this.search.length) return this.sortedData

        // otherwise, filter the data
        return this.sortedData.filter(row => {
          return this.search.every(search => {
            return Object.keys(row).some(key => {
              return String(row[key])
                .toLowerCase()
                .includes(search.toLowerCase())
            })
          })
        })
      },
      sortedData() {
        if (!this.sortable) this.data
        return this.data.sort((a, b) => {
          let modifier = 1
          if (this.currentSortDir === 'desc') modifier = -1
          if (a[this.currentSort] < b[this.currentSort])
            return -1 * modifier
          if (a[this.currentSort] > b[this.currentSort])
            return 1 * modifier
          return 0
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-table {
    // width: v-bind(width);
    thead {
      font-variation-settings: 'wght' 600;
      user-select: none;
      th {
        text-align: left;
        background: var(--background-2);
        z-index: 10;
        // &:hover {
        //   color: var(--color--primary);
        //   cursor: pointer;
        // }
        // &.active {
        //   color: var(--color--primary);
        //   .ep-icon {
        //     visibility: visible;
        //   }
        // }
        div {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 1.4rem;
          border-bottom: 1px solid var(--border-color);
          span.label {
            white-space: nowrap;
            text-overflow: ellipsis;
            flex: 1;
          }
          .ep-icon {
            margin-left: 10px;
            visibility: hidden;
          }
        }
      }
    }
    tbody {
      tr {
        position: relative;
        &:first-child {
          border-top: 0;
        }
        td {
          min-width: 1px;
          padding: 1.4rem;
          vertical-align: middle;
        }
      }
    }
    &--bordered {
      tbody tr {
        border: 1px solid var(--border-color);
        border-right: 0;
        border-left: 0;
      }
    }
    &--compact {
      thead tr th div,
      tbody tr td {
        padding: 0.8rem 1.2rem;
      }
    }
    &--selectable {
      tbody {
        tr:not(.ep-table-row--selected):hover {
          cursor: pointer;
          td {
            background: var(--color--primary);
            color: var(--text-color--inverse);
          }
        }
        tr.ep-table-row--selected {
          td {
            background: var(--color--primary);
            color: var(--text-color--inverse);
          }
        }
      }
    }
    &--sortable {
      thead th {
        &:hover {
          color: var(--text-color--link);
          cursor: pointer;
        }
        &.active {
          color: var(--text-color--link);
          .ep-icon {
            visibility: visible;
          }
        }
      }
    }
    &--sticky {
      thead {
        th {
          position: sticky;
          top: v-bind(stickyTop);
          // top: -1px; // fixes wierd 1px gap that exposes tbody contents during scroll
        }
      }
    }
    &--striped {
      tbody tr:nth-child(even) {
        background-color: var(--table-stripe-color);
      }
    }
  }
</style>
