import React from 'react';

const ChartScatter = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18 11H18.009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 4H20.009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 6H11.009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 11H11.009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 16H9.00898" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21H3V3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ChartScatter.displayName = 'ChartScatter';

export default ChartScatter;
