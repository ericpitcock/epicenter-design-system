import React from 'react';

const NotEqualSignCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M7.5 10H16.5M7.5 14H16.5M9 16L15 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

NotEqualSignCircle.displayName = 'NotEqualSignCircle';

export default NotEqualSignCircle;
