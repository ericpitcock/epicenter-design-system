import React from 'react';

type DividerDirection = 'horizontal' | 'vertical';

export interface EpDividerProps {
  /** Additional CSS classes */
  className?: string;
  /** The direction of the divider */
  direction?: DividerDirection;
}

/**
 * EpDivider - A divider component for visual separation
 */
export const EpDivider: React.FC<EpDividerProps> = ({ direction = 'horizontal', className = '' }) => {
  const classes = ['ep-divider', `ep-divider--${direction}`, className].filter(Boolean).join(' ');
  
  return <div className={classes} />;
};

EpDivider.displayName = 'EpDivider';
