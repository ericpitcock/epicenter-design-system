import React from 'react';

const StrokeBottom = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M5 17V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5L19 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21L21 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

StrokeBottom.displayName = 'StrokeBottom';

export default StrokeBottom;
