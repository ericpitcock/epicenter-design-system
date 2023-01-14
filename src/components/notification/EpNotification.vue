<template>
  <div class="ep-notification">
    <div class="ep-notification__color-strip"></div>
    <div class="ep-notification__body">
      <div class="message">
        {{ message }}
      </div>
      <div class="dismiss-button">
        <ep-button
          @click="dismissNotification"
          class="dismiss-button"
          kind="ghost"
          :iconRight="{ name: 'close' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpContainer from '@/components/container/EpContainer'
  import EpFlexContainer from '@/components/flexbox/EpFlexContainer'

  export default {
    name: 'EpNotification',
    emits: ['dismiss'],
    props: {
      id: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'banner' // banner, alert
      },
      style: {
        type: String,
        default: 'success' // info, success, warning, error
      }
    },
    data() {
      return {
        colors: {
          info: 'var(--color--primary)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)'
        }
      }
    },
    components: {
      EpButton,
      EpContainer,
      EpFlexContainer
    },
    computed: {
      // ...mapState(['visibleNotification'])
      colorStrip() {
        return this.colors[this.style]
      }
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      }
    }
    // mounted() {
    //   console.log('mounted')
    //   if (!this.duration) {
    //     this.autoDismiss()
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  .ep-notification {
    display: flex;
    align-items: stretch;
    width: 30rem;
    height: 7rem;
    &__color-strip {
      width: .5rem;
      height: 100%;
      border-radius: var(--border-radius--large) 0 0 var(--border-radius--large);
      background: v-bind(colorStrip);
    }
    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: var(--background-4);
      padding: 0 2rem;
      border: 1px solid var(--border-color--lighter);
      border-left: none;
      border-radius: 0 var(--border-radius--large) var(--border-radius--large) 0;
      .message {
      }
      .dismiss-button {
      }
    }
  }
  .notification-enter-active, .notification-leave-active {
    transition: transform .5s;
  }
  .notification-enter, .notification-leave-to {
    transform: translateY(-200%);
  }
</style>