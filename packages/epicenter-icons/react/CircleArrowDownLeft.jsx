import React from 'react';

const CircleArrowDownLeft = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M9 10.9999V14.9999H13M9.5 14.5L15 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowDownLeft.displayName = 'CircleArrowDownLeft';

export default CircleArrowDownLeft;
