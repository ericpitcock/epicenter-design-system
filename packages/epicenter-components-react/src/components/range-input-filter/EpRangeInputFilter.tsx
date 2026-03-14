import React, { forwardRef, useState, ChangeEvent } from 'react';

export interface EpRangeInputFilterProps {
  [key: string]: unknown;
  appliedFilters: Record<string, unknown>;
  className?: string;
  columnKey: string;
  filterKey: string;
  max: number;
  min: number;
  onChange?: (filters: Record<string, number>) => void;
  value?: number;
}

export const EpRangeInputFilter = forwardRef<
  HTMLInputElement,
  EpRangeInputFilterProps
>(
  (
    {
      columnKey,
      min,
      max,
      value,
      onChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const [selectedRange, setSelectedRange] = useState(value ?? 0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setSelectedRange(newValue);
      onChange?.({ [columnKey]: newValue });
    };

    return (
      <div className={`ep-range-input-filter ${className}`.trim()}>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          value={selectedRange}
          onChange={handleChange}
          {...props}
        />
        <span>{selectedRange}</span>
      </div>
    );
  }
);

EpRangeInputFilter.displayName = 'EpRangeInputFilter';
