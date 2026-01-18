import React, { forwardRef, ChangeEvent } from 'react';

export interface EpDatePickerFilterProps {
  appliedFilters: Record<string, unknown>;
  filterKey: string;
  columnKey: string;
  value?: string;
  onChange?: (filters: Record<string, string>) => void;
  className?: string;
  [key: string]: unknown;
}

export const EpDatePickerFilter = forwardRef<
  HTMLInputElement,
  EpDatePickerFilterProps
>(
  (
    {
      appliedFilters,
      filterKey,
      columnKey,
      value = '',
      onChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange?.({ [columnKey]: newValue });
    };

    return (
      <div className={`ep-date-picker-filter ${className}`.trim()}>
        <input
          ref={ref}
          type="date"
          value={value || (appliedFilters[columnKey] as string) || ''}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);

EpDatePickerFilter.displayName = 'EpDatePickerFilter';
