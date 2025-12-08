<template>
  <div class="icon-browser">
    <div class="controls">
      <ep-flex class="justify-between align-center gap-30">
        <ep-flex class="gap-10">
          <ep-select
            v-model="selectedCategory"
            select-id="icon-category-select"
            class="category-select"
            :options="categories"
            size="xlarge"
            @change="onCategoryChange"
          />
          <ep-input
            v-model="search"
            placeholder="Search icons by name, tags, or category..."
            class="search-input"
            :class="{ 'search-input--active': search }"
            size="xlarge"
            clearable
            @input="onSearchChange"
          />
        </ep-flex>
        <p class="icon-count">
          {{ filteredIcons.length }} of {{ iconsData.length }}
        </p>
      </ep-flex>
    </div>
    <div class="icon-grid">
      <div
        v-for="icon in paginatedIcons"
        :key="icon.name"
        :class="{
          'icon-card--copied': copiedIcon === icon.name
        }"
        class="icon-card"
        @click="copyIconName(icon.name)"
      >
        <div class="icon-display">
          <component
            :is="iconComponents[getComponentName(icon.name)]"
            v-if="iconComponents[getComponentName(icon.name)]"
            :style="iconStyle"
          />
          <div
            v-else
            class="icon-not-found"
          >
            {{ getComponentName(icon.name) }} not found
          </div>
        </div>
        <div class="icon-name">
          {{ getComponentName(icon.name) }}
        </div>
        <div class="icon-category">
          {{ icon.category }}
        </div>
        <div
          v-if="copiedIcon === icon.name"
          class="copied-indicator"
        >
          Copied!
        </div>
      </div>
    </div>
    <ep-pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      button-class="ep-button-var--secondary"
      show-pages
      @page-change="onPageChange"
    >
      <template #icon-prev>
        <ArrowLeft01 />
      </template>
      <template #icon-next>
        <ArrowRight01 />
      </template>
    </ep-pagination>
  </div>
</template>

