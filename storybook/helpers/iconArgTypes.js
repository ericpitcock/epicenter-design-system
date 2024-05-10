import { iconOptions } from './iconHelper.js'

const iconArgTypes = {
  name: {
    name: 'Name',
    options: iconOptions,
    control: {
      type: 'select'
    },
    table: {
      category: 'Icon'
    }
  },
  color: {
    name: 'Color',
    control: {
      type: 'color'
    },
    table: {
      category: 'Icon'
    }
  },
  weight: {
    name: 'Weight',
    options: ['extra-light', 'light', 'regular', 'bold'],
    control: {
      type: 'radio'
    },
    table: {
      category: 'Icon'
    }
  },
  size: {
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
  type: {
    table: { disable: true }
  }
}

export { iconArgTypes }