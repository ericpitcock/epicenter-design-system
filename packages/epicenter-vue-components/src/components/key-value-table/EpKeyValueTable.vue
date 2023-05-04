<template>
  <template
    v-for="(rows, section) in data"
    :key="section"
  >
    <h3
      v-if="sectionHeaders"
      :class="['section-headers', sectionHeaderClass]"
    >
      {{ section }}
    </h3>
    <table
      :class="['ep-key-value-table', classes]"
      :style="{ width: width }"
    >
      <tr
        v-for="(row, key) in rows"
        :key="key"
      >
        <td
          class="text--subtle text-align--right"
          :style="{ width: keyColumnWidth }"
        >
          {{ camelCaseToTitleCase(key) }}
        </td>
        <td>{{ row }}</td>
      </tr>
    </table>
  </template>
</template>

<script>
  export default {
    name: 'EpKeyValueTable',
    props: {
      data: {
        type: Object,
        required: true
      },
      width: {
        type: String,
        default: '100%'
      },
      commonKeyWidth: {
        type: Boolean,
        default: false
      },
      acronyms: {
        type: Array,
        default: () => []
      },
      sectionHeaders: {
        type: Boolean,
        default: false
      },
      sectionHeaderClass: {
        type: String,
        default: ''
      },
      striped: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        showSecondary: true
      }
    },
    computed: {
      classes() {
        return {
          'ep-key-value-table--striped': this.striped
        }
      },
      keyColumnWidth() {
        if (!this.commonKeyWidth) {
          return 'auto'
        }

        const data = this.data
        let maxKeyLength = 0

        for (let key of Object.keys(data)) {
          for (let subKey in data[key]) {
            if (subKey.length > maxKeyLength) {
              maxKeyLength = subKey.length
            }
          }
        }

        return `${maxKeyLength}ch`
      }
    },
    methods: {
      camelCaseToTitleCase(str) {
        // if not a string, return
        if (typeof str !== 'string') {
          return str
        }
        return str
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, function (str) {
            return str.toUpperCase()
          })
          // handle acronyms
          .replace(/(Id|Ip|Http|Xff|Amp|Dns|Mac|Os|Url)/g, function (str) {
            return str.toUpperCase()
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-key-value-table {
    td {
      padding: 0.5rem 1rem;
      border-bottom: 1px solid var(--border-color);
    }

    &--striped {
      tr:nth-child(even) {
        background-color: var(--table-stripe-color);
      }
    }
  }
</style>