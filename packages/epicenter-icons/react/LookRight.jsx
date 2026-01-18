import React from 'react';

const LookRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.009 9H16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14C15.9122 14.6072 17.3645 15 19.0004 15C20.1261 15 20.6645 14.8139 21.5 14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LookRight.displayName = 'LookRight';

export default LookRight;
