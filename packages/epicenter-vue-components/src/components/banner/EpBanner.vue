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
        class="ep-button-var--ghost"
        :icon-right="{ name: 'close' }"
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
</script>
