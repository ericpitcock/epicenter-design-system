<script setup lang="ts">
  import { computed } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpContainer from '../container/EpContainer.vue'
  import EpEmptyState from '../empty-state/EpEmptyState.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpHeader from '../header/EpHeader.vue'
  import EpNotification from '../notification/EpNotification.vue'

  interface NotificationItem {
    id: string
    message: string
    timestamp?: string
  }

  interface EpNotificationsProps {
    emptyStateMessage?: string
    notifications?: NotificationItem[]
    notificationsTitle?: string
  }

  const props = withDefaults(defineProps<EpNotificationsProps>(), {
    emptyStateMessage: 'You\u2019re all caught up!',
    notifications: () => [],
    notificationsTitle: 'Notifications',
  })

  const emit = defineEmits<{
    'remove-notification': [id: string]
    'clear-notifications': []
  }>()

  const isNotificationsEmpty = computed(() => {
    return props.notifications.length === 0
  })
</script>

<template>
  <ep-container class="ep-container-default ep-container--sticky-header">
    <template #header>
      <ep-header>
        <template #left>
          <h2>
            {{ notificationsTitle }}
          </h2>
        </template>
        <template #right>
          <ep-button
            v-show="!isNotificationsEmpty"
            @click="emit('clear-notifications')"
          >
            Clear all
          </ep-button>
        </template>
      </ep-header>
    </template>
    <ep-empty-state v-if="isNotificationsEmpty">
      {{ emptyStateMessage }}
    </ep-empty-state>
    <template v-else>
      <ep-flex class="flex-col gap-10">
        <transition-group name="fade">
          <EpNotification
            v-for="notification in notifications"
            :key="notification.id"
            v-bind="notification"
            @dismiss="emit('remove-notification', notification.id)"
          />
        </transition-group>
      </ep-flex>
    </template>
  </ep-container>
</template>
