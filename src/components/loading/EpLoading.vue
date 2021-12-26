<template>
  <transition name="fade">
  <div class="ep-loading">
    {{ message }}
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
        default: true
      },
      messages: {
        type: Array,
        default: () => ['Loading...']
      },
      messageDelay: {
        type: Number,
        default: 2000
      },
    },
    data () {
      return {
        message: ''
      }
    },
    methods: {
      displayMessages() {
        for (let index = 0; index < this.messages.length; index++) {
          setTimeout(() => {
            this.message = this.messages[index]
            if (index === this.messages.length - 1) {
              setTimeout(() => {
                this.$emit('done')
              }, this.messageDelay)
            }
          }, index * this.messageDelay)
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>