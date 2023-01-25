<!-- vue 3 options api table component with sorting, search, and pagination -->
<template>
  <div class="table-container">
    <div class="table-header">
      <div class="table-header__search">
        <input type="text" class="table-header__search-input" placeholder="Search" v-model="search" />
      </div>
      <div class="table-header__pagination">
        <div class="table-header__pagination-info">
          <span class="table-header__pagination-info-text">
            {{ paginationInfo }}
          </span>
        </div>
        <div class="table-header__pagination-buttons">
          <button class="table-header__pagination-button" :disabled="!hasPreviousPage" @click="previousPage">
            Previous
          </button>
          <button class="table-header__pagination-button" :disabled="!hasNextPage" @click="nextPage">Next</button>
        </div>
      </div>
    </div>
    <table class="table">
      <thead class="table__header">
        <tr class="table__header-row">
          <th class="table__header-cell" v-for="(column, index) in columns" :key="index" @click="sortBy(column)">
            {{ column.header }}
            <span class="table__header-cell-sort-icon" v-if="column === sortColumn">
              <i
                class="fas"
                :class="{
                  'fa-sort-up': sortDirection === 'asc',
                  'fa-sort-down': sortDirection === 'desc'
                }"
              ></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__body-row" v-for="(row, index) in filteredRows" :key="index">
          <td class="table__body-cell" v-for="(cell, index) in row" :key="index">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      columns: {
        type: Array,
        required: true
      },
      rows: {
        type: Array,
        required: true
      },
      perPage: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        search: '',
        sortColumn: '',
        sortDirection: 'asc',
        currentPage: 1
      }
    },
    computed: {
      filteredRows() {
        const rows = this.rows.filter(row => {
          return this.columns.some(column => {
            return String(row[column]).toLowerCase().includes(this.search.toLowerCase())
          })
        })

        if (this.sortColumn) {
          rows.sort((a, b) => {
            const modifier = this.sortDirection === 'asc' ? 1 : -1
            if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier
            if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier
            return 0
          })
        }

        return rows
      },
      hasNextPage() {
        return this.currentPage * this.perPage < this.filteredRows.length
      },
      hasPreviousPage() {
        return this.currentPage > 1
      },
      paginationInfo() {
        const start = (this.currentPage - 1) * this.perPage + 1
        const end = Math.min(this.currentPage * this.perPage, this.filteredRows.length)
        return `${start} - ${end} of ${this.filteredRows.length}`
      }
    },
    methods: {
      sortBy(column) {
        if (this.sortColumn === column) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
        } else {
          this.sortColumn = column
          this.sortDirection = 'asc'
        }
      },
      nextPage() {
        this.currentPage++
      },
      previousPage() {
        this.currentPage--
      }
    },
    mounted() {
      console.log(this.filteredRows)
    }
  }
</script>

<style lang="scss" scoped>
  .table-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .table-header__search {
    flex: 1;
    margin-right: 20px;
  }

  .table-header__search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  .table-header__pagination {
    display: flex;
    align-items: center;
  }

  .table-header__pagination-info {
    margin-right: 20px;
  }

  .table-header__pagination-info-text {
    font-size: 14px;
  }

  .table-header__pagination-buttons {
    display: flex;
  }

  .table-header__pagination-button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #ccc;
    }

    &:disabled {
      cursor: not-allowed;
      background: #ccc;
    }
  }

  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table__header {
    background: #ccc;
  }

  .table__header-row {
    border-bottom: 1px solid #ccc;
  }

  .table__header-cell {
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
  }

  .table__header-cell-sort-icon {
    margin-left: 5px;
  }

  .table__body {
    background: #fff;
  }

  .table__body-row {
    border-bottom: 1px solid #ccc;
  }

  .table__body-cell {
    padding: 10px;
    font-size: 14px;
    text-align: left;
  }

  .table__body-cell:last-child {
    text-align: right;
  }

  .table__body-cell:first-child {
    text-align: left;
  }

  .table__body-row:nth-child(odd) {
    background: #eee;
  }

  .table__body-row:hover {
    background: #ccc;
  }

  .table__body-row:last-child {
    border-bottom: none;
  }

  .table__body-row:last-child .table__body-cell {
    border-bottom: none;
  }

  .table__body-row:last-child .table__body-cell:first-child {
    border-bottom-left-radius: 5px;
  }

  .table__body-row:last-child .table__body-cell:last-child {
    border-bottom-right-radius: 5px;
  }

  .table__body-row:first-child {
    border-top: none;
  }

  .table__body-row:first-child .table__body-cell {
    border-top: none;
  }

  .table__body-row:first-child .table__body-cell:first-child {
    border-top-left-radius: 5px;
  }

  .table__body-row:first-child .table__body-cell:last-child {
    border-top-right-radius: 5px;
  }

  .table__body-row:first-child:last-child {
    border-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell {
    border-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:first-child {
    border-top-left-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:last-child {
    border-top-right-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:first-child {
    border-bottom-left-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:last-child {
    border-bottom-right-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell {
    border-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:first-child {
    border-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:last-child {
    border-radius: 5px;
  }

  .table__body-row:first-child:last-child .table__body-cell:first-child {
    border-radius: 5px;
  }
</style>
