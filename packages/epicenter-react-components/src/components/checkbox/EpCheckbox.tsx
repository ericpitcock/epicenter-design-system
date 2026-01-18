import React, { ChangeEvent, ReactNode, forwardRef } from 'react';

interface EpCheckboxProps {
  /** The ID of the checkbox */
  id: string;
  /** The label for the checkbox */
  label: string;
  /** The name of the checkbox */
  name: string;
  /** The value of the checkbox */
  value: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is required */
  required?: boolean;
  /** Callback when checkbox state changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Optional children to override label */
  children?: ReactNode;
}

/**
 * EpCheckbox - A checkbox input component with label and various states
 */
const EpCheckbox = forwardRef<HTMLInputElement, EpCheckboxProps>(({
  id,
  label,
  name,
  value,
  checked = false,
  disabled = false,
  indeterminate = false,
  required = false,
  onChange,
  className = '',
  children,
}, ref) => {
  const classes = ['ep-checkbox'];
  
  if (checked) classes.push('ep-checkbox--checked');
  if (disabled) classes.push('ep-checkbox--disabled');
  if (indeterminate) classes.push('ep-checkbox--indeterminate');
  if (className) classes.push(className);

  return (
    <label htmlFor={id} className={classes.join(' ')}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
      {children || label}
    </label>
  );
});

EpCheckbox.displayName = 'EpCheckbox';

export default EpCheckbox;
