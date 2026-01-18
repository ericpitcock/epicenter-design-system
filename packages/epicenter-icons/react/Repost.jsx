import React from 'react';

const Repost = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8.5 15L5 18.5L8.5 22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 18.5L19 18.5C20.1046 18.5 21 17.6046 21 16.5L21 11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 2L19 5.5L15.5 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 5.5L5 5.5C3.89543 5.5 3 6.39543 3 7.5L3 13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Repost.displayName = 'Repost';

export default Repost;
