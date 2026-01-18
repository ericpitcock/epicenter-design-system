import React from 'react';

const Chrome = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.53253 14L4.03125 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 21.5L15.5 14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8H21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Chrome.displayName = 'Chrome';

export default Chrome;
