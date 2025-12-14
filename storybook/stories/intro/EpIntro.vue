<template>
  <div class="intro">
    <div class="hero">
      <div class="logo-container">
        <epicenter-logo :style="{ '--logo-stroke-width': 4 }" />
      </div>
      <div class="copy-block">
        <h1 class="font-size--jumbo">
          Epicenter Design System
        </h1>
        <p class="monospace">
          { Vue, React } = componentsForApps
        </p>
        <ep-flex class="gap-10">
          <ep-button
            v-for="(btn, index) in buttons"
            :key="index"
            class="hero-btn"
            v-bind="btn.props"
          >
            <template #icon-left>
              <component :is="btn.icon" />
            </template>
            {{ btn.props.label }}
          </ep-button>
        </ep-flex>
      </div>
    </div>
  </div>
</template>

<script setup>
  import DocumentCode from '@ericpitcock/epicenter-icons/epicenter-icons/DocumentCode'
  import Github from '@ericpitcock/epicenter-icons/epicenter-icons/Github'

  import EpButton from '@/components/button/EpButton.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'

  const buttons = [
    {
      props: {
        href: 'https://github.com/ericpitcock/epicenter-design-system',
        label: 'GitHub',
        size: 'large',
      },
      icon: Github,
    },
    {
      props: {
        href: 'https://docs.epicenter.design',
        label: 'Docs',
        size: 'large',
      },
      icon: DocumentCode,
    },
  ]
</script>

<style lang="scss" scoped>
  :root {
    --intro-hero-link-color: var(--text-color--inverse);
  }

  html[data-color-theme='light'] {
    --intro-hero-link-color: var(--text-color);
  }

  .intro {
    max-width: 120rem;
    height: 100%;
    padding: 3rem;

    .hero {
      position: relative;
      height: 100%;
      padding: 6rem 6rem 4rem 6rem;
      background: var(--gradient-bg);
      color: hsl(var(--gray-440));
      border-radius: var(--border-radius--large);
      overflow: hidden;

      .copy-block {
        position: relative;
        z-index: var(--z-index--overlap);

        p {
          font-variation-settings: "wght" 430;
          margin-bottom: 2rem;
        }
      }

      .logo-container {
        position: relative;
        z-index: var(--z-index--overlap);
        width: 8rem;
      }

      h1 {
        position: relative;
        z-index: var(--z-index--overlap);
        margin-top: 3rem;
        color: var(--text-color--inverse);

        html[data-color-theme='light'] & {
          color: var(--text-color);
        }
      }

      .hero-link {
        color: var(--intro-hero-link-color);
        text-decoration: underline;

        &:hover {
          color: var(--gray-440);
          text-decoration: none;
        }
      }

      .hero-btn {
        --ep-button-bg-color: #242424;
        --ep-button-border-color: #242424;
        --ep-button-text-color: #e6e6e6;
        --ep-button-hover-bg-color: black;
        --ep-button-hover-border-color: black;
        --ep-button-hover-text-color: #e6e6e6;
      }

      .hero-icon {
        --ep-icon-width: 2rem;
        --ep-icon-stroke-width: 1.5;
      }
    }
  }
</style>
