<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sortTable('id')">
            ID
          </th>
          <th @click="sortTable('name')">
            Name
          </th>
          <th @click="sortTable('age')">
            Age
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in filteredData"
          :key="row.id"
        >
          <td
            v-for="column in columns"
            :key="column.key"
          >
            {{ formatData(row[column.key], column.formatter) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ChatGPTDataTable',
    props: {
      data: {
        type: Array,
        required: true,
      },
      columns: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        filterValue: '',
        sortKey: '',
        sortDirection: 'asc',
      }
    },
    computed: {
      filteredData() {
        return this.sortedData.filter(person => {
          return person.name.toLowerCase().includes(this.filterValue.toLowerCase())
        })
      },
      sortedData() {
        return this.data.slice().sort((a, b) => {
          const aValue = a[this.sortKey]
          const bValue = b[this.sortKey]
          if (aValue < bValue) {
            return this.sortDirection === 'asc' ? -1 : 1
          } else if (aValue > bValue) {
            return this.sortDirection === 'asc' ? 1 : -1
          } else {
            return 0
          }
        })
      },
    },
    methods: {
      formatData(data, formatter) {
        return formatter ? formatter(data) : this.formatterFunction(data)
      },
      sortTable(key) {
        if (key === this.sortKey) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
        } else {
          this.sortKey = key
          this.sortDirection = 'asc'
        }
      },
    },
  }
</script>
