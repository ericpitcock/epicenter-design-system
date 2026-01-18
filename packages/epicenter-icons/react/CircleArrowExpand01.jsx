import React from 'react';

const CircleArrowExpand01 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M11 13L7.5 16.5M7.5 16.5L11 16.5M7.5 16.5L7.50002 13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 7.5L13 11M16.5 7.5L13 7.5M16.5 7.5L16.5 11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowExpand01.displayName = 'CircleArrowExpand01';

export default CircleArrowExpand01;
