<script setup>
  import { computed, ref } from 'vue'

  import EpButton from '@/components/button/EpButton.vue'
  import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
  import EpFieldset from '@/components/fieldset/EpFieldset.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpHeader from '@/components/header/EpHeader.vue'
  import EpInput from '@/components/input/EpInput.vue'
  import EpRadio from '@/components/radio/EpRadio.vue'
  import EpSelect from '@/components/select/EpSelect.vue'
  import EpTextarea from '@/components/textarea/EpTextarea.vue'
  import useValidation from '@/composables/useValidation.ts'

  const props = defineProps({
    formDisabled: {
      type: Boolean,
      default: false
    }
  })

  const language = ref('spanish')

  const translations = {
    spanish: {
      welcome: '¡Bienvenido a los Tacos de Eric!',
      orderType: 'Tipo de Orden',
      pickup: 'Para Llevar',
      delivery: 'A Domicilio',
      customerInfo: 'Información del Cliente',
      name: 'Nombre',
      namePlaceholder: 'Ingrese su nombre',
      email: 'Correo electrónico (opcional)',
      emailPlaceholder: 'Ingrese su correo electrónico',
      phone: 'Teléfono',
      phonePlaceholder: 'Ingrese su número de teléfono',
      address: 'Dirección',
      addressLabel: 'Dirección',
      addressPlaceholder: 'Ingrese su dirección',
      apartment: 'Apartamento, suite, etc. (opcional)',
      apartmentPlaceholder: 'Apartamento, suite, etc.',
      city: 'Ciudad',
      cityPlaceholder: 'Ingrese su ciudad',
      country: 'País',
      countryPlaceholder: 'Seleccione país',
      province: 'Provincia',
      provincePlaceholder: 'Seleccione provincia',
      postalCode: 'Código postal',
      postalCodePlaceholder: 'Ingrese su código postal',
      tacos: 'Tacos',
      carnitas: 'Carnitas',
      pollo: 'Pollo',
      pescado: 'Pescado',
      lingua: 'Lingua',
      sauce: 'Salsa',
      verde: 'Verde',
      mild: 'Suave',
      hot: 'Picante',
      veryHot: 'Muy Picante',
      extreme: 'EXTREMO',
      sides: 'Acompañamientos',
      guacamole: 'Guacamole',
      chipsAndSalsa: 'Totopos y Salsa',
      specialInstructions: 'Instrucciones Especiales',
      specialInstructionsPlaceholder: '¿Alguna instrucción especial para su pedido?',
      orderSummary: 'Bolsa de Tacos',
      noItems: 'No hay artículos seleccionados',
      instructions: 'Instrucciones',
      total: 'Total',
      orderNow: 'Ordenar Ahora',
      taco: 'Taco',
      salsa: 'Salsa',
      errorRequired: 'Este campo es requerido',
      errorEmail: 'Ingrese un correo electrónico válido',
      errorPhone: 'Ingrese un número de teléfono válido'
    },
    english: {
      welcome: 'Welcome to Eric\'s Tacos!',
      orderType: 'Order Type',
      pickup: 'Pickup',
      delivery: 'Delivery',
      customerInfo: 'Customer Information',
      name: 'Name',
      namePlaceholder: 'Enter your name',
      email: 'Email (optional)',
      emailPlaceholder: 'Enter your email',
      phone: 'Phone',
      phonePlaceholder: 'Enter your phone number',
      address: 'Address',
      addressLabel: 'Address',
      addressPlaceholder: 'Enter your address',
      apartment: 'Apartment, suite, etc. (optional)',
      apartmentPlaceholder: 'Apartment, suite, etc.',
      city: 'City',
      cityPlaceholder: 'Enter your city',
      country: 'Country',
      countryPlaceholder: 'Select country',
      province: 'Province',
      provincePlaceholder: 'Select province',
      postalCode: 'Postal code',
      postalCodePlaceholder: 'Enter your postal code',
      tacos: 'Tacos',
      carnitas: 'Carnitas',
      pollo: 'Chicken',
      pescado: 'Fish',
      lingua: 'Tongue',
      sauce: 'Sauce',
      verde: 'Green',
      mild: 'Mild',
      hot: 'Hot',
      veryHot: 'Very Hot',
      extreme: 'EXTREME',
      sides: 'Sides',
      guacamole: 'Guacamole',
      chipsAndSalsa: 'Chips & Salsa',
      specialInstructions: 'Special Instructions',
      specialInstructionsPlaceholder: 'Any special instructions for your order?',
      orderSummary: 'Taco Bag',
      noItems: 'No items selected',
      instructions: 'Instructions',
      total: 'Total',
      orderNow: 'Order Now',
      taco: 'Taco',
      salsa: 'Sauce',
      errorRequired: 'This field is required',
      errorEmail: 'Please enter a valid email',
      errorPhone: 'Please enter a valid phone number'
    }
  }

  const t = computed(() => translations[language.value])

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
      checked: false,
      price: 0.99,
      quantity: 1
    },
    {
      id: 'mild',
      label: 'Suave',
      name: 'hot-sauces',
      value: 'mild',
      checked: false,
      price: 0.99,
      quantity: 1
    },
    {
      id: 'hot',
      label: 'Picante',
      name: 'hot-sauces',
      value: 'hot',
      checked: false,
      price: 1.49,
      quantity: 1
    },
    {
      id: 'fire',
      label: 'Muy Picante',
      name: 'hot-sauces',
      value: 'fire',
      checked: false,
      price: 1.99,
      quantity: 1
    },
    {
      id: 'extreme',
      label: 'EXTREMO',
      name: 'hot-sauces',
      value: 'extreme',
      checked: false,
      price: 2.99,
      quantity: 1
    }
  ])

  const sides = ref([
    {
      id: 'guacamole',
      label: 'Guacamole',
      name: 'sides',
      value: 'guacamole',
      checked: false,
      price: 5.99,
      quantity: 1
    },
    {
      id: 'chips',
      label: 'Totopos y Salsa',
      name: 'sides',
      value: 'chipsAndSalsa',
      checked: false,
      price: 5.99,
      quantity: 1
    }
  ])

  const model = ref({
    orderType: 'delivery',
    name: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    province: '',
    postalCode: '',
    specialInstructions: ''
  })

  const isDelivery = computed(() => model.value.orderType === 'delivery')

  // Define validation rules
  const validationRules = {
    name: (value) => value && value.trim() !== '',
    phone: (value) => value && value.trim() !== ''
  }

  // Define conditional validation rules for delivery
  const conditionalRules = (modelValue) => {
    if (modelValue.orderType === 'delivery') {
      return {
        address: (value) => value && value.trim() !== '',
        city: (value) => value && value.trim() !== '',
        country: (value) => value && value.trim() !== '',
        province: (value) => value && value.trim() !== '',
        postalCode: (value) => value && value.trim() !== ''
      }
    }
    return {}
  }

  const { errors, submitted, onInput, validateField, validateForm } = useValidation(
    model,
    validationRules,
    conditionalRules
  )

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

  const orderTotal = computed(() => {
    let total = 0

    // Tacos
    tacos.value.forEach(taco => {
      if (taco.checked) {
        total += taco.price * taco.quantity
      }
    })

    // Hot Sauces
    hotSauces.value.forEach(sauce => {
      if (sauce.checked) {
        total += sauce.price * sauce.quantity
      }
    })

    // Sides
    sides.value.forEach(side => {
      if (side.checked) {
        total += side.price * side.quantity
      }
    })

    return total
  })

  const orderSummary = computed(() => {
    const items = []
    const lang = translations[language.value]

    // Tacos
    tacos.value.forEach(taco => {
      if (taco.checked) {
        items.push({
          name: `${lang[taco.id]} ${lang.taco}`,
          quantity: taco.quantity,
          price: taco.price,
          total: taco.price * taco.quantity
        })
      }
    })

    // Hot Sauces
    hotSauces.value.forEach(sauce => {
      if (sauce.checked) {
        const sauceName = sauce.id === 'fire' ? lang.veryHot : lang[sauce.id]
        items.push({
          name: `${lang.salsa} ${sauceName}`,
          quantity: sauce.quantity,
          price: sauce.price,
          total: sauce.price * sauce.quantity
        })
      }
    })

    // Sides
    sides.value.forEach(side => {
      if (side.checked) {
        const sideName = side.id === 'chips' ? lang.chipsAndSalsa : lang[side.id]
        items.push({
          name: sideName,
          quantity: side.quantity,
          price: side.price,
          total: side.price * side.quantity
        })
      }
    })

    return items
  })

  const onSubmit = () => {
    submitted.value = true
    if (!validateForm()) {
      console.log('Form has errors')
      return
    }
    console.log('Order submitted:', model.value)
    console.log('Total:', orderTotal.value)
    // add validation and submission logic here
  }

  const formClasses = computed(() => ({
    'ep-forms-sandbox__form': true,
    'ep-forms-sandbox__form--disabled': props.formDisabled
  }))
