import React from 'react';

const TextAllCaps = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M10 21H6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 21H14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 3L8.5 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 3L15.5 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 5.5V4C2 3.44772 2.44772 3 3 3H10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 3H21C21.5523 3 22 3.44772 22 4V5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextAllCaps.displayName = 'TextAllCaps';

export default TextAllCaps;
