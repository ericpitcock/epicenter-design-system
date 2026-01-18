import React from 'react';

const UnfoldLess = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 4.5L12 10L18 4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 19.5L12 14L18 19.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

UnfoldLess.displayName = 'UnfoldLess';

export default UnfoldLess;
