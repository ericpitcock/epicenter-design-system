# EpBanner



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `dissmissable` | Whether the banner can be dismissed. | `boolean` | `false` |
| `iconProps` | The icon properties. | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `dismissed` | Emitted when the banner is dismissed. | - |

## Slots
| Name | Description |
|------|-------------|
| `message` | The main text of the banner. |
| `subtext` | The secondary text of the banner. |

## Component Code

```vue
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

```


## Styles (SCSS)

```scss
:root {
  --ep-banner-color-strip-bg: var(--color--primary);
  --ep-banner-bg-color: var(--interface-overlay);
  --ep-banner-border-color: var(--border-color--lighter);
  --ep-banner-text-color: var(--text-color--loud);
  --ep-banner-subtext-color: var(--text-color--subtle);
  --ep-banner-dismiss-button-color: var(--text-color);
  --ep-banner-dismiss-button-hover-bg-color: transparent;
  --ep-banner-dismiss-button-hover-text-color: var(--text-color);
  --ep-banner-dismiss-button-active-bg-color: transparent;
  --ep-banner-dismiss-button-active-text-color: var(--text-color);
}

.ep-banner {
  display: flex;
  width: 100%;
  min-width: 30rem;
  max-width: 60rem;

  &__color-strip {
    width: .5rem;
    background: var(--ep-banner-color-strip-bg);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
    background-color: var(--ep-banner-bg-color);
    padding: 1.2rem 2rem;
    border: 1px solid var(--ep-banner-border-color);
    border-left: none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;

    &__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 2.4rem;
      height: 2.4rem;
    }

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: .25rem;
      height: 100%;

      &__text {
        line-height: var(--text-line-height--tight);
        color: var(--ep-banner-text-color);
      }

      &__subtext {
        font-size: var(--font-size--tiny);
        color: var(--ep-banner-subtext-color);
      }
    }
  }
}
```