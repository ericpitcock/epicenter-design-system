import React from 'react';

const PlusMinus02 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 21L21 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 3V11M11 7L3 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 18L13 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PlusMinus02.displayName = 'PlusMinus02';

export default PlusMinus02;
