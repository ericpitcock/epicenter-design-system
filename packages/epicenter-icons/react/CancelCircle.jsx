import React from 'react';

const CancelCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.9994 15L9 9M9.00064 15L15 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CancelCircle.displayName = 'CancelCircle';

export default CancelCircle;
