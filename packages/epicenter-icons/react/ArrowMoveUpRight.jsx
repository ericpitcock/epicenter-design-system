import React from 'react';

const ArrowMoveUpRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 3L20 6L17 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 21V8.00012C4 6.89556 4.89542 6.00013 5.99998 6.00012L20 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowMoveUpRight.displayName = 'ArrowMoveUpRight';

export default ArrowMoveUpRight;
