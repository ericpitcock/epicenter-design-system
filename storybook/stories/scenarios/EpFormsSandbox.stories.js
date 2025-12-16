import { computed, ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpDivider from '@/components/divider/EpDivider.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpInput from '@/components/input/EpInput.vue'
import EpRadio from '@/components/radio/EpRadio.vue'
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
    formDisabled: {
      name: 'Form Disabled',
      control: { type: 'boolean' }
    }
  }
}

export const FormsSandbox = args => ({
  components: { EpButton, EpCheckbox, EpDivider, EpFlex, EpInput, EpRadio, EpSelect },
  setup() {
    const tacos = ref([
      {
        id: 'carnitas',
        label: 'Carnitas',
        name: 'tacos',
        value: 'carnitas',
        checked: false,
        price: 3.99,
        quantity: 1
      },
      {
        id: 'pollo',
        label: 'Pollo',
        name: 'tacos',
        value: 'pollo',
        checked: false,
        price: 3.49,
        quantity: 1
      },
      {
        id: 'pescado',
        label: 'Pescado',
        name: 'tacos',
        value: 'pescado',
        checked: false,
        price: 4.99,
        quantity: 1
      },
      {
        id: 'lingua',
        label: 'Lingua',
        name: 'tacos',
        value: 'lingua',
        checked: false,
        price: 4.49,
        quantity: 1
      }
    ])

    const hotSauces = ref([
      {
        id: 'verde',
        label: 'Verde',
        name: 'hot-sauces',
        value: 'verde',
        checked: false
      },
      {
        id: 'mild',
        label: 'Mild',
        name: 'hot-sauces',
        value: 'mild',
        checked: false
      },
      {
        id: 'hot',
        label: 'Hot',
        name: 'hot-sauces',
        value: 'hot',
        checked: false
      },
      {
        id: 'fire',
        label: 'Fire',
        name: 'hot-sauces',
        value: 'fire',
        checked: false
      },
      {
        id: 'extreme',
        label: 'EXTREME',
        name: 'hot-sauces',
        value: 'extreme',
        checked: false
      }
    ])

    const sides = ref([
      {
        id: 'guacamole',
        label: 'Guacamole $5.99',
        name: 'sides',
        value: 'guacamole',
        checked: false,
        price: 5.99
      },
      {
        id: 'chips',
        label: 'Chips & Salsa $5.99',
        name: 'sides',
        value: 'chipsAndSalsa',
        checked: false,
        price: 5.99
      }
    ])

    const model = ref({
      orderType: 'pickup',
      address: ''
    })

    const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
      value: i + 1,
      label: String(i + 1)
    }))

    const formatPrice = (price) => `$${price.toFixed(2)}`

    const updateTaco = (event, id) => {
      const taco = tacos.value.find(t => t.id === id)
      if (taco) taco.checked = event
    }

    const updateHotSauce = (event, id) => {
      const sauce = hotSauces.value.find(s => s.id === id)
      if (sauce) sauce.checked = event
    }

    const updateSide = (event, id) => {
      const side = sides.value.find(s => s.id === id)
      if (side) side.checked = event
    }

    const isDelivery = computed(() => model.value.orderType === 'delivery')

    const orderTotal = computed(() => {
      let total = 0

      // Tacos
      tacos.value.forEach(taco => {
        if (taco.checked) {
          total += taco.price * taco.quantity
        }
      })

      // Sides
      sides.value.forEach(side => {
        if (side.checked) {
          total += side.price
        }
      })

      return total
    })

    const orderSummary = computed(() => {
      const items = []

      // Tacos
      tacos.value.forEach(taco => {
        if (taco.checked) {
          items.push({
            name: `${taco.label} Taco`,
            quantity: taco.quantity,
            price: taco.price,
            total: taco.price * taco.quantity
          })
        }
      })

      // Sides
      sides.value.forEach(side => {
        if (side.checked) {
          items.push({
            name: side.label.replace(/\s\$[\d.]+$/, ''),
            quantity: 1,
            price: side.price,
            total: side.price
          })
        }
      })

      return items
    })

    const selectedHotSauces = computed(() => {
      return hotSauces.value
        .filter(sauce => sauce.checked)
        .map(sauce => sauce.label)
    })

    const onSubmit = () => {
      console.log('Order submitted:', model.value)
      console.log('Total:', orderTotal.value)
    }

    const formClasses = computed(() => ({
      'ep-forms-sandbox__form': true,
      [`ep-forms-sandbox__form--${args.formSize}`]: args.formSize !== 'default',
      'ep-forms-sandbox__form--disabled': args.formDisabled
    }))

    return {
      model,
      tacos,
      hotSauces,
      sides,
      quantityOptions,
      formatPrice,
      updateTaco,
      updateHotSauce,
      updateSide,
      isDelivery,
      orderTotal,
      orderSummary,
      selectedHotSauces,
      onSubmit,
      formClasses,
      args
    }
  },
  template: `
    <ep-flex class="flex-row gap-20" style="align-items: flex-start;">
      <!-- Left Column: Order Form (75%) -->
      <form class="ep-forms-sandbox__form" :class="formClasses" @submit.prevent="onSubmit" style="flex: 3;">
        <ep-flex class="flex-col gap-40">
          <!-- Order Type -->
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Order Type</h2>
            <ep-divider />
            <ep-flex class="flex-row gap-20" style="margin-top: 16px;">
              <ep-radio
                v-model="model.orderType"
                value="pickup"
                label="Pickup"
                id="order-type-pickup"
                name="orderType"
                :disabled="args.formDisabled"
              />
              <ep-radio
                v-model="model.orderType"
                value="delivery"
                label="Delivery"
                id="order-type-delivery"
                name="orderType"
                :disabled="args.formDisabled"
              />
            </ep-flex>
          </div>

          <!-- Address (conditional) -->
          <div v-if="isDelivery" class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Address</h2>
            <ep-divider />
            <div style="margin-top: 16px;">
              <ep-input
                v-model="model.address"
                label="Delivery address"
                placeholder="Enter your delivery address"
                :disabled="args.formDisabled"
                :size="args.formSize"
              />
            </div>
          </div>

          <!-- Tacos -->
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Tacos</h2>
            <ep-divider />
            <ep-flex class="flex-col gap-10" style="margin-top: 16px;">
              <ep-flex
                v-for="taco in tacos"
                :key="taco.id"
                class="flex-row gap-20"
              >
                <ep-checkbox
                  v-bind="taco"
                  :label="taco.label + ' (' + formatPrice(taco.price) + ')'"
                  v-model="taco.checked"
                  @update:modelValue="updateTaco($event, taco.id)"
                  style="flex: 0 0 140px;"
                />
                <ep-select
                  v-model="taco.quantity"
                  :options="quantityOptions"
                  :size="args.formSize"
                  :disabled="args.formDisabled || !taco.checked"
                  :selectId="'quantity-' + taco.id"
                  placeholder="Qty"
                  style="--ep-input-error-display: none; flex: 0 0 60px;"
                />
              </ep-flex>
            </ep-flex>
          </div>

          <!-- Hot Sauce -->
          <ep-flex class="flex-col gap-20 ep-forms-sandbox__section">
            <div>
              <h2 class="ep-forms-sandbox__heading font-size--large">Hot Sauce</h2>
            <ep-divider />
            </div>
            <ep-flex class="flex-col gap-10">
              <ep-checkbox
                v-for="sauce in hotSauces"
                :key="sauce.id"
                v-bind="sauce"
                v-model="sauce.checked"
                @update:modelValue="updateHotSauce($event, sauce.id)"
              />
            </ep-flex>
          </ep-flex>

          <!-- Sides -->
          <div class="ep-forms-sandbox__section">
            <h2 class="ep-forms-sandbox__heading font-size--large">Sides</h2>
            <ep-divider />
            <ep-flex class="flex-col gap-8" style="margin-top: 16px;">
              <ep-checkbox
                v-for="side in sides"
                :key="side.id"
                v-bind="side"
                v-model="side.checked"
                @update:modelValue="updateSide($event, side.id)"
              />
            </ep-flex>
          </div>
        </ep-flex>
      </form>

      <!-- Right Column: Order Summary (25%) -->
      <div class="ep-forms-sandbox__summary" style="flex: 1; position: sticky; top: 20px;">
        <ep-flex class="flex-col gap-15">
          <h2 class="ep-forms-sandbox__heading font-size--large">Order Summary</h2>
          <ep-divider />
          
          <div v-if="orderSummary.length === 0" style="color: var(--text-secondary); padding: 16px 0;">
            No items selected
          </div>
          
          <div v-else class="ep-forms-sandbox__order-items">
            <div v-for="(item, index) in orderSummary" :key="index" style="padding: 8px 0; border-bottom: 1px solid var(--border-color);">
              <ep-flex class="flex-row" style="justify-content: space-between;">
                <span>{{ item.quantity }}x {{ item.name }}</span>
                <span style="font-weight: 500;">\${{ item.total.toFixed(2) }}</span>
              </ep-flex>
            </div>
            
            <div v-if="selectedHotSauces.length > 0" style="padding: 8px 0; font-size: 0.875rem; color: var(--text-secondary);">
              Hot sauces: {{ selectedHotSauces.join(', ') }}
            </div>
            
            <div style="padding: 16px 0; margin-top: 8px; border-top: 2px solid var(--border-color);">
              <ep-flex class="flex-row" style="justify-content: space-between; font-size: 1.25rem; font-weight: 600;">
                <span>Total</span>
                <span>\${{ orderTotal.toFixed(2) }}</span>
              </ep-flex>
            </div>
          </div>
          
          <ep-button 
            @click="onSubmit" 
            :disabled="args.formDisabled || orderSummary.length === 0" 
            class="ep-button-var--primary"
            style="width: 100%; margin-top: 8px;"
          >
            Order Now
          </ep-button>
        </ep-flex>
      </div>
    </ep-flex>
  `
})

FormsSandbox.args = {
  formSize: 'default',
  formDisabled: false
}