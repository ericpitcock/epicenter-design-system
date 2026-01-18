import { EpSearchTypeahead } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/SearchTypeahead',
  component: EpSearchTypeahead,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EpSearchTypeahead>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockResults = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' },
  { id: 4, name: 'Date', category: 'Fruit' },
  { id: 5, name: 'Eggplant', category: 'Vegetable' },
];

export const SearchTypeahead: Story = {
  args: {
    resultsKey: 'name',
    returnedSearchResults: mockResults,
  },
};
