<template>
  <div class="ep-notification">
    <ep-container :width="'30rem'" :padding="'2rem'">
      {{ message }}
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/atoms/container/EpContainer'

  export default {
    name: 'EpNotification',
    props: {
      message: {
        type: String,
        required: true
      },
      // type: {
      //   type: String,
      //   required: true
      // },
      dismissable: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 3000
      }
    },
    components: {
      EpContainer
    },
    data() {
      return {
        show: false
      }
    },
    // methods: {
    //   showNotification() {
    //     this.show = true
    //     setTimeout(() => {
    //       this.show = false
    //     }, this.duration)
    //   }
    // },
    // mounted() {
    //   this.showNotification()
    // }
  }
</script>

<style lang="scss" scoped>
  .ep-notification {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
</style>