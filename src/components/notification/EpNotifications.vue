<template>
  <Teleport to="body">
  <div v-if="notificationCenterOpen || hasActiveNotifications" class="ep-notifications" :style="position">
    <ep-flex-container
      flexFlow="column nowrap"
      gap="1rem"
    >
    <div
      v-if="isNotificationsEmpty"
      class="ep-notifications--empty"
    >
      <p>You have no notifications</p>
    </div>
    <template v-else>
    <transition-group name="fade">
      <EpNotification
        v-for="notification in filteredNotifications"
        :key="notification.id"
        :id="notification.id"
        :message="`${notification.message} ${notification.id}`"
        :type="notification.type"
        @dismiss="removeNotification(notification)"
      />
    </transition-group>
    </template>
    </ep-flex-container>
  </div>
  </Teleport>
</template>

<script>
  import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
  import EpNotification from '@/components/notification/EpNotification'
  import { mapState, mapGetters } from 'vuex'

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
      ...mapState(['notifications', 'notificationCenterOpen']),
      ...mapGetters(['hasActiveNotifications']),
      position() {
        return {
          top: this.top,
          right: this.right,
          bottom: this.bottom,
          left: this.left
        }
      },
      filteredNotifications() {
        return this.hasActiveNotifications
          ? this.notifications.filter(notification => notification.active)
          : this.notifications
      },
      isNotificationsEmpty() {
        return this.notifications.length === 0
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
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>