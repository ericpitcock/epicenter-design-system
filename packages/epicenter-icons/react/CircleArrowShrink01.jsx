import React from 'react';

const CircleArrowShrink01 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M11 7.5V11H7.5M10.5 10.5L7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 13H13V16.5M13.5 13.5L16.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowShrink01.displayName = 'CircleArrowShrink01';

export default CircleArrowShrink01;
