<script setup>
  import '../../../storybook-shared/icon-browser.css'
  import { createIconImports, getComponentName, iconsData } from '@sb/helpers/useIcons.js'
  import { computed, defineAsyncComponent, ref, watch } from 'vue'

  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpInput from '@/components/input/EpInput.vue'
  import EpPagination from '@/components/pagination/EpPagination.vue'
  import EpSelect from '@/components/select/EpSelect.vue'

  const props = defineProps({
    size: { type: Number, default: 72 },
    color: { type: String, default: '#000000' },
    strokeWidth: { type: Number, default: 1 },
    showProblematicOnly: { type: Boolean, default: false },
    hideProblematic: { type: Boolean, default: true }
  })

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
  const resultsPerPage = ref(50)
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
    const start = (currentPage.value - 1) * resultsPerPage.value
    const end = start + resultsPerPage.value
    return filteredIcons.value.slice(start, end)
  })

  const totalPages = computed(() =>
    Math.ceil(filteredIcons.value.length / resultsPerPage.value)
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

  const onResultsPerPageChange = (value) => {
    resultsPerPage.value = value
    currentPage.value = 1
  }
</script>

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
      :results-per-page="resultsPerPage"
      button-class="ep-button-var--secondary"
      show-pages
      @page-change="onPageChange"
      @update:results-per-page="onResultsPerPageChange"
    />
  </div>
</template>