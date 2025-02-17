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
        :icon-right="{ name: 'close' }"
        :style="{
          '--ep-button-bg-color': 'transparent',
          '--ep-button-border-color': 'transparent',
          '--ep-button-hover-bg-color': 'transparent',
          '--ep-button-hover-border-color': 'transparent',
          '--ep-button-active-bg-color': 'transparent',
          '--ep-button-active-border-color': 'transparent',
        }"
        @click.stop="dismissNotification"
      />
    </div>
  </div>
</template>

<script setup>
  import { useTimeAgo } from '@vueuse/core'

  import EpButton from '../button/EpButton.vue'

  defineOptions({
    name: 'EpNotification',
  })

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
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
