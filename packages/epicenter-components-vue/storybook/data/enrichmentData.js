import { faker } from '@faker-js/faker'

const enrichmentSources = {
  'IP Address': [
    { id: faker.string.uuid(), label: 'VirusTotal' },
    { id: faker.string.uuid(), label: 'AbuseIPDB' },
    { id: faker.string.uuid(), label: 'IPInfo.io' },
    { id: faker.string.uuid(), label: 'GreyNoise' },
    { id: faker.string.uuid(), label: 'Shodan' }
  ],
  'XFF IP Address': [
    { id: faker.string.uuid(), label: 'VirusTotal' },
    { id: faker.string.uuid(), label: 'AbuseIPDB' },
    { id: faker.string.uuid(), label: 'IPInfo.io' },
    { id: faker.string.uuid(), label: 'GreyNoise' },
    { id: faker.string.uuid(), label: 'Shodan' }
  ],
  'DNS Resource Data': [
    { id: faker.string.uuid(), label: 'VirusTotal' },
    { id: faker.string.uuid(), label: 'AbuseIPDB' },
    { id: faker.string.uuid(), label: 'IPInfo.io' },
    { id: faker.string.uuid(), label: 'GreyNoise' },
    { id: faker.string.uuid(), label: 'Shodan' }
  ],
  'Domain': [
    { id: faker.string.uuid(), label: 'WHOIS' },
    { id: faker.string.uuid(), label: 'PassiveTotal' }
  ],
  'HTTP Hostname': [
    { id: faker.string.uuid(), label: 'WHOIS' },
    { id: faker.string.uuid(), label: 'PassiveTotal' }
  ],
  'XFF Domain': [
    { id: faker.string.uuid(), label: 'WHOIS' },
    { id: faker.string.uuid(), label: 'PassiveTotal' }
  ],
  'DNS Resource Name': [
    { id: faker.string.uuid(), label: 'WHOIS' },
    { id: faker.string.uuid(), label: 'PassiveTotal' }
  ],
  'MAC Address': [
    { id: faker.string.uuid(), label: 'MAC Vendor Lookup' }
  ],
  'HTTP URL': [
    { id: faker.string.uuid(), label: 'Google Safe Browsing' },
    { id: faker.string.uuid(), label: 'URLhaus' }
  ],
  'HTTP Referrer': [
    { id: faker.string.uuid(), label: 'Google Safe Browsing' },
    { id: faker.string.uuid(), label: 'URLhaus' }
  ],
  'Port': [
    { id: faker.string.uuid(), label: 'Shodan Open Ports' },
    { id: faker.string.uuid(), label: 'IANA Port Info' }
  ],
  'Country': [
    { id: faker.string.uuid(), label: 'IPInfo.io' }
  ],
  'City': [
    { id: faker.string.uuid(), label: 'IPInfo.io' }
  ],
  'Region': [
    { id: faker.string.uuid(), label: 'IPInfo.io' }
  ],
  'XFF Country': [
    { id: faker.string.uuid(), label: 'IPInfo.io' }
  ],
  'XFF City': [
    { id: faker.string.uuid(), label: 'IPInfo.io' }
  ],
  'XFF Region': [
    { id: faker.string.uuid(), label: 'IPInfo.io' }
  ]
}

const generateFakeVirusTotal = (ip) => ({
  name: 'VirusTotal',
  data: {
    'IP Address': ip,
    'Reputation': faker.number.int({ min: -100, max: 100 }),
    'Malicious Reports': faker.number.int({ min: 0, max: 50 }),
    'Suspicious Reports': faker.number.int({ min: 0, max: 20 }),
    'Harmless Reports': faker.number.int({ min: 0, max: 100 }),
    'Last Analysis Date': faker.date.past({ years: 1 }).toISOString(),
    'Detected URLs': Array.from({ length: faker.number.int({ min: 0, max: 5 }) }, () => faker.internet.url())
  }
})

const generateFakeAbuseIPDB = (ip) => ({
  name: 'AbuseIPDB',
  data: {
    'IP Address': ip,
    'Abuse Confidence Score': faker.number.int({ min: 0, max: 100 }),
    'Total Reports': faker.number.int({ min: 0, max: 100 }),
    'Last Reported Date': faker.date.past({ years: 1 }).toISOString(),
    'ISP': faker.company.name(),
    'Usage Type': faker.helpers.arrayElement(['Data Center', 'Residential', 'ISP', 'Business']),
    'Country': faker.location.country(),
    'Domain': faker.internet.domainName()
  }
})

const generateFakeIPInfo = (ip) => ({
  name: 'IPInfo.io',
  data: {
    'IP Address': ip,
    'ASN': `AS${faker.number.int({ min: 1000, max: 99999 })}`,
    'ISP': faker.company.name(),
    'City': faker.location.city(),
    'Region': faker.location.county(),
    'Country': faker.location.country(),
    'Latitude': faker.location.latitude(),
    'Longitude': faker.location.longitude(),
    'Organization': faker.company.name()
  }
})

const generateFakeGreyNoise = (ip) => ({
  name: 'GreyNoise',
  data: {
    'IP Address': ip,
    'Classification': faker.helpers.arrayElement(['Benign', 'Malicious', 'Unknown']),
    'Actor': faker.person.fullName(),
    'First Seen': faker.date.past({ years: 2 }).toISOString(),
    'Last Seen': faker.date.recent().toISOString(),
    'Noise Score': faker.number.int({ min: 0, max: 100 }),
    'Tags': Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.lorem.word())
  }
})

