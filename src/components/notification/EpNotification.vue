<template>
  <div class="ep-notification">

  </div>
</template>

<script>
  export default {
    name: 'EpNotification',
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      dismissable: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      showNotification() {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, this.duration)
      }
    },
    mounted() {
      this.showNotification()
    }
  }
</script>

<style lang="scss" scoped>
  .ep-notification {

  }
</style>