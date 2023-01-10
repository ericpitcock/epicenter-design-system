<template>
  <Teleport to="body">
  <div class="ep-notifications" :style="position">
    <ep-flex-container
      flexFlow="column nowrap"
      gap="1rem"
    >
    <transition-group name="fade">
      <EpNotification
        v-for="notification in notifications"
        :key="notification.id"
        :id="notification.id"
        :message="`${notification.message} ${notification.id}`"
        :duration="notification.duration"
        @dismiss="removeNotification(notification)"
      />
    </transition-group>
    </ep-flex-container>
  </div>
  </Teleport>
</template>

<script>
  import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
  import EpNotification from '@/components/notification/EpNotification'
  import { mapState } from 'vuex'

  export default {
    name: 'EpNotifications',
    components: {
      EpFlexContainer,
      EpNotification
    },
    props: {
      top: {
        type: String,
        default: 'auto'
      },
      right: {
        type: String,
        default: 'auto'
      },
      bottom: {
        type: String,
        default: 'auto'
      },
      left: {
        type: String,
        default: 'auto'
      }
    },
    computed: {
      ...mapState(['notifications']),
      position() {
        return {
          top: this.top,
          right: this.right,
          bottom: this.bottom,
          left: this.left
        }
      }
    },
    methods: {
      removeNotification(notification) {
        this.$store.dispatch('removeNotification', notification)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-notifications {
    position: fixed;
    z-index: 1000;
    // display: flex;
    // flex-direction: column;
    // align-items: flex-end;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>