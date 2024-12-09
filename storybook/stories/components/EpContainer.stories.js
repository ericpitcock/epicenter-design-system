import EpActionBar from '@/components/action-bar/EpActionBar.vue'
import commonActionBarArgs from '../../helpers/commonActionBarArgs.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import { computed } from 'vue'

const container = () => {
  return {
    template:
      '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Container/Container',
  component: EpContainer,
  decorators: [container],
  argTypes: {
    calculateHeight: {
      table: {
        disable: true
      }
    },
    calculateHeightOffset: {
      table: {
        disable: true
      }
    },
    display: {
      name: 'Display',
      options: [
        'block',
        'inline',
        'inline-block',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'flow-root'
      ],
      control: {
        type: 'select',
        labels: {
          block: 'Block',
          inline: 'Inline',
          'inline-block': 'Inline Block',
          flex: 'Flex',
          'inline-flex': 'Inline Flex',
          grid: 'Grid',
          'inline-grid': 'Inline Grid',
          'flow-root': 'Flow Root'
        }
      }
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    minWidth: {
      name: 'Min Width',
      control: {
        type: 'text'
      }
    },
    maxWidth: {
      name: 'Max Width',
      control: {
        type: 'text'
      }
    },
    height: {
      name: 'Height',
      control: {
        type: 'text'
      }
    },
    minHeight: {
      name: 'Min Height',
      control: {
        type: 'text'
      }
    },
    maxHeight: {
      name: 'Max Height',
      control: {
        type: 'text'
      }
    },
    containerPadding: {
      name: 'Container Padding',
      control: {
        type: 'text'
      }
    },
    contentPadding: {
      name: 'Content Padding',
      control: {
        type: 'text'
      }
    },
    padding: {
      name: 'Padding',
      control: {
        type: 'text'
      }
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text'
      }
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      }
    },
    borderWidth: {
      name: 'Border Width',
      control: {
        type: 'text'
      }
    },
    borderStyle: {
      name: 'Border Style',
      options: [
        'none',
        'hidden',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'initial',
        'inherit'
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
          hidden: 'Hidden',
          dotted: 'Dotted',
          dashed: 'Dashed',
          solid: 'Solid',
          double: 'Double',
          groove: 'Groove',
          ridge: 'Ridge',
          inset: 'Inset',
          outset: 'Outset',
          initial: 'Initial',
          inherit: 'Inherit'
        }
      }
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text'
      }
    },
    overflow: {
      name: 'Overflow',
      options: [
        'visible',
        'hidden',
        'scroll',
        'auto',
        'overlay',
        'inherit',
        'initial',
        'unset'
      ],
      control: {
        type: 'select',
        labels: {
          visible: 'Visible',
          hidden: 'Hidden',
          scroll: 'Scroll',
          auto: 'Auto',
          overlay: 'Overlay',
          inherit: 'Inherit',
          initial: 'Initial',
          unset: 'Unset'
        }
      }
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const Container = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
  },
  setup() {
    const styles = computed(() => ({
      '--ep-container-width': args.width,
      '--ep-container-min-width': args.minWidth,
      '--ep-container-max-width': args.maxWidth,
      '--ep-container-height': args.height,
      '--ep-container-min-height': args.minHeight,
      '--ep-container-max-height': args.maxHeight,
      '--ep-container-padding': args.containerPadding,
      '--ep-container-content-padding': args.contentPadding,
      '--ep-container-bg-color': args.backgroundColor,
      '--ep-container-border-radius': args.borderRadius,
      '--ep-container-border-width': args.borderWidth,
      '--ep-container-border-style': args.borderStyle,
      '--ep-container-border-color': args.borderColor,
      '--ep-container-overflow': args.overflow,
    }))

    return {
      args,
      commonActionBarArgs,
      styles
    }
  },
  template: `
    <ep-container :style="styles">
      <template #header>
        <ep-header padding="0">
          <template #left>
            Header
          </template>
          <template #right>
            <ep-action-bar
              v-bind="commonActionBarArgs"
              :style="{'--ep-action-bar-justify-content': 'flex-end'}"
            />
          </template>
        </ep-header>
      </template>
      <template #default>
      </template>
    </ep-container>
  `
})

Container.args = {
  width: '100%',
  minWidth: '0',
  maxWidth: '120rem',
  height: '100%',
  minHeight: 'auto',
  maxHeight: 'none',
  containerPadding: '0 3rem',
  contentPadding: '0',
  padding: '0',
  backgroundColor: 'var(--interface-surface)',
  borderRadius: 'var(--border-radius--large)',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  overflow: 'hidden',
  stickyHeader: false
}
