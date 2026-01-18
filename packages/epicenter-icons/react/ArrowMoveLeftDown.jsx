import React from 'react';

const ArrowMoveLeftDown = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 5L16 5.00024C17.1046 5.00026 18 5.89569 18 7.00024V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 2L3 5.00012L6 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 19L18 21.9999L21 19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowMoveLeftDown.displayName = 'ArrowMoveLeftDown';

export default ArrowMoveLeftDown;
