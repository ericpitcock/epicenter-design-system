import React, { ReactNode } from 'react';

export interface EpStatusIndicatorProps {
  /** If true, the status indicator will pulse */
  pulse?: boolean;
  /** Label or text content next to the indicator */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpStatusIndicator - A status indicator component with optional pulsing animation
 */
export const EpStatusIndicator: React.FC<EpStatusIndicatorProps> = ({ 
  pulse = false, 
  children, 
  className = '' 
}) => {
  const dotClasses = ['ep-status-indicator__dot'];
  if (pulse) {
    dotClasses.push('ep-status-indicator__dot--pulse');
  }

  return (
    <span className={`ep-status-indicator${className ? ` ${className}` : ''}`}>
      <span className={dotClasses.join(' ')} />
      {children}
    </span>
  );
};

EpStatusIndicator.displayName = 'EpStatusIndicator';
