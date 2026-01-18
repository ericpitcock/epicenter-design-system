import React from 'react';

const StrokeLeft = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3V21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

StrokeLeft.displayName = 'StrokeLeft';

export default StrokeLeft;
