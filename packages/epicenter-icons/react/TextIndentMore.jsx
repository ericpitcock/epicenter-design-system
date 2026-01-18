import React from 'react';

const TextIndentMore = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15 4.5H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9.5H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14.5H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 19.5H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 3V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 8.5L7.5 12L4 15.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextIndentMore.displayName = 'TextIndentMore';

export default TextIndentMore;