<script setup>
  import ArrowLeft01 from '@ericpitcock/epicenter-icons/icons/ArrowLeft01'
  import ArrowRight01 from '@ericpitcock/epicenter-icons/icons/ArrowRight01'
  import { computed, defineAsyncComponent, ref, watch } from 'vue'

  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpInput from '@/components/input/EpInput.vue'
  import EpPagination from '@/components/pagination/EpPagination.vue'
  import EpSelect from '@/components/select/EpSelect.vue'

  import { createIconImports, getComponentName, iconsData } from './useIcons.js'

  const PROBLEMATIC_ICONS = [
    'Access', 'Advertisiment', 'Affiliate', 'AiBook', 'AiBrain03', 'AiChat02',
    'AiInnovation02', 'AiLock', 'AiMail', 'AiSearch', 'AiSecurity02', 'AlbumNotFound01',
    'AlbumNotFound02', 'Alms', 'AlphabetGreek', 'AlphabetHebrew', 'AlphabetHindi',
    'ArrowAllDirection', 'ArrowDown05', 'ArrowExpand', 'ArrowReloadHorizontal',
    'ArrowReloadVertical', 'ArrowShrink', 'ArrowShrink01', 'ArrowShrink02',
    'ArrowTurnBackward', 'ArrowTurnDown', 'ArrowTurnForward', 'ArrowTurnUp',
    'ArtificialIntelligence04', 'ArtificialIntelligence05', 'ArtificialIntelligence06',
    'AugmentedRealityAr', 'Avalanche', 'BaseballHelmet', 'Behance02', 'BodyWeight',
    'Bookshelf01', 'BubbleChatDownload01', 'Bug02', 'BulletproofVest', 'Cactus',
    'Cardiogram02', 'Carrot', 'CellularNetwork', 'ChairBarber', 'CircleArrowLeft03',
    'CircleLock01', 'CircleLockCheck02', 'CircleUnlock01', 'CloudSavingDone02', 'Code',
    'Compass01', 'Complaint', 'Cone02', 'Course', 'Crab', 'CreditCardNotFound',
    'CreditCardPos', 'CreditCardValidation', 'CricketHelmet', 'CursorPointer01',
    'DataRecovery', 'Delete01', 'Delete02', 'Delete03', 'Delete04', 'DeletePutBack',
    'DesktopComputer', 'DeviceAccess', 'DomainVerification', 'DoneAll', 'Drag01',
    'Drag02', 'DropDownList', 'DropDownTriangle', 'DropDownUp', 'DropDownDown',
    'EarPods', 'EidMubarak', 'EmergencyBed', 'EnergyEvolution', 'EqualSign',
    'FactoryOverall', 'FantasyGame', 'FastWind', 'FileBlocked', 'FileCoin',
    'FileCorrupt', 'FileFavourite', 'FileSearch', 'FileStar', 'FingerprintScan',
    'FirstAid', 'FlashLightOff', 'Flower', 'Folder', 'FolderAdd', 'FolderCloud',
    'FolderEdit', 'FolderLibrary', 'FolderMinnus', 'FolderSearch', 'FolderSecurity',
    'Food02', 'FootballPitch', 'ForgotPassword', 'FrontBack', 'FullScreenExit',
    'FullScreenMode', 'GameControllerOld', 'GasStation', 'GridView', 'GrowthMap',
    'GuitarTube', 'HeartCheck', 'Home03', 'HomeWifi', 'HouseBlank', 'IdentityCard',
    'ImageComposition', 'Impatient', 'InfiniteScroll', 'InformationCircle',
    'InformationDiamond', 'InformationSquare', 'JobLink', 'JoinRound', 'Key01',
    'Key02', 'Keyhole', 'LeftToRightListDash', 'LeftToRightListNumber', 'Library',
    'LicenseDraft', 'LicenseMaintenance', 'LicensePin', 'LocationAdd01',
    'LocationAdd02', 'LocationFavourite01', 'LocationFavourite02', 'LocationRemove01',
    'LocationRemove02', 'LockKey', 'LockPassword', 'LogIn01', 'LogIn02', 'LogIn03',
    'LogIn04', 'LookDown', 'LookRight', 'LookUp', 'MagicWand01', 'MagicWand02',
    'MagicWand03', 'MailAdd01', 'MailAdd02', 'MailAtSign01', 'MailAtSign02',
    'MailBlock01', 'MailBlock02', 'MailDownload01', 'MailDownload02', 'MailEdit01',
    'MailEdit02', 'MailLock01', 'MailLock02', 'MailLove01', 'MailLove02',
    'MailMinus01', 'MailMinus02', 'MailOpen', 'MailOpen01', 'MailOpen02',
    'MailOpenLove', 'MailReceive01', 'MailReceive02', 'MailRemove01', 'MailRemove02',
    'MailSearch01', 'MailSearch02', 'MailSetting01', 'MailSetting02', 'MailUpload01',
    'MailUpload02', 'MailValidation01', 'MailValidation02', 'MinusSign',
    'MinusSignCircle', 'MinusSignSquare', 'MobileNavigator01', 'MobileNavigator02',
    'MobileProgramming01', 'MobileProgramming02', 'MobileProtection', 'MobileSecurityt',
    'MouseRightClick01', 'MouseRightClick02', 'MouseRightClick03', 'MouseRightClick04',
    'MouseRightClick05', 'MouseRightClick06', 'MusicalNote01', 'MusicalNote02',
    'NewJob', 'Nextjs', 'NotificationBlock01', 'NotificationBlock02',
    'NotificationBlock03', 'PalmVein', 'Passport01', 'PasswordValidation',
    'PhoneOff01', 'PhoneOff02', 'PhoneOff03', 'PlayListAdd', 'PlayListFavourite01',
    'PlayListFavourite02', 'PlayListMinus', 'PlayListRemove', 'PlusSignCircle',
    'PlusSignSquare', 'ProductLoading', 'PushUpBar', 'Quilljs', 'Quiz01',
    'RandomNumberGenerator', 'Search01', 'Search02', 'SearchAdd', 'SearchArea',
    'SearchFavourite', 'SearchFocus', 'SearchMinus', 'SearchRemove', 'SearchReplace',
    'SearchSquare', 'Seat01', 'Seat02', 'Seat03', 'SecurityCheck', 'Share01',
    'Share02', 'Share03', 'Share04', 'Share05', 'Share06', 'Share07', 'Share08',
    'SoftwareUninstall'
  ]

  const props = defineProps({
    size: { type: Number, default: 72 },
    color: { type: String, default: '#000000' },
    strokeWidth: { type: Number, default: 1 },
    showProblematicOnly: { type: Boolean, default: false },
    hideProblematic: { type: Boolean, default: true }
  })

  const iconImports = createIconImports()
  const iconComponents = {}

  Object.keys(iconImports).forEach(componentName => {
    iconComponents[componentName] = defineAsyncComponent({
      loader: iconImports[componentName],
      loadingComponent: {
        template: `<div style="
        width: var(--ep-icon-width, 24px);
        height: var(--ep-icon-height, 24px);
        background: #e5e7eb;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: #9ca3af;
      ">...</div>`
      },
      errorComponent: {
        template: `<div style="
        width: var(--ep-icon-width, 24px);
        height: var(--ep-icon-height, 24px);
        background: #f3f4f6;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: #9ca3af;
      ">❌</div>`
      },
      delay: 200,
      timeout: 3000,
    })
  })

  const search = ref('')
  const selectedCategory = ref('All')
  const currentPage = ref(1)
  const itemsPerPage = ref(48)
  const copiedIcon = ref('')

  const iconStyle = computed(() => ({
    '--ep-icon-width': `${props.size || 24}px`,
    '--ep-icon-height': `${props.size || 24}px`,
    '--ep-icon-color': props.color || '#000000',
    '--ep-icon-stroke-width': (props.strokeWidth || 1.5).toString(),
  }))

  const filteredIcons = computed(() => {
    let filtered = iconsData

    if (search.value && search.value.trim()) {
      const searchTerm = search.value.toLowerCase().trim()
      filtered = filtered.filter(icon => {
        const nameMatch = icon.name.toLowerCase().includes(searchTerm)
        const tagMatch = icon.tags && typeof icon.tags === 'string' &&
          icon.tags.toLowerCase().includes(searchTerm)
        return nameMatch || tagMatch
      })
    }

    if (selectedCategory.value && selectedCategory.value !== 'All') {
      filtered = filtered.filter(icon => icon.category === selectedCategory.value)
    }

    if (props.showProblematicOnly) {
      const problematicNames = PROBLEMATIC_ICONS.map(getComponentName)
      filtered = filtered.filter(icon =>
        problematicNames.includes(getComponentName(icon.name))
      )
    }

    if (props.hideProblematic) {
      const problematicNames = PROBLEMATIC_ICONS.map(getComponentName)
      filtered = filtered.filter(icon =>
        !problematicNames.includes(getComponentName(icon.name))
      )
    }

    return filtered
  })

  const paginatedIcons = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredIcons.value.slice(start, end)
  })

  const totalPages = computed(() =>
    Math.ceil(filteredIcons.value.length / itemsPerPage.value)
  )

  // watch currentPage and scroll to the top of the icon grid when it changes
  watch(currentPage, () => {
    const iconGrid = document.querySelector('.icon-grid')
    if (iconGrid) {
      iconGrid.scrollTo({ top: 0 })
    }
  })

  const categories = computed(() =>
    ['All', ...new Set(iconsData.map(icon => icon.category))].sort()
      .map(category => ({ label: category, value: category }))
  )

  const copyIconName = async (iconName) => {
    const componentName = getComponentName(iconName)
    try {
      await navigator.clipboard.writeText(componentName)
      copiedIcon.value = iconName
      setTimeout(() => {
        copiedIcon.value = ''
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const onSearchChange = () => {
    currentPage.value = 1
  }

  const onCategoryChange = () => {
    currentPage.value = 1
  }

  const onPageChange = (page) => {
    currentPage.value = page
  }
</script>

<style lang="scss" scoped>
  .icon-browser {
    display: grid;
    grid-template-rows: 100px 1fr;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--interface-bg);

    &:has(.pagination) {
      grid-template-rows: 100px 1fr 100px;
    }
  }

  .controls {
    padding-inline: 30px;
    background: var(--interface-surface);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;

    .ep-flex {
      flex: 1;
    }
  }

  .search-input {
    flex: 1;
    min-width: 300px;
    padding: 8px 12px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 14px;
    background: var(--interface-foreground);

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
  }

  .category-select {
    flex: 0 0 200px;
  }

  .icon-count {
    color: var(--text-color--subtle);
  }

  .icon-grid {
    overflow-y: auto;
    padding: 30px 30px 25vh 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: max-content;
    gap: 16px;
    align-content: start;
  }

  .icon-card {
    position: relative;
    background: var(--interface-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius--large);
    padding: 16px;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    min-height: 120px;
    max-height: 180px;

    &:hover {
      border-color: #007bff;
    }
  }

  .copied-indicator {
    position: absolute;
    top: 8px;
    right: 8px;
    background: hsl(160, 40%, 45%);
    color: hsl(160, 40%, 10%);
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 3px;
    font-weight: 500;
  }

  .icon-name {
    font-weight: 500;
    line-height: 1.3;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
    color: var(--text-color--loud)
  }

  .icon-category {
    font-size: 12px;
    color: var(--text-color--subtle);
    font-weight: 500;
    word-break: break-all;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .loading-message,
  .no-icons-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: #6c757d;
    font-size: 16px;
  }

  :deep(.ep-pagination) {
    padding: 20px;
    background: var(--interface-surface);
    border-top: 1px solid var(--border-color);

    .ep-flex {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .icon-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 12px;
      padding: 16px;
    }

    .controls {
      flex-direction: column;
      align-items: stretch;
    }

    .search-input {
      min-width: auto;
    }
  }
</style>