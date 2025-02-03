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
    flexDirection: {
      name: 'Flex Direction',
      options: [
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ],
      mapping: {
        'row': 'flex-row',
        'row-reverse': 'flex-row-reverse',
        'column': 'flex-col',
        'column-reverse': 'flex-col-reverse'
      },
      control: {
        type: 'select',
      }
    },
    flexWrap: {
      name: 'Flex Wrap',
      options: [
        'wrap',
        'nowrap',
        'wrap-reverse'
      ],
      mapping: {
        'wrap': 'flex-wrap',
        'nowrap': 'flex-nowrap',
        'wrap-reverse': 'flex-wrap-reverse'
      },
      control: {
        type: 'select',
      }
    },
    justifyContent: {
      name: 'Justify Content',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      mapping: {
        'flex-start': 'justify-flex-start',
        'center': 'justify-center',
        'flex-end': 'justify-end',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly',
      },
      control: {
        type: 'select',
      }
    },
    alignItems: {
      name: 'Align Items',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'stretch',
      ],
      mapping: {
        'flex-start': 'align-start',
        'center': 'align-center',
        'flex-end': 'align-end',
        'stretch': 'align-stretch',
      },
      control: {
        type: 'select',
      }
    },
    alignContent: {
      name: 'Align Content',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'stretch',
      ],
      mapping: {
        'flex-start': 'align-content-start',
        'center': 'align-content-center',
        'flex-end': 'align-content-end',
        'space-between': 'align-content-between',
        'space-around': 'align-content-around',
        'stretch': 'align-content-stretch',
      },
      control: {
        type: 'select',
      }
    },
    gap: {
      name: 'Gap',
      options: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100
      ],
      mapping: {
        0: '',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        7: 'gap-7',
        8: 'gap-8',
        9: 'gap-9',
        10: 'gap-10',
        20: 'gap-20',
        30: 'gap-30',
        40: 'gap-40',
        50: 'gap-50',
        60: 'gap-60',
        70: 'gap-70',
        80: 'gap-80',
        90: 'gap-90',
        100: 'gap-100'
      },
      control: {
        type: 'select',
      }
    },
    // padding: {
    //   name: 'Padding',
    //   control: {
    //     type: 'text'
    //   }
    // }
  }
}

export const Flex = args => ({
  components: { EpFlex },
  setup() {
    const flexProps = computed(() => {
      return `${args.width},${args.height},${args.flexDirection},${args.flexWrap},${args.justifyContent},${args.alignItems},${args.alignContent},${args.gap},${args.padding}`
    })

    const flexClasses = computed(() => {
      return `${args.flexDirection} ${args.flexWrap} ${args.justifyContent} ${args.alignItems} ${args.alignContent} ${args.gap}`
    })

    return { args, flexProps, flexClasses }
  },
  template: `
    <div :class="['ep-flex', flexClasses]" style="height: 100%;">
      <div
        v-for="n in 5"
        :key="n"
        style="width: 100px; height: 100px; background-color: #f0f0f0; color: black; padding: 10px; display: grid; place-content: center;"
      >
        Item {{ n }}
      </div>
    </div>
  `
})

Flex.args = {
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: 0,
}
