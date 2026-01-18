import React, { forwardRef, ReactNode } from 'react';

export interface EpHeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const EpHeader = forwardRef<HTMLDivElement, EpHeaderProps>(
  ({ left, center, right, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`ep-header ${className}`.trim()} {...props}>
        {left && <div className="ep-header__left">{left}</div>}
        {center && <div className="ep-header__center">{center}</div>}
        {right && <div className="ep-header__right">{right}</div>}
      </div>
    );
  }
);

EpHeader.displayName = 'EpHeader';
