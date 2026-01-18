import React, { ReactNode, forwardRef } from 'react';

interface EpContainerProps {
  /** Header content of the container */
  header?: ReactNode;
  /** Main content of the container */
  children?: ReactNode;
  /** Footer content of the container */
  footer?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpContainer - A container component with optional header and footer sections
 */
const EpContainer = forwardRef<HTMLDivElement, EpContainerProps>(({
  header,
  children,
  footer,
  className = ''
}, ref) => {
  return (
    <div ref={ref} className={`ep-container${className ? ` ${className}` : ''}`}>
      {header && (
        <div className="ep-container__header">
          {header}
        </div>
      )}
      <div className="ep-container__content">
        {children}
      </div>
      {footer && (
        <div className="ep-container__footer">
          {footer}
        </div>
      )}
    </div>
  );
});

EpContainer.displayName = 'EpContainer';

export default EpContainer;
