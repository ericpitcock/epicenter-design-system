import React from 'react';

const Grimacing = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.00897 9L8 9M16 9L15.991 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 13H10C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13Z" strokeLinejoin="round" />
  </svg>
);

Grimacing.displayName = 'Grimacing';

export default Grimacing;
