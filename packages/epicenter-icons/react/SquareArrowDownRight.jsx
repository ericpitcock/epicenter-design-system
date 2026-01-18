import React from 'react';

const SquareArrowDownRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15 15L9 9M15 15H11M15 15L15 11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z" strokeLinejoin="round" />
  </svg>
);

SquareArrowDownRight.displayName = 'SquareArrowDownRight';

export default SquareArrowDownRight;
