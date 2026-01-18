import React from 'react';

const PlusMinus01 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 3V17M19 10H5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 21H5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PlusMinus01.displayName = 'PlusMinus01';

export default PlusMinus01;
