<template>
  <ep-container
    max-width="120rem"
    height="100%"
    container-padding="0 3rem"
    overflow="auto"
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
          <app-title title="UI Font Finder" />
        </template>
        <template #center>
          <ep-input
            v-model="typeSample"
            size="large"
            background-color="var(--background-1)"
            placeholder="Enter your sample text here"
            clearable
            @clear="typeSample = ''"
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
          <template
            v-for="(filterSet, category) in filters"
            :key="category"
          >
            <h3>
              {{ category }}
            </h3>
            <ep-checkbox
              v-for="checkbox in filterSet"
              :key="checkbox.label"
              v-bind="checkbox"
              v-model="checkbox.checked"
            />
          </template>
          <h3>Sample</h3>
          <ep-checkbox
            v-for="checkbox in samples"
            :key="checkbox.label"
            v-bind="checkbox"
            v-model="checkbox.checked"
          />
        </div>
        <div class="font-list-container">
          <ep-loading-state v-if="!ready" />
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
              <div class="font__meta">
                <p>{{ font.family }}</p>
                <p class="capitalize">{{ font.category }}</p>
                <!-- <p>{{ fontInfo(font) }}</p> -->
                <div class="variant-list">
                  <div
                    v-for="variant in stripItalicVariants(font.variants)"
                    :key="`${font.family}${variant}`"
                    class="ep-radio"
                  >
                    <input
                      :id="`${font.family.replace(' ', '')}-${variant}`"
                      v-model="font.variant"
                      class="ep-radio__input"
                      type="radio"
                      :name="font.family"
                      :value="variant"
                    >
                    <label
                      :for="`${font.family.replace(' ', '')}-${variant}`"
                      class="ep-radio__label"
                    >
                      {{ fontWeightMap[variant] }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="font__samples">
                <font-container
                  v-if="sampleVisible('text')"
                  :font="font"
                  :font-size="fontSize"
                  :sample="typeSample"
                  @font-loaded="onFontLoaded"
                />
                <ui-elements
                  v-if="sampleVisible('ui-elements')"
                  :font-family="font.family"
                />
                <ep-table
                  v-if="sampleVisible('table')"
                  :columns="tableColumns"
                  :data="tableData"
                  bordered
                  striped
                  :style="{ fontFamily: font.family }"
                />
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
  import AppTitle from '../components/AppTitle.vue'
  import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'
  import EpHeader from '@/components/header/EpHeader.vue'
  import EpInput from '@/components/input/EpInput.vue'
  import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
  import EpTable from '@/components/table/EpTable.vue'
  import EpThemeToggle from '@/components/theme-toggle/EpThemeToggle.vue'
  import FontContainer from './FontContainer.vue'
  import UiElements from './UiElements.vue'

  export default {
    name: 'EpCheckboxExample',
    components: {
      AppTitle,
      EpCheckbox,
      EpContainer,
      EpEmptyState,
      EpHeader,
      EpInput,
      EpLoadingState,
      EpTable,
      EpThemeToggle,
      FontContainer,
      UiElements
    },
    data() {
      return {
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
            // {
            //   id: faker.datatype.uuid(),
            //   name: 'category',
            //   value: 'serif',
            //   checked: true,
            //   label: 'Serif',
            //   disabled: false
            // },
            // {
            //   id: faker.datatype.uuid(),
            //   name: 'category',
            //   value: 'display',
            //   checked: true,
            //   label: 'Display',
            //   disabled: false
            // },
            // {
            //   id: faker.datatype.uuid(),
            //   name: 'category',
            //   value: 'handwriting',
            //   checked: true,
            //   label: 'Handwritng',
            //   disabled: false
            // },
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
        fontWeightMap: {
          '100': 'Thin',
          '200': 'Extra Light',
          '300': 'Light',
          'regular': 'Regular',
          '400': 'Regular',
          '500': 'Medium',
          '600': 'Semi Bold',
          '700': 'Bold',
          '800': 'Extra Bold',
          '900': 'Black'
        },
        oneWeightOnly: false,
        ready: false,
        topPicks: [
          'Archivo',
          'Archivo Narrow',
          'Asap',
          'Asap Condensed',
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
          'Ovo',
          'Petrona',
          'Solway',
          'Source Serif Pro',
          'Spectral',
          'Trocchi',
          'Zilla Slab'
        ],
        uiFonts: {
          'sans-serif': [
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
          'monospace': [
            'IBM Plex Mono',
            'Fira Code',
            // google fonts monospace
            'Anonymous Pro',
            'Cousine',
            'Inconsolata',
            'Liberation Mono',
            'Monoid',
            'Roboto Mono',
            'Source Code Pro',
            'Space Mono',
            'Ubuntu Mono',
            'VT323',
            'Overpass Mono',
            'Cutive Mono',
            'Fira Mono',
            'Inknut Antiqua',
          ]
        },
        samples: [
          {
            id: faker.datatype.uuid(),
            name: 'samples',
            value: 'text',
            checked: true,
            label: 'Text',
            disabled: false
          },
          {
            id: faker.datatype.uuid(),
            name: 'samples',
            value: 'ui-elements',
            checked: true,
            label: 'UI Elements',
            disabled: false
          },
          {
            id: faker.datatype.uuid(),
            name: 'samples',
            value: 'table',
            checked: true,
            label: 'Table',
            disabled: false
          },
        ],
        tableColumns: [
          {
            id: faker.datatype.uuid(),
            header: 'Name',
            key: 'name',
          },
          {
            id: faker.datatype.uuid(),
            header: 'Category',
            key: 'category',
          },
          {
            id: faker.datatype.uuid(),
            header: 'Variants',
            key: 'variants',
          },
          {
            id: faker.datatype.uuid(),
            header: 'Subsets',
            key: 'subsets',
          },
          {
            id: faker.datatype.uuid(),
            header: 'Version',
            key: 'version',
          },
          {
            id: faker.datatype.uuid(),
            header: 'Last Modified',
            key: 'LastModified',
          },
        ],
        typeSample: 'How vexingly quick daft zebras jump',
        defaultTypeSample: 'How vexingly quick daft zebras jump',
      }
    },
    computed: {
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

        // include only sans-serif and monospace
        filtered = filtered.filter(font => font.category === 'sans-serif' || font.category === 'monospace')

        // include only fonts with more than one weight
        filtered = filtered.filter(font => font.variants.length > 1)

        // include only good fonts
        // flatten uiFonts
        const uiFonts = Object.values(this.uiFonts).flat()

        filtered = filtered.filter(font => uiFonts.includes(font.family))

        // filter out fonts in filters.category with checked false
        filtered = filtered.filter(font => {
          const category = font.category
          const checked = this.filters.category.find(filter => filter.value === category).checked
          return checked
        })

        // find items in currated array with checked true
        // this.currated.forEach(currated => {
        //   if (currated.checked) {
        //     filtered = filtered.filter(font => this[currated.value].includes(font.family))
        //   }
        // })

        return filtered
      },
      tableData() {
        const mappedData = this.fonts.map(font => {
          return {
            name: font.family,
            category: font.category,
            variants: font.variants.length,
            subsets: font.subsets.length,
            version: font.version,
            lastModified: font.lastModified,
          }
        })
        // return 10 items
        return mappedData.slice(0, 5)
      },
    },
    watch: {
      // filteredFonts() {

      // },
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
      isTopPick(family) {
        return this.topPicks.includes(family)
      },
      onFontLoaded() {
        this.fontsLoaded++
        if (this.fontsLoaded > 10) {
          this.ready = true
        }
      },
      sampleVisible(value) {
        const sample = this.samples.find(filter => filter.value === value)
        return sample.checked
      },
      stripItalicVariants(variants) {
        return variants.filter(variant => !variant.includes('italic'))
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
    overflow-x: auto;
    -ms-overflow-style: none; // Internet Explorer, Edge
    scrollbar-width: none; // Firefox

    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }

    .font {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      gap: 3rem;
      padding: 3rem 0;

      &:first-child {
        padding-top: 0;
      }

      &:not(:first-child) {
        border-top: 1px solid var(--border-color);
      }

      &__meta {
        flex: 0 0 15rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 0.5rem;
        color: var(--text-color--subtle);

        // p:first-child {
        //   margin-bottom: 1rem;
        // }
        .variant-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 2rem;

          .ep-radio {
            display: flex;
            align-items: center;
            gap: 0.8rem;

            input[type="radio"] {
              all: revert;
              margin: 0;
            }

            &__label {
              cursor: pointer;
            }
          }
        }
      }

      &__samples {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        // padding: 0 1rem;
        // set all chidlren to flex 1 1 auto
        // & > *:not(:last-child) {
        //   flex: 1;
        // }
      }
    }
  }
</style>