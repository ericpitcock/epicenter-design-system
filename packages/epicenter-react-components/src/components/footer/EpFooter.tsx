import { forwardRef, ReactNode } from 'react';

export interface EpFooterProps {
  [key: string]: any;
  center?: ReactNode;
  className?: string;
  left?: ReactNode;
  right?: ReactNode;
}

export const EpFooter = forwardRef<HTMLDivElement, EpFooterProps>(
  ({ left, center, right, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`ep-footer ${className}`.trim()} {...props}>
        {left && <div className="ep-footer__left">{left}</div>}
        {center && <div className="ep-footer__center">{center}</div>}
        {right && <div className="ep-footer__right">{right}</div>}
      </div>
    );
  }
);

EpFooter.displayName = 'EpFooter';
