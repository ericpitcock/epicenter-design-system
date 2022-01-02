<template>
  <transition name="fade">
  <div class="ep-loading">
    <img v-if="icon" :src="`${icon}.svg`" />
    <div>{{ message }}</div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: 'EpLoading',
    props: {
      backgroundColor: {
        type: String,
        default: 'var(--overlay-color)'
      },
      loading: {
        type: Boolean,
        default: false
      },
      messages: {
        type: Array,
        default: () => [{
          icon: '',
          message: 'Loading...'
        }]
      },
      messageDelay: {
        type: Number,
        default: 2000
      },
    },
    data () {
      return {
        icon: '',
        message: '',
      }
    },
    methods: {
      displayMessages() {
        const icons = this.messages.map(message => message.icon)
        const firstIcon = icons[0]
        this.messages.forEach((message, index) => {
          setTimeout(() => {
            this.icon = message.icon === null ? firstIcon : message.icon
            this.message = message.message
            if (index === this.messages.length - 1) {
              setTimeout(() => {
                this.$emit('done')
              }, this.messageDelay)
            }
          }, this.messageDelay * index)
        })
      },
      displayIcons() {
        const icons = this.messages.map(message => message.icon)
        console.log(icons)
        // this.running = true
        // this.messages.forEach((message, index) => {
        //   setTimeout(() => {
        //     this.icon = message.icon
        //     if (index === this.messages.length - 1) {
        //       setTimeout(() => {
        //         this.running = false
        //         this.$emit('done')
        //       }, this.messageDelay)
        //     }
        //   }, this.messageDelay * index)
        // })
      }
      // displayMessages() {
      //   for (const item in this.messages) {
      //     setTimeout(() => {
      //       this.icon = this.messages[item].icon
      //       this.message = this.messages[item].message

      //     }, this.messageDelay * item)
      //   }
      //   for (let index = 0; index < this.messages.length; index++) {
      //     setTimeout(() => {
      //       this.message = this.messages[index]
      //       if (index === this.messages.length - 1) {
      //         setTimeout(() => {
      //           this.$emit('done')
      //         }, this.messageDelay)
      //       }
      //     }, index * this.messageDelay)
      //   }
      // }
    },
    mounted() {
      this.displayMessages()
      this.displayIcons()
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
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>