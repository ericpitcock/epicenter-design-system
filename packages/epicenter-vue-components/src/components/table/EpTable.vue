<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    :style="containerStyles"
    @scroll="handleScroll"
  >
    <table
      ref="table"
      :class="['ep-table', classes]"
      :style="tableClasses"
    >
      <thead>
        <tr>
          <template
            v-for="(column, index) in columns"
            :key="index"
          >
            <th
              v-if="!excluded(column.key)"
              :class="headClasses(column.key)"
              :style="{ background: headerBackgroundColor, ...stickyHeaderTop }"
              @click="sort(column.key)"
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
          :ref="`row-${index}`"
          :class="{ 'ep-table-row--selected': isSelected(row.id) }"
          :style="row.style"
          @click="rowClick(row)"
        >
          <template
            v-for="(value, key) in row"
            :key="key"
          >
            <template v-if="!excluded(key)">
              <td :style="tdStyles">
                <component
                  :is="columns.find(column => column.key === key).component"
                  v-if="isComponent(key)"
                  v-bind="value.props"
                />
                <span
                  v-else
                  :class="cellClasses(key)"
                  @click.stop="cellClick(value, key)"
                  v-html="formatCell(value, key, row)"
                />
              </td>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import calculateHeight from '../../mixins/calculateHeight'
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpTable',
    components: {
      EpIcon
    },
    mixins: [calculateHeight],
    props: {
      bordered: {
        type: Boolean,
        default: false
      },
      borderColor: {
        type: String,
        default: 'var(--border-color)'
      },
      columns: {
        type: Array,
        required: true
      },
      compact: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        required: true
      },
      exclude: {
        type: Array,
        default: () => []
      },
      headerBackgroundColor: {
        type: String,
        default: 'var(--interface-surface)'
      },
      hiddenColumns: {
        type: Array,
        default: () => []
      },
      padding: {
        type: String,
        default: '0'
      },
      search: {
        type: Array,
        default: () => []
      },
      searchable: {
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
      sortDir: {
        type: String,
        default: 'desc'
      },
      sortKey: {
        type: String,
        default: ''
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
      verticalAlign: {
        type: String,
        default: 'middle'
      },
      whiteSpace: {
        type: String,
        default: 'normal'
      },
      width: {
        type: String,
        default: 'auto'
      }
    },
    emits: ['data-changed', 'row-click'],
    data() {
      return {
        currentSort: this.getSortKey(),
        currentSortDir: this.getSortDir(),
        layoutFixed: false
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
          'ep-table--sortable': this.sortable,
          'ep-table--layout-fixed': this.layoutFixed,
        }
      },
      containerStyles() {
        return {
          height: this.dynamicHeight,
          padding: this.padding,
        }
      },
      filteredData() {
        if (!this.searchable || !this.search.length) return this.sortedData

        /*
        search for an exact match of values surrounded by quotes
        otherwise, search for any match
        */
        return this.sortedData.filter(row => {
          return this.search.every(search => {
            return Object.values(row).some(value => {
              if (search.startsWith('"') && search.endsWith('"')) {
                return value.toString().toLowerCase() === search.slice(1, -1).toLowerCase()
              } else {
                return value.toString().toLowerCase().includes(search.toLowerCase())
              }
            })
          })
        })
      },
      sortedData() {
        if (!this.sortable) return this.data

        const modifier = this.currentSortDir === 'desc' ? -1 : 1

        return this.data.slice().sort((a, b) => {
          const aValue = this.isComponent(this.currentSort)
            ? a[this.currentSort].value
            : a[this.currentSort]
          const bValue = this.isComponent(this.currentSort)
            ? b[this.currentSort].value
            : b[this.currentSort]

          if (aValue < bValue)
            return -1 * modifier
          if (aValue > bValue)
            return 1 * modifier
          return 0
        })
      },
      stickyHeaderTop() {
        const top = this.stickyHeader ? this.stickyTop : '0'
        return { top: `${top}px` }
      },
      tableClasses() {
        return {
          '--table-border-color': this.borderColor,
          width: this.width,
        }
      },
      tdStyles() {
        return {
          verticalAlign: this.verticalAlign,
          whiteSpace: this.whiteSpace,
        }
      }
    },
    watch: {
      filteredData() {
        this.$emit('data-changed', this.filteredData)
      },
    },
    // mounted() {
    //   const table = this.$refs.table
    //   const tableContainer = this.$refs.tableContainer

    //   const debounceResize = (callback, delay) => {
    //     let timeoutId
    //     return (...args) => {
    //       clearTimeout(timeoutId)
    //       timeoutId = setTimeout(() => {
    //         timeoutId = null
    //         callback(...args)
    //       }, delay)
    //     }
    //   }

    //   const handleResize = () => {
    //     if (table && tableContainer) {
    //       this.layoutFixed = table.offsetWidth > tableContainer.offsetWidth
    //     }
    //   }

    //   const debouncedHandleResize = debounceResize(handleResize, 250) // Adjust the delay as needed

    //   window.addEventListener('resize', debouncedHandleResize)
    // },
    methods: {
      rowClick(row) {
        this.$emit('row-click', row)
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
      cellClasses(key) {
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
        const hiddenColumns = [...this.exclude, ...this.hiddenColumns]
        return hiddenColumns.includes(key)
      },
      getSortDir() {
        return this.sortDir ? this.sortDir : 'desc'
      },
      getSortKey() {
        // find the first column that isn't excluded
        const column = this.columns.find(column => !this.exclude.includes(column.key))
        // return the sortKey if it's set, otherwise return the column found above
        return this.sortKey ? this.sortKey : column.key
      },
      formatCell(value, key, row) {
        if (this.isComponent(key)) return value.value
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
    }
  }
</script>
