import React, { forwardRef, ChangeEvent } from 'react';

export interface EpDatePickerFilterProps {
  [key: string]: unknown;
  appliedFilters: Record<string, unknown>;
  className?: string;
  columnKey: string;
  filterKey: string;
  onChange?: (filters: Record<string, string>) => void;
  value?: string;
}

export const EpDatePickerFilter = forwardRef<
  HTMLInputElement,
  EpDatePickerFilterProps
>(
  (
    {
      appliedFilters,
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
