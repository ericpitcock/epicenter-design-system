import React from 'react';

const RightToLeftListBullet = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 5H16" strokeLinecap="round" />
    <path d="M4 12H16" strokeLinecap="round" />
    <path d="M4 19H16" strokeLinecap="round" />
    <path d="M20 5H20.009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 12H20.009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 19H20.009" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

RightToLeftListBullet.displayName = 'RightToLeftListBullet';

export default RightToLeftListBullet;
