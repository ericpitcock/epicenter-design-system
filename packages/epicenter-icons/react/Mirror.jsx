import React from 'react';

const Mirror = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 7V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6L11 5M11 8.5L13 6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 8V22M4 8V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20H20" strokeLinejoin="round" />
    <path d="M4 12H7M17 12H20" strokeLinejoin="round" />
  </svg>
);

Mirror.displayName = 'Mirror';

export default Mirror;
