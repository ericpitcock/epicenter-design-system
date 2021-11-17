<template>
  <table
    :class="[
      'ep-table',
      { 'ep-table--selectable': selectable },
      { 'ep-table--sticky': stickyHeader },
      { 'ep-table--striped': striped }
    ]"
  >
    <thead>
      <tr>
        <th
          v-for="(label, key) in columns"
          :key="key"
          @click="sort(key)"
          :class="headClasses(key)"
        >
          <div>
            <span class="label">{{ label }}</span>
            <EpIcon :name="arrowIcon()" />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in filteredData"
        :key="row.id"
        @click="$emit('row-click', row.id)"
        :class="{
          'ep-table-row--selected': isSelected(row.id),
          'ep-table-row--empty': row.empty
        }"
      >
        <td v-for="(value, key) in row.data" :key="key">
          {{ value.value != null ? value.template || value.value : '' }}
        </td>
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
        // using the spread clones the arrray, making it non-reactive
        // as I don't want the sort function mutating the data being sent the charts, etc
        // no longer using, but keeping so I nevar forget
        // tableData: [...this.data]
      }
    },
    components: {
      EpIcon
    },
    props: {
      columns: {
        type: Object,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      dateFilter: {
        type: Object,
        default: null
      },
      hideEmpty: {
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
      arrowIcon() {
        return this.currentSortDir == 'desc' ? 'arrow-up' : 'arrow-down'
      },
      headClasses(key) {
        return key == this.currentSort
          ? ['active', `active--${this.currentSortDir}`]
          : null
      },
      // isHidden(rowHidden) {
      //   return (this.hideEmpty && rowHidden)
      // },
      isSelected(rowID) {
        return rowID === null ? false : rowID == this.selected
      },
      sort: function(s) {
        if (s === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
        }
        this.currentSort = s
      }
    },
    computed: {
      filteredData() {
        return this.hideEmpty
          ? this.sortedData.filter(row => !row.empty)
          : this.sortedData
      },
      sortedData() {
        return this.data.sort((a, b) => {
          let modifier = 1
          if (this.currentSortDir === 'desc') modifier = -1
          if (a.data[this.currentSort].value < b.data[this.currentSort].value)
            return -1 * modifier
          if (a.data[this.currentSort].value > b.data[this.currentSort].value)
            return 1 * modifier
          return 0
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-table {
    width: 100%;
    thead {
      // these two could probably move to classes
      // font-family: 'GT America Condensed Medium';
      font-variation-settings: 'wght' 500, 'wdth' 80, 'opsz' 11;
      user-select: none;
      th:first-child {
        border-top-left-radius: 6px;
      }
      th:last-child {
        border-top-right-radius: 6px;
      }
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
          padding: 14px;
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
      tr:last-child td:first-child {
        border-bottom-left-radius: 6px;
      }
      tr:last-child td:last-child {
        border-bottom-right-radius: 6px;
      }
      tr {
        &:not(:first-child) {
          // border-top: 1px solid $medium-gray;
          border-top: 1px solid var(--border-color);
        }
        &.ep-table-row--empty {
          background-color: var(--component-background--lighter);
          // background-color: $white !important;
          td {
            color: var(--component-background--lighter);
            padding: 7px 14px;
            pointer-events: none;
          }
        }
        // &.table-row--hidden {
        //   display: none;
        // }
        td {
          padding: 14px;
          vertical-align: middle;
        }
      }
    }
    &--selectable {
      tbody {
        tr:not(.ep-table-row--empty):not(.ep-table-row--selected):hover {
          cursor: pointer;
          td {
            background: var(--primary-color--base);
          }
        }
        tr.ep-table-row--selected {
          td {
            background: var(--primary-color--base);
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
        background-color: #f9f9f9;
      }
    }
  }
</style>
