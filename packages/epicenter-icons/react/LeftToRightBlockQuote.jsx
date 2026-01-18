import React from 'react';

const LeftToRightBlockQuote = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 6H17" strokeLinecap="round" />
    <path d="M9 12H19" strokeLinecap="round" />
    <path d="M9 18H17" strokeLinecap="round" />
    <path d="M5 3V21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LeftToRightBlockQuote.displayName = 'LeftToRightBlockQuote';

export default LeftToRightBlockQuote;
