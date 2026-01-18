import React from 'react';

const CircleArrowUpRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M15 13V9H11M14.5 9.49994L9 14.9999" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowUpRight.displayName = 'CircleArrowUpRight';

export default CircleArrowUpRight;
