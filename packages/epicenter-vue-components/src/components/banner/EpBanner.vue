<template>
  <div class="ep-banner">
    <div class="ep-banner__color-strip" />
    <div class="ep-banner__body">
      <div
        v-if="$slots.icon"
        class="ep-banner__body__icon"
      >
        <!--
          @slot icon - The icon to display in the banner.
        -->
        <slot name="icon" />
      </div>
      <div class="ep-banner__body__message">
        <div class="ep-banner__body__message__text font-size--small">
          <!--
            @slot message - The main text of the banner.
          -->
          <slot name="message" />
        </div>
        <div
          v-if="$slots.subtext"
          class="ep-banner__body__message__subtext"
        >
          <!--
            @slot subtext - The secondary text of the banner.
          -->
          <slot name="subtext" />
        </div>
      </div>
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
