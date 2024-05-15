<template>
  <ep-container v-bind="computedContainerProps">
    <template #header>
      <ep-header>
        <template #left>
          <p>
            {{ notificationsTitle }}
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
    <ep-flex flex-props=",,column,,,,,1rem,">
      <ep-empty-state
        v-if="isNotificationsEmpty"
        :message="emptyStateMessage"
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
    </ep-flex>
  </ep-container>
</template>

<script>
  import EpContainer from '../container/EpContainer.vue'
  import EpEmptyState from '../empty-state/EpEmptyState.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpHeader from '../header/EpHeader.vue'
  import EpNotification from '../notification/EpNotification.vue'
  // import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'EpNotifications',
    components: {
      EpContainer,
      EpEmptyState,
      EpFlex,
      EpHeader,
      EpNotification
    },
    props: {
      containerProps: {
        type: Object,
        default: () => ({})
      },
      emptyStateMessage: {
        type: String,
        default: 'You’re all caught up!'
      },
      notificationsTitle: {
        type: String,
        default: 'Notifications'
      }
    },
    data() {
      return {
        defaultContainerProps: {
          width: '100%',
          height: '100%',
          containerPadding: '0 3rem',
          contentPadding: '2rem 0 3rem',
          overflow: 'auto'
        }
      }
    },
    computed: {
      // ...mapState([
      //   'notifications',
      //   'notificationCenterOpen'
      // ]),
      // ...mapGetters([
      //   'hasActiveNotifications',
      //   'getInactiveNotifications'
      // ]),
      computedContainerProps() {
        return {
          ...this.defaultContainerProps,
          ...this.containerProps
        }
      },
      isNotificationsEmpty() {
        return this.notifications.length === 0
      }
    },
    methods: {
      // removeNotification(notification) {
      //   this.$store.dispatch('removeNotification', notification)
      // },
      // clearNotifications() {
      //   this.$store.dispatch('clearNotifications')
      // }
    }
  }
</script>
