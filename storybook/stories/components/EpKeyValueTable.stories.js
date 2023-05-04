import { padded } from '../../helpers/decorators'
import EpContainer from '@/components/container/EpContainer.vue'
import EpKeyValueTable from '@/components/key-value-table/EpKeyValueTable.vue'

const data = {
  primary: {
    applicationProtocol: 'https',
    port: 49582,
    timestamp: '2023-04-20T07:43:47.170Z',
    transportProtocol: 'TCP',
    ipAddress: '175.130.222.219',
    transportHostType: 'Virtual',
    applicationHostType: 'Virtual',
    connectionDisrupted: false,
    customerAsset: 'No',
    xffIpAddress: '43.101.194.54',
    xffAmpStatus: 'Enabled',
    dnsType: 'CNAME',
    dnsResourceName: 'dark-terrace.org',
    dnsResourceType: 'A',
    dnsResourceData: '164.221.252.124',
    city: 'Tremblayborough'
  },
  secondary: {
    httpHostname: 'juicy-jewel.name',
    httpUrl: 'https://strict-tabby.name',
    httpContentType: 'application/tamp-apex-update',
    httpUserAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; .NET CLR 1.4.41485.2)',
    httpReferrer: 'http://upbeat-face.org',
    httpMethod: 'DELETE',
    hostname: 'live-lens.name',
    domain: 'finished-passion.name',
    macAddress: '43:6e:97:4d:87:e1',
    country: 'Guam',
    company: 'Jones Inc',
    ampStatus: 'Enabled',
    ampComment: 'Placeat blanditiis perferendis enim.',
    xffHostname: 'worthwhile-wasabi.com',
    xffDomain: 'brown-squash.biz',
    xffCountry: 'Costa Rica',
    xffRegion: 'Cambridgeshire',
    xffCity: 'Jerrodbury',
    xffCompany: 'Langosh, Heidenreich and Fadel',
    xffAmpComment: 'Occaecati in ratione modi perferendis accusantium porro suscipit quo doloremque.'
  }
}

export default {
  title: 'Components/Table/Key Value Table',
  component: EpKeyValueTable,
  decorators: [padded],
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
    acronyms: {
      table: {
        disable: true
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
  setup () {
    return { args }
  },
  template: `
  <ep-container content-padding="3rem">
    <ep-key-value-table v-bind="args" />
  </ep-container>
  `
})

KeyValueTable.args = {
  data: data,
  width: '100%',
  commonKeyWidth: true,
  acronyms: ['IP', 'DNS', 'HTTP', 'XFF'],
  sectionHeaders: false,
  striped: true,
}