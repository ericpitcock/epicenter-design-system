import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';

export interface EpTextareaProps {
  /** The ID attribute for the textarea element */
  id?: string;
  /** The name attribute for the textarea */
  name?: string;
  /** Placeholder text shown when textarea is empty */
  placeholder?: string;
  /** The value of the textarea */
  value?: string;
  /** If true, disables the textarea */
  disabled?: boolean;
  /** If true, marks the textarea as required */
  required?: boolean;
  /** Number of visible text rows */
  rows?: number;
  /** Number of visible text columns (width) */
  cols?: number;
  /** Maximum character length allowed */
  maxLength?: number;
  /** Minimum character length required */
  minLength?: number;
  /** If true, makes the textarea read-only */
  readOnly?: boolean;
  /** If true, automatically focuses on mount */
  autoFocus?: boolean;
  /** Controls autocomplete behavior */
  autoComplete?: 'on' | 'off';
  /** If true, enables spellcheck */
  spellCheck?: boolean;
  /** Controls how text wraps */
  wrap?: 'soft' | 'hard';
  /** Callback when value changes */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  /** Callback when textarea receives focus */
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback when textarea loses focus */
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpTextarea - A textarea input component with comprehensive configuration options
 */
export const EpTextarea = forwardRef<HTMLTextAreaElement, EpTextareaProps>(({
  id,
  name,
  placeholder,
  value,
  disabled = false,
  required = false,
  rows = 2,
  cols = 20,
  maxLength,
  minLength,
  readOnly = false,
  autoFocus = false,
  autoComplete = 'on',
  spellCheck = false,
  wrap = 'soft',
  onChange,
  onFocus,
  onBlur,
  className = '',
}, ref) => {
  return (
    <div className={`ep-textarea${className ? ` ${className}` : ''}`}>
      <textarea
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        minLength={minLength}
        readOnly={readOnly}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        wrap={wrap}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
});

EpTextarea.displayName = 'EpTextarea';
