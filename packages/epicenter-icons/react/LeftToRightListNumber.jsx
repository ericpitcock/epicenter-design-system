import React from 'react';

const LeftToRightListNumber = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 15H6V18H3.00034V21H6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3H4.5V9M4.5 9H3M4.5 9H6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 6L21 6" strokeLinecap="round" />
    <path d="M11 12L21 12" strokeLinecap="round" />
    <path d="M11 18L21 18" strokeLinecap="round" />
  </svg>
);

LeftToRightListNumber.displayName = 'LeftToRightListNumber';

export default LeftToRightListNumber;
