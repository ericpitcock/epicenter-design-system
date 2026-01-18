import React from 'react';

const SortDescending = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15.5 14L19 17.5L15.5 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 17.5H7C5.89543 17.5 5 16.6046 5 15.5V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 6H19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 10H16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

SortDescending.displayName = 'SortDescending';

export default SortDescending;
