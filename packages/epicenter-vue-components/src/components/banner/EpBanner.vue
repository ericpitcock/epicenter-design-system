<template>
  <div class="ep-banner">
    <div class="ep-banner__color-strip" />
    <div class="ep-banner__body">
      <div
        v-if="$slots.icon"
        class="ep-banner__body__icon"
      >
        <!-- @slot Icon displayed at the start of the banner -->
        <slot name="icon" />
      </div>
      <div class="ep-banner__body__message">
        <div class="ep-banner__body__message__text font-size--small">
          <!-- @slot Main message content of the banner -->
          <slot name="message" />
        </div>
        <div
          v-if="$slots.subtext"
          class="ep-banner__body__message__subtext"
        >
          <!-- @slot Secondary message or additional information -->
          <slot name="subtext" />
        </div>
      </div>
      <!-- @slot Dismiss button or action. Receives dismissBanner function as scoped prop. -->
      <slot
        name="dismiss"
        v-bind="{ dismissBanner }"
      />
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBanner'
  })

  const emit = defineEmits([
    /**
     * Emitted when the banner is dismissed.
     */
    'dismissed'
  ])
  const dismissBanner = () => emit('dismissed')
</script>
