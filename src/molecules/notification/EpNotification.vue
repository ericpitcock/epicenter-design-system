<template>
  <Teleport to="body">
    <Transition name="notification">
    <div v-if="showNotification" class="ep-notification">
      <ep-container
        :width="'30rem'"
        :padding="'2rem'"
        :backgroundColor="'var(--background-4)'"
        :borderColor="'var(--border-color--lighter)'"
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
    props: {
      message: {
        type: String,
        required: true
      },
      permanent: {
        type: Boolean,
        default: false
      },
    },
    components: {
      EpContainer,
      EpButton
    },
    computed: {
      ...mapState(['showNotification'])
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      },
      autoDismiss() {
        setTimeout(() => {
          this.$emit('dismiss')
        }, 5000)
      }
    },
    mounted() {
      if (!this.permanent) {
        this.autoDismiss()
      }
    }
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
    transform: translateY(-100%);
  }
</style>