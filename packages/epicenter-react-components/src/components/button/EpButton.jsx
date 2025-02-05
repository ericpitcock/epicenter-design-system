import React from 'react';
import PropTypes from 'prop-types';
import EpIcon from '../icon/EpIcon';

const EpButton = ({
  element: Element = 'button',
  size = 'default',
  title,
  label,
  iconLeft,
  iconRight,
  disabled = false,
  ariaLabel,
  className = '',
  ...rest
}) => {
  const computedClasses = `ep-button ep-button--${size} ${className}`;

  return (
    <Element
      className={computedClasses}
      title={title}
      aria-label={ariaLabel || label}
      disabled={disabled}
      {...rest}
    >
      {iconLeft && (
        <span className="ep-button__icon ep-button__icon--left">
          <EpIcon {...iconLeft} />
        </span>
      )}
      {label && <span className="ep-button__label">{label}</span>}
      {iconRight && (
        <span className="ep-button__icon ep-button__icon--right">
          <EpIcon {...iconRight} />
        </span>
      )}
    </Element>
  );
};

EpButton.propTypes = {
  element: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'default', 'large', 'xlarge']),
  title: PropTypes.string,
  label: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
};

export default EpButton;
