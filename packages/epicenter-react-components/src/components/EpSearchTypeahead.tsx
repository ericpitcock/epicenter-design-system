import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import EpInput from './input/EpInput';

export interface SearchResult {
  [key: string]: unknown;
}

export interface EpSearchTypeaheadProps {
  resultsKey: string;
  returnedSearchResults: SearchResult[];
  inputProps?: React.ComponentProps<typeof EpInput>;
  value?: string;
  onClear?: () => void;
  onSearch?: (query: string) => void;
  onSelection?: (result: SearchResult) => void;
  className?: string;
  [key: string]: unknown;
}

export const EpSearchTypeahead = forwardRef<HTMLDivElement, EpSearchTypeaheadProps>(
  (
    {
      resultsKey,
      returnedSearchResults,
      inputProps = {},
      value: controlledValue,
      onClear,
      onSearch,
      onSelection,
      className = '',
      ...props
    },
    ref
  ) => {
    const [searchQuery, setSearchQuery] = useState(controlledValue || '');
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const resultsListRef = useRef<HTMLDivElement>(null);
    const debounceTimerRef = useRef<NodeJS.Timeout>();

    // Update search query when controlled value changes
    useEffect(() => {
      if (controlledValue !== undefined) {
        setSearchQuery(controlledValue);
      }
    }, [controlledValue]);

    // Update search query when active item changes
    useEffect(() => {
      if (activeItemIndex >= 0 && returnedSearchResults[activeItemIndex]) {
        const activeItem = returnedSearchResults[activeItemIndex];
        setSearchQuery(String(activeItem[resultsKey] || ''));
      }
    }, [activeItemIndex, returnedSearchResults, resultsKey]);

    const resetSearch = () => {
      setSearchQuery('');
      setActiveItemIndex(-1);
      onClear?.();
    };

    const updateActiveItemIndex = (delta: number) => {
      const newIndex = activeItemIndex + delta;

      if (
        returnedSearchResults.length === 0 ||
        newIndex < 0 ||
        newIndex >= returnedSearchResults.length
      ) {
        return;
      }

      setActiveItemIndex(newIndex);
      scrollToSelectedItem(newIndex);
    };

    const scrollToSelectedItem = (index: number) => {
      if (!resultsListRef.current) return;

      const list = resultsListRef.current.children[0] as HTMLElement;
      if (!list) return;

      const selectedItem = list.children[index] as HTMLElement;
      if (!selectedItem) return;

      const dropdownHeight = resultsListRef.current.offsetHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;

      if (itemBottom > dropdownHeight + resultsListRef.current.scrollTop) {
        resultsListRef.current.scrollTop = itemBottom - dropdownHeight;
      } else if (itemTop < resultsListRef.current.scrollTop) {
        resultsListRef.current.scrollTop = itemTop;
      }
    };

    const debouncedSearch = (query: string) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        onSearch?.(query);
      }, 200);
    };

    const handleInput = (newValue: string) => {
      setSearchQuery(newValue);
      setActiveItemIndex(-1);
      debouncedSearch(newValue);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          updateActiveItemIndex(1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          updateActiveItemIndex(-1);
          break;
        case 'Enter':
          e.preventDefault();
          if (returnedSearchResults.length > 0 && activeItemIndex >= 0) {
            handleSelection(returnedSearchResults[activeItemIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          resetSearch();
          break;
      }
    };

    const handleSelection = (result: SearchResult) => {
      onSelection?.(result);
    };

    const handleMouseEnter = (index: number) => {
      setActiveItemIndex(index);
    };

    const mergedInputProps = {
      size: 'default' as const,
      placeholder: 'Search…',
      clearable: true,
      ...inputProps,
    };

    // Click outside handler
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          resultsListRef.current &&
          !resultsListRef.current.contains(e.target as Node)
        ) {
          resetSearch();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // Cleanup debounce timer
    useEffect(() => {
      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
      };
    }, []);

    return (
      <div ref={ref} className={`ep-search-typeahead ${className}`.trim()} {...props}>
        <EpInput
          {...mergedInputProps}
          value={searchQuery}
          onChange={handleInput}
          onClear={resetSearch}
          onKeyDown={handleKeyDown}
          spellCheck={false}
        />
        {returnedSearchResults.length > 0 && (
          <div ref={resultsListRef} className="ep-search-typeahead-dropdown">
            <ul>
              {returnedSearchResults.map((result, index) => (
                <li
                  key={index}
                  className={`ep-search-typeahead-dropdown__item ${
                    index === activeItemIndex
                      ? 'ep-search-typeahead-dropdown__item--active'
                      : ''
                  }`}
                  onClick={() => handleSelection(result)}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  {String(result[resultsKey] || '')}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

EpSearchTypeahead.displayName = 'EpSearchTypeahead';
