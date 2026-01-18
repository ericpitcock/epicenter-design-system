import React from 'react';

const Archive = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18 2H6C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V5C21 3.34315 19.6569 2 18 2Z" strokeLinejoin="round" />
    <path d="M21 12H3" />
    <path d="M15 7H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 17H9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Archive.displayName = 'Archive';

export default Archive;
