import React from 'react';

const ChartIncrease = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 21H3V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5 6L15 8M17.5 6L19.5 8M17.5 6C17.5 15.5 11 17 7 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ChartIncrease.displayName = 'ChartIncrease';

export default ChartIncrease;
