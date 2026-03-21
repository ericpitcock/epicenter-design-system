import { EpSelect } from '@ericpitcock/epicenter-components-react'
import type { EpSelectProps } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useMemo, useState } from 'react'

import { paddedSurface } from '../../../storybook/helpers/decorators'
import { componentNames, useIconComponent } from '../../../storybook/helpers/useIcons'

type SelectStoryProps = EpSelectProps & {
  enabledIcons?: boolean
  iconLeftName?: string
}

const meta: Meta<SelectStoryProps> = {
  title: 'Components/Select',
  component: EpSelect,
  decorators: [paddedSurface],
  argTypes: {
    size: {
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
    label: {
      name: 'Label',
      control: {
        type: 'text'
      }
    },
    enabledIcons: {
      name: 'Left Icon Enabled',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Icons'
      }
    },
    iconLeftName: {
      if: { arg: 'enabledIcons' },
      name: 'Left Icon',
      options: componentNames,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    selectId: {
      table: { disable: true }
    },
    options: {
      table: { disable: true }
    },
    value: { table: { disable: true } },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    autofocus: {
      name: 'Autofocus',
      control: {
        type: 'boolean'
      }
    },
    errorEnabled: {
      table: { disable: true }
    },
    error: {
      name: 'Error',
      control: {
        type: 'boolean'
      }
    },
    errorMessage: {
      name: 'Error Message',
      control: {
        type: 'text'
      }
    },
    readonly: { table: { disable: true } },
    required: { table: { disable: true } },
    // events
    onBlur: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onChange: { table: { disable: true } },
  }
}

export default meta
type Story = StoryObj<SelectStoryProps>

const coffeeOptions = [
  { label: 'Drip Coffee', value: 'drip' },
  { label: 'Espresso', value: 'espresso' },
  { label: 'Cold Brew', value: 'cold-brew' },
  { label: 'French Press', value: 'french-press' },
  { label: 'Pour Over', value: 'pour-over' },
  { label: 'Chemex', value: 'chemex' },
  { label: 'Aeropress', value: 'aeropress' },
]

export const Select: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<string | number>('')
    const [errorMessage, setErrorMessage] = useState(args.errorMessage)
    const IconLeft = useIconComponent(args.enabledIcons ? args.iconLeftName : undefined)

    const demoWidth = useMemo(() => {
      const widths: Record<string, string> = {
        xlarge: '300px',
        large: '250px',
        default: '200px',
        small: '150px'
      }
      return widths[args.size] || '200px'
    }, [args.size])

    useEffect(() => {
      if (args.error) {
        setErrorMessage('Sorry, bro, there\u2019s been an error')
      } else {
        setErrorMessage('')
      }
    }, [args.error])

    return (
      <div style={{ maxWidth: demoWidth }}>
        <EpSelect
          selectId={args.selectId}
          label={args.label}
          size={args.size}
          placeholder={args.placeholder}
          disabled={args.disabled}
          autofocus={args.autofocus}
          errorEnabled={args.errorEnabled}
          error={args.error}
          errorMessage={errorMessage}
          options={coffeeOptions}
          value={value}
          onChange={setValue}
          iconLeft={IconLeft ? <IconLeft /> : undefined}
        />
      </div>
    )
  },
  args: {
    selectId: 'select',
    label: 'What\u2019s your favorite type of coffee?',
    enabledIcons: true,
    iconLeftName: 'Coffee02',
    size: 'xlarge',
    placeholder: 'Select coffee',
    disabled: false,
    autofocus: false,
    errorEnabled: true,
    error: false,
    errorMessage: '',
  }
}
