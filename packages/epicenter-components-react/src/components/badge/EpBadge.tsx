import { ReactNode } from 'react';

export interface EpBadgeProps {
  /** Badge content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** The label to display in the badge */
  label?: string;
}

/**
 * EpBadge - A badge component for displaying labels or status
 */
export const EpBadge = ({ label = '', children, className = '' }: EpBadgeProps) => {
  return (
    <div className={`ep-badge${className ? ` ${className}` : ''}`}>
      {children || label}
    </div>
  );
};

EpBadge.displayName = 'EpBadge';
