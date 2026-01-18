import React from 'react';

const TransitionLeft = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 20V4C21 3.44772 20.5523 3 20 3H15C14.4477 3 14 3.44772 14 4V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12L9 9M6 12L9 15M6 12L14 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TransitionLeft.displayName = 'TransitionLeft';

export default TransitionLeft;
