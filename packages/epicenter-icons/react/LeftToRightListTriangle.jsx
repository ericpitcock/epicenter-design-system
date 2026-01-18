import React from 'react';

const LeftToRightListTriangle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 5.5L3 3V8L7 5.5Z" strokeLinejoin="round" />
    <path d="M7 18.5L3 16V21L7 18.5Z" strokeLinejoin="round" />
    <path d="M11 5.5L21 5.5" strokeLinecap="round" />
    <path d="M11 12L21 12" strokeLinecap="round" />
    <path d="M11 18.5L21 18.5" strokeLinecap="round" />
  </svg>
);

LeftToRightListTriangle.displayName = 'LeftToRightListTriangle';

export default LeftToRightListTriangle;
