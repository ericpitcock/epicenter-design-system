import React from 'react';

const PlayListMinus = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 7H21" strokeLinejoin="round" />
    <path d="M17 2.5L14 7" strokeLinejoin="round" />
    <path d="M10 2.5L7 7" strokeLinejoin="round" />
    <path d="M11 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.5 18H14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PlayListMinus.displayName = 'PlayListMinus';

export default PlayListMinus;
