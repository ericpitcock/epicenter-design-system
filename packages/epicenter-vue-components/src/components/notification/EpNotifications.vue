<template>
  <ep-container
    width="100%"
    height="100%"
    container-padding="0 3rem"
    content-padding="2rem 0 3rem"
    overflow="auto"
  >
    <template #header>
      <ep-header>
        <template #left>
          <p>
            Notification Center
          </p>
        </template>
        <template #right>
          <p
            v-show="!isNotificationsEmpty"
            class="text--link"
            @click="clearNotifications"
          >
            Clear all
          </p>
        </template>
      </ep-header>
    </template>
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
  </ep-container>
</template>

<script>
  import EpContainer from '../container/EpContainer.vue'
  import EpEmptyState from '../empty-state/EpEmptyState.vue'
  import EpFlexContainer from '../flexbox/EpFlexContainer.vue'
  import EpHeader from '../header/EpHeader.vue'
  import EpNotification from '../notification/EpNotification.vue'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'EpNotifications',
    components: {
      EpContainer,
      EpEmptyState,
      EpFlexContainer,
      EpHeader,
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
