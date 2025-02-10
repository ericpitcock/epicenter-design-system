import { computed } from 'vue'

import EpContainer from '@/components/container/EpContainer.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpKeyValueTable from '@/components/key-value-table/EpKeyValueTable.vue'
import { useActionsMenu } from '@/composables/index.js'

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
    'secondary': {
      'HTTP Hostname': 'juicy-jewel.name',
      'HTTP URL': 'https://strict-tabby.name',
      'HTTP Content Type': 'application/tamp-apex-update',
      'HTTP User Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; .NET CLR 1.4.41485.2)',
      'HTTP Referrer': 'http://upbeat-face.org',
      'HTTP Method': 'DELETE',
      'Hostname': 'live-lens.name',
      'Domain': 'finished-passion.name',
      'MAC Address': '43:6e:97:4d:87:e1',
      'Country': 'Guam',
      'Company': 'Jones Inc',
      'AMP Status': 'Enabled',
      'AMP Comment': 'Placeat blanditiis perferendis enim.',
      'XFF Hostname': 'worthwhile-wasabi.com',
      'XFF Domain': 'brown-squash.biz',
      'XFF Country': 'Costa Rica',
      'XFF Region': 'Cambridgeshire',
      'XFF City': 'Jerrodbury',
      'XFF Company': 'Langosh, Heidenreich and Fadel',
      'XFF AMP Comment': 'Occaecati in ratione modi perferendis accusantium porro suscipit quo doloremque.'
    }
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
    // no longer a prop but can be used here to add the --striped class
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      },
    },
    alignRight: {
      name: 'Align Right',
      control: {
        type: 'boolean'
      }
    },
    showActionsMenu: {
      name: 'Show Actions Menu',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const KeyValueTable = (args) => ({
  components: { EpContainer, EpDropdown, EpKeyValueTable },
  setup() {
    // test function
    const test = () => {
      console.log('test')
    }

    const classes = computed(() => {
      return {
        'ep-key-value-table--striped': args.striped,
        'ep-key-value-table--align-right': args.alignRight,
      }
    })

    const { generateActionMenuProps } = useActionsMenu()

    const menuItems = [
      {
        section: true,
        label: 'Enrich Data',
      },
      (value) => ({
        label: 'VirusTotal Lookup',
        onClick: () => {
          console.log('VirusTotal', value)
        }
      }),
      (value) => ({
        label: `Cloudshark: ${value}`,
        onClick: () => {
          console.log('Cloudshark', value)
        }
      }),
    ]

    const tableActionsMenuProps = (context) =>
      generateActionMenuProps({
        context,
        menuItems,
        alignRight: false,
        buttonProps: {
          iconLeft: {
            name: 'dots-horizontal',
            styles: { '--ep-icon-stroke-width': 3 },
          },
        }
      })

    const enrichableKeys = ['IP Address', 'XFF IP Address']

    return {
      args,
      classes,
      enrichableKeys,
      tableActionsMenuProps,
      test,
    }
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
  >
    <ep-key-value-table
      v-bind="args"
      :class="classes"
    >
      <template #actions-menu="{ value, key }">
        <ep-dropdown v-if="enrichableKeys.includes(key)" v-bind="tableActionsMenuProps(value)" />
      </template>
    </ep-key-value-table>
  </ep-container>
  `
})

KeyValueTable.args = {
  data: fakeData,
  commonKeyWidth: true,
  sectionHeaders: true,
  striped: false,
  alignRight: false,
  showActionsMenu: true,
}