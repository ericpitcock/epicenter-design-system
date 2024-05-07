<template>
  <div
    class="ep-banner"
    :style="styles"
  >
    <div class="ep-banner__color-strip" />
    <div class="ep-banner__body">
      <div
        v-if="iconProps.name"
        class="ep-banner__body__icon"
      >
        <ep-icon v-bind="iconProps" />
      </div>
      <div class="ep-banner__body__message">
        <p class="ep-banner__body__message__text font-size--small">
          <slot name="message" />
        </p>
        <p
          v-if="$slots.subtext"
          class="ep-banner__body__message__subtext"
        >
          <slot name="subtext" />
        </p>
      </div>
      <div
        v-if="dissmissable"
        class="dismiss-button"
      >
        <ep-button
          class="dismiss-button"
          variant="ghost"
          :icon-right="{ name: 'close' }"
          :styles="dissmissButtonStyles"
          @click="dismissNotification"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import EpButton from '../button/EpButton.vue'
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpBanner',
    components: {
      EpButton,
      EpIcon
    },
    props: {
      dissmissable: {
        type: Boolean,
        default: false
      },
      iconProps: {
        type: Object,
        default: () => ({})
      },
      styles: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['dismiss'],
    data() {
      return {
        dissmissButtonStyles: {
          '--ep-button-bg-color': 'transparent',
          '--ep-button-border-color': 'transparent',
          '--ep-button-text-color': 'var(--ep-banner-dismiss-button-color)',
          '--ep-button-hover-bg-color': 'var(--ep-banner-dismiss-button-hover-bg-color)',
          '--ep-button-hover-border-color': 'transparent',
          '--ep-button-hover-text-color': 'var(--ep-banner-dismiss-button-hover-text-color)',
          '--ep-button-active-bg-color': 'var(--ep-banner-dismiss-button-active-bg-color)',
          '--ep-button-active-border-color': 'transparent',
          '--ep-button-active-text-color': 'var(--ep-banner-dismiss-button-active-text-color)',
        },
      }
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      }
    }
  }
</script>
