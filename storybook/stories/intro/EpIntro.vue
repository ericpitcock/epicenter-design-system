<template>
  <div class="intro">
    <div class="hero">
      <div class="logo-container">
        <epicenter-logo />
      </div>
      <div class="copy-block">
        <h1 class="font-size--jumbo">
          Epicenter Design system
        </h1>
        <p class="monospace">
          { Vue, React } = componentsForApps
        </p>
        <ep-button
          label="View on GitHub"
          variant="primary"
          size="large"
          :icon-left="{ name: 'f/github', size: 30, weight: 'light' }"
          href="https://github.com/ericpitcock/epicenter-design-system"
        />
      </div>
    </div>
    <div class="content">
      <div class="main">
        <div class="copy-block">
          <p>
            This design system is being created for use in my personal projects
            and serves as a training ground to stay current on best practices
            for
            creating inclusive and user-friendly experiences for all.
          </p>
          <p>
            The aim of this Storybook is to showcase these components in their
            raw
            form and in the context of an app. <a
              class="text--link"
              href="https://ericpitcock.com"
            >Learn more</a>
          </p>
          <p>Note: React components in the works.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'
  import EpButton from '@/components/button/EpButton.vue'

  export default {
    name: 'IntroView',
    components: {
      EpicenterLogo,
      EpButton,
    }
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
      padding: 8rem 8rem 4rem 8rem;
      background:
        radial-gradient(circle 200px at -5% -10%, hsl(60, 100%, 50%), transparent),
        linear-gradient(130deg, hsl(164, 93%, 50%) 0%, var(--color--primary) 79%);
      color: var(--gray-440);
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
      padding: 4rem 8rem;
      background: var(--interface-surface);
      border-radius: 0 0 var(--border-radius--large) var(--border-radius--large);
      border: 1px solid var(--border-color);
      border-top: none;

      > *:not(:first-child) {
        margin-top: 2rem;
      }

      .main {
        flex: 3;

        .copy-block {
          margin-bottom: 2rem;
        }
      }

      .test-sites {
        flex: 1;
        display: flex;
      }
    }
  }
</style>
