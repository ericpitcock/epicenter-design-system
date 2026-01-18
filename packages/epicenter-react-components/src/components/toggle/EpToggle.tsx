import React, { MouseEvent } from 'react';

type ToggleSize = 'small' | 'default' | 'large';

export interface EpToggleProps {
  /** If true, shows the toggle in the active/on state */
  isActive?: boolean;
  /** If true, disables the toggle interaction */
  disabled?: boolean;
  /** Label text displayed next to the toggle */
  label?: string;
  /** The size variant of the toggle */
  size?: ToggleSize;
  /** Callback when toggle is clicked */
  onToggle?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpToggle - A toggle switch component for binary on/off states
 */
export const EpToggle: React.FC<EpToggleProps> = ({
  isActive = false,
  disabled = false,
  label = '',
  size = 'default',
  onToggle,
  className = '',
}) => {
  const classes = ['ep-toggle'];
  
  if (isActive) classes.push('ep-toggle--active');
  if (disabled) classes.push('ep-toggle--disabled');
  if (className) classes.push(className);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
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
