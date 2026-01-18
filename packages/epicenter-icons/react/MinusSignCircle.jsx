import React from 'react';

const MinusSignCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M16 12H8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
  </svg>
);

MinusSignCircle.displayName = 'MinusSignCircle';

export default MinusSignCircle;
