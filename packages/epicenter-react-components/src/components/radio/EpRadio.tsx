import React, { ChangeEvent, ReactNode, forwardRef } from 'react';

interface EpRadioProps {
  /** The ID attribute for the radio input element */
  id: string;
  /** Label text displayed next to the radio button */
  label: string;
  /** The name attribute for the radio input (groups radios together) */
  name: string;
  /** The value for this radio option */
  value: string;
  /** Whether this radio is selected */
  checked?: boolean;
  /** If true, disables the radio button */
  disabled?: boolean;
  /** If true, marks the radio as required */
  required?: boolean;
  /** Callback when radio selection changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Optional children to override label */
  children?: ReactNode;
}

/**
 * EpRadio - A radio input component for selecting a single option from a group
 */
const EpRadio = forwardRef<HTMLInputElement, EpRadioProps>(({
  id,
  label,
  name,
  value,
  checked = false,
  disabled = false,
  required = false,
  onChange,
  className = '',
  children,
}, ref) => {
  const classes = ['ep-radio'];
  
  if (checked) classes.push('ep-radio--checked');
  if (disabled) classes.push('ep-radio--disabled');
  if (className) classes.push(className);

  return (
    <label htmlFor={id} className={classes.join(' ')}>
      <input
        ref={ref}
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
      <span className="ep-radio__dot" />
      {children || label}
    </label>
  );
});

EpRadio.displayName = 'EpRadio';

export default EpRadio;
