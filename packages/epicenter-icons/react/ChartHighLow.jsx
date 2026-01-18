import React from 'react';

const ChartHighLow = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 21H3V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 7L12 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 7L20 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 15L10 15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 15L18 15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 5L10 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 5L18 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ChartHighLow.displayName = 'ChartHighLow';

export default ChartHighLow;
