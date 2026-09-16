<script setup lang="ts">
  import { EpBadge, EpButton, EpCheckbox, EpInput, EpToggle } from '@ericpitcock/epicenter-components-vue'
  import { onUnmounted, reactive, ref, watchEffect } from 'vue'

  import {
    DERIVED,
    applySeeds,
    clearSeeds,
    readDerived,
    serializeThemeCss,
  } from '../../../../storybook-shared/theme-presets.js'

  // The seeds are written onto <html> exactly as a consumer's theme.css writes
  // them onto :root. Every swatch and sample below is then read back from the
  // stylesheet, so what this story shows is what the CSS derives — not a JS
  // re-implementation of it.
  const primary = reactive({ l: 0.6, c: 0.2, h: 257 })
  const neutral = reactive({ c: 0, h: 0 })
  const contrast = ref('#ffffff')
  const accentShift = ref(15)
  const status = reactive({
    danger: '#ef4444',
    warning: '#f59e0b',
    success: '#16a34a',
    info: '#0ea5e9',
  })
  const link = ref('#0284c7')

  const derived = ref<Record<string, string>>({})
  const themeCss = ref('')
  const copied = ref(false)

  const seeds = () => ({
    '--primary-color': `oklch(${primary.l} ${primary.c} ${primary.h})`,
    '--primary-color--contrast': contrast.value,
    '--accent-hue-shift': String(accentShift.value),
    '--neutral-color': `oklch(0.5 ${neutral.c} ${neutral.h})`,
    '--status-danger-color': status.danger,
    '--status-warning-color': status.warning,
    '--status-success-color': status.success,
    '--status-info-color': status.info,
    '--link-color': link.value,
  })

  watchEffect(() => {
    const current = seeds()
    applySeeds(current)
    derived.value = readDerived()
    themeCss.value = serializeThemeCss(current)
    copied.value = false
  })

  // The seeds would otherwise leak into the next story.
  onUnmounted(() => clearSeeds())

  const copy = async () => {
    await navigator.clipboard?.writeText(themeCss.value)
    copied.value = true
  }

  const checked = ref(true)
  const toggled = ref(true)
  const text = ref('')

  const statuses = ['danger', 'warning', 'success', 'info'] as const
</script>

