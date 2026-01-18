import React from 'react';

const OneSquare = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M10.5 8.5L12.5 7V17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 21.5L19.5 21.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

OneSquare.displayName = 'OneSquare';

export default OneSquare;
