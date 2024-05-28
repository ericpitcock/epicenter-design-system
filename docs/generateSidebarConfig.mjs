import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// List of .vue files
const files = [
  'EpActionBar.vue',
  'EpBadge.vue',
  'EpBanner.vue',
  // 'EpBreadcrumb-OLD.vue',
  // 'EpBreadcrumb.vue',
  // 'EpBreadcrumbStatic.vue',
  'EpBrowserFrame.vue',
  'EpButton.vue',
  'EpButtonGroup.vue',
  'EpChart.vue',
  'EpDonutChart.vue',
  'EpCheckbox.vue',
  'EpCodeView.vue',
  'EpContainer.vue',
  'EpDatePicker.vue',
  'EpDivider.vue',
  'EpDropdown.vue',
  'EpEmptyState.vue',
  'EpFlex.vue',
  'EpFlexContainer.vue',
  'EpFooter.vue',
  'EpHeader.vue',
  'EpIcon.vue',
  'EpImage.vue',
  'EpInput.vue',
  'EpInputStyler.vue',
  'EpKeyValueTable.vue',
  'EpLoadingState.vue',
  'EpicenterLogo.vue',
  'EpMap.vue',
  'EpMenu.vue',
  'EpNotification.vue',
  'EpNotifications.vue',
  'EpRadio.vue',
  'EpMultiSearch.vue',
  'EpSearchTypeahead.vue',
  'EpSelect.vue',
  'EpSignIn.vue',
  'EpSplitButton.vue',
  'EpStatusIndicator.vue',
  'EpCheckboxFilter.vue',
  'EpDatePickerFilter.vue',
  'EpRangeInputFilter.vue',
  'EpTable.vue',
  'EpTableCell.vue',
  'EpTablePagination.vue',
  'EpTableSearchInput.vue',
  'EpTableSortableHeader.vue',
  'EpTabContent.vue',
  'EpTabs.vue',
  'EpTextarea.vue',
  'EpThemeToggle.vue',
  'EpToggle.vue',
  'EpTooltip.vue'
]

// Resolve __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Generate sidebar items
const sidebarItems = files.map(file => {
  const componentName = file.replace('.vue', '')
  return {
    text: componentName,
    link: `/components/${componentName}`
  }
})

// Sidebar configuration
const sidebarConfig = {
  text: 'Components',
  items: sidebarItems
}

// Path to the output JSON file
const outputFilePath = path.resolve(__dirname, '.vitepress/sidebarConfig.json')

// Write the sidebar configuration to the JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(sidebarConfig, null, 2))
console.log('Sidebar configuration generated successfully.')
