<template>
  <transition name="fade">
  <div class="ep-loading">
    <div class="ep-loading__icon-container">
      <!-- <img v-if="icon" :src="`${icon}.svg`" /> -->
      <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentcolor">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                  <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"/>
                  </path>
              </g>
          </g>
      </svg>
    </div>
    <div class="ep-loading__message-container">
      <p>{{ message }}</p>
    </div>
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
      borderRadius: {
        type: String,
        default: 'var(--border-radius--large)'
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
    watch: {
      messages() {
        this.cycleMessages()
      }
    },
    methods: {
      cycleMessages() {
        // every set duration, display the next message and icon by loading them into data
        // when the last message is displayed, emit a done event
        if (this.messages === null) return
        
        this.messages.forEach((message, index) => {
          setTimeout(() => {
            this.icon = message.icon
            this.message = message.message
            if (index === this.messages.length - 1) {
              setTimeout(() => {
                this.$emit('done')
              }, this.messageDelay)
            }
          }, this.messageDelay * index)
        })
      }
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
    z-index: var(--z-index--modal);
    background-color: v-bind(backgroundColor);
    border-radius: v-bind(borderRadius);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    &__icon-container {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 40px;
      }
    }
    &__message-container {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 100%;
    }
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