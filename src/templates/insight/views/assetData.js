// https://fakerjsdocs.netlify.app/#browser-demo
import faker from 'faker'

const columns = [
  {
    header: 'ID',
    key: 'id'
  },
  {
    header: 'IP Address',
    key: 'ip_address'
  },
  {
    header: 'IPv6 Address',
    key: 'ipv6_address'
  },
  {
    header: 'MAC Address',
    key: 'mac_address'
  },
  {
    header: 'Location',
    key: 'location'
  },
  {
    header: 'Operating System',
    key: 'operating_system'
  },
  {
    header: 'Vulnerabilities',
    key: 'vulnerabilities',
  }
]

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push({
      id: faker.datatype.uuid(),
      ip_address: faker.internet.ip(),
      ipv6_address: faker.internet.ipv6(),
      mac_address: faker.internet.mac(),
      location: faker.random.arrayElement(['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis']),
      operating_system: faker.random.arrayElement(['Windows', 'macOS', 'Linux']),
      vulnerabilities: faker.random.arrayElement(['Critical', 'High', 'Medium', 'Low', 'None'])
    })
  }
  return arr
}

export { columns, fakeArray }
