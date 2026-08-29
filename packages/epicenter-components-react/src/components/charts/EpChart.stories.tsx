import { EpChart } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { paddedSurface } from '../../../storybook/helpers/decorators';

import { pieChartOptions, stackedBarChartOptions, stackedColumnChartOptions } from './chartOptions';

const meta: Meta<typeof EpChart> = {
  title: 'Components/Charts',
  component: EpChart,
  decorators: [paddedSurface],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    options: { table: { disable: true } },
    chartColors: { table: { disable: true } },
    height: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof EpChart>;

export const PieChart: Story = {
  args: {
    options: pieChartOptions,
    // Series colours come from the --chart-sequence-NN tokens. Setting a
    // --highcharts-color-N here overrides that slot for this chart alone:
    // chartColors: { '--highcharts-color-0': 'red' },
    chartColors: {},
  },
};

export const StackedBarChart: Story = {
  args: {
    options: stackedBarChartOptions,
  },
};

export const StackedColumnChart: Story = {
  args: {
    options: stackedColumnChartOptions,
  },
};
