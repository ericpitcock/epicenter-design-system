import React from 'react';

const RemoveSquare = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 12H8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

RemoveSquare.displayName = 'RemoveSquare';

export default RemoveSquare;
