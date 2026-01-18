import React from 'react';

const StrokeRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.998 21L20.998 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

StrokeRight.displayName = 'StrokeRight';

export default StrokeRight;
