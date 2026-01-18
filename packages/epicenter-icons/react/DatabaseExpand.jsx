import React from 'react';

const DatabaseExpand = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 10C14.2091 10 16 9.10457 16 8C16 6.89543 14.2091 6 12 6C9.79086 6 8 6.89543 8 8C8 9.10457 9.79086 10 12 10Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 12C16 13.1046 14.2091 14 12 14C9.79086 14 8 13.1046 8 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 8V16C16 17.1046 14.2091 18 12 18C9.79086 18 8 17.1046 8 16V8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 2H22V6M21.5 2.5L18 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 2H2V6M2.5 2.5L6 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 22H22V18M21.5 21.5L18 18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 22H2V18M2.5 21.5L6 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

DatabaseExpand.displayName = 'DatabaseExpand';

export default DatabaseExpand;
