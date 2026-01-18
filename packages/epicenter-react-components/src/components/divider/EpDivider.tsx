import React from 'react';

type DividerDirection = 'horizontal' | 'vertical';

interface EpDividerProps {
  /** The direction of the divider */
  direction?: DividerDirection;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpDivider - A divider component for visual separation
 */
const EpDivider: React.FC<EpDividerProps> = ({ direction = 'horizontal', className = '' }) => {
  const classes = ['ep-divider', `ep-divider--${direction}`, className].filter(Boolean).join(' ');
  
  return <div className={classes} />;
};

EpDivider.displayName = 'EpDivider';

export default EpDivider;
