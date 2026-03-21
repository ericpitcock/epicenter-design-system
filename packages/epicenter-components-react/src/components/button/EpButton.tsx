import { type ReactNode, type ElementType, type Ref, type MouseEvent, type HTMLAttributes } from 'react';

type ButtonSize = 'small' | 'default' | 'large' | 'xlarge';
type ButtonType = 'button' | 'submit';

export type EpButtonProps = {
  /** The aria-label of the button */
  ariaLabel?: string;
  /** Custom component to render as (e.g., a router Link component) */
  as?: ElementType;
  /** Button content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** If true, the button will be disabled */
  disabled?: boolean;
  /** URL destination (renders as anchor when provided) */
  href?: string;
  /** Icon displayed on the left side of the button label */
  iconLeft?: ReactNode;
  /** Icon displayed on the right side of the button label */
  iconRight?: ReactNode;
  /** Click handler */
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** Ref forwarded to the root element */
  ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
  /** The size of the button */
  size?: ButtonSize;
  /** Destination path (used with the `as` prop for router links) */
  to?: string;
  /** The type of the button (only applies when rendered as button element) */
  type?: ButtonType;
} & Omit<HTMLAttributes<HTMLElement>, 'type'>;

/**
 * EpButton - A versatile button component that can render as a button, link, or router link
 */
export function EpButton({
  as,
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
  onClick,
  ref,
  ...rest
}: EpButtonProps) {
  const Element: ElementType = as ?? (href ? 'a' : 'button');

  const computedClasses = [
    'ep-button',
    size !== 'default' && `ep-button--${size}`,
    disabled && 'ep-button--disabled',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled && Element !== 'button') {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const elementProps: Record<string, unknown> = {
    className: computedClasses,
    ref,
    onClick: handleClick,
    'aria-label': ariaLabel || undefined,
    ...rest,
  };

  if (Element === 'button') {
    elementProps.type = type;
    elementProps.disabled = disabled;
  } else {
    if (href) elementProps.href = href;
    if (to) elementProps.to = to;
    if (disabled) elementProps['aria-disabled'] = true;
  }

  return (
    <Element {...elementProps}>
      {iconLeft && (
        <span className="ep-button__icon ep-button__icon--left">
          {iconLeft}
        </span>
      )}
      {children && (
        <span className="ep-button__label">{children}</span>
      )}
      {iconRight && (
        <span className="ep-button__icon ep-button__icon--right">
          {iconRight}
        </span>
      )}
    </Element>
  );
}
