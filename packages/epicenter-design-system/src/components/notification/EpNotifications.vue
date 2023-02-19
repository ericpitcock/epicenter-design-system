<template>
  <div
    class="ep-notifications"
    :style="position"
  >
    <div class="ep-notifications__header font-size--small">
      <p class="text--subtle">Notification Center</p>
      <p
        class="text--link"
        @click="clearNotifications"
      >Clear all</p>
    </div>
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
            v-for="notification in getInactiveNotifications"
            :key="notification.id"
            v-bind="notification"
            @dismiss="removeNotification(notification)"
          />
        </transition-group>
      </template>
    </ep-flex-container>
  </div>
</template>

<script>
  import EpFlexContainer from '../flexbox/EpFlexContainer'
  import EpNotification from '../notification/EpNotification'
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
      ...mapState([
        'notifications',
        'notificationCenterOpen'
      ]),
      ...mapGetters([
        'hasActiveNotifications',
        'getInactiveNotifications'
      ]),
      position() {
        return {
          top: this.top,
          right: this.right,
          bottom: this.bottom,
          left: this.left
        }
      },
      isNotificationsEmpty() {
        return this.notifications.length === 0
      }
    },
    methods: {
      removeNotification(notification) {
        this.$store.dispatch('removeNotification', notification)
      },
      clearNotifications() {
        this.$store.dispatch('clearNotifications')
      }
    }
  }
</script>
