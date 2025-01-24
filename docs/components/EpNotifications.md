# EpNotifications



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `containerProps` | - | `object` | `{}` |
| `emptyStateMessage` | - | `string` | `'You’re all caught up!'` |
| `notificationsTitle` | - | `string` | `'Notifications'` |
| `notifications` | - | `array` | `[]` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `clear-notifications` | - | - |
| `remove-notification` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
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
            @click="$emit('clear-notifications')"
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
            @dismiss="$emit('remove-notification', notification.id)"
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
      },
      notifications: {
        type: Array,
        default: () => []
      }
    },
    emits: ['remove-notification', 'clear-notifications'],
    data() {
      return {
        defaultContainerProps: {
          styles: {
            '--ep-container-width': '100%',
            '--ep-container-height': '100%',
            '--ep-container-padding': '0 3rem',
            '--ep-container-bg-color': 'var(--interface-surface)',
            '--ep-container-content-padding': '2rem 0 3rem',
            '--ep-container-overflow': 'auto'
          }
        }
      }
    },
    computed: {
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
  }
</script>

```


## Styles

```scss
.ep-notifications {
  --ep-notifications-padding: 0 2rem 2rem 2rem;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
  padding: var(--ep-notifications-padding);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.1rem;
  }
}
```