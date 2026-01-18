import React from 'react';

const TextIndentLess = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 4.5H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9.5H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 14.5H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 19.5H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 3V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 8.5L16.5 12L20 15.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextIndentLess.displayName = 'TextIndentLess';

export default TextIndentLess;
