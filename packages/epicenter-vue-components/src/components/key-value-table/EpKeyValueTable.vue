<template>
  <div class="ep-key-value-table-container">
    <template
      v-for="(rows, section) in formattedData"
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
          v-for="(value, key) in rows"
          :key="key"
        >
          <td
            class="text--subtle text-align--right"
            :style="{ width: keyColumnWidth }"
          >
            {{ key }}
          </td>
          <td v-html="value" />
        </tr>
      </table>
    </template>
  </div>
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
      // deprecated - will be using keys in quotes
      // acronyms: {
      //   type: Array,
      //   default: () => []
      // },
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
    // data() {
    //   return {
    //     showSecondary: true
    //   }
    // },
    computed: {
      classes() {
        return {
          'ep-key-value-table--striped': this.striped
        }
      },
      formattedData() {
        // if this.data.formatter doesn't exist, return this.data
        if (!this.data.formatter) {
          return this.data.data
        }
        const formatted = {}
        for (const [key, value] of Object.entries(this.data.data)) {
          formatted[key] = {}
          for (const [prop, val] of Object.entries(value)) {
            if (this.data.formatter[prop]) {
              formatted[key][prop] = this.data.formatter[prop](val)
            } else {
              formatted[key][prop] = val
            }
          }
        }
        return formatted
      },
      keyColumnWidth() {
        if (!this.commonKeyWidth) {
          return 'auto'
        }

        const data = this.formattedData
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
      // deprecated - will be using keys in quotes
      // camelCaseToTitleCase(str) {
      //   // if not a string, return
      //   if (typeof str !== 'string') {
      //     return str
      //   }
      //   return str
      //     .replace(/([A-Z])/g, ' $1')
      //     .replace(/^./, function (str) {
      //       return str.toUpperCase()
      //     })
      //     // handle acronyms
      //     .replace(/(Id|Ip|Http|Xff|Amp|Dns|Mac|Os|Url)/g, function (str) {
      //       return str.toUpperCase()
      //     })
      // }
    }
  }
</script>
