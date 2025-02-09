# EpNotifications



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `emptyStateMessage` | - | `string` | `'You’re all caught up!'` |
| `notificationsTitle` | - | `string` | `'Notifications'` |
| `notifications` | - | `array` | `[]` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `remove-notification` | - | - |
| `clear-notifications` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
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
            label="Clear all"
            @click="emit('clear-notifications')"
          />
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

<script setup>
  import { computed } from 'vue'
  import EpButton from '../button/EpButton.vue'
  import EpContainer from '../container/EpContainer.vue'
  import EpEmptyState from '../empty-state/EpEmptyState.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpHeader from '../header/EpHeader.vue'
  import EpNotification from '../notification/EpNotification.vue'

  defineOptions({
    name: 'EpNotifications'
  })

  const props = defineProps({
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

  const emit = defineEmits([
    'remove-notification',
    'clear-notifications'
  ])

  const isNotificationsEmpty = computed(() => {
    return props.notifications.length === 0
  })
</script>

```