import React from 'react';

const Zap = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18 3L14 10H19L8 21L10 13H5L9.5 3H18Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Zap.displayName = 'Zap';

export default Zap;
