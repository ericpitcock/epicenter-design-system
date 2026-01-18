import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { EpSearchTypeahead } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Search/EpSearchTypeahead',
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

export const Default: Story = {
  args: {
    resultsKey: 'name',
    returnedSearchResults: mockResults,
    onSearch: (query) => {
      console.log('Searching for:', query);
    },
    onSelection: (result) => {
      console.log('Selected:', result);
    },
    onClear: () => {
      console.log('Search cleared');
    },
  },
};

export const WithCustomInputProps: Story = {
  args: {
    resultsKey: 'name',
    returnedSearchResults: mockResults,
    inputProps: {
      size: 'large',
      placeholder: 'Search items...',
    },
    onSearch: (query) => {
      console.log('Searching for:', query);
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const SearchDemo = () => {
      const [query, setQuery] = useState('');
      const [results, setResults] = useState<typeof mockResults>([]);

      const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
        if (searchQuery) {
          const filtered = mockResults.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setResults(filtered);
        } else {
          setResults([]);
        }
      };

      const handleSelection = (result: typeof mockResults[0]) => {
        console.log('Selected:', result);
        setQuery('');
        setResults([]);
      };

      return (
        <div style={{ width: '400px' }}>
          <EpSearchTypeahead
            resultsKey="name"
            returnedSearchResults={results}
            value={query}
            onSearch={handleSearch}
            onSelection={handleSelection}
            onClear={() => {
              setQuery('');
              setResults([]);
            }}
          />
        </div>
      );
    };

    return <SearchDemo />;
  },
};
