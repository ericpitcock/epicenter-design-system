<template>
  <Teleport to="body">
  <div class="ep-notifications">
    <transition-group name="ep-notification" tag="div">
      <EpNotification
        v-for="notification in notifications"
        :key="notification.id"
        :id="notification.id"
        :message="notification.message"
        :duration="notification.duration"
        @dismiss="dismissNotification(notification.id)"
      />
    </transition-group>
  </div>
  </Teleport>
</template>

<script>
  import EpNotification from '@/molecules/notification/EpNotification'
  import { mapState } from 'vuex'

  export default {
    name: 'EpNotifications',
    components: {
      EpNotification
    },
    computed: {
      ...mapState(['notifications'])
    },
    methods: {
      dismissNotification(id) {
        this.$store.dispatch('removeNotification', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-notifications {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  // .ep-notification {
  //   position: relative;
  //   margin: 1rem;
  //   padding: 1rem;
  //   background-color: #fff;
  //   border: 1px solid #ccc;
  //   border-radius: 4px;
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //   &-enter-active,
  //   &-leave-active {
  //     transition: all 0.5s;
  //   }
  //   &-enter,
  //   &-leave-to {
  //     opacity: 0;
  //     transform: translateY(30px);
  //   }
  // }
</style>