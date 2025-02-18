<template>
  <div class="intro">
    <div class="hero">
      <div class="logo-container">
        <epicenter-logo :style="{ '--logo-stroke-width': 4 }" />
      </div>
      <div class="copy-block">
        <h1 class="font-size--jumbo">
          Epicenter Design system
        </h1>
        <p class="monospace">
          { Vue, React } = componentsForApps
        </p>
        <ep-button v-bind="buttonProps" />
      </div>
    </div>
    <div class="content">
      <div class="main">
        <div class="copy-block">
          <p>Note: React components are coming in the future.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'
  import EpButton from '@/components/button/EpButton.vue'

  const buttonProps = {
    href: 'https://github.com/ericpitcock/epicenter-design-system',
    iconLeft: {
      name: 'f-github',
      style: {
        '--ep-icon-width': '2rem',
        '--ep-icon-stroke-width': 1.5,
      },
    },
    label: 'GitHub',
    size: 'large',
    style: {
      '--ep-button-bg-color': '#242424',
      '--ep-button-border-color': '#242424',
      '--ep-button-text-color': '#e6e6e6',
      '--ep-button-hover-bg-color': 'black',
      '--ep-button-hover-border-color': 'black',
      '--ep-button-hover-text-color': '#e6e6e6',
    },
  }
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
      padding: 6rem 6rem 4rem 6rem;
      background: var(--gradient-bg);
      color: hsl(var(--gray-440));
      border-radius: var(--border-radius--large) var(--border-radius--large) 0 0;
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
    }

    .content {
      display: flex;
      gap: 3rem;
      padding: 4rem 6rem;
      background: var(--interface-surface);
      border-radius: 0 0 var(--border-radius--large) var(--border-radius--large);
      border: 1px solid var(--border-color);
      border-top: none;

      > *:not(:first-child) {
        margin-top: 2rem;
      }

      .main {
        flex: 3;
      }

      .test-sites {
        flex: 1;
        display: flex;
      }
    }
  }
</style>
