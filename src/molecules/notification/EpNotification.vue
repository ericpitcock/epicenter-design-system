<template>
  <div class="ep-notification">
    <ep-container
      :width="'30rem'"
      :padding="'2rem'"
      :backgroundColor="'var(--background-4)'"
      :borderColor="'var(--border-color--lighter)'"
    >
      <ep-flex-container
        justifyContent="space-between"
        alignItems="center"
      >
        <div class="ep-notification__message">
          {{ message }}
        </div>
        <ep-button
          @click="dismissNotification"
          class="dismiss-button"
          kind="ghost"
          iconRight="close"
        />
      </ep-flex-container>
    </ep-container>
  </div>
</template>

<script>
  import EpButton from '@/atoms/button/EpButton'
  import EpContainer from '@/atoms/container/EpContainer'
  import EpFlexContainer from '@/atoms/flexbox/EpFlexContainer'

  export default {
    name: 'EpNotification',
    emits: ['dismiss'],
    props: {
      duration: {
        type: Number,
        default: null
      },
      id: {
        type: Number,
        required: true
      },
      message: {
        type: String,
        required: true
      }
    },
    components: {
      EpButton,
      EpContainer,
      EpFlexContainer
    },
    // computed: {
    //   ...mapState(['visibleNotification'])
    // },
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
    &__message {
    }
    &__dismiss-button {
      position: absolute;
      top: .5rem;
      right: .5rem;
    }
  }
  .notification-enter-active, .notification-leave-active {
    transition: transform .5s;
  }
  .notification-enter, .notification-leave-to {
    transform: translateY(-200%);
  }
</style>