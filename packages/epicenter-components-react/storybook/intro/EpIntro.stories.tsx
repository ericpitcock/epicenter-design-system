import type { Meta, StoryObj } from '@storybook/react-vite'

import { EpIntro } from './EpIntro'

const meta: Meta<typeof EpIntro> = {
  title: 'Intro',
  component: EpIntro,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof EpIntro>

export const Intro: Story = {}
