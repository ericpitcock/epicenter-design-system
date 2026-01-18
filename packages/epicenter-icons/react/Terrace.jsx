import React from 'react';

const Terrace = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 14L4 19M4 19L3 22M4 19H7L8 22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 14L20 19M20 19L21 22M20 19H17L16 22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 10L12 22" strokeLinejoin="round" />
    <path d="M11 22H13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 15L15 15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8V10H21V8C17.5 6 15 4.5 12 2C9 4.5 6.5 6 3 8Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Terrace.displayName = 'Terrace';

export default Terrace;
