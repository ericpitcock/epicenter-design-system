<template>
  <Teleport to="body">
    <div
      v-if="hasActiveNotifications"
      class="ep-temp-notification"
    >
      <EpNotification v-bind="getActiveNotifications[0]" />
    </div>
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
    // props: {
    //   type: {
    //     type: String,
    //     default: 'success',
    //   },
    //   message: {
    //     type: String,
    //     default: '',
    //   },
    //   duration: {
    //     type: Number,
    //     default: 3000,
    //   },
    //   onClose: {
    //     type: Function,
    //     default: () => {},
    //   },
    // },
    computed: {
      ...mapGetters([
        'getActiveNotifications',
        'hasActiveNotifications'
      ]),
      ...mapState(['notifications']),
    }
    // data() {
    //   return {
    //     show: false,
    //   };
    // },
    // mounted() {
    //   this.show = true
    // }
  }
</script>

<style lang="scss" scoped>
  .ep-temp-notification {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
  }
</style>