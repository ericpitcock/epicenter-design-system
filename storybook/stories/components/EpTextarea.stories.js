import { paddedSurface } from '../../helpers/decorators.js'
import EpTextarea from '@/components/textarea/EpTextarea.vue'

export default {
  title: 'Components/Textarea',
  component: EpTextarea,
  decorators: [paddedSurface],
  argTypes: {
    id: {
      name: 'id',
      control: {
        type: 'text',
      }
    },
    name: {
      name: 'name',
      control: {
        type: 'text',
      }
    },
    value: {
      name: 'value',
      control: {
        type: 'text',
      }
    },
    placeholder: {
      name: 'placeholder',
      control: {
        type: 'text',
      }
    },
    disabled: {
      name: 'disabled',
      control: {
        type: 'boolean',
      }
    },
    required: {
      name: 'required',
      control: {
        type: 'boolean',
      }
    },
    rows: {
      name: 'rows',
      control: {
        type: 'number',
      }
    },
    cols: {
      name: 'cols',
      control: {
        type: 'number',
      }
    },
    maxlength: {
      name: 'maxlength',
      control: {
        type: 'number',
      }
    },
    minlength: {
      name: 'minlength',
      control: {
        type: 'number',
      }
    },
    readonly: {
      name: 'readonly',
      control: {
        type: 'boolean',
      }
    },
    autofocus: {
      name: 'autofocus',
      control: {
        type: 'boolean',
      }
    },
    autocomplete: {
      name: 'autocomplete',
      control: {
        type: 'string',
      }
    },
    modelValue: {
      table: {
        disable: true
      }
    },
    spellcheck: {
      name: 'spellcheck',
      control: {
        type: 'boolean',
      }
    },
    wrap: {
      name: 'wrap',
      control: {
        type: 'string',
      }
    },
  }
}

export const Textarea = args => ({
  components: { EpTextarea },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 60rem; height: 30rem;">
      <ep-textarea v-bind="args" v-model="args.modelValue" />
      {{ args.modelValue }}
    </div>
  `
})

Textarea.args = {
  id: 'textarea',
  name: 'textarea',
  // modelValue: '',
  placeholder: 'Placeholder',
  disabled: false,
  required: false,
  rows: 20,
  cols: 50,
  readonly: false,
  autofocus: false,
  autocomplete: 'on',
  spellcheck: false,
  wrap: 'soft',
  style: {
    '--ep-textarea-bg-color': 'var(--interface-foreground)',
  }
}