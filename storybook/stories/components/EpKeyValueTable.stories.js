import EpContainer from '@/components/container/EpContainer.vue'
import EpKeyValueTable from '@/components/key-value-table/EpKeyValueTable.vue'

import { paddedBg } from '../../helpers/decorators.js'

const fakeData = {
  data: {
    'primary': {
      'Application Protocol': 'HTTPS',
      'Port': 49582,
      'Timestamp': '2023-04-20T07:43:47.170Z',
      'Transport Protocol': 'TCP',
      'IP Address': '175.130.222.219',
      'Transport Host Type': 'Virtual',
      'Application Host Type': 'Virtual',
      'Connection Disrupted': false,
      'Customer Asset': 'No',
      'XFF IP Address': '43.101.194.54',
      'XFF AMP Status': 'Enabled',
      'DNS Type': 'CNAME',
      'DNS Resource Name': 'dark-terrace.org',
      'DNS Resource Type': 'A',
      'DNS Resource Data': '164.221.252.124',
      'City': 'Tremblayborough'
    },
    // 'secondary': {
    //   'HTTP Hostname': 'juicy-jewel.name',
    //   'HTTP URL': 'https://strict-tabby.name',
    //   'HTTP Content Type': 'application/tamp-apex-update',
    //   'HTTP User Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; .NET CLR 1.4.41485.2)',
    //   'HTTP Referrer': 'http://upbeat-face.org',
    //   'HTTP Method': 'DELETE',
    //   'Hostname': 'live-lens.name',
    //   'Domain': 'finished-passion.name',
    //   'MAC Address': '43:6e:97:4d:87:e1',
    //   'Country': 'Guam',
    //   'Company': 'Jones Inc',
    //   'AMP Status': 'Enabled',
    //   'AMP Comment': 'Placeat blanditiis perferendis enim.',
    //   'XFF Hostname': 'worthwhile-wasabi.com',
    //   'XFF Domain': 'brown-squash.biz',
    //   'XFF Country': 'Costa Rica',
    //   'XFF Region': 'Cambridgeshire',
    //   'XFF City': 'Jerrodbury',
    //   'XFF Company': 'Langosh, Heidenreich and Fadel',
    //   'XFF AMP Comment': 'Occaecati in ratione modi perferendis accusantium porro suscipit quo doloremque.'
    // }
  },
  formatter: {
    applicationProtocol: value => `${value} years old`,
    port: value => `<span @click="test">${value}</span>`
  }
}

export default {
  title: 'Components/Table/Key Value Table',
  component: EpKeyValueTable,
  decorators: [paddedBg],
  argTypes: {
    data: {
      table: {
        disable: true
      }
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    commonKeyWidth: {
      name: 'Common Key Width',
      control: {
        type: 'boolean'
      }
    },
    sectionHeaders: {
      name: 'Section Headers',
      control: {
        type: 'boolean'
      }
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const KeyValueTable = (args) => ({
  components: { EpContainer, EpKeyValueTable },
  setup() {
    // test function
    const test = () => {
      console.log('test')
    }
    return { args, test }
  },
  template: `
  <ep-container
    :style="{
      '--ep-container-padding': '0 3rem',
      '--ep-container-content-padding': '3rem 0 10rem 0',
      '--ep-container-bg-color': 'var(--interface-surface)',
      '--ep-container-border-width': '0.1rem',
      '--ep-container-overflow': 'auto',
    }"
    calculateHeight
    :calculateHeightOffset="30"
  >
    <ep-key-value-table v-bind="args" />
  </ep-container>
  `
})

KeyValueTable.args = {
  data: fakeData,
  width: '100%',
  commonKeyWidth: true,
  sectionHeaders: false,
  striped: true,
}