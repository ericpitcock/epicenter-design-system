import React from 'react';

const ArrowHorizontal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 12L22 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9L2 12.0001L5 15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 9L22 12.0001L19 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowHorizontal.displayName = 'ArrowHorizontal';

export default ArrowHorizontal;
