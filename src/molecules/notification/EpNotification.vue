<template>
  <Teleport to="body">
    <Transition name="notification">
    <div v-if="visibleNotification" class="ep-notification">
      <ep-container
        :width="'30rem'"
        :padding="'2rem'"
        :backgroundColor="'var(--background-4)'"
        :borderColor="'var(--border-color--lighter)'"
      >
        <div class="ep-notification__message">
          {{ visibleNotification.message }}
        </div>
        <ep-button
          @click="dismissNotification"
          class="dismiss-button"
          kind="ghost"
          iconRight="close"
        />
      </ep-container>
    </div>
    </Transition>
  </Teleport>
</template>

<script>
  import EpContainer from '@/atoms/container/EpContainer'
  import EpButton from '@/atoms/button/EpButton'
  import { mapState } from 'vuex'

  export default {
    name: 'EpNotification',
    emits: ['dismiss'],
    // props: {
    //   message: {
    //     type: String,
    //     required: true
    //   },
    //   duration: {
    //     type: Number
    //   }
    // },
    components: {
      EpContainer,
      EpButton
    },
    computed: {
      ...mapState(['visibleNotification'])
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
    position: absolute;
    top: 2rem;
    right: 2rem;
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