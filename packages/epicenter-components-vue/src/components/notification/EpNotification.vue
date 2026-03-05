<script setup lang="ts">
  import { useTimeAgo } from '@vueuse/core'

  import EpButton from '../button/EpButton.vue'

  interface EpNotificationProps {
    /** Unique identifier for the notification. */
    id: string
    /** The notification message text to display. */
    message: string
    /** ISO 8601 timestamp string for when the notification was created. */
    timestamp?: string
  }

  const props = withDefaults(defineProps<EpNotificationProps>(), {
    timestamp: () => new Date().toISOString(),
  })

  const emit = defineEmits<{
    dismiss: []
  }>()

  const dismissNotification = (): void => {
    emit('dismiss')
  }
</script>

<template>
  <div class="ep-notification">
    <div class="ep-notification__color-strip" />
    <div class="ep-notification__body">
      <div class="ep-notification__message">
        <p class="ep-notification__message__text font-size--small">
          {{ message }}
        </p>
        <p class="ep-notification__message__timestamp">
          {{ useTimeAgo(timestamp) }}
        </p>
      </div>
      <ep-button
        class="ep-button-var--ghost"
        @click.stop="dismissNotification"
      >
        <template #icon-right>
          close icon
        </template>
      </ep-button>
    </div>
  </div>
</template>
