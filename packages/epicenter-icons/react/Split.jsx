import React from 'react';

const Split = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 3H3V8M3.5 3.5L12 12V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3H21V8M20.5 3.5L15 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Split.displayName = 'Split';

export default Split;
