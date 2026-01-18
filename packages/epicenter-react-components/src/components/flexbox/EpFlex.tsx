import React, { ReactNode } from 'react';

interface EpFlexProps {
  /** Flex content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpFlex - A flexbox container component
 */
const EpFlex: React.FC<EpFlexProps> = ({ children, className = '' }) => {
  return (
    <div className={`ep-flex${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};

EpFlex.displayName = 'EpFlex';

export default EpFlex;
