import { iconOptions } from './iconHelper.js'

const iconArgTypes = {
  name: {
    iconName: 'Name',
    options: iconOptions,
    control: {
      type: 'select'
    },
    table: {
      category: 'Icon'
    }
  },
  iconColor: {
    name: 'Color',
    control: {
      type: 'color'
    },
    table: {
      category: 'Icon'
    }
  },
  iconWeight: {
    name: 'Weight',
    options: ['extra-light', 'light', 'regular', 'bold'],
    control: {
      type: 'radio'
    },
    table: {
      category: 'Icon'
    }
  },
  iconSize: {
    name: 'Size',
    control: {
      type: 'range',
      min: 20,
      max: 60,
      step: 2
    },
    table: {
      category: 'Icon'
    }
  },
}

export { iconArgTypes }