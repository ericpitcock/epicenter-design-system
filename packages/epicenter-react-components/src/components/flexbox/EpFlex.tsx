import React, { ReactNode } from 'react';

export interface EpFlexProps {
  /** Flex content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpFlex - A flexbox container component
 */
export const EpFlex: React.FC<EpFlexProps> = ({ children, className = '' }) => {
  return (
    <div className={`ep-flex${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};

EpFlex.displayName = 'EpFlex';
