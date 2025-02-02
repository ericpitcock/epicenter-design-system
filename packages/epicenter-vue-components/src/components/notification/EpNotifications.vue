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
            @click="emit('clear-notifications')"
          >
            Clear all
          </p>
        </template>
      </ep-header>
    </template>
    <ep-flex class="flex-col gap-10">
      <ep-empty-state
        v-if="isNotificationsEmpty"
        :message="emptyStateMessage"
      />
      <template v-else>
        <transition-group name="fade">
          <EpNotification
            v-for="notification in notifications"
            :key="notification.id"
            v-bind="notification"
            @dismiss="emit('remove-notification', notification.id)"
          />
        </transition-group>
      </template>
    </ep-flex>
  </ep-container>
</template>

<script setup>
  import { computed } from 'vue'
  import EpContainer from '../container/EpContainer.vue'
  import EpEmptyState from '../empty-state/EpEmptyState.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpHeader from '../header/EpHeader.vue'
  import EpNotification from '../notification/EpNotification.vue'

  defineOptions({
    name: 'EpNotifications'
  })

  const props = defineProps({
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
    },
    notifications: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits(['remove-notification', 'clear-notifications'])

  const defaultContainerProps = {
    style: {
      '--ep-container-width': '100%',
      '--ep-container-height': '100%',
      '--ep-container-padding': '0 3rem',
      '--ep-container-bg-color': 'var(--interface-surface)',
      '--ep-container-border-width': '0.1rem',
      '--ep-container-content-padding': '2rem 0 3rem',
      '--ep-container-overflow': 'auto'
    }
  }

  const computedContainerProps = computed(() => {
    return {
      ...defaultContainerProps,
      ...props.containerProps
    }
  })

  const isNotificationsEmpty = computed(() => {
    return props.notifications.length === 0
  })
</script>
