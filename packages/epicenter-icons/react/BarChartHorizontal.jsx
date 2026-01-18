import React from 'react';

const BarChartHorizontal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 4V18C3 19.1046 3.89543 20 5 20H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 16L16 16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 12L20 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 8L13 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

BarChartHorizontal.displayName = 'BarChartHorizontal';

export default BarChartHorizontal;
