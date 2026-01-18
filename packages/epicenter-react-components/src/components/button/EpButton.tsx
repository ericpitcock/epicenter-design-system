import React, { useMemo, forwardRef, ReactNode, CSSProperties, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type ButtonSize = 'small' | 'default' | 'large' | 'xlarge';
type ButtonType = 'button' | 'submit';

interface EpButtonProps {
  /** The size of the button */
  size?: ButtonSize;
  /** The aria-label of the button */
  ariaLabel?: string;
  /** If true, the button will be disabled */
  disabled?: boolean;
  /** The type of the button (only applies when rendered as button element) */
  type?: ButtonType;
  /** Router link destination (renders as Link when provided) */
  to?: string;
  /** URL destination (renders as anchor when provided) */
  href?: string;
  /** Icon displayed on the left side of the button label */
  iconLeft?: ReactNode;
  /** Icon displayed on the right side of the button label */
  iconRight?: ReactNode;
  /** Button content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Click handler */
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** Additional props */
  [key: string]: any;
}

/**
 * EpButton - A versatile button component that can render as a button, link, or router link
 */
const EpButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, EpButtonProps>(({
  size = 'default',
  ariaLabel,
  disabled = false,
  type = 'button',
  to,
  href,
  iconLeft,
  iconRight,
  children,
  className = '',
  ...rest
}, ref) => {
  // Determine the element type based on props (matching Vue logic)
  const Element = useMemo(() => {
    if (to) return Link;
    if (href) return 'a';
    return 'button';
  }, [to, href]) as any;

  // Compute dynamic classes (matching Vue computed classes)
  const computedClasses = useMemo(() => {
    const classes = ['ep-button'];
    
    if (size !== 'default') {
      classes.push(`ep-button--${size}`);
    }
    
    if (disabled) {
      classes.push('ep-button--disabled');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  }, [size, disabled, className]);

  // Props specific to different element types
  const elementProps: any = {
    className: computedClasses,
    ref,
    ...rest,
  };

  // Add button-specific props
  if (Element === 'button') {
    elementProps.type = type;
    elementProps.disabled = disabled;
  }

  // Add link-specific props
  if (Element === 'a') {
    elementProps.href = href;
    if (disabled) {
      elementProps['aria-disabled'] = true;
      elementProps.onClick = (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault();
    }
  }

  // Add router-link-specific props
  if (Element === Link) {
    elementProps.to = to;
    if (disabled) {
      elementProps['aria-disabled'] = true;
      elementProps.onClick = (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault();
    }
  }

  // Add aria-label if provided
  if (ariaLabel) {
    elementProps['aria-label'] = ariaLabel;
  }

  return (
    <Element {...elementProps}>
      {iconLeft && (
        <span className="ep-button__icon ep-button__icon--left">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="ep-button__icon ep-button__icon--right">
          {iconRight}
        </span>
      )}
    </Element>
  );
});

EpButton.displayName = 'EpButton';

export default EpButton;