<template>
  <div class="theme-playground">
    <section class="theme-playground__controls">
      <h3>Primary</h3>
      <label>Lightness <span>{{ primary.l.toFixed(2) }}</span>
        <input
          v-model.number="primary.l"
          type="range"
          min="0.3"
          max="0.9"
          step="0.01"
        >
      </label>
      <label>Chroma <span>{{ primary.c.toFixed(3) }}</span>
        <input
          v-model.number="primary.c"
          type="range"
          min="0"
          max="0.35"
          step="0.005"
        >
      </label>
      <label>Hue <span>{{ primary.h }}°</span>
        <input
          v-model.number="primary.h"
          type="range"
          min="0"
          max="360"
          step="1"
        >
      </label>
      <label>Accent hue shift <span>{{ accentShift }}°</span>
        <input
          v-model.number="accentShift"
          type="range"
          min="-60"
          max="60"
          step="1"
        >
      </label>
      <label class="theme-playground__color">Text on primary
        <input
          v-model="contrast"
          type="color"
        >
      </label>

      <h3>Neutral</h3>
      <label>Chroma <span>{{ neutral.c.toFixed(3) }}</span>
        <input
          v-model.number="neutral.c"
          type="range"
          min="0"
          max="0.06"
          step="0.001"
        >
      </label>
      <label>Hue <span>{{ neutral.h }}°</span>
        <input
          v-model.number="neutral.h"
          type="range"
          min="0"
          max="360"
          step="1"
        >
      </label>

      <h3>Status &amp; links</h3>
      <label
        v-for="name in statuses"
        :key="name"
        class="theme-playground__color"
      >
        {{ name }}
        <input
          v-model="status[name]"
          type="color"
        >
      </label>
      <label class="theme-playground__color">link
        <input
          v-model="link"
          type="color"
        >
      </label>
    </section>

    <section class="theme-playground__preview">
      <h3>Derived ramp <small>read back from the stylesheet</small></h3>
      <div class="theme-playground__swatches">
        <div
          v-for="name in DERIVED"
          :key="name"
          class="theme-playground__swatch"
          :style="{ background: `var(${name})` }"
          :title="`${name}: ${derived[name]}`"
        >
          <span>{{ name.replace('--primary-color', 'primary').replace('--accent-color', 'accent') }}</span>
        </div>
      </div>

      <h3>Components</h3>
      <div class="theme-playground__row">
        <ep-button class="ep-button-var--primary">
          Primary
        </ep-button>
        <ep-button class="ep-button-var--secondary">
          Secondary
        </ep-button>
        <ep-button class="ep-button-var--outline">
          Outline
        </ep-button>
        <ep-button class="ep-button-var--success">
          Success
        </ep-button>
        <ep-button class="ep-button-var--danger">
          Danger
        </ep-button>
        <ep-button class="ep-button-var--warning">
          Warning
        </ep-button>
      </div>
      <div class="theme-playground__row">
        <ep-input
          v-model="text"
          label="Focus me"
        />
        <ep-checkbox
          v-model="checked"
          label="Checked"
        />
        <ep-toggle v-model="toggled" />
        <ep-badge label="Badge" />
        <a
          href="#"
          class="text-color--link"
          @click.prevent
        >A link</a>
        <span class="text-color--primary">Primary text</span>
      </div>

      <h3>Status</h3>
      <div class="theme-playground__row">
        <div
          v-for="name in statuses"
          :key="name"
          class="theme-playground__status"
          :style="{
            background: `var(--status-${name}-bg-color)`,
            borderColor: `var(--status-${name}-border-color)`,
            color: `var(--status-${name}-text-color)`,
          }"
        >
          {{ name }}
        </div>
      </div>

      <h3>theme.css <small>only the seeds — everything else derives</small></h3>
      <pre class="theme-playground__css">{{ themeCss }}</pre>
      <ep-button
        class="ep-button-var--secondary"
        @click="copy"
      >
        {{ copied ? 'Copied' : 'Copy theme.css' }}
      </ep-button>
    </section>
  </div>
</template>

<style scoped>
  /* Storybook-only demo; not a shipped component, so a scoped block is fine. */
  .theme-playground {
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: var(--space--8);
    padding: var(--space--6);
    color: var(--text-color);
    font-size: var(--font-size--default);
  }

  h3 {
    margin: var(--space--5) 0 var(--space--3);
    color: var(--text-color--loud);
    font-size: var(--font-size--default);
    font-variation-settings: var(--font-weight--semi-bold);
  }

  h3:first-child {
    margin-top: 0;
  }

  h3 small {
    margin-left: var(--space--2);
    color: var(--text-color--subtle);
    font-variation-settings: var(--font-weight--regular);
  }

  .theme-playground__controls label {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0 var(--space--2);
    margin-bottom: var(--space--3);
    text-transform: capitalize;
  }

  .theme-playground__controls label span {
    color: var(--text-color--subtle);
    font-variant-numeric: tabular-nums;
  }

  .theme-playground__controls input[type='range'] {
    grid-column: 1 / -1;
    width: 100%;
    accent-color: var(--primary-color);
  }

  .theme-playground__color {
    align-items: center;
  }

  .theme-playground__color input[type='color'] {
    width: 4rem;
    height: 2.4rem;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius--default);
    background: none;
  }

  .theme-playground__swatches {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
    gap: var(--space--2);
  }

  .theme-playground__swatch {
    display: flex;
    align-items: flex-end;
    height: 6rem;
    padding: var(--space--1) var(--space--2);
    border-radius: var(--border-radius--default);
    color: var(--primary-color--contrast);
    font-size: var(--font-size--tiny);
  }

  .theme-playground__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space--3);
    margin-bottom: var(--space--3);
  }

  .theme-playground__status {
    padding: var(--space--2) var(--space--4);
    border: 1px solid;
    border-radius: var(--border-radius--default);
    text-transform: capitalize;
  }

  .theme-playground__css {
    white-space: pre;
    padding: var(--space--3);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius--default);
    background: var(--interface-surface);
    font-family: var(--font-family--mono);
    font-size: var(--font-size--small);
    margin-bottom: var(--space--3);
  }
</style>
