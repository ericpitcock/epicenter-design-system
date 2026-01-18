import React from 'react';

const PackageDelivered = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M14.5 17.5L17 20L22 14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 10L20 6L11 2L2 6L11 10Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 4L6 8" strokeLinejoin="round" />
    <path d="M5 12L7 13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 6V18L10.9961 22M10.9961 22V10M10.9961 22L12.6843 21.25M20 6.01357V10.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PackageDelivered.displayName = 'PackageDelivered';

export default PackageDelivered;
