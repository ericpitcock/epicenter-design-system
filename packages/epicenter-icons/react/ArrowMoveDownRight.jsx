import React from 'react';

const ArrowMoveDownRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 3V15.9999C4 17.1044 4.89542 17.9999 5.99998 17.9999L20 18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 21L20 18L17 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowMoveDownRight.displayName = 'ArrowMoveDownRight';

export default ArrowMoveDownRight;
