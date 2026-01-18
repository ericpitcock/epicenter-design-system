import React from 'react';

const Confused = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M8.00897 9H8M16 9H15.991" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 16L15 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Confused.displayName = 'Confused';

export default Confused;
