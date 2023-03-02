const fetchMixin = {
  methods: {
    fetchData(url, options) {
      return fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
          }
          return response.json()
        })
        .catch(error => {
          console.error(error)
          throw error
        })
    }
  }
}

export default fetchMixin

