<template>
  <div class="ep-loading">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'EpLoading',
    props: {
      backgroundColor: {
        type: String,
        default: 'transparent'
      },
      loading: {
        type: Boolean,
        default: true
      },
      messages: {
        type: Array,
        default: 'Loading…'
      }
    },
    data () {
      return {
        message: ''
      }
    },
    methods: {
      displayMessages() {
        if (!this.loading) return
        for (let index = 0; index < this.messages.length; index++) {
          setTimeout(() => {
            this.message = this.messages[index]
            if (index === this.messages.length - 1) {
              setTimeout(() => {
                this.loading = false
                this.$emit('done')
              }, 3000)
            }
          }, index * 3000)
        }
      }
    },
    mounted() {
      this.displayMessages()
    }
  }
</script>

<style lang="scss" scoped>
  .ep-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: v-bind(backgroundColor);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>