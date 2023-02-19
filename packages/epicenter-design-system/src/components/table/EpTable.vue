<template>
  <div
    class="ep-table-container"
    :style="containerStyles"
  >
    <table
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
              @click="sort(column.key)"
              :class="headClasses(column.key)"
              :style="stickyHeaderTop"
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
          <template
            v-for="(value, key) in row"
            :key="key"
          >
            <td
              v-if="!excluded(key) && !isComponent(key)"
              :style="tdStyles"
            >
              <span
                @click.stop="cellClick(value, key)"
                v-html="formatCell(value, key, row)"
                :class="cellStyle(key)"
              ></span>
            </td>
            <td v-else-if="isComponent(key)">
              <component
                :is="value.component"
                v-bind="value.props"
              />
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  import EpIcon from '../icon/EpIcon'

  export default {
    name: 'EpTable',
    data() {
      return {
        currentSort: this.getSortKey(),
        currentSortDir: this.getSortDir(),
        tableHeight: '',
      }
    },
    components: {
      // dynamic components
      EpBadge: defineAsyncComponent(() => import('../badge/EpBadge')),
      EpSparkBar: defineAsyncComponent(() => import('../spark-bar/EpSparkBar')),
      EpIcon,
    },
    props: {
      bordered: {
        type: Boolean,
        default: false
      },
      calculateHeight: {
        type: Boolean,
        default: false
      },
      calculateHeightOffset: {
        type: Number,
        default: 0
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
    methods: {
      rowClick(row) {
        this.$emit('row-click', row)
        console.log('row-click')
      },
      isComponent(key) {
        // if column cellType is component, return true
        return this.columns.find(column => column.key === key)?.cellType === 'component'
      },
      calculatedHeight() {
        // calculate height of table-container so sticky header works
        // helpful for sticky situations - dad joke
        const offsetBottom = this.calculateHeightOffset || 0
        this.tableHeight = this.calculateHeight ? `${window.innerHeight - this.$el.getBoundingClientRect().top - offsetBottom}px` : 'auto'
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
      getSortDir() {
        // return the sortDir if it's set, otherwise return the default
        return this.sortDir ? this.sortDir : 'desc'
      },
      getSortKey() {
        // find the first column that isn't excluded or cellType component
        const column = this.columns.find(column => !this.exclude.includes(column.key) && column.cellType !== 'component')
        // return the sortKey if it's set, otherwise return the column found above
        return this.sortKey ? this.sortKey : column.key
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
      containerStyles() {
        return {
          height: this.tableHeight,
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

        /* 
        Consider using return this.data.slice().sort((a, b)...
        The slice() method creates a shallow copy of an array from a
        start index to an end index.In this case, we don't pass any 
        arguments to .slice(), which means it will create a copy of 
        the entire filteredPersons array.
        
        By creating a copy of the array, we can sort it without 
        affecting the original filteredPersons array.This ensures 
        that any other parts of the application that rely on the 
        original order of the filteredPersons array are 
        not affected by the sorting operation.
        */
        return this.data.sort((a, b) => {
          let modifier = 1
          if (this.currentSortDir === 'desc') modifier = -1
          if (a[this.currentSort] < b[this.currentSort])
            return -1 * modifier
          if (a[this.currentSort] > b[this.currentSort])
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
          width: this.width,
        }
      },
      tdStyles() {
        return {
          verticalAlign: this.verticalAlign,
          whiteSpace: this.whiteSpace,
        }
      },
    },
    mounted() {
      this.calculatedHeight()
      if (this.calculateHeight) {
        window.addEventListener('resize', this.calculatedHeight)
      }
    },
    beforeDestroy() {
      if (this.calculateHeight) {
        window.removeEventListener('resize', this.calculatedHeight)
      }
    },
    watch: {
      filteredData() {
        this.$emit('data-changed', this.filteredData)
      },
    }
  }
</script>
