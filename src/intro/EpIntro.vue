<template>
  <div class="intro">
    <!-- <ep-container height="100%" overflow="hidden"> -->
      <div class="hero">
        <div class="logo-container">
          <e
            faceColor="#fff16c"
            highlightColor="white"
            shadowColor="var(--gray-500)"
            strokeColor="var(--gray-500)"
          />
        </div>
        <h1 class="font-size--jumbo">E Design System</h1>
        <div class="yellow-circle"></div>
        <div class="purple-circle"></div>
      </div>
      <div class="copy-block">
        <p>Vue components designed and built by <a href="https://www.ericpitcock.com">Eric Pitcock</a>.</p>
        <p>Check out the code on <a href="https://github.com/ericpitcock/ep-design-system">GitHub</a>.</p>
      </div>
    <!-- </ep-container> -->
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
      padding: 8rem;
      background: linear-gradient(
        130deg,
        #0af6b7 0%,
        var(--color--primary) 89%
      );
      color: var(--gray-440);
      border-radius: var(--border-radius--large) var(--border-radius--large) 0 0;
      overflow: hidden;
      .logo-container {
        width: 8rem;
      }
      h1 {
        margin-top: 3rem;
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
    .copy-block {
      padding: 4rem 8rem;
      background: var(--background-3);
      border-radius: 0 0 var(--border-radius--large) var(--border-radius--large);
      border: 1px solid var(--border-color);
      border-top: none;
    }
  }
</style>