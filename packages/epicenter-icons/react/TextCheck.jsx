import React from 'react';

const TextCheck = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M11 16.5L13.25 19L20 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 5H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 10H15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 15H8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextCheck.displayName = 'TextCheck';

export default TextCheck;
