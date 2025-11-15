import { computed, ref, watch } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpButtonGroup from '@/components/button-group/EpButtonGroup.vue'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpDatePicker from '@/components/date-picker/EpDatePicker.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpInput from '@/components/input/EpInput.vue'
import EpRadio from '@/components/radio/EpRadio.vue'
import EpMultiSearch from '@/components/search/EpMultiSearch.vue'
import EpSelect from '@/components/select/EpSelect.vue'

import { paddedSurface } from '../../helpers/decorators.js'

export default {
  title: 'Scenarios/Forms Sandbox',
  decorators: [paddedSurface],
  argTypes: {
    formSize: {
      name: 'Form Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: { type: 'radio' }
    },
    dropdownsLoading: {
      name: 'Dropdowns Loading',
      control: { type: 'boolean' }
    },
    multiSearchLoading: {
      name: 'MultiSearch Loading',
      control: { type: 'boolean' }
    },
    formDisabled: {
      name: 'Form Disabled',
      control: { type: 'boolean' }
    },
    preset: {
      name: 'Prefill Preset',
      options: ['Minimal', 'Typical', 'Noisy data'],
      control: { type: 'select' }
    }
  }
}

export const FormsSandbox = args => ({
  components: { EpButton, EpButtonGroup, EpCheckbox, EpDatePicker, EpFlex, EpInput, EpMultiSearch, EpRadio, EpSelect },
  setup() {
    const sources = ['IDS', 'EDR', 'Firewall', 'SIEM', 'Email security']
    const operators = ['equals', 'contains', 'regex']
    const slackChannels = ['#soc-alerts', '#oncall', '#security-leadership']
    const assets = Array.from({ length: 150 }, (_, i) => `host-${String(i + 1).padStart(3, '0')}.example.com`).concat(['okta', 'salesforce', 'workday', 'github', 'o365'])

    const model = ref({
      name: '',
      type: '',
      severity: '',
      assets: [],
      condition: { source: '', operator: '', value: '', caseSensitive: false },
      schedule: { start: null, end: null, quick: '' },
      notifications: { email: false, slack: false, pager: false, slackChannel: '' },
      ackRequired: false
    })

    const errors = ref([])
    const touched = ref({})
    const isTesting = ref(false)

    const presets = {
      'Minimal': {
        name: 'Test Rule',
        type: 'Suppression',
        severity: 'Medium',
        assets: ['host-001.example.com'],
        condition: { source: 'IDS', operator: 'contains', value: 'alert', caseSensitive: false },
        schedule: { start: new Date(), end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), quick: '7 days' },
        notifications: { email: true, slack: false, pager: false, slackChannel: '' },
        ackRequired: false
      },
      'Typical': {
        name: 'Brute Force Detection',
        type: 'Escalation',
        severity: 'High',
        assets: ['host-001.example.com', 'host-002.example.com', 'okta'],
        condition: { source: 'Firewall', operator: 'regex', value: 'failed.*login', caseSensitive: true },
        schedule: { start: new Date(), end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), quick: '30 days' },
        notifications: { email: true, slack: true, pager: false, slackChannel: '#soc-alerts' },
        ackRequired: true
      },
      'Noisy data': {
        name: 'Very Long Rule Name That Exceeds Normal Limits And Should Show Character Counter Issues',
        type: 'Auto-closure',
        severity: 'Low',
        assets: assets.slice(0, 50),
        condition: { source: 'SIEM', operator: 'equals', value: 'suspicious activity detected in the network perimeter with multiple indicators of compromise', caseSensitive: false },
        schedule: { start: new Date(Date.now() - 24 * 60 * 60 * 1000), end: new Date(), quick: 'Custom' },
        notifications: { email: false, slack: true, pager: true, slackChannel: '#security-leadership' },
        ackRequired: false
      }
    }

    const validate = () => {
      const errs = []
      if (!model.value.name.trim()) errs.push({ field: 'name', message: 'Rule name is required' })
      if (model.value.name.length > 80) errs.push({ field: 'name', message: 'Rule name must be 80 characters or less' })
      if (!model.value.type) errs.push({ field: 'type', message: 'Rule type is required' })
      if (!model.value.severity) errs.push({ field: 'severity', message: 'Severity is required' })
      if (model.value.type === 'Suppression' && model.value.severity === 'Critical') errs.push({ field: 'severity', message: 'Suppression rules cannot target Critical severity' })
      if (!model.value.assets.length) errs.push({ field: 'assets', message: 'At least one target asset is required' })
      if (!model.value.condition.source) errs.push({ field: 'condition.source', message: 'Signal source is required' })
      if (!model.value.condition.operator) errs.push({ field: 'condition.operator', message: 'Operator is required' })
      if (!model.value.condition.value.trim()) errs.push({ field: 'condition.value', message: 'Value is required' })
      if (!model.value.schedule.start || !model.value.schedule.end) errs.push({ field: 'schedule', message: 'Start and end dates are required' })
      if (model.value.schedule.start && model.value.schedule.end && model.value.schedule.start > model.value.schedule.end) errs.push({ field: 'schedule', message: 'End date cannot be before start date' })
      if (model.value.notifications.slack && !model.value.notifications.slackChannel) errs.push({ field: 'notifications.slackChannel', message: 'Slack channel is required when Slack notifications are enabled' })
      errors.value = errs
      return { valid: errs.length === 0, errors: errs }
    }

    const isValid = computed(() => validate().valid)
    const canTest = computed(() => isValid.value)
    const canCreate = computed(() => isValid.value)

    const setPreset = (presetName) => {
      if (presets[presetName]) {
        model.value = { ...presets[presetName] }
        errors.value = []
        touched.value = {}
      }
    }

    watch(() => args.preset, (newVal) => {
      if (newVal) setPreset(newVal)
    }, { immediate: true })

    const onBlur = (field) => {
      touched.value[field] = true
      validate()
    }

    const onSubmit = () => {
      const validation = validate()
      if (!validation.valid) {
        const firstError = validation.errors[0]
        const el = document.querySelector(`[data-field="${firstError.field}"]`)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      console.log('onSubmit', model.value)
    }

    const onTestRule = async () => {
      if (!canTest.value) return
      isTesting.value = true
      await new Promise(resolve => setTimeout(resolve, 1500))
      isTesting.value = false
      console.log('onTestRule', { rule: model.value, resultCount: Math.floor(Math.random() * 100) })
    }

    const onSaveDraft = () => {
      console.log('onSaveDraft', model.value)
    }

    const onCancel = () => {
      setPreset(args.preset || 'Minimal')
    }

    const ruleTypeOptions = [
      { value: 'Suppression', label: 'Suppression' },
      { value: 'Escalation', label: 'Escalation' },
      { value: 'Auto-closure', label: 'Auto-closure' }
    ]

    const severityOptions = [
      { id: 'Critical', label: 'Critical' },
      { id: 'High', label: 'High' },
      { id: 'Medium', label: 'Medium' },
      { id: 'Low', label: 'Low' }
    ]

    const sourceOptions = sources.map(s => ({ value: s, label: s }))
    const operatorOptions = operators.map(o => ({ value: o, label: o }))
    const slackOptions = slackChannels.map(c => ({ value: c, label: c }))

    const quickRanges = [
      { value: 'today', label: 'Today' },
      { value: '7days', label: '7 days' },
      { value: '30days', label: '30 days' },
      { value: 'custom', label: 'Custom' }
    ]

    const setQuickRange = (range) => {
      const now = new Date()
      if (range === 'today') {
        model.value.schedule.start = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        model.value.schedule.end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
      } else if (range === '7days') {
        model.value.schedule.start = now
        model.value.schedule.end = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
      } else if (range === '30days') {
        model.value.schedule.start = now
        model.value.schedule.end = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
      }
      model.value.schedule.quick = range
    }

    const searchAssets = (query) => {
      if (!query) return assets.slice(0, 20)
      return assets.filter(a => a.toLowerCase().includes(query.toLowerCase())).slice(0, 20)
    }

    const formClasses = computed(() => ({
      'ep-forms-sandbox__form': true,
      [`ep-forms-sandbox__form--${args.formSize}`]: args.formSize !== 'default',
      'ep-forms-sandbox__form--disabled': args.formDisabled
    }))

    return {
      model,
      errors,
      touched,
      isTesting,
      isValid,
      canTest,
      canCreate,
      ruleTypeOptions,
      severityOptions,
      sourceOptions,
      operatorOptions,
      slackOptions,
      quickRanges,
      setQuickRange,
      searchAssets,
      onBlur,
      onSubmit,
      onTestRule,
      onSaveDraft,
      onCancel,
      formClasses,
      args
    }
  },
  template: `
    <ep-flex class="flex-col gap-30">
      <div v-if="errors.length" class="ep-forms-sandbox__alert">
        <ul>
          <li v-for="error in errors.slice(0, 3)" :key="error.field">{{ error.message }}</li>
        </ul>
      </div>
      <form class="ep-forms-sandbox__form" :class="formClasses" @submit.prevent="onSubmit">
        <ep-flex class="flex-col gap-20">
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Details</h2>
            <ep-flex class="flex-row gap-20">
              <div class="ep-forms-sandbox__field" data-field="name">
                <ep-input
                  v-model="model.name"
                  label="Rule name"
                  placeholder="Enter rule name"
                  :maxlength="80"
                  :disabled="args.formDisabled"
                  :size="args.formSize"
                  :class="{ 'ep-input--error': errors.some(e => e.field === 'name') }"
                  @blur="onBlur('name')"
                >
                  <template #icon-right>
                    <span>{{ model.name.length }}/80</span>
                  </template>
                </ep-input>
                <div v-if="errors.some(e => e.field === 'name')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'name').message }}</div>
              </div>
              <div class="ep-forms-sandbox__field" data-field="type">
                <ep-select
                  v-model="model.type"
                  :options="ruleTypeOptions"
                  :size="args.formSize"
                  :disabled="args.formDisabled"
                  :loading="args.dropdownsLoading"
                  :selectId="'rule-type-select'"
                  placeholder="Select rule type"
                />
                <div v-if="errors.some(e => e.field === 'type')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'type').message }}</div>
              </div>
            </ep-flex>
          </div>
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Targeting</h2>
            <ep-flex class="flex-col gap-10">
              <div class="ep-forms-sandbox__field" data-field="severity">
                <label class="ep-forms-sandbox__label">Severity</label>
                <ep-flex class="flex-col gap-5">
                  <ep-radio
                    v-for="option in severityOptions"
                    :key="option.id"
                    v-model="model.severity"
                    :value="option.id"
                    :label="option.label"
                    :id="'severity-' + option.id"
                    name="severity"
                    :disabled="args.formDisabled"
                    :class="{ 'ep-radio--error': errors.some(e => e.field === 'severity') }"
                  />
                </ep-flex>
                <div v-if="errors.some(e => e.field === 'severity')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'severity').message }}</div>
              </div>
              <div class="ep-forms-sandbox__field" data-field="assets">
                <ep-multi-search
                  v-model="model.assets"
                  placeholder="Search for hosts and services"
                  :search="searchAssets"
                  :loading="args.multiSearchLoading"
                  :disabled="args.formDisabled"
                  :class="{ 'ep-multi-search--error': errors.some(e => e.field === 'assets') }"
                />
                <div v-if="errors.some(e => e.field === 'assets')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'assets').message }}</div>
              </div>
            </ep-flex>
          </div>
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Conditions</h2>
            <ep-flex class="flex-col gap-10">
              <ep-flex class="flex-row gap-20">
                <div class="ep-forms-sandbox__field" data-field="condition.source">
                  <ep-select
                    v-model="model.condition.source"
                    :options="sourceOptions"
                    :size="args.formSize"
                    :disabled="args.formDisabled"
                    :loading="args.dropdownsLoading"
                    :selectId="'source-select'"
                    placeholder="Select signal source"
                  />
                  <div v-if="errors.some(e => e.field === 'condition.source')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'condition.source').message }}</div>
                </div>
                <div class="ep-forms-sandbox__field" data-field="condition.operator">
                  <ep-select
                    v-model="model.condition.operator"
                    :options="operatorOptions"
                    :size="args.formSize"
                    :disabled="args.formDisabled"
                    :loading="args.dropdownsLoading"
                    :selectId="'operator-select'"
                    placeholder="Select operator"
                  />
                  <div v-if="errors.some(e => e.field === 'condition.operator')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'condition.operator').message }}</div>
                </div>
              </ep-flex>
              <div class="ep-forms-sandbox__field" data-field="condition.value">
                <ep-input
                  v-model="model.condition.value"
                  label="Value"
                  placeholder="Enter condition value"
                  :disabled="args.formDisabled"
                  :size="args.formSize"
                  :class="{ 'ep-input--error': errors.some(e => e.field === 'condition.value') }"
                  @blur="onBlur('condition.value')"
                >
                  <template #icon-left>
                    <span>Filter</span>
                  </template>
                </ep-input>
                <div v-if="errors.some(e => e.field === 'condition.value')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'condition.value').message }}</div>
              </div>
              <div class="ep-forms-sandbox__field">
                <ep-checkbox
                  v-model="model.condition.caseSensitive"
                  label="Case sensitive"
                  :value="'true'"
                  :id="'case-sensitive-checkbox'"
                  name="case-sensitive"
                  :disabled="args.formDisabled"
                />
              </div>
            </ep-flex>
          </div>
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Schedule</h2>
            <ep-flex class="flex-col gap-10">
              <div class="ep-forms-sandbox__field">
                <ep-button-group
                  v-model="model.schedule.quick"
                  :items="quickRanges"
                  @update:modelValue="setQuickRange"
                />
              </div>
              <div class="ep-forms-sandbox__field" data-field="schedule">
                <ep-date-picker
                  v-model:start="model.schedule.start"
                  v-model:end="model.schedule.end"
                  mode="range"
                  :disabled="args.formDisabled"
                  :class="{ 'ep-date-picker--error': errors.some(e => e.field === 'schedule') }"
                />
                <div v-if="errors.some(e => e.field === 'schedule')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'schedule').message }}</div>
              </div>
            </ep-flex>
          </div>
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Notifications</h2>
            <ep-flex class="flex-col gap-10">
              <div class="ep-forms-sandbox__field">
                <ep-flex class="flex-col gap-5">
                  <ep-checkbox
                    v-model="model.notifications.email"
                    label="Email"
                    :value="'true'"
                    :id="'email-checkbox'"
                    name="notifications"
                    :disabled="args.formDisabled"
                  />
                  <ep-checkbox
                    v-model="model.notifications.slack"
                    label="Slack"
                    :value="'true'"
                    :id="'slack-checkbox'"
                    name="notifications"
                    :disabled="args.formDisabled"
                  />
                  <ep-checkbox
                    v-model="model.notifications.pager"
                    label="Pager"
                    :value="'true'"
                    :id="'pager-checkbox'"
                    name="notifications"
                    :disabled="args.formDisabled"
                  />
                </ep-flex>
              </div>
              <div v-if="model.notifications.slack" class="ep-forms-sandbox__field" data-field="notifications.slackChannel">
                <ep-select
                  v-model="model.notifications.slackChannel"
                  :options="slackOptions"
                  :size="args.formSize"
                  :disabled="args.formDisabled"
                  :loading="args.dropdownsLoading"
                  :selectId="'slack-channel-select'"
                  placeholder="Select Slack channel"
                />
                <div v-if="errors.some(e => e.field === 'notifications.slackChannel')" class="ep-forms-sandbox__error">{{ errors.find(e => e.field === 'notifications.slackChannel').message }}</div>
              </div>
              <div class="ep-forms-sandbox__field">
                <ep-checkbox
                  v-model="model.ackRequired"
                  label="Acknowledgement required"
                  :value="'true'"
                  :id="'ack-required-checkbox'"
                  name="ack-required"
                  :disabled="args.formDisabled"
                />
              </div>
            </ep-flex>
          </div>
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Review</h2>
            <div class="ep-forms-sandbox__review">
              <p><strong>Name:</strong> {{ model.name || 'Not set' }}</p>
              <p><strong>Type:</strong> {{ model.type || 'Not set' }}</p>
              <p><strong>Severity:</strong> {{ model.severity || 'Not set' }}</p>
              <p><strong>Assets:</strong> {{ model.assets.length ? model.assets.join(', ') : 'None' }}</p>
              <p><strong>Condition:</strong> {{ model.condition.source }} {{ model.condition.operator }} '{{ model.condition.value }}' {{ model.condition.caseSensitive ? '(case sensitive)' : '' }}</p>
              <p><strong>Schedule:</strong> {{ model.schedule.start ? model.schedule.start.toLocaleDateString() : 'Not set' }} to {{ model.schedule.end ? model.schedule.end.toLocaleDateString() : 'Not set' }}</p>
              <p><strong>Notifications:</strong> {{ [model.notifications.email ? 'Email' : '', model.notifications.slack ? 'Slack' : '', model.notifications.pager ? 'Pager' : ''].filter(Boolean).join(', ') || 'None' }}</p>
              <p><strong>Acknowledgement:</strong> {{ model.ackRequired ? 'Required' : 'Not required' }}</p>
            </div>
          </div>
        </ep-flex>
      </form>
      <div class="ep-forms-sandbox__footer">
        <ep-button-group :items="[]">
          <ep-button @click="onCancel" :disabled="args.formDisabled">Cancel</ep-button>
          <ep-button @click="onTestRule" :disabled="!canTest || args.formDisabled" :loading="isTesting">Test rule</ep-button>
          <ep-button @click="onSaveDraft" :disabled="args.formDisabled">Save draft</ep-button>
          <ep-button @click="onSubmit" :disabled="!canCreate || args.formDisabled" class="ep-button-var--primary">Create rule</ep-button>
        </ep-button-group>
      </div>
    </ep-flex>
  `
})

FormsSandbox.args = {
  formSize: 'large',
  dropdownsLoading: false,
  multiSearchLoading: false,
  formDisabled: false,
  preset: 'Minimal'
}