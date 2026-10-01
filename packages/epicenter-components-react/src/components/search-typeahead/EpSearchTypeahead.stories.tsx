import { EpSearchTypeahead } from '@ericpitcock/epicenter-components-react';
import type { SearchResult } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

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
  { id: 2, name: 'Apricot', category: 'Fruit' },
  { id: 3, name: 'Banana', category: 'Fruit' },
  { id: 4, name: 'Carrot', category: 'Vegetable' },
  { id: 5, name: 'Date', category: 'Fruit' },
  { id: 6, name: 'Eggplant', category: 'Vegetable' },
  { id: 7, name: 'Grape', category: 'Fruit' },
  { id: 8, name: 'Grapefruit', category: 'Fruit' },
];

export const SearchTypeahead: Story = {
  args: {
    resultsKey: 'name',
    returnedSearchResults: [],
    inputProps: { placeholder: 'Search for a fruit or vegetable…' },
  },
  render: (args) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selected, setSelected] = useState<SearchResult | null>(null);

    const search = (query: string) => {
      setResults(
        query
          ? mockResults.filter((item) =>
              item.name.toLowerCase().includes(query.toLowerCase())
            )
          : []
      );
    };

    return (
      <div style={{ width: '32rem', minHeight: '30rem' }}>
        <EpSearchTypeahead
          {...args}
          returnedSearchResults={results}
          onSearch={search}
          onSelection={(result) => {
            setSelected(result);
            setResults([]);
          }}
          onClear={() => {
            setSelected(null);
            setResults([]);
          }}
        />
        {selected && (
          <p style={{ marginTop: '1rem' }}>
            Selected: {String(selected.name)} ({String(selected.category)})
          </p>
        )}
      </div>
    );
  },
};
