import React, { MouseEvent, ReactNode } from 'react';

type ButtonSize = 'small' | 'default' | 'large' | 'xlarge';

export interface EpToggleButtonProps {
  /** The label to display inside the button */
  label?: string;
  /** The class to apply when the button is active */
  activeClass?: string;
  /** If true, the button is active/selected */
  isActive?: boolean;
  /** If true, the button is disabled */
  disabled?: boolean;
  /** The aria-label for accessibility */
  ariaLabel?: string;
  /** The size of the button */
  size?: ButtonSize;
  /** Icon to display (ReactNode for flexibility) */
  icon?: ReactNode;
  /** Callback when button is clicked */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpToggleButton - A button component that toggles between active and inactive states
 */
export const EpToggleButton: React.FC<EpToggleButtonProps> = ({
  label = '',
  activeClass = '',
  isActive = false,
  disabled = false,
  ariaLabel,
  size = 'default',
  icon,
  onClick,
  className = '',
}) => {
  const classes = ['ep-button', 'ep-toggle-button'];
  
  if (size !== 'default') classes.push(`ep-button--${size}`);
  if (isActive && !disabled) classes.push(`${activeClass} ep-button--selected`.trim());
  if (disabled) classes.push('ep-button--disabled');
  if (className) classes.push(className);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (onClick) onClick();
  };

  return (
    <button
      className={classes.join(' ')}
      aria-label={ariaLabel || label}
      disabled={disabled}
      onClick={handleClick}
    >
      {icon && <span className="ep-toggle-button__icon">{icon}</span>}
      {label && <span className="ep-toggle-button__label">{label}</span>}
    </button>
  );
};

EpToggleButton.displayName = 'EpToggleButton';
