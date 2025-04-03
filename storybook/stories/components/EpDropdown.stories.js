import { faker } from '@faker-js/faker'
import { computed, onMounted } from 'vue'

import EpDropdown from '@/components/dropdown/EpDropdown.vue'

import { centeredBg } from '../../helpers/decorators.js'
import { iconMapping, iconOptions } from '../../helpers/iconHelper.js'

const fakeDropdownItems = [
  {
    section: true,
    label: 'Cheap'
  },
  {
    id: faker.string.uuid(),
    label: 'Drip',
  },
  {
    id: faker.string.uuid(),
    label: 'French Press',
  },
  {
    divider: true
  },
  {
    section: true,
    label: 'Expensive'
  },
  {
    id: faker.string.uuid(),
    label: 'Latte',
  },
  {
    id: faker.string.uuid(),
    label: 'Espresso',
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [centeredBg],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    'buttonProps.size': {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
    'buttonProps.iconLeft': {
      name: 'Icon Left',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      }
    },
    alignRight: {
      name: 'Align Right',
      control: {
        type: 'boolean'
      }
    },
    button: { table: { disable: true } },
    buttonProps: { table: { disable: true } },
    // containerProps: { table: { disable: true } },
    menuItems: { table: { disable: true } },
    showOnHover: {
      name: 'Show On Hover',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const DeprecatedProps = args => ({
  components: {
    EpDropdown
  },
  setup() {
    const buttonProps = computed(() => ({
      size: args['buttonProps.size'],
      label: 'Choose your coffee',
      iconRight: { name: 'chevron-down' },
      iconLeft: args['buttonProps.iconLeft'],
      classes: { [args['buttonProps.classes']]: true }
    }))

    const onClick = (item) => {
      console.log('clicked:', item.label)
    }

    return { args, buttonProps, onClick }
  },
  template: `
    <ep-dropdown
      :buttonProps="buttonProps"
      :menuItems="args.menuItems"
      menu-class="special-class"
      v-bind="args"
      @click="onClick"
      @close="() => console.log('closed')"
    />
  `
})

DeprecatedProps.args = {
  disabled: false,
  'buttonProps.size': 'large',
  'buttonProps.iconLeft': 'None',
  'buttonProps.classes': 'button-variant-primary',
  alignRight: false,
  menuItems: fakeDropdownItems,
  showOnHover: false
}

export const Dropdown = args => ({
  components: {
    EpDropdown
  },
  setup() {
    const buttonProps = computed(() => ({
      size: args['buttonProps.size'],
      label: 'Choose your coffee',
      iconRight: { name: 'chevron-down' },
      iconLeft: args['buttonProps.iconLeft'],
      class: 'ep-button-var--primary'
    }))

    const menuProps = computed(() => ({
      menuItems: fakeDropdownItems,
      class: 'special-class',
    }))

    const onClick = (item) => {
      console.log('clicked:', item.label)
    }

    return { args, buttonProps, menuProps, onClick }
  },
  template: `
    <ep-dropdown
      :buttonProps="buttonProps"
      :menuProps="menuProps"
      v-bind="args"
      @click="onClick"
      @close="() => console.log('closed')"
    />
  `
})

Dropdown.args = {
  disabled: false,
  'buttonProps.size': 'large',
  'buttonProps.iconLeft': 'None',
  alignRight: false,
  showOnHover: false
}

export const CustomDropdown = args => ({
  components: { EpDropdown },
  setup() {
    // Inject keyframes for the gradient animation if not already added
    onMounted(() => {
      if (!document.getElementById('gradient-keyframes')) {
        const style = document.createElement('style')
        style.id = 'gradient-keyframes'
        style.innerHTML = `
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `
        document.head.appendChild(style)
      }
    })
    return { args }
  },
  template: `
    <ep-dropdown v-bind="args">
      <template #trigger>
        <!-- Custom trigger: a shiny blue triangle -->
        <div 
          style="
            width: 0; 
            height: 0; 
            border-left: 20px solid transparent; 
            border-right: 20px solid transparent; 
            border-bottom: 30px solid #0063ff;
            cursor: pointer;
          ">
        </div>
      </template>
      <template #content>
        <!-- Custom content: a crazy animated CSS gradient -->
        <div style="padding: 8px;">
          <div style="
            width: 100%; 
            height: 200px; 
            background: linear-gradient(135deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff);
            background-size: 300% 300%;
            animation: gradientAnimation 5s ease infinite;
          ">
          </div>
        </div>
      </template>
    </ep-dropdown>
  `
})

CustomDropdown.args = {
  disabled: false,
  alignRight: false,
  showOnHover: false
}
