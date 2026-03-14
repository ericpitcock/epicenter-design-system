import React, { ReactNode } from 'react';

export interface EpFieldsetProps {
  /** Fieldset content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Label for the fieldset legend */
  label?: string;
}

/**
 * EpFieldset - A fieldset component for grouping form elements
 */
export const EpFieldset: React.FC<EpFieldsetProps> = ({ 
  label = '', 
  children, 
  className = '' 
}) => {
  return (
    <fieldset className={`ep-fieldset ep-fieldset--horizontal${className ? ` ${className}` : ''}`}>
      {label && <legend className="ep-fieldset__legend">{label}</legend>}
      <div className="ep-fieldset__content">
        {children}
      </div>
    </fieldset>
  );
};

EpFieldset.displayName = 'EpFieldset';
