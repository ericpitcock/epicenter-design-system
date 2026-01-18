import React from 'react';

const Skew = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="9" cy="4" r="2" strokeLinejoin="round" />
    <circle cx="19" cy="7" r="2" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="2" strokeLinejoin="round" />
    <circle cx="4" cy="18" r="2" strokeLinejoin="round" />
    <path d="M11 5L17 6.5M19 9L20 18.2743M18 20L6 18.5M8 6L4.5 16" strokeLinejoin="round" />
  </svg>
);

Skew.displayName = 'Skew';

export default Skew;
