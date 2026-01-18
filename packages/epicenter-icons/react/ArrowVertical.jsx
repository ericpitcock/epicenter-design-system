import React from 'react';

const ArrowVertical = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2L12 22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 5L12.0001 2L15 5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 19L12.0001 22L15 19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowVertical.displayName = 'ArrowVertical';

export default ArrowVertical;
