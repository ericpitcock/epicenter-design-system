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

<script setup>
  import { useTimeAgo } from '@vueuse/core'

  import EpButton from '../button/EpButton.vue'

  const props = defineProps({
    /**
     * Unique identifier for the notification.
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The notification message text to display.
     */
    message: {
      type: String,
      required: true
    },
    /**
     * ISO 8601 timestamp string for when the notification was created.
     */
    timestamp: {
      type: String,
      default: () => new Date().toISOString(),
      validator: (value) => {
        const date = new Date(value)
        return !isNaN(date.getTime()) && value === date.toISOString()
      }
    },
  })

  const emit = defineEmits(['dismiss'])

  const dismissNotification = () => {
    emit('dismiss')
  }
</script>
