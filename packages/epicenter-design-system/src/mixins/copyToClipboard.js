export default {
  methods: {
    copyToClipboard(value) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          console.log('Text copied to clipboard...')
        })
        .catch(err => {
          console.log('Something went wrong', err)
        })
    }
  }
}
