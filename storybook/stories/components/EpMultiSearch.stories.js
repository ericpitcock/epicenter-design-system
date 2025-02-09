import { computed,ref } from 'vue'

import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpMultiSearch from '@/components/search/EpMultiSearch.vue'

import { paddedSurface } from '../../helpers/decorators.js'

export default {
  title: 'Components/Search/Multisearch',
  component: EpMultiSearch,
  decorators: [paddedSurface],
  argTypes: {
    placeholder: { name: 'Placeholder', control: { type: 'text' } },
    icon: { name: 'Icon', control: { type: 'object' } },
    disabled: { name: 'Disabled', control: { type: 'boolean' } },
    autofocus: { name: 'Autofocus', control: { type: 'boolean' } },
    width: { name: 'Width', control: { type: 'text' } },
    height: { name: 'Height', control: { type: 'text' } },
    borderWidth: { name: 'Border Width', control: { type: 'text' } },
    borderStyle: { name: 'Border Style', control: { type: 'text' } },
    borderColor: { name: 'Border Color', control: { type: 'text' } },
    borderRadius: { name: 'Border Radius', control: { type: 'text' } },
    backgroundColor: { name: 'Background Color', control: { type: 'text' } },
    color: { name: 'Color', control: { type: 'text' } },
  },
}

export const Multisearch = args => ({
  components: { EpMultiSearch, EpFlex },
  setup() {
    const searchQueries = ref({ and: [], or: [] })

    const alerts = ref([
      { id: 1, type: 'Brute Force', severity: 'High', source: '192.168.1.10', message: 'Multiple failed login attempts' },
      { id: 2, type: 'Malware', severity: 'Critical', source: '10.0.0.5', message: 'Malware detected in process execution' },
      { id: 3, type: 'Phishing', severity: 'Medium', source: '203.0.113.12', message: 'Suspicious email activity detected' },
      { id: 4, type: 'DDoS', severity: 'High', source: '172.16.34.8', message: 'Unusual traffic spike detected' },
      { id: 5, type: 'Policy Violation', severity: 'Low', source: '10.5.23.17', message: 'Unauthorized software installed' },
      { id: 6, type: 'Phishing', severity: 'High', source: '192.168.1.10', message: 'Fake login page detected' },
      { id: 7, type: 'Brute Force', severity: 'Critical', source: '203.0.113.12', message: 'Multiple failed SSH login attempts' },
      { id: 8, type: 'Malware', severity: 'Medium', source: '172.16.34.8', message: 'Suspicious file execution detected' },
      { id: 9, type: 'Unauthorized Access', severity: 'High', source: '192.168.1.10', message: 'Admin login outside normal hours' },
      { id: 10, type: 'DDoS', severity: 'Critical', source: '10.0.0.5', message: 'High-volume traffic from single IP' },
      { id: 11, type: 'Phishing', severity: 'Low', source: '203.0.113.12', message: 'Email link to unknown domain' },
      { id: 12, type: 'Policy Violation', severity: 'Medium', source: '10.5.23.17', message: 'Restricted file download' },
    ])

    const filterAlerts = computed(() => {
      const { and, or } = searchQueries.value

      if (!and.length && !or.length) {
        return alerts.value // No filtering, show all alerts
      }

      return alerts.value.filter(alert => {
        const alertString = JSON.stringify(alert).toLowerCase()

        // Handle AND conditions: Every term in `and` must be found
        const matchesAllAnd = and.length === 0 || and.every(term => alertString.includes(term.toLowerCase()))

        // Handle OR conditions: At least one term in `or` must be found
        const matchesAnyOr = or.length === 0 || or.some(term => alertString.includes(term.toLowerCase()))

        // If only terms are provided without operators, default to OR logic
        if (!and.length && or.length) return matchesAnyOr

        return matchesAllAnd && matchesAnyOr
      })
    })

    const handleSearch = query => {
      console.log('Search query:', query)
      searchQueries.value = query || { and: [], or: [] }
    }

    return { args, searchQueries, filterAlerts, handleSearch }
  },
  template: `
    <ep-flex class="flex-col gap-30">
      <ep-multi-search
        v-bind="args"
        @enter="handleSearch"
        @delete="handleSearch"
        @clear="handleSearch"
        @query-close="handleSearch"
      />
      <table class="ep-table alert-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Severity</th>
            <th>Source</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alert in filterAlerts" :key="alert.id">
            <td>{{ alert.id }}</td>
            <td>{{ alert.type }}</td>
            <td>{{ alert.severity }}</td>
            <td>{{ alert.source }}</td>
            <td>{{ alert.message }}</td>
          </tr>
        </tbody>
      </table>
    </ep-flex>
  `,
})

Multisearch.args = {
  placeholder: 'Search alerts…',
  height: '4.6rem',
  icon: { name: 'search', styles: { '--ep-icon-width': '24px' } },
}