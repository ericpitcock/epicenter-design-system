<template>
  <div class="ep-banner">
    <div class="ep-banner__color-strip" />
    <div class="ep-banner__body">
      <div
        v-if="iconProps.name"
        class="ep-banner__body__icon"
      >
        <ep-icon v-bind="iconProps" />
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
      <ep-button
        v-if="dissmissable"
        class="dismiss-button"
        variant="ghost"
        :icon-right="{ name: 'close' }"
        :style="dissmissButtonStyles"
        @click="dismissBanner"
      />
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBanner'
  })

  import EpButton from '../button/EpButton.vue'
  import EpIcon from '../icon/EpIcon.vue'

  const props = defineProps({
    /**
     * Whether the banner can be dismissed.
     */
    dissmissable: {
      type: Boolean,
      default: false
    },
    /**
     * The icon properties.
     */
    iconProps: {
      type: Object,
      default: () => ({})
    },
  })

  const emit = defineEmits([
    /**
     * Emitted when the banner is dismissed.
     */
    'dismissed'
  ])
  const dismissBanner = () => emit('dismissed')

  const dissmissButtonStyles = {
    '--ep-button-bg-color': 'transparent',
    '--ep-button-border-color': 'transparent',
    '--ep-button-text-color': 'var(--ep-banner-dismiss-button-color)',
    '--ep-button-hover-bg-color': 'var(--ep-banner-dismiss-button-hover-bg-color)',
    '--ep-button-hover-border-color': 'transparent',
    '--ep-button-hover-text-color': 'var(--ep-banner-dismiss-button-hover-text-color)',
    '--ep-button-active-bg-color': 'var(--ep-banner-dismiss-button-active-bg-color)',
    '--ep-button-active-border-color': 'transparent',
    '--ep-button-active-text-color': 'var(--ep-banner-dismiss-button-active-text-color)',
  }
</script>
