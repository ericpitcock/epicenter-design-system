import React from 'react';

const SingRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="16" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.00897 9H8M16 9H15.991" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

SingRight.displayName = 'SingRight';

export default SingRight;
