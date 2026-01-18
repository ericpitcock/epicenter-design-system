import React from 'react';

const TextSubscript = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M11.5 21H6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 3L9 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 5.5V4C2 3.44772 2.44772 3 3 3H15C15.5523 3 16 3.44772 16 4V5.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 21H18C18 18.779 22 18.8854 22 16.5C22 15.6716 21.1046 15 20 15C18.8954 15 18 15.6716 18 16.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TextSubscript.displayName = 'TextSubscript';

export default TextSubscript;
