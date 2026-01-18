import React from 'react';

const CircleArrowDownDouble = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M15 13L12 16L9 13M15 8L12 11L9 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowDownDouble.displayName = 'CircleArrowDownDouble';

export default CircleArrowDownDouble;
