import React, { MouseEvent } from 'react';

type ToggleSize = 'small' | 'default' | 'large';

export interface EpToggleProps {
  /** Additional CSS classes */
  className?: string;
  /** If true, disables the toggle interaction */
  disabled?: boolean;
  /** If true, shows the toggle in the active/on state */
  isActive?: boolean;
  /** Label text displayed next to the toggle */
  label?: string;
  /** Callback when toggle is clicked */
  onToggle?: () => void;
  /** The size variant of the toggle */
  size?: ToggleSize;
}

/**
 * EpToggle - A toggle switch component for binary on/off states
 */
export const EpToggle: React.FC<EpToggleProps> = ({
  isActive = false,
  disabled = false,
  label = '',
  onToggle,
  className = '',
}) => {
  const classes = ['ep-toggle'];
  
  if (isActive) classes.push('ep-toggle--active');
  if (disabled) classes.push('ep-toggle--disabled');
  if (className) classes.push(className);

  const handleClick = () => {
    if (disabled) return;
    if (onToggle) onToggle();
  };

  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      <div className="ep-toggle__track">
        <div className="ep-toggle__thumb" />
      </div>
      {label && <div className="ep-toggle__label">{label}</div>}
    </div>
  );
};

EpToggle.displayName = 'EpToggle';
