import React from 'react';

const ChartRing = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 9L5 5M16 12H22M12 16V22" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
  </svg>
);

ChartRing.displayName = 'ChartRing';

export default ChartRing;
