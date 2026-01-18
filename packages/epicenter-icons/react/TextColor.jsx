import React from 'react';

const TextColor = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 21H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 18L13 3H11L5.5 18M7.5 13H16.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextColor.displayName = 'TextColor';

export default TextColor;
