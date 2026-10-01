import React, {
  forwardRef,
  useId,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react';

import { EpInput } from '../input/EpInput';

export interface SearchResult {
  [key: string]: unknown;
}

export interface EpSearchTypeaheadProps {
  className?: string;
  inputProps?: React.ComponentProps<typeof EpInput>;
  onClear?: () => void;
  onSearch?: (query: string) => void;
  onSelection?: (result: SearchResult) => void;
  resultsKey: string;
  returnedSearchResults: SearchResult[];
  value?: string;
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
    const rootRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const resultsListRef = useRef<HTMLDivElement>(null);
    const debounceTimerRef = useRef<ReturnType<typeof setTimeout>>();

    const id = useId();
    const listboxId = `${id}-listbox`;
    const optionId = (index: number) => `${id}-option-${index}`;

    const isOpen = returnedSearchResults.length > 0;
    const activeItem: SearchResult | undefined = returnedSearchResults[activeItemIndex];

    const setRootRef = (node: HTMLDivElement | null) => {
      rootRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    // Update search query when controlled value changes
    useEffect(() => {
      if (controlledValue !== undefined) {
        setSearchQuery(controlledValue);
      }
    }, [controlledValue]);

    const cancelPendingSearch = () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };

    const resetSearch = () => {
      cancelPendingSearch();
      setSearchQuery('');
      setActiveItemIndex(-1);
      onClear?.();
    };

    const syncSearchQueryToResult = (result?: SearchResult) => {
      if (result) {
        setSearchQuery(String(result[resultsKey] || ''));
      }
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
      syncSearchQueryToResult(returnedSearchResults[newIndex]);
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
      cancelPendingSearch();
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
          if (activeItem) {
            handleSelection(activeItem);
          }
          break;
        case 'Escape':
          e.preventDefault();
          e.currentTarget.blur();
          resetSearch();
          break;
      }
    };

    const handleSelection = (result: SearchResult) => {
      syncSearchQueryToResult(result);
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

    // The listener outlives the render that attached it; read the latest
    // resetSearch so a changed onClear is never stale.
    const resetSearchRef = useRef(resetSearch);
    resetSearchRef.current = resetSearch;

    // Click outside handler
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          resetSearchRef.current();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    // Cleanup debounce timer
    useEffect(() => {
      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
      };
    }, []);

    return (
      <div ref={setRootRef} className={`ep-search-typeahead ${className}`.trim()} {...props}>
        <EpInput
          {...mergedInputProps}
          ref={inputRef}
          value={searchQuery}
          onChange={handleInput}
          onClear={resetSearch}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={isOpen ? listboxId : undefined}
          aria-activedescendant={activeItem ? optionId(activeItemIndex) : undefined}
        />
        {isOpen && (
          <div ref={resultsListRef} className="ep-search-typeahead-dropdown">
            <ul
              id={listboxId}
              role="listbox"
              aria-label={mergedInputProps.label || mergedInputProps.placeholder}
            >
              {returnedSearchResults.map((result, index) => (
                <li
                  key={index}
                  id={optionId(index)}
                  role="option"
                  aria-selected={index === activeItemIndex}
                  className={`ep-search-typeahead-dropdown__item ${
                    index === activeItemIndex
                      ? 'ep-search-typeahead-dropdown__item--active'
                      : ''
                  }`}
                  onMouseDown={(e) => e.preventDefault()}
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
