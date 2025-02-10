import { faker } from '@faker-js/faker'

/**
 * Generate a fake IP reputation response
 */
const generateFakeIPReputation = (ip) => ({
  data: {
    'Fake Label': {
      'IP Address': ip,
      'Reputation Score': faker.number.int({ min: 0, max: 100 }),
      'Threat Category': faker.helpers.arrayElement(['Malware', 'Phishing', 'Botnet', 'None']),
      'ISP': faker.company.name(),
      'Country': faker.location.country(),
      'Last Seen': faker.date.past().toISOString(),
      'Open Ports': faker.helpers.arrayElements([22, 80, 443, 3389], faker.number.int({ min: 1, max: 4 })).join(', ')
    }
  }
})

/**
 * Generate a fake domain lookup response
 */
const generateFakeDomainLookup = (domain) => ({
  data: {
    'Fake Label': {
      'Domain': domain,
      'Registrar': faker.helpers.arrayElement(['GoDaddy', 'Namecheap, Inc.', 'Google Domains', 'Cloudflare']),
      'Creation Date': faker.date.past({ years: 5 }).toISOString().split('T')[0],
      'Expiration Date': faker.date.future({ years: 2 }).toISOString().split('T')[0],
      'Risk Level': faker.helpers.arrayElement(['Low', 'Medium', 'High']),
      'Associated IPs': [
        faker.internet.ipv4(),
        faker.internet.ipv4(),
        faker.internet.ipv4()
      ].join(', ')
    }
  }
})

/**
 * Generate a fake MAC address lookup response
 */
const generateFakeMACLookup = (mac) => ({
  data: {
    'Fake Label': {
      'MAC Address': mac,
      'Vendor': faker.company.name(),
      'Device Type': faker.helpers.arrayElement(['Router', 'Switch', 'Access Point', 'Smartphone']),
      'Risk Assessment': faker.helpers.arrayElement(['Safe', 'Suspicious', 'Compromised'])
    }
  }
})

/**
 * Generate a fake port scanning response
 */
const generateFakePortScan = (port) => ({
  data: {
    'Fake Label': {
      'Port': port,
      'Service': faker.helpers.arrayElement(['HTTP', 'HTTPS', 'SSH', 'RDP', 'FTP', 'SMTP']),
      'Status': faker.helpers.arrayElement(['Open', 'Closed', 'Filtered']),
      'Common Exploits': faker.helpers.arrayElements(['Heartbleed', 'SMBv1 Exploit', 'CVE-2023-XYZ'], faker.number.int({ min: 0, max: 2 })).join(', ')
    }
  }
})

/**
 * Generate a fake WHOIS lookup response
 */
const generateFakeWHOIS = (domain) => ({
  data: {
    'Fake Label': {
      'Domain': domain,
      'Registrar': faker.company.name(),
      'Registrant': faker.person.fullName(),
      'Creation Date': faker.date.past({ years: 10 }).toISOString().split('T')[0],
      'Expiration Date': faker.date.future({ years: 3 }).toISOString().split('T')[0],
      'Status': faker.helpers.arrayElement(['Active', 'Pending Delete', 'Suspended']),
      'Abuse Contact': faker.internet.email()
    }
  }
})

/**
 * Main function to get an enrichment response
 */
export const getFakeEnrichmentResponse = (type, value) => {
  switch (type) {
    case 'IP Address':
      return generateFakeIPReputation(value)
    case 'XFF IP Address':
      return generateFakeIPReputation(value)
    case 'Domain':
      return generateFakeDomainLookup(value)
    case 'MAC Address':
      return generateFakeMACLookup(value)
    case 'Port':
      return generateFakePortScan(value)
    case 'DNS Resource Name':
      return generateFakeWHOIS(value)
    default:
      return { data: { error: 'Unknown enrichment type' } }
  }
}

// Example usage:
// console.log(getFakeEnrichmentResponse('ip-reputation', '192.168.1.1'))
// console.log(getFakeEnrichmentResponse('domain-lookup', 'example.com'))