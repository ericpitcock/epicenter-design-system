import React from 'react';

const TextUnderline = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21H21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextUnderline.displayName = 'TextUnderline';

export default TextUnderline;
