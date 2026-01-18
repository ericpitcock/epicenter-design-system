import React, { ReactNode } from 'react';

export interface EpBadgeProps {
  /** The label to display in the badge */
  label?: string;
  /** Badge content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpBadge - A badge component for displaying labels or status
 */
export const EpBadge: React.FC<EpBadgeProps> = ({ label = '', children, className = '' }) => {
  return (
    <div className={`ep-badge${className ? ` ${className}` : ''}`}>
      {children || label}
    </div>
  );
};

EpBadge.displayName = 'EpBadge';
