import { EpDonutChart } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { centeredSurface } from '../../../storybook/helpers/decorators';

const meta: Meta<typeof EpDonutChart> = {
  title: 'Components/Charts/Donut Chart',
  component: EpDonutChart,
  decorators: [centeredSurface],
  argTypes: {
    animate: { table: { disable: true } },
    width: { table: { disable: true } },
    height: { table: { disable: true } },
    margin: { table: { disable: true } },
    data: { table: { disable: true } },
    labels: { table: { disable: true } },
    value: { table: { disable: true } },
    valueTextClass: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof EpDonutChart>;

export const DonutChart: Story = {
  args: {
    data: [28, 33, 44, 51],
    labels: ['Active', 'Inactive', 'Archived', 'Unknown'],
    value: '156',
  },
};
