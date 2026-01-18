import React from 'react';

const TextWrap = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M12 18L15 15M12 18L15 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 15H9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21H9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextWrap.displayName = 'TextWrap';

export default TextWrap;
