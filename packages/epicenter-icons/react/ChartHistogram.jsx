import React from 'react';

const ChartHistogram = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 21H3V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 10L13 21M18 13V21M8 13L8 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 7.98693H10C10 6.33729 11.3438 5 12.9934 5C14.6503 5 16 6.34315 16 8L21 7.98693" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ChartHistogram.displayName = 'ChartHistogram';

export default ChartHistogram;
