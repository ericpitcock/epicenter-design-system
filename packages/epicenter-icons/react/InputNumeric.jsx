import React from 'react';

const InputNumeric = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9H7V15M6 15H8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 9H14V12H11V15H14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

InputNumeric.displayName = 'InputNumeric';

export default InputNumeric;