const generateFakeShodan = (ip) => ({
  name: 'Shodan',
  data: {
    'IP Address': ip,
    'Open Ports': Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.internet.port()).join(', '),
    'Services': Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.helpers.arrayElement(['HTTP', 'SSH', 'FTP', 'RDP', 'Telnet'])).join(', '),
    'Vulnerabilities': Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () => `CVE-${faker.number.int({ min: 2000, max: 2024 })}-${faker.number.int({ min: 1000, max: 9999 })}`).join(', '),
    'ISP': faker.company.name(),
    'Country': faker.location.country(),
    'City': faker.location.city()
  }
})

const generateFakePassiveTotal = (domain) => ({
  name: 'PassiveTotal (RiskIQ)',
  data: {
    'Domain': domain,
    'Passive DNS Records': Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
      'IP Address': faker.internet.ip(),
      'Last Seen': faker.date.past({ years: 1 }).toISOString()
    })),
    'Associated Subdomains': Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.internet.domainName()).join(', '),
    'Registrant': faker.person.fullName(),
    'Registrar': faker.company.name()
  }
})

const generateFakeWHOIS = (domain) => ({
  name: 'WHOIS',
  data: {
    'Domain': domain,
    'Registrar': faker.company.name(),
    'Registrant': faker.person.fullName(),
    'Creation Date': faker.date.past({ years: 10 }).toISOString().split('T')[0],
    'Expiration Date': faker.date.future({ years: 3 }).toISOString().split('T')[0],
    'Status': faker.helpers.arrayElement(['Active', 'Pending Delete', 'Suspended']),
    'Abuse Contact': faker.internet.email()
  }
})

const generateFakeGoogleSafeBrowsing = (url) => ({
  name: 'Google Safe Browsing',
  data: {
    'URL': url,
    'Threat Level': faker.helpers.arrayElement(['Safe', 'Suspicious', 'Malicious']),
    'Threat Type': faker.helpers.arrayElement(['Phishing', 'Malware', 'Unwanted Software']),
    'Last Analysis Date': faker.date.recent().toISOString()
  }
})

const generateFakeURLhaus = (url) => ({
  name: 'URLhaus',
  data: {
    'URL': url,
    'Malware Hosted': faker.helpers.arrayElement([true, false]),
    'Threat Type': faker.helpers.arrayElement(['Malware', 'Phishing', 'Botnet']),
    'Associated IPs': Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.internet.ipv4()).join(', '),
    'Last Reported': faker.date.recent().toISOString()
  }
})

const generateFakeMACVendor = (mac) => ({
  name: 'MAC Address Vendor Lookup',
  data: {
    'MAC Address': mac,
    'Vendor': faker.company.name(),
    'Organization': faker.company.name(),
    'Country': faker.location.country()
  }
})

const getFakeEnrichmentResponse = (property, value) => {
  switch (property) {
    /*** IP Address Enrichment ***/
    case 'IP Address':
    case 'XFF IP Address':
    case 'DNS Resource Data': // IPs stored in DNS records
      return {
        'VirusTotal': generateFakeVirusTotal(value),
        'AbuseIPDB': generateFakeAbuseIPDB(value),
        'IPInfo.io': generateFakeIPInfo(value),
        'GreyNoise': generateFakeGreyNoise(value),
        'Shodan': generateFakeShodan(value)
      }

    /*** Domain & Hostname Enrichment ***/
    case 'Domain':
    case 'HTTP Hostname':
    case 'XFF Domain':
    case 'DNS Resource Name':
      return {
        'WHOIS': generateFakeWHOIS(value),
        'PassiveTotal': generateFakePassiveTotal(value)
      }

    /*** MAC Address Enrichment ***/
    case 'MAC Address':
      return {
        'MAC Vendor Lookup': generateFakeMACVendor(value)
      }

    /*** URL Enrichment ***/
    case 'HTTP URL':
    case 'HTTP Referrer':
      return {
        'Google Safe Browsing': generateFakeGoogleSafeBrowsing(value),
        'URLhaus': generateFakeURLhaus(value)
      }

    /*** Port Enrichment ***/
    case 'Port':
      return {
        'Shodan Open Ports': generateFakeShodan(value),
        'IANA Port Info': {
          name: 'IANA Port Info',
          data: {
            'Port': value,
            'Description': faker.lorem.sentence(),
            'Service': faker.helpers.arrayElement(['HTTP', 'SSH', 'FTP', 'RDP', 'Telnet']),
            'Status': faker.helpers.arrayElement(['Assigned', 'Reserved', 'Available']),
            'Assignee': faker.company.name()
          }
        }
      }

    /*** Geolocation Enrichment (Derived from IP) ***/
    case 'Country':
    case 'City':
    case 'Region':
    case 'XFF Country':
    case 'XFF City':
    case 'XFF Region':
      return {
        'IPInfo.io': generateFakeIPInfo(value) // Returns country, city, region based on IP
      }

    default:
      return { error: `Unsupported enrichment type for property: ${property}` }
  }
}

export {
  enrichmentSources,
  getFakeEnrichmentResponse,
}