import { paddedSurface } from '../../helpers/decorators.js'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import { computed } from 'vue'

export default {
  title: 'Components/Flex',
  component: EpFlex,
  decorators: [paddedSurface],
  argTypes: {
    flexProps: {
      table: {
        disable: true
      }
    },
    width: {
      name: 'Width',
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
    flexFlow: {
      name: 'Flex Flow',
      options: [
        'row wrap',
        'row nowrap',
        'row-reverse wrap',
        'row-reverse nowrap',
        'column wrap',
        'column nowrap',
        'column-reverse wrap',
        'column-reverse nowrap',
      ],
      // mappping: {
      //   'row wrap': 'row nowrap',
      //   'row nowrap': 'row nowrap',
      //   'row-reverse wrap': 'row-reverse nowrap',
      //   'row-reverse nowrap': 'row-reverse nowrap',
      //   'column wrap': 'column wrap',
      //   'column nowrap': 'column nowrap',
      //   'column-reverse nowrap': 'column-reverse nowrap',
      //   'column-reverse wrap': 'column-reverse wrap',
      // },
      control: {
        type: 'select',
      }
    },
    justifyContent: {
      name: 'Justify Content',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'left',
        'right',
        'safe center',
        'unsafe center'
      ],
      control: {
        type: 'select',
      }
    },
    alignItems: {
      name: 'Align Items',
      options: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'first baseline',
        'last baseline',
        'start',
        'end',
        'self-start',
        'self-end',
        'safe center',
        'unsafe center'
      ],
      control: {
        type: 'select',
      }
    },
    alignContent: {
      name: 'Align Content',
      options: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center'
      ],
      control: {
        type: 'select',
      }
    },
    gap: {
      name: 'Gap',
      control: {
        type: 'text'
      }
    },
    padding: {
      name: 'Padding',
      control: {
        type: 'text'
      }
    }
  }
}

export const Flex = args => ({
  components: { EpFlex },
  setup() {
    const flexProps = computed(() => {
      return `${args.width},${args.height},${args.flexFlow},${args.justifyContent},${args.alignItems},${args.alignContent},${args.gap},${args.padding}`
    })

    return { args, flexProps }
  },
  template: `
    <ep-flex :flex-props="flexProps">
      <div
        v-for="n in 5"
        :key="n"
        style="width: 100px; height: 100px; background-color: #f0f0f0; color: black; padding: 10px; text-align: center;"
      >
        Item {{ n }}
      </div>
    </ep-flex>
  `
})

// width
// height
// flexFlow
// justifyContent
// alignItems
// alignContent
// gap
// padding

Flex.args = {
  width: '100%',
  height: '100%',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1rem',
  padding: '1rem',
}
