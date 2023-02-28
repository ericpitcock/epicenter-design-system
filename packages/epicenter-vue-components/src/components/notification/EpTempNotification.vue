<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="hasActiveNotifications"
        class="ep-temp-notification"
      >
        <EpNotification
          v-bind="getActiveNotifications[0]"
          @dismiss="removeNotification(getActiveNotifications[0])"
        />
      </div>
    </transition>
  </Teleport>
</template>

<script>
  import EpNotification from './EpNotification.vue'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'EpTempNotification',
    components: {
      EpNotification,
    },
    computed: {
      ...mapGetters([
        'getActiveNotifications',
        'hasActiveNotifications'
      ]),
      ...mapState(['notifications']),
    },
    methods: {
      removeNotification(notification) {
        this.$store.dispatch('removeNotification', notification)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ep-temp-notification {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: var(--z-index--modal);
    // deep selector to override EpNotification styles
    :deep(.ep-notification) {
      box-shadow: var(--drop-shadow);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>