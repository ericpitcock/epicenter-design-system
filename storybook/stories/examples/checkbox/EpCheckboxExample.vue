<template>
  <ep-container
    max-width="120rem"
    height="100%"
    container-padding="0 3rem"
    overflow="auto"
    :background-color="bgColor"
  >
    <template #header>
      <ep-header
        left-flex="0 0 20rem"
        right-flex="0 0 20rem"
        item-gap="0"
        center-gap="3rem"
        background-color="transparent"
      >
        <template #left>
          <h1>Font Finder</h1>
        </template>
        <template #center>
          <ep-input
            v-model="typeSample"
            height="3.8rem"
            background-color="var(--background-1)"
            placeholder="Enter your sample text here"
          />
          <div class="font-size-control">
            <p class="font-size--tiny text--subtle">
              Font Size: {{ fontSize }}px
            </p>
            <input
              v-model="fontSize"
              type="range"
              min="8"
              max="64"
              class="ep-range"
            >
          </div>
        </template>
        <template #right>
          <ep-theme-toggle />
        </template>
      </ep-header>
    </template>
    <template #default>
      <div class="container">
        <div class="filters">
          <p class="text--subtle">
            {{ filteredFonts.length }} fonts
          </p>
          <h3>Currated</h3>
          <ep-checkbox
            v-for="checkbox in currated"
            :key="checkbox.label"
            v-bind="checkbox"
            v-model="checkbox.checked"
          />
          <template
            v-for="(filterSet, category) in filters"
            :key="category"
          >
            <h3 class="capitalize">
              {{ category }}
            </h3>
            <ep-checkbox
              v-for="checkbox in filterSet"
              :key="checkbox.label"
              v-bind="checkbox"
              v-model="checkbox.checked"
            />
          </template>
        </div>
        <div class="font-list-container">
          <ep-empty-state
            v-if="ready && filteredFonts.length === 0 || ready && typeSample.length === 0"
            :message="emptyStateMessage"
          >
            <template #cta>
              <p v-if="filteredFonts.length === 0">
                Try adding a category or <span
                  class="text--link"
                  @click="recommendedOnly = !recommendedOnly"
                >turning off Top Picks</span>
              </p>
              <p v-else>
                <span
                  class="text--link"
                  @click="typeSample = defaultTypeSample"
                >Reset sample text</span>
              </p>
            </template>
          </ep-empty-state>
          <div
            v-else
            class="font-list"
          >
            <div
              v-for="font in filteredFonts"
              :key="font.family"
              class="font"
            >
              <font-container
                :font="font"
                :font-size="fontSize"
                :sample="typeSample"
                @font-loaded="onFontLoaded"
              />
              <div class="font__meta">
                <p>{{ font.family }}</p>
                <p class="capitalize">{{ font.category }}</p>
                <p>{{ fontInfo(font) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ep-container>
</template>

<script>
  import faker from 'faker'
  import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'
  import EpHeader from '@/components/header/EpHeader.vue'
  import EpInput from '@/components/input/EpInput.vue'
  import EpThemeToggle from '@/components/theme-toggle/EpThemeToggle.vue'
  import FontContainer from './FontContainer.vue'

  export default {
    name: 'EpCheckboxExample',
    components: {
      EpCheckbox,
      EpContainer,
      EpEmptyState,
      EpHeader,
      EpInput,
      EpThemeToggle,
      FontContainer,
    },
    data() {
      return {
        bgColor: 'var(--background-2)',
        currated: [
          {
            id: faker.datatype.uuid(),
            name: 'currated',
            value: 'topPicks',
            checked: false,
            label: 'Top Picks',
            disabled: false
          },
          {
            id: faker.datatype.uuid(),
            name: 'currated',
            value: 'uiFonts',
            checked: false,
            label: 'UI Fonts',
            disabled: false
          }
        ],
        filters: {
          category: [
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'sans-serif',
              checked: true,
              label: 'Sans Serif',
              disabled: false
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'serif',
              checked: true,
              label: 'Serif',
              disabled: false
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'display',
              checked: true,
              label: 'Display',
              disabled: false
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'handwriting',
              checked: true,
              label: 'Handwritng',
              disabled: false
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'monospace',
              checked: true,
              label: 'Monospace',
              disabled: false
            }
          ],
        },
        fonts: [],
        fontsLoaded: 0,
        fontSize: '32',
        ready: false,
        topPicks: [
          'Archivo',
          'Archivo Narrow',
          'Asap',
          'Asap Condensed',
          'Bai Jamjuree',
          'Barlow',
          'Barlow Condensed',
          'Barlow Semi Condensed',
          'Be Vietnam',
          'Chivo',
          'DM Sans',
          'Exo 2',
          'Fira Sans',
          'Fira Sans Condensed',
          'Fira Sans Extra Condensed',
          'Gudea',
          'IBM Plex Sans',
          'IBM Plex Sans Condensed',
          'Inter',
          'Inter Tight',
          'Karla',
          'Lato',
          'Lekton',
          'Libre Franklin',
          'M PLUS 1p',
          'M PLUS Rounded 1c',
          'Mada',
          'News Cycle',
          'Nunito',
          'Nunito Sans',
          'Open Sans',
          'Open Sans Condensed',
          'Oswald',
          'Pragati Narrow',
          'Public Sans',
          'Quattrocento Sans',
          'Quicksand',
          'Roboto',
          'Roboto Condensed',
          'Sarabun',
          'Source Sans Pro',
          'Work Sans',
          'Yantramanav',
          // serif 28
          'Abhaya Libre',
          'Adamina',
          'Aleo',
          'Alice',
          'Alike',
          'Alike Angular',
          'Amethysta',
          'Amiri',
          'Andada',
          'Arbutus Slab',
          'Asar',
          'Brawler',
          'Buenard',
          'Cambo',
          'Copse',
          'Crimson Pro',
          'Crimson Text',
          'Domine',
          'Donegal One',
          'Esteban',
          'Fjord One',
          'Gelasio',
          'IBM Plex Serif',
          'Petrona',
          'Solway',
          'Source Serif Pro',
          'Spectral',
          'Trocchi',
          'Zilla Slab'
        ],
        uiFonts: [
          'Inter',
          'Roboto',
          'Open Sans',
          'Source Sans Pro',
          'Fira Sans',
          'Lato',
          'Nunito',
          'M PLUS 1p',
          'M PLUS Rounded 1c',
          'IBM Plex Sans',
          'Barlow',
          'DM Sans',
          'Work Sans',
          'Karla',
          'Quicksand',
          'Exo 2',
          'Asap',
          'Archivo',
          'Archivo Narrow',
        ],
        typeSample: 'The quick brown fox jumps over the lazy dog',
        defaultTypeSample: 'The quick brown fox jumps over the lazy dog',
      }
    },
    computed: {
      // getSansSerifFonts() {
      //   return this.fonts.filter(font => font.category === 'sans-serif')
      // },
      // getSerifFonts() {
      //   return this.fonts.filter(font => font.category === 'serif')
      // },
      // getDisplayFonts() {
      //   return this.fonts.filter(font => font.category === 'display')
      // },
      // getHandwritingFonts() {
      //   return this.fonts.filter(font => font.category === 'handwriting')
      // },
      // getMonospaceFonts() {
      //   return this.fonts.filter(font => font.category === 'monospace')
      // },
      getCurrentlyCheckedCategories() {
        return this.checkboxes.category.filter(checkbox => checkbox.checked)
      },
      flattenedRecommendedFonts() {
        return Object.values(this.recommendedFonts).flat()
      },
      flattenedUiFonts() {
        return Object.values(this.uiFonts).flat()
      },
      emptyStateMessage() {
        switch (true) {
          case this.filteredFonts.length === 0:
            return 'No fonts found'
          case this.typeSample.length === 0:
            return 'Please enter your sample text'
          default:
            return 'No fonts found'
        }
      },
      filteredFonts() {
        let filtered = this.fonts

        // filter out fonts in filters.category with checked false
        filtered = filtered.filter(font => {
          const category = font.category
          const checked = this.filters.category.find(filter => filter.value === category).checked
          return checked
        })

        // find items in currated array with checked true
        this.currated.forEach(currated => {
          if (currated.checked) {
            filtered = filtered.filter(font => this[currated.value].includes(font.family))
          }
        })

        return filtered
      },
    },
    mounted() {
      this.getFonts()
    },
    methods: {
      fontInfo(font) {
        let label = font.variants.length > 1 ? 'weights' : 'weight'
        // if it doesn't have italics
        if (!font.variants.includes('italic')) {
          return `${font.variants.length} ${label}`
        } else {
          let italicCount = 0
          font.variants.forEach(variant => {
            if (variant.includes('italic')) { italicCount++ }
          })
          return `${font.variants.length - italicCount} ${label} w/ italics`
        }
      },
      async getFonts() {
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC4LPtjlhXImnuIBnGbYCgwRLYoXDZ2i8c')
          .then(response => response.json())
          .then(data => this.fonts = data.items)
      },
      onFontLoaded() {
        this.fontsLoaded++
        if (this.fontsLoaded > 10) {
          this.ready = true
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: 100%;
  }

  input[type="color"] {
    all: revert;
  }

  .font-size-control {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    // input[type="range"] {
    //   all: revert;
    //   margin: 0;
    // }
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
      width: 15rem;
    }

    // track styles
    // Chrome, Safari, Opera, and Edge Chromium
    input[type="range"]::-webkit-slider-runnable-track {
      height: 0.5rem;
      background: var(--border-color--lighter);
      border-radius: 0.5rem;
    }

    // Firefox
    input[type="range"]::-moz-range-track {
      height: 0.5rem;
      background: var(--border-color--lighter);
      border-radius: 0.5rem;
    }

    // Thumb Styles
    // Chrome, Safari, Opera, and Edge Chromium
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      // Center thumb on the track
      margin-top: -0.5rem;
      background-color: var(--color--primary);
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
    }

    // Thumb Styles
    // Firefox
    input[type="range"]::-moz-range-thumb {
      // Remove extra border that FF applies
      border: none;
      background-color: var(--color--primary);
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
    }

    /***** Focus Styles *****/
    /* Removes default focus */
    input[type="range"]:focus {
      outline: none;
    }

    /***** Chrome, Safari, Opera, and Edge Chromium *****/
    input[type="range"]:focus::-webkit-slider-thumb {
      border: 1px solid #053a5f;
      outline: 3px solid #053a5f;
      outline-offset: 0.125rem;
    }

    /******** Firefox ********/
    input[type="range"]:focus::-moz-range-thumb {
      border: 1px solid #053a5f;
      outline: 3px solid #053a5f;
      outline-offset: 0.125rem;
    }
  }

  .filters {
    flex: 0 0 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 3rem;

    h3 {
      padding-bottom: 0.5rem;
      margin: 2rem 0 0 0;
      color: var(--text-color--primary);
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: var(--font-size--tiny);
    }
  }

  // this is the container
  .font-list-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 3rem 0 10rem 0;
    overflow: auto;
    -ms-overflow-style: none; // Internet Explorer, Edge
    scrollbar-width: none; // Firefox

    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }

    .font {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem 1rem;

      &:first-child {
        padding-top: 0;
      }

      &:not(:first-child) {
        border-top: 1px solid var(--border-color);
      }

      &__meta {
        flex: 0 0 20rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: right;
        color: var(--text-color--subtle);
      }
    }
  }
</style>