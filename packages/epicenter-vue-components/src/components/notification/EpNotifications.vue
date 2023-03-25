<template>
  <div class="ep-notifications">
    <div class="ep-notifications__header font-size--small">
      <p class="text--subtle">
        Notification Center
      </p>
      <p
        v-show="!isNotificationsEmpty"
        class="text--link"
        @click="clearNotifications"
      >
        Clear all
      </p>
    </div>
    <ep-flex-container
      flex-flow="column nowrap"
      gap="1rem"
    >
      <ep-empty-state
        v-if="isNotificationsEmpty"
        message="You’re all caught up!"
      />
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
  import EpEmptyState from '../empty-state/EpEmptyState.vue'
  import EpFlexContainer from '../flexbox/EpFlexContainer.vue'
  import EpNotification from '../notification/EpNotification.vue'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'EpNotifications',
    components: {
      EpEmptyState,
      EpFlexContainer,
      EpNotification
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
