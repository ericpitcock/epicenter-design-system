import React from 'react';

const EaseOut = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 20C3 20 10 4 21 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

EaseOut.displayName = 'EaseOut';

export default EaseOut;
