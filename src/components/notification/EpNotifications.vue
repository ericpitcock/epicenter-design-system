<template>
  <div class="ep-notifications" :style="position">
    <div class="ep-notifications__header font-size--small">
      <p class="text--subtle">Notification Center</p>
      <p class="text--link" @click="clearNotifications">Clear all</p>
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

<style lang="scss" scoped>
  .ep-notifications {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: center;
    padding: 0 2rem 2rem 2rem;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4.1rem;
    }
  }
  .ep-notifications--empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: var(--background-2);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>