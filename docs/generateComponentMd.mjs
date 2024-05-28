import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// List of .vue files
const files = [
  // 'EpActionBar.vue',
  'EpBadge.vue',
  'EpBanner.vue',
  // 'EpBreadcrumb-OLD.vue',
  // 'EpBreadcrumb.vue',
  // 'EpBreadcrumbStatic.vue',
  'EpBrowserFrame.vue',
  // 'EpButton.vue',
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

// Directory where the Markdown files will be created
const outputDir = path.resolve(__dirname, './components')

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Function to create a Markdown file for each component
files.forEach(file => {
  const componentName = file.replace('.vue', '')
  const filename = `${componentName}.md`
  const filePath = path.join(outputDir, filename)
  const content = `# ${componentName}\n`

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`Generated: ${filePath}`)
})

console.log('Markdown files generated successfully.')
