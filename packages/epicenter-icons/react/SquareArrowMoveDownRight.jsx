import React from 'react';

const SquareArrowMoveDownRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z" strokeLinejoin="round" />
    <path d="M14 17L16 14.5L14 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 7L8 12.5C8 13.6046 8.89543 14.5 10 14.5L16 14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

SquareArrowMoveDownRight.displayName = 'SquareArrowMoveDownRight';

export default SquareArrowMoveDownRight;
