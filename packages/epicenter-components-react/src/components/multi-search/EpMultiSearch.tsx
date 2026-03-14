import React, {
  forwardRef,
  useState,
  useRef,
  KeyboardEvent,
  ChangeEvent,
  CSSProperties,
} from 'react';

// Placeholder icons - replace with actual icons when available
const Search01 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const Cancel01 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

interface ParsedQuery {
  and: string[];
  or: string[];
}

export interface EpMultiSearchProps {
  [key: string]: unknown;
  autofocus?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: string;
  className?: string;
  color?: string;
  disabled?: boolean;
  height?: string;
  icon?: boolean;
  onBlur?: (query: ParsedQuery) => void;
  onClear?: (query: ParsedQuery) => void;
  onDelete?: (query: ParsedQuery) => void;
  onEnter?: (query: ParsedQuery) => void;
  onEsc?: (query: ParsedQuery) => void;
  onFocus?: (query: ParsedQuery) => void;
  onInput?: (value: string) => void;
  onQueryClose?: (query: ParsedQuery) => void;
  placeholder?: string;
  queries?: string[];
  value?: string;
  width?: string;
}

export const EpMultiSearch = forwardRef<HTMLDivElement, EpMultiSearchProps>(
  (
    {
      placeholder = '',
      icon = false,
      disabled = false,
      autofocus = false,
      width = '100%',
      height = '5rem',
      borderRadius = 'var(--border-radius)',
      backgroundColor = 'var(--interface-foreground)',
      color = 'var(--text-color)',
      value: controlledValue,
      queries: controlledQueries,
      onInput,
      onFocus,
      onBlur,
      onEnter,
      onEsc,
      onClear,
      onQueryClose,
      onDelete,
      className = '',
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(controlledValue || '');
    const [query, setQuery] = useState<string[]>(controlledQueries || []);
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const isOperator = (term: string) => term === 'AND' || term === 'OR';

    const parseQuery = (queries: string[]): ParsedQuery => {
      const andQueries: string[] = [];
      const orQueries: string[] = [];
      let currentOperator = 'OR';

      queries.forEach((q) => {
        if (isOperator(q)) {
          currentOperator = q;
        } else {
          if (currentOperator === 'AND') {
            andQueries.push(q);
          } else {
            orQueries.push(q);
          }
        }
      });

      return { and: andQueries, or: orQueries };
    };

    const classes = [
      'ep-multi-search',
      icon && 'ep-multi-search--has-icon',
      hasFocus && 'ep-multi-search--focus',
      disabled && 'ep-multi-search--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const clearable = query.length > 0 || value.length > 0;

    const iconStyles: CSSProperties = {
      flex: `0 0 ${height}`,
      height,
    };

    const inputStyles: CSSProperties = {
      width,
      height,
      borderRadius,
      backgroundColor,
      color,
    };

    const placeholderValue =
      value === '' && query.length === 0 ? placeholder : '+ Add to your search';

    const handleQueryClose = (item: string, index: number) => {
      const newQuery = [...query];
      newQuery.splice(index, 1);
      setQuery(newQuery);
      onQueryClose?.(parseQuery(newQuery));
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onInput?.(newValue);
    };

    const handleEsc = () => {
      inputRef.current?.blur();
      onEsc?.(parseQuery(query));
    };

    const handleFocus = () => {
      setHasFocus(true);
      onFocus?.(parseQuery(query));
    };

    const handleBlur = () => {
      setHasFocus(false);
      onBlur?.(parseQuery(query));
    };

    const handleEnter = (_e: KeyboardEvent<HTMLInputElement>) => {
      const trimmedValue = value.trim();
      if (!trimmedValue) return;

      const lastQueryItem = query[query.length - 1];

      if (isOperator(trimmedValue)) {
        // Prevent consecutive operators
        if (!query.length || isOperator(lastQueryItem)) return;
      }

      const newQuery = [...query, trimmedValue];
      setQuery(newQuery);
      onEnter?.(parseQuery(newQuery));
      setValue('');
    };

    const handleDelete = (_e: KeyboardEvent<HTMLInputElement>) => {
      if (value === '') {
        const newQuery = [...query];
        newQuery.pop();
        setQuery(newQuery);
        onDelete?.(parseQuery(newQuery));
      }
    };

    const handleClear = () => {
      setQuery([]);
      setValue('');
      inputRef.current?.focus();
      onClear?.(parseQuery([]));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          handleEnter(e);
          break;
        case 'Backspace':
        case 'Delete':
          handleDelete(e);
          break;
        case 'Escape':
          e.preventDefault();
          handleEsc();
          break;
      }
    };

    return (
      <div ref={ref} className={classes} style={inputStyles} {...props}>
        {icon && (
          <div className="ep-multi-search__icon" style={iconStyles}>
            <Search01 />
          </div>
        )}
        <div className="queries">
          {query.map((item, index) => (
            <div
              key={index}
              className={`query ${isOperator(item) ? 'query--operator' : ''}`}
              onClick={() => handleQueryClose(item, index)}
            >
              <span className="query__text font-size--small">{item}</span>
              <Cancel01 />
            </div>
          ))}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholderValue}
          disabled={disabled}
          autoFocus={autofocus}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
        {clearable && (
          <div
            className="ep-multi-search__clear"
            style={iconStyles}
            onClick={handleClear}
          >
            <Cancel01 />
          </div>
        )}
      </div>
    );
  }
);

EpMultiSearch.displayName = 'EpMultiSearch';
