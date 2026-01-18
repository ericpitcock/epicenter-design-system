import React from 'react';

const GreaterThan = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 4L17 12L7 20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GreaterThan.displayName = 'GreaterThan';

export default GreaterThan;
