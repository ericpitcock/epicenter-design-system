<template>
  <div v-html="svg" />
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'currentColor'
      },
      weight: {
        type: String,
        default: 'regular'
      },
      size: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        svg: '',
        weights: {
          'extra-light': 0.5,
          'light': 1,
          'regular': 1.5,
          'bold': 2,
        }
      }
    },
    methods: {
      loadIcon() {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            let svgCode = xhr.responseText
            svgCode = svgCode.replace(/stroke=\S+/g, `stroke="${this.color}"`)
              .replace(/stroke-width=\S+/g, `stroke-width="${this.weights[this.weight]}"`)
              .replace(/[^-]width=\S+/g, `width="${this.size}"`)
              .replace(/height=\S+/g, `height="${this.size}"`)
            this.svg = svgCode
          }
        }
        xhr.open('GET', `./icons/${this.name}.svg`, true)
        xhr.send()
      }
    },
    created() {
      this.loadIcon()
    }
  }
</script>