</script>

<template>
  <ep-flex
    class="forms-sandbox-container flex-col gap-30"
    style="padding: 2rem 6rem;"
  >
    <!-- Row 1: Header spanning all columns -->
    <ep-header class="forms-sandbox-header">
      <template #left>
        <h1 class="font-size--jumbo">
          {{ t.welcome }}
        </h1>
      </template>
      <template #right>
        <!-- Language Selector -->
        <div
          class="ep-button-group"
          variant="secondary"
        >
          <ep-button
            :class="{ 'ep-button-var--secondary ep-button-group--selected': language === 'spanish' }"
            @click="language = 'spanish'"
          >
            Español
          </ep-button>
          <ep-button
            :class="{ 'ep-button-var--secondary ep-button-group--selected': language === 'english' }"
            @click="language = 'english'"
          >
            English
          </ep-button>
        </div>
      </template>
    </ep-header>

    <!-- Row 2: Three column layout -->
    <div class="forms-sandbox-grid">
      <!-- Column 1: Customer Info & Order Type -->
      <div class="forms-sandbox-column">
        <ep-flex class="flex-col gap-30">
          <p class="font-size--small text-color--subtle">
            All fields required unless noted
          </p>
          <!-- Order Type -->
          <ep-fieldset
            :label="t.orderType"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-flex class="flex-col gap-10">
              <ep-radio
                id="order-type-pickup"
                v-model="model.orderType"
                value="pickup"
                :label="t.pickup"
                name="orderType"
                :disabled="formDisabled"
              />
              <ep-radio
                id="order-type-delivery"
                v-model="model.orderType"
                value="delivery"
                :label="t.delivery"
                name="orderType"
                :disabled="formDisabled"
              />
            </ep-flex>
          </ep-fieldset>

          <!-- Customer Information -->
          <ep-fieldset
            :label="t.customerInfo"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-flex class="flex-col gap-20">
              <ep-input
                v-model="model.name"
                :label="t.name"
                :placeholder="t.namePlaceholder"
                :disabled="formDisabled"
                size="xlarge"
                error-enabled
                :error="errors.name"
                :error-message="errors.name ? t.errorRequired : ''"
                aria-required="true"
                :aria-invalid="errors.name ? 'true' : 'false'"
                autocomplete="name"
                @input="onInput('name')"
                @blur="validateField('name')"
              />
              <ep-input
                v-model="model.phone"
                :label="t.phone"
                :placeholder="t.phonePlaceholder"
                :disabled="formDisabled"
                size="xlarge"
                required
                error-enabled
                :error="errors.phone"
                :error-message="errors.phone ? t.errorRequired : ''"
                aria-required="true"
                :aria-invalid="errors.phone ? 'true' : 'false'"
                autocomplete="tel"
                type="tel"
                @input="onInput('phone')"
                @blur="validateField('phone')"
              />
              <ep-input
                v-model="model.email"
                :label="t.email"
                :placeholder="t.emailPlaceholder"
                :disabled="formDisabled"
                size="xlarge"
                type="email"
                autocomplete="email"
                aria-required="false"
              />
            </ep-flex>
          </ep-fieldset>

          <!-- Delivery Address (conditional) -->
          <ep-fieldset
            v-if="isDelivery"
            :label="t.address"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-flex class="flex-col gap-20">
              <ep-input
                v-model="model.address"
                :label="t.addressLabel"
                :placeholder="t.addressPlaceholder"
                :disabled="formDisabled"
                size="xlarge"
                error-enabled
                :error="errors.address"
                :error-message="errors.address ? t.errorRequired : ''"
                :aria-required="isDelivery ? 'true' : 'false'"
                :aria-invalid="errors.address ? 'true' : 'false'"
                autocomplete="address-line1"
                @input="onInput('address')"
                @blur="validateField('address')"
              />
              <ep-input
                v-model="model.apartment"
                :label="t.apartment"
                :placeholder="t.apartmentPlaceholder"
                :disabled="formDisabled"
                size="xlarge"
                autocomplete="address-line2"
                aria-required="false"
              />
              <ep-input
                v-model="model.city"
                :label="t.city"
                :placeholder="t.cityPlaceholder"
                :disabled="formDisabled"
                size="xlarge"
                error-enabled
                :error="errors.city"
                :error-message="errors.city ? t.errorRequired : ''"
                :aria-required="isDelivery ? 'true' : 'false'"
                :aria-invalid="errors.city ? 'true' : 'false'"
                autocomplete="address-level2"
                @input="onInput('city')"
                @blur="validateField('city')"
              />
              <ep-flex class="flex-row gap-10">
                <ep-select
                  v-model="model.country"
                  :options="[
                    { value: 'Canada', label: 'Canada' },
                    { value: 'USA', label: 'USA' },
                    { value: 'Mexico', label: 'Mexico' }
                  ]"
                  :label="t.country"
                  size="xlarge"
                  :disabled="formDisabled"
                  select-id="country"
                  :placeholder="t.countryPlaceholder"
                  style="flex: 0 1 auto;"
                  error-enabled
                  :error="errors.country"
                  :error-message="errors.country ? t.errorRequired : ''"
                  :aria-required="isDelivery ? 'true' : 'false'"
                  :aria-invalid="errors.country ? 'true' : 'false'"
                  autocomplete="country-name"
                  @change="onInput('country')"
                  @blur="validateField('country')"
                />
                <ep-select
                  v-model="model.province"
                  :options="[
                    { value: 'Quebec', label: 'Quebec' },
                    { value: 'Ontario', label: 'Ontario' },
                    { value: 'BC', label: 'British Columbia' }
                  ]"
                  :label="t.province"
                  size="xlarge"
                  :disabled="formDisabled"
                  select-id="province"
                  :placeholder="t.provincePlaceholder"
                  style="flex: 0 1 auto;"
                  error-enabled
                  :error="errors.province"
                  :error-message="errors.province ? t.errorRequired : ''"
                  :aria-required="isDelivery ? 'true' : 'false'"
                  :aria-invalid="errors.province ? 'true' : 'false'"
                  autocomplete="address-level1"
                  @change="onInput('province')"
                  @blur="validateField('province')"
                />
                <ep-input
                  v-model="model.postalCode"
                  :label="t.postalCode"
                  :placeholder="t.postalCodePlaceholder"
                  :disabled="formDisabled"
                  size="xlarge"
                  style="flex: 0 1 auto;"
                  error-enabled
                  :error="errors.postalCode"
                  :error-message="errors.postalCode ? t.errorRequired : ''"
                  :aria-required="isDelivery ? 'true' : 'false'"
                  :aria-invalid="errors.postalCode ? 'true' : 'false'"
                  autocomplete="postal-code"
                  @input="onInput('postalCode')"
                  @blur="validateField('postalCode')"
                />
              </ep-flex>
            </ep-flex>
          </ep-fieldset>
        </ep-flex>
      </div>

      <!-- Column 2: Order Form -->
      <form
        class="forms-sandbox-column ep-forms-sandbox__form"
        :class="formClasses"
        @submit.prevent="onSubmit"
      >
        <ep-flex class="flex-col gap-30">
          <!-- Tacos -->
          <ep-fieldset
            :label="t.tacos"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-flex class="flex-col gap-10">
              <ep-flex
                v-for="taco in tacos"
                :key="taco.id"
                class="flex-row gap-20"
                style="height: 30px;"
              >
                <ep-checkbox
                  v-bind="taco"
                  v-model="taco.checked"
                  :disabled="formDisabled"
                  style="flex: 0 0 180px;"
                  @update:model-value="updateTaco($event, taco.id)"
                >
                  <div class="ep-checkbox__wrapper">
                    {{ t[taco.id] }}
                    <span class="text-color--subtle">
                      {{ formatPrice(taco.price) }}
                    </span>
                  </div>
                </ep-checkbox>
                <ep-select
                  v-model="taco.quantity"
                  :options="quantityOptions"
                  :disabled="formDisabled || !taco.checked"
                  :select-id="'quantity-' + taco.id"
                  placeholder="Qty"
                  style="flex: 0 0 60px;"
                  :aria-label="'Quantity for ' + t[taco.id] + ' taco'"
                />
              </ep-flex>
            </ep-flex>
          </ep-fieldset>

          <!-- Sauce -->
          <ep-fieldset
            :label="t.sauce"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-flex class="flex-col gap-10">
              <ep-flex
                v-for="sauce in hotSauces"
                :key="sauce.id"
                class="flex-row gap-20"
                style="height: 30px;"
              >
                <ep-checkbox
                  v-bind="sauce"
                  v-model="sauce.checked"
                  :disabled="formDisabled"
                  style="flex: 0 0 180px;"
                  @update:model-value="updateHotSauce($event, sauce.id)"
                >
                  <div class="ep-checkbox__wrapper">
                    {{ sauce.id === 'fire' ? t.veryHot : t[sauce.id] }}
                    <span class="text-color--subtle">{{
                      formatPrice(sauce.price) }}
                    </span>
                  </div>
                </ep-checkbox>
                <ep-select
                  v-model="sauce.quantity"
                  :options="quantityOptions"
                  :disabled="formDisabled || !sauce.checked"
                  :select-id="'quantity-' + sauce.id"
                  placeholder="Qty"
                  style="flex: 0 0 60px;"
                  :aria-label="'Quantity for ' + (sauce.id === 'fire' ? t.veryHot : t[sauce.id]) + ' sauce'"
                />
              </ep-flex>
            </ep-flex>
          </ep-fieldset>

          <!-- Sides -->
          <ep-fieldset
            :label="t.sides"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-flex class="flex-col gap-10">
              <ep-flex
                v-for="side in sides"
                :key="side.id"
                class="flex-row gap-20"
                style="height: 30px;"
              >
                <ep-checkbox
                  v-bind="side"
                  v-model="side.checked"
                  :disabled="formDisabled"
                  style="flex: 0 0 180px;"
                  @update:model-value="updateSide($event, side.id)"
                >
                  <div class="ep-checkbox__wrapper">
                    {{ side.id === 'chips' ? t.chipsAndSalsa : t[side.id] }}
                    <span class="text-color--subtle">
                      {{ formatPrice(side.price) }}
                    </span>
                  </div>
                </ep-checkbox>
                <ep-select
                  v-model="side.quantity"
                  :options="quantityOptions"
                  :disabled="formDisabled || !side.checked"
                  :select-id="'quantity-' + side.id"
                  placeholder="Qty"
                  style="flex: 0 0 60px;"
                  :aria-label="'Quantity for ' + (side.id === 'chips' ? t.chipsAndSalsa : t[side.id])"
                />
              </ep-flex>
            </ep-flex>
          </ep-fieldset>

          <!-- Special Instructions -->
          <ep-fieldset
            :label="t.specialInstructions"
            style="--ep-fieldset-legend-font-size: var(--font-size--large);"
          >
            <ep-textarea
              v-model="model.specialInstructions"
              :placeholder="t.specialInstructionsPlaceholder"
              :disabled="formDisabled"
              :rows="4"
              style="--ep-textarea-resize: none;"
              aria-required="false"
            />
          </ep-fieldset>
        </ep-flex>
      </form>

      <!-- Column 3: Order Summary -->
      <div class="forms-sandbox-column forms-sandbox-summary">
        <div
          class="ep-forms-sandbox__summary"
          style="border: 1px solid var(--border-color); padding: 3rem; border-radius: 0.7rem; background: var(--interface-surface--accent);"
        >
          <ep-flex class="flex-col gap-15">
            <h2 class="ep-forms-sandbox__heading font-size--large">
              {{
                t.orderSummary
              }}
            </h2>

            <div
              v-if="orderSummary.length === 0"
              style="color: var(--text-secondary); padding: 16px 0;"
            >
              {{ t.noItems }}
            </div>

            <div
              v-else
              class="ep-forms-sandbox__order-items"
            >
              <div
                v-for="(item, index) in orderSummary"
                :key="index"
                style="padding: 8px 0; border-bottom: 1px solid var(--border-color);"
              >
                <ep-flex
                  class="flex-row"
                  style="justify-content: space-between;"
                >
                  <span>{{ item.quantity }}x {{ item.name }}</span>
                  <span style="font-weight: 500;">
                    ${{ item.total.toFixed(2) }}
                  </span>
                </ep-flex>
              </div>

              <div
                v-if="model.specialInstructions"
                style="padding: 8px 0;"
              >
                <strong>{{ t.instructions }}:</strong> {{
                  model.specialInstructions
                }}
              </div>

              <div
                style="padding: 16px 0; margin-top: 8px; border-top: 2px solid var(--border-color);"
              >
                <ep-flex
                  class="flex-row"
                  style="justify-content: space-between; font-size: 1.25rem; font-weight: 600;"
                >
                  <span>{{ t.total }}</span>
                  <span>${{ orderTotal.toFixed(2) }}</span>
                </ep-flex>
              </div>
            </div>

            <ep-button
              :disabled="formDisabled || orderSummary.length === 0"
              class="ep-button-var--primary"
              style="width: 100%; margin-top: 8px;"
              @click="onSubmit"
            >
              {{ t.orderNow }}
            </ep-button>
          </ep-flex>
        </div>
      </div>
    </div>
  </ep-flex>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Rye&family=Stint+Ultra+Condensed&family=Stint+Ultra+Expanded&display=swap');

  .forms-sandbox-container {
    max-width: 100%;
    width: 100%;

    .ep-button-var--primary {
      --red: hsl(0, 50%, 50%);
      --orange: hsl(15, 50%, 50%);
      --ep-button-primary-bg: linear-gradient(140deg, var(--red) 30%, var(--orange) 70%);
      // --ep-button-primary-bg: var(--primary-color-base);
      --ep-button-primary-border: var(--red);
      --ep-button-primary-text: white;
      --ep-button-primary-hover-bg: var(--red);
      // --ep-button-primary-hover-bg: hsl(from var(--ep-button-primary-bg) h s calc(l - 5));
      --ep-button-primary-hover-border: hsl(from var(--ep-button-primary-border) h s calc(l - 5));
      --ep-button-primary-hover-text: white;
      --ep-button-primary-active-bg: hsl(from var(--red) h s calc(l - 10));
      // --ep-button-primary-active-bg: hsl(from var(--ep-button-primary-bg) h s calc(l - 10));
      --ep-button-primary-active-border: hsl(from var(--ep-button-primary-border) h s calc(l - 10));
      --ep-button-primary-active-text: white;
    }

    .forms-sandbox-header {
      width: 100%;
    }

    .forms-sandbox-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6rem;
      align-items: start;
    }

    .forms-sandbox-column {
      min-width: 0;
    }

    .forms-sandbox-summary {
      position: sticky;
      top: 2rem;
    }

    .ep-fieldset__legend {
      padding-bottom: 0.5rem;
      border-bottom: 1px dashed hsl(25 38% 49% / 0.3);
      margin-bottom: 2rem;
      color: hsl(25, 38%, 49%);
      font-family: "Rye", serif;
      font-weight: 400;
      font-style: normal;
    }

    .stint-ultra-condensed-regular {
      font-family: "Stint Ultra Condensed", serif;
      font-weight: 400;
      font-style: normal;
    }

    .ep-header {
      --ep-header-left-flex: 2;
      --ep-header-right-flex: 1;
      --ep-header-container-border-style: dashed;
      --ep-header-container-border-color: hsl(54 42% 62% / 0.3);

      h1 {
        color: hsl(54, 42%, 62%);
        font-family: "Rye", serif;
        font-weight: 400;
        font-style: normal;
      }
    }

    .ep-checkbox__wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
