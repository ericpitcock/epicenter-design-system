<template>
  <table
    :class="[
      'ep-table',
      { 'ep-table--full-width': fullWidth },
      { 'ep-table--selectable': selectable },
      { 'ep-table--bordered': bordered },
      { 'ep-table--compact': compact },
      { 'ep-table--sticky': stickyHeader },
      { 'ep-table--striped': striped }
    ]"
  >
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
        v-for="row in filteredData"
        :key="row.id"
        @click="$emit('row-click', row.id)"
        :class="{ 'ep-table-row--selected': isSelected(row.id) }"
      >
        <template v-for="(value, key) in row" :key="key">
        <td v-if="!excluded(key)" :class="cellStyle(key)">
          <span v-on="cellAction(key)">{{ formatCell(value, key) }}</span>
        </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import EpIcon from '@/components/icon/EpIcon'

  export default {
    name: 'EpTable',
    data() {
      return {
        currentSort: 'start_date',
        currentSortDir: 'desc'
        // the spread operator clones the arrray, making it non-reactive
        // so when you mutate the data (sort function, etc)
        // it won't affect other components
        // tableData: [...this.data]
      }
    },
    components: {
      EpIcon
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
      // dateFilter: {
      //   type: Object,
      //   default: null
      // },
      exclude: {
        type: Array,
        default: () => []
      },
      fullWidth: {
        type: Boolean,
        default: false
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
      stickyHeader: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      cellAction(key) {
        const column = this.columns.find(column => column.key === key)?.on
        return column ? column : {}
      },
      cellStyle(key) {
        const style = this.columns.find(column => column.key == key)?.style
        return style ? style : ''
      },
      headClasses(key) {
        return key == this.currentSort
          ? ['active', `active--${this.currentSortDir}`]
          : null
      },
      excluded(key) {
        return this.exclude.includes(key)
      },
      formatCell(value, key) {
        const formatter = this.columns.find(column => column.key == key)?.formatter
        return formatter ? formatter(value) : value
      },
      isSelected(rowID) {
        // return rowID === null ? false : rowID == this.selected
        // FIX THIS
        return false
      },
      sort(key) {
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
      filteredData() {
        return this.sortedData
      },
      sortedData() {
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
    thead {
      font-variation-settings: 'wght' 600;
      user-select: none;
      th {
        text-align: left;
        background: var(--background-2);
        z-index: 10;
        &:hover {
          color: var(--primary-color--base);
          cursor: pointer;
        }
        &.active {
          color: var(--primary-color--base);
          .ep-icon {
            visibility: visible;
          }
        }
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
          width: 100%;
          min-width: 1px;
          padding: 1.4rem;
          vertical-align: middle;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    &--full-width {
      width: 100%;
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
            background: var(--primary-color--light);
          }
        }
        tr.ep-table-row--selected {
          td {
            background: var(--primary-color--light);
          }
        }
      }
    }
    &--sticky {
      thead {
        th {
          position: sticky;
          top: -1px; // fixes wierd 1px gap that exposes tbody contents during scroll
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
