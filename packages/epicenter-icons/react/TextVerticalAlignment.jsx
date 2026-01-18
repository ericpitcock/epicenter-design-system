import React from 'react';

const TextVerticalAlignment = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M13 4.5L22 4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 8.5L22 8.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12.5H22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 20.5L22 20.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 16.5L22 16.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 9L5.5 3H4.5L2 9M3.5 6.5H6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 22L5.5 16H4.5L2 22M3.5 19.5H6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextVerticalAlignment.displayName = 'TextVerticalAlignment';

export default TextVerticalAlignment;
