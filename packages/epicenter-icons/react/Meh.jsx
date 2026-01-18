import React from 'react';

const Meh = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 16H15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 9H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9H17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Meh.displayName = 'Meh';

export default Meh;
