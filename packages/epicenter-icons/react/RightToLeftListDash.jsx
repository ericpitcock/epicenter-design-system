import React from 'react';

const RightToLeftListDash = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 5H15" strokeLinecap="round" />
    <path d="M19 5H21" strokeLinecap="round" />
    <path d="M3 12H15" strokeLinecap="round" />
    <path d="M19 12H21" strokeLinecap="round" />
    <path d="M3 19H15" strokeLinecap="round" />
    <path d="M19 19H21" strokeLinecap="round" />
  </svg>
);

RightToLeftListDash.displayName = 'RightToLeftListDash';

export default RightToLeftListDash;
