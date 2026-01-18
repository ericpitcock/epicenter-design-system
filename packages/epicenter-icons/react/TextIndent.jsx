import React from 'react';

const TextIndent = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M11 3.5H21M11 9.5H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 15H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3L6.5 6.5L3 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextIndent.displayName = 'TextIndent';

export default TextIndent;
