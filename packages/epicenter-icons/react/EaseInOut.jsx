import React from 'react';

const EaseInOut = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 4C11.0535 4 12.9465 20 3 20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

EaseInOut.displayName = 'EaseInOut';

export default EaseInOut;
