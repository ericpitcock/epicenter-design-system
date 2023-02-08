<template>
  <div class="intro">
    <div class="hero">
      <div class="logo-container">
        <e faceColor="#fff16c" highlightColor="white" shadowColor="var(--gray-500)" strokeColor="var(--gray-500)" />
      </div>
      <div class="copy-block">
        <h1 class="font-size--jumbo">Epicenter Design System</h1>
        <p>Vue components designed and built by <a class="hero-link" href="https://www.ericpitcock.com">Eric Pitcock</a>.</p>
      </div>  
      <div class="yellow-circle"></div>
      <div class="purple-circle"></div>
    </div>
    <div class="content">
      <div class="copy-block">
        <p>This design system is being created for use in my personal projects and serves as a training ground to stay current on best practices for creating inclusive and user-friendly experiences for all.</p>
        <p>The aim of this Storybook is to showcase these components in their raw form and in the context of a website or application.</p>
      </div>
      <ep-banner :iconProps="{ name: 'info' }" message="This is a forever project, and probably being worked on as you read this, so you may experience bugs or inconsistencies." />
    </div>
  </div>
</template>

<script>
  import E from '@/components/logo/E'
  import EpBanner from '@/components/banner/EpBanner'
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'Intro',
    components: {
      E,
      EpBanner,
      EpContainer
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
      padding: 8rem;
      background: linear-gradient(130deg, #0af6b7 0%, var(--color--primary) 89%);
      color: var(--gray-440);
      border-radius: var(--border-radius--large) var(--border-radius--large) 0 0;
      overflow: hidden;
      .copy-block {
        position: relative;
        z-index: var(--z-index--overlap);
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
      }
      .hero-link {
        color: var(--intro-hero-link-color);
        text-decoration: underline;
        &:hover {
          color: var(--gray-440);
          text-decoration: none;
        }
      }
      .yellow-circle {
        position: absolute;
        top: -17rem;
        left: -40rem;
        width: 60rem;
        height: 30rem;
        border-radius: 50%;
        background: rgb(255, 255, 0);
        opacity: 1;
        filter: blur(100px);
      }
      .purple-circle {
        position: absolute;
        bottom: -50%;
        right: -20%;
        width: 60rem;
        height: 30rem;
        border-radius: 50%;
        background: rgb(212, 12, 85);
        opacity: 0.8;
        filter: blur(150px);
      }
    }
    .content {
      padding: 4rem 8rem;
      background: var(--background-3);
      border-radius: 0 0 var(--border-radius--large) var(--border-radius--large);
      border: 1px solid var(--border-color);
      border-top: none;
      // all children except the first get a top margin
      > *:not(:first-child) {
        margin-top: 2rem;
      }
    }
  }
</style>
