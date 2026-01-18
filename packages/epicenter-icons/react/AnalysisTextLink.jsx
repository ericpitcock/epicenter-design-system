import React from 'react';

const AnalysisTextLink = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 21H3V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 4H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 8H12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21L10 13L14.61 16.5L21 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

AnalysisTextLink.displayName = 'AnalysisTextLink';

export default AnalysisTextLink;
