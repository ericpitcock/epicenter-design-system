<template>
  <div class="intro">
    <ep-container height="100%" overflow="hidden">
      <div class="hero">
        <div class="logo-container">
          <e
            faceColor="transparent"
            highlightColor="rgba(255, 255, 255, 0.1)"
            shadowColor="rgba(0, 0, 0, 0.1)"
            strokeColor="var(--gray-440)"
          />
        </div>
        <h1>E Design System</h1>
        <div class="yellow-circle"></div>
        <div class="purple-circle"></div>
      </div>
      <div class="copy-block">
        <p>Vue 3 components designed and built by <a href="https://www.ericpitcock.com">Eric Pitcock</a>.</p>
        <p>Check out the code on <a href="https://github.com/ericpitcock/ep-design-system">GitHub</a>.</p>
      </div>
    </ep-container>
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
  .intro {
    height: 100%;
    padding: 3rem;
    .hero {
      position: relative;
      padding: 8rem 10rem;
      background: linear-gradient(
        130deg,
        #0af6b7 0%,
        var(--color--primary) 89%
      );
      color: var(--gray-440);
      overflow: hidden;
      h1 {
        margin-top: 3rem;
      }
      .yellow-circle {
        position: absolute;
        top: -50%;
        left: -40%;
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
    .copy-block {
      padding: 4rem 10rem;
    }
    .logo-container {
      width: 8rem;
    }
  }
</style>