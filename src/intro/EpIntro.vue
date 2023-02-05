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
        <p>This project began as a way to design and build reusable components for my own projects, but it has since evolved into a comprehensive learning experience. Through the process of creating these components, I’ve gained a deeper understanding of how design systems can be used to create user-friendly and accessible experiences for all users.</p>
        <p>This is a forever project, and probably being worked on as you read this, so you may experience bugs or inconsistencies.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import E from '@/components/logo/E'
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'Intro',
    components: {
      E,
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
    }
  }
</style>
