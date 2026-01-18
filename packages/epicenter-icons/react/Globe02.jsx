import React from 'react';

const Globe02 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7.5 12C7.5 18 12 22 12 22C12 22 16.5 18 16.5 12C16.5 6 12 2 12 2C12 2 7.5 6 7.5 12Z" strokeLinejoin="round" />
    <path d="M22 12L2 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Globe02.displayName = 'Globe02';

export default Globe02;
