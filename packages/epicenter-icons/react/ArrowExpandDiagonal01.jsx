import React from 'react';

const ArrowExpandDiagonal01 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 8L16 16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7V3H17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17V21H7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 3L15 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 15L3 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowExpandDiagonal01.displayName = 'ArrowExpandDiagonal01';

export default ArrowExpandDiagonal01;
