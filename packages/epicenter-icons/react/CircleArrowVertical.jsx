import React from 'react';

const CircleArrowVertical = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M14 15L12 17L10 15M10 9L12 7L14 9M12 16.5L12 7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowVertical.displayName = 'CircleArrowVertical';

export default CircleArrowVertical;
