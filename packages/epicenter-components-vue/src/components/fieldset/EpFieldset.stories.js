import { paddedSurface } from '@sb/helpers/decorators.js'
import { ref } from 'vue'

import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpFieldset from '@/components/fieldset/EpFieldset.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpRadio from '@/components/radio/EpRadio.vue'

export default {
  title: 'Components/Fieldset',
  component: EpFieldset,
  decorators: [paddedSurface],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text'
      }
    }
  }
}

export const WithRadioButtons = args => ({
  components: {
    EpFieldset,
    EpFlex,
    EpRadio
  },
  setup() {
    const radioButtons = [
      {
        id: 'size-small',
        label: 'Small',
        name: 'size',
        value: 'small'
      },
      {
        id: 'size-medium',
        label: 'Medium',
        name: 'size',
        value: 'medium'
      },
      {
        id: 'size-large',
        label: 'Large',
        name: 'size',
        value: 'large'
      },
      {
        id: 'size-xlarge',
        label: 'Extra Large',
        name: 'size',
        value: 'xlarge'
      }
    ]

    const selectedSize = ref('medium')

    return { args, radioButtons, selectedSize }
  },
  template: `
    <ep-fieldset v-bind="args">
      <ep-flex class="flex-col gap-10">
        <ep-radio
          v-for="radio in radioButtons"
          :key="radio.id"
          v-bind="radio"
          v-model="selectedSize"
        />
      </ep-flex>
    </ep-fieldset>
  `
})

WithRadioButtons.args = {
  label: 'Select Size'
}

export const WithCheckboxes = args => ({
  components: {
    EpFieldset,
    EpFlex,
    EpCheckbox
  },
  setup() {
    const features = ref([
      {
        id: 'feature-wifi',
        label: 'WiFi',
        name: 'features',
        value: 'wifi',
        checked: true
      },
      {
        id: 'feature-parking',
        label: 'Parking',
        name: 'features',
        value: 'parking',
        checked: false
      },
      {
        id: 'feature-pool',
        label: 'Pool',
        name: 'features',
        value: 'pool',
        checked: true
      },
      {
        id: 'feature-gym',
        label: 'Gym',
        name: 'features',
        value: 'gym',
        checked: false
      }
    ])

    const updateChecked = (event, id) => {
      const feature = features.value.find(f => f.id === id)
      if (feature) {
        feature.checked = event
      }
    }

    return { args, features, updateChecked }
  },
  template: `
    <ep-fieldset v-bind="args">
      <ep-flex class="flex-col gap-10">
        <ep-checkbox
          v-for="feature in features"
          :key="feature.id"
          v-bind="feature"
          @update:modelValue="updateChecked($event, feature.id)"
        />
      </ep-flex>
    </ep-fieldset>
  `
})

WithCheckboxes.args = {
  label: 'Amenities'
}

export const MultipleFieldsets = args => ({
  components: {
    EpFieldset,
    EpRadio,
    EpCheckbox,
    EpFlex
  },
  setup() {
    const shippingMethods = [
      {
        id: 'shipping-standard',
        label: 'Standard (5-7 days)',
        name: 'shipping',
        value: 'standard'
      },
      {
        id: 'shipping-express',
        label: 'Express (2-3 days)',
        name: 'shipping',
        value: 'express'
      },
      {
        id: 'shipping-overnight',
        label: 'Overnight',
        name: 'shipping',
        value: 'overnight',
        disabled: true
      }
    ]

    const selectedShipping = ref('standard')

    const notifications = ref([
      {
        id: 'notify-email',
        label: 'Email notifications',
        name: 'notifications',
        value: 'email',
        checked: true
      },
      {
        id: 'notify-sms',
        label: 'SMS notifications',
        name: 'notifications',
        value: 'sms',
        checked: false,
        disabled: true
      },
      {
        id: 'notify-push',
        label: 'Push notifications',
        name: 'notifications',
        value: 'push',
        checked: true
      }
    ])

    const updateNotification = (event, id) => {
      const notification = notifications.value.find(n => n.id === id)
      if (notification) {
        notification.checked = event
      }
    }

    return { args, shippingMethods, selectedShipping, notifications, updateNotification }
  },
  template: `
    <ep-flex class="flex-col gap-40">
      <ep-fieldset label="Shipping Method">
        <ep-flex class="flex-col gap-10">
          <ep-radio
            v-for="method in shippingMethods"
            :key="method.id"
            v-bind="method"
            v-model="selectedShipping"
          />
        </ep-flex>
      </ep-fieldset>

      <ep-fieldset label="Notification Preferences">
        <ep-flex class="flex-col gap-10">
          <ep-checkbox
            v-for="notification in notifications"
            :key="notification.id"
            v-bind="notification"
            @update:modelValue="updateNotification($event, notification.id)"
          />
        </ep-flex>
      </ep-fieldset>
    </ep-flex>
  `
})

export const NoLabel = args => ({
  components: {
    EpFieldset,
    EpFlex,
    EpCheckbox
  },
  setup() {
    const options = ref([
      {
        id: 'option1',
        label: 'Option 1',
        name: 'options',
        value: 'option1',
        checked: false
      },
      {
        id: 'option2',
        label: 'Option 2',
        name: 'options',
        value: 'option2',
        checked: true
      }
    ])

    const updateOption = (event, id) => {
      const option = options.value.find(o => o.id === id)
      if (option) {
        option.checked = event
      }
    }

    return { args, options, updateOption }
  },
  template: `
    <ep-fieldset>
      <ep-flex class="flex-col gap-10">
        <ep-checkbox
          v-for="option in options"
          :key="option.id"
          v-bind="option"
          @update:modelValue="updateOption($event, option.id)"
        />
      </ep-flex>
    </ep-fieldset>
  `
})
